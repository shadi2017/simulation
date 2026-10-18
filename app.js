const rawGrades = [
  {
    en:'Algorithmic Thinking & Screenless Logic', ar:'التفكير الخوارزمي والمنطق بدون شاشة', levelEn:'Elementary · Foundations', levelAr:'الابتدائية · تأسيس', demo:'grid',
    lessonNamesEn:['Algorithms & Sequenced Instructions','Map Navigation & Direction','Mouse Skills: Click, Drag & Drop','Finding Loops in Daily Routines','Loops in Maze Navigation','Understanding Bugs','Hands-on Debugging','Everyday If/Then Choices','Coding with Conditions','Drawing Shapes with Code'],
    lessonNamesAr:['الخوارزميات وترتيب التعليمات','التنقل على الخريطة والاتجاهات','مهارات الفأرة: النقر والسحب','اكتشاف التكرار في الروتين اليومي','الحلقات في المتاهة','فهم الأخطاء البرمجية','تدريبات عملية على التصحيح','اختيارات إذا/فإن من حياتنا','البرمجة باستخدام الشروط','رسم الأشكال باستخدام الكود'],
    teachingEn:[
      ['An algorithm is a set of small instructions that solves a problem. Put the steps in order so another person can follow them.','To make a sandwich: get bread, add cheese, close the sandwich. The order matters.','Write three steps that help a classroom robot pick up a pencil.','Name the goal, then give clear steps in order.'],
      ['A grid map is made of rows and columns. Directions tell a character which neighboring square to visit next.','If the library is two squares to the right, say “right, right” instead of “go over there.”','Guide the robot from its square to the star using short direction steps.','Count squares and choose one direction at a time.'],
      ['A mouse moves a pointer. A click chooses, a double-click opens, and dragging moves something while the button is held.','Drag a puzzle-piece picture onto the matching outline, then let go.','Practice clicking one shape, then drag it into its matching place.','Hold the button while moving, and release it at the destination.'],
      ['A loop repeats a group of instructions. It saves time when the same action happens more than once.','Clap, clap, clap can be written as “repeat clap 3 times.”','Find a repeated action in your morning routine and say how many times it happens.','Group identical steps and tell the loop how many times to repeat.'],
      ['A maze route may repeat the same turns. A loop can replace many copies of those turns.','For a path that goes forward four squares: repeat “forward” 4 times.','Look at the grid. Find a stretch that repeats and replace it with one repeat instruction.','Use a loop for repeated moves, but check where it ends.'],
      ['A bug is a mistake that makes instructions do something unexpected. Bugs are clues: they help us find what to fix.','If a robot turns left when it should turn right, the direction instruction is the bug.','Follow a short route and point to the step that sends the robot the wrong way.','Compare the instruction with the goal and find the first step that differs.'],
      ['Debugging means testing instructions, finding a mistake, and changing it. Test again after each small fix.','If a route misses the star, change one turn and try the route again.','Use the grid to try a route. If it misses, change one move and retest it.','Change one instruction at a time so you know which fix worked.'],
      ['A condition is a choice based on what is true. “If it is raining, take an umbrella” has a condition and an action.','If the traffic light is red, stop; otherwise, wait for the safe signal.','Make an if/then rule for crossing the playground safely.','Say what to check first, then choose the action for each result.'],
      ['A computer can follow a condition to choose a path. The condition should be clear enough to answer yes or no.','If the square is blue, move up; otherwise, move right.','Choose a rule that helps a character take the blue path only when it sees blue.','Check the condition before choosing which instruction to run.'],
      ['Code can give a drawing robot directions. Repeating the same turn and move can make a regular shape.','Move forward, turn a little, and repeat four times to draw a square.','Plan four sides for a square: decide how far to move and when to turn.','Repeat the same side-and-turn pattern to close the shape.']
    ],
    examplesEn:['A robot needs the steps “pick up the book” and then “put it on the desk.” Swapping them changes the result.','A treasure is three squares up and one square left. A short route is easier to check than “go near the tree.”','Click a blue puzzle piece, drag it to the blue outline, then release it.','A dance repeats the same two moves. “Repeat these moves 4 times” is shorter than writing them four times.','Five forward moves can become “repeat forward 5 times.” The loop count must match the path.','The robot reaches the wall because one step says “forward” instead of “turn.”','A robot misses the star. Change only the last turn, then run the route again.','If the light is red, stop. If it is green and the crossing is clear, walk.','If the path tile is blue, go up; if it is not blue, go right.','Four equal sides with the same turn make a square.'],
    examplesAr:['يحتاج الروبوت إلى «التقط الكتاب» ثم «ضعه على المكتب». تبديلهما يغيّر النتيجة.','الكنز يبعد ثلاث خانات للأعلى وخانة لليسار. المسار القصير أسهل في المراجعة من «اذهب قرب الشجرة».','انقر قطعة الأحجية الزرقاء، واسحبها إلى الإطار الأزرق، ثم اتركها.','تتكرر حركتان في الرقصة. «كرّر الحركتين ٤ مرات» أقصر من كتابتهما أربع مرات.','يمكن اختصار خمس حركات للأمام إلى «كرّر التقدم ٥ مرات». يجب أن يطابق العدد طول الطريق.','وصل الروبوت إلى الحائط لأن إحدى الخطوات قالت «تقدّم» بدلًا من «انعطف».','لم يصل الروبوت إلى النجمة. غيّر الانعطاف الأخير فقط، ثم جرّب المسار ثانية.','إذا كانت الإشارة حمراء فتوقف. وإذا كانت خضراء والطريق آمنًا فاعبر.','إذا كان المربع أزرق فاتجه للأعلى، وإذا لم يكن أزرق فاتجه لليمين.','أربعة أضلاع متساوية مع الانعطاف نفسه ترسم مربعًا.'],
    practiceEn:['Write the instructions to put your school bag by the door.','Reach the star by giving one direction at a time.','Drag each shape to its matching outline.','Describe one repeated action as a repeat block.','Use a repeat block to cross a straight part of the maze.','Spot the wrong turn in a three-step route.','Fix a route that stops one square before the star.','Make an if/then rule for choosing a jacket.','Choose a path using a color condition.','Plan a square using four repeated sides.'],
    practiceAr:['اكتب خطوات وضع حقيبتك المدرسية بجوار الباب.','صل إلى النجمة بتحديد اتجاه واحد في كل مرة.','اسحب كل شكل إلى الإطار المطابق له.','حوّل حركة تتكرر إلى أمر تكرار.','استخدم أمر تكرار لعبور جزء مستقيم من المتاهة.','اكتشف الانعطاف الخاطئ في مسار من ثلاث خطوات.','أصلح مسارًا يتوقف قبل النجمة بمربع واحد.','اكتب قاعدة إذا/فإن لاختيار معطف.','اختر طريقًا باستخدام شرط اللون.','خطط لرسم مربع بأربعة أضلاع متكررة.']
  },
  {
    en:'Creative Storytelling (ScratchJr)', ar:'الحكي الإبداعي باستخدام ScratchJr', levelEn:'Elementary · Creative coding', levelAr:'الابتدائية · برمجة إبداعية', demo:'story',
    lessonNamesEn:['Explore the ScratchJr Workspace','Motion Blocks & Grid Steps','Tap and Bump Triggers','Record a Voice & Add Sounds','Speech Bubbles, Grow & Hide','Sprite Speed & Waiting','Repeat Actions with Loops','Move Between Story Pages','Send Messages Between Sprites','Plan an Interactive Story'],
    lessonNamesAr:['استكشاف مساحة ScratchJr','كتل الحركة وخطوات الشبكة','مثيرات اللمس والاصطدام','تسجيل الصوت وإضافة المؤثرات','فقاعات الكلام والتكبير والإخفاء','سرعة الشخصية والانتظار','تكرار الأفعال باستخدام الحلقات','التنقل بين صفحات القصة','إرسال الرسائل بين الشخصيات','تخطيط قصة تفاعلية'],
    teachingEn:[
      ['A ScratchJr project has characters, a background, and instruction blocks. A start block tells the character when to begin.','Choose a cat, add a park background, and connect a green-flag block to a move block.','Choose a character and backdrop, then decide what should happen first.','Choose the character, scene, and start event before adding actions.'],
      ['Motion blocks move a character a number of grid steps. Small moves are easier to control than guessing.','A move-right block set to 3 takes the character three squares to the right.','Move a character to a spot, then use the numbers to return it to its start.','Count the steps and check the character’s new place.'],
      ['A trigger starts a script when an event happens, such as a tap or a bump. The script contains the response.','When the dog bumps the ball, make the ball roll away.','Set a tap to make a character jump, or a bump to make it say something.','Match each trigger with the event that should start it.'],
      ['A recorded sound can be attached to a character’s script. It plays when that script starts.','Record “Welcome!” and connect it after the character’s green-flag block.','Record a short greeting and decide which character should play it.','Record a short clip and connect it to the right start event.'],
      ['A speech bubble shows a character’s words. Grow, shrink, hide, and show blocks change how the character looks.','A mouse can say “I found the cheese!”, grow bigger, then hide behind a chair.','Make a character say one sentence and change its size.','Use a speech block for words and an appearance block for visual changes.'],
      ['Speed blocks change how quickly a character moves. A wait block pauses the script before the next action.','A turtle can move slowly, wait, and then wave to the audience.','Compare the same move at two speeds, then add a short wait.','Put a wait block where the story needs a pause.'],
      ['A loop repeats actions to make animation. Use a forever loop for a background that should keep moving.','Repeat “move, turn” to make a pinwheel spin while the story runs.','Make a cloud move across the scene again and again.','Put repeating background actions inside a loop.'],
      ['A story can have separate pages for its beginning, middle, and ending. A page-switch block moves the story along.','The fish swims on page one, meets a friend on page two, and returns home on page three.','Sketch three story moments and decide what event changes the page.','Give each page one story job and connect them in order.'],
      ['A message block lets one character signal another. A matching receive-message block starts the reply.','The bird sends a yellow message; when the bear receives it, the bear waves.','Make one character send a message that starts another character’s action.','Match the message color sent with the one received.'],
      ['A storyboard is a set of quick drawings that plans a story before you code. It helps organize characters, scenes, and sounds.','Draw three boxes: the hero arrives, finds a clue, then celebrates.','Sketch the first, middle, and final scene, then list each character’s action.','Plan the scenes and actions on paper before building the animation.']
    ],
    examplesEn:['The green flag starts a script; a cat then moves to the tree.','A character moves right 4 steps and then up 2 steps to reach a kite.','Tap the drum sprite to play a sound; bumping the wall starts a different action.','Record your own “Hello!” and play it when a character appears.','A character says “Surprise!”, grows, then hides behind a rock.','A runner moves quickly, waits at a finish line, then waves.','Clouds move left forever while the sun stays still.','A new page begins when the character reaches the cave.','A rabbit sends a message; the fox receives it and answers.','Three drawings show the start, problem, and happy ending.'],
    examplesAr:['يبدأ العلم الأخضر البرنامج، ثم تتحرك القطة إلى الشجرة.','تتحرك الشخصية ٤ خطوات يمينًا وخطوتين للأعلى لتصل إلى الطائرة الورقية.','المس شخصية الطبل لتشغيل صوت؛ اصطدامها بالحائط يبدأ حركة أخرى.','سجّل «مرحبًا!» بصوتك وشغّله عند ظهور الشخصية.','تقول الشخصية «مفاجأة!» ثم تكبر وتختبئ خلف صخرة.','يجري العداء بسرعة، وينتظر عند خط النهاية، ثم يلوّح.','تتحرك السحب لليسار باستمرار بينما تظل الشمس ثابتة.','تبدأ صفحة جديدة عندما تصل الشخصية إلى الكهف.','يرسل الأرنب رسالة، فيستقبلها الثعلب ويرد عليها.','توضح ثلاثة رسومات بداية القصة ومشكلتها ونهايتها السعيدة.'],
    practiceEn:['Build a scene with a character, a backdrop, and a clear start.','Move a sprite exactly five squares and check its position.','Choose whether a tap or a bump should start your character’s action.','Record a short sound for the start of a scene.','Write one speech bubble and add a grow or hide action.','Make a character pause before it reaches its destination.','Create a repeating background movement.','Plan a beginning, middle, and ending across three pages.','Send a message from one sprite and make another respond.','Draw a three-panel storyboard for a tiny adventure.'],
    practiceAr:['أنشئ مشهدًا فيه شخصية وخلفية وبداية واضحة.','حرّك شخصية خمس خانات بالضبط وتحقق من مكانها.','اختر هل يبدأ الفعل باللمس أم بالاصطدام.','سجّل صوتًا قصيرًا لبداية المشهد.','اكتب فقاعة كلام وأضف حركة تكبير أو اختفاء.','اجعل الشخصية تنتظر قبل الوصول إلى هدفها.','أنشئ حركة متكررة للخلفية.','خطط لبداية ووسط ونهاية في ثلاث صفحات.','أرسل رسالة من شخصية واجعل أخرى تستجيب.','ارسم قصة مغامرة قصيرة في ثلاثة مربعات.']
  },
  {
    en:'Game Mechanics & Physics (Scratch 3.0)', ar:'ميكانيكا الألعاب والفيزياء باستخدام Scratch 3.0', levelEn:'Elementary · Game design', levelAr:'الابتدائية · تصميم الألعاب', demo:'game',
    lessonNamesEn:['Scratch Stage & Coordinate Grid','Keyboard Input & Smooth Movement','Sensing Collisions & Checkpoints','Score Variables & Speed Boosts','Health, Damage & Game Rules','Create Objects with Clones','Gravity, Falling & Jumping','Reusable My Blocks','Enemy Chasing & Patrol AI','Timers & Game States'],
    lessonNamesAr:['منصة Scratch وشبكة الإحداثيات','إدخال لوحة المفاتيح والحركة السلسة','استشعار الاصطدامات ونقاط الحفظ','متغيرات النقاط ومضاعفة السرعة','الصحة والضرر وقواعد اللعبة','إنشاء العناصر باستخدام النسخ','الجاذبية والسقوط والقفز','كتل My Blocks القابلة لإعادة الاستخدام','مطاردة الأعداء ودورياتهم','المؤقتات وحالات اللعبة'],
    teachingEn:[
      ['The Scratch stage uses x for left/right and y for up/down. The center is (0, 0), so coordinates place a sprite precisely.','Set a sprite to x=100, y=40: it appears right of center and a little above it.','Move a sprite to the center, then predict what happens when x increases.','Change one coordinate at a time to understand the sprite’s position.'],
      ['A key-press check lets the player steer a sprite. Small repeated moves make control feel smooth.','If the right-arrow key is pressed, change x by 4; if left is pressed, change x by -4.','Try the movement demo and think about what happens if the sprite reaches an edge.','Check the key repeatedly and keep each movement small.'],
      ['A sensing block can notice a wall, color, or other sprite. Use that signal to stop movement or save progress.','If the player touches the wall color, move back one step.','Choose a wall color and plan what the player should do at a checkpoint.','Sense the collision, then run the matching response.'],
      ['A variable remembers a number, such as a score. Change it when an event happens and show it on the stage.','When a coin is touched, change score by 1; a speed boost can change speed by 2.','Collect a coin and describe which event should add a point.','Update the variable when the pickup event occurs.'],
      ['A health variable tracks how many chances remain. A collision can reduce health, and zero health can end the game.','Start with 3 health. Touching a spike subtracts 1; at 0, show Game Over.','Set a starting health value and decide what happens after a trap collision.','Check health after damage and switch state when it reaches zero.'],
      ['A clone is a temporary copy created while the game runs. Clones let one sprite create many projectiles or targets.','Create a laser clone when space is pressed, then delete it when it leaves the stage.','Imagine a sprite firing several shots. Decide when each clone should disappear.','Create a clone for each shot and delete it when it is no longer needed.'],
      ['Gravity pulls a jumping character down. A velocity variable changes its vertical position until it reaches the ground.','Each frame, add velocity to y and subtract 1 from velocity to pull the player downward.','Predict what happens to a jump if gravity is stronger.','Update position with velocity, then apply gravity and check the ground.'],
      ['My Blocks package repeated instructions under one name. A custom block makes scripts easier to read and reuse.','Put “check damage and reduce health” in a block named take-damage.','Pick a repeated action and give it a short, useful block name.','Move repeated steps into one named block and call it when needed.'],
      ['An enemy can follow the player by comparing their x and y positions. Patrol behavior moves between chosen points.','If the player is to the right, move right; otherwise move left toward the patrol point.','Design a guard that patrols until it sees the player, then follows.','Choose whether the enemy is patrolling or chasing, then update its direction.'],
      ['A timer measures how long a round lasts. A game state controls whether the game is at its start, playing, won, or over.','When the timer reaches zero, change state to Game Over and stop enemy movement.','List the states in your game and what event moves between them.','Check the timer and current state before starting the next action.']
    ],
    examplesEn:['A sprite at (0,0) is in the center; x=80 moves it to the right.','Holding the arrow key changes x a little many times, making movement smooth.','Touching a wall sends the player back; touching a checkpoint saves progress.','A coin touch increases score by one, and collecting a boost changes speed.','A trap reduces three hearts to two; zero hearts ends the round.','A space key creates a laser clone that disappears after it hits an alien.','A jump starts upward, slows, then falls back onto the platform.','Call a take-damage block instead of copying the same damage script.','A guard walks between two markers, then chases when it senses the player.','A countdown ends the round and switches from Playing to Game Over.'],
    examplesAr:['الشخصية عند (٠،٠) في المنتصف؛ تغيير x إلى ٨٠ يحركها يمينًا.','يغيّر ضغط السهم قيمة x بخطوات صغيرة متكررة، فتبدو الحركة سلسة.','يعيد لمس الحائط اللاعب للخلف، بينما يحفظ لمس نقطة الحفظ تقدمه.','يزيد لمس العملة النقاط واحدًا، ويغيّر جمع المعزز السرعة.','يقلل المصيدة القلوب من ثلاثة إلى اثنين؛ وعند الصفر تنتهي الجولة.','ينشئ ضغط المسافة نسخة من الليزر، تختفي بعد إصابة الفضائي.','يبدأ القفز للأعلى، ثم يبطؤ، وبعدها يعود للسقوط على المنصة.','استخدم كتلة «تلقّي الضرر» بدل تكرار نص الضرر نفسه.','يتحرك الحارس بين علامتين، ثم يطارد اللاعب عندما يستشعره.','ينهي العد التنازلي الجولة وينقل الحالة من اللعب إلى انتهت اللعبة.'],
    practiceEn:['Place a sprite at a coordinate and predict its stage position.','Add a small movement for each arrow key.','Make a wall stop the player and a checkpoint save progress.','Create a score variable that changes when a star is collected.','Choose a starting health value and define a game-over rule.','Plan when a projectile clone is created and deleted.','Draw the path of a jump as it rises and falls.','Turn one repeated action into a custom block.','Write two rules for patrol and chase behavior.','Decide which event changes your game from play to win.'],
    practiceAr:['ضع شخصية عند إحداثي وتوقع مكانها على المنصة.','أضف حركة صغيرة لكل سهم من لوحة المفاتيح.','اجعل الحائط يوقف اللاعب ونقطة الحفظ تسجل تقدمه.','أنشئ متغير نقاط يتغير عند جمع نجمة.','اختر قيمة للصحة وحدد قاعدة انتهاء اللعبة.','خطط لموعد إنشاء نسخة المقذوف وموعد حذفها.','ارسم مسار القفزة وهي ترتفع ثم تهبط.','حوّل فعلًا متكررًا إلى كتلة مخصصة.','اكتب قاعدتين لسلوك الحراسة والمطاردة.','حدد الحدث الذي ينقل لعبتك من اللعب إلى الفوز.']
  },
  {
    en:'HTML5 — Structuring the Web', ar:'HTML5 — بناء هيكل صفحات الويب', levelEn:'Elementary · Web foundations', levelAr:'الابتدائية · أساسيات الويب', demo:'web',
    lessonNamesEn:['How the Web Works & HTML Structure','Headings, Titles & Paragraphs','Ordered and Unordered Lists','Images, Sources & Alt Text','Links & Page Navigation','Tables for Organized Information','Forms & Text Inputs','Radio Buttons, Checkboxes & Selects','Audio and Video on a Page','Divs, Spans & Semantic Structure'],
    lessonNamesAr:['كيف يعمل الويب وهيكل HTML','العناوين والفقرات','القوائم المرتبة وغير المرتبة','الصور والمصدر والنص البديل','الروابط والتنقل بين الصفحات','الجداول لتنظيم المعلومات','النماذج وحقول النص','أزرار الاختيار ومربعات التحديد والقوائم','الصوت والفيديو في الصفحة','عناصر div وspan والهيكل الدلالي'],
    teachingEn:[
      ['HTML gives a web page its structure. A browser reads the document and displays the parts inside the body.','The doctype identifies HTML; head stores page information; body contains the visible heading.','Read a tiny page and point out which part the visitor can see.','Put page information in head and visible content in body.'],
      ['Headings show which ideas are most important. Use one main h1, smaller headings for sections, and paragraphs for sentences.','A recipe page can use h1 for “Pancakes”, h2 for “Ingredients”, and p for a short introduction.','Choose a main heading and two section headings for your page.','Use heading levels to show the outline, not just to change text size.'],
      ['A ul list is for items with no required order. An ol list is for steps that must happen in sequence.','Ingredients fit in ul; numbered cooking steps fit in ol. Each item goes inside li.','Choose a list type for a packing checklist and for a recipe method.','Use ol when order matters; use ul when it does not.'],
      ['The img element displays a picture. Its src finds the file and alt describes the image for people who cannot see it.','A photo of a turtle can use alt text “A green turtle beside a pond.”','Add a useful description for a picture on your page.','Write alt text that tells what the image communicates.'],
      ['An anchor creates a link. Its href says where the link goes, such as another page or a trusted website.','A “See my projects” link can point to projects.html.','Plan one link to another page and one link back home.','Give each link a clear destination and understandable words.'],
      ['A table organizes information into rows and columns. Use headings to explain what each column means.','A class timetable can use columns for day, subject, and start time.','Choose three useful column headings for a weekly club schedule.','Put related values in the same row under a clear heading.'],
      ['A form collects information. Labels tell people what to enter; a button submits their answers.','A book-club form asks for a name and favorite book before the Join button.','Sketch a form with two labeled text fields and a submit button.','Use a clear label for every input and a button to finish.'],
      ['Radio buttons choose one item from a group. Checkboxes allow several choices; a select menu saves space for many options.','Choose one class year with radio buttons, then select several hobbies with checkboxes.','Pick the control that fits a one-choice question and a choose-many question.','Match the control to whether one or many answers are allowed.'],
      ['Audio and video elements can place media on a page. Controls let visitors play, pause, and adjust it.','A project page can include a short video with controls so the visitor chooses when to play.','Choose a media clip and decide where controls should appear.','Provide controls and a useful description for the media.'],
      ['A div groups related page content; a span marks a small piece of text. Semantic elements describe their purpose, like header or main.','Put a page introduction in main and highlight one word with span.','Group a page title and navigation, then identify the main content.','Choose elements by the job each part does.']
    ],
    examplesEn:['A browser requests a page from a server, reads HTML, and displays its body content.','A page title uses h1; “Materials” uses h2; the explanation uses p.','A shopping list uses ul; instructions for building a kite use ol.','An image needs a file path and helpful alt text.','A link uses href to open the page where the project list lives.','A timetable puts each lesson in a row and labels its day and time.','A contact form has labeled name and message inputs.','A poll uses radio for one favorite and checkboxes for several interests.','A video with controls lets a learner pause and replay a demonstration.','A header holds navigation; main contains the article.'],
    examplesAr:['يطلب المتصفح الصفحة من خادم، ويقرأ HTML، ثم يعرض محتوى body.','يستخدم عنوان الصفحة h1، ويستخدم «الأدوات» h2، وتوضع المقدمة في p.','تستخدم قائمة المشتريات ul، وتستخدم خطوات صنع طائرة ورقية ol.','تحتاج الصورة إلى مسار الملف ونص بديل مفيد.','يستخدم الرابط href لفتح صفحة قائمة المشروعات.','يضع الجدول كل حصة في صف ويحدد اليوم والوقت.','يحتوي نموذج التواصل على حقلي اسم ورسالة بتسميات واضحة.','يستخدم الاستطلاع radio لاختيار مفضل واحد وcheckboxes لعدة اهتمامات.','يتيح الفيديو المزود بعناصر التحكم للمتعلم الإيقاف وإعادة المشاهدة.','يحتوي header على التنقل، بينما يحتوي main على المقال.'],
    practiceEn:['Label the head and body in a simple HTML page.','Outline a page using one h1 and two h2 headings.','Sort five tasks into an ordered or unordered list.','Write alt text that helps someone understand an image.','Create a path between a home page and a project page.','Design table headings for a class reading log.','Plan a two-question club signup form.','Choose form controls for favorite color and all after-school clubs.','Add a media area and decide what controls a visitor needs.','Group a page into header, main, and footer areas.'],
    practiceAr:['حدّد head وbody في صفحة HTML بسيطة.','خطط صفحة بعنوان h1 وعنوانين فرعيين h2.','رتّب خمس مهام في قائمة مرتبة أو غير مرتبة.','اكتب نصًا بديلًا يشرح الصورة لمن لا يراها.','أنشئ رابطًا بين الصفحة الرئيسية وصفحة المشروعات.','صمّم عناوين جدول لسجل القراءة في الصف.','خطط نموذج تسجيل لنادٍ بسؤالين.','اختر عناصر مناسبة للون المفضل وكل أنشطة ما بعد المدرسة.','أضف مساحة وسائط وحدد عناصر التحكم المطلوبة.','قسّم الصفحة إلى ترويسة ومحتوى رئيسي وتذييل.']
  },
  {
    en:'CSS3 — Web Styling & Layouts', ar:'CSS3 — تنسيق الويب وتصميم التخطيطات', levelEn:'Elementary · Visual design', levelAr:'الابتدائية · التصميم المرئي', demo:'style',
    lessonNamesEn:['CSS Rules, Selectors & Stylesheets','Color, Backgrounds & Gradients','Typography & Font Choices','The CSS Box Model','Positioning Elements','Flexbox Rows and Alignment','CSS Grid Rows and Columns','Hover States & Transitions','Responsive Layouts & Media Queries','Designing Reusable Cards'],
    lessonNamesAr:['قواعد CSS والمحددات وملفات التنسيق','الألوان والخلفيات والتدرجات','الخطوط واختيارات الكتابة','نموذج الصندوق في CSS','تموضع العناصر','الصفوف والمحاذاة باستخدام Flexbox','الصفوف والأعمدة باستخدام CSS Grid','حالات المرور والانتقالات','التخطيطات المتجاوبة واستعلامات الوسائط','تصميم بطاقات قابلة لإعادة الاستخدام'],
    teachingEn:[
      ['A CSS rule selects an element and gives it visual properties. External stylesheets keep the look separate from HTML content.','The selector .note can give every note a green border and space inside.','Choose a selector for all buttons and one property to change.','Select the right elements, then set a property and value.'],
      ['Colors can be named or written as hex and RGB values. Background rules add color or images behind content.','A pale-green background with dark text keeps a reading card easy to see.','Pick a background and text color that have clear contrast.','Check that text stays readable on its background.'],
      ['Font size, weight, and line spacing affect how easy text is to read. Choose a small set of consistent styles.','Use a larger bold heading and calm, readable body text for a project card.','Compare two heading sizes and choose which makes the page easier to scan.','Use clear size differences to show the reading order.'],
      ['Every element is a box: content, padding, border, and margin. Padding is inside the border; margin is outside it.','Add padding so a card’s text does not touch its border; use margin to separate cards.','Adjust padding and margin and notice which space changes.','Use padding inside an element and margin between elements.'],
      ['Position rules decide where an element sits. Relative and absolute positioning work together for small overlays; fixed can keep navigation visible.','A small “New” label can sit in the corner of a card without moving the card itself.','Place a badge on a card and decide which element should be its positioning anchor.','Choose a positioning rule based on what should stay in place.'],
      ['Flexbox arranges items along a row or column and helps align them. The parent is the flex container.','A navigation bar uses flex to put a logo and links on one line with space between.','Arrange three buttons in a row and align them to the center.','Set flex on the parent, then choose direction and alignment.'],
      ['CSS Grid organizes a layout into rows and columns. It is useful when items need to line up in two dimensions.','A gallery grid can show three equal animal cards across a wide screen.','Choose the number of columns for a gallery on a large and small screen.','Set columns to match the available space and content.'],
      ['A hover state changes appearance while the pointer is over an item. A transition makes that change feel gradual.','A card can lift slightly and change border color when a pointer moves over it.','Choose one subtle change for a button on hover.','Use a clear hover cue and a short transition.'],
      ['A media query applies styles when the screen has a certain size. Responsive layouts adapt instead of shrinking everything.','A three-column gallery can become one column on a narrow phone screen.','Decide how your cards should rearrange on a narrow screen.','Test a narrow width and move content into a readable layout.'],
      ['A reusable card combines spacing, border, type, and image styles. Consistent cards help people compare items.','Animal cards use the same title position and image size, even when their descriptions differ.','Design a card with a title, picture, and one short fact.','Keep repeated components consistent and make their content easy to scan.']
    ],
    examplesEn:['A .card rule sets padding and a border on every element with that class.','Use a soft background and contrasting text; a gradient can decorate the top band.','A bold 24-pixel heading looks different from 14-pixel body copy.','Content sits inside padding, then border, then outside margin.','Position a small label over the top corner of a card.','Flexbox spaces a logo and menu links across the navigation bar.','Grid places six project cards into three columns and two rows.','A button changes color smoothly while the pointer is over it.','A phone layout stacks cards that sit side by side on a desktop.','Every animal card uses the same image ratio and title spacing.'],
    examplesAr:['تحدد قاعدة .card المسافة الداخلية والحدود لكل عنصر يحمل هذا الاسم.','استخدم خلفية هادئة ونصًا متباينًا؛ ويمكن للتدرج تزيين الشريط العلوي.','يختلف عنوان عريض بحجم ٢٤ عن نص عادي بحجم ١٤.','يجلس المحتوى داخل المسافة الداخلية، ثم الحد، ثم الهامش الخارجي.','ضع تسمية صغيرة فوق زاوية البطاقة.','توزع Flexbox الشعار وروابط القائمة على شريط التنقل.','ترتب Grid ست بطاقات مشروعات في ثلاثة أعمدة وصفين.','يتغير لون الزر تدريجيًا عندما يمر المؤشر فوقه.','ترتب شاشة الهاتف البطاقات تحت بعضها بدلًا من صف واحد.','تستخدم بطاقات الحيوانات نسبة الصورة والمسافة نفسها للعنوان.'],
    practiceEn:['Style all lesson headings with one shared CSS rule.','Choose two accessible colors and preview them together.','Create a readable heading and body-text size pair.','Make a card with space inside and space between cards.','Anchor a small label to the corner of a card.','Align three controls in one row with Flexbox.','Sketch a two-column grid for a small screen.','Add one helpful hover response to a link.','Change a card layout from desktop to phone width.','Design a card template for a book, animal, or game.'],
    practiceAr:['نسّق كل عناوين الدروس بقاعدة CSS مشتركة.','اختر لونين واضحين وسهلَي القراءة وعاينهما معًا.','أنشئ حجمًا مقروءًا للعنوان وآخر للنص.','أنشئ بطاقة بمساحة داخلية وفواصل بين البطاقات.','ثبّت تسمية صغيرة في زاوية البطاقة.','حاذِ ثلاثة أزرار في صف باستخدام Flexbox.','ارسم شبكة من عمودين لشاشة صغيرة.','أضف استجابة مفيدة عند المرور فوق رابط.','غيّر ترتيب البطاقات بين شاشة الكمبيوتر والهاتف.','صمّم قالب بطاقة لكتاب أو حيوان أو لعبة.']
  },
  {
    en:'Web Logic & Interactivity (JavaScript)', ar:'منطق الويب والتفاعل باستخدام JavaScript', levelEn:'Elementary · JavaScript', levelAr:'الابتدائية · JavaScript', demo:'calculator',
    lessonNamesEn:['JavaScript & the Browser Console','Variables with let and const','User Input & Calculations','if, else if & else Decisions','AND, OR & Multiple Conditions','Selecting and Updating Page Elements','Click Events & Event Listeners','Functions: Inputs and Returns','Arrays, Indexes & for Loops','Random Choices with Math.random'],
    lessonNamesAr:['JavaScript ووحدة تحكم المتصفح','المتغيرات باستخدام let وconst','مدخلات المستخدم والحسابات','قرارات if وelse if وelse','الشروط المتعددة باستخدام AND وOR','اختيار عناصر الصفحة وتحديثها','أحداث النقر ومستمعو الأحداث','الدوال: المدخلات والقيم المعادة','المصفوفات والفهارس وحلقات for','اختيارات عشوائية باستخدام Math.random'],
    teachingEn:[
      ['JavaScript gives a page instructions. The browser console shows messages that help you check what the code is doing.','console.log("Ready!") prints Ready! in the console, not as a page heading.','Predict what a short console.log message will show, then test it.','Use the console to inspect a value while your program runs.'],
      ['A variable is a named place to store a value. Use let when it may change and const when it should stay the same.','let score = 0 can become 1 after a coin is collected; const gameName stays fixed.','Choose which of two values should use let and which should use const.','Name values clearly and choose whether they need to change.'],
      ['Input often arrives as text. Convert it to a number before doing arithmetic, then show the result.','If a user types 12 and 4, Number() turns the text into numbers that can be added.','Enter two numbers and decide what result their sum should show.','Convert number-shaped text before calculating.'],
      ['An if statement runs code only when a test is true. else handles the other path.','If score is at least 10, show “Level up”; otherwise, keep playing.','Write a rule that checks whether a player has enough points to unlock a prize.','Test a condition, then provide a sensible action for each outcome.'],
      ['AND requires both tests to be true; OR needs at least one. They combine rules for more precise choices.','A ride ticket is allowed if age is 10 or more AND height is tall enough.','Decide whether a rule needs both conditions or either one.','Use AND when all requirements matter; OR when one is enough.'],
      ['The DOM is the browser’s model of the page. JavaScript can select an element and update its text or image.','Find the element with id “score” and change its text to “3 stars”.','Choose a page element and decide what should change when an event happens.','Select the exact element, then update only the property you need.'],
      ['An event listener waits for something like a click. When it happens, a function responds.','A click on the “Add point” button increases the displayed score.','Plan one click and the page response it should trigger.','Listen on the right control and connect a clear response.'],
      ['A function groups instructions under a name. Parameters are inputs; return sends a result back.','A double(n) function returns n * 2, so double(4) gives 8.','Name a small calculation and decide what value it should return.','Give a function the information it needs and return its answer.'],
      ['An array stores several values in order. A loop can visit each index so you do not repeat the same code.','A list of three colors can be checked one at a time with a for loop.','Predict the first and last index in an array of four favorite games.','Use an index to select one item and a loop to visit many.'],
      ['Math.random creates a number from 0 up to, but not including, 1. Multiply and round down to choose an array index.','For six choices, Math.floor(Math.random() * 6) gives an index from 0 to 5.','Choose a random item from a list of four rewards.','Keep the random index within the list’s valid positions.']
    ],
    examplesEn:['console.log("Hello") writes Hello to the developer console for checking.','A changing score uses let; a fixed game title uses const.','Convert the prompt text “7” to number 7 before adding 5.','If a player has 10 points, unlock a badge; else show how many are missing.','Allow entry when age is enough AND the ticket is available.','Change an h1’s text after the player chooses a new theme.','Clicking a button calls a function that adds one point.','area(width, height) returns width * height.','A for loop prints each name in a list once.','Pick a random snack by choosing a valid index in the snack array.'],
    examplesAr:['تكتب console.log("مرحبًا") كلمة مرحبًا في وحدة التحكم للفحص.','تستخدم النقاط المتغيرة let، بينما يستخدم اسم اللعبة الثابت const.','حوّل النص "٧" إلى الرقم ٧ قبل جمعه مع ٥.','إذا كان لدى اللاعب ١٠ نقاط فافتح الشارة، وإلا فأظهر المتبقي.','اسمح بالدخول عندما يكون العمر مناسبًا AND التذكرة متاحة.','غيّر نص h1 بعد أن يختار اللاعب لونًا جديدًا.','يستدعي النقر على الزر دالة تضيف نقطة.','تعيد area(width, height) حاصل ضرب الطول والعرض.','تطبع حلقة for كل اسم في القائمة مرة واحدة.','اختر وجبة عشوائية باستخدام فهرس صحيح من مصفوفة الوجبات.'],
    practiceEn:['Log a message and one value in the browser console.','Store a score that changes and a title that does not.','Add two values entered by the user.','Make a decision rule for earning a game badge.','Write a ticket rule that checks age and seat availability.','Change a greeting on the page after a button click.','Connect a button click to an event handler.','Write the inputs and output for a simple multiply function.','Loop through a list of favorite animals.','Choose one random color from a list of five.'],
    practiceAr:['اطبع رسالة وقيمة في وحدة تحكم المتصفح.','خزّن نقاطًا تتغير واسمًا ثابتًا للعبة.','اجمع قيمتين أدخلهما المستخدم.','اكتب قاعدة تحدد الحصول على شارة في اللعبة.','تحقق من العمر وتوفر المقعد قبل حجز تذكرة.','غيّر التحية في الصفحة بعد النقر على زر.','اربط النقر على زر بمعالج حدث.','حدد مدخلات ومخرجات دالة ضرب بسيطة.','مرّ على قائمة بحيواناتك المفضلة.','اختر لونًا عشوائيًا من قائمة من خمسة ألوان.']
  },
  {
    en:'Web Engineering & Intro to Desktop Scripting', ar:'هندسة الويب ومقدمة في برمجة سطح المكتب', levelEn:'Middle school · JavaScript + Python', levelAr:'الإعدادية · JavaScript وPython', demo:'score',
    lessonNamesEn:['Timers with setTimeout and setInterval','Forms, Events & Input Validation','DOM Game Loops & Collision Boxes','Web Audio & Synthesized Notes','First Python Program & Indentation','Python Variables, Input & Types','Python Conditions & Branching','Python for and while Loops','Reusable Python Functions','Python Lists & Dictionaries'],
    lessonNamesAr:['المؤقتات باستخدام setTimeout وsetInterval','النماذج والأحداث والتحقق من المدخلات','حلقات ألعاب DOM ومناطق الاصطدام','صوت الويب والنغمات الرقمية','أول برنامج Python والمسافات البادئة','متغيرات Python والمدخلات والأنواع','الشروط والتفرع في Python','حلقات for وwhile في Python','الدوال القابلة لإعادة الاستخدام في Python','القوائم والقواميس في Python'],
    teachingEn:[
      ['setTimeout runs an action once after a delay. setInterval repeats it, so use a clear stop rule for a countdown.','Wait one second, update a countdown, and stop the timer when it reaches zero.','Plan a three-second countdown and name what should happen at zero.','Choose a one-time delay or repeated timer, and stop it at the right moment.'],
      ['A form submit event carries what the user entered. Validate the values and prevent page reload when you handle it yourself.','Check that both password fields match before showing “Ready to join”.','Test a form with matching and different passwords.','Check the input before accepting it and explain what needs fixing.'],
      ['A game loop updates moving objects repeatedly. Bounding boxes can check whether two screen objects overlap.','If the player’s rectangle overlaps a coin’s rectangle, add a point and remove the coin.','Move two boxes together and decide when they count as touching.','Update positions, check overlap, then respond to a collision.'],
      ['The Web Audio API can create sound with oscillators and filters. Browsers usually need a user gesture before starting audio.','A key press can play a short musical note and stop it when the key is released.','Map three keys to three different notes and choose when each note stops.','Start audio after the player’s action and stop sounds when finished.'],
      ['Python runs instructions from top to bottom. Indentation shows which lines belong inside a block.','print("Hello") displays a message; the next line starts at the left unless it belongs to a block.','Predict the output of a two-line print program.','Keep indentation consistent and run a tiny program first.'],
      ['input() reads text from a person. Convert it with int() for whole numbers before using it in calculations.','age_text = input(...) gives text; age = int(age_text) makes it a number.','Ask for a number of game points and convert the answer.','Remember that input is text until you convert it.'],
      ['if and elif check conditions in order; else handles what remains. Indentation marks each choice’s instructions.','If temperature is high, print “Warm”; elif it is low, print “Cool”; else print “Mild”.','Sort a score into two ranges and a remaining case.','Check each condition in order and include a final else when useful.'],
      ['A for loop repeats over a known sequence. A while loop repeats while a condition stays true.','Repeat three guesses with for; keep asking with while until the answer is correct.','Choose the loop for three fixed turns and one until-correct game.','Use a stop condition so a while loop does not run forever.'],
      ['A function names a reusable task. Parameters receive information, and return sends a result to its caller.','discount(price, percent) calculates a new price and returns it.','Turn a repeated calculation into a function with one useful result.','Give the function clear inputs and return its answer.'],
      ['A list stores an ordered group. A dictionary stores values under labels, which helps describe one object.','A snack list stores choices; a student dictionary can map “name” to “Mona” and “points” to 8.','Choose a list or dictionary for a team roster and one student profile.','Use lists for ordered groups and dictionaries for labeled information.']
    ],
    examplesEn:['setTimeout shows a “Ready!” message once; setInterval updates a countdown each second.','A signup form blocks submission if the two password entries differ.','When the player box overlaps a coin box, the score increases.','Pressing A plays one note; pressing S plays a different note.','print("Hello, world!") displays a message in the Python console.','Convert the typed age “12” to integer 12 before comparing it.','A score of 85 earns “Great”; a score of 50 gets “Keep practicing”.','A for loop handles five questions; a while loop waits for the right answer.','A function can convert minutes to seconds and return the result.','A list holds four scores; a dictionary describes one player.'],
    examplesAr:['يعرض setTimeout رسالة «استعد!» مرة واحدة، ويحدّث setInterval العد التنازلي كل ثانية.','يمنع نموذج التسجيل الإرسال إذا اختلفت كلمتا المرور.','عندما يتداخل صندوق اللاعب مع صندوق العملة، تزداد النقاط.','يعزف الضغط على A نغمة والضغط على S نغمة مختلفة.','تعرض print("Hello, world!") رسالة في طرفية Python.','حوّل العمر المكتوب "١٢" إلى العدد ١٢ قبل المقارنة.','تحصل درجة ٨٥ على «رائع»، ودرجة ٥٠ على «واصل التدريب».','تعالج for خمسة أسئلة، بينما تنتظر while الإجابة الصحيحة.','تحوّل دالة الدقائق إلى ثوانٍ ثم تعيد النتيجة.','تحتوي القائمة على أربع درجات، ويصف القاموس لاعبًا واحدًا.'],
    practiceEn:['Choose an action for the end of a countdown.','Decide what makes a signup form valid.','Describe what should happen when two game objects overlap.','Plan three keyboard notes for a tiny piano.','Write down the output of a short Python print program.','Ask for an age and convert it before comparing.','Create a score check with if, elif, and else.','Choose a loop for a fixed number of turns.','Make a function that returns double a number.','Store a shopping list and one item’s details.'],
    practiceAr:['اختر الفعل الذي يحدث عند نهاية العد التنازلي.','حدد متى يكون نموذج التسجيل صالحًا.','اشرح ما يجب أن يحدث عند تداخل عنصرين في اللعبة.','خطط لثلاث نغمات على لوحة مفاتيح صغيرة.','اكتب ناتج برنامج Python قصير يستخدم print.','اطلب عمرًا وحوّله إلى عدد قبل المقارنة.','أنشئ فحصًا للدرجة باستخدام if وelif وelse.','اختر حلقة لعدد ثابت من الأدوار.','أنشئ دالة تعيد ضعف العدد.','خزّن قائمة مشتريات وتفاصيل عنصر واحد.']
  },
  {
    en:'Advanced Core Python & Data Wrangling (Pandas)', ar:'Python المتقدم وتجهيز البيانات باستخدام Pandas', levelEn:'Middle school · Python + data', levelAr:'الإعدادية · Python والبيانات', demo:'data',
    lessonNamesEn:['Draw with Python Turtle','Keyboard-Controlled Turtle','Handle Errors with try and except','Read and Write Files Safely','CSV Tables & Structured Data','Load a CSV with Pandas','Select, Filter & Sort a DataFrame','Statistics and Grouping','Find and Fix Missing Data','Export a Clean CSV'],
    lessonNamesAr:['الرسم باستخدام Python Turtle','التحكم في Turtle بلوحة المفاتيح','معالجة الأخطاء باستخدام try وexcept','قراءة الملفات وكتابتها بأمان','جداول CSV والبيانات المنظمة','تحميل CSV باستخدام Pandas','اختيار البيانات وتصفيتها وترتيبها','الإحصاءات وتجميع البيانات','اكتشاف البيانات الناقصة ومعالجتها','تصدير ملف CSV نظيف'],
    teachingEn:[
      ['Turtle is a drawing cursor. Move it and turn it to create lines; repeat steps to draw regular shapes.','Move forward 80, turn 90 degrees, and repeat four times to draw a square.','Plan the four moves and turns needed for a square.','Choose a distance, turn consistently, and return to the start.'],
      ['Turtle can listen for keyboard events. Map a key to a small move and keep the drawing area within safe bounds.','Press the right arrow to move 10 steps; do not let the turtle leave the screen.','Choose one key and describe its movement and edge rule.','Connect one key to one action and test the screen boundary.'],
      ['An exception is an error raised while a program runs. try and except let you respond instead of stopping unexpectedly.','If a user types “apple” where a number is expected, show a helpful message instead of a traceback.','Think of a likely invalid entry and write a kind response for it.','Catch the error you expect and explain how the user can continue.'],
      ['Use a with-open block to work with a file. It closes the file automatically when the block finishes.','Open scores.txt, read its lines, then add a new score using a write mode.','Decide whether your program needs to read or add text to a file.','Choose the right file mode and use with so the file closes safely.'],
      ['A CSV stores table data as rows with values separated by commas. A header row names each column.','name,score on the first row labels later values such as “Lina, 92”.','Make a two-column sample table with a header and two records.','Keep every row aligned to the same column headings.'],
      ['Pandas reads a CSV into a DataFrame, a table you can inspect. head shows the first rows; info summarizes columns.','Read scores.csv, call head() to preview, and info() to check the data types.','Choose what you would inspect first after loading a new class file.','Preview a few rows and check the column names before analyzing.'],
      ['Select columns to focus on useful information. Filter rows with a condition, then sort to see values in order.','Show only name and score where score is at least 60, sorted highest first.','Filter a score table to show passing rows and sort them.','Choose a clear condition and sort by the value you need to compare.'],
      ['A summary statistic describes a group of values. groupby makes separate groups so you can compare each one.','Find the mean score for each team instead of one average for the whole class.','Choose a group and one statistic that would help compare it.','Group by a meaningful label, then calculate a useful summary.'],
      ['Missing values can make a calculation misleading. Find them first, then drop or fill them for a clear reason.','If one survey has no age, fill it only if a suitable default is justified; otherwise exclude it from an age average.','Decide what should happen to one blank score and explain why.','Inspect missing entries before choosing whether to remove or fill them.'],
      ['After cleaning and analyzing a table, export the result to a new CSV. Keep the original data unchanged.','Save passing_scores to a report file so the original class_scores.csv stays intact.','Choose a helpful name for a cleaned report file.','Write results to a new file and confirm the columns are correct.']
    ],
    examplesEn:['Move 80 steps and turn 90 degrees four times to draw a square.','Use arrow keys to move a turtle while keeping it inside the window.','A letter in a number field produces a helpful “Please enter a number” message.','Use with open("notes.txt") to read a saved high score.','A CSV header “name,score” labels every student row.','Load a CSV and inspect its first five rows before filtering.','Select passing students and sort their scores from highest to lowest.','Group scores by team and compare each team’s average.','Check which cells are blank before calculating the mean.','Export a cleaned table to a new file without overwriting the source.'],
    examplesAr:['تحرك ٨٠ خطوة واستدر ٩٠ درجة أربع مرات لرسم مربع.','استخدم الأسهم لتحريك Turtle مع إبقائها داخل النافذة.','تنتج الحروف في خانة الرقم رسالة «من فضلك أدخل رقمًا» بدل توقف البرنامج.','استخدم with open("notes.txt") لقراءة أعلى نتيجة محفوظة.','تسمّي ترويسة CSV وهي name,score أعمدة كل سجل طالب.','حمّل ملف CSV وافحص أول خمسة صفوف قبل التصفية.','اختر الطلاب الناجحين ورتّب درجاتهم من الأعلى للأقل.','اجمع الدرجات حسب الفريق وقارن متوسط كل فريق.','تحقق من الخلايا الفارغة قبل حساب المتوسط.','صدّر الجدول النظيف لملف جديد دون الكتابة فوق المصدر.'],
    practiceEn:['Plan Turtle turns for a regular square.','Set a key movement and keep the turtle inside the window.','Handle a text answer where a number is required.','Read one saved value from a file.','Design column headers for a tiny library CSV.','Load a table and choose what to inspect first.','Filter passing students and sort their scores.','Compare the mean score for two groups.','Choose a fair action for missing values.','Export a cleaned report under a new filename.'],
    practiceAr:['خطط انعطافات Turtle لرسم مربع منتظم.','حدّد حركة لمفتاح وأبقِ السلحفاة داخل النافذة.','تعامل مع إجابة نصية في موضع يحتاج إلى رقم.','اقرأ قيمة محفوظة من ملف.','صمّم عناوين أعمدة لملف مكتبة صغير.','حمّل جدولًا وحدد أول ما ستفحصه.','صفِّ الناجحين ورتّب درجاتهم.','قارن متوسط الدرجات لمجموعتين.','اختر معالجة عادلة للقيم الناقصة.','صدّر تقريرًا نظيفًا باسم ملف جديد.']
  },
  {
    en:'Data Analytics & Desktop Portfolios', ar:'تحليل البيانات ومعارض الأعمال المكتبية', levelEn:'Middle school · Data + portfolios', levelAr:'الإعدادية · البيانات ومعارض الأعمال', demo:'chart',
    lessonNamesEn:['Visual Stories with Matplotlib','Line Charts & Trends','Bar Charts & Category Comparisons','Pie Charts & Proportions','Scatter Plots & Relationships','Build a Desktop Window with Tkinter','Show Charts inside Tkinter','Git: Track Changes and Commits','GitHub Repositories & Sharing','Professional README Files'],
    lessonNamesAr:['قصص مرئية باستخدام Matplotlib','المخططات الخطية والاتجاهات','مقارنة الفئات بالمخططات العمودية','المخططات الدائرية والنسب','المخططات المبعثرة والعلاقات','إنشاء نافذة مكتبية باستخدام Tkinter','عرض المخططات داخل Tkinter','Git: متابعة التغييرات والتسجيلات','مستودعات GitHub ومشاركة المشروعات','كتابة ملفات README احترافية'],
    teachingEn:[
      ['A chart turns numbers into a picture that can reveal a pattern. Choose a chart type that fits the question.','Monthly temperatures make more sense as a line than as a list of twelve numbers.','Name a question about data and the kind of picture that could answer it.','Start with the question, then choose a clear visual form.'],
      ['A line chart connects values in order, often across time. A title and labeled axes explain what the line means.','Plot one temperature each month to see whether the year gets warmer.','Label the x-axis with months and the y-axis with a measurement.','Keep the time order and label both axes with units.'],
      ['A bar chart compares amounts in separate categories. Bars should start from a clear baseline so differences are fair.','Compare books read by three teams using one bar for each team.','Choose categories and values for a fair comparison chart.','Use a consistent scale and label every category.'],
      ['A pie chart shows how categories make up one whole. It works best with a few non-overlapping parts.','Show how a day is divided among school, sleep, play, and meals.','Check that your parts add to one whole before using a pie chart.','Use parts of the same whole and label them clearly.'],
      ['A scatter plot places two number measurements on x and y. A pattern may suggest a relationship, but not prove a cause.','Plot practice minutes and quiz scores to see whether they tend to rise together.','Choose two measurements that could be compared as dots.','Look for a pattern and avoid claiming one value caused the other.'],
      ['Tkinter builds a desktop window from widgets such as labels and buttons. A layout manager places them in the window.','A label names a score; a button runs a function that updates it.','Sketch a window with one heading and one useful button.','Give each widget a clear purpose and place it in a readable order.'],
      ['Matplotlib can draw a chart inside a Tkinter window. A button can update the data and redraw the chart.','Choose a month from a menu, then refresh the embedded rainfall chart.','Decide which control should update a chart and what should change.','Update the data, redraw the chart, and keep the interface responsive.'],
      ['Git records snapshots called commits. Stage the files you want, then write a message that explains the change.','Commit “Add score chart” so you can find that project step later.','Choose which changed files belong in one small commit.','Stage related work and write a useful, truthful commit message.'],
      ['A GitHub repository stores a project online and can share its history. Check what files you publish.','Push a finished school project with source code and a README, but not private passwords.','Prepare a project folder and identify one file that should never be shared.','Review the repository contents before publishing.'],
      ['A README introduces a project, explains how to run it, and gives context to the next reader.','A useful README names the app, lists requirements, and explains how to launch it.','Draft a title and three steps someone needs to run your project.','Write for a new reader and include clear setup and usage steps.']
    ],
    examplesEn:['A plot can show whether rainfall rises during certain months.','A line chart connects weekly reading minutes to show a trend.','Bars compare the number of books read by each class.','A pie chart shows what fraction of a day is spent on activities.','Dots compare practice time and quiz score for each learner.','A Tkinter window has a title label, a score label, and a reset button.','Click Refresh to redraw a chart with the selected month.','Commit a working chart before adding a new feature.','A GitHub repository shares code and instructions with classmates.','A README explains what the app does and how to start it.'],
    examplesAr:['يوضح الرسم إن كان المطر يزداد في شهور معينة.','يربط المخطط الخطي دقائق القراءة أسبوعيًا لإظهار الاتجاه.','تقارن الأعمدة عدد الكتب التي قرأها كل صف.','يوضح المخطط الدائري نسبة اليوم التي تشغلها الأنشطة.','تقارن النقاط وقت التدريب ودرجة الاختبار لكل متعلم.','تضم نافذة Tkinter عنوانًا ونتيجة وزر إعادة ضبط.','يعيد زر التحديث رسم بيانات الشهر الذي اخترته.','سجّل نسخة عاملة من الرسم قبل إضافة ميزة جديدة.','يشارك مستودع GitHub الكود والتعليمات مع زملائك.','يشرح README وظيفة التطبيق وكيفية تشغيله.'],
    practiceEn:['Choose a chart for a question about school data.','Sketch a line chart and label both axes.','Compare three categories with a bar chart.','Check whether your categories make up one whole.','Pick two measurements that belong on a scatter plot.','Design a simple desktop window with a button.','Plan a button that refreshes an embedded chart.','Write a short commit message for one change.','Review which files belong in a public repository.','Write setup instructions for a classmate.'],
    practiceAr:['اختر مخططًا للإجابة عن سؤال حول بيانات المدرسة.','ارسم مخططًا خطيًا وسمِّ المحورين.','قارن ثلاث فئات بمخطط أعمدة.','تحقق أن فئاتك تكوّن كلًا واحدًا.','اختر قياسين مناسبين لمخطط مبعثر.','صمّم نافذة مكتبية بسيطة بها زر.','خطط لزر يحدّث مخططًا داخل التطبيق.','اكتب رسالة قصيرة لتسجيل تغيير واحد.','راجع الملفات التي يجوز نشرها في مستودع عام.','اكتب تعليمات تشغيل لزميلك.']
  },
];

