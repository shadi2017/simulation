// Generates rich bilingual lessons + a per-lesson activity into content/gX-lY.json (resumable).
// Reads curriculum.txt (your full syllabus, optional) and official docs (MDN, Python, pandas, Matplotlib, Git, Scratch Wiki) as grounding.
// Usage: node build-content.mjs            -> all 9 grades (skips files that already exist)
//        node build-content.mjs 1 3        -> only grade 1, lesson 3 (1-based)   |   add --force to overwrite
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
try { for (const l of readFileSync(path.join(root, '.env'), 'utf8').split(/\r?\n/)) { const m = l.match(/^\s*([A-Z][A-Z0-9_]*)\s*=\s*(.*?)\s*$/); if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, ''); } } catch {}
if (!process.env.GEMINI_API_KEY) { console.error('Put GEMINI_API_KEY in .env first.'); process.exit(1); }
const src = readFileSync(path.join(root, 'app.js'), 'utf8');
const start = src.indexOf('const rawGrades'), end = src.indexOf('\n];', start) + 3;
const rawGrades = new Function(src.slice(start, end).replace(/const rawGrades\s*=/, 'return') + ';')();
const cs = src.indexOf('const capstones'), capstones = new Function(src.slice(cs, src.indexOf('const capstonesAr')).replace(/const capstones\s*=/, 'return').trim().replace(/;$/, '') + ';')();
const models = [process.env.GEMINI_MODEL || 'gemini-3.8-flash', ...(process.env.GEMINI_FALLBACK_MODELS || 'gemini-3.5-flash-lite,gemini-3.1-flash-lite').split(',').map(s => s.trim()).filter(Boolean)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const SYSTEM = `You are an expert children's coding teacher (Egypt, ages 6-14, Grades 1-9) and curriculum writer. Output ONLY valid JSON.
Write "ar" in simple, warm Egyptian-flavoured Arabic a child understands; write "en" in simple English. Both must teach the SAME content.
Use official-documentation-level accuracy (Scratch, MDN/W3Schools, Python docs, pandas docs), in your own words; never copy text.
Schema for each of "ar" and "en": {
 "steps": [6 strings, each 30-50 words, progressive: idea -> small example -> how it works -> second example -> rule of thumb -> real-life use],
 "example": "worked example with reasoning, 70-110 words (include tiny code or a concrete scenario when the lesson is code)",
 "mistake": "one common mistake and how to fix it, 30-50 words",
 "recap": "2 sentences summary",
 "q": [3 items {"t": question about THIS lesson, "o": [3 options], "a": index 0-2 of correct option, "why": short reason}; vary the correct index],
 "act": ONE interactive activity that practises exactly this lesson, chosen from:
  {"type":"order","title","goal","items":[4-6 strings in CORRECT order],"success"}
  {"type":"match","title","goal","pairs":[[left,right] x4],"success"}
  {"type":"bucket","title","goal","buckets":[nameA,nameB],"items":[{"t":text,"b":0 or 1} x6],"success"}
  {"type":"predict","title","goal","code":"short snippet or scenario","options":[3],"a":index,"success"}
  {"type":"bug","title","goal","lines":[4-6 code/instruction lines],"bug":index of wrong line,"fix":"corrected line","success"}
}
"success" = a fun sentence showing the RESULT (what the program/robot did). The activity must differ in idea from other lessons: use real content of this lesson. Both languages must use the same activity type and the same answer positions.`;
async function ask(prompt) {
  for (const model of models) for (let a = 0; a < 3; a++) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
      method: 'POST', headers: { 'x-goog-api-key': process.env.GEMINI_API_KEY, 'content-type': 'application/json' },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: SYSTEM }] }, contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { maxOutputTokens: 16000, responseMimeType: 'application/json' } }), signal: AbortSignal.timeout(240_000)
    }).catch(() => null);
    if (res?.ok) { const d = await res.json(); const t = d.candidates?.[0]?.content?.parts?.map(p => p.text || '').join(''); try { return JSON.parse(t); } catch { continue; } }
    if (res && ![429, 500, 503].includes(res.status)) break;
    await sleep(8000);
  }
  return null;
}

