
/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   STRATEGY DATA
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const STRATEGIES = [
  {
    id:'box-breathing',
    icon:'ðŸŒ¬ï¸',iconBg:'#e0f7f4',iconColor:'#047857',
    title:'Box Breathing',titleIt:'Respirazione a quadrato',
    number:'01',
    emotions:['anger','anxiety','stress'],
    emotionLabels:['ðŸ˜¡ Anger','ðŸ˜° Anxiety','ðŸ˜© Stress'],
    who:['active','reflective'],
    whoLabels:['ðŸƒ Active person','ðŸ“– Reflective person'],
    situations:['Before a test','During an argument','When feeling overwhelmed'],
    howTo:[
      'Breathe IN slowly for 4 counts.',
      'HOLD your breath for 4 counts.',
      'Breathe OUT slowly for 4 counts.',
      'HOLD again for 4 counts.',
      'Repeat 3â€“5 times and notice the difference.',
    ],
    science:'When we feel angry or anxious, our amygdala activates and releases cortisol and adrenaline. Slow, controlled breathing activates the <strong>vagus nerve</strong>, which sends a "calm down" signal to the heart and brain â€” switching you from <em>fight-or-flight</em> to <em>rest-and-digest</em> mode.',
    summary:'A controlled breathing technique that uses a 4-count rhythm to activate your nervous system\'s "calm" response. Works in under 2 minutes.',
    quiz:[
      {q:'What does box breathing activate in your body?',opts:['The amygdala','The vagus nerve','The hippocampus','The cerebellum'],ans:1,exp:'The vagus nerve connects the brain to the heart and digestive system. Stimulating it through slow breathing reduces heart rate and stress hormones.'},
      {q:'How many counts should each phase of box breathing last?',opts:['2','8','4','10'],ans:2,exp:'4 counts in, hold 4, out 4, hold 4 â€” that\'s the "box" shape: four equal sides.'},
      {q:'Box breathing helps you switch from _______ to _______ mode.',opts:['rest â†’ fight','fight-or-flight â†’ rest-and-digest','happy â†’ sad','asleep â†’ awake'],ans:1,exp:'Fight-or-flight (sympathetic nervous system) causes panic. Rest-and-digest (parasympathetic nervous system) brings calm.'},
    ],
    printExercise:[
      {type:'gap',q:'Box breathing activates the _______ nerve, which sends a calm signal to the heart.',ans:'vagus'},
      {type:'tf',q:'Box breathing takes at least 30 minutes to work.',ans:'FALSE â€” it works in under 2 minutes.'},
      {type:'open',q:'Describe a situation in your life when you could use box breathing.'},
    ]
  },
  {
    id:'reframing',
    icon:'ðŸ”„',iconBg:'#f3f0ff',iconColor:'#6c2bd9',
    title:'Reframing',titleIt:'Ristrutturazione cognitiva',
    number:'02',
    emotions:['anxiety','sadness','shame'],
    emotionLabels:['ðŸ˜° Anxiety','ðŸ˜¢ Sadness','ðŸ˜³ Shame'],
    who:['reflective','creative'],
    whoLabels:['ðŸ“– Reflective person','ðŸŽ¨ Creative person'],
    situations:['After a failure','When you make a mistake','When you think negatively about yourself'],
    howTo:[
      'Notice the negative automatic thought (e.g. "I am stupid").',
      'Ask: Is this thought 100% true? What is the evidence FOR and AGAINST it?',
      'Ask: What would I say to a good friend in this situation?',
      'Replace the thought with a more balanced, realistic one.',
      'Write it down to make it concrete.',
    ],
    science:'CBT identifies <strong>cognitive distortions</strong> â€” unhelpful thinking patterns like catastrophising ("everything is ruined"), black-and-white thinking ("I\'m a total failure"), or mind-reading ("everyone thinks I\'m stupid"). Reframing trains the prefrontal cortex to override these automatic patterns by deliberately generating alternative interpretations.',
    summary:'A core CBT technique: identify a negative automatic thought, challenge it with evidence, and replace it with a balanced, realistic alternative.',
    quiz:[
      {q:'What is a "cognitive distortion"?',opts:['A healthy thought','An unhelpful, exaggerated thinking pattern','A type of emotion','A breathing exercise'],ans:1,exp:'"I\'m a total failure" is a distortion. The balanced version might be: "I didn\'t do well this time. I can learn from this."'},
      {q:'Which question is most useful when reframing a thought?',opts:['"Why am I so stupid?"','"What would I say to a good friend in this situation?"','"How can I avoid this feeling?"','"Who is to blame?'],ans:1,exp:'Self-compassion is key. We are often much kinder to friends than to ourselves. Using this perspective breaks the self-critical loop.'},
      {q:'"I failed this test, so I am stupid and will never succeed." This is an example of:',opts:['A balanced thought','Positive thinking','Catastrophising','Grounding'],ans:2,exp:'Catastrophising means jumping to the worst possible interpretation. A reframe could be: "I found this test difficult. I can study more and improve."'},
    ],
    printExercise:[
      {type:'gap',q:'CBT calls unhelpful thinking patterns "cognitive _______".',ans:'distortions'},
      {type:'transform',q:'Reframe this thought: "I made a mistake. I am hopeless." â†’ Write a balanced version:'},
      {type:'open',q:'Why is it important to question negative automatic thoughts instead of believing them immediately?'},
    ]
  },
  {
    id:'grounding',
    icon:'ðŸŒ¿',iconBg:'#f0fff9',iconColor:'#047857',
    title:'Grounding (5-4-3-2-1)',titleIt:'Radicamento sensoriale',
    number:'03',
    emotions:['anxiety','sadness','stress'],
    emotionLabels:['ðŸ˜° Anxiety','ðŸ˜¢ Sadness','ðŸ˜© Stress'],
    who:['active','reflective'],
    whoLabels:['ðŸƒ Active person','ðŸ“– Reflective person'],
    situations:['During a panic or anxiety attack','When your mind is racing','When you feel disconnected or "zoned out"'],
    howTo:[
      'Name 5 things you can SEE around you right now.',
      'Name 4 things you can TOUCH â€” and actually touch them.',
      'Name 3 things you can HEAR.',
      'Name 2 things you can SMELL.',
      'Name 1 thing you can TASTE.',
    ],
    science:'The 5-4-3-2-1 technique works through <strong>attentional redirection</strong>. Anxiety pulls attention into past regrets or future worries. By deliberately engaging all five senses, you force your brain to process <em>present-moment sensory information</em>, which interrupts the anxiety loop. Research on mindfulness confirms that present-moment awareness reduces the activity of the brain\'s default mode network â€” the source of rumination.',
    summary:'Engage all five senses to anchor yourself in the present moment and interrupt the cycle of anxious or sad thoughts.',
    quiz:[
      {q:'The 5-4-3-2-1 technique helps by redirecting attention to:',opts:['The future','Past memories','The present moment through the senses','Logical problem-solving'],ans:2,exp:'Anxiety lives in the past ("I should have...") or future ("What if..."). Grounding pulls you into the NOW through your five senses.'},
      {q:'What does "attentional redirection" mean?',opts:['Looking away from someone','Deliberately choosing what your brain focuses on','Forgetting your problems','Redirecting traffic'],ans:1,exp:'We can\'t stop all thoughts, but we can choose what to focus on. Grounding gives the brain something concrete to process instead of the anxiety spiral.'},
      {q:'Which comes LAST in the 5-4-3-2-1 technique?',opts:['Touch','Sight','Taste','Smell'],ans:2,exp:'The order is: 5 things you SEE, 4 TOUCH, 3 HEAR, 2 SMELL, 1 TASTE.'},
    ],
    printExercise:[
      {type:'order',q:'Number these senses in the correct order (5=most, 1=least): See ___ Touch ___ Hear ___ Smell ___ Taste ___'},
      {type:'tf',q:'Grounding works because it focuses your brain on the future.',ans:'FALSE â€” it focuses your brain on the PRESENT moment.'},
      {type:'open',q:'Try grounding right now! Name 5 things you can see in this classroom.'},
    ]
  },
  {
    id:'behavioural-activation',
    icon:'âš¡',iconBg:'#fff8e1',iconColor:'#b45309',
    title:'Behavioural Activation',titleIt:'Attivazione comportamentale',
    number:'04',
    emotions:['sadness','numbness'],
    emotionLabels:['ðŸ˜¢ Sadness','ðŸ˜‘ Numbness'],
    who:['active','social','creative'],
    whoLabels:['ðŸƒ Active person','ðŸ¤ Social person','ðŸŽ¨ Creative person'],
    situations:['When you feel numb or empty','When you have lost interest in things you used to love','When you feel "stuck" and unmotivated'],
    howTo:[
      'Write a list of small activities that you USED TO enjoy.',
      'Pick just ONE activity â€” the smallest, easiest one.',
      'Do it for 5 minutes ONLY, even if you don\'t feel like it.',
      'Notice how you feel AFTER doing it (not before or during).',
      'Gradually expand: do it for longer, or add a second activity.',
    ],
    science:'When we feel low, we naturally withdraw and stop doing things. This leads to fewer positive experiences â†’ lower mood â†’ even less motivation: a <strong>vicious cycle</strong>. Behavioural Activation breaks the cycle by introducing small pleasant activities. The brain\'s reward system (dopamine pathways) is gradually reactivated through <em>action before motivation</em> â€” not the other way around.',
    summary:'Do one small enjoyable activity even without motivation. Action creates mood, not the other way round.',
    quiz:[
      {q:'Behavioural Activation is based on the idea that:',opts:['You need to feel happy before acting','Action can create better mood, not the other way around','Staying in bed is a helpful strategy','Emotions never change'],ans:1,exp:'"Action before motivation" is the key CBT principle. Waiting to "feel like it" keeps you stuck in the low-mood cycle.'},
      {q:'What is the "vicious cycle" of low mood?',opts:['Feeling bad â†’ acting more â†’ feeling worse','Feeling bad â†’ stopping activities â†’ fewer positive feelings â†’ feeling worse','Feeling bad â†’ talking to friends â†’ feeling better','Feeling bad â†’ exercising â†’ feeling good'],ans:1,exp:'Low mood â†’ withdrawal â†’ fewer positive experiences â†’ worse mood â†’ more withdrawal. Behavioural Activation breaks this loop.'},
      {q:'How long should you start with for the first activity?',opts:['3 hours','1 full day','5 minutes','1 hour'],ans:2,exp:'Starting tiny removes the barrier of "I can\'t do this." 5 minutes is manageable for anyone. It also lets you experience the mood boost before stopping.'},
    ],
    printExercise:[
      {type:'gap',q:'Behavioural Activation works on the principle of _______ before motivation.',ans:'action'},
      {type:'list',q:'Write 3 small activities you enjoy that you could use for Behavioural Activation:',n:3},
      {type:'open',q:'Why do you think it is important to start with very small activities?'},
    ]
  },
  {
    id:'journaling',
    icon:'ðŸ““',iconBg:'#f0fff9',iconColor:'#047857',
    title:'Emotional Journaling',titleIt:'Diario emotivo',
    number:'05',
    emotions:['sadness','shame','stress','anxiety'],
    emotionLabels:['ðŸ˜¢ Sadness','ðŸ˜³ Shame','ðŸ˜© Stress','ðŸ˜° Anxiety'],
    who:['reflective','creative'],
    whoLabels:['ðŸ“– Reflective person','ðŸŽ¨ Creative person'],
    situations:['After a difficult day','When emotions feel too big to talk about','Before bed to unload your mind'],
    howTo:[
      'Find a private notebook or use your phone\'s notes app.',
      'Write the date and your current emotion.',
      'Write: "I feel _______ because _______".',
      'Write what happened without judging yourself.',
      'Optional: write one small positive thing from today.',
    ],
    science:'<strong>Affect labelling</strong> â€” putting a word to an emotion â€” reduces the emotional intensity processed by the amygdala (Lieberman et al., 2007). Writing creates cognitive distance between you and the feeling: instead of <em>being</em> the emotion, you <em>observe</em> it. Journaling also activates the prefrontal cortex, improving emotional regulation over time.',
    summary:'Writing about emotions reduces their intensity ("name it to tame it") and creates healthy distance between you and the feeling.',
    quiz:[
      {q:'"Name it to tame it" refers to:',opts:['Giving your diary a name','Labelling your emotion to reduce its intensity','Naming your friends','Taming wild animals'],ans:1,exp:'Research shows that finding the right word for an emotion reduces amygdala activation â€” your "alarm bell" â€” almost immediately.'},
      {q:'Journaling helps you switch from "being" an emotion to:',opts:['Ignoring it','Suppressing it','Observing it from a distance','Feeling more of it'],ans:2,exp:'This is called "cognitive defusion" in ACT (Acceptance and Commitment Therapy) â€” seeing a thought or emotion as something you HAVE, not something you ARE.'},
      {q:'Which is the best first sentence to write in an emotional journal?',opts:['"Everyone is against me."','"I feel overwhelmed because I have too much to do today."','"I never do anything right."','"I don\'t want to write."'],ans:1,exp:'"I feel _______ because _______" is perfect: it names the emotion and identifies the trigger, without judgment.'},
    ],
    printExercise:[
      {type:'gap',q:'Putting a word to your emotion is called "affect _______" and it reduces amygdala activity.',ans:'labelling'},
      {type:'write',q:'Write your first journal entry. Complete this: "Today I feel _______ because _______. One small thing that was OK today: _______."'},
      {type:'open',q:'Do you think you would prefer a paper journal or a digital one? Why?'},
    ]
  },
  {
    id:'i-statements',
    icon:'ðŸ’¬',iconBg:'#eff6ff',iconColor:'#1d4ed8',
    title:'"I" Statements',titleIt:'Messaggi in prima persona',
    number:'06',
    emotions:['anger','stress'],
    emotionLabels:['ðŸ˜¡ Anger','ðŸ˜© Stress'],
    who:['social','reflective'],
    whoLabels:['ðŸ¤ Social person','ðŸ“– Reflective person'],
    situations:['During a conflict with a friend','When you need to tell someone how they hurt you','When you want to communicate without starting an argument'],
    howTo:[
      'INSTEAD OF: "You always ignore me! You\'re so selfish!"',
      'SAY: "I feel _______ when _______ because _______. I need _______."',
      'Start with "I feel" â€” never "You are".',
      'Describe the BEHAVIOUR (what happened), not the person\'s character.',
      'Say what you NEED, not what they did wrong.',
    ],
    science:'When we use "you" language ("You are so mean!"), the listener immediately becomes <strong>defensive</strong> and the conversation escalates. "I" statements communicate the same information â€” your feelings â€” without triggering the other person\'s threat response. This is called <strong>non-violent communication (NVC)</strong>, developed by Marshall Rosenberg, and is integrated into CBT as a key interpersonal skill.',
    summary:'Replace "You are..." accusations with "I feel... when... because... I need..." â€” this opens dialogue instead of triggering defensiveness.',
    quiz:[
      {q:'Why do "you" statements ("You are so selfish!") make conflicts worse?',opts:['They are too short','They trigger defensiveness in the other person','They are not honest','They take too long to say'],ans:1,exp:'When someone feels attacked, their brain activates a threat response. "You are..." sounds like an attack; "I feel..." sounds like an invitation to understand.'},
      {q:'The correct structure for an "I" statement is:',opts:['"You always make me feel bad."','"I feel _______ when _______ because _______ and I need _______."','"You need to change."','"I think you are wrong."'],ans:1,exp:'The four parts are: emotion â†’ behaviour â†’ reason â†’ need. This gives all the information without blame.'},
      {q:'"You never listen to me!" â€” What is the better "I" statement version?',opts:['"You are terrible at listening."','"I feel ignored when you look at your phone while I\'m talking, because I feel like what I say isn\'t important."','"I hate you sometimes."','"You should try harder."'],ans:1,exp:'Note: it describes the SPECIFIC behaviour (looking at the phone), not the person\'s character.'},
    ],
    printExercise:[
      {type:'transform',q:'Rewrite using an "I" statement: "You always forget about me! You\'re so thoughtless!" â†’ "I feel _______ when _______ because _______ . I need _______."'},
      {type:'gap',q:'"I" statements come from a communication method called _______ Communication.',ans:'Non-Violent'},
      {type:'open',q:'Think of a conflict you had recently. How could you use an "I" statement in that situation?'},
    ]
  },
  {
    id:'self-compassion',
    icon:'ðŸ«¶',iconBg:'#fdf4ff',iconColor:'#7e22ce',
    title:'Self-Compassion',titleIt:'Autocompassione',
    number:'07',
    emotions:['shame','sadness','anxiety'],
    emotionLabels:['ðŸ˜³ Shame','ðŸ˜¢ Sadness','ðŸ˜° Anxiety'],
    who:['reflective','social','creative'],
    whoLabels:['ðŸ“– Reflective person','ðŸ¤ Social person','ðŸŽ¨ Creative person'],
    situations:['After making a mistake','When you feel ashamed or embarrassed','When your inner voice is very critical'],
    howTo:[
      'Notice your self-critical thought: "I am so stupid / pathetic / useless."',
      'Ask: "Would I say this to a good friend in the same situation?"',
      'Write or say: "This is a difficult moment. I am not alone â€” everyone struggles. I can be kind to myself."',
      'Place a hand on your heart and say one kind thing to yourself.',
      'Repeat: you are not your mistakes.',
    ],
    science:'Self-compassion, developed by psychologist <strong>Kristin Neff</strong>, has three components: <em>self-kindness</em> (vs. self-judgment), <em>common humanity</em> (recognising that suffering is universal), and <em>mindfulness</em> (observing pain without exaggerating it). Research shows self-compassion is more effective than self-esteem at promoting resilience, because it doesn\'t depend on success.',
    summary:'Treat yourself with the same kindness you would give a good friend. Self-compassion builds more resilience than self-criticism.',
    quiz:[
      {q:'Self-compassion involves three things. Which is NOT one of them?',opts:['Self-kindness','Common humanity','Mindfulness','Self-punishment'],ans:3,exp:'The three components are: kindness to yourself, recognising that pain is universal, and observing your feelings without over-dramatising them.'},
      {q:'The "good friend" technique asks you to:',opts:['Call a friend immediately','Ask how you would treat a friend in the same situation','Ignore your feelings','Compare yourself to your friends'],ans:1,exp:'We are usually far kinder to friends than to ourselves. Using this perspective shows us how irrational our self-criticism often is.'},
      {q:'Why is self-compassion more effective than self-esteem?',opts:['It is faster','It doesn\'t depend on success or achievement','It makes you feel superior','It is easier to learn'],ans:1,exp:'Self-esteem says: "I feel good when I succeed." Self-compassion says: "I am worthy even when I fail." This makes it stable even during difficult times.'},
    ],
    printExercise:[
      {type:'gap',q:'Self-compassion was developed by psychologist Kristin _______.',ans:'Neff'},
      {type:'write',q:'Write a kind message to yourself as if you were writing to a friend who made the same mistake you once made.'},
      {type:'open',q:'Why do you think we are often kinder to friends than to ourselves?'},
    ]
  },
  {
    id:'positive-self-talk',
    icon:'ðŸŒŸ',iconBg:'#fffbeb',iconColor:'#b45309',
    title:'Positive Self-Talk',titleIt:'Dialogo interiore positivo',
    number:'08',
    emotions:['anxiety','shame','sadness'],
    emotionLabels:['ðŸ˜° Anxiety','ðŸ˜³ Shame','ðŸ˜¢ Sadness'],
    who:['all'],
    whoLabels:['ðŸ‘¤ Everyone'],
    situations:['Before a performance or test','When self-doubt takes over','When you need an inner boost of confidence'],
    howTo:[
      'Identify your negative inner voice: "I can\'t do this. I will fail."',
      'Challenge it: "Is this definitely true?"',
      'Replace it with a realistic affirmation: "I have prepared. I can do my best."',
      'Say it out loud (in private) or write it on a sticky note.',
      'Repeat before difficult situations until it becomes automatic.',
    ],
    science:'Our inner voice constantly comments on what we do. When it is consistently negative, it can create a <strong>self-fulfilling prophecy</strong>: we believe we will fail â†’ we perform worse. Positive self-talk does NOT mean pretending everything is perfect. It means replacing <em>distorted negative thoughts</em> with <em>realistic, encouraging ones</em>. Neuroscience research shows repeated affirmations build new neural pathways â€” literally changing the brain\'s default patterns.',
    summary:'Replace distorted negative inner voice with realistic, encouraging thoughts. With practice, this literally rewires your brain.',
    quiz:[
      {q:'What is a "self-fulfilling prophecy" in the context of self-talk?',opts:['A dream that comes true','Believing you will fail â†’ performing worse â†’ confirming the belief','A strategy for success','A type of journal'],ans:1,exp:'"I can\'t do this" â†’ anxiety increases â†’ performance drops â†’ "See, I was right." The belief creates the outcome.'},
      {q:'Positive self-talk means:',opts:['Pretending everything is perfect','Ignoring your real feelings','Replacing distorted thoughts with realistic, encouraging ones','Always saying "I am amazing!"'],ans:2,exp:'It\'s not about toxic positivity ("Everything is great!") but about accuracy: "I find this hard, AND I can do my best."'},
      {q:'What does neuroscience tell us about repeated positive affirmations?',opts:['They are useless','They build new neural pathways in the brain','They make you arrogant','They only work for adults'],ans:1,exp:'The brain is neuroplastic â€” it changes based on repeated patterns of thought. Regular positive self-talk literally rewires default thought patterns.'},
    ],
    printExercise:[
      {type:'transform',q:'Rewrite as positive self-talk: "I will definitely fail this presentation." â†’ Write a realistic, encouraging version:'},
      {type:'gap',q:'Believing you will fail and then performing worse is called a "self-_______ prophecy".',ans:'fulfilling'},
      {type:'open',q:'Write your personal "before a challenge" affirmation â€” something you can say to yourself before a test or performance.'},
    ]
  },
  {
    id:'problem-solving',
    icon:'ðŸ“‹',iconBg:'#eff6ff',iconColor:'#1d4ed8',
    title:'Problem-Solving',titleIt:'Problem solving',
    number:'09',
    emotions:['stress','anxiety'],
    emotionLabels:['ðŸ˜© Stress','ðŸ˜° Anxiety'],
    who:['reflective','active'],
    whoLabels:['ðŸ“– Reflective person','ðŸƒ Active person'],
    situations:['When you feel overwhelmed by too many problems','When you don\'t know where to start','When a situation feels out of control'],
    howTo:[
      'WRITE DOWN all your problems/worries on paper. Get them out of your head.',
      'Separate them: what can you CONTROL vs. what you can\'t.',
      'Focus only on the controllable ones.',
      'For each: brainstorm 3 possible solutions, however small.',
      'Pick ONE action to do TODAY. Just one.',
    ],
    science:'Overwhelm is largely caused by the brain treating all problems as <strong>one giant, unsolvable block</strong>. Writing problems down (<em>externalisation</em>) reduces the mental load on working memory and makes the brain feel less threatened. The CBT <strong>problem-solving model</strong> (D\'Zurilla & Goldfried, 1971) has been shown to reduce depression, anxiety and stress by restoring the sense of personal agency â€” the belief that your actions matter.',
    summary:'Break the overwhelm: write down all problems, separate controllable from uncontrollable, and choose ONE small action.',
    quiz:[
      {q:'What does "externalisation" mean in problem-solving?',opts:['Blaming others','Writing problems down to remove them from your head','Sharing on social media','Ignoring them'],ans:1,exp:'When worries stay in your head, they loop and feel bigger than they are. Writing them down gives your brain permission to stop repeating them.'},
      {q:'In CBT problem-solving, which problems should you focus on first?',opts:['The biggest problems','The oldest problems','Problems you can control','Problems other people have'],ans:2,exp:'Trying to solve uncontrollable problems wastes energy and increases helplessness. Focus on what you CAN do.'},
      {q:'Why is choosing just ONE action for today important?',opts:['Because one action is always enough','Because choosing many actions causes analysis paralysis and inaction','Because the other actions will solve themselves','Because you only have time for one'],ans:1,exp:'Too many choices â†’ overwhelm â†’ inaction. ONE concrete next step builds momentum and restores the sense of agency.'},
    ],
    printExercise:[
      {type:'two-col',q:'Divide these worries into two columns: CONTROLLABLE | NOT CONTROLLABLE',items:['Getting a bad grade','Bad weather','My friend\'s mood','How much I study','Other people\'s opinions','My effort']},
      {type:'gap',q:'Writing your worries down is called _______, and it reduces the load on working memory.',ans:'externalisation'},
      {type:'open',q:'Think of one problem you have right now. Write THREE possible small actions you could take.'},
    ]
  },
  {
    id:'thought-stopping',
    icon:'ðŸ›‘',iconBg:'#fff0f3',iconColor:'#be123c',
    title:'Thought Stopping',titleIt:'Stop al pensiero',
    number:'10',
    emotions:['shame','anxiety'],
    emotionLabels:['ðŸ˜³ Shame','ðŸ˜° Anxiety'],
    who:['active','reflective'],
    whoLabels:['ðŸƒ Active person','ðŸ“– Reflective person'],
    situations:['When you keep replaying an embarrassing moment','When an anxious thought loops repeatedly','When rumination won\'t stop at night'],
    howTo:[
      'When the unwanted thought appears, say "STOP" â€” out loud if possible.',
      'Snap a rubber band on your wrist OR clap your hands once.',
      'Immediately redirect to a chosen "replacement thought" (prepare one in advance).',
      'OR use grounding (5-4-3-2-1) to shift attention to the present.',
      'Write the thought down and then deliberately put the notebook away.',
    ],
    science:'<strong>Rumination</strong> â€” repetitively thinking about past events â€” is one of the strongest predictors of depression and anxiety. The brain\'s default mode network keeps "replaying" because it mistakenly believes it is solving a problem. Thought stopping interrupts this loop by introducing a <em>pattern interrupt</em>. Note: thought stopping works best when combined with cognitive restructuring â€” <em>replacing</em> the thought, not just stopping it.',
    summary:'Interrupt the loop of rumination with a physical or verbal cue, then immediately redirect to a replacement thought.',
    quiz:[
      {q:'What is "rumination"?',opts:['A type of breathing','Chewing food slowly','Repetitively thinking about past events','Talking to yourself positively'],ans:2,exp:'Rumination = replaying. It\'s your brain stuck in a loop, thinking it\'s solving a problem â€” but actually just generating more anxiety.'},
      {q:'Why is thought stopping more effective when combined with cognitive restructuring?',opts:['It isn\'t â€” stopping is enough','Because if you only stop, the thought often comes back. Replacing it gives the brain something better to think about.','Because cognitive restructuring is faster','Because stopping alone is too physical'],ans:1,exp:'The brain dislikes a void. If you stop a thought without replacing it, it returns. A prepared "replacement thought" gives the brain a new destination.'},
      {q:'Rumination keeps happening because:',opts:['You are weak','The brain mistakenly thinks it is solving a problem','You enjoy thinking about the past','You have a bad memory'],ans:1,exp:'The default mode network is designed to process unresolved situations. It keeps "running the problem" hoping to find a solution â€” but some things can\'t be solved, only accepted.'},
    ],
    printExercise:[
      {type:'gap',q:'Thinking repetitively about past events is called _______ and is a predictor of anxiety.',ans:'rumination'},
      {type:'prepare',q:'Write YOUR personal "replacement thought" â€” something you will deliberately think after saying STOP:'},
      {type:'open',q:'Do you think physically saying "STOP" aloud helps? Why or why not?'},
    ]
  },
  {
    id:'physical-activity',
    icon:'ðŸƒ',iconBg:'#fefce8',iconColor:'#854d0e',
    title:'Physical Activity',titleIt:'AttivitÃ  fisica',
    number:'11',
    emotions:['anger','stress','numbness'],
    emotionLabels:['ðŸ˜¡ Anger','ðŸ˜© Stress','ðŸ˜‘ Numbness'],
    who:['active'],
    whoLabels:['ðŸƒ Active person'],
    situations:['When you feel a surge of anger','After a stressful day','When you feel flat and unmotivated'],
    howTo:[
      'Choose ANY movement: walking, running, dancing, jumping, stretching.',
      'Even 10 minutes makes a difference.',
      'If angry: move FAST to burn off adrenaline.',
      'If flat/numb: start SLOW (a short walk is fine) to gently reactivate.',
      'Notice how your body feels BEFORE and AFTER.',
    ],
    science:'During anger or stress, the body releases <strong>adrenaline and cortisol</strong> â€” hormones that prepare you to fight or run. Physical activity is literally the most efficient way to burn off these chemicals. Exercise also triggers the release of <strong>endorphins, serotonin and BDNF</strong> (Brain-Derived Neurotrophic Factor), which improve mood, reduce anxiety, and actually grow new brain cells. Regular exercise is as effective as medication for mild-to-moderate depression (NICE guidelines, 2022).',
    summary:'Movement burns off stress hormones (adrenaline, cortisol) and releases endorphins â€” your brain\'s natural mood boosters.',
    quiz:[
      {q:'Which hormones are released when you feel angry or stressed?',opts:['Endorphins and serotonin','Adrenaline and cortisol','Oxytocin and dopamine','Melatonin and insulin'],ans:1,exp:'Adrenaline and cortisol prepare the body for "fight or flight." Physical activity metabolises them efficiently â€” like the body expected you to use them.'},
      {q:'BDNF (Brain-Derived Neurotrophic Factor) is important because:',opts:['It makes you angry','It helps grow new brain cells','It causes stress','It releases cortisol'],ans:1,exp:'Exercise increases BDNF, sometimes called "Miracle-Gro for the brain." It supports neuroplasticity and the growth of new neural connections.'},
      {q:'Research shows regular exercise is comparable to:',opts:['Surgery','Medication for mild-to-moderate depression','Sleeping all day','A strict diet'],ans:1,exp:'Multiple meta-analyses confirm that regular aerobic exercise has antidepressant effects comparable to medication, with no side effects and additional health benefits.'},
    ],
    printExercise:[
      {type:'gap',q:'Exercise releases _______, _______ and _______ which improve mood.',ans:'endorphins, serotonin, BDNF'},
      {type:'tf',q:'10 minutes of physical activity is too short to make a difference.',ans:'FALSE â€” even 10 minutes produces measurable mood improvements.'},
      {type:'open',q:'What type of physical activity do you enjoy most? How could you use it as a coping strategy?'},
    ]
  },
  {
    id:'talking',
    icon:'ðŸ¤',iconBg:'#f0fff9',iconColor:'#047857',
    title:'Talking to Someone',titleIt:'Parlare con qualcuno',
    number:'12',
    emotions:['sadness','anxiety','stress','shame'],
    emotionLabels:['ðŸ˜¢ Sadness','ðŸ˜° Anxiety','ðŸ˜© Stress','ðŸ˜³ Shame'],
    who:['social'],
    whoLabels:['ðŸ¤ Social person'],
    situations:['When a problem feels too big to carry alone','When you feel isolated or disconnected','When you need a different perspective'],
    howTo:[
      'Identify ONE trusted person: a friend, family member, teacher or counsellor.',
      'You don\'t need to explain everything. You can start with: "I\'m not feeling great â€” can I talk to you?"',
      'Tell them what you need: "I just need someone to listen" OR "I need advice."',
      'If talking feels too hard: text, write a letter, or use a support service.',
      'Remember: asking for help is a sign of strength, not weakness.',
    ],
    science:'Humans are wired for <strong>social connection</strong>. The neuroscience of attachment shows that even brief social contact reduces cortisol and increases <strong>oxytocin</strong> â€” the bonding hormone that promotes feelings of safety and trust. Studies show that social isolation is as damaging to health as smoking 15 cigarettes a day (Holt-Lunstad, 2015). Sharing problems activates the left prefrontal cortex, which counterbalances the amygdala\'s fear response.',
    summary:'Sharing problems with a trusted person reduces cortisol, increases oxytocin, and activates the brain\'s rational thinking areas.',
    quiz:[
      {q:'Oxytocin is important for coping because:',opts:['It increases stress','It promotes feelings of safety and social trust','It makes you feel isolated','It triggers the fight-or-flight response'],ans:1,exp:'Oxytocin is released through positive social contact â€” a conversation, a hug, or even a kind look. It directly reduces the stress response.'},
      {q:'Research by Holt-Lunstad (2015) found that social isolation is:',opts:['Healthy for introverts','As damaging as smoking 15 cigarettes a day','Only dangerous for elderly people','Less harmful than stress'],ans:1,exp:'Social isolation is a serious health risk. Human beings evolved to live in groups â€” our nervous systems need social connection to regulate properly.'},
      {q:'When asking for support, what is the most important thing to tell the other person?',opts:['Your full life history','Whether you want them to listen or give advice','What they did wrong','Your diagnosis'],ans:1,exp:'"I just need to vent" and "I need your advice" are very different requests. Clarifying this prevents misunderstandings and frustration on both sides.'},
    ],
    printExercise:[
      {type:'gap',q:'The bonding hormone released during positive social contact is called _______.',ans:'oxytocin'},
      {type:'write',q:'Write the name of one trusted person you could talk to when feeling overwhelmed: _______ . What would you say to start the conversation?'},
      {type:'open',q:'Some people find it hard to ask for help. Why do you think this is? How can we change this?'},
    ]
  },
];

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   STATE
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
let ratings = {};
let comments = {};
let personalitySelections = {};
let quizScores = {};
try{
  ratings = JSON.parse(localStorage.getItem('cl_ratings')||'{}');
}catch(e){
  console.warn('Failed parsing cl_ratings from localStorage, resetting.', e);
  ratings = {};
}
try{
  comments = JSON.parse(localStorage.getItem('cl_comments')||'{}');
}catch(e){
  console.warn('Failed parsing cl_comments from localStorage, resetting.', e);
  comments = {};
}
try{
  personalitySelections = JSON.parse(localStorage.getItem('cl_pers')||'{}');
}catch(e){
  console.warn('Failed parsing cl_pers from localStorage, resetting.', e);
  personalitySelections = {};
}
try{
  quizScores = JSON.parse(localStorage.getItem('cl_quiz')||'{}');
}catch(e){
  console.warn('Failed parsing cl_quiz from localStorage, resetting.', e);
  quizScores = {};
}
let activeEmotionFilter = 'all';
let activePersonFilter = 'all';

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   BUILD ALL CARDS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function buildAllCards(){
  const container = document.getElementById('cards-container');
  container.innerHTML = '';
  STRATEGIES.forEach(s => container.appendChild(buildCard(s)));
  updateStats();
  updateRanking();
}

