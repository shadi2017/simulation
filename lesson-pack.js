/* Lesson pack: detailed content + per-lesson simulation + lesson-specific MCQs.
   Key = "gradeIndex-lessonIndex". Add more entries to extend the curriculum. */
window.LESSON_PACK={
'0-0':{
 sim:{type:'order',emoji:['🍞','🧀','🥪'],goal:{ar:'رتّب الخطوات عشان تعمل ساندويتش جبنة.',en:'Put the steps in order to make a cheese sandwich.'},
  items:[{ar:'هات الخبز',en:'Get the bread'},{ar:'حط الجبنة',en:'Add the cheese'},{ar:'اقفل الساندويتش',en:'Close the sandwich'}]},
 ar:{steps:['الكمبيوتر جهاز بيعمل بالظبط اللي نقوله له، مش بيخمّن ولا بيفهم "تقريباً".','الخوارزمية هي مجموعة خطوات صغيرة مترتبة بتحل مشكلة معينة، زي وصفة الأكل.','الترتيب مهم جداً: لو حطيت الجبنة قبل الخبز، النتيجة هتبوظ.','كل خطوة لازم تكون واضحة وبسيطة، عشان أي حد (أو روبوت) ينفذها من غير ما يسألك.'],
  example:'لعبة "الروبوت البشري": زميلك بيمثّل روبوت، وإنت بتقوله "ارفع القلم" ثم "حطه على الدسك". لو عكست الترتيب هيحاول يحط القلم قبل ما يرفعه.',mistake:'غلطة شائعة: خطوة كبيرة زي "اعمل ساندويتش" بدون تفاصيل. الحل: قسّمها لخطوات صغيرة.',
  q:[{t:'إيه هي الخوارزمية؟',o:['خطوات صغيرة مترتبة بتحل مشكلة','لعبة على الموبايل','نوع من الكمبيوتر'],a:0,why:'الخوارزمية = خطوات مترتبة وواضحة.'},
     {t:'لو بدّلنا ترتيب خطوات الساندويتش، إيه اللي يحصل؟',o:['النتيجة ممكن تتغير أو تبوظ','مفيش فرق خالص','الكمبيوتر هيصلحها لوحده'],a:0,why:'الكمبيوتر بينفذ بالترتيب اللي اتكتب.'},
     {t:'أنهي خطوة أوضح لروبوت؟',o:['اعمل أكل','هات الخبز','اتصرف'],a:1,why:'الخطوة الصغيرة والواضحة هي اللي بتتنفذ صح.'}]},
 en:{steps:['A computer does exactly what we tell it. It cannot guess what we "kind of" mean.','An algorithm is a set of small steps, in order, that solves a problem, like a recipe.','Order matters: cheese before bread breaks the sandwich.','Each step must be clear and simple so anyone, or any robot, can follow it without asking you.'],
  example:'In the "Human Robot" game a classmate acts as the robot. You say "pick up the pencil", then "put it on the desk". Swap them and the robot tries to put the pencil down before holding it.',mistake:'Common mistake: one huge step like "make a sandwich". Fix: split it into small steps.',
  q:[{t:'What is an algorithm?',o:['Small ordered steps that solve a problem','A phone game','A type of computer'],a:0,why:'An algorithm is clear steps in order.'},
     {t:'What happens if we swap the sandwich steps?',o:['The result may change or break','Nothing changes','The computer fixes it itself'],a:0,why:'A computer follows the order it is given.'},
     {t:'Which step is clearest for a robot?',o:['Make food','Get the bread','Figure it out'],a:1,why:'Small, clear steps can be followed exactly.'}]}},
'0-3':{
 sim:{type:'repeat',emoji:'👏',target:5,goal:{ar:'الأغنية فيها ٥ تصفيقات. اكتب عدد التكرار الصح.',en:'The song has 5 claps. Type the right repeat count.'}},
 ar:{steps:['الحلقة (Loop) بتكرر نفس الأوامر أكتر من مرة بدل ما نكتبها كل مرة.','تقدر تلاقي التكرار في الأغاني والرقص والشعر: "صفّق، صفّق، صفّق" = كرر صفّق ٣ مرات.','الشكل العام: كرر [عدد] مرات { الأمر }. العدد لازم يطابق اللي محتاجه بالظبط.','الحلقة بتوفر وقت وبتقلل الغلط، لأن عندنا أمر واحد بس نراجعه.'],
  example:'روتين الصبح: "اغسل سنانك" بتتكرر ٢ مرة في اليوم. بدل ما تكتبها مرتين، تكتب: كرر ٢ مرة { اغسل سنانك }.',mistake:'غلطة شائعة: تكتب عدد تكرار غلط (٤ بدل ٥) فالنتيجة تنقص. الحل: عدّ الخطوات الأول وبعدين اكتب العدد.',
  q:[{t:'الحلقة بتعمل إيه؟',o:['بتكرر أوامر معينة','بتمسح البرنامج','بتغير لون الشاشة'],a:0,why:'الحلقة = تكرار.'},
     {t:'"صفّق ٣ مرات" ممكن نكتبها إزاي؟',o:['كرر ٣ مرات { صفّق }','كرر مرة { ٣ }','صفّق مرتين'],a:0,why:'العدد بعد كلمة كرر هو عدد المرات.'},
     {t:'ليه الحلقة مفيدة؟',o:['بتوفر كتابة وبتقلل الأخطاء','بتخلي البرنامج أبطأ','مفيش فايدة'],a:0,why:'أمر واحد أسهل في المراجعة.'}]},
 en:{steps:['A loop repeats the same commands many times instead of writing them again and again.','Loops hide in songs, dances and poems: "clap, clap, clap" = repeat clap 3 times.','General shape: repeat [number] times { command }. The number must match exactly what you need.','Loops save time and reduce mistakes because there is only one command to check.'],
  example:'Morning routine: "brush teeth" happens 2 times a day. Instead of writing it twice, write: repeat 2 times { brush teeth }.',mistake:'Common mistake: a wrong count (4 instead of 5) leaves the result short. Fix: count the steps first, then write the number.',
  q:[{t:'What does a loop do?',o:['Repeats commands','Deletes the program','Changes screen color'],a:0,why:'A loop is repetition.'},
     {t:'How can we write "clap 3 times"?',o:['repeat 3 times { clap }','repeat 1 time { 3 }','clap twice'],a:0,why:'The number after repeat is the count.'},
     {t:'Why are loops useful?',o:['They save writing and cut mistakes','They slow the program','They are not useful'],a:0,why:'One command is easier to check.'}]}}
};
window.PACKS={};
window.packId=()=>`${app.term?'t2-':''}${app.grade}-${app.lesson}`;
window.packKey=()=>{const k=packId();return (!app.term&&window.LESSON_PACK[k])||window.PACKS[k]||null};
window.packSimOK=()=>{const P=packKey();return !!(P&&(P.sim||P[app.lang]?.act))};
window.packText=()=>{const P=packKey();return P&&P[app.lang]};
window.addPackDetail=function(){
 const k=packId();
 if(!(!app.term&&window.LESSON_PACK[k])&&!(k in PACKS)){PACKS[k]=null;fetch(`content/${app.term?'t2-':''}g${app.grade}-l${app.lesson}.json`).then(r=>r.ok?r.json():null).then(j=>{if(j){PACKS[k]=j;if(packId()===k)render()}}).catch(()=>{})}
 const P=packText();if(!P)return;const el=document.createElement('section');el.className='learning-note';
 el.innerHTML=`<strong>${app.lang==='ar'?'شرح الدرس بالتفصيل':'Full lesson explanation'}</strong><ol></ol><p class="pack-ex"></p><p class="pack-mis"></p><p class="pack-rec"></p>`;
 P.steps.forEach(t=>{const li=document.createElement('li');li.textContent=t;$('ol',el).append(li)});
 $('.pack-ex',el).textContent=(app.lang==='ar'?'مثال تطبيقي: ':'Worked example: ')+P.example;$('.pack-mis',el).textContent=(app.lang==='ar'?'غلطة شائعة: ':'Common mistake: ')+P.mistake.replace(/^[^:]*:\s*/,'');if(P.recap)$('.pack-rec',el).textContent=(app.lang==='ar'?'الخلاصة: ':'Recap: ')+P.recap;
 const sr=packKey().sources;if(sr&&sr.length){const d=document.createElement('p');d.append((app.lang==='ar'?'مصادر رسمية: ':'Official sources: '));sr.forEach(x=>{const a=document.createElement('a');a.href=x.url;a.target='_blank';a.rel='noreferrer';a.textContent=x.title;d.append(a,' · ')});el.append(d)}
 $('.explanation').after(el);if(P.sections)el.after(packSections(P,packKey().lang));
};
window.packSim=function(box){if(!packKey().sim)return actEngine(box,packKey()[app.lang].act);return packSimOld(box)};
window.packSimOld=function(box){
 const S=packKey().sim,ar=app.lang==='ar',g=S.goal[app.lang],out=m=>{$('#demoOutput').textContent=m};
 box.innerHTML=`<p class="playground-caption">${g}</p><div id="simArea" class="demo-controls"></div><div class="demo-controls" style="margin-top:9px"><button class="demo-control accent" id="simRun">${ar?'شغّل':'Run'}</button><button class="demo-control" id="simReset">${tr('reset')}</button></div><div class="scene-demo" id="simStage" style="min-height:48px"></div><div class="demo-output" id="demoOutput">${tr('output')}</div>`;
 const area=$('#simArea'),stage=$('#simStage');let picked=[];
 if(S.type==='order'){const idx=S.items.map((_,i)=>i).reverse();
  const draw=()=>{area.innerHTML='';idx.forEach(i=>{const b=document.createElement('button');b.className='demo-control';b.textContent=S.items[i][app.lang];b.disabled=picked.includes(i);b.onclick=()=>{picked.push(i);draw()};area.append(b)});stage.textContent=picked.map(i=>S.items[i][app.lang]).join(' ← ')};draw();
  $('#simRun').onclick=()=>{const ok=picked.length===S.items.length&&picked.every((v,i)=>v===i);stage.textContent=ok?S.emoji.join(' '):'💥';out(ok?(ar?'الترتيب صح، الخوارزمية اشتغلت!':'Correct order, the algorithm works!'):(ar?'الترتيب مش مظبوط أو ناقص، جرّب تاني.':'Order is wrong or incomplete, try again.'))};
  $('#simReset').onclick=()=>{picked=[];draw();out(tr('output'))}}
 else{area.innerHTML=`<span>${ar?'كرر':'Repeat'}</span><input class="demo-input" id="simN" type="number" min="1" max="9" value="1" style="width:70px"><span>${ar?'مرات':'times'}</span>`;
  $('#simRun').onclick=()=>{const k=Math.max(1,Math.min(9,+$('#simN').value||1));stage.textContent=S.emoji.repeat(k);out(k===S.target?(ar?'تمام! العدد مطابق للأغنية.':'Great! The count matches the song.'):(k<S.target?(ar?'ناقص، زوّد العدد.':'Too few, increase the count.'):(ar?'زيادة، قلل العدد.':'Too many, decrease the count.')))};
  $('#simReset').onclick=()=>{$('#simN').value=1;stage.textContent='';out(tr('output'))}}
};