const arabicExplanations = [
  [
    'الخوارزمية خطة من تعليمات صغيرة ومرتبة تساعدنا على الوصول لهدف.',
    'شبكة المربعات تساعدنا نوصف مكان الشخصية ونحدد طريقها خطوة خطوة.',
    'النقرة تختار، والنقر المزدوج يفتح، والسحب ينقل الشيء لمكان جديد.',
    'لما الحركة تتكرر، نقدر نختصرها بأمر يكررها عددًا محددًا من المرات.',
    'نستخدم الحلقة لاختصار الحركات المتشابهة، ونتأكد أن عددها يناسب الطريق.',
    'الخطأ البرمجي يجعل النتيجة مختلفة عن المطلوب، ومراجعته تساعدنا نعرف السبب.',
    'تصحيح الأخطاء يعني نجرب الحل، نحدد أول خطوة خاطئة، ونصلح شيئًا واحدًا كل مرة.',
    'الشرط يختار ما نفعله بناءً على إجابة سؤال، مثل: هل الإشارة خضراء؟',
    'يتبع الكمبيوتر قاعدة واضحة ليختار طريقًا عندما يتحقق الشرط.',
    'نرسم بالكود عندما نكرر حركة واتجاهًا بطريقة منظمة.'
  ],
  [
    'تجمع مساحة ScratchJr الشخصيات والخلفيات وكتل الأوامر التي تصنع القصة.',
    'تحرك كتل الحركة الشخصية بعدد من الخطوات على شبكة الشاشة.',
    'المثير يبدأ البرنامج عند حدث مثل اللمس أو اصطدام شخصيتين.',
    'نستطيع تسجيل صوتنا وربطه بحدث حتى تسمعه الشخصية في الوقت المناسب.',
    'تشرح فقاعة الكلام ما تقوله الشخصية، وتغير كتل المظهر حجمها أو ظهورها.',
    'تحدد كتل السرعة إيقاع الحركة، وتضيف كتلة الانتظار وقفة للقصة.',
    'تكرر الحلقة مجموعة حركات، مثل سحابة تتحرك مرارًا في الخلفية.',
    'تقسم الصفحات القصة لمشاهد، وينقل أمر تغيير الصفحة الأحداث للمشهد التالي.',
    'ترسل شخصية رسالة، وتبدأ شخصية أخرى ردها عندما تستقبل الرسالة نفسها.',
    'يساعد مخطط القصة على ترتيب المشاهد والشخصيات والأصوات قبل البرمجة.'
  ],
  [
    'لكل نقطة على منصة Scratch إحداثيان: x للحركة يمينًا ويسارًا وy للأعلى والأسفل.',
    'نفحص ضغطات لوحة المفاتيح باستمرار ونحرك الشخصية مسافة صغيرة لتبدو الحركة سلسة.',
    'تخبرنا كتل الاستشعار عندما تلمس الشخصية جدارًا أو لونًا أو شخصية أخرى.',
    'يحفظ المتغير قيمة تتغير أثناء اللعب، مثل النقاط أو السرعة.',
    'تسجل قيمة الصحة فرص اللاعب، ونستخدمها لتحديد متى تنتهي اللعبة.',
    'ينشئ الاستنساخ نسخة جديدة من الشخصية أثناء اللعب، ثم نحذفها عند انتهاء دورها.',
    'تجعل الجاذبية اللاعب يهبط؛ وتصف السرعة مقدار تغير مكانه في كل لحظة.',
    'تجمع الكتل المخصصة الأوامر المتكررة في اسم واحد يسهل إعادة استخدامه.',
    'يختار العدو اتجاهه بمقارنة مكانه بمكان اللاعب أو نقاط دوريته.',
    'يقيس المؤقت الوقت، وتحدد حالة اللعبة إن كنا في البداية أو اللعب أو الفوز أو الخسارة.'
  ],
  [
    'يصف HTML محتوى الصفحة وهيكله، ويقرأ المتصفح العناصر ليعرضها للزائر.',
    'ترتب العناوين أهمية الأقسام، وتعرض الفقرات الجمل التي تشرحها.',
    'القائمة المرتبة تناسب الخطوات المتسلسلة، وغير المرتبة تناسب عناصر بلا ترتيب.',
    'تعرض الصورة ملفًا، ويساعد النص البديل من لا يستطيع رؤيتها على فهمها.',
    'ينشئ الرابط طريقًا لصفحة أخرى، وتحدد خاصية href وجهته.',
    'ينظم الجدول المعلومات في صفوف وأعمدة، ويشرح عنوان كل عمود نوع بياناته.',
    'يجمع النموذج إجابات الزائر، وتوضح التسميات ما الذي يكتبه في كل حقل.',
    'يختار زر الاختيار إجابة واحدة، بينما يسمح مربع التحديد باختيار أكثر من إجابة.',
    'تضيف عناصر الصوت والفيديو وسائط للصفحة، وتساعد أدوات التحكم على تشغيلها.',
    'تجمع div أجزاء الصفحة، بينما تصف عناصر مثل header وmain وظيفة كل جزء.'
  ],
  [
    'تختار قاعدة CSS عناصر معينة ثم تحدد شكلها بخصائص وقيم.',
    'تحدد الألوان والخلفيات مظهر الصفحة، ويجب أن يبقى النص واضحًا فوقها.',
    'يساعد حجم الخط ووزنه والمسافات بين السطور القارئ على معرفة ترتيب النص.',
    'يتكون الصندوق من المحتوى والمساحة الداخلية والحد والهامش الخارجي.',
    'يحدد التموضع مكان العنصر، ونختار القاعدة حسب ما نريد أن يظل ثابتًا.',
    'ترتب Flexbox العناصر في صف أو عمود وتساعد على محاذاتها.',
    'تقسم CSS Grid المساحة إلى صفوف وأعمدة لتنظيم العناصر معًا.',
    'تغير حالة المرور مظهر العنصر عند استخدام المؤشر، وتنعّم transition التغيير.',
    'تغير استعلامات الوسائط التخطيط ليتناسب مع عرض الهاتف أو الكمبيوتر.',
    'تجمع البطاقة بين الصورة والعنوان والمسافات لتعرض معلومات عنصر واحد.'
  ],
  [
    'تضيف JavaScript تعليمات للصفحة، وتعرض وحدة التحكم رسائل تساعدنا على فحصها.',
    'يخزن المتغير قيمة باسم واضح؛ نستخدم let للقيمة المتغيرة وconst للثابتة.',
    'قد يصل إدخال المستخدم كنص، فنحوله إلى رقم قبل إجراء الحساب.',
    'يفحص if شرطًا، وينفذ else مسارًا آخر عندما لا يتحقق الشرط.',
    'يحتاج AND إلى تحقق كل الشروط، بينما يكفي شرط واحد مع OR.',
    'يمثل DOM عناصر الصفحة، ويمكن لـJavaScript اختيار عنصر وتغيير نصه أو صورته.',
    'ينتظر مستمع الحدث ضغطة أو تفاعلًا، ثم يشغل الاستجابة المناسبة.',
    'تجمع الدالة خطوات باسم، وتأخذ مدخلات وقد تعيد نتيجة لاستخدامها.',
    'تجمع المصفوفة قيمًا بترتيب، وتزور الحلقة عناصرها دون تكرار الأوامر يدويًا.',
    'تساعد Math.random على اختيار عنصر عشوائي، بشرط أن يبقى الفهرس داخل القائمة.'
  ],
  [
    'ينفذ setTimeout حدثًا مرة بعد انتظار، بينما يكرر setInterval الحدث حتى نوقفه.',
    'تستقبل النماذج بيانات المستخدم، ونتحقق منها قبل قبولها أو عرض النتيجة.',
    'تحدث حلقة اللعبة أماكن العناصر مرارًا وتفحص هل تداخل صندوقان.',
    'تنشئ Web Audio الأصوات، ويبدأ المتصفح تشغيلها عادة بعد تفاعل المستخدم.',
    'ينفذ Python الأوامر بالترتيب، وتبين المسافات البادئة الأسطر التي تنتمي للكتلة.',
    'تعيد input نصًا، ونحوّله إلى نوع مناسب مثل int قبل المقارنة والحساب.',
    'تختار if وelif وelse مسارًا من عدة مسارات حسب الشروط.',
    'تكرر for عددًا أو مجموعة معروفة، وتستمر while ما دام شرطها صحيحًا.',
    'تجمع الدالة خطوات قابلة لإعادة الاستخدام، ويمكنها إرجاع نتيجة.',
    'تخزن القائمة عناصر مرتبة، بينما يربط القاموس كل قيمة باسم يصفها.'
  ],
  [
    'تحرك مكتبة Turtle مؤشرًا على الشاشة؛ ومع التكرار ترسم أشكالًا منتظمة.',
    'نربط ضغطات المفاتيح بحركات صغيرة، ونمنع السلحفاة من الخروج عن حدود الشاشة.',
    'نستخدم try وexcept للتعامل مع أخطاء متوقعة بدل أن يتوقف البرنامج فجأة.',
    'تساعد with open على قراءة ملف أو كتابته ثم إغلاقه بأمان عند انتهاء العمل.',
    'يشبه CSV جدولًا نصيًا؛ يحدد صف العناوين اسم كل عمود في السجلات.',
    'يقرأ Pandas ملف CSV في جدول DataFrame يمكن معاينته وفحص أعمدته.',
    'نختار الأعمدة التي نحتاجها ونصفي الصفوف بشرط ثم نرتب النتائج.',
    'تلخص الإحصاءات مجموعة أرقام، ويسمح groupby بمقارنة مجموعات منفصلة.',
    'نبحث عن القيم الناقصة أولًا، ثم نقرر هل نحذفها أو نعوضها ولماذا.',
    'نصدر الجدول بعد تنظيفه إلى ملف جديد حتى نحافظ على النسخة الأصلية.'
  ],
  [
    'يساعد الرسم البياني على اكتشاف نمط في الأرقام، ونختار نوعه حسب السؤال.',
    'يربط المخطط الخطي القيم المرتبة، مثل درجات الحرارة خلال شهور السنة.',
    'يقارن المخطط العمودي مقادير فئات مختلفة باستخدام مقياس واضح.',
    'يوضح المخطط الدائري أجزاءً تشكل كلًا واحدًا، مثل تقسيم وقت اليوم.',
    'يعرض المخطط المبعثر قياسين بالأرقام، لكنه لا يثبت وحده أن أحدهما سبب الآخر.',
    'تبني Tkinter نافذة من عناصر مثل العناوين والأزرار وتضع كل عنصر في مكانه.',
    'يمكن عرض رسم Matplotlib داخل نافذة Tkinter وتحديثه عند تغيير البيانات.',
    'يحفظ Git لقطات من تغييرات المشروع في تسجيلات يسهل الرجوع إليها.',
    'يحفظ مستودع GitHub ملفات المشروع وتاريخه لمشاركتها عبر الإنترنت.',
    'يعرّف README بالمشروع ويشرح متطلباته وطريقة تشغيله للقارئ الجديد.'
  ]
];