function buildCard(s){
  const card = el('div','strategy-card');
  card.id = 'card-'+s.id;
  card.dataset.emotions = s.emotions.join(',');
  card.dataset.who = s.who.join(',');

  // â”€â”€ HEADER â”€â”€
  const hdr = el('div','card-header');
  const icon = el('div','card-icon');
  icon.style.cssText=`background:${s.iconBg};color:${s.iconColor}`;
  icon.textContent=s.icon;
  const tw = el('div','card-title-wrap');
  const tt = el('div','card-title',s.title);
  const te = el('div','card-title-en',s.titleIt);
  tw.appendChild(tt); tw.appendChild(te);
  const num = el('div','card-number',s.number);
  hdr.appendChild(icon); hdr.appendChild(tw); hdr.appendChild(num);
  card.appendChild(hdr);

  // â”€â”€ TAGS â”€â”€
  const tagRow = el('div','tag-row');
  s.emotionLabels.forEach(l=>{ const t=el('span','tag tag-emotion',l); tagRow.appendChild(t); });
  const whoLabels = s.who.includes('all') ? ['ðŸ‘¤ Everyone'] : s.whoLabels;
  whoLabels.forEach(l=>{ const t=el('span','tag tag-who',l); tagRow.appendChild(t); });
  s.situations.forEach(l=>{ const t=el('span','tag tag-situation','ðŸ“ '+l); tagRow.appendChild(t); });
  card.appendChild(tagRow);

  // â”€â”€ TABS â”€â”€
  const tabs = el('div','card-tabs');
  const panels = el('div');
  const tabDefs = [
    {id:'info',label:'ðŸ“– Learn'},
    {id:'quiz',label:'âœ… Quiz'},
    {id:'rate',label:'â­ Rate & Comment'},
    {id:'print',label:'ðŸ–¨ï¸ Print'},
  ];
  tabDefs.forEach((td,i)=>{
    const tab = el('div','card-tab'+(i===0?' active':''), td.label);
    tab.dataset.tab = td.id;
    tab.onclick = ()=>{
      tabs.querySelectorAll('.card-tab').forEach(t=>t.classList.remove('active'));
      panels.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`tp-${s.id}-${td.id}`).classList.add('active');
    };
    tabs.appendChild(tab);
  });
  card.appendChild(tabs);

  // â”€â”€ PANEL: INFO â”€â”€
  const pInfo = el('div','tab-panel active');
  pInfo.id=`tp-${s.id}-info`;

  const sumBox = el('div','science-box');
  const sumT = el('div','science-box-title','ðŸ’¡ IN A NUTSHELL');
  const sumTx = el('div','science-box-text',s.summary);
  sumBox.appendChild(sumT); sumBox.appendChild(sumTx);
  pInfo.appendChild(sumBox);

  const secHow = el('div','info-section');
  secHow.style.marginTop='16px';
  const htTitle = el('div','info-title','HOW TO DO IT');
  const steps = el('ul','steps-list');
  s.howTo.forEach((step,i)=>{
    const li = document.createElement('li');
    const sn = el('div','step-num',(i+1).toString()); sn.style.background=s.iconColor;
    li.appendChild(sn);
    li.appendChild(document.createTextNode(step));
    steps.appendChild(li);
  });
  secHow.appendChild(htTitle); secHow.appendChild(steps);
  pInfo.appendChild(secHow);

  const secSci = el('div','info-section');
  const sciTitle = el('div','info-title','THE SCIENCE');
  const sciText = el('div','info-text'); sciText.innerHTML=s.science;
  secSci.appendChild(sciTitle); secSci.appendChild(sciText);
  pInfo.appendChild(secSci);

  panels.appendChild(pInfo);

  // â”€â”€ PANEL: QUIZ â”€â”€
  const pQuiz = el('div','tab-panel');
  pQuiz.id=`tp-${s.id}-quiz`;
  const qw = el('div','quiz-wrap');
  let correct=0, total=s.quiz.length, answered=0;
  const scoreRow = el('div','quiz-score-row');
  scoreRow.style.display='none';
  const resetBtn = el('button','btn-reset-quiz','Try again');
  resetBtn.onclick=()=>resetQuiz(s.id, qw, scoreRow);
  scoreRow.appendChild(document.createTextNode('Score: '));
  const scoreSpan = el('span',''); scoreSpan.id=`qscore-${s.id}`;
  scoreRow.appendChild(scoreSpan);
  scoreRow.appendChild(resetBtn);

  s.quiz.forEach((q,qi)=>{
    const qDiv = el('div','quiz-q'); qDiv.id=`qq-${s.id}-${qi}`;
    const qText = el('div','quiz-q-text',`${qi+1}. ${q.q}`);
    const opts = el('div','quiz-options');
    const expEl = el('div','quiz-explanation'); expEl.textContent='ðŸ’¡ '+q.exp;

    q.opts.forEach((opt,oi)=>{
      const btn = el('button','quiz-opt',opt);
      btn.onclick=()=>{
        if(btn.classList.contains('qo-locked')) return;
        Array.from(opts.children).forEach(b=>b.classList.add('qo-locked'));
        if(oi===q.ans){
          btn.classList.add('qo-correct'); correct++;
        } else {
          btn.classList.add('qo-wrong');
          opts.children[q.ans].classList.add('qo-correct');
        }
        expEl.classList.add('visible');
        answered++;
        if(answered===total){
          scoreRow.style.display='flex';
          scoreSpan.textContent=` ${correct}/${total}`;
          quizScores[s.id]={correct,total};
          localStorage.setItem('cl_quiz',JSON.stringify(quizScores));
          updateStats();
        }
      };
      opts.appendChild(btn);
    });
    qDiv.appendChild(qText); qDiv.appendChild(opts); qDiv.appendChild(expEl);
    qw.appendChild(qDiv);
  });
  qw.appendChild(scoreRow);
  pQuiz.appendChild(qw);
  panels.appendChild(pQuiz);

  // â”€â”€ PANEL: RATE & COMMENT â”€â”€
  const pRate = el('div','tab-panel');
  pRate.id=`tp-${s.id}-rate`;
  const rs = el('div','rating-section');

  // Star rating
  const rr1 = el('div','rating-row');
  const rl1 = el('div','rating-label','â­ HOW USEFUL IS THIS STRATEGY FOR YOU? (1â€“5 stars)');
  const starsWrap = el('div','stars');
  const rval = el('span','rating-val','');
  const ratingLabels = ['','Not useful','A bit useful','Useful','Very useful','My favourite!'];
  for(let i=1;i<=5;i++){
    const sb = el('button','star-btn','â­');
    sb.dataset.val=i;
    if((ratings[s.id]?.overall||0)>=i) sb.classList.add('filled');
    sb.onclick=()=>{
      const v = parseInt(sb.dataset.val);
      ratings[s.id] = {...(ratings[s.id]||{}), overall:v};
      localStorage.setItem('cl_ratings',JSON.stringify(ratings));
      starsWrap.querySelectorAll('.star-btn').forEach((b,bi)=>{
        b.classList.toggle('filled', bi<v);
      });
      rval.textContent=ratingLabels[v];
      updateStats(); updateRanking();
    };
    starsWrap.appendChild(sb);
  }
  if(ratings[s.id]?.overall) rval.textContent=ratingLabels[ratings[s.id].overall];
  rr1.appendChild(rl1); rr1.appendChild(starsWrap); rr1.appendChild(rval);
  rs.appendChild(rr1);

  // Personality suitability
  const rr2 = el('div','rating-row');
  const rl2 = el('div','rating-label','ðŸ§© WHO IS THIS STRATEGY BEST FOR? (select all that apply)');
  const pg = el('div','personality-grid');
  const persOptions = [
    {id:'introvert',label:'ðŸ§˜ Introvert'},
    {id:'extrovert',label:'ðŸ—£ï¸ Extrovert'},
    {id:'active',label:'ðŸƒ Active person'},
    {id:'reflective',label:'ðŸ“– Reflective / thinker'},
    {id:'creative',label:'ðŸŽ¨ Creative person'},
    {id:'social',label:'ðŸ¤ Social person'},
    {id:'anxious',label:'ðŸ˜° Often anxious'},
    {id:'angry',label:'ðŸ˜¡ Often angry'},
  ];
  const myPers = personalitySelections[s.id] || [];
  persOptions.forEach(p=>{
    const chip = el('div','pers-chip'+(myPers.includes(p.id)?' selected':''), p.label);
    chip.onclick=()=>{
      chip.classList.toggle('selected');
      const sel = Array.from(pg.querySelectorAll('.pers-chip.selected')).map(c=>c.textContent);
      personalitySelections[s.id] = persOptions.filter((_,i)=>pg.children[i].classList.contains('selected')).map(x=>x.id);
      localStorage.setItem('cl_pers',JSON.stringify(personalitySelections));
    };
    pg.appendChild(chip);
  });
  rr2.appendChild(rl2); rr2.appendChild(pg);
  rs.appendChild(rr2);

  // Comment box
  const rr3 = el('div','rating-row');
  const rl3 = el('div','rating-label','ðŸ’¬ YOUR COMMENT OR PERSONAL EXPERIENCE');
  const textarea = el('textarea','comment-area');
  textarea.placeholder='Write your thoughts here â€” e.g. "I tried this when I felt angry and it helped because..." or "I think this works best for people who..."';
  const savedC = el('div','saved-comments'); savedC.id=`saved-${s.id}`;
  renderComments(s.id, savedC);
  const saveBtn = el('button','btn-save-comment','Save comment ðŸ’¾');
  const flash = el('span','save-flash','âœ“ Saved!'); flash.id=`flash-${s.id}`;
  saveBtn.onclick=()=>{
    const val = textarea.value.trim();
    if(!val) return;
    if(!comments[s.id]) comments[s.id]=[];
    comments[s.id].push({text:val, date:new Date().toLocaleDateString('en-GB',{day:'numeric',month:'short'})});
    localStorage.setItem('cl_comments',JSON.stringify(comments));
    textarea.value='';
    renderComments(s.id, savedC);
    flash.classList.add('show');
    setTimeout(()=>flash.classList.remove('show'),2500);
    updateStats();
  };
  rr3.appendChild(rl3); rr3.appendChild(textarea);
  rr3.appendChild(saveBtn); rr3.appendChild(flash);
  rr3.appendChild(savedC);
  rs.appendChild(rr3);
  pRate.appendChild(rs);
  panels.appendChild(pRate);

  // â”€â”€ PANEL: PRINT â”€â”€
  const pPrint = el('div','tab-panel');
  pPrint.id=`tp-${s.id}-print`;
  const prev = buildPrintPreview(s);
  pPrint.appendChild(prev);
  const printBtnEl = el('button','btn-print','ðŸ–¨ï¸ Print this strategy card');
  printBtnEl.onclick=()=>printSingle(s.id);
  pPrint.appendChild(printBtnEl);
  panels.appendChild(pPrint);

  card.appendChild(panels);
  return card;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PRINT PREVIEW BUILDER
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function buildPrintPreview(s){
  const wrap = el('div','print-preview');
  wrap.innerHTML = `
    <h3>${s.icon} ${s.number} â€” ${s.title}</h3>
    <p><strong>Emotions it helps with:</strong> ${s.emotionLabels.join(' Â· ')}</p>
    <p><strong>Best for:</strong> ${s.who.includes('all')?'Everyone':s.whoLabels.join(' Â· ')}</p>
    <hr>
    <p><strong>In a nutshell:</strong> ${s.summary}</p>
    <hr>
    <p><strong>How to do it:</strong></p>
    <ol>${s.howTo.map(h=>`<li>${h}</li>`).join('')}</ol>
    <hr>
    <p><strong>The science:</strong> ${s.science.replace(/<[^>]+>/g,'')}</p>
    <hr>
    <p><strong>ðŸ“ Comprehension exercises</strong></p>
    ${buildPrintExercises(s)}
    <hr>
    <p><strong>My rating:</strong> ${'â­'.repeat(ratings[s.id]?.overall||0)||'(not rated yet)'}</p>
    <p><strong>My comments:</strong> ${(comments[s.id]||[]).map(c=>c.text).join(' | ') || '(no comments yet)'}</p>
  `;
  return wrap;
}