window.actEngine=function(box,A){
 const ar=app.lang==='ar',sh=a=>[...a].sort(()=>Math.random()-.5),esc=t=>String(t).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
 box.innerHTML=`<p class="playground-caption"><strong>${esc(A.title||'')}</strong><br>${esc(A.goal||'')}</p><div id="actBody"></div><div class="demo-controls" style="margin-top:9px"><button class="demo-control" id="actReset">${tr('reset')}</button></div><div class="demo-output" id="demoOutput">${tr('output')}</div>`;
 const body=$('#actBody'),out=m=>{$('#demoOutput').textContent=m},win=()=>out('🎉 '+A.success),bad=m=>out(m||(ar?'جرّب تاني، قريب!':'Try again, close!'));
 const btn=(t,f,cls)=>{const b=document.createElement('button');b.className='demo-control '+(cls||'');b.textContent=t;b.onclick=()=>f(b);return b};
 const code=t=>{const p=document.createElement('pre');p.dir='ltr';p.style.cssText='text-align:left;white-space:pre-wrap;margin:6px 0';p.textContent=t;return p};
 const run={
 order(){let pick=[];const idx=sh(A.items.map((_,i)=>i)),box1=document.createElement('div'),line=document.createElement('p');box1.className='demo-controls';
  const draw=()=>{box1.innerHTML='';idx.forEach(i=>{const b=btn(A.items[i],()=>{pick.push(i);draw()});b.disabled=pick.includes(i);box1.append(b)});line.textContent=pick.map(i=>A.items[i]).join('  ←  ')};
  const chk=btn(ar?'شغّل':'Run',()=>pick.length===A.items.length&&pick.every((v,i)=>v===i)?win():bad(ar?'الترتيب مش مظبوط، اضغط إعادة وجرّب.':'Order is not right yet; press reset and try again.'),'accent');
  body.append(box1,line,chk);draw();this.reset=()=>{pick=[];draw()}},
 match(){let sel=null,left=A.pairs.map((p,i)=>i),right=sh(left),n=0;const wrap=document.createElement('div');wrap.className='demo-controls';
  const L=document.createElement('div'),R=document.createElement('div');[L,R].forEach(d=>{d.style.cssText='display:flex;flex-direction:column;gap:6px;flex:1'});
  const lb=left.map(i=>btn(A.pairs[i][0],b=>{if(b.disabled)return;lb.forEach(x=>x.classList.remove('accent'));sel=i;b.classList.add('accent')})),
        rb=right.map(i=>btn(A.pairs[i][1],b=>{if(b.disabled||sel===null)return;if(sel===i){b.disabled=true;lb[i].disabled=true;lb[i].classList.remove('accent');sel=null;if(++n===A.pairs.length)win();else out('✔')}else bad()}));
  lb.forEach(b=>L.append(b));rb.forEach(b=>R.append(b));wrap.append(L,R);body.append(wrap);this.reset=()=>run.match.call(this,body.innerHTML='')}, 
 bucket(){const ch=A.items.map(()=>null),list=document.createElement('div');
  A.items.forEach((it,i)=>{const row=document.createElement('div');row.className='demo-controls';row.append(Object.assign(document.createElement('span'),{textContent:it.t,style:'flex:1'}));
   A.buckets.forEach((name,bi)=>row.append(btn(name,b=>{ch[i]=bi;[...row.querySelectorAll('button')].forEach(x=>x.classList.remove('accent'));b.classList.add('accent')})));list.append(row)});
  body.append(list,btn(ar?'تحقق':'Check',()=>{const wrong=A.items.filter((it,i)=>ch[i]!==it.b).length;wrong===0?win():bad(ar?`في ${n(wrong)} اختيار غلط أو ناقص.`:`${wrong} choice(s) wrong or missing.`)},'accent'));this.reset=()=>run.bucket.call(this,body.innerHTML='')},
 predict(){body.append(code(A.code));const d=document.createElement('div');d.className='demo-controls';A.options.forEach((o,i)=>d.append(btn(o,()=>i===A.a?win():bad())));body.append(d);this.reset=()=>out(tr('output'))},
 fill(){let ok=0;A.items.forEach(it=>{const row=document.createElement('div'),p=document.createElement('p');p.dir='auto';p.textContent=it.text;row.append(p);const d=document.createElement('div');d.className='demo-controls';it.options.forEach((o,i)=>d.append(btn(o,b=>{if(i===it.a){b.classList.add('accent');d.querySelectorAll('button').forEach(x=>x.disabled=true);if(++ok===A.items.length)win();else out('✔')}else bad()})));row.append(d);body.append(row)});this.reset=()=>out(tr('output'))},
 bug(){const pre=document.createElement('div');A.lines.forEach((ln,i)=>{const b=btn(ln,()=>{if(i===A.bug){win();out('🎉 '+A.success+'  ✔ '+A.fix)}else bad(ar?'السطر ده سليم، دوّر تاني.':'That line is fine, look again.')});b.dir='ltr';b.style.cssText='display:block;text-align:left;width:100%;margin:3px 0;font-family:monospace';pre.append(b)});body.append(pre);this.reset=()=>out(tr('output'))}
 };
 const eng=Object.create(run);eng[A.type]();$('#actReset').onclick=()=>{if(A.type==='order')eng.reset();else{body.innerHTML='';eng[A.type]()}out(tr('output'))};
};