// ---- full syllabus: save your curriculum document as curriculum.txt (UTF-8) next to this file ----
const cur = {};
if (existsSync(path.join(root, 'curriculum.txt'))) {
  let g = -1;
  for (const blk of readFileSync(path.join(root, 'curriculum.txt'), 'utf8').replace(/\r/g, '').split(/\n(?=Grade \d+:|Lesson \d+:)/)) {
    const gm = blk.match(/^Grade (\d+):/); if (gm) g = +gm[1] - 1;
    const lm = blk.match(/^Lesson (\d+):\s*(.+)/);
    if (lm && g >= 0) cur[`${g}-${+lm[1] - 1}`] = { title: lm[2].trim(), sub: ((blk.match(/Sub-topics:\s*([\s\S]*?)(?:\n.{0,3}Resources|$)/) || [])[1] || '').replace(/\s+/g, ' ').trim() };
  }
  console.log(`curriculum.txt: ${Object.keys(cur).length} lessons parsed`);
} else console.log('No curriculum.txt found: using the lesson list inside app.js.');
// ---- official documentation grounding ----
const UA = { 'user-agent': 'CodeLab-curriculum-builder/1.0 (education)' };
const DOCS = [[/turtle/i, 'https://docs.python.org/3/library/turtle.html'], [/exception|try\/except|error/i, 'https://docs.python.org/3/tutorial/errors.html'], [/reading|writing|file/i, 'https://docs.python.org/3/tutorial/inputoutput.html'], [/dictionar|lists/i, 'https://docs.python.org/3/tutorial/datastructures.html'], [/function|def /i, 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions'], [/loop|if\/elif|logic checks|branching/i, 'https://docs.python.org/3/tutorial/controlflow.html'], [/variable|input\(/i, 'https://docs.python.org/3/tutorial/introduction.html'], [/pandas|dataframe|csv|groupby|messy|sorting and querying/i, 'https://pandas.pydata.org/docs/user_guide/10min.html'], [/matplotlib|chart|plot|pie|scatter/i, 'https://matplotlib.org/stable/users/explain/quick_start.html'], [/tkinter|gui/i, 'https://docs.python.org/3/library/tkinter.html'], [/\bgit\b|github|repositor/i, 'https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F'], [/readme|markdown/i, 'https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-readmes']];
const text = h => h.replace(/<(script|style|nav|header|footer)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
async function page(url, max = 5500) { try { const r = await fetch(url, { headers: UA, signal: AbortSignal.timeout(20_000) }); return r.ok ? text(await r.text()).slice(0, max) : ''; } catch { return ''; } }
async function sourcesFor(lang, title, sub) {
  const found = [], q = `${title} ${sub}`;
  if (['html', 'css', 'javascript'].includes(lang)) {
    try { const r = await (await fetch(`https://developer.mozilla.org/api/v1/search?q=${encodeURIComponent(title + ' ' + (lang === 'html' ? 'HTML' : lang === 'css' ? 'CSS' : 'JavaScript'))}&locale=en-US`, { headers: UA, signal: AbortSignal.timeout(20_000) })).json(); for (const d of (r.documents || []).slice(0, 2)) found.push({ title: `MDN: ${d.title}`, url: `https://developer.mozilla.org${d.mdn_url}` }); } catch {}
  } else if (['python', 'git'].includes(lang)) {
    for (const [re, url] of DOCS) if (re.test(q) && found.length < 2 && !found.some(f => f.url === url)) found.push({ title: new URL(url).hostname.replace('www.', '') + ' docs', url });
  } else if (lang === 'scratch') {
    try { const s = await (await fetch(`https://en.scratch-wiki.info/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(title)}&srlimit=1&format=json`, { headers: UA, signal: AbortSignal.timeout(20_000) })).json(); const t = s.query?.search?.[0]?.title; if (t) found.push({ title: `Scratch Wiki: ${t}`, url: `https://en.scratch-wiki.info/wiki/${encodeURIComponent(t.replace(/ /g, '_'))}` }); } catch {}
  }
  const excerpts = []; for (const f of found) { const t = await page(f.url); if (t) excerpts.push(`[${f.title}] ${t}`); }
  return { list: found, excerpts: excerpts.join('\n\n') };
}
const LESSON_RULES = (lang, want) => { const live = ['html', 'css', 'javascript'].includes(lang), code = live || ['python', 'git'].includes(lang); return `
LESSON FORMAT (W3Schools-style: short clear explanation, then MANY small examples, a reference table, exercises; own wording, never copied). Add to BOTH "ar" and "en" these extra keys:
 "sections": [8-10 items {"h": heading, "text": 60-110 words explaining ONE idea simply, with a real-life analogy for kids, "code": ${live ? 'a COMPLETE small standalone HTML document (include <style>/<script> as needed) that runs and visibly demonstrates the idea in an iframe' : code ? 'a short runnable ' + lang + ' example with comments' : 'a short example shown in a box: steps, block-style pseudocode (e.g. repeat 3 times: clap) or a mini scenario'}, "output": "${live ? 'one sentence describing what the page shows' : code ? 'exact expected output' : 'what happens as a result'}"}] going from basics to the full scope of the lesson (cover every syllabus sub-topic; the sections together must be a complete mini-lesson),
 "reference": [6-10 items {"name": ${code ? 'tag/property/function/method/command' : 'key word'}, "desc": one-line meaning}],
 "exercises": [3 items {"q": a small task, "a": solution or answer}].
ACTIVITY: the "act" must be of type "${want}" (exactly this type, with the fields listed above) and built from this lesson's real content, so it differs from other lessons. Type "fill" = {"type":"fill","title","goal","items":[3 x {"text": sentence or code containing ___, "options":[3], "a": index}],"success"}.`; };
const TYPES = ['order', 'match', 'bucket', 'predict', 'bug', 'fill'];
const langOf = (g, l, S) => S?.[g]?.lessons?.[l]?.lang || (g === 0 ? 'unplugged' : g === 1 ? 'scratchjr' : g === 2 ? 'scratch' : g === 3 ? 'html' : g === 4 ? 'css' : g === 5 ? 'javascript' : g === 6 ? (l < 4 ? 'javascript' : 'python') : 'python');
const valid = (j, code) => ['ar', 'en'].every(l => (j?.[l]?.sections?.length >= 5) && j?.[l]?.steps?.length >= 4 && j[l].q?.length === 3 && j[l].q.every(q => q.o?.length === 3 && q.a >= 0 && q.a < 3) && TYPES.includes(j[l].act?.type)) && j.ar.act.type === j.en.act.type;
mkdirSync(path.join(root, 'content'), { recursive: true });
const flags = process.argv.slice(2), args = flags.filter(a => !a.startsWith('--')).map(Number), force = flags.includes('--force'), term2 = flags.includes('--term2');
const ROT = ['order', 'match', 'bucket', 'predict', 'fill', 'bug'];
let S = null;
const ALLOWED = [['unplugged'], ['scratchjr'], ['scratch'], ['html'], ['css'], ['javascript'], ['javascript', 'python'], ['python'], ['python', 'git']];
const norm = x => { x?.lessons?.forEach(y => { y.en = y.titleEn || y.en; y.ar = y.titleAr || y.ar; }); return x; };
const okSyl = (x, g) => x?.lessons?.length === 10 && x.lessons.every(y => typeof y.en === 'string' && y.en.length < 80 && y.en.split(/\s+/).length <= 10 && y.ar && ALLOWED[g].includes(y.lang) && y.teaching?.length >= 3 && y.explainAr);
if (term2) { // Term 2 syllabus: designed once from your Term 1 lessons; edit content/term2-syllabus.json by hand if you like, then re-run.
  const sf = path.join(root, 'content', 'term2-syllabus.json');
  S = existsSync(sf) && !flags.includes('--resyllabus') ? JSON.parse(readFileSync(sf, 'utf8')).map(norm) : [];
  for (let g = 0; g < rawGrades.length; g++) {
    if (okSyl(S[g], g)) continue;
    const G = rawGrades[g]; process.stdout.write(`Term 2 syllabus, grade ${g + 1} ... `);
    const others = rawGrades.filter((_, i) => i !== g).map(x => x.en).join(' | ');
    const prompt = `Design TERM 2 (second semester) of Grade ${g + 1}, course: "${G.en}" (${G.levelEn}). Term 1 already covered: ${G.lessonNamesEn.join('; ')}.\nSCOPE RULES: stay strictly inside this grade's course and age; NEVER teach topics that belong to other grades' courses (${others}). Allowed lesson "lang" values for this grade: ${ALLOWED[g].join(' or ')}. Titles must be SHORT (max 8 words, like "Nested Conditions"), never sentences.\nTerm 2 = 10 NEW lessons (no repeats) that continue and deepen this course in a logical order following official documentation topics, the last lesson integrating the term.\nReturn JSON {"lessons":[10 x {"titleEn":"short title","titleAr":"short Arabic title","sub":"semicolon-separated sub-topics","lang":"${ALLOWED[g].join('|')}","teaching":[4 short English sentences: idea, example, small task, tip],"explainAr":"2-sentence simple Arabic explanation","exampleEn":"one sentence","exampleAr":"one sentence","practiceEn":"one sentence","practiceAr":"one sentence"}]}`;
    let j = null; for (let t = 0; t < 3 && !okSyl(j, g); t++) j = norm(await ask(prompt));
    if (okSyl(j, g)) { S[g] = j; console.log('ok'); } else { delete S[g]; console.log('FAILED (re-run)'); }
    await sleep(4000);
  }
  writeFileSync(sf, JSON.stringify(Array.from({ length: rawGrades.length }, (_, g) => S[g] || null), null, 1));
  if (rawGrades.every((_, g) => okSyl(S[g], g))) writeFileSync(path.join(root, 'content', 'term2.js'), 'window.TERM2=' + JSON.stringify(S.map(x => ({ lessonNamesEn: x.lessons.map(y => y.en), lessonNamesAr: x.lessons.map(y => y.ar), teachingEn: x.lessons.map(y => y.teaching), arabicExplanations: x.lessons.map(y => y.explainAr), examplesEn: x.lessons.map(y => y.exampleEn), examplesAr: x.lessons.map(y => y.exampleAr), practiceEn: x.lessons.map(y => y.practiceEn), practiceAr: x.lessons.map(y => y.practiceAr) }))) + ';');
  else { console.error('\nSyllabus incomplete: run the same command again until every grade says ok.'); process.exit(1); }
}
if (flags.includes('--projects')) { // detailed capstone projects per grade and term -> content/project-tN-gX.json
  for (let g = 0; g < rawGrades.length; g++) {
    if (args[0] && g + 1 !== args[0]) continue;
    const file = path.join(root, 'content', `project-t${term2 ? 2 : 1}-g${g}.json`); if (existsSync(file) && !force) continue;
    const G = rawGrades[g], titles = term2 ? S[g].lessons.map(x => x.en) : G.lessonNamesEn;
    process.stdout.write(`Projects T${term2 ? 2 : 1} G${g + 1} ... `);
    const proj = `{"title","desc":"2 sentences","tags":[3 short],"steps":[6-8 clear build steps],"rubric":[4 grading criteria],"stretch":"extra challenge"}`;
    let j = null; for (let t = 0; t < 3 && !(j?.en?.length === 3 && j?.ar?.length === 3 && j.en.every(p => p.steps?.length >= 5)); t++) j = await ask(`Grade ${g + 1}: ${G.en}, TERM ${term2 ? 2 : 1}. Lessons covered this term: ${titles.join('; ')}.\n${term2 ? 'Design 3 NEW, different capstone project options that integrate the whole term.' : `Improve and detail these 3 capstone options: ${capstones[g].map(c => c[0] + ': ' + c[1]).join(' | ')}`}\nReturn JSON {"en":[3 x ${proj}],"ar":[same 3 projects in simple Egyptian-flavoured Arabic]}. Projects must be doable by the grade's age in 1-2 weeks using only what was taught.`);
    if (j?.en?.length === 3) { writeFileSync(file, JSON.stringify(j, null, 1)); console.log('ok'); } else console.log('FAILED (re-run)');
    await sleep(5000);
  }
  process.exit(0);
}
let done = 0, failed = [];
for (let g = 0; g < rawGrades.length; g++) for (let l = 0; l < 10; l++) {
  if (args[0] && g + 1 !== args[0]) continue; if (args[1] && l + 1 !== args[1]) continue;
  const file = path.join(root, 'content', `${term2 ? 't2-' : ''}g${g}-l${l}.json`);
  if (existsSync(file) && !force) continue;
  const G = rawGrades[g], C = term2 ? null : cur[`${g}-${l}`], L2 = term2 ? S[g].lessons[l] : null;
  const title = term2 ? L2.en : (C?.title || G.lessonNamesEn[l]), sub = term2 ? L2.sub : (C?.sub || '');
  const lang = langOf(g, l, S), code = ['html', 'css', 'javascript', 'python', 'git'].includes(lang);
  let want = ROT[(g * 2 + l + (term2 ? 3 : 0)) % ROT.length]; if (!code && want === 'bug') want = 'predict';
  const src = await sourcesFor(lang, title, sub);
  const prompt = `Grade ${g + 1}: ${G.en} (${G.levelEn}), TERM ${term2 ? 2 : 1}. Lesson ${l + 1}/10: "${title}" / Arabic title: "${term2 ? L2.ar : G.lessonNamesAr[l]}".\n${sub ? `Syllabus sub-topics (cover ALL of them): ${sub}\n` : ''}Seed idea: ${term2 ? L2.teaching[0] + ' Practice: ' + L2.practiceEn : G.teachingEn[l][0] + ' Practice: ' + G.practiceEn[l]}\n${src.excerpts ? `OFFICIAL DOCUMENTATION EXCERPTS (base every technical fact on these; paraphrase, never copy; do not invent API details):\n${src.excerpts}\n` : 'No excerpts available: rely only on well-established facts from the official documentation of the topic.\n'}Expand into the full JSON lesson now.`;
  process.stdout.write(`${term2 ? 'T2 ' : ''}G${g + 1} L${l + 1} ${title} [${want}] ... `);
  let j = null; for (let t = 0; t < 3 && !valid(j); t++) j = await ask(prompt + LESSON_RULES(lang, want));
  if (valid(j)) { j.lang = lang; j.sources = src.list; j.grounded = src.excerpts.length > 0; writeFileSync(file, JSON.stringify(j, null, 1)); done++; console.log(j.grounded ? 'ok (official docs)' : 'ok (no web excerpts)'); } else { failed.push(`G${g + 1} L${l + 1}`); console.log('FAILED'); }
  await sleep(5000);
}
console.log(`\nDone: ${done} lessons written.${failed.length ? ' Failed (re-run to retry): ' + failed.join(', ') : ''}`);