const stageNotes = {
  ar: [
    'ابدأ بالهدف، ثم تتبع كل خطوة حتى النهاية. لو النتيجة لم تناسبك، غيّر خطوة واحدة وجرب ثانية.',
    'فكر في القصة كأنها مشهد مسرحي: شخصية، حدث يبدأ الحركة، ثم استجابة يراها الجمهور.',
    'اللعبة مجموعة قواعد صغيرة تتعاون معًا. اختبر قاعدة الحركة وحدها، ثم النقاط، ثم الفوز أو الخسارة.',
    'العناصر مثل قطع البناء: اختر العنصر الذي يصف المحتوى، ثم رتّب القطع ليقرأها المتصفح بسهولة.',
    'غيّر خاصية واحدة في كل مرة، وقارن شكل الصفحة قبل التغيير وبعده لتعرف أثرها.',
    'اتبع رحلة البيانات: إدخال من المستخدم، قرار أو حساب، ثم نتيجة تظهر على الصفحة.',
    'فكر في البرنامج كسلسلة: حدث يبدأ، بيانات يتم فحصها، ثم استجابة واضحة للمستخدم.',
    'اسأل سؤالًا محددًا عن الجدول، وافحص العينة والفراغات قبل أن تحسب أو تصدر النتيجة.',
    'الرسم الجيد لا يزيّن الأرقام فقط؛ إنه يجيب عن سؤال، ويعرض مقياسًا وعناوين واضحة.'
  ],
  en: [
    'Start with the goal, then follow each step to the end. If the result is off, change one step and try again.',
    'Think of a story as a tiny play: a character, an event that starts the action, and a response the audience can see.',
    'A game is a team of small rules. Test movement, then score, then the win or lose condition.',
    'HTML elements are building pieces: choose one that describes the content, then arrange the pieces so the browser can read them.',
    'Change one style at a time and compare the page before and after to see what that rule does.',
    'Follow the data journey: input from a person, a decision or calculation, and a result shown on the page.',
    'Think of a program as a chain: an event starts, data is checked, and a clear response follows.',
    'Ask a specific question about a table, and inspect sample rows and blanks before calculating or exporting.',
    'A good chart does more than decorate numbers: it answers a question with a clear scale and labels.'
  ]
};