window.getPy=()=>window._py||(window._py=new Promise((res,rej)=>{const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';s.onload=()=>loadPyodide().then(res,rej);s.onerror=()=>{window._py=null;rej(new Error('Could not load Python (check internet)'))};document.head.append(s)}));
window.packSections=function(P,lang){
 const ar=app.lang==='ar',live=['html','css','javascript'].includes(lang),root=document.createElement('section'),mk=(tag,txt,st)=>{const e=document.createElement(tag);if(txt!=null)e.textContent=txt;if(st)e.style.cssText=st;return e};
 root.className='pack-sections';root.append(mk('h3',ar?'الشرح الكامل والأمثلة':'Full tutorial with examples'));
 P.sections.forEach((s,i)=>{const box=mk('div',null,'margin:14px 0;padding:12px;border:1px solid rgba(128,128,128,.3);border-radius:10px');
  box.append(mk('h4',`${i+1}. ${s.h}`),mk('p',s.text));
  const pre=mk('pre',null,'direction:ltr;text-align:left;white-space:pre-wrap;background:rgba(128,128,128,.12);padding:10px;border-radius:8px;overflow:auto');pre.textContent=s.code;if(s.code)box.append(pre);
  if(live&&s.code){const ed=mk('textarea',s.code,'display:none;width:100%;min-height:150px;direction:ltr;text-align:left;font-family:monospace'),fr=mk('iframe',null,'display:none;width:100%;height:220px;background:#fff;border:1px solid #bbb;border-radius:8px;margin-top:6px');fr.setAttribute('sandbox','allow-scripts');
   const run=mk('button',ar?'جرّبها بنفسك ▶':'Try it Yourself ▶');run.className='demo-control accent';run.onclick=()=>{pre.style.display='none';ed.style.display='block';fr.style.display='block';fr.srcdoc=ed.value};
   const go=mk('button',ar?'شغّل':'Run');go.className='demo-control';go.onclick=()=>{fr.srcdoc=ed.value};box.append(run,' ',go,ed,fr)}
  if(lang==='python'&&s.code){const ed=mk('textarea',s.code,'display:none;width:100%;min-height:150px;direction:ltr;text-align:left;font-family:monospace'),res=mk('pre',null,'display:none;direction:ltr;text-align:left;background:#111;color:#9f9;padding:10px;border-radius:8px;white-space:pre-wrap'),b=mk('button',ar?'شغّل بايثون ▶':'Run Python ▶');b.className='demo-control accent';
   b.onclick=async()=>{pre.style.display='none';ed.style.display='block';res.style.display='block';res.textContent=ar?'جاري تجهيز بايثون (أول مرة بتاخد وقت)...':'Loading Python (first time takes a while)...';let out='';try{const py=await getPy();py.setStdout({batched:t=>out+=t+'\n'});py.setStderr({batched:t=>out+=t+'\n'});py.setStdin({stdin:()=>prompt('input')});await py.runPythonAsync(ed.value)}catch(e){out+=String(e.message||e).split('\n').slice(-3).join('\n')}res.textContent=out||(ar?'(مفيش ناتج)':'(no output)')};box.append(b,' ',ed,res)}
  if(s.output)box.append(mk('p',(live?(ar?'النتيجة: ':'Result: '):(ar?'الناتج: ':'Output: '))+s.output,'font-weight:600'));
  root.append(box)});
 if(P.reference?.length){const tb=mk('table',null,'width:100%;border-collapse:collapse;margin:10px 0');P.reference.forEach(r=>{const tr_=mk('tr'),a=mk('td',r.name,'border:1px solid rgba(128,128,128,.3);padding:6px;direction:ltr;font-family:monospace'),b=mk('td',r.desc,'border:1px solid rgba(128,128,128,.3);padding:6px');tr_.append(a,b);tb.append(tr_)});root.append(mk('h4',ar?'جدول مرجعي':'Quick reference'),tb)}
 if(P.exercises?.length){root.append(mk('h4',ar?'تمارين':'Exercises'));P.exercises.forEach(x=>{const d=mk('details');d.append(mk('summary',x.q));const c=mk('pre',x.a,'direction:ltr;text-align:left;white-space:pre-wrap');d.append(c);root.append(d)})}
 return root};

window.PROJ={};
window.projData=()=>{const k=`${app.term?2:1}-${app.grade}`;if(!(k in PROJ)){PROJ[k]=null;fetch(`content/project-t${app.term?2:1}-g${app.grade}.json`).then(r=>r.ok?r.json():null).then(j=>{if(j){PROJ[k]=j;if(app.view==='projects')render()}}).catch(()=>{})}return PROJ[k]};
window.addProjectDetail=function(PJ){if(!PJ)return;const L=PJ[app.lang],ar=app.lang==='ar';$$('#projectsView .project-card').forEach((card,i)=>{const p=L[i];if(!p)return;const d=document.createElement('details');d.innerHTML=`<summary>${ar?'خطوات التنفيذ ومعايير التقييم':'Steps & grading rubric'}</summary><ol></ol><h4>${ar?'معايير التقييم':'Rubric'}</h4><ul></ul><p></p>`;(p.steps||[]).forEach(x=>{const li=document.createElement('li');li.textContent=x;$('ol',d).append(li)});(p.rubric||[]).forEach(x=>{const li=document.createElement('li');li.textContent=x;$('ul',d).append(li)});$('p',d).textContent=(ar?'تحدي إضافي: ':'Stretch goal: ')+(p.stretch||'');card.append(d)})};