function buildPrintExercises(s){
  return s.printExercise.map((ex,i)=>{
    const num=i+1;
    if(ex.type==='gap') return `<p>${num}. Complete the gap: <em>${ex.q}</em><br><span class="blank"></span></p>`;
    if(ex.type==='tf') return `<p>${num}. True or False: <em>${ex.q}</em><br><span class="checkbox"></span> TRUE &nbsp;&nbsp; <span class="checkbox"></span> FALSE</p>`;
    if(ex.type==='open') return `<p>${num}. ${ex.q}<br><span class="blank" style="width:100%;display:block;margin-top:6px"></span><span class="blank" style="width:100%;display:block;margin-top:6px"></span></p>`;
    if(ex.type==='write'||ex.type==='prepare') return `<p>${num}. ${ex.q}<br><span class="blank" style="width:100%;display:block;margin-top:6px"></span><span class="blank" style="width:100%;display:block;margin-top:6px"></span></p>`;
    if(ex.type==='transform') return `<p>${num}. ${ex.q}<br><span class="blank" style="width:100%;display:block;margin-top:6px"></span></p>`;
    if(ex.type==='order') return `<p>${num}. ${ex.q}</p>`;
    if(ex.type==='list') return `<p>${num}. ${ex.q}<br>${Array(ex.n||3).fill(0).map((_,j)=>`${j+1}. <span class="blank"></span><br>`).join('')}</p>`;
    if(ex.type==='two-col') return `<p>${num}. ${ex.q}<br><table style="width:100%;border-collapse:collapse;margin-top:6px"><tr><th style="border:1px solid #ccc;padding:6px">Controllable</th><th style="border:1px solid #ccc;padding:6px">Not controllable</th></tr><tr><td style="border:1px solid #ccc;padding:30px"></td><td style="border:1px solid #ccc;padding:30px"></td></tr></table></p>`;
    return `<p>${num}. ${ex.q}</p>`;
  }).join('');
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   COMMENTS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function renderComments(id, container){
  container.innerHTML='';
  (comments[id]||[]).forEach((c,i)=>{
    const b=el('div','comment-bubble');
    const textWrap=el('div');
    const meta=el('div','comment-meta',c.date);
    const txt=document.createTextNode(c.text);
    textWrap.appendChild(meta); textWrap.appendChild(txt);
    const del=el('button','btn-del-comment','âœ•');
    del.onclick=()=>{
      comments[id].splice(i,1);
      localStorage.setItem('cl_comments',JSON.stringify(comments));
      renderComments(id, container);
      updateStats();
    };
    b.appendChild(textWrap); b.appendChild(del);
    container.appendChild(b);
  });
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   QUIZ RESET
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function resetQuiz(sid, qw, scoreRow){
  qw.querySelectorAll('.quiz-opt').forEach(b=>{
    b.classList.remove('qo-correct','qo-wrong','qo-locked');
  });
  qw.querySelectorAll('.quiz-explanation').forEach(e=>e.classList.remove('visible'));
  scoreRow.style.display='none';
  delete quizScores[sid];
  localStorage.setItem('cl_quiz',JSON.stringify(quizScores));
  updateStats();
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   FILTERS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function filterCards(emotion, btn){
  activeEmotionFilter = emotion;
  document.querySelectorAll('.tb-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}

function filterPersonality(pers, btn){
  activePersonFilter = pers;
  document.querySelectorAll('.filter-pill').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}

function applyFilters(){
  let visible=0;
  STRATEGIES.forEach(s=>{
    const card=document.getElementById('card-'+s.id);
    const emotionMatch = activeEmotionFilter==='all' || s.emotions.includes(activeEmotionFilter);
    const whoMatch = activePersonFilter==='all' || s.who.includes(activePersonFilter) || s.who.includes('all');
    if(emotionMatch && whoMatch){card.classList.remove('filtered-out');visible++;}
    else card.classList.add('filtered-out');
  });
  document.getElementById('no-cards-msg').style.display = visible===0?'block':'none';
}

// Expose these functions on window for inline onclick handlers
try{
  window.filterCards = filterCards;
  window.filterPersonality = filterPersonality;
  window.applyFilters = applyFilters;
}catch(e){
  // ignore (e.g., in strict environments)
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   STATS + RANKING
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function updateStats(){
  const rated = Object.keys(ratings).filter(k=>ratings[k]?.overall).length;
  const commented = Object.keys(comments).filter(k=>comments[k]?.length>0).length;
  const qDone = Object.values(quizScores);
  const qCorrect = qDone.reduce((a,q)=>a+q.correct,0);
  const qTotal = qDone.reduce((a,q)=>a+q.total,0);
  document.getElementById('stat-rated').textContent=rated;
  document.getElementById('stat-commented').textContent=commented;
  document.getElementById('stat-quiz').textContent=qTotal>0?`${qCorrect}/${qTotal}`:'0/0';
}

function updateRanking(){
  const list = document.getElementById('ranking-list');
  const ranked = STRATEGIES
    .filter(s=>ratings[s.id]?.overall)
    .sort((a,b)=>(ratings[b.id]?.overall||0)-(ratings[a.id]?.overall||0))
    .slice(0,6);
  if(ranked.length===0){
    list.innerHTML='<div class="ranking-empty">Rate strategies to build your personal ranking!</div>';
    return;
  }
  list.innerHTML='';
  ranked.forEach((s,i)=>{
    const item=el('div','ranking-item');
    const pos=el('div','rank-pos',(i+1).toString());
    const icon=el('div','rank-icon',s.icon);
    const name=el('div','rank-name',s.title);
    const stars=el('div','rank-stars','â­'.repeat(ratings[s.id]?.overall||0));
    item.appendChild(pos); item.appendChild(icon); item.appendChild(name); item.appendChild(stars);
    item.onclick=()=>document.getElementById('card-'+s.id).scrollIntoView({behavior:'smooth',block:'start'});
    list.appendChild(item);
  });
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PRINT FUNCTIONS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function printSingle(id){
  // open all tabs to print, save current states
  const card = document.getElementById('card-'+id);
  const printPanel = document.getElementById(`tp-${id}-print`);
  // Use window.print with a print-specific approach
  const prev = printPanel.querySelector('.print-preview');
  const win = window.open('','_print','width=800,height=600');
  win.document.write(`
    <!DOCTYPE html><html><head>
    <meta charset="UTF-8">
    <title>Coping Strategy â€” ${STRATEGIES.find(s=>s.id===id)?.title||id}</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
    <style>
      body{font-family:'Nunito',sans-serif;font-size:12px;color:#111;padding:24px;max-width:720px;margin:0 auto}
      h3{font-family:'Playfair Display',serif;font-size:20px;margin-bottom:8px}
      p{margin-bottom:8px;line-height:1.6}
      ol{margin-left:20px;margin-bottom:10px}
      li{margin-bottom:4px}
      hr{border:1px solid #ddd;margin:12px 0}
      .blank{display:inline-block;min-width:100px;border-bottom:2px solid #333;margin:0 4px}
      .checkbox{display:inline-block;width:14px;height:14px;border:2px solid #333;vertical-align:middle;margin-right:4px;border-radius:2px}
      table{width:100%;border-collapse:collapse}
      td,th{border:1px solid #ccc;padding:6px;font-size:11px}
      @page{margin:1.5cm}
    </style>
    </head><body>
    ${prev.innerHTML}
    </body></html>
  `);
  win.document.close();
  win.focus();
  setTimeout(()=>{win.print();},600);
}

function printAll(){
  const allContent = STRATEGIES.map(s=>{
    const prev = document.getElementById(`tp-${s.id}-print`)?.querySelector('.print-preview');
    return prev ? `<div style="break-inside:avoid;page-break-after:always">${prev.innerHTML}</div>` : '';
  }).join('');
  const win = window.open('','_print_all','width=800,height=700');
  win.document.write(`
    <!DOCTYPE html><html><head>
    <meta charset="UTF-8"><title>Coping Strategy Library â€” All Cards</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
    <style>
      body{font-family:'Nunito',sans-serif;font-size:11px;color:#111;padding:20px}
      h3{font-family:'Playfair Display',serif;font-size:18px;margin-bottom:6px}
      p{margin-bottom:6px;line-height:1.5}
      ol{margin-left:18px;margin-bottom:8px}
      li{margin-bottom:3px}
      hr{border:1px solid #ddd;margin:10px 0}
      .blank{display:inline-block;min-width:90px;border-bottom:2px solid #333;margin:0 4px}
      .checkbox{display:inline-block;width:13px;height:13px;border:2px solid #333;vertical-align:middle;margin-right:3px;border-radius:2px}
      table{width:100%;border-collapse:collapse}
      td,th{border:1px solid #ccc;padding:5px;font-size:10px}
      @page{margin:1.2cm}
    </style>
    </head><body>${allContent}</body></html>
  `);
  win.document.close();
  win.focus();
  setTimeout(()=>{win.print();},800);
}

/* ---------- UTILS ---------- */
function el(tag, cls, txt){
  const e=document.createElement(tag);
  if(cls) e.className=cls;
  if(txt!==undefined) e.textContent=txt;
  return e;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   INIT
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
buildAllCards();