const secondExamplesAr = [
  [
    'قبل الخروج: ارتدِ الحذاء، خذ الحقيبة، ثم افتح الباب. لو بدّلنا الخطوات قد ننسى الحقيبة.',
    'للوصول إلى المقعد: تحرك مربعين للأعلى ثم مربعًا لليمين، وعدّ كل حركة على الشبكة.',
    'اسحب قطعة شكلها دائرة إلى مكانها، ثم اترك زر الفأرة لتثبت في الإطار.',
    'في تصفيق الإيقاع، كرر «صفّق، انتظر» ثلاث مرات بدل ترديد التعليمات كاملة.',
    'إذا كان الطريق يحتاج يمينًا مرتين، اختصرهما بأمر «كرر الانعطاف يمينًا مرتين».',
    'لو وصل الروبوت إلى الشجرة بدل البيت، راجع الاتجاهات وابحث عن أول انعطاف خاطئ.',
    'جرّب طريقًا، ولاحظ المربع الذي أخطأ فيه الروبوت، ثم عدّل الأمر المسؤول عنه.',
    'إذا انتهى الماء من الزجاجة، املأها قبل اللعب؛ وإلا خذها معك كما هي.',
    'إذا ظهرت علامة القمر على المربع، اتجه إلى البيت؛ وإلا أكمل نحو الحديقة.',
    'ارسم مثلثًا بتكرار «تحرك ثم انعطف» ثلاث مرات، مع نفس المسافة لكل ضلع.'
  ],
  [
    'ابدأ مشروعك باختيار شخصية وخلفية، ثم ضع كتلة العلم الأخضر قبل أوامر الحركة.',
    'تحرك خمس خطوات للأمام ثم خطوتين للخلف لتعود الشخصية ثلاثة مربعات من نقطة البداية.',
    'عند لمس الشخصية للنجمة، اجعلها تقول «وجدتها!»؛ وعند اصطدامها بالحائط توقف.',
    'سجّل صوت جرس قصير واجعله يعمل عندما تلمس الشخصية صندوق الهدايا.',
    'اجعل الشخصية تقول «انظروا!» ثم تكبر قليلًا كي يلاحظها المشاهد.',
    'تنتظر الشخصية ثانيتين بعد وصولها للمسرح، ثم تبدأ الرقص أمام الجمهور.',
    'كرر حركة رفرفة الجناحين كي يبدو الطائر وكأنه يطير في مكانه.',
    'في صفحة البداية، يلمس البطل الباب لينتقل إلى صفحة المغامرة.',
    'ترسل القطة رسالة عند العثور على الكرة، فيبدأ الكلب البحث عنها.',
    'ارسم في المشهد الأول المشكلة، وفي الثاني محاولة الحل، وفي الثالث النتيجة.'
  ],
  [
    'غيّر x إلى -80 فتنتقل الشخصية يسار مركز المنصة، وغيّر y إلى 60 فتصعد.',
    'عند ضغط السهم للأعلى، زد y قليلًا في كل مرة بدل قفزة كبيرة واحدة.',
    'عندما يلمس اللاعب اللون الأحمر، أعده إلى آخر نقطة حفظ بدل أن يخسر الجولة.',
    'كلما التقط اللاعب جوهرة، أضف 10 إلى النقاط بدل نقطة واحدة.',
    'ابدأ بخمس وحدات صحة؛ إذا هبطت إلى صفر، أخفِ اللاعب وأظهر شاشة النهاية.',
    'أنشئ نسخة من العدو كل ثانيتين، واحذف النسخة عندما تخرج من الشاشة.',
    'إذا كانت سرعة القفز للأعلى 8 ثم تقل بواحد كل خطوة، تبدأ الشخصية في الهبوط.',
    'اجمع أوامر بدء الجولة في كتلة اسمها «ابدأ اللعب» واستخدمها بعد العلم الأخضر.',
    'يتحرك الحارس بين نقطتين، لكنه يلاحق اللاعب إذا اقترب منه لمسافة قصيرة.',
    'عندما يصل العداد إلى صفر، أوقف المؤقت والحركة واعرض نتيجة الجولة.'
  ],
  [
    'ضع اسم الموقع داخل title ليظهر في لسان المتصفح، وضع عنوان الترحيب داخل body.',
    'استخدم h1 لعنوان «نادي العلوم» وh2 لعناوين مثل «المواعيد» و«الأنشطة».',
    'اكتب مكونات الساندويتش في قائمة عادية، وخطوات تحضيره في قائمة مرقمة.',
    'صورة روبوت تحتاج نصًا بديلًا مثل «روبوت صغير بعجلات حمراء» بدل اسم الملف فقط.',
    'اربط كلمة «النتائج» بصفحة مستقلة حتى يجد الزائر ما يبحث عنه بسرعة.',
    'جدول الرحلات يضع اسم الوجهة والوقت والسعر في أعمدة منفصلة.',
    'يحتوي نموذج المسابقة على حقل للاسم وحقل للبريد وزر للمشاركة.',
    'استخدم اختيارًا واحدًا للسؤال «أي صف؟» ومربعات متعددة للهوايات.',
    'أضف مقطعًا صوتيًا مع زر تشغيل حتى يختار الزائر وقت الاستماع.',
    'ضع شعار الموقع والتنقل داخل header، واجعل محتوى الصفحة داخل main.'
  ],
  [
    'قاعدة .title يمكن أن تجعل عناوين البطاقات عريضة دون تغيير نصوص الفقرات.',
    'استخدم خلفية فاتحة ونصًا داكنًا، ثم أضف صورة هادئة لقسم واحد فقط.',
    'استخدم خطًا عريضًا للعناوين وخطًا عاديًا للشرح كي يظهر الفرق بينهما.',
    'زيادة padding تبعد النص عن الحد؛ وزيادة margin تبعد البطاقة عن جارتها.',
    'اجعل شريط القائمة ثابتًا أعلى الصفحة بينما يبقى محتوى المقال قابلًا للتمرير.',
    'رتب زرّي «ابدأ» و«اعرف أكثر» بجوار بعضهما باستخدام Flexbox.',
    'ضع ست صور في شبكة من ثلاثة أعمدة، وصفين متساويين.',
    'غيّر لون الرابط عند المرور عليه لتوضيح أنه قابل للنقر.',
    'حوّل قائمة من ثلاثة أعمدة على الكمبيوتر إلى عمود واحد على الهاتف.',
    'ضع اسم الكتاب وصورته وسطرًا عن مؤلفه داخل بطاقة متناسقة.'
  ],
  [
    'افحص قيمة score في وحدة التحكم بعد جمع نجمة لتعرف هل تغيرت كما توقعت.',
    'خزّن عدد المحاولات في let، واسم اللعبة الثابت في const.',
    'إذا أدخل اللاعب 6 و7، حوّل النصين إلى أرقام ثم اعرض 13.',
    'إذا كان الرصيد كافيًا، اعرض زر الشراء؛ وإلا اعرض المبلغ الناقص.',
    'اسمح بحجز المقعد إذا كان العمر مناسبًا أو كان معه إذن ولي الأمر.',
    'غيّر نص الزر إلى «تم الحفظ» بعد الضغط عليه.',
    'عند الضغط على نجمة، شغّل دالة تزيد النقاط وتحدّث النص.',
    'أنشئ دالة تجمع ثمن لعبتين وتعيد المجموع بدل تكرار الجمع.',
    'استخدم حلقة لعرض أسماء خمسة أصدقاء من مصفوفة.',
    'اختر فاكهة عشوائية من قائمة، ثم اعرض اسمها على الصفحة.'
  ],
  [
    'انتظر ثلاث ثوانٍ ثم ابدأ الجولة، وحدث المؤقت مرة في كل ثانية.',
    'اطلب كلمة مرور مرتين، ولا تسمح بإرسال النموذج إذا لم تتطابقا.',
    'إذا تداخل صندوق اللاعب وصندوق الجائزة، أخفِ الجائزة وأضف نقطة.',
    'عند الضغط على مفتاح البيانو، اعزف نغمة مختلفة لكل مفتاح.',
    'اطبع اسمك وسطر ترحيب، وشاهد كيف يظهر كل أمر بالترتيب.',
    'اطلب عددًا من المستخدم ثم حوّله إلى int قبل معرفة إن كان زوجيًا.',
    'صنّف الدرجة إلى «ممتاز» أو «جيد» أو «تحتاج تدريبًا» بشروط مرتبة.',
    'استخدم for لثلاث جولات ثابتة، وwhile حتى يخمن اللاعب الإجابة.',
    'أنشئ دالة تحسب السعر بعد الخصم وتعيد السعر الجديد.',
    'استخدم قائمة لأسماء الفريق، وقاموسًا لحفظ اسم القائد ونقاطه.'
  ],
  [
    'ارسم نجمة بتكرار خطوة مستقيمة ثم انعطاف منتظم في كل مرة.',
    'اجعل مفتاح المسافة يحرك السلحفاة للأمام، وأوقفها قبل حدود النافذة.',
    'إذا كتب المستخدم كلمة بدل رقم، اطلب منه المحاولة مرة أخرى برسالة مفهومة.',
    'أضف نتيجة جديدة إلى ملف سجل بدل حذف النتائج القديمة.',
    'أنشئ ملف CSV لأسماء الكتب وأسماء مؤلفيها في عمودين.',
    'بعد تحميل الجدول، افحص أسماء الأعمدة وعدد الصفوف قبل أي حساب.',
    'اعرض أسماء الطلاب الذين تجاوزوا 80، ثم رتبهم حسب الدرجة.',
    'احسب متوسط كل فريق واعرف أي فريق تحسن أكثر.',
    'إذا كانت خانة الاسم فارغة، لا تخمّن الاسم؛ ضع علامة للمراجعة.',
    'صدّر أسماء الناجحين ودرجاتهم إلى ملف تقرير منفصل.'
  ],
  [
    'استخدم خطًا لتوضيح تغير عدد الزوار من يوم إلى اليوم الذي يليه.',
    'اربط درجات الاختبارات القصيرة عبر الأسابيع لملاحظة التحسن.',
    'قارن عدد أهداف ثلاثة فرق بأعمدة تبدأ من الصفر.',
    'اعرض نسبة وقت الدراسة والراحة من مجموع ساعات اليوم.',
    'ضع ساعات التدريب على محور والنتيجة على الآخر لتبحث عن علاقة.',
    'أضف زرًا يغير رسالة ترحيب في نافذة Tkinter.',
    'اختر الشهر من قائمة، ثم أعد رسم أعمدة الأمطار للشهر المختار.',
    'احفظ نسخة قبل تعديل الواجهة حتى تستطيع الرجوع إليها.',
    'شارك ملفات الكود والصور اللازمة، ولا ترفع كلمات مرور أو بيانات خاصة.',
    'أضف لقطة شاشة للمشروع وخطوات التشغيل إلى README.'
  ]
];

