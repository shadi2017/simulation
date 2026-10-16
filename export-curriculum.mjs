// Builds printable curriculum-ar.html / curriculum-en.html from content/*.json (open in Word, or Print -> Save as PDF).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url)), rd = f => JSON.parse(readFileSync(path.join(root, f), 'utf8')), has = f => existsSync(path.join(root, f));
const src = readFileSync(path.join(root, 'app.js'), 'utf8'), st = src.indexOf('const rawGrades');
const rawGrades = new Function(src.slice(st, src.indexOf('\n];', st) + 3).replace(/const rawGrades\s*=/, 'return') + ';')();
const S = has('content/term2-syllabus.json') ? rd('content/term2-syllabus.json') : null;
const esc = t => String(t ?? '').replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const css = `body{font-family:'Noto Sans Arabic','Segoe UI',Tahoma,Arial,sans-serif;max-width:900px;margin:auto;padding:20px;line-height:1.7;color:#222}pre{direction:ltr;text-align:left;background:#f3f3f3;padding:10px;border-radius:6px;white-space:pre-wrap;font-size:13px}table{border-collapse:collapse;width:100%}td,th{border:1px solid #bbb;padding:5px}.grade{page-break-before:always}.lesson{margin:24px 0;padding-top:10px;border-top:2px solid #ccc}h3{page-break-after:avoid}@media print{a{color:#000}}`;
for (const lang of ['ar', 'en']) {
  const ar = lang === 'ar', T = ar ? { grade: 'الصف', term: 'الترم', les: 'الدرس', ex: 'مثال', mis: 'غلطة شائعة', rec: 'الخلاصة', ref: 'جدول مرجعي', exr: 'تمارين', act: 'النشاط', q: 'أسئلة', src: 'المصادر', no: '(لم يُولَّد بعد)', proj: 'مشروع التخرج', stp: 'الخطوات', rub: 'معايير التقييم', str: 'تحدي إضافي' } : { grade: 'Grade', term: 'Term', les: 'Lesson', ex: 'Example', mis: 'Common mistake', rec: 'Recap', ref: 'Quick reference', exr: 'Exercises', act: 'Activity', q: 'Quiz', src: 'Sources', no: '(not generated yet)', proj: 'Capstone projects', stp: 'Steps', rub: 'Rubric', str: 'Stretch goal' };
  let h = `<!doctype html><html lang="${lang}" dir="${ar ? 'rtl' : 'ltr'}"><meta charset="utf-8"><title>Code Lab</title><style>${css}</style><h1>${ar ? 'مختبر البرمجة: المنهج الكامل' : 'Code Lab: Full Curriculum'}</h1>`;
  rawGrades.forEach((G, g) => {
    h += `<section class="grade"><h1>${T.grade} ${g + 1}: ${esc(G[lang])}</h1>`;
    for (const term of S ? [1, 2] : [1]) {
      h += `<h2>${T.term} ${term}</h2>`;
      for (let l = 0; l < 10; l++) {
        const name = term === 2 ? S[g].lessons[l][lang] : G[ar ? 'lessonNamesAr' : 'lessonNamesEn'][l], f = `content/${term === 2 ? 't2-' : ''}g${g}-l${l}.json`;
        h += `<div class="lesson"><h3>${T.les} ${l + 1}: ${esc(name)}</h3>`;
        if (!has(f)) { h += `<p><em>${T.no}</em></p></div>`; continue; }
        const J = rd(f), P = J[lang];
        h += `<ol>${P.steps.map(x => `<li>${esc(x)}</li>`).join('')}</ol><p><b>${T.ex}:</b> ${esc(P.example)}</p><p><b>${T.mis}:</b> ${esc(P.mistake)}</p>${P.recap ? `<p><b>${T.rec}:</b> ${esc(P.recap)}</p>` : ''}`;
        for (const s of P.sections || []) h += `<h4>${esc(s.h)}</h4><p>${esc(s.text)}</p>${s.code ? `<pre>${esc(s.code)}</pre>` : ''}${s.output ? `<p><i>${esc(s.output)}</i></p>` : ''}`;
        if (P.reference?.length) h += `<h4>${T.ref}</h4><table>${P.reference.map(r => `<tr><td dir="ltr">${esc(r.name)}</td><td>${esc(r.desc)}</td></tr>`).join('')}</table>`;
        if (P.exercises?.length) h += `<h4>${T.exr}</h4><ol>${P.exercises.map(x => `<li>${esc(x.q)}<pre>${esc(x.a)}</pre></li>`).join('')}</ol>`;
        if (P.act) h += `<h4>${T.act}: ${esc(P.act.title)}</h4><p>${esc(P.act.goal)}</p>`;
        h += `<h4>${T.q}</h4><ol>${P.q.map(q => `<li>${esc(q.t)}<ul>${q.o.map((o, i) => `<li>${i === q.a ? '<b>✔ ' : ''}${esc(o)}${i === q.a ? '</b>' : ''}</li>`).join('')}</ul></li>`).join('')}</ol>`;
        if (J.sources?.length) h += `<p><small>${T.src}: ${J.sources.map(x => `<a href="${esc(x.url)}">${esc(x.title)}</a>`).join(' · ')}</small></p>`;
        h += '</div>';
      }
      const pf = `content/project-t${term}-g${g}.json`;
      if (has(pf)) h += `<h3>${T.proj}</h3>${rd(pf)[lang].map(p => `<div class="lesson"><h4>${esc(p.title)}</h4><p>${esc(p.desc)}</p><b>${T.stp}</b><ol>${p.steps.map(x => `<li>${esc(x)}</li>`).join('')}</ol><b>${T.rub}</b><ul>${(p.rubric || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul><p>${T.str}: ${esc(p.stretch)}</p></div>`).join('')}`;
    }
    h += '</section>';
  });
  writeFileSync(path.join(root, `curriculum-${lang}.html`), h + '</html>'); console.log(`curriculum-${lang}.html written`);
}