const capstones = [
  [['The Treasure Map Run','Guide a character through an obstacle-filled maze to a treasure using clear steps, loops, and path triggers.',['Algorithms','Loops','Maps']],['Unplugged Family Robot','Write a paper instruction guide that helps a family member draw a house, using repetition and simple conditions.',['Instructions','Repetition','If / then']],['My Digital Painting','Program an artist to draw a colorful castle flag from geometric lines and shapes.',['Directions','Patterns','Shapes']]],
  [['The Jungle Concert','Tap animal characters to play recorded sounds while birds loop across the background.',['Events','Sound','Loops']],['Undersea Adventure Movie','Animate a fish escaping a shark, changing scenes at a bump, then sharing a voice message in a safe cave.',['Scenes','Triggers','Messages']],['Vehicle Racing Game','Start three vehicles with a tap, compare their speeds, and celebrate the winner with sound and animation.',['Motion','Timing','Events']]],
  [['Ninja Jump Platformer','Jump between platforms, collect glowing orbs, and avoid patrolling spikes as lava rises.',['Gravity','Health','Scoring']],['Space Defender Invaders','Fly a spaceship, fire cloned laser shots at alien waves, and dodge asteroids.',['Clones','Controls','Collisions']],['Maze Escape with AI Guard','Find a key and exit before time runs out while an AI ghost follows the maze.',['Pathfinding','Timer','Game state']]],
  [['Ultimate Recipe Hub','Build a multi-page recipe site with ingredient lists, preparation steps, a video, and cooking-time tables.',['HTML','Lists','Tables']],['School Subject Survey Quiz','Create a school survey with text fields, club checkboxes, and a student review form.',['Forms','Inputs','Labels']],['My Coding Autobiography Portal','Make a personal site with a project catalog, milestone lists, images, and contact links.',['Pages','Images','Links']]],
  [['Animal Directory Showcase','Create a responsive animal catalog with cards that respond to hover.',['Grid','Cards','Transitions']],['Mobile-First Coffee Shop','Design a café page with a navigation bar, a hero banner, and a responsive menu.',['Responsive','Flexbox','Navigation']],['My Portfolio Gallery','Build a filtered project gallery with screenshots and clear descriptions.',['Grid','Images','Filters']]],
  [['The Digital Moodboard','Select a mood to change the page theme, show a matching image, and reveal a random quote.',['Events','DOM','Randomness']],['Smart Age & Ticket Validator','Check a visitor’s age and budget, then show whether they can buy a ride ticket.',['Inputs','Conditions','DOM']],['Mini Math Solver App','Build a calculator with buttons for four operations and a dynamic result.',['Functions','Events','Numbers']]],
  [['Web-Based Virtual Piano','Build piano keys that play notes on click or when matching keyboard keys are pressed.',['Events','Audio','Keyboard']],['Console Chatbot Assistant','Ask for a name, calculate an age, check a mood, and play a text guessing game.',['Python','Inputs','Conditions']],['Interactive Score Card','Create a scoreboard with timers, buttons to update points, and a game-over alert.',['Timers','Events','State']]],
  [['The Candy Catcher Game','Control a turtle player to catch falling candy and update the score.',['Turtle','Keyboard','Score']],['Grade Analyzer Program','Load classroom scores, filter failing results, calculate top scores, and export a report.',['Pandas','Filter','CSV']],['Safe Login Vault','Check credentials stored in a file and handle invalid attempts safely.',['Files','Exceptions','Validation']]],
  [['Sports Analytics Dashboard','Select an athlete and view career trends as charts inside a desktop app.',['Tkinter','Matplotlib','CSV']],['Daily Habits Visual Dashboard','Record study, sleep, and screen time, then explore patterns in scatter plots.',['Data','GUI','Charts']],['Weather History Hub','Compare monthly rainfall and temperature with clear charts in a desktop dashboard.',['Bar charts','Tkinter','Weather']]],
];
const capstonesAr = [
  [['رحلة خريطة الكنز','وجّه شخصية عبر متاهة مليئة بالعقبات إلى الكنز باستخدام خطوات واضحة وحلقات ومثيرات للمسار.',['خوارزميات','تكرار','خرائط']],['روبوت العائلة الورقي','اكتب تعليمات ورقية تساعد فردًا من العائلة على رسم بيت باستخدام التكرار والشروط.',['تعليمات','تكرار','إذا / فإن']],['لوحتي الرقمية','برمج رسامًا رقميًا ليكوّن علم قلعة ملوّنًا من خطوط وأشكال هندسية.',['اتجاهات','أنماط','أشكال']]],
  [['حفلة الغابة','اضغط على شخصيات الحيوانات لتشغيل أصواتها، بينما تتحرك الطيور باستمرار في الخلفية.',['أحداث','صوت','حلقات']],['مغامرة تحت البحر','حرّك سمكة تهرب من قرش، وغيّر المشهد عند الاصطدام، ثم أرسل رسالة صوتية من الكهف الآمن.',['مشاهد','مثيرات','رسائل']],['سباق المركبات','ابدأ حركة ثلاث مركبات باللمس، وقارن سرعتها، ثم احتفل بالفائز بصوت ورسوم متحركة.',['حركة','توقيت','أحداث']]],
  [['لعبة قفز النينجا','اقفز بين المنصات واجمع الكرات المضيئة وتجنّب الأشواك بينما ترتفع الحمم.',['جاذبية','صحة','نقاط']],['مدافع الفضاء','قُد مركبة فضائية وأطلق نسخًا من أشعة الليزر على موجات الفضائيين وتفادَ النيازك.',['نسخ','تحكم','اصطدام']],['الهروب من الحارس الذكي','اعثر على المفتاح والمخرج قبل انتهاء الوقت، بينما يطاردك شبح ذكي داخل المتاهة.',['تتبّع المسار','مؤقت','حالة اللعبة']]],
  [['موسوعة الوصفات','أنشئ موقع وصفات متعدد الصفحات بقوائم للمكونات وخطوات التحضير وفيديو وجدول للأوقات.',['HTML','قوائم','جداول']],['استبيان المواد الدراسية','صمّم استبيانًا مدرسيًا يحتوي على حقول نصية وخيارات للأنشطة ومراجعة الطالب.',['نماذج','مدخلات','تسميات']],['بوابة حكايتي البرمجية','أنشئ موقعًا شخصيًا به معرض مشروعات وقوائم للإنجازات وصور وروابط للتواصل.',['صفحات','صور','روابط']]],
  [['دليل الحيوانات المصوّر','أنشئ دليلًا متجاوبًا للحيوانات ببطاقات تتفاعل عند المرور عليها.',['شبكة','بطاقات','انتقالات']],['مقهى يبدأ تصميمه من الهاتف','صمّم صفحة مقهى بشريط تنقل ولافتة رئيسية وقائمة تتكيف مع الشاشة.',['متجاوب','Flexbox','تنقل']],['معرض أعمالي','أنشئ معرضًا لمشروعاتك مع صور ومرشحات وأوصاف واضحة.',['شبكة','صور','مرشحات']]],
  [['لوحة الحالة المزاجية','اختر حالتك لتغيير ألوان الصفحة وإظهار صورة واقتباس عشوائي مناسب.',['أحداث','DOM','عشوائية']],['مدقق العمر والتذاكر','تحقق من عمر الزائر وميزانيته، ثم اعرض إمكانية شراء تذكرة اللعبة.',['مدخلات','شروط','DOM']],['آلة حساب صغيرة','أنشئ آلة حاسبة بأزرار للعمليات الأربع ونتيجة تتغير فورًا.',['دوال','أحداث','أرقام']]],
  [['بيانو يعمل على الويب','أنشئ مفاتيح بيانو تعزف عند الضغط عليها أو عند استخدام لوحة المفاتيح.',['أحداث','صوت','لوحة مفاتيح']],['مساعد دردشة نصي','اسأل عن الاسم واحسب العمر وتعرّف على الحالة المزاجية ثم العب لعبة تخمين.',['Python','مدخلات','شروط']],['بطاقة نتائج تفاعلية','أنشئ لوحة نتائج بمؤقت وأزرار لتعديل النقاط وتنبيه عند انتهاء المباراة.',['مؤقتات','أحداث','حالة']]],
  [['لعبة صائد الحلوى','حرّك لاعبًا مرسومًا بـTurtle لالتقاط الحلوى المتساقطة وتحديث النقاط.',['Turtle','لوحة مفاتيح','نقاط']],['برنامج تحليل الدرجات','حمّل درجات الصف وصفِّ النتائج واحسب أعلى الدرجات ثم صدّر تقريرًا.',['Pandas','تصفية','CSV']],['خزنة تسجيل دخول آمنة','تحقق من بيانات الدخول المحفوظة في ملف وتعامل بأمان مع المحاولات غير الصحيحة.',['ملفات','استثناءات','تحقق']]],
  [['لوحة تحليل الرياضة','اختر لاعبًا وشاهد اتجاهات مسيرته في رسوم بيانية داخل تطبيق مكتبي.',['Tkinter','Matplotlib','CSV']],['لوحة العادات اليومية','سجّل وقت الدراسة والنوم والشاشة ثم اكتشف الأنماط في المخططات المبعثرة.',['بيانات','واجهة','رسوم']],['سجل الطقس','قارن الأمطار ودرجات الحرارة شهريًا برسوم واضحة داخل لوحة مكتبية.',['أعمدة','Tkinter','طقس']]],
];

const copy={
 ar:{brand:'مختبر البرمجة',brandSub:'من الفكرة إلى الكود',curriculum:'المنهج',yourProgress:'تقدمك',learningPath:'مسار التعلم',saved:'حُفظ تقدمك',track:'مسار تعليمي تفاعلي',grade:'الصف',lessons:'الدروس',projects:'مشروع التخرج',footer:'تعلّم بالتجربة. كل محاولة تقرّبك من الحل.',explain:'الفكرة ببساطة',example:'مثال خطوة بخطوة',try:'دورك في التجربة',quiz:'اختبر فهمك',quizCount:'٣ أسئلة قصيرة',submit:'اعرض النتيجة',retry:'حاول مرة أخرى',previous:'الدرس السابق',next:'الدرس التالي',correct:'إجابة صحيحة',wrong:'مش بالضبط. جرّب تاني.',answerAll:'جاوب عن الأسئلة الثلاثة الأول.',result:'نتيجتك',points:'إجابات صحيحة من ٣',passed:'ممتاز! اتسجل إتمام الدرس.',keepGoing:'راجع الفكرة وجرب الاختبار مرة أخرى.',complete:'مكتمل',minutes:'حوالي ١٠ دقائق',capTitle:'مشروع التخرج',capIntro:'اختار فكرة واحدة وطبّق اللي اتعلمته في مشروع كامل.',capLabel:'٣ أفكار للاختيار',startProject:'ابدأ من الفكرة التي تحبها',practice:'مهمة صغيرة',run:'شغّل التجربة',reset:'إعادة ضبط',output:'النتيجة هتظهر هنا',movement:'حرك الروبوت للنجمة',scene:'مشهد قصصي',game:'نظام نقاط اللعبة',web:'منشئ صفحة HTML',style:'استوديو CSS',calculator:'آلة JavaScript',scoreboard:'لوحة نتائج',data:'مستكشف بيانات Python',chart:'استوديو الرسوم',changeObserve:'غيّر حاجة ولاحظ النتيجة',move:'تحرك',arrived:'وصلت للنجمة! شاطر.',current:'مكانك الآن',heading:'عنوان الصفحة',preview:'معاينة',color:'لون الخلفية',size:'حجم الخط',jump:'اقفز',dance:'ارقص',say:'قل مرحبًا',startScene:'ابدأ المشهد',score:'النقاط',collect:'اجمع النجمة',increase:'زود نقطة',decrease:'قلل نقطة',operation:'العملية',add:'جمع',subtract:'طرح',multiply:'ضرب',divide:'قسمة',firstNumber:'الرقم الأول',secondNumber:'الرقم الثاني',noDivide:'مينفعش نقسم على صفر.',filter:'اعرض',all:'الكل',passing:'الناجحون',high:'أعلى من ٨٠',records:'سجلات',line:'خطي',bars:'أعمدة',understood:'فهمت الفكرة؟',gradeElementary:'المرحلة الابتدائية',gradeMiddle:'المرحلة الإعدادية',lessonOf:'الدرس',lead:'الهدف من درس النهارده:',conceptQ:'أي مهارة بنتمرن عليها في الدرس ده؟',applyQ:'أي اختيار يطبّق الفكرة اللي اتعلمناها؟',reflectQ:'لو النتيجة مختلفة عن اللي توقعته، تعمل إيه؟',applyRight:'أستخدم الفكرة لحل الموقف وأختبر النتيجة.',applyWrong1:'أختار إجابة عشوائية من غير ما أجرّب.',applyWrong2:'أتجاهل الهدف وأكمل أي خطوات.',reflectRight:'أراجع الخطوات وأغيّر حاجة واحدة ثم أجرّب تاني.',reflectWrong1:'أفترض إن البرنامج صح من غير اختبار.',reflectWrong2:'أغيّر كل حاجة مرة واحدة من غير ما أراجع.',selectAction:'اختار الحركة',grid:'شبكة الاتجاهات',selfCheck:'فكر في إجابتك قبل ما تختار.',correctFeedback:'بالضبط! اختيار موفق.',completedAlready:'الدرس ده متسجل كمكتمل.',chooseGrade:'اختار صفًا من القائمة.'},
 en:{brand:'Code Lab',brandSub:'From idea to code',curriculum:'CURRICULUM',yourProgress:'Your progress',learningPath:'Learning path',saved:'Progress saved',track:'INTERACTIVE LEARNING TRACK',grade:'GRADE',lessons:'Lessons',projects:'Capstone project',footer:'Learn by trying. Every attempt moves you closer.',explain:'The idea, simply',example:'A worked example',try:'Your turn to try',quiz:'Check your understanding',quizCount:'3 quick questions',submit:'See my result',retry:'Try again',previous:'Previous lesson',next:'Next lesson',correct:'Correct answer',wrong:'Not quite. Try again.',answerAll:'Answer all three questions first.',result:'Your result',points:'correct out of 3',passed:'Great work! Lesson completion saved.',keepGoing:'Review the idea and try the quiz again.',complete:'Complete',minutes:'About 10 minutes',capTitle:'Capstone project',capIntro:'Choose one idea and apply what you have learned in a complete project.',capLabel:'3 ideas to choose from',startProject:'Start with an idea you like',practice:'Quick challenge',run:'Run simulation',reset:'Reset',output:'Your result appears here',movement:'Guide the robot to the star',scene:'Story scene',game:'Game score system',web:'HTML page builder',style:'CSS studio',calculator:'JavaScript calculator',scoreboard:'Interactive scoreboard',data:'Python data explorer',chart:'Chart studio',changeObserve:'Change something and observe',move:'Move',arrived:'You reached the star! Nice work.',current:'Current position',heading:'Page heading',preview:'Preview',color:'Background color',size:'Font size',jump:'Jump',dance:'Dance',say:'Say hello',startScene:'Start scene',score:'Score',collect:'Collect the star',increase:'Add a point',decrease:'Remove a point',operation:'Operation',add:'Add',subtract:'Subtract',multiply:'Multiply',divide:'Divide',firstNumber:'First number',secondNumber:'Second number',noDivide:'Cannot divide by zero.',filter:'Show',all:'All',passing:'Passing',high:'Above 80',records:'records',line:'Line',bars:'Bars',understood:'Ready to check?',gradeElementary:'Elementary school',gradeMiddle:'Middle school',lessonOf:'Lesson',lead:'Today’s goal:',conceptQ:'Which skill are we practicing in this lesson?',applyQ:'Which choice applies the idea we learned?',reflectQ:'If the result is not what you expected, what should you do?',applyRight:'Use the idea to solve the situation and test the result.',applyWrong1:'Choose randomly without trying it.',applyWrong2:'Ignore the goal and continue with any steps.',reflectRight:'Review the steps, change one thing, and test again.',reflectWrong1:'Assume the program is right without testing.',reflectWrong2:'Change everything at once without checking.',selectAction:'Choose an action',grid:'Direction grid',selfCheck:'Think it through before you choose.',correctFeedback:'Exactly! Good choice.',completedAlready:'This lesson is already marked complete.',chooseGrade:'Choose a grade from the list.'}
};

const documentationByGrade=[
  [{title:'Code.org | Computer Science Fundamentals',url:'https://code.org/curriculum/computer-science-fundamentals'}],
  [{title:'ScratchJr | Teaching resources',url:'https://www.scratchjr.org/teach'}],
  [{title:'Scratch | Ideas and tutorials',url:'https://scratch.mit.edu/ideas'}],
  [{title:'MDN | Structuring content with HTML',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content'}],
  [{title:'MDN | CSS styling basics',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics'},{title:'MDN | CSS layout',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout'}],
  [{title:'MDN | JavaScript scripting',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting'}],
  [{title:'MDN | JavaScript events',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events'},{title:'Python | Tutorial',url:'https://docs.python.org/3/tutorial/'}],
  [{title:'Python | Tutorial',url:'https://docs.python.org/3/tutorial/'},{title:'Pandas | 10 minutes to pandas',url:'https://pandas.pydata.org/docs/user_guide/10min.html'}],
  [{title:'Matplotlib | Pyplot tutorial',url:'https://matplotlib.org/stable/tutorials/pyplot.html'},{title:'GitHub | About Git and GitHub',url:'https://docs.github.com/en/get-started/start-your-journey/about-github-and-git'}]
];

copy.ar.result='الناتج';
copy.en.result='Result';
Object.assign(copy.ar,{games:'الألعاب والتحديات',lessonGoal:'النهارده هنتعلم:',exampleOne:'مثال ١',exampleTwo:'مثال ٢',thinkNote:'فكر فيها كده',tutorTitle:'اسأل المستر',tutorIntro:'اسأل عن الفكرة أو المثال أو طريقة الحل.',tutorContext:'إجابات من الدرس',tutorWelcome:'أهلًا! أنا معاك في الدرس ده. قولي إيه الجزء اللي محتاج توضيح؟',askExplain:'اشرح تاني',askExample:'اديني مثال',askPractice:'إزاي أطبق؟',askPlaceholder:'اكتب سؤالك عن الدرس...',askSend:'اسأل',readAnswer:'اقرأ الرد',tutorPracticeAnswer:'تعالى نطبقها خطوة خطوة:',tutorFallback:'لو سؤالك عن نقطة محددة، اكتب اسمها أو اسألني عن مثال أو خطوات الحل.',speechUnavailable:'ميزة الصوت غير متاحة في هذا المتصفح.',arcadeTitle:'ألعاب البرمجة',arcadeIntro:'جرّب التحديات، واجمع نقاطًا، واكتشف القواعد البرمجية وراء كل لعبة.',guessTitle:'خمن الرقم',guessDescription:'لعبة Python: استخدم المقارنة والمحاولات المتكررة لتصل للرقم.',guessPlaceholder:'رقم من ١ إلى ٢٠',guessButton:'جرّب الرقم',newNumber:'رقم جديد',guessHint:'اختر رقمًا من ١ إلى ٢٠.',tooLow:'الرقم السري أكبر. جرّب تاني.',tooHigh:'الرقم السري أصغر. جرّب تاني.',guessWon:'صح! وصلت للرقم في',attempts:'محاولات.',reactionTitle:'تحدي سرعة التفاعل',reactionDescription:'لعبة JavaScript: استنى الإشارة الخضراء واضغط بأسرع ما تقدر.',reactionStart:'ابدأ الاستعداد',reactionWait:'استنى الإشارة...',reactionGo:'اضغط الآن!',reactionAgain:'جولة جديدة',reactionEarly:'لسه الإشارة ما ظهرتش!',reactionResult:'زمنك:',ms:'مللي ثانية',detectiveTitle:'محقق البيانات',detectiveDescription:'اقرأ القيم واختر الفئة صاحبة أكبر رقم.',detectiveQuestion:'أي فئة سجلت القيمة الأكبر؟',nextRound:'جولة تالية',dataScore:'نقاطك',rightPick:'اختيار صحيح! أحسنت.',wrongPick:'قارن الأرقام وجرب مرة أخرى.',round:'الجولة'});
Object.assign(copy.en,{games:'Games & challenges',lessonGoal:'Today we will learn:',exampleOne:'Example 1',exampleTwo:'Example 2',thinkNote:'Think about it',tutorTitle:'Ask the tutor',tutorIntro:'Ask about the idea, an example, or how to solve the challenge.',tutorContext:'Answers from this lesson',tutorWelcome:'Hi! I’m here to help with this lesson. What would you like me to explain?',askExplain:'Explain again',askExample:'Show an example',askPractice:'How do I apply it?',askPlaceholder:'Ask a question about this lesson...',askSend:'Ask',readAnswer:'Read answer',tutorPracticeAnswer:'Let’s apply it step by step:',tutorFallback:'Ask about a specific term, request another example, or ask for help with the steps.',speechUnavailable:'Speech is not available in this browser.',arcadeTitle:'Code Arcade',arcadeIntro:'Play the challenges, collect points, and spot the coding rules behind each game.',guessTitle:'Guess the number',guessDescription:'Python game: use comparisons and repeated tries to find the secret number.',guessPlaceholder:'Number from 1 to 20',guessButton:'Try this number',newNumber:'New number',guessHint:'Choose a number from 1 to 20.',tooLow:'The secret number is higher. Try again.',tooHigh:'The secret number is lower. Try again.',guessWon:'Correct! You found it in',attempts:'guesses.',reactionTitle:'Reaction time',reactionDescription:'JavaScript game: wait for the green signal, then tap as quickly as you can.',reactionStart:'Get ready',reactionWait:'Wait for it...',reactionGo:'Tap now!',reactionAgain:'Play another round',reactionEarly:'The signal has not appeared yet!',reactionResult:'Your time:',ms:'ms',detectiveTitle:'Data detective',detectiveDescription:'Read the values and choose the category with the largest number.',detectiveQuestion:'Which category has the largest value?',nextRound:'Next round',dataScore:'Your score',rightPick:'Correct choice! Nice work.',wrongPick:'Compare the values and try again.',round:'Round'});
Object.assign(copy.ar,{tutorBreakdown:'خدها خطوة خطوة:',tutorCheck:'دلوقتي جرب المهمة وشوف هل وصلت لنفس النتيجة.',tutorWhy:'الفكرة تنجح لأن كل خطوة لها سبب ونتيجة نقدر نختبرها.'});
Object.assign(copy.en,{tutorBreakdown:'Let’s take it one step at a time:',tutorCheck:'Now try the challenge and compare your result.',tutorWhy:'This works because each step has a cause and a result we can test.'});
Object.assign(copy.ar,{deepTitle:'شرح الدرس الكامل مع المستر الذكي',deepIntro:'شرح خطوة بخطوة، أمثلة محلولة، تدريب، ثم الحل للمراجعة.',buildFullLesson:'ابنِ شرح الدرس',generating:'المستر بيجهز الشرح...',sources:'مراجع موثوقة',sourceNote:'روابط رسمية للقراءة والتوسع',connecting:'بنتصل بالمستر الذكي...',online:'المستر الذكي جاهز',offline:'المستر محتاج إعداد الخدمة',aiError:'ما قدرناش نوصل للمستر دلوقتي. راجع إعداد الخادم وحاول تاني.',lessonReady:'شرح الدرس جاهز',askLimit:'اكتب سؤالًا مرتبطًا بالدرس.'});
Object.assign(copy.en,{deepTitle:'Full lesson with the AI tutor',deepIntro:'Step-by-step teaching, worked examples, practice, then an answer key.',buildFullLesson:'Build the full lesson',generating:'The tutor is preparing the lesson...',sources:'Trusted references',sourceNote:'Official links for further reading',connecting:'Connecting to the AI tutor...',online:'AI tutor is ready',offline:'Tutor service needs setup',aiError:'Could not reach the tutor. Check the server setup and try again.',lessonReady:'Full lesson is ready',askLimit:'Ask a question connected to this lesson.'});

Object.assign(copy.ar,{localMode:'المستر (وضع محلي)',localNote:'رد فوري من محتوى الدرس. الذكاء الاصطناعي بيتفعّل تلقائيًا لما خدمة الـ AI تكون متاحة.'});
Object.assign(copy.en,{localMode:'Tutor (local mode)',localNote:'An instant answer from the lesson content. The AI turns on automatically once the AI service is available.'});
copy.ar.missionLabel='تحدي الدرس:';copy.en.missionLabel='Lesson challenge:';
const app={grade:0,lesson:0,lang:'ar',view:'lessons',answers:[null,null,null],grid:{x:0,y:0},score:0,chart:'line',tutorMessages:[],tutorContextKey:'',arcade:{secret:Math.floor(Math.random()*20)+1,tries:0,reactionState:'idle',reactionTimer:null,reactionStart:0,dataRound:1,dataScore:0}};
const progressId='codeLabProgressV1';
let completed={};try{completed=JSON.parse(localStorage.getItem(progressId)||'{}')}catch{}
const $=(sel,root=document)=>root.querySelector(sel), $$=(sel,root=document)=>[...root.querySelectorAll(sel)];
const tr=(key)=>copy[app.lang][key]||key; const gradeData=()=>rawGrades[app.grade]; const lessonData=()=>gradeData();
const n=(num)=>app.lang==='ar'?String(num).replace(/[0-9]/g,d=>'٠١٢٣٤٥٦٧٨٩'[+d]):String(num);
const gradeLabel=(i)=>app.lang==='ar'?`الصف ${['الأول','الثاني','الثالث','الرابع','الخامس','السادس','السابع','الثامن','التاسع'][i]}`:`Grade ${i+1}`;
const isDone=(g=app.grade,l=app.lesson)=>!!completed[ck(g,l)];
const doneCount=(g)=>Array.from({length:10},(_,i)=>completed[ck(g,i)]?1:0).reduce((a,b)=>a+b,0);
const lessonTitle=(g=app.grade,l=app.lesson)=>rawGrades[g][app.lang==='ar'?'lessonNamesAr':'lessonNamesEn'][l];
const detail=(field)=>field==='teaching'&&app.lang==='ar'?[arabicExplanations[app.grade][app.lesson]]:rawGrades[app.grade][`${field}${app.lang==='ar'?'Ar':'En'}`][app.lesson];
app.term=+(localStorage.getItem('codeLabTerm')||0);if(!window.TERM2)app.term=0;
const T1=rawGrades.map((g,i)=>({lessonNamesEn:g.lessonNamesEn,lessonNamesAr:g.lessonNamesAr,teachingEn:g.teachingEn,examplesEn:g.examplesEn,examplesAr:g.examplesAr,practiceEn:g.practiceEn,practiceAr:g.practiceAr,arabicExplanations:arabicExplanations[i].slice()}));
const ck=(g,l)=>(app.term?'t2-':'')+g+'-'+l, TOTAL=()=>window.TERM2?180:90;
function applyTerm(){const T=app.term&&window.TERM2?window.TERM2:T1;rawGrades.forEach((g,i)=>{['lessonNamesEn','lessonNamesAr','teachingEn','examplesEn','examplesAr','practiceEn','practiceAr'].forEach(k=>{g[k]=T[i][k]});arabicExplanations[i].splice(0,arabicExplanations[i].length,...T[i].arabicExplanations)})}
applyTerm();
/* ============================================================
   Code Lab — واجهة الاستخدام (state → render)
   كل تفاعل يعدّل الحالة ثم يعيد بناء الواجهة.
   ============================================================ */

/* ---------- نصوص الواجهة الإضافية ---------- */
Object.assign(copy.ar, {
  ariaMenu: 'فتح القائمة', ariaGrade: 'اختيار الصف', ariaTheme: 'تغيير وضع العرض', ariaLang: 'تغيير اللغة',
  ariaProfile: 'الملف الشخصي', ariaClose: 'إغلاق', ariaLessons: 'قائمة الدروس',
  titleTheme: 'الوضع الليلي / النهاري', titleLang: 'عربي / English',
  overall: 'تقدمك العام', certificate: 'شهادة الإكمال', remaining: 'متبقٍ',
  profileTitle: 'ملفك الشخصي', name: 'الاسم', points: 'النقاط', xp: 'نقطة', certs: 'الشهادات', doneLessons: 'دروس مكتملة',
  certTitle: 'شهادة إتمام', certHead: 'شهادة إتمام', certSub: 'تُمنح هذه الشهادة إلى', certCourse: 'لإتمامه بنجاح مسار', certDownload: 'تحميل / طباعة الشهادة',
  overview: 'الفكرة الأساسية', keyPoints: 'خطوات الشرح', workedExample: 'مثال محلول', secondExample: 'مثال إضافي',
  commonMistake: 'غلطة شائعة وحلّها', recap: 'الخلاصة في سطرين', challenge: 'مهمة تطبيقية',
  fullTutorial: 'الشرح الكامل خطوة بخطوة', referenceTable: 'جدول مرجعي سريع', exercises: 'تمارين للتطبيق',
  furtherReading: 'مصادر رسمية للتوسّع', activity: 'نشاط الدرس التفاعلي', tryIt: 'جرّبها بنفسك ▶', runCode: 'شغّل',
  statLessons: 'دروس', statDone: 'منجزة', statStage: 'المرحلة', gamesForGrade: 'ألعاب هذا الصف',
  gamesForGradeIntro: 'ألعاب متنوعة مبنية على دروس هذا الصف والترم الحالي.',
  markDone: 'تحديد كمكتمل', doneLabel: 'مكتمل', resultLabel: 'النتيجة',
  answerWhy: 'السبب: ', noPack: 'الشرح التفصيلي لهذا الدرس لسه ما اتولّدش. شغّل: node build-content.mjs ثم أعد تحميل الصفحة.',
  certLocked: 'أكمل كل دروس الصف الحالي الأول عشان تفتح الشهادة.',
  pointsEarned: 'أحسنت! كسبت نقاطًا جديدة.', certAwarded: 'مبروك! حصلت على شهادة إتمام', progressReset: 'تم مسح التقدم من جديد.',
  nameSaved: 'تم حفظ الاسم.', lessonCompleted: 'الدرس اتسجل كمكتمل 🎉', locked: 'اكتمل أولًا',
  unlockedNow: 'اتفتح دلوقتي!', summary: 'ملخص سريع', openLesson: 'افتح الدرس', noData: 'لا توجد بيانات لهذا العرض بعد.'
});
Object.assign(copy.en, {
  ariaMenu: 'Open menu', ariaGrade: 'Choose grade', ariaTheme: 'Switch theme', ariaLang: 'Switch language',
  ariaProfile: 'Profile', ariaClose: 'Close', ariaLessons: 'Lesson list',
  titleTheme: 'Light / dark mode', titleLang: 'عربي / English',
  overall: 'Overall progress', certificate: 'Certificate of completion', remaining: 'remaining',
  profileTitle: 'Your profile', name: 'Name', points: 'Points', xp: 'XP', certs: 'Certificates', doneLessons: 'Lessons completed',
  certTitle: 'Certificate of completion', certHead: 'Certificate of completion', certSub: 'This certificate is awarded to', certCourse: 'for successfully completing the course', certDownload: 'Download / print certificate',
  overview: 'Core idea', keyPoints: 'How it works', workedExample: 'Worked example', secondExample: 'Another example',
  commonMistake: 'A common mistake and its fix', recap: 'Recap in two lines', challenge: 'Practice challenge',
  fullTutorial: 'Full step-by-step tutorial', referenceTable: 'Quick reference', exercises: 'Exercises',
  furtherReading: 'Official references', activity: 'Interactive lesson activity', tryIt: 'Try it yourself ▶', runCode: 'Run',
  statLessons: 'lessons', statDone: 'done', statStage: 'Stage', gamesForGrade: 'Games for this grade',
  gamesForGradeIntro: 'Mixed games built from the lessons of this grade and term.',
  markDone: 'Mark as complete', doneLabel: 'Complete', resultLabel: 'Result',
  answerWhy: 'Why: ', noPack: 'The detailed lesson has not been generated yet. Run: node build-content.mjs, then reload the page.',
  certLocked: 'Finish every lesson in the current grade to unlock the certificate.',
  pointsEarned: 'Well done! You earned points.', certAwarded: 'Congratulations! You earned a certificate for', progressReset: 'Progress was cleared.',
  nameSaved: 'Name saved.', lessonCompleted: 'Lesson marked complete 🎉', locked: 'Finish first',
  unlockedNow: 'Unlocked now!', summary: 'Quick summary', openLesson: 'Open lesson', noData: 'Nothing to show here yet.'
});

/* ---------- التخزين والحالة ---------- */
const STORE = { theme: 'codeLabTheme', lang: 'codeLabLang', points: 'codeLabPoints', certs: 'codeLabCerts', name: 'codeLabName' };
const storeGet = (key, fallback) => { try { const raw = localStorage.getItem(key); return raw == null ? fallback : JSON.parse(raw); } catch { return fallback; } };
const storeSet = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };

app.theme = storeGet(STORE.theme, 'light');
app.lang = storeGet(STORE.lang, 'ar');
app.points = storeGet(STORE.points, 0);
app.certs = storeGet(STORE.certs, []);
app.name = storeGet(STORE.name, '');
if (!window.TERM2) app.term = 0;

const userName = () => app.name || (app.lang === 'ar' ? 'طالب/ـة' : 'Student');
const award = (amount, message) => { app.points += amount; storeSet(STORE.points, app.points); if (message) toast(message, 'success'); };
const save = () => storeSet(progressId, completed);

function applyTheme() {
  document.documentElement.dataset.theme = app.theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', app.theme === 'dark' ? '#080f1c' : '#0f3d63');
  const icon = $('#themeIcon');
  if (icon) icon.textContent = app.theme === 'dark' ? '☀' : '☾';
}

/* ---------- تحميل محتوى الدرس ---------- */
function ensurePack() {
  const key = packId();
  if (key in window.PACKS) return;
  window.PACKS[key] = null;
  fetch(`content/${app.term ? 't2-' : ''}g${app.grade}-l${app.lesson}.json`)
    .then(response => (response.ok ? response.json() : null))
    .then(data => { if (data) { window.PACKS[key] = data; if (packId() === key) render(); } else delete window.PACKS[key]; })
    .catch(() => { delete window.PACKS[key]; });
}
/* packData() = الحزمة كاملة (meta + اللغتين) · packBody() = محتوى اللغة الحالية فقط */
const packData = () => (window.PACKS[packId()] || (!app.term ? window.LESSON_PACK[packId()] : null) || null);
const packBody = () => { const pack = packData(); return pack ? (pack[app.lang] || null) : null; };

/* ---------- أدوات صغيرة ---------- */
const esc = value => String(value == null ? '' : value).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
const shuffle = list => [...list].sort(() => Math.random() - 0.5);
const isElement = value => value instanceof Element;
let toastTimer;
function toast(message, type) {
  const el = $('#toast');
  el.textContent = message;
  el.className = `toast show${type ? ' ' + type : ''}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

/* ---------- التنقل والاختيار ---------- */
function setGrade(grade) {
  app.grade = grade; app.lesson = 0; app.view = 'lessons';
  app.answers = [null, null, null]; app.grid = { x: 0, y: 0 }; app.score = 0;
  app.tutorMessages = []; app.tutorContextKey = '';
  render();
}
function setLesson(lesson) {
  app.lesson = lesson; app.answers = [null, null, null]; app.grid = { x: 0, y: 0 }; app.score = 0;
  app.tutorMessages = []; app.tutorContextKey = '';
  render();
}
function moveLesson(amount) { setLesson(Math.max(0, Math.min(9, app.lesson + amount))); }

/* ---------- render ---------- */
function render() {
  document.documentElement.lang = app.lang;
  document.documentElement.dir = app.lang === 'ar' ? 'rtl' : 'ltr';
  applyTheme();
  renderLabels();
  renderTopbar();
  renderSidebar();
  if (app.view === 'projects') renderProjects();
  else if (app.view === 'games') renderGames();
  else renderLessons();
  renderProgress();
}

function renderLabels() {
  $$('[data-i18n]').forEach(el => { el.textContent = tr(el.dataset.i18n); });
  $$('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', tr(el.dataset.i18nAria)); });
  $$('[data-i18n-title]').forEach(el => { el.setAttribute('title', tr(el.dataset.i18nTitle)); });
  $('#languageLabel').textContent = app.lang === 'ar' ? 'EN' : 'ع';
}

function renderTopbar() {
  const grades = rawGrades.map((g, i) => {
    const done = doneCount(i);
    return `<button type="button" class="year-btn ${i === app.grade ? 'active' : ''} ${done ? 'has-progress' : ''}" data-grade="${i}" title="${esc(g[app.lang])}" aria-current="${i === app.grade}">${n(i + 1)}</button>`;
  }).join('');
  $('#gradeSwitch').innerHTML = grades;
  $('#avatarBtn').textContent = userName().trim().charAt(0) || (app.lang === 'ar' ? 'ع' : 'S');
  const term = $('#termToggle');
  term.hidden = !window.TERM2;
  $('#termLabel').textContent = app.lang === 'ar' ? (app.term ? 'الترم الثاني' : 'الترم الأول') : (app.term ? 'Term 2' : 'Term 1');
  $('#gamesNavBtn').hidden = app.grade < 6;
  if (app.grade < 6 && app.view === 'games') app.view = 'lessons';
}

function renderSidebar() {
  const g = gradeData();
  $('#sidebarGrade').textContent = lessonTitle(0).length ? g[app.lang] : '';
  $('#sidebarMeta').textContent = `${gradeLabel(app.grade)} · ${app.lang === 'ar' ? (app.term ? 'الترم الثاني' : 'الترم الأول') : (app.term ? 'Term 2' : 'Term 1')}`;
  $$('#sectionNav [data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === app.view));
  const titles = rawGrades[app.grade][app.lang === 'ar' ? 'lessonNamesAr' : 'lessonNamesEn'];
  $('#lessonList').innerHTML = titles.map((title, i) => `
    <button type="button" class="unit-item ${i === app.lesson && app.view === 'lessons' ? 'active' : ''} ${isDone(app.grade, i) ? 'done' : ''}" data-lesson="${i}" aria-current="${i === app.lesson}">
      <span class="unit-number">${isDone(app.grade, i) ? '✓' : n(i + 1)}</span>
      <span class="unit-copy"><span class="unit-title">${esc(title)}</span><span class="unit-progress">${app.lang === 'ar' ? 'الدرس' : 'Lesson'} ${n(i + 1)} / ١٠</span></span>
    </button>`).join('');
}

function renderProgress() {
  const total = Object.values(completed).filter(Boolean).length;
  const percent = Math.round((total / TOTAL()) * 100);
  $('#progressFill').style.width = `${Math.min(100, percent)}%`;
  $('#progressText').textContent = app.lang === 'ar' ? `${n(percent)}٪ · ${n(total)} / ${n(TOTAL())} درس` : `${percent}% · ${total} / ${TOTAL()} lessons`;
}

/* ---------- عرض الدروس ---------- */
function renderLessons() {
  const g = gradeData();
  ensurePack();
  const meta = packData(), P = packBody();
  const teaching = detail('teaching');
  const example = detail('examples');
  const practice = detail('practice');
  const done = isDone();
  const percent = Math.round((doneCount(app.grade) / 10) * 100);
  const tags = lessonTitle().split(/[&(),:—/]/).map(part => part.trim()).filter(Boolean).slice(0, 3);

  const rail = Array.from({ length: 10 }, (_, i) => `
    <button type="button" class="lesson-chip ${i === app.lesson ? 'active' : ''} ${isDone(app.grade, i) ? 'done' : ''}" data-lesson="${i}" aria-label="${tr('lessonOf')} ${n(i + 1)}">${n(i + 1)}</button>`).join('');

  const steps = P && Array.isArray(P.steps) && P.steps.length ? P.steps : teaching;
  const language = meta && meta.lang ? meta.lang : '';

  $('#container').innerHTML = `
    <section class="hero">
      <span class="hero-badge">${tr('track')}</span>
      <h1>${esc(g[app.lang])}</h1>
      <p>${app.lang === 'ar' ? 'افهم الفكرة، شوف أمثلة محلولة، وجرّبها بنفسك خطوة بخطوة.' : 'Understand the idea, see worked examples, and try it yourself step by step.'}</p>
      <div class="hero-stats">
        <div><b>${n(doneCount(app.grade))}</b><span>${tr('lessons')}</span></div>
        <div><b>${n(10 - doneCount(app.grade))}</b><span>${tr('remaining')}</span></div>
        <div><b>${n(percent)}%</b><span>${esc(g[app.lang === 'ar' ? 'levelAr' : 'levelEn'])}</span></div>
      </div>
    </section>

    <nav class="lesson-rail" aria-label="${tr('lessons')}">${rail}</nav>

    <article class="lesson-view-card">
      <header class="lesson-head">
        <div>
          <span class="lesson-kicker">${tr('lessonOf')} ${n(app.lesson + 1)} / ١٠</span>
          <h2>${esc(lessonTitle())}</h2>
          <p class="lesson-goal"><strong>${tr('lessonGoal')}</strong> ${esc(teaching[0] || '')}</p>
        </div>
        <span class="lesson-badge ${done ? 'done' : ''}">${done ? '✓ ' + tr('doneLabel') : '◷ ' + tr('minutes')}</span>
      </header>
      <div class="lesson-body" tabindex="-1">
        <div class="body-actions">
          <button type="button" class="btn ${done ? 'btn-secondary' : 'btn-outline'}" id="markDone">${done ? '✓ ' + tr('doneLabel') : tr('markDone')}</button>
        </div>

        ${P
          ? `<h3 class="section-title">${tr('keyPoints')}</h3><ol class="concept-list">${steps.map(step => `<li>${esc(step)}</li>`).join('')}</ol>`
          : `<h3 class="section-title">${tr('overview')}</h3><p class="content-text">${esc(teaching[0] || '')}</p>`}
        ${tags.length ? `<div class="topic-tags">${tags.map(tag => `<span class="topic-tag">${esc(tag)}</span>`).join('')}</div>` : ''}

        <h3 class="section-title">${tr('workedExample')}</h3>
        <div class="example-card"><span class="ex-label">${app.lang === 'ar' ? 'مثال ١' : 'Example 1'}</span><p>${esc(example)}</p></div>
        ${secondExample() ? `<div class="example-card alt"><span class="ex-label">${app.lang === 'ar' ? 'مثال ٢' : 'Example 2'}</span><p>${esc(secondExample())}</p></div>` : ''}
        ${P && P.example ? `<div class="example-card"><span class="ex-label">${tr('workedExample')}</span><p>${esc(P.example)}</p></div>` : ''}

        ${P && P.mistake ? `<div class="lesson-callout mistake"><strong>${tr('commonMistake')}</strong><p>${esc(String(P.mistake).replace(/^[^:]*:\s*/, ''))}</p></div>` : ''}
        ${P && P.recap ? `<div class="lesson-callout recap"><strong>${tr('recap')}</strong><p>${esc(P.recap)}</p></div>` : ''}
        <div class="lesson-callout challenge"><strong>${tr('challenge')}</strong><p>${esc(practice)}</p></div>

        <h3 class="section-title">${tr('activity')}</h3>
        <div class="playground" id="playground"></div>

        ${P && P.sections && P.sections.length ? `<section id="tutorialBlock"><div id="packSectionsHost"></div></section>` : (P ? '' : `<p class="topic-note">${tr('noPack')}</p>`)}
        ${P && P.reference && P.reference.length ? `<h3 class="section-title">${tr('referenceTable')}</h3><table class="reference-table"><tbody>${P.reference.map(row => `<tr><td>${esc(row.name)}</td><td>${esc(row.desc)}</td></tr>`).join('')}</tbody></table>` : ''}
        ${P && P.exercises && P.exercises.length ? `<h3 class="section-title">${tr('exercises')}</h3><div class="exercise-list">${P.exercises.map(item => `<details><summary>${esc(item.q)}</summary><pre>${esc(item.a)}</pre></details>`).join('')}</div>` : ''}

        <section class="quiz-block">
          <h3 class="section-title">${tr('quiz')}</h3>
          <div id="questionList"></div>
          <div class="quiz-actions">
            <button type="button" class="btn btn-primary" id="submitQuiz">${done ? tr('retry') : tr('submit')} →</button>
            <span class="quiz-result" id="quizResult" aria-live="polite"></span>
          </div>
        </section>

        <div id="tutorHost"></div>

        ${sourcesBlock(meta)}

        <nav class="lesson-nav">
          <button type="button" class="btn btn-secondary" data-move="-1" ${app.lesson === 0 ? 'disabled' : ''}>← ${tr('previous')}</button>
          <button type="button" class="btn btn-secondary" data-move="1" ${app.lesson === 9 ? 'disabled' : ''}>${tr('next')} →</button>
        </nav>
      </div>
    </article>`;

  if (P && P.sections && P.sections.length && typeof packSections === 'function') {
    $('#packSectionsHost').append(packSections(P, language));
  }
  renderPlayground();
  renderQuiz();
  renderTutor();
}

const secondExample = () => (app.lang === 'ar' ? secondExamplesAr[app.grade][app.lesson] : (detail('teaching')[1] || ''));

function sourcesBlock(P) {
  const links = (P && P.sources && P.sources.length ? P.sources : documentationByGrade[app.grade]) || [];
  if (!links.length) return '';
  return `<h3 class="section-title">${tr('furtherReading')}</h3><div class="sources-inline">${links.map(link => `<a href="${esc(link.url)}" target="_blank" rel="noreferrer">${esc(link.title)} ↗</a>`).join('')}</div>`;
}

/* ---------- النشاط التفاعلي ---------- */
function renderPlayground() {
  const box = $('#playground');
  if (!box) return;
  const meta = packData(), P = packBody();
  const heading = (P && P.act && P.act.title) ? P.act.title : (meta && meta.sim ? '' : demoHeading());
  box.innerHTML = `
    <div class="playground-top"><span class="playground-title"><span class="live-dot"></span>${esc(heading || tr('activity'))}</span><span class="playground-hint">${tr('lessonOf')} ${n(app.lesson + 1)} / ١٠</span></div>
    <div class="playground-content">
      <div class="playground-mission"><strong>${tr('missionLabel')}</strong> ${esc((P && P.act && P.act.goal) || detail('practice'))}</div>
      <div id="playgroundBody"></div>
    </div>`;
  const body = $('#playgroundBody');
  if (P && P.act && typeof actEngine === 'function') { actEngine(body, P.act); return; }
  if (meta && meta.sim) { renderSim(body, meta.sim); return; }
  renderDemo(body, gradeData().demo);
}

function renderSim(box, sim) {
  const ar = app.lang === 'ar', goal = sim.goal[app.lang];
  box.innerHTML = `<p class="playground-caption">${esc(goal)}</p><div id="simArea" class="demo-controls"></div><div class="demo-controls" style="margin-top:9px"><button class="demo-control accent" id="simRun">${ar ? 'شغّل' : 'Run'}</button><button class="demo-control" id="simReset">${tr('reset')}</button></div><div class="scene-demo" id="simStage" style="min-height:52px"></div><div class="demo-output" id="demoOutput">${tr('output')}</div>`;
  const area = $('#simArea'), stage = $('#simStage'), out = message => { $('#demoOutput').textContent = message; };
  if (sim.type === 'order') {
    let picked = [];
    const draw = () => {
      area.innerHTML = '';
      sim.items.forEach((_, i) => { const button = document.createElement('button'); button.className = 'demo-control'; button.textContent = sim.items[i][app.lang]; button.disabled = picked.includes(i); button.onclick = () => { picked.push(i); draw(); }; area.append(button); });
      stage.textContent = picked.map(i => sim.items[i][app.lang]).join(' ← ');
    };
    draw();
    $('#simRun').onclick = () => { const ok = picked.length === sim.items.length && picked.every((v, i) => v === i); stage.textContent = ok ? sim.emoji.join(' ') : '💥'; out(ok ? (ar ? 'الترتيب صح، الخوارزمية اشتغلت!' : 'Correct order, the algorithm works!') : (ar ? 'الترتيب مش مظبوط أو ناقص، جرّب تاني.' : 'Order is wrong or incomplete, try again.')); };
    $('#simReset').onclick = () => { picked = []; draw(); out(tr('output')); };
  } else {
    area.innerHTML = `<span>${ar ? 'كرر' : 'Repeat'}</span><input class="demo-input" id="simN" type="number" min="1" max="9" value="1"><span>${ar ? 'مرات' : 'times'}</span>`;
    $('#simRun').onclick = () => { const count = Math.max(1, Math.min(9, +$('#simN').value || 1)); stage.textContent = sim.emoji.repeat(count); out(count === sim.target ? (ar ? 'تمام! العدد مطابق.' : 'Great! The count matches.') : (count < sim.target ? (ar ? 'ناقص، زوّد العدد.' : 'Too few, increase the count.') : (ar ? 'زيادة، قلّل العدد.' : 'Too many, decrease the count.'))); };
    $('#simReset').onclick = () => { $('#simN').value = 1; stage.textContent = ''; out(tr('output')); };
  }
}

function demoHeading() {
  return tr(({ grid: 'movement', story: 'scene', game: 'game', web: 'web', style: 'style', calculator: 'calculator', score: 'scoreboard', data: 'data', chart: 'chart' })[gradeData().demo] || 'activity');
}

function renderDemo(box, kind) {
  const ar = app.lang === 'ar';
  let markup = '';
  if (kind === 'grid') markup = `<p class="playground-caption">${tr('movement')}</p><div class="grid-demo" id="gridDemo"></div><div class="demo-controls"><button class="demo-control" data-move="up">↑</button><button class="demo-control" data-move="left">←</button><button class="demo-control" data-move="down">↓</button><button class="demo-control" data-move="right">→</button><button class="demo-control" id="resetDemo">${tr('reset')}</button></div><div class="demo-output" id="demoOutput">${tr('output')}</div>`;
  else if (kind === 'story') markup = `<p class="playground-caption">${ar ? 'اختار اللي هتعمله الشخصية عند بداية الحدث.' : 'Choose what the character does when the event starts.'}</p><div class="scene-demo"><span class="scene-character" id="sceneCharacter">🐱</span><span id="sceneBubble">💬</span><span>🌳</span></div><div class="demo-controls" style="margin-top:9px"><select class="demo-select" id="storyAction"><option value="jump">${tr('jump')}</option><option value="dance">${tr('dance')}</option><option value="say">${tr('say')}</option></select><button class="demo-control accent" id="runDemo">${tr('startScene')}</button></div><div class="demo-output" id="demoOutput">${tr('output')}</div>`;
  else if (kind === 'game') markup = `<p class="playground-caption">${ar ? 'اضغط النجمة عشان تجمعها وتتابع تغيير النقاط.' : 'Collect the star and watch the score change.'}</p><div class="scene-demo"><button class="demo-control accent" id="collectStar" style="font-size:22px">★</button><span>🏃</span><span id="gameScore">${tr('score')}: ${n(app.score)}</span></div><div class="demo-controls" style="margin-top:9px"><button class="demo-control" id="resetDemo">${tr('reset')}</button></div><div class="demo-output" id="demoOutput">${tr('output')}</div>`;
  else if (kind === 'web') markup = `<p class="playground-caption">${ar ? 'اكتب عنوانًا واعرضه في معاينة الصفحة.' : 'Type a heading and preview it on the page.'}</p><div class="demo-controls"><input class="demo-input" id="headingInput" maxlength="45" value="${ar ? 'رحلتي في البرمجة' : 'My coding journey'}"><button class="demo-control accent" id="runDemo">${tr('preview')}</button></div><div class="demo-output" id="demoOutput">${ar ? 'رحلتي في البرمجة' : 'My coding journey'}</div>`;
  else if (kind === 'style') markup = `<p class="playground-caption">${ar ? 'غيّر اللون وحجم الخط وشوف قواعد CSS.' : 'Change the color and font size to see CSS at work.'}</p><div class="demo-controls"><input class="demo-input" id="colorInput" type="color" value="#0f3d63" aria-label="${tr('color')}" style="flex:0 0 60px;padding:4px"><input class="demo-input" id="sizeInput" type="range" min="12" max="26" value="16" aria-label="${tr('size')}"></div><div class="demo-output" id="stylePreview" style="background:#0f3d63;color:#fff;font-size:16px;justify-content:center">${ar ? 'بطاقتي الجميلة' : 'My beautiful card'}</div>`;
  else if (kind === 'calculator') markup = `<p class="playground-caption">${ar ? 'أدخل رقمين واختار العملية.' : 'Enter two numbers and choose an operation.'}</p><div class="demo-controls"><input class="demo-input" id="valueA" type="number" value="12"><select class="demo-select" id="operation"><option value="add">+</option><option value="subtract">−</option><option value="multiply">×</option><option value="divide">÷</option></select><input class="demo-input" id="valueB" type="number" value="4"><button class="demo-control accent" id="runDemo">=</button></div><div class="demo-output" id="demoOutput">${tr('output')}</div>`;
  else if (kind === 'score') markup = `<p class="playground-caption">${ar ? 'استخدم الأزرار لتجربة أحداث تغيّر حالة البرنامج.' : 'Use the buttons to try events that change program state.'}</p><div class="demo-output" id="scoreOutput" style="justify-content:center;font:800 20px var(--font-mono)">${n(app.score)}</div><div class="demo-controls" style="margin-top:9px"><button class="demo-control accent" id="increaseScore">+ ${tr('increase')}</button><button class="demo-control" id="decreaseScore">− ${tr('decrease')}</button><button class="demo-control" id="resetScore">${tr('reset')}</button></div>`;
  else if (kind === 'data') markup = `<p class="playground-caption">${ar ? 'اختار مرشحًا لتفحص درجات صف تجريبي.' : 'Choose a filter to inspect a sample class dataset.'}</p><div class="demo-controls"><select class="demo-select" id="dataFilter"><option value="all">${tr('all')}</option><option value="passing">${tr('passing')}</option><option value="high">${tr('high')}</option></select><button class="demo-control accent" id="runDemo">${tr('run')}</button></div><div class="demo-output" id="demoOutput">${tr('output')}</div>`;
  else markup = `<p class="playground-caption">${ar ? 'بدّل طريقة العرض وقارن بيانات الطقس.' : 'Switch the view and compare sample weather data.'}</p><div class="demo-controls"><button class="demo-control accent" data-chart="line">${tr('line')}</button><button class="demo-control" data-chart="bar">${tr('bars')}</button></div><div class="chart-holder"><canvas id="chartCanvas" height="120" aria-label="Sample data chart"></canvas></div>`;
  box.innerHTML = markup;
  bindDemo(kind);
}

const output = value => { const el = $('#demoOutput'); if (el) el.textContent = value; };
const gridTarget = () => [[4, 4], [0, 4], [4, 0], [2, 4], [4, 2], [1, 4], [3, 0], [0, 3], [3, 4], [4, 1]][app.lesson];
const atGridTarget = () => { const [x, y] = gridTarget(); return app.grid.x === x && app.grid.y === y; };
function drawGrid() {
  const el = $('#gridDemo'); if (!el) return;
  const [goalX, goalY] = gridTarget(); let cells = '';
  for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) { const player = x === app.grid.x && y === app.grid.y, goal = x === goalX && y === goalY; cells += `<span class="grid-cell ${player ? 'player' : ''} ${goal ? 'goal' : ''}">${player ? '●' : goal ? '★' : ''}</span>`; }
  el.innerHTML = cells;
}
function bindDemo(kind) {
  if (kind === 'grid') {
    drawGrid();
    $$('[data-move]').forEach(button => button.addEventListener('click', () => {
      const d = button.dataset.move;
      if (d === 'up') app.grid.y = Math.max(0, app.grid.y - 1);
      if (d === 'down') app.grid.y = Math.min(4, app.grid.y + 1);
      if (d === 'left') app.grid.x = Math.max(0, app.grid.x - 1);
      if (d === 'right') app.grid.x = Math.min(4, app.grid.x + 1);
      drawGrid();
      output(atGridTarget() ? tr('arrived') : `${tr('current')}: (${n(app.grid.x)}, ${n(app.grid.y)})`);
    }));
    $('#resetDemo').addEventListener('click', () => { app.grid = { x: 0, y: 0 }; drawGrid(); output(tr('output')); });
  }
  if (kind === 'story') $('#runDemo').addEventListener('click', () => {
    const action = $('#storyAction').value, character = $('#sceneCharacter');
    character.style.transform = action === 'jump' ? 'translateY(-22px)' : action === 'dance' ? 'rotate(24deg) scale(1.2)' : 'translateX(16px)';
    $('#sceneBubble').textContent = action === 'dance' ? '♫' : action === 'say' ? '💬' : '✨';
    output(action === 'say' ? (app.lang === 'ar' ? 'قالت الشخصية: مرحبًا!' : 'The character said: Hello!') : (app.lang === 'ar' ? 'استجابت الشخصية للحدث.' : 'The character responded to the event.'));
  });
  if (kind === 'game') {
    $('#collectStar').addEventListener('click', () => { app.score++; $('#gameScore').textContent = `${tr('score')}: ${n(app.score)}`; output(app.lang === 'ar' ? `جمعت النجمة! نقاطك ${n(app.score)}.` : `Star collected! Your score is ${app.score}.`); });
    $('#resetDemo').addEventListener('click', () => { app.score = 0; $('#gameScore').textContent = `${tr('score')}: ٠`; output(tr('output')); });
  }
  if (kind === 'web') { const update = () => output($('#headingInput').value || tr('output')); $('#headingInput').addEventListener('input', update); $('#runDemo').addEventListener('click', update); }
  if (kind === 'style') { const update = () => { $('#stylePreview').style.background = $('#colorInput').value; $('#stylePreview').style.fontSize = `${$('#sizeInput').value}px`; }; $('#colorInput').addEventListener('input', update); $('#sizeInput').addEventListener('input', update); }
  if (kind === 'calculator') $('#runDemo').addEventListener('click', () => {
    const a = Number($('#valueA').value), b = Number($('#valueB').value), op = $('#operation').value;
    const result = op === 'add' ? a + b : op === 'subtract' ? a - b : op === 'multiply' ? a * b : b === 0 ? null : a / b;
    output(result === null ? tr('noDivide') : `${tr('resultLabel')}: ${n(Number(result.toFixed(3)))}`);
  });
  if (kind === 'score') {
    const refresh = () => { $('#scoreOutput').textContent = n(app.score); };
    $('#increaseScore').addEventListener('click', () => { app.score++; refresh(); });
    $('#decreaseScore').addEventListener('click', () => { app.score = Math.max(0, app.score - 1); refresh(); });
    $('#resetScore').addEventListener('click', () => { app.score = 0; refresh(); });
  }
  if (kind === 'data') $('#runDemo').addEventListener('click', () => {
    const scores = [92, 84, 76, 68, 97, 55, 81, 73], mode = $('#dataFilter').value;
    const filtered = scores.filter(v => mode === 'all' || (mode === 'passing' && v >= 60) || (mode === 'high' && v > 80));
    const mean = (filtered.reduce((a, b) => a + b, 0) / filtered.length).toFixed(1);
    output(`${n(filtered.length)} ${tr('records')}: ${filtered.map(n).join(' · ')}${app.lang === 'ar' ? ' | المتوسط: ' : ' | Mean: '}${n(mean)}`);
  });
  if (kind === 'chart') { $$('[data-chart]').forEach(button => button.addEventListener('click', () => { app.chart = button.dataset.chart; $$('[data-chart]').forEach(other => other.classList.toggle('accent', other === button)); drawChart(); })); drawChart(); }
}
function drawChart() {
  const canvas = $('#chartCanvas'); if (!canvas) return;
  const ctx = canvas.getContext('2d'), ratio = devicePixelRatio || 1, width = canvas.clientWidth || 320, height = 120;
  canvas.width = width * ratio; canvas.height = height * ratio; ctx.setTransform(ratio, 0, 0, ratio, 0, 0); ctx.clearRect(0, 0, width, height);
  const values = [34, 57, 46, 76, 63, 90], gap = (width - 18) / values.length;
  ctx.strokeStyle = 'rgba(120,140,160,.5)'; ctx.beginPath(); ctx.moveTo(9, height - 14); ctx.lineTo(width - 9, height - 14); ctx.stroke();
  if (app.chart === 'bar') values.forEach((v, i) => { const h = (height - 30) * v / 100; ctx.fillStyle = i === 4 ? '#0ea5e9' : 'rgba(15,61,99,.55)'; ctx.fillRect(9 + i * gap + gap * .2, height - 15 - h, gap * .58, h); });
  else { ctx.strokeStyle = '#0ea5e9'; ctx.lineWidth = 2; ctx.beginPath(); values.forEach((v, i) => { const x = 9 + gap * (i + .5), y = height - 15 - (height - 30) * v / 100; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.stroke(); values.forEach((v, i) => { const x = 9 + gap * (i + .5), y = height - 15 - (height - 30) * v / 100; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x, y, 3.5, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = '#0ea5e9'; ctx.stroke(); }); }
}

/* ---------- الاختبار القصير ---------- */
function makeQuestions() {
  const P = packBody();
  if (P && P.q) return P.q.map(item => ({ text: item.t, options: item.o, answer: item.a, why: item.why }));
  const titles = rawGrades[app.grade][app.lang === 'ar' ? 'lessonNamesAr' : 'lessonNamesEn'];
  const lesson = lessonTitle(), prev = titles[(app.lesson + 9) % 10], next = titles[(app.lesson + 1) % 10];
  const applyAnswer = app.lang === 'ar' ? detail('practice') : detail('teaching')[3];
  const questions = [
    { text: tr('conceptQ'), correct: lesson, distractors: [prev, next] },
    { text: tr('applyQ'), correct: applyAnswer, distractors: [tr('applyWrong1'), tr('applyWrong2')] },
    { text: tr('reflectQ'), correct: tr('reflectRight'), distractors: [tr('reflectWrong1'), tr('reflectWrong2')] }
  ];
  return questions.map((item, i) => {
    const choices = [item.correct, ...item.distractors], rotation = (app.grade + app.lesson + i) % 3;
    const options = choices.slice(rotation).concat(choices.slice(0, rotation));
    return { ...item, options, answer: options.indexOf(item.correct) };
  });
}
function renderQuiz() {
  const questions = makeQuestions();
  $('#questionList').innerHTML = questions.map((q, qi) => `
    <div class="quiz-card" data-question="${qi}">
      <p class="quiz-q"><span class="qnum">${n(qi + 1)}</span><span>${esc(q.text)}</span></p>
      <div class="quiz-options">${q.options.map((option, oi) => `<button type="button" class="quiz-option" data-question="${qi}" data-answer="${oi}"><span class="qletter">${String.fromCharCode(65 + oi)}</span><span>${esc(option)}</span></button>`).join('')}</div>
      <div class="answer-feedback" aria-live="polite"></div>
    </div>`).join('');
  $$('#questionList [data-answer]').forEach(button => button.addEventListener('click', () => {
    const qi = +button.dataset.question;
    app.answers[qi] = +button.dataset.answer;
    $$(`.quiz-card[data-question="${qi}"] .quiz-option`).forEach(option => option.classList.toggle('selected', option === button));
    $(`.quiz-card[data-question="${qi}"] .answer-feedback`).textContent = '';
  }));
  $('#submitQuiz').addEventListener('click', checkQuiz);
}
function checkQuiz() {
  if (app.answers.some(a => a === null)) { toast(tr('answerAll')); return; }
  const questions = makeQuestions();
  const score = app.answers.reduce((sum, a, i) => sum + (a === questions[i].answer ? 1 : 0), 0);
  $$('.quiz-card').forEach((card, i) => {
    const ok = app.answers[i] === questions[i].answer;
    card.classList.toggle('correct', ok); card.classList.toggle('incorrect', !ok);
    $$('.quiz-option', card).forEach((button, j) => {
      button.disabled = true;
      if (j === questions[i].answer) button.classList.add('correct');
      if (j === app.answers[i] && !ok) button.classList.add('wrong');
    });
    const feedback = $('.answer-feedback', card);
    feedback.className = `answer-feedback ${ok ? 'ok' : 'no'}`;
    feedback.textContent = ok ? `✓ ${tr('correct')}` : `✗ ${tr('wrong')}${questions[i].why ? ' ' + tr('answerWhy') + questions[i].why : ''}`;
  });
  const wasDone = isDone();
  if (score === 3) { completed[ck(app.grade, app.lesson)] = true; save(); if (!wasDone) award(10, tr('lessonCompleted')); checkGraduation(); renderTopbar(); renderSidebar(); renderProgress(); }
  const passed = score === 3;
  $('#quizResult').textContent = `${tr('resultLabel')}: ${n(score)} / ٣ · ${passed ? tr('passed') : tr('keepGoing')}`;
  const retry = $('#submitQuiz');
  retry.textContent = `${tr('retry')} →`;
  retry.onclick = () => { app.answers = [null, null, null]; render(); };
}
function checkGraduation() {
  if (app.certs.includes(app.grade)) return;
  if (doneCount(app.grade) < 10) return;
  app.certs = [...app.certs, app.grade];
  storeSet(STORE.certs, app.certs);
  award(25, `${tr('certAwarded')} ${gradeLabel(app.grade)} — ${tr('unlockedNow')}`);
}

/* ---------- المدرّس الذكي ---------- */
function getLessonContext() {
  const grade = gradeData(), meta = packData(), P = packBody();
  return {
    grade: gradeLabel(app.grade), stage: grade[app.lang === 'ar' ? 'levelAr' : 'levelEn'], course: grade[app.lang],
    lesson: lessonTitle(), explanation: detail('teaching')[0], example1: detail('examples'), example2: secondExample(),
    practice: detail('practice'), stageNote: stageNotes[app.lang][app.grade],
    details: P && P.steps ? P.steps.join(' ') + (P.example ? ' Example: ' + P.example : '') : '',
    references: (meta && meta.sources) || documentationByGrade[app.grade]
  };
}
/* رد محلي احتياطي: يبني إجابة من محتوى الدرس نفسه بدون أي خدمة خارجية */
function localTutorAnswer(kind, question) {
  const ar = app.lang === 'ar';
  const P = packBody() || {};
  const teaching = (detail('teaching') || []).filter(Boolean);
  const steps = (Array.isArray(P.steps) && P.steps.length ? P.steps : teaching).filter(Boolean);
  const title = lessonTitle();
  const example1 = detail('examples');
  const example2 = secondExample();
  const practice = detail('practice');
  const mistake = P.mistake ? String(P.mistake).replace(/^[^:]*:\s*/, '') : '';
  const recap = P.recap || '';
  const q = String(question || '').toLowerCase();
  const has = pattern => pattern.test(q);
  const numbered = list => list.map((step, index) => `${n(index + 1)}. ${step}`).join('\n');

  if (kind === 'example' || has(/مثال|أمثل|example|امثله/)) {
    return [
      ar ? `أهي أمثلة على «${title}»:` : `Here are examples for “${title}”:`,
      '',
      `${ar ? 'مثال ١' : 'Example 1'}: ${example1}`,
      example2 ? `${ar ? 'مثال ٢' : 'Example 2'}: ${example2}` : '',
      P.example ? `${ar ? 'مثال إضافي' : 'Extra example'}: ${P.example}` : '',
      '',
      ar ? 'جرّب تغيّر رقم أو قيمة في المثال وشوف النتيجة بتتغيّر إزاي.' : 'Try changing a number or value in the example and watch the result change.'
    ].filter(Boolean).join('\n');
  }

  if (kind === 'practice' || has(/طبق|تطبيق|تمرين|تمارين|practice|مهمة|مهمه|أحل|احل|حل/)) {
    return [
      ar ? `تعالى نطبّق «${title}» خطوة خطوة:` : `Let’s apply “${title}” step by step:`,
      '',
      `${ar ? 'المهمة' : 'Task'}: ${practice}`,
      steps.length > 1 ? numbered(steps.slice(0, 3)) : '',
      mistake ? `${ar ? 'خد بالك' : 'Watch out'}: ${mistake}` : '',
      '',
      ar ? 'اكتب محاولتك، ولو وقفت في خطوة قوللي عليها وأنا أوضحها.' : 'Write your attempt, and tell me the step where you get stuck.'
    ].filter(Boolean).join('\n');
  }

  if (kind === 'explain' || has(/اشرح|شرح|وضح|فكرة|فكره|يعني|explain|idea/)) {
    return [
      ar ? `خليني أشرح «${title}» خطوة خطوة:` : `Let me explain “${title}” step by step:`,
      '',
      steps.length ? numbered(steps) : (teaching[0] || ''),
      '',
      ar ? 'لو خطوة مش واضحة، اكتب اسمها وأنا أوضحها أكتر.' : 'If a step is unclear, name it and I will explain further.'
    ].filter(Boolean).join('\n');
  }

  if (mistake && has(/غلط|خطأ|خطا|أخطاء|اخطاء|mistake|error|مشكلة|مشكله/)) {
    return [ar ? `أشهر غلط في درس «${title}»:` : `The most common mistake in “${title}”:`, '', mistake, '', ar ? 'لو وقعت فيه، صلّح الخطوة دي وأعد التجربة.' : 'If you hit it, fix that step and try again.'].join('\n');
  }

  if (has(/ملخص|مراجعة|مراجعه|recap|summary|أهم|اهم/)) {
    return [ar ? `ملخص «${title}»:` : `Summary of “${title}”:`, '', steps.map(step => `• ${step}`).join('\n'), recap ? `\n${recap}` : ''].filter(Boolean).join('\n');
  }

  return [
    ar ? `أنا معاك في «${title}». دي الفكرة الأساسية:` : `I’m with you on “${title}”. Here is the core idea:`,
    '',
    teaching[0] || P.example || '',
    steps.length > 1 ? '\n' + numbered(steps) : '',
    '',
    ar ? 'تقدر تسألني: «اشرح تاني» أو «اديني مثال» أو «إزاي أطبق؟».' : 'You can ask me: “Explain again”, “Show an example”, or “How do I apply it?”.'
  ].filter(Boolean).join('\n');
}

async function requestTutor(payload) {
  let response;
  try { response = await fetch('/api/tutor', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) }); }
  catch { throw new Error(tr('aiError')); }
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw Object.assign(new Error(data.error || tr('aiError')), { status: response.status });
  return data.answer;
}
function renderTutor() {
  const section = $('#tutorHost');
  const contextKey = `${app.grade}-${app.lesson}-${app.lang}`;
  if (app.tutorContextKey !== contextKey) { app.tutorContextKey = contextKey; app.tutorMessages = []; }
  section.innerHTML = `
    <section class="tutor">
      <div class="tutor-head"><span class="tutor-head-title"><span class="tutor-mark">AI</span>${tr('tutorTitle')}</span><span class="tutor-status" id="tutorStatus">${tr('connecting')}</span></div>
      <p class="tutor-intro">${tr('tutorIntro')}</p>
      <p class="tutor-note" id="tutorNote" hidden></p>
      <div class="tutor-quick">
        <button type="button" data-prompt="explain">${tr('askExplain')}</button>
        <button type="button" data-prompt="example">${tr('askExample')}</button>
        <button type="button" data-prompt="practice">${tr('askPractice')}</button>
      </div>
      <div class="tutor-log" id="tutorChat" aria-live="polite"></div>
      <form class="tutor-input" id="tutorForm">
        <input id="tutorInput" autocomplete="off" maxlength="1200" placeholder="${tr('askPlaceholder')}">
        <button class="btn btn-primary" type="submit">${tr('askSend')}</button>
      </form>
    </section>`;
  let lastAnswer = `${detail('teaching')[0]} ${stageNotes[app.lang][app.grade]}`;
  const chat = $('#tutorChat'), addMessage = (role, message) => { const bubble = document.createElement('p'); bubble.className = `t-msg ${role}`; bubble.textContent = message; chat.append(bubble); chat.scrollTop = chat.scrollHeight; };
  addMessage('a', `${tr('tutorWelcome')} ${detail('teaching')[0]}`);
  for (const message of app.tutorMessages) addMessage(message.role === 'user' ? 'u' : 'a', message.content);
  const status = $('#tutorStatus'), note = $('#tutorNote'), sendButton = $('#tutorForm button[type="submit"]');
  let serverReady = null;
  const setOnline = () => { status.textContent = tr('online'); if (note) note.hidden = true; };
  const setLocal = () => { serverReady = false; status.textContent = tr('localMode'); if (note) { note.hidden = false; note.textContent = tr('localNote'); } };
  fetch('/api/health')
    .then(response => response.json())
    .then(data => { if (contextKey !== app.tutorContextKey) return; data.ready ? (serverReady = true, setOnline()) : setLocal(); })
    .catch(() => { if (contextKey === app.tutorContextKey) setLocal(); });

  const ask = async (kind, question) => {
    const clean = String(question || '').trim();
    if (!clean || sendButton.disabled) return;
    app.tutorMessages.push({ role: 'user', content: clean }); addMessage('u', clean);
    sendButton.disabled = true; status.textContent = tr('connecting');
    const thinking = document.createElement('p'); thinking.className = 't-msg a thinking'; thinking.textContent = '…'; chat.append(thinking); chat.scrollTop = chat.scrollHeight;
    const speak = answer => { thinking.remove(); if (contextKey !== app.tutorContextKey) return; app.tutorMessages.push({ role: 'assistant', content: answer }); lastAnswer = answer; addMessage('a', answer); };
    const locally = () => { setLocal(); speak(localTutorAnswer(kind, clean)); if (contextKey === app.tutorContextKey) sendButton.disabled = false; };

    if (serverReady === false) { locally(); return; }
    try {
      const answer = await requestTutor({ mode: 'chat', language: app.lang, context: getLessonContext(), history: app.tutorMessages.slice(0, -1), question: clean });
      if (contextKey === app.tutorContextKey) { serverReady = true; setOnline(); }
      speak(answer);
    } catch (error) {
      const offline = !error.status || error.status === 404 || error.status === 503 || error.status >= 500;
      if (offline) { locally(); return; }
      thinking.remove();
      if (contextKey !== app.tutorContextKey) return;
      app.tutorMessages.pop(); addMessage('a', error.message); status.textContent = tr('aiError');
    } finally { if (contextKey === app.tutorContextKey) sendButton.disabled = false; }
  };
  $('#tutorForm').addEventListener('submit', event => { event.preventDefault(); const input = $('#tutorInput'); ask('chat', input.value); input.value = ''; });
  $$('[data-prompt]').forEach(button => button.addEventListener('click', () => { const kind = button.dataset.prompt; ask(kind, tr(kind === 'example' ? 'askExample' : kind === 'practice' ? 'askPractice' : 'askExplain')); }));
  return lastAnswer;
}

/* ---------- المشاريع ---------- */
function renderProjects() {
  const data = projData();
  const list = data ? data[app.lang].map(project => [project.title, project.desc, project.tags]) : (app.lang === 'ar' ? capstonesAr : capstones)[app.grade];
  const marks = ['↗', '◈', '✳'];
  $('#container').innerHTML = `
    <header class="projects-intro">
      <div><h2>${tr('capTitle')}</h2><p>${tr('capIntro')}</p></div>
      <span class="projects-count">${tr('capLabel')}</span>
    </header>
    <div class="project-grid">${list.map((project, i) => `
      <article class="project-card">
        <span class="project-mark" aria-hidden="true">${marks[i] || '↗'}</span>
        <h3>${esc(project[0])}</h3>
        <p>${esc(project[1])}</p>
        <div class="project-tech">${(project[2] || []).map(tag => `<span>${esc(tag)}</span>`).join('')}</div>
      </article>`).join('')}</div>`;
  if (data && typeof addProjectDetail === 'function') addProjectDetail(data);
}

/* ---------- الألعاب ---------- */
function renderGames() {
  const arcade = app.arcade;
  clearTimeout(arcade.reactionTimer);
  arcade.secret = Math.floor(Math.random() * 20) + 1; arcade.tries = 0; arcade.reactionState = 'idle'; arcade.dataRound = 1; arcade.dataScore = 0;
  $('#container').innerHTML = `
    <header class="arcade-header"><span class="arcade-kicker">CODE / PLAY</span><h2>${tr('arcadeTitle')}</h2><p>${tr('arcadeIntro')}</p></header>
    <div class="arcade-grid">
      <article class="arcade-card">
        <div class="arcade-card-head"><span class="arcade-number">01</span><div><h3>${tr('guessTitle')}</h3><span class="game-language">PYTHON · IF / ELSE</span></div></div>
        <p>${tr('guessDescription')}</p>
        <form class="demo-controls" id="guessForm"><input class="arcade-input" id="guessInput" type="number" min="1" max="20" required placeholder="${tr('guessPlaceholder')}"><button class="btn btn-primary" type="submit">${tr('guessButton')}</button><button class="btn btn-outline" id="newNumber" type="button">${tr('newNumber')}</button></form>
        <div class="game-feedback" id="guessFeedback">${tr('guessHint')}</div>
        <div class="game-meta" id="guessAttempts">${tr('attempts')} ٠</div>
      </article>
      <article class="arcade-card">
        <div class="arcade-card-head"><span class="arcade-number">02</span><div><h3>${tr('reactionTitle')}</h3><span class="game-language">JAVASCRIPT · EVENTS</span></div></div>
        <p>${tr('reactionDescription')}</p>
        <button class="reaction-button" id="reactionButton" type="button">${tr('reactionStart')}</button>
        <div class="game-feedback" id="reactionFeedback">${tr('reactionWait')}</div>
      </article>
      <article class="arcade-card">
        <div class="arcade-card-head"><span class="arcade-number">03</span><div><h3>${tr('detectiveTitle')}</h3><span class="game-language">DATA · COMPARE</span></div></div>
        <p>${tr('detectiveDescription')}</p>
        <div class="detective-status"><span id="detectiveRound">${tr('round')} ١ / ٥</span><strong id="detectiveScore">${tr('dataScore')}: ٠</strong></div>
        <p class="detective-question">${tr('detectiveQuestion')}</p>
        <div class="detective-options" id="detectiveOptions"></div>
        <div class="game-feedback" id="detectiveFeedback"></div>
      </article>
    </div>
    <div id="gamesView"></div>`;
  $('#guessForm').addEventListener('submit', event => {
    event.preventDefault();
    const value = Number($('#guessInput').value), feedback = $('#guessFeedback');
    if (value < 1 || value > 20) { feedback.textContent = tr('guessHint'); return; }
    arcade.tries++; $('#guessAttempts').textContent = `${tr('attempts')} ${n(arcade.tries)}`;
    if (value === arcade.secret) { feedback.textContent = `${tr('guessWon')} ${n(arcade.tries)} ${tr('attempts')}`; $('#guessForm button[type="submit"]').disabled = true; award(5); }
    else feedback.textContent = value < arcade.secret ? tr('tooLow') : tr('tooHigh');
  });
  $('#newNumber').addEventListener('click', () => { arcade.secret = Math.floor(Math.random() * 20) + 1; arcade.tries = 0; $('#guessInput').value = ''; $('#guessAttempts').textContent = `${tr('attempts')} ٠`; $('#guessFeedback').textContent = tr('guessHint'); $('#guessForm button[type="submit"]').disabled = false; });
  $('#reactionButton').addEventListener('click', () => {
    const button = $('#reactionButton'), feedback = $('#reactionFeedback');
    if (arcade.reactionState === 'idle' || arcade.reactionState === 'done') {
      arcade.reactionState = 'waiting'; button.disabled = true; button.textContent = tr('reactionWait'); feedback.textContent = '';
      arcade.reactionTimer = setTimeout(() => { arcade.reactionState = 'ready'; arcade.reactionStart = performance.now(); button.disabled = false; button.textContent = tr('reactionGo'); }, 900 + Math.random() * 1900);
    } else if (arcade.reactionState === 'ready') {
      const time = Math.round(performance.now() - arcade.reactionStart); arcade.reactionState = 'done'; button.textContent = tr('reactionAgain'); feedback.textContent = `${tr('reactionResult')} ${n(time)} ${tr('ms')}`;
      if (time < 450) award(5);
    }
  });
  const categories = app.lang === 'ar' ? ['رياضيات', 'علوم', 'فن'] : ['Math', 'Science', 'Art'];
  const startRound = () => {
    if (arcade.dataRound > 5) { $('#detectiveOptions').innerHTML = ''; $('#detectiveFeedback').textContent = `${tr('resultLabel')}: ${n(arcade.dataScore)} / ٥`; return; }
    const values = categories.map(() => Math.floor(45 + Math.random() * 56)), correct = Math.max(...values);
    $('#detectiveRound').textContent = `${tr('round')} ${n(arcade.dataRound)} / ٥`;
    $('#detectiveScore').textContent = `${tr('dataScore')}: ${n(arcade.dataScore)}`;
    $('#detectiveFeedback').textContent = '';
    $('#detectiveOptions').innerHTML = categories.map((category, index) => `<button class="detective-option" type="button" data-value="${values[index]}"><span>${category}</span><strong>${n(values[index])}</strong></button>`).join('');
    $$('.detective-option').forEach(button => button.addEventListener('click', () => {
      const isCorrect = Number(button.dataset.value) === correct;
      if (isCorrect) { arcade.dataScore++; award(2); }
      $$('.detective-option').forEach(option => { option.disabled = true; if (Number(option.dataset.value) === correct) option.classList.add('answer-reveal'); });
      $('#detectiveScore').textContent = `${tr('dataScore')}: ${n(arcade.dataScore)}`;
      $('#detectiveFeedback').textContent = isCorrect ? tr('rightPick') : tr('wrongPick');
      arcade.dataRound++;
    }));
  };
  startRound();
  if (typeof addGradeGames === 'function') addGradeGames();
}

/* ---------- الملف الشخصي والشهادة ---------- */
function openProfile() {
  $('#profileAvatar').textContent = userName().trim().charAt(0) || 'ع';
  $('#profileName').value = app.name;
  $('#profilePoints').textContent = n(app.points);
  $('#profileCerts').textContent = n(app.certs.length);
  $('#profileDone').textContent = `${n(Object.values(completed).filter(Boolean).length)} / ${n(TOTAL())}`;
  $('#profileModal').showModal();
}
function openCert() {
  if (!app.certs.length) { toast(tr('certLocked')); return; }
  const grade = app.certs[app.certs.length - 1];
  $('#certName').textContent = userName();
  $('#certUnit').textContent = rawGrades[grade][app.lang];
  $('#certDate').textContent = new Date().toLocaleDateString(app.lang === 'ar' ? 'ar-EG' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  $('#certModal').showModal();
}

/* ---------- الأحداث ---------- */
document.addEventListener('click', event => {
  const pick = selector => event.target.closest(selector);
  let el;
  if ((el = pick('[data-grade]'))) { setGrade(+el.dataset.grade); return; }
  if ((el = pick('[data-lesson]'))) { setLesson(+el.dataset.lesson); return; }
  if ((el = pick('[data-view]'))) { app.view = el.dataset.view; render(); $('#sidebar').classList.remove('open'); return; }
  if ((el = pick('[data-move]'))) { moveLesson(+el.dataset.move); return; }
  if (pick('#brandHome')) { event.preventDefault(); app.view = 'lessons'; render(); return; }
  if (pick('#navToggle')) { $('#sidebar').classList.toggle('open'); return; }
  if (pick('#termToggle')) {
    app.term = app.term ? 0 : 1;
    storeSet('codeLabTerm', app.term);
    applyTerm(); setGrade(app.grade); return;
  }
  if (pick('#themeToggle')) { app.theme = app.theme === 'dark' ? 'light' : 'dark'; storeSet(STORE.theme, app.theme); applyTheme(); return; }
  if (pick('#languageToggle')) { app.lang = app.lang === 'ar' ? 'en' : 'ar'; storeSet(STORE.lang, app.lang); app.answers = [null, null, null]; app.tutorMessages = []; render(); return; }
  if (pick('#avatarBtn')) { openProfile(); return; }
  if (pick('#certBtn')) { openCert(); return; }
  if (pick('#closeProfile')) { $('#profileModal').close(); return; }
  if (pick('#closeCert')) { $('#certModal').close(); return; }
  if (pick('#downloadCert')) { window.print(); return; }
  if (pick('#markDone')) {
    completed[ck(app.grade, app.lesson)] = !isDone();
    save();
    if (isDone()) { award(10, tr('lessonCompleted')); checkGraduation(); }
    render(); return;
  }
  if (pick('#resetProgress')) {
    completed = {}; app.points = 0; app.certs = [];
    storeSet(progressId, completed); storeSet(STORE.points, 0); storeSet(STORE.certs, []);
    $('#profileModal').close(); toast(tr('progressReset')); render(); return;
  }
});
document.addEventListener('input', event => {
  if (event.target.id === 'profileName') { app.name = event.target.value.slice(0, 32); storeSet(STORE.name, app.name); $('#profileAvatar').textContent = userName().trim().charAt(0) || 'ع'; $('#avatarBtn').textContent = userName().trim().charAt(0) || 'ع'; }
});
document.addEventListener('keydown', event => { if (event.key === 'Escape') { $('#sidebar').classList.remove('open'); } });

applyTheme();
render();
