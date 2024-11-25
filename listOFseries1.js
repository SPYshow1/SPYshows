const shareButton = document.getElementById("my_list_section2");

if (navigator.share) {
    
shareButton.addEventListener("click", async () => {
      try {
        
await navigator.share({
          title: 'Check this out!',
          text: 'share',
          url: window.location.href  
        });
        console.log('share successful');
      } catch (error) {
        console.error('share failed', error);
      }
    });
  } else {
    console.log('Something wrong');
  }

 function getFilmFromUrl() {
   const urlParams = new URLSearchParams(window.location.search);
   return urlParams.get('film');
 }

 const films = {

// start section of series

  blacklight2:  {

    wa: "https://vk.com/video_ext.php?oid=848076703&id=456240061&hash=a13004cea1c7fd61",

    title: "Blacklight 2022",

    kind: "Action • Thriller",

    description: "Travis Block, a shadowy government agent who specializes in removing operatives whose covers have been exposed, uncovers a deadly conspiracy within his own ranks that reaches the highest echelons of power.",

    trailer: "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/PE04ESdgnHI?autoplay=1&mute=1&loop=1&playlist=PE04ESdgnHI\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  extraction3:  {

    "wa": "https://fdewsdc.sbs/embed/lthq021xy0x6",
  
    title: "Extraction 2023",
   
    kind: "Action • Crime • Thriller",
   
    description: "After narrowly escaping the events of the first film, Rick returns as an Australian mercenary in covert operations who is tasked with another dangerous mission: helping a ruthless Georgia gangster rescue his troubled family from the prison where they are being held.",
   
    trailer: "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/Y274jZs5s7s?autoplay=1&mute=1&loop=1&playlist=Y274jZs5s7s\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  noOne4:       {
 
    wa: "https://vk.com/video_ext.php?oid=847834963&id=456239304&hash=06d6c8050d40722c",
 
    title: "No one will save you 2023",
 
    kind: "Horror • Sci-Fi • Thriller",
   
    description: "No One Will Save You is a 2023 American science fiction horror The film stars Kaitlyn Dever as a young seamstress living alone, shunned by the local townspeople, who must fight off a home invasion by gray aliens and their associated parasites that has unexpected consequences.",
  
    trailer: "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/WpxQ8xklfr8?autoplay=1&mute=1&loop=1&playlist=WpxQ8xklfr8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  creator5:     {
  
    wa: "https://fdewsdc.sbs/embed/ptgrh6vusqpz",
  
    "title": "The creator",
   
    kind: "Action • Adventure • Sci-Fi • Drama",
  
    description: "As a future war between the human race and artificial intelligence rages on, ex-special forces agent Joshua is recruited to hunt down and kill the Creator, the elusive architect of advanced AI. The Creator has developed a mysterious weapon that has the power to end the war and all of mankind. As Joshua and his team of elite operatives venture into enemy-occupied territory, they soon discover the world-ending weapon is actually an AI in the form of a young child.",
  
    trailer: "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/ex3C1-5Dhb8?autoplay=1&mute=1&loop=1&playlist=ex3C1-5Dhb8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  hijack6:      {
  
    wa: "https://fdewsdc.sbs/embed/hqurebipy6u7",

    title: "Hijack 93",

    kind: "Thriller • Drama",

    description: "Hijack '93 is a Nigerian thriller based on the real-life 1993 hijacking of a Nigerian Airways flight. The story follows four men who take control of the plane, using it as a symbol to protest and challenge the country’s military-backed government. Their aim is to raise awareness and push for social change.",
  
    trailer: "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/rNJzWqKUlwM?autoplay=1&mute=1&loop=1&playlist=rNJzWqKUlwM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  terr7:        {
   
    wa: "https://www.ok.ru/videoembed/8160739920622",
  
    title: "Terrifier 3",
   
    kind: "Dark • comedy • Horror",

    description: "In Terrifier 3, Art the Clown returns to terrorize people in increasingly disturbing ways. Sienna and her brother Jonathan, still traumatized from previous events, find themselves again facing Art, who goes on a gruesome killing spree during the holiday season. They ultimately confront him in a final, deadly showdown in their home.",
  
    trailer: "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/zaPcin5knJk?autoplay=1&mute=1&loop=1&playlist=zaPcin5knJk\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  souleater8:   {
  
    wa: "https://fdewsdc.sbs/embed/tkx3vybcvk32",

    title: "The soul eater",
 
    kind: "Crime • Mystery • Horror • Thriller",
   
    description: "The Soul Eater follows Nicobar Lane, a professional hunter obsessed with tracking the elusive Dreamwish Beast across space. As he pursues this mysterious creature, Lane's fixation leads him to confront his own desires and motivations, exploring themes of obsession and the nature of reality. The story blends elements of adventure and science fiction, making it a compelling read for fans of the genre.",
  
    trailer: "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/A-FgyIb_jBI?autoplay=1&mute=1&loop=1&playlist=A-FgyIb_jBI\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  operation9:   {
 
    wa: "https://fdewsdc.sbs/embed/jn9hqq74sfq2",
  
    title: "Operation blood hunt",
  
    kind: "Action • Adventure • Horror • Thriller",
  
    description: "Operation Blood Hunt is a 2024 horror film set in 1944. A group of Special Forces soldiers is sent to a remote Pacific island to investigate the mysterious disappearance of Marines. They soon discover that the island is home to werewolves, forcing them to fight for their survival against these supernatural creatures details.",
  
    trailer: "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/Pt4s2aALIxg?autoplay=1&mute=1&loop=1&playlist=Pt4s2aALIxg\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  carved10:     {
  
    wa: "https://fdewsdc.sbs/embed/7rky97sq28g9",
 
    title: "Carved",
 
    kind: "Dark comedy • Comedy • Horror",
  
    description: "Carved 2024 is about Kira, who returns to her hometown and faces a vengeful pumpkin monster created by a chemical spill. The creature attacks during a carving contest, targeting those who harm pumpkins. Kira and her friends must find a way to survive and defeat the monster by using its instinct to protect baby pumpkins against it.",
  
    trailer: "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/HLu0FoIgGCs?autoplay=1&mute=1&loop=1&playlist=HLu0FoIgGCs\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "1":          { 
    
    "wa": "https://fdewsdc.sbs/embed/w5hny20nz3my",
     
   "title": "Sting", 
   
   "kind": "Horror • Sci-Fi • Thriller",
   
   "description": "Charlotte is a rebellious 12-year-old girl who finds a tiny spider in her rundown apartment building. She keeps it in a jar, but it soon starts to grow at a monstrous rate and develop an insatiable appetite for blood. As her neighbors begin to disappear, Charlotte and her family find themselves in a desperate fight for their lives against a ravenous arachnid with a taste for human flesh.",
   
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/B73g786Izg0?autoplay=1&mute=1&loop=1&playlist=B73g786Izg0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"

    },
    
  "action1":      {
  
    "wa": "https://fdewsdc.sbs/embed/0m00oubxqx0f",
 
    "title": "John wick 4",
 
    "kind": "Action • Crime • Thriller",
  
    "description": "With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin.",
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/yjRHZEUamCc?autoplay=1&mute=1&loop=1&playlist=yjRHZEUamCc\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "action2":      {
  
    "wa": "https://fdewsdc.sbs/embed/t2fpe6rlr67a",
 
    "title": "The bourne identity",
 
    "kind": "Action • Mystery • Thriller",
  
    "description": "A group of strangers find a man with bullet-ridden body and take care of him. He wakes up with a blank memory and begins a journey to learn his identity, unaware that the road ahead is full of danger.",
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/FpKaB5dvQ4g?autoplay=1&mute=1&loop=1&playlist=FpKaB5dvQ4g\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "action3":      {
  
    "wa": "https://fdewsdc.sbs/embed/n1r4o8pya2q8",
 
    "title": "Deadpool & wolverine",
 
    "kind": "Action • Sci-Fi • Comedy",
  
    "description": "Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse. He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threat.",
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/73_1biulkYk?autoplay=1&mute=1&loop=1&playlist=73_1biulkYk\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "action4":      {
  
    "wa": "https://fdewsdc.sbs/embed/f2su76yluff8",
 
    "title": "Wrath of man",
 
    "kind": "Action • Crime • Thriller",
  
    "description": "H is a mysterious man who starts working for a cash moving truck company. He becomes known for using amazing precision and dexterity to neutralise robbers. However, H is actually out for revenge.",
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/EFYEni2gsK0?autoplay=1&mute=1&loop=1&playlist=EFYEni2gsK0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "action5":      {
  
    "wa": "https://fdewsdc.sbs/embed/5cdb53jdn2k7",
 
    "title": "Baby driver",
 
    "kind": "Action • Crime • Drama",
  
    "description": "Doc forces Baby, a former getaway driver, to partake in a heist, threatening to hurt his girlfriend if he refuses. But the plan goes awry when their arms dealers turn out to be undercover officers.",
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/zTvJJnoWIPk?autoplay=1&mute=1&loop=1&playlist=zTvJJnoWIPk\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "action6":      {
  
    "wa": "https://fdewsdc.sbs/embed/2y7ckbttyjgq",
 
    "title": "Inglourious Basterds",
 
    "kind": "Wars • Adventure • Drama",
  
    "description": "Shosanna wants to avenge her family's death by the Nazis. Years later, she finally gets the opportunity, but things change when a group of Jewish-American guerilla soldiers have a similar plan.",
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/KnrRy6kSFF0?autoplay=1&mute=1&loop=1&playlist=KnrRy6kSFF0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "drama1":       {
  
    "wa": "https://fdewsdc.sbs/embed/9029ivt9boda",
 
    "title": "My fault",
 
    "kind": "Drama • Romance",
  
    "description": "Noah has to leave her town, boyfriend and friends behind and move into the mansion of her mother's new rich husband. There she meets Nick, her new stepbrother. She soon discovers that, behind the image of a model son, Nick is hiding something.",
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/PaB7cGBuCP0?autoplay=1&mute=1&loop=1&playlist=PaB7cGBuCP0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "drama2":       {
  
    "wa": "https://fdewsdc.sbs/embed/npic4h1fwgtj",
 
    "title": "The godfather",
 
    "kind": "Drama • Crime",
  
    "description": "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son, Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/UaVTIH8mujA?autoplay=1&mute=1&loop=1&playlist=UaVTIH8mujA\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  
  
  "drama3":       {
  
    "wa": "https://fdewsdc.sbs/embed/03biasw44dzf",
 
    "title": "Unlocked",
 
    "kind": "Drama • Crime • Thriller",
  
    "description": "In Unlocked 2023, a young woman’s life is turned upside down when she loses her phone, and it falls into the hands of a dangerous hacker. Using her personal information, he manipulates her life, stalking her and putting her in constant danger. As she fights to regain control, the thriller delves into the dark side of technology and privacy in the modern world."
    ,
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/k8qGElYoAoU?autoplay=1&mute=1&loop=1&playlist=k8qGElYoAoU\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "drama4":       {
  
    "wa": "https://fdewsdc.sbs/embed/r6korj4t5blb",
 
    "title": "No limit",
 
    "kind": "Drama • Sport • Romance • Thriller",
  
    "description": "Roxana Aubrey decides to drop her studies and escape her life in Paris for a free diving course in the south of France. She is quickly pulled into a life that reaches new depths brought by the weight of an ocean's descent."
    ,
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/3mLzxI2_pqo?autoplay=1&mute=1&loop=1&playlist=3mLzxI2_pqo\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "drama5":       {
  
    "wa": "https://fdewsdc.sbs/embed/0am5c6yonof9",
 
    "title": "The wonder 2022",
 
    "kind": "Drama • Mystery • Thriller",
  
    "description": "Set in The Irish Midlands in 1862, the story follows a young girl who stops eating but remains miraculously alive and well. English nurse Lib Wright is brought to a tiny village to observe eleven-year old Anna O'Donnell. Tourists and pilgrims mass to witness the girl who is said to have survived without food for months."
    ,
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/htybz7XscIY?autoplay=1&mute=1&loop=1&playlist=htybz7XscIY\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "drama6":       {
  
    "wa": "https://fdewsdc.sbs/embed/m5tiwb7hn6e8",
 
    "title": "Dark waters",
 
    "kind": "Drama • Mystery • Thriller",
  
    "description": "Robert, a defence lawyer, goes up against a corporation to stop it from polluting a water source and endangering the lives of the people. However, he is forced to jeopardise his life to expose them."
    ,
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/RvAOuhyunhY?autoplay=1&mute=1&loop=1&playlist=RvAOuhyunhY\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "old1":         {
  
    "wa": "https://fdewsdc.sbs/embed/80owlcsc6zj3",
 
    "title": "1917",
 
    "kind": "Drama • Action • History",
  
    "description": "In 1917 (2019), two British soldiers, Schofield and Blake, are given a dangerous mission during World War I: to cross enemy territory to deliver a message that could save 1,600 men from a deadly ambush. Along the way, they face harrowing obstacles, testing their courage and will to survive."
    ,
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/YqNYrYUiMfg?autoplay=1&mute=1&loop=1&playlist=YqNYrYUiMfg\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "old2":         {
  
    "wa": "https://fdewsdc.sbs/embed/cat0b56u7wp4",
 
    "title": "Kingdom of heaven",
 
    "kind": "Adventure • Action • History",
  
    "description": "Aided by his advisor Tiberias, Crusader Balian learns the true meaning of knighthood. Enlightened, he seeks to establish peace between Jerusalem and the East engaged in the Holy War."
    ,
  
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/KartNo8EDWY?autoplay=1&mute=1&loop=1&playlist=KartNo8EDWY\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "old3":         {
  
    "wa": "https://fdewsdc.sbs/embed/gzhtfoa79tl7",
 
    "title": "Outlaw king",
 
    "kind": "Adventure • Action • History",
  
    "description": "In Outlaw King 2018, Robert the Bruce, a Scottish nobleman, leads a rebellion against English rule in the 14th century after being betrayed. He unites clans, fights for Scotland's independence, and faces intense battles in his struggle to become king and free his people from oppression."
    
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/Q-G1BME8FKw?autoplay=1&mute=1&loop=1&playlist=Q-G1BME8FKw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "old4":         {
  
    "wa": "https://fdewsdc.sbs/embed/wtum7k9r600b",
 
    "title": "Fury 2014",
 
    "kind": "Adventure • Action • History",
  
    "description": "In Fury 2014, set during World War II, U.S. tank commander Don Wardaddy Collier and his crew face impossible odds as they push deep into Nazi Germany. Together, they must confront the horrors of war and rely on each other to survive as they undertake a final, deadly mission behind enemy lines."
    
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/q94n3eWOWXM?autoplay=1&mute=1&loop=1&playlist=q94n3eWOWXM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "old5":         {
  
    "wa": "https://fdewsdc.sbs/embed/ont70s32nztp",
 
    "title": "Braveheart",
 
    "kind": "Adventure • Action • History",
  
    "description": "In Braveheart 1995, Scottish warrior William Wallace leads a rebellion against English rule after suffering personal tragedy at their hands.Driven by a quest for freedom, he unites clans and inspires his people to fight for independence, ultimately facing betrayal and sacrifice in his journey."
    
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/1NJO0jxBtMo?autoplay=1&mute=1&loop=1&playlist=1NJO0jxBtMo\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "old6":         {
  
    "wa": "https://fdewsdc.sbs/embed/qlrwiq6y4l05",
 
    "title": "King Arthur: Legend of the sword",
 
    "kind": "Adventure • Action • History • Drama",
  
    "description": "In King Arthur: Legend of the Sword 2017, young Arthur discovers his royal heritage after pulling Excalibur from a stone. Raised in the slums, he must confront his tyrannical uncle Vortigern, who has usurped the throne. With the help of allies, Arthur embarks on a quest to reclaim his birthright and unite England against oppression."
    
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/jIM4-HLtUM0?autoplay=1&mute=1&loop=1&playlist=jIM4-HLtUM0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  
  
  "2":            {
  "wa": "https://fdewsdc.sbs/embed/77ar5hhvtmfi",
  "title": "Venom 2021",
  "kind": "Action • Adventure • Sci-Fi • Thriller",
  "description": "Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror.",
  "trailer": "<br><br><br><div class=\"video_of_movie\">\n      <iframe \n          width=\"900\" \n          height=\"500\" \n          style=\"border-radius: 40px;\"\n          src=\"https://www.youtube.com/embed/-FmWuCgJmxo?autoplay=1&mute=1&loop=1&playlist=-FmWuCgJmxo\" \n          allowfullscreen>\n      </iframe>\n      </div>\n"
},
  "3":            {
    "wa": "https://fdewsdc.sbs/embed/smz2z8ggiq35",
    "title": "Abigail",
    "kind": "Dark comedy • Horror • Monster horror • Thriller",
    "description": "A group of would-be criminals kidnaps the 12-year-old daughter of a powerful underworld figure. Holding her for ransom in an isolated mansion, their plan starts to unravel when they discover their young captive is actually a bloodthirsty vampire.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/3PsP8MFH8p0?autoplay=1&mute=1&loop=1&playlist=3PsP8MFH8p0\" allowfullscreen></iframe></div>"
  },
  "4":            {
    "wa": "",
    "title": "Devara: part 1",
    "kind": "Action epic • Action • Drama • Thriller",
    "description": "An epic action saga set against coastal lands, which briefs about rip-roaring, emotionally charged incidents in the periodic timeline, also comprises the titular protagonist being the rescuer to deprived and fear to evildoers < coming soon >",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/Xg0vBOxV2to?autoplay=1&mute=1&loop=1&playlist=Xg0vBOxV2to\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "5":            {
    "wa": "https://fdewsdc.sbs/embed/lgc31k8famxf",
    "title": "Kingdom of the Planet of the Apes",
    "kind": "Action • Sci-Fi epic • Thriller • Drama • Adventure",
    "description": "Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he's been taught about the past and make choices that will define a future for apes and humans alike.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/XtFI7SNtVpY?autoplay=1&mute=1&loop=1&playlist=XtFI7SNtVpY\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "6":            {
    "wa": "https://fdewsdc.sbs/embed/ti33t48p9n5x",
    "title": "Savi 2024",
    "kind": "Action • Drama • Romance • Thriller",
    "description": "Nakul Sachdeva and Savitri Sachdeva (Savi) are an Indian couple living in Liverpool with their son Adi. They lead a happy and peaceful life, with Savi being a housewife, while Nakul works as a construction worker. Nakul has a bad relationship with his boss Stephanie Fowler, who is racist and often humiliates him.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/e1_NScEPKic?autoplay=1&mute=1&loop=1&playlist=e1_NScEPKic\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "7":            {
    "wa": "https://fdewsdc.sbs/embed/r5euorrx5vwg",
    "title": "Atlas 2024",
    "kind": "Action epic • Adventure • Drama • Thriller",
    "description": "Plot. In the year 2043, humanoid artificial intelligence terrorist Harlan leads a war of machines against humans, which leaves 3 million people dead. The military forces of a new International Coalition of Nations (ICN) win a string of victories against Harlan and force him to flee into outer space.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/Jokpt_LJpbw?autoplay=1&mute=1&loop=1&playlist=Jokpt_LJpbw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "8":            {
    "wa": "https://fdewsdc.sbs/embed/voft0b1p9izp",
    "title": "Cult killer",
    "kind": "Mystery • Adventure • Drama • Crime • Thriller",
    "description": "After a renowned private investigator is murdered, his protégé takes on the case. As her investigation unfolds, she is forced into a dangerous alliance with his killer to uncover the town's grisly secrets and bring justice to its victims.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/3hT7IzZuuVk?autoplay=1&mute=1&loop=1&playlist=3hT7IzZuuVk\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  "9":            {
    "wa": "https://fdewsdc.sbs/embed/onnjyseg9fm4",
    "title": "The beekeeper 2024",
    "kind": "Action • Political thriller • Crime • Thriller",
    "description": "A kind-hearted landlady commits suicide after falling victim to a phishing scam, leading former (Beekeeper) operative Adam Clay to set out on a brutal campaign for revenge upon those responsible.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/CHKn-yDCE2w?autoplay=1&mute=1&loop=1&playlist=CHKn-yDCE2w\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "10":            {
    "wa": "https://fdewsdc.sbs/embed/e27igtv8rq33",
    "title": "The fall guy 2024",
    "kind": "Action • Comedy • Drama • Romance",
    "description": "A stuntman, fresh off an almost career-ending accident, has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job. What could possibly go right?",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/j7jPnwVGdZ8?autoplay=1&mute=1&loop=1&playlist=j7jPnwVGdZ8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "11":            {
  
    "wa": "https://fdewsdc.sbs/embed/b6ebfwbtyweq",
    "title": "Night swim",
    "kind": "Supernatural horror • Horror • Thriller",
    "description": "In the present day, the Waller family—Ray, Eve, and children Izzy and Elliot—are seeking a new, permanent residence after Ray has been forced to retire from his baseball career due to multiple sclerosis. They decide to purchase a house with a swimming pool in the backyard, especially after hearing that the pool would be good for Ray’s condition. Ray scratches his hand while working to clear out the pool in the back yard. When the pool maintenance come to inspect it, they reveal that the pool is essentially self-sustaining, taking its water from an underground spring in the area.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/pcSNqteCEtE?autoplay=1&mute=1&loop=1&playlist=pcSNqteCEtE\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
  
  
 "12":            {
    "wa": "https://fdewsdc.sbs/embed/s7mx81a53qqp",
    "title": "Road house",
    "kind": "Action epic • Action • Thriller",
    "description": "Road House is a 2024 American action film, which is a remake of Road House and the third movie overall in the titular franchise. Directed by Doug Liman from a script written by Anthony Bagarozzi and Chuck Mondry, the events of the story are similar to the original release. It stars Jake Gyllenhaal as an ex-UFC fighter who takes a job as a bouncer at a Florida Keys road house. Produced by Joel Silver, the movie also features Daniela Melchior, Billy Magnussen, Jessica Williams, Joaquim de Almeida, JD Pardo, Austin Post, and Conor McGregor in its supporting cast.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/g6O1_cuXRNs?autoplay=1&mute=1&loop=1&playlist=g6O1_cuXRNs\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "13":            {
    "wa": "https://www.ok.ru/videoembed/888511924820",
    "title": "Wolf warriors 2",
    "kind": "Action • Drama • Adventure • War • Thriller",
    "description": "China's deadliest special forces operative settles into a quiet life on the sea. When sadistic mercenaries begin targeting nearby civilians, he must leave his newfound peace behind and return to his duties as a soldier and protector.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/fkqGiPB2D8M?autoplay=1&mute=1&loop=1&playlist=fkqGiPB2D8M\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "14":            {
    "wa": "https://fdewsdc.sbs/embed/6to3v7ejg7sx",
    "title": "Rebel ridge",
    "kind": "Action • Drama • Crime • Thriller",
    "description": "Rebel Ridge is a 2024 American crime action thriller film written, produced, directed and edited by Jeremy Saulnier. The film stars Aaron Pierre as Terry Richmond, a former Marine who has the funds needed to post bail for his cousin unjustly seized via civil forfeiture by a small town's corrupt police force. Don Johnson, AnnaSophia Robb, David Denman, Emory Cohen, Steve Zissis, Zsané Jhé, Dana Lee, and James Cromwell also appear in the film.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/gF3gZicntIw?autoplay=1&mute=1&loop=1&playlist=gF3gZicntIw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "15":            {
    "wa": "https://fdewsdc.sbs/embed/a6xvsb6qwo1s",
    "title": "Damsel",
    "kind": "Action • Dark fantasy • Fairy tale • Fantasy",
    "description": "The first king of Aurea leads a futile attack on a dragon residing in his realm. All the king's men are killed, leaving the king at the dragon's mercy. A young woman agrees to marry a handsome prince -- only to discover it was all a trap. She is thrown into a cave with a fire-breathing dragon and must rely solely on her wits and will to survive.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/iM150ZWovZM?autoplay=1&mute=1&loop=1&playlist=iM150ZWovZM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "16":            {
    "wa": "https://fdewsdc.sbs/embed/iivpt4z6sxfa",
    "title": "Lift",
    "kind": "Action • Comedy • Drama • Crime • Thriller",
    "description": "The movie Lift 2024 tells the story of an international heist crew led by Cyrus Whitaker, played by Kevin Hart. The team is tasked with stealing $500 million worth of gold from a passenger plane flying at an altitude of 40,000 feet. The movie features a high-stakes, action-packed heist set in the skies. Alongside Hart, the cast includes Gugu Mbatha-Raw as an Interpol agent named Abby Gladwell, who is involved in the heist operation, and other key characters who contribute to the plan.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/QfFasuouxQI?autoplay=1&mute=1&loop=1&playlist=QfFasuouxQI\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "17":            {
    "wa": "https://fdewsdc.sbs/embed/ysc1tbg5zmtf",
    "title": "Code 8: Part 2",
    "kind": "Action • Drama • Crime • Thriller",
    "description": "In Code 8: Part 2, Connor Reed teams up with a young girl named Pavani, who witnesses her brother's murder by a robotic police K9 unit. As they try to expose the corruption of Sergeant King, who is behind these K9 units, they are pursued by both the police and criminal groups. The film revolves around their fight for survival and their mission to reveal the truth.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/rzo4XdMBSHw?autoplay=1&mute=1&loop=1&playlist=rzo4XdMBSHw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "18":            {
    "wa": "https://w1.shofha.tv/embed.php?vid=cb63bdba5",
    "title": "Under Paris",
    "kind": "Action • Drama • Horror • Thriller",
    "description": "Under Paris 2024 is a thriller film directed by Xavier Gens. The plot revolves around Sophia, a brilliant scientist who discovers that a large and dangerous shark is swimming deep in the Seine River in Paris. As the story unfolds, she and other characters must find a way to deal with this deadly threat before it causes widespread destruction.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/jnCefPQIH98?autoplay=1&mute=1&loop=1&playlist=jnCefPQIH98\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "19":            {
    "wa": "https://fdewsdc.sbs/embed/dkjfzrfa3j9p",
    "title": "Badland Hunters",
    "kind": "Action • Drama • Adventure",
    "description": "Badland Hunters is set in a post-apocalyptic future after a devastating earthquake. The story follows two hunters, Nam San and Ji-wan, as they uncover a sinister plot by a doctor conducting immortality experiments on young people. They must fight mutated soldiers to save a kidnapped girl.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/hKbo-ZKdSqw?autoplay=1&mute=1&loop=1&playlist=hKbo-ZKdSqw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "20":            {
    "wa": "https://fdewsdc.sbs/embed/z4mg3cx8b680",
    "title": "Bullet train",
    "kind": "Action • Comedy • Thriller",
    "description": "Bullet Train 2022 is an action-comedy film where a skilled but unlucky assassin named Ladybug (played by Brad Pitt) is assigned to retrieve a briefcase aboard a high-speed train in Japan. However, he soon discovers that several other dangerous killers, each with their own agenda, are also on the train, leading to a chaotic and violent series of encounters. As the train speeds toward its destination, the killers realize their missions are intertwined, resulting in a deadly clash of wits and skill.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/0IOsk2Vlc4o?autoplay=1&mute=1&loop=1&playlist=0IOsk2Vlc4o\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "21":            {
    "wa": "https://fdewsdc.sbs/embed/rs08ol771klw",
    "title": "The Wages of Fear",
    "kind": "Action • Adventure • Drama",
    "description": "The Wages of Fear 2024 is a remake set in a war-torn Middle Eastern country. The story follows Clara and her team, who are hired by an oil company to transport nitroglycerin over 500 miles to stop a fire at an oil well. The mission is perilous, involving dangerous terrain, terrorists, and personal conflicts among the team members.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/9SX-jF6dTPU?autoplay=1&mute=1&loop=1&playlist=9SX-jF6dTPU\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },


 "22":            {
    "wa": "https://fdewsdc.sbs/embed/f0ntineq8lm3",
    "title": "Venom 3",
    "kind": "Action • Adventure • Sc-Fi • Thriller",
    "description": "Venom: The Last Dance follows Eddie Brock and the symbiote Venom as they become fugitives, hunted by authorities and facing a threat from Venom's home planet, Klyntar. The film explores their complex relationship, leading to a crucial decision that marks the end of their partnership. It promises humor, action, and a climactic battle against an impending symbiote invasion, marking the conclusion of the trilogy.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/HyIyd9joTTc?autoplay=1&mute=1&loop=1&playlist=HyIyd9joTTc\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "23":            {
    "wa": "https://fdewsdc.sbs/embed/iuo79mdfdx2e",
    "title": "The Conjuring 3",
    "kind": "Horror • Mystery • Thriller",
    "description": "Paranormal investigators Ed and Lorraine Warren take on one of the most sensational cases of their careers after a cop stumbles upon a dazed and bloodied young man walking down the road. Accused of murder, the suspect claims demonic possession as his defense, forcing the Warrens into a supernatural inquiry unlike anything they've ever seen before.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/h9Q4zZS2v1k?autoplay=1&mute=1&loop=1&playlist=h9Q4zZS2v1k\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "24":            {
    "wa": "https://w1.shofha.tv/embed.php?vid=2204491ac",
    "title": "Honest Thief",
    "kind": "Action • Thriller",
    "description": "Honest Thief follows Tom Carter, a skilled thief known as the ( In and Out Bandit ) who has stolen $9 million from banks. After falling in love with Annie, he decides to confess his crimes to start fresh. However, he is betrayed by corrupt FBI agents, forcing him to fight for his freedom and protect Annie from their schemes.",
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/jG1X67vnYM0?autoplay=1&mute=1&loop=1&playlist=jG1X67vnYM0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r1":            {
   
    "wa": "https://fdewsdc.sbs/embed/3ar8v6o9i3if",
    "title": "Apocalypse Z The Beginning of the End ",
    "kind": "Sci-Fi",
    "description": "In Apocalypse Z: The Beginning of the End, a deadly virus spreads, turning people into zombies. A Spanish lawyer survives the outbreak and documents his fight for survival. As society collapses, he battles both the infected and the chaos that emerges, struggling to find hope in a bleak, post-apocalyptic world."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/ZOSw6sx43fA?autoplay=1&mute=1&loop=1&playlist=ZOSw6sx43fA\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r2":            {
   
    "wa": "https://fdewsdc.sbs/embed/odew07t9fmtn",
    "title": "Camera 2024",
    "kind": "Drama",
    "description": " Camera 2024 follows Oscar, a young boy unable to speak, who moves with his mother to a quiet town. Oscar faces bullying but finds solace in photography with the help of Eric, an older man who becomes his friend and mentor. Through his art, Oscar brings healing and unity to his community, discovering his voice and resilience along the way."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/Xvi5gsUEBT4?autoplay=1&mute=1&loop=1&playlist=Xvi5gsUEBT4\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r3":            {
   

   
    "wa": "https://fdewsdc.sbs/embed/so0doxg4j50n",
    "title": "Canary black 2024",
    "kind": "Action • Drama",
    "description": " Canary Black (2024) follows CIA agent Avery Graves, who is blackmailed by terrorists threatening her husband. Forced into rogue operations, she faces dangerous betrayals and high-stakes action, as she races against time to uncover secrets and protect her loved ones."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/tSaw2HTVSsA?autoplay=1&mute=1&loop=1&playlist=tSaw2HTVSsA\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r4":            {
   

   
    "wa": "https://fdewsdc.sbs/embed/6l97ukfs4ita",
    
    "title": "Inside out 2015",
    
    "kind": "Adventure • Comedy • Animation",
    
    "description": " After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/Yr3tv1hW1gg?autoplay=1&mute=1&loop=1&playlist=Yr3tv1hW1gg\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r5":            {
   

   
    "wa": "https://fdewsdc.sbs/embed/pcnj49sgb93e",
    
    "title": "Inside out 2024",
    
    "kind": "Adventure • Comedy • Animation",
    
    "description": "In Inside Out 2 2024, Riley enters her teenage years, facing new emotions like Anxiety, Envy, and Embarrassment. As she joins a hockey camp, these emotions create conflicts, impacting her friendships. Eventually, Riley finds balance with the help of her core emotions, learning to embrace both old and new aspects of herself."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/LEjhY15eCx0?autoplay=1&mute=1&loop=1&playlist=LEjhY15eCx0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r6":            {
   

   
    "wa": "https://fdewsdc.sbs/embed/mqvby81phg4g",
    
    "title": "Terrifier 2",
    
    "kind": "Slasher horror • Teen horror • Horror",
    
    "description": " In Terrifier 2, Art the Clown is resurrected and returns to terrorize a teenage girl named Sienna and her younger brother on Halloween night. As Art goes on a brutal rampage, Sienna must face her fears to protect her family and uncover the dark connection they share with the killer."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/6KkONLf_ZKU?autoplay=1&mute=1&loop=1&playlist=6KkONLf_ZKU\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r7":            {
   

   
    "wa": "https://fdewsdc.sbs/embed/z5x8x8ddin5m",
    
    "title": "Terrifier 1",
    
    "kind": "Slasher horror • Teen horror • Horror",
    
    "description": " In Terrifier 1, a sadistic clown named Art goes on a brutal killing spree, terrorizing two women on Halloween night. The film follows their horrifying attempts to survive as Art relentlessly pursues them."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/fN5j1MtGO2Q?autoplay=1&mute=1&loop=1&playlist=fN5j1MtGO2Q\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r8":            {
   

   
    "wa": "https://fdewsdc.sbs/embed/w4s9dydqt45h",
    
    "title": "Undisputed 2 the last man standing",
    
    "kind": "Action • Drama • Crime",
    
    "description": " In Undisputed 2, former boxing champion George Iceman Chambers is framed and sent to a brutal Russian prison. There, he's forced to fight in illegal matches against Yuri Boyka, the prison's top fighter. Chambers must rely on his skills and resilience to survive and eventually prove his innocence."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/tV4EJytXgp4?autoplay=1&mute=1&loop=1&playlist=tV4EJytXgp4\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r9":            {
   

   
    "wa": "https://fdewsdc.sbs/embed/69w4q32z87km",
    
    "title": "Undisputed 3 Redemption",
    
    "kind": "Action • Drama • Crime",
    
    "description": " In Undisputed 3: Redemption 2010, Yuri Boyka, the top fighter from the previous film, seeks redemption after a career-ending injury. He enters an underground prison tournament to prove he's still the best and to regain his honor. Boyka faces off against fierce opponents, including a former champion, and strives to reclaim his place as the undisputed champion."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/qq-yqajCo6k?autoplay=1&mute=1&loop=1&playlist=qq-yqajCo6k\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r10":           {
   

   
    "wa": "https://vk.com/video_ext.php?oid=876096813&id=456239038&hash=f072ea7a79acfb96",
    
    "title": "Boyka: Undisputed 4",
    
    "kind": "Action • Drama • Crime",
    
    "description": " In Undisputed 4: Boyka - Undisputed 2016, Yuri Boyka, now out of prison and seeking redemption, fights in a series of brutal underground matches. When he inadvertently causes the death of an opponent, Boyka sets out to win a final match for the man’s widow, who is in financial trouble. Boyka faces his toughest competition yet, seeking both redemption and freedom in the process."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/mTCo06TJe20?autoplay=1&mute=1&loop=1&playlist=mTCo06TJe20\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r11":           {
   

   
    "wa": "https://vk.com/video_ext.php?oid=803530132&id=456244824&hash=1db6739f07349013",
    
    "title": "Smile 2",
    
    "kind": "Horror • Thriller",
    
    "description": "In Smile 2, Skye Riley, a pop star, becomes the new victim of the curse that haunts those who smile before dying. She tries to stop it by killing the last victim, but in the end, she succumbs to the curse and dies on stage, spreading it to the audience."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/0HY6QFlBzUY?autoplay=1&mute=1&loop=1&playlist=0HY6QFlBzUY\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r12":           {
   

   
    "wa": "https://vk.com/video_ext.php?oid=848077464&id=456253137&hash=6f0cd97056ef4d91",
    
    "title": "Smile 1",
    
    "kind": "Horror • Psychological • Thriller",
    
    "description": "In Smile 2022, Dr. Rose Cotter, a therapist, witnesses a patient’s horrifying suicide after claiming to be cursed by an entity that makes people smile eerily before dying. Rose starts experiencing the same phenomena and races to uncover the curse's origins. Despite her efforts, the entity consumes her, passing the curse to a new victim."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/BcDK7lkzzsU?autoplay=1&mute=1&loop=1&playlist=BcDK7lkzzsU\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r13":           {
   

   
    "wa": "https://vk.com/video_ext.php?oid=803530132&id=456244752&hash=d27459492f819a94",
    
    "title": "Devon 2024",
    
    "kind": "Horror • Thriller",
    
    "description": "Devon 2024 A group of five individuals is recruited to explore a condemned asylum after a young girl s mysterious disappearance years ago. They soon find themselves trapped in a deadly situation, uncovering terrifying secrets about the asylum and facing fatal consequences."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/yJxRIdUCE5g?autoplay=1&mute=1&loop=1&playlist=yJxRIdUCE5g\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },
 "r14":           {
   

   
    "wa": "https://vk.com/video_ext.php?oid=803530132&id=456244753&hash=80237620801fb8b3",
    
    "title": "Do not open 2024",
    
    "kind": "Horror • Thriller",
    
    "description": "In Do Not Open 2024, a teenage girl opens a mysterious email that leads to a deadly curse affecting her family. After an argument with her parents, she activates the curse, which grows stronger as they become more obsessed with technology. As the family faces terrifying consequences, they struggle to break free from the grip of the email's curse."
    ,
    
    "trailer": "<br><br><br><div class=\"video_of_movie\"><iframe width=\"900\" height=\"500\" style=\"border-radius: 40px;\" src=\"https://www.youtube.com/embed/J8cCciOsLc4?autoplay=1&mute=1&loop=1&playlist=J8cCciOsLc4\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>"
  },




// the wake of movies 1
  
  "25":           { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides color">
        <img onclick="window.location.href='listOFmovies.html?film=25'" src="https://miro.medium.com/v2/resize:fit:728/1*5qyPmwzqtiUSLKlDxmjk2w.jpeg" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides">
      <img onclick="window.location.href='listOFmovies.html?film=26'" src="https://m.media-amazon.com/images/S/pv-target-images/06a81368395186e55ef7e435b0967d732a1bbd7572e111d533a3e554c4c7e8b9._SX1080_FMjpg_.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=27'" src="https://cdn.sortiraparis.com/images/80/98390/979068-prison-break-la-serie-culte-des-annees-2000-bientot-de-retour-que-sait-on-de-ce-nouveau-projet.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFmovies.html?film=28'" src="https://cdn.apollo.audio/one/media/66d6/b908/93ad/8005/a35d/74dd/prison-break-netflix.jpg?quality=80&format=jpg&crop=0,0,843,1500&resize=crop" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFmovies.html?film=29'" src="https://upload.wikimedia.org/wikipedia/en/c/cd/PrisonBreakPilot.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFmovies.html?film=30'" src="https://m.media-amazon.com/images/S/pv-target-images/ad056fc4ea5d52eb9340ee7e1ca180aafcae9341c0be57432658a3a4ea66501b._SX1080_FMjpg_.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFmovies.html?film=31'" src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/old_images/EPISODE/2108/1770002108/1770002108-h" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=32'" src="https://simkl.in/episodes/63/6328148bf6b8c16df_w.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=33'" src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FtjbCMfwnEyi2xTw5eV5WSMtgCz8.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=34'" src="https://media.ouest-france.fr/v1/pictures/MjAyMzExNjFlNDUyODA0Y2YzNWJmZDY4NTBiM2QwYWE4ZTNjY2E?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=fa24a9050daf180bb3263634fba316f9f373b9e6818d7411b2d7d6c66c481cd1" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=35'" src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fg5VBX1QD7tN0sfvGR6qd53frefG.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=36'" src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fcng0p8lg3dskrktVA2W9cJZePY4.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=38'" src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FvOOMloi6UP8KuWZG7rcp5TC6T7i.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=39'" src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F3e4yHirYArcvRncNcTMrsKsiU4R.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 14</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=40'" src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FqdpqBpJnryXJ85WbU9ZXx8VTeTb.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 15</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=41'" src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F9acTia2cVK4Z0xMnoJJxmk2gGWa.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 16</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=42'" src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FP0CjFHhBPFLF6dMWpb3ariMUb3.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 17</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=43'" src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fk3CCu1lYCIVgK7UWv1Ufa16ztlj.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 18</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=44'" src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FAw4MpQ2nRpzI2nDordPL4arhRsM.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 19</p>
    </div>
    

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=45'" src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FqARzKfInwDxBusANmznpAJe6ZOC.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 20</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=46'" src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FAv2ph7a1y7Xo6ppHHL73WnHfQGf.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 21</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFmovies.html?film=47'" src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F1JuljrTTKCwp9Ayyq0MbzmpsYR2.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 22</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://fdewsdc.sbs/embed/6tot6m4mhhk9"
    ,
    
   title: 'Prison break: season 1 epside 1', 
   
   kind: 'Action • Crime • Drama • Thriller',
   
   description: `Prison Break Season 1 follows Michael Scofield, an engineer who intentionally gets himself imprisoned to help his brother Lincoln Burrows escape from death row. Lincoln was falsely convicted of a crime he didn't commit, and Michael, with his intricate prison escape plan tattooed on his body, must navigate dangerous alliances and outsmart the prison authorities to break Lincoln out before his execution date.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/AL9zLctDJaU?autoplay=1&mute=1&loop=1&playlist=AL9zLctDJaU" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },
  "r15":          { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides color">
        <img onclick="window.location.href='listOFseries1.html?film=r15'" src="https://canvas.tubitv.com/opts/dxr2cPQCgyOryw==/9fea4d40-4455-42ad-951b-fd39543e97bc/CIAPELgIOgUxLjEuMg==" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides">
      <img onclick="window.location.href='listOFseries1.html?film=r16'" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/hannibal-apertif.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r17'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/mads-mikkelsen-as-hannibal.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r18'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFkCM8rg4QDJMu71LIxqNeuU8WLVNwlv9IA&s" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r19'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/hannibal-mads-mikkelsen.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r20'" src="https://i.iplsc.com/-/000IKIOM7ORTURA5-C461-F4.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r21'" src="https://fr.web.img6.acsta.net/r_1280_720/pictures/14/04/15/14/40/088048.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r22'" src="https://img.goodfon.com/wallpaper/big/8/ac/hannibal-gannibal-serial-tv-7213.webp" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r23'" src="https://unaffiliatedcritic.com/wp-content/uploads/2015/06/Hannibal-Lecter-Mads-Mikkelsen-in-Antipasto.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r24'" src="https://sm.ign.com/ign_pl/screenshot/default/sehdv1qckuts8uz8y74h_ehth.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r25'" src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_89.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r26'" src="https://wallpapers.com/images/hd/hannibal-liquor-hw6431wu9ttofbeu.jpg"style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r27'" src="https://www.ecranlarge.com/content/uploads/2020/04/hannibal-photo-mads-mikkelsen-1174853-320x170.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://vk.com/video_ext.php?oid=884936444&id=456240034&hash=acab05714c6514e7"
    ,
    
   title: 'Hannibal 2013 season 1 epside 1', 
   
   kind: 'crime • drama • thriller • horror ',
   
   description: `Hannibal Lecter is a brilliant psychiatrist and a secret serial killer. He manipulates people, using his psychological expertise to control others. The story follows Will Graham, an FBI profiler, who works with Lecter to catch a killer, unaware that Hannibal is the one behind the crimes. As their relationship deepens, Will becomes entangled in Hannibal’s twisted games, not realizing the danger he's in until it's too late.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/RuiklpUQ-p4?autoplay=1&mute=1&loop=1&playlist=RuiklpUQ-p4" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },
  "r16":          { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r15'" src="https://canvas.tubitv.com/opts/dxr2cPQCgyOryw==/9fea4d40-4455-42ad-951b-fd39543e97bc/CIAPELgIOgUxLjEuMg==" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides color">
      <img onclick="window.location.href='listOFseries1.html?film=r16'" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/hannibal-apertif.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r17'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/mads-mikkelsen-as-hannibal.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r18'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFkCM8rg4QDJMu71LIxqNeuU8WLVNwlv9IA&s" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r19'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/hannibal-mads-mikkelsen.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r20'" src="https://i.iplsc.com/-/000IKIOM7ORTURA5-C461-F4.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r21'" src="https://fr.web.img6.acsta.net/r_1280_720/pictures/14/04/15/14/40/088048.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r22'" src="https://img.goodfon.com/wallpaper/big/8/ac/hannibal-gannibal-serial-tv-7213.webp" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r23'" src="https://unaffiliatedcritic.com/wp-content/uploads/2015/06/Hannibal-Lecter-Mads-Mikkelsen-in-Antipasto.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r24'" src="https://sm.ign.com/ign_pl/screenshot/default/sehdv1qckuts8uz8y74h_ehth.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r25'" src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_89.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r26'" src="https://wallpapers.com/images/hd/hannibal-liquor-hw6431wu9ttofbeu.jpg"style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r27'" src="https://www.ecranlarge.com/content/uploads/2020/04/hannibal-photo-mads-mikkelsen-1174853-320x170.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://fdewsdc.sbs/embed/191089x66je0"
    ,
    
   title: 'Hannibal 2013 season 1 epside 2', 
   
   kind: 'crime • drama • thriller • horror ',
   
   description: `Hannibal Lecter is a brilliant psychiatrist and a secret serial killer. He manipulates people, using his psychological expertise to control others. The story follows Will Graham, an FBI profiler, who works with Lecter to catch a killer, unaware that Hannibal is the one behind the crimes. As their relationship deepens, Will becomes entangled in Hannibal’s twisted games, not realizing the danger he's in until it's too late.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/RuiklpUQ-p4?autoplay=1&mute=1&loop=1&playlist=RuiklpUQ-p4" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },
  "r17":          { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r15'" src="https://canvas.tubitv.com/opts/dxr2cPQCgyOryw==/9fea4d40-4455-42ad-951b-fd39543e97bc/CIAPELgIOgUxLjEuMg==" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r16'" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/hannibal-apertif.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides color">
        <img onclick="window.location.href='listOFseries1.html?film=r17'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/mads-mikkelsen-as-hannibal.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r18'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFkCM8rg4QDJMu71LIxqNeuU8WLVNwlv9IA&s" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r19'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/hannibal-mads-mikkelsen.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r20'" src="https://i.iplsc.com/-/000IKIOM7ORTURA5-C461-F4.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r21'" src="https://fr.web.img6.acsta.net/r_1280_720/pictures/14/04/15/14/40/088048.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r22'" src="https://img.goodfon.com/wallpaper/big/8/ac/hannibal-gannibal-serial-tv-7213.webp" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r23'" src="https://unaffiliatedcritic.com/wp-content/uploads/2015/06/Hannibal-Lecter-Mads-Mikkelsen-in-Antipasto.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r24'" src="https://sm.ign.com/ign_pl/screenshot/default/sehdv1qckuts8uz8y74h_ehth.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r25'" src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_89.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r26'" src="https://wallpapers.com/images/hd/hannibal-liquor-hw6431wu9ttofbeu.jpg"style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r27'" src="https://www.ecranlarge.com/content/uploads/2020/04/hannibal-photo-mads-mikkelsen-1174853-320x170.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://fdewsdc.sbs/embed/xsqcrspk552p"
    ,
    
   title: 'Hannibal 2013 season 1 epside 3', 
   
   kind: 'crime • drama • thriller • horror ',
   
   description: `Hannibal Lecter is a brilliant psychiatrist and a secret serial killer. He manipulates people, using his psychological expertise to control others. The story follows Will Graham, an FBI profiler, who works with Lecter to catch a killer, unaware that Hannibal is the one behind the crimes. As their relationship deepens, Will becomes entangled in Hannibal’s twisted games, not realizing the danger he's in until it's too late.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/RuiklpUQ-p4?autoplay=1&mute=1&loop=1&playlist=RuiklpUQ-p4" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },
  "r18":          { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r15'" src="https://canvas.tubitv.com/opts/dxr2cPQCgyOryw==/9fea4d40-4455-42ad-951b-fd39543e97bc/CIAPELgIOgUxLjEuMg==" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r16'" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/hannibal-apertif.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r17'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/mads-mikkelsen-as-hannibal.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides color">
      <img onclick="window.location.href='listOFseries1.html?film=r18'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFkCM8rg4QDJMu71LIxqNeuU8WLVNwlv9IA&s" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r19'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/hannibal-mads-mikkelsen.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r20'" src="https://i.iplsc.com/-/000IKIOM7ORTURA5-C461-F4.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r21'" src="https://fr.web.img6.acsta.net/r_1280_720/pictures/14/04/15/14/40/088048.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r22'" src="https://img.goodfon.com/wallpaper/big/8/ac/hannibal-gannibal-serial-tv-7213.webp" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r23'" src="https://unaffiliatedcritic.com/wp-content/uploads/2015/06/Hannibal-Lecter-Mads-Mikkelsen-in-Antipasto.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r24'" src="https://sm.ign.com/ign_pl/screenshot/default/sehdv1qckuts8uz8y74h_ehth.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r25'" src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_89.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r26'" src="https://wallpapers.com/images/hd/hannibal-liquor-hw6431wu9ttofbeu.jpg"style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r27'" src="https://www.ecranlarge.com/content/uploads/2020/04/hannibal-photo-mads-mikkelsen-1174853-320x170.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://vk.com/video_ext.php?oid=884936444&id=456240037&hash=662b45c722fcee06"
    ,
    
   title: 'Hannibal 2013 season 1 epside 4', 
   
   kind: 'crime • drama • thriller • horror ',
   
   description: `Hannibal Lecter is a brilliant psychiatrist and a secret serial killer. He manipulates people, using his psychological expertise to control others. The story follows Will Graham, an FBI profiler, who works with Lecter to catch a killer, unaware that Hannibal is the one behind the crimes. As their relationship deepens, Will becomes entangled in Hannibal’s twisted games, not realizing the danger he's in until it's too late.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/RuiklpUQ-p4?autoplay=1&mute=1&loop=1&playlist=RuiklpUQ-p4" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },
  "r19":          { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r15'" src="https://canvas.tubitv.com/opts/dxr2cPQCgyOryw==/9fea4d40-4455-42ad-951b-fd39543e97bc/CIAPELgIOgUxLjEuMg==" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r16'" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/hannibal-apertif.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r17'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/mads-mikkelsen-as-hannibal.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r18'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFkCM8rg4QDJMu71LIxqNeuU8WLVNwlv9IA&s" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides color">
      <img onclick="window.location.href='listOFseries1.html?film=r19'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/hannibal-mads-mikkelsen.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r20'" src="https://i.iplsc.com/-/000IKIOM7ORTURA5-C461-F4.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r21'" src="https://fr.web.img6.acsta.net/r_1280_720/pictures/14/04/15/14/40/088048.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r22'" src="https://img.goodfon.com/wallpaper/big/8/ac/hannibal-gannibal-serial-tv-7213.webp" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r23'" src="https://unaffiliatedcritic.com/wp-content/uploads/2015/06/Hannibal-Lecter-Mads-Mikkelsen-in-Antipasto.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r24'" src="https://sm.ign.com/ign_pl/screenshot/default/sehdv1qckuts8uz8y74h_ehth.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r25'" src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_89.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r26'" src="https://wallpapers.com/images/hd/hannibal-liquor-hw6431wu9ttofbeu.jpg"style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r27'" src="https://www.ecranlarge.com/content/uploads/2020/04/hannibal-photo-mads-mikkelsen-1174853-320x170.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://fdewsdc.sbs/embed/fdmz6py4c35l"
    ,
    
   title: 'Hannibal 2013 season 1 epside 5', 
   
   kind: 'crime • drama • thriller • horror ',
   
   description: `Hannibal Lecter is a brilliant psychiatrist and a secret serial killer. He manipulates people, using his psychological expertise to control others. The story follows Will Graham, an FBI profiler, who works with Lecter to catch a killer, unaware that Hannibal is the one behind the crimes. As their relationship deepens, Will becomes entangled in Hannibal’s twisted games, not realizing the danger he's in until it's too late.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/RuiklpUQ-p4?autoplay=1&mute=1&loop=1&playlist=RuiklpUQ-p4" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },
  "r20":          { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r15'" src="https://canvas.tubitv.com/opts/dxr2cPQCgyOryw==/9fea4d40-4455-42ad-951b-fd39543e97bc/CIAPELgIOgUxLjEuMg==" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r16'" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/hannibal-apertif.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r17'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/mads-mikkelsen-as-hannibal.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r18'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFkCM8rg4QDJMu71LIxqNeuU8WLVNwlv9IA&s" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r19'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/hannibal-mads-mikkelsen.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides color">
      <img onclick="window.location.href='listOFseries1.html?film=r20'" src="https://i.iplsc.com/-/000IKIOM7ORTURA5-C461-F4.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r21'" src="https://fr.web.img6.acsta.net/r_1280_720/pictures/14/04/15/14/40/088048.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r22'" src="https://img.goodfon.com/wallpaper/big/8/ac/hannibal-gannibal-serial-tv-7213.webp" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r23'" src="https://unaffiliatedcritic.com/wp-content/uploads/2015/06/Hannibal-Lecter-Mads-Mikkelsen-in-Antipasto.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r24'" src="https://sm.ign.com/ign_pl/screenshot/default/sehdv1qckuts8uz8y74h_ehth.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r25'" src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_89.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r26'" src="https://wallpapers.com/images/hd/hannibal-liquor-hw6431wu9ttofbeu.jpg"style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r27'" src="https://www.ecranlarge.com/content/uploads/2020/04/hannibal-photo-mads-mikkelsen-1174853-320x170.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://fdewsdc.sbs/embed/z8epumqfq5pk"
    ,
    
   title: 'Hannibal 2013 season 1 epside 6', 
   
   kind: 'crime • drama • thriller • horror ',
   
   description: `Hannibal Lecter is a brilliant psychiatrist and a secret serial killer. He manipulates people, using his psychological expertise to control others. The story follows Will Graham, an FBI profiler, who works with Lecter to catch a killer, unaware that Hannibal is the one behind the crimes. As their relationship deepens, Will becomes entangled in Hannibal’s twisted games, not realizing the danger he's in until it's too late.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/RuiklpUQ-p4?autoplay=1&mute=1&loop=1&playlist=RuiklpUQ-p4" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },
  "r21":          { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r15'" src="https://canvas.tubitv.com/opts/dxr2cPQCgyOryw==/9fea4d40-4455-42ad-951b-fd39543e97bc/CIAPELgIOgUxLjEuMg==" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r16'" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/hannibal-apertif.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r17'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/mads-mikkelsen-as-hannibal.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r18'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFkCM8rg4QDJMu71LIxqNeuU8WLVNwlv9IA&s" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r19'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/hannibal-mads-mikkelsen.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r20'" src="https://i.iplsc.com/-/000IKIOM7ORTURA5-C461-F4.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides color">
      <img onclick="window.location.href='listOFseries1.html?film=r21'" src="https://fr.web.img6.acsta.net/r_1280_720/pictures/14/04/15/14/40/088048.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r22'" src="https://img.goodfon.com/wallpaper/big/8/ac/hannibal-gannibal-serial-tv-7213.webp" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r23'" src="https://unaffiliatedcritic.com/wp-content/uploads/2015/06/Hannibal-Lecter-Mads-Mikkelsen-in-Antipasto.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r24'" src="https://sm.ign.com/ign_pl/screenshot/default/sehdv1qckuts8uz8y74h_ehth.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r25'" src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_89.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r26'" src="https://wallpapers.com/images/hd/hannibal-liquor-hw6431wu9ttofbeu.jpg"style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r27'" src="https://www.ecranlarge.com/content/uploads/2020/04/hannibal-photo-mads-mikkelsen-1174853-320x170.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://fdewsdc.sbs/embed/pm3hxwowlub8"
    ,
    
   title: 'Hannibal 2013 season 1 epside 7', 
   
   kind: 'crime • drama • thriller • horror ',
   
   description: `Hannibal Lecter is a brilliant psychiatrist and a secret serial killer. He manipulates people, using his psychological expertise to control others. The story follows Will Graham, an FBI profiler, who works with Lecter to catch a killer, unaware that Hannibal is the one behind the crimes. As their relationship deepens, Will becomes entangled in Hannibal’s twisted games, not realizing the danger he's in until it's too late.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/RuiklpUQ-p4?autoplay=1&mute=1&loop=1&playlist=RuiklpUQ-p4" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },
  "r22":          { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r15'" src="https://canvas.tubitv.com/opts/dxr2cPQCgyOryw==/9fea4d40-4455-42ad-951b-fd39543e97bc/CIAPELgIOgUxLjEuMg==" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r16'" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/hannibal-apertif.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r17'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/mads-mikkelsen-as-hannibal.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r18'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFkCM8rg4QDJMu71LIxqNeuU8WLVNwlv9IA&s" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r19'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/hannibal-mads-mikkelsen.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r20'" src="https://i.iplsc.com/-/000IKIOM7ORTURA5-C461-F4.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r21'" src="https://fr.web.img6.acsta.net/r_1280_720/pictures/14/04/15/14/40/088048.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides color">
        <img onclick="window.location.href='listOFseries1.html?film=r22'" src="https://img.goodfon.com/wallpaper/big/8/ac/hannibal-gannibal-serial-tv-7213.webp" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r23'" src="https://unaffiliatedcritic.com/wp-content/uploads/2015/06/Hannibal-Lecter-Mads-Mikkelsen-in-Antipasto.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r24'" src="https://sm.ign.com/ign_pl/screenshot/default/sehdv1qckuts8uz8y74h_ehth.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r25'" src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_89.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r26'" src="https://wallpapers.com/images/hd/hannibal-liquor-hw6431wu9ttofbeu.jpg"style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r27'" src="https://www.ecranlarge.com/content/uploads/2020/04/hannibal-photo-mads-mikkelsen-1174853-320x170.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://fdewsdc.sbs/embed/8q7hjoyea369"
    ,
    
   title: 'Hannibal 2013 season 1 epside 8', 
   
   kind: 'crime • drama • thriller • horror ',
   
   description: `Hannibal Lecter is a brilliant psychiatrist and a secret serial killer. He manipulates people, using his psychological expertise to control others. The story follows Will Graham, an FBI profiler, who works with Lecter to catch a killer, unaware that Hannibal is the one behind the crimes. As their relationship deepens, Will becomes entangled in Hannibal’s twisted games, not realizing the danger he's in until it's too late.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/RuiklpUQ-p4?autoplay=1&mute=1&loop=1&playlist=RuiklpUQ-p4" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },
  "r23":          { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r15'" src="https://canvas.tubitv.com/opts/dxr2cPQCgyOryw==/9fea4d40-4455-42ad-951b-fd39543e97bc/CIAPELgIOgUxLjEuMg==" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r16'" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/hannibal-apertif.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r17'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/mads-mikkelsen-as-hannibal.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r18'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFkCM8rg4QDJMu71LIxqNeuU8WLVNwlv9IA&s" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r19'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/hannibal-mads-mikkelsen.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r20'" src="https://i.iplsc.com/-/000IKIOM7ORTURA5-C461-F4.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r21'" src="https://fr.web.img6.acsta.net/r_1280_720/pictures/14/04/15/14/40/088048.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r22'" src="https://img.goodfon.com/wallpaper/big/8/ac/hannibal-gannibal-serial-tv-7213.webp" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides color">
        <img onclick="window.location.href='listOFseries1.html?film=r23'" src="https://unaffiliatedcritic.com/wp-content/uploads/2015/06/Hannibal-Lecter-Mads-Mikkelsen-in-Antipasto.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r24'" src="https://sm.ign.com/ign_pl/screenshot/default/sehdv1qckuts8uz8y74h_ehth.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r25'" src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_89.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r26'" src="https://wallpapers.com/images/hd/hannibal-liquor-hw6431wu9ttofbeu.jpg"style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r27'" src="https://www.ecranlarge.com/content/uploads/2020/04/hannibal-photo-mads-mikkelsen-1174853-320x170.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://fdewsdc.sbs/embed/pw5omcgkzryt"
    ,
    
   title: 'Hannibal 2013 season 1 epside 9', 
   
   kind: 'crime • drama • thriller • horror ',
   
   description: `Hannibal Lecter is a brilliant psychiatrist and a secret serial killer. He manipulates people, using his psychological expertise to control others. The story follows Will Graham, an FBI profiler, who works with Lecter to catch a killer, unaware that Hannibal is the one behind the crimes. As their relationship deepens, Will becomes entangled in Hannibal’s twisted games, not realizing the danger he's in until it's too late.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/RuiklpUQ-p4?autoplay=1&mute=1&loop=1&playlist=RuiklpUQ-p4" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },
  "r24":          { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r15'" src="https://canvas.tubitv.com/opts/dxr2cPQCgyOryw==/9fea4d40-4455-42ad-951b-fd39543e97bc/CIAPELgIOgUxLjEuMg==" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r16'" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/hannibal-apertif.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r17'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/mads-mikkelsen-as-hannibal.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r18'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFkCM8rg4QDJMu71LIxqNeuU8WLVNwlv9IA&s" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r19'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/hannibal-mads-mikkelsen.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r20'" src="https://i.iplsc.com/-/000IKIOM7ORTURA5-C461-F4.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r21'" src="https://fr.web.img6.acsta.net/r_1280_720/pictures/14/04/15/14/40/088048.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r22'" src="https://img.goodfon.com/wallpaper/big/8/ac/hannibal-gannibal-serial-tv-7213.webp" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r23'" src="https://unaffiliatedcritic.com/wp-content/uploads/2015/06/Hannibal-Lecter-Mads-Mikkelsen-in-Antipasto.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides color">
        <img onclick="window.location.href='listOFseries1.html?film=r24'" src="https://sm.ign.com/ign_pl/screenshot/default/sehdv1qckuts8uz8y74h_ehth.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r25'" src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_89.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r26'" src="https://wallpapers.com/images/hd/hannibal-liquor-hw6431wu9ttofbeu.jpg"style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r27'" src="https://www.ecranlarge.com/content/uploads/2020/04/hannibal-photo-mads-mikkelsen-1174853-320x170.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://fdewsdc.sbs/embed/j8m9mhcl9lex"
    ,
    
   title: 'Hannibal 2013 season 1 epside 10', 
   
   kind: 'crime • drama • thriller • horror ',
   
   description: `Hannibal Lecter is a brilliant psychiatrist and a secret serial killer. He manipulates people, using his psychological expertise to control others. The story follows Will Graham, an FBI profiler, who works with Lecter to catch a killer, unaware that Hannibal is the one behind the crimes. As their relationship deepens, Will becomes entangled in Hannibal’s twisted games, not realizing the danger he's in until it's too late.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/RuiklpUQ-p4?autoplay=1&mute=1&loop=1&playlist=RuiklpUQ-p4" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },
  "r25":          { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r15'" src="https://canvas.tubitv.com/opts/dxr2cPQCgyOryw==/9fea4d40-4455-42ad-951b-fd39543e97bc/CIAPELgIOgUxLjEuMg==" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r16'" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/hannibal-apertif.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r17'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/mads-mikkelsen-as-hannibal.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r18'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFkCM8rg4QDJMu71LIxqNeuU8WLVNwlv9IA&s" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r19'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/hannibal-mads-mikkelsen.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r20'" src="https://i.iplsc.com/-/000IKIOM7ORTURA5-C461-F4.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r21'" src="https://fr.web.img6.acsta.net/r_1280_720/pictures/14/04/15/14/40/088048.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r22'" src="https://img.goodfon.com/wallpaper/big/8/ac/hannibal-gannibal-serial-tv-7213.webp" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r23'" src="https://unaffiliatedcritic.com/wp-content/uploads/2015/06/Hannibal-Lecter-Mads-Mikkelsen-in-Antipasto.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r24'" src="https://sm.ign.com/ign_pl/screenshot/default/sehdv1qckuts8uz8y74h_ehth.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides color">
        <img onclick="window.location.href='listOFseries1.html?film=r25'" src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_89.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r26'" src="https://wallpapers.com/images/hd/hannibal-liquor-hw6431wu9ttofbeu.jpg"style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r27'" src="https://www.ecranlarge.com/content/uploads/2020/04/hannibal-photo-mads-mikkelsen-1174853-320x170.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://fdewsdc.sbs/embed/i4rttoo8ao15"
    ,
    
   title: 'Hannibal 2013 season 1 epside 11', 
   
   kind: 'crime • drama • thriller • horror ',
   
   description: `Hannibal Lecter is a brilliant psychiatrist and a secret serial killer. He manipulates people, using his psychological expertise to control others. The story follows Will Graham, an FBI profiler, who works with Lecter to catch a killer, unaware that Hannibal is the one behind the crimes. As their relationship deepens, Will becomes entangled in Hannibal’s twisted games, not realizing the danger he's in until it's too late.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/RuiklpUQ-p4?autoplay=1&mute=1&loop=1&playlist=RuiklpUQ-p4" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },
  "r26":          { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r15'" src="https://canvas.tubitv.com/opts/dxr2cPQCgyOryw==/9fea4d40-4455-42ad-951b-fd39543e97bc/CIAPELgIOgUxLjEuMg==" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r16'" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/hannibal-apertif.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r17'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/mads-mikkelsen-as-hannibal.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r18'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFkCM8rg4QDJMu71LIxqNeuU8WLVNwlv9IA&s" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r19'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/hannibal-mads-mikkelsen.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r20'" src="https://i.iplsc.com/-/000IKIOM7ORTURA5-C461-F4.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r21'" src="https://fr.web.img6.acsta.net/r_1280_720/pictures/14/04/15/14/40/088048.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r22'" src="https://img.goodfon.com/wallpaper/big/8/ac/hannibal-gannibal-serial-tv-7213.webp" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r23'" src="https://unaffiliatedcritic.com/wp-content/uploads/2015/06/Hannibal-Lecter-Mads-Mikkelsen-in-Antipasto.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r24'" src="https://sm.ign.com/ign_pl/screenshot/default/sehdv1qckuts8uz8y74h_ehth.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r25'" src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_89.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides color">
        <img onclick="window.location.href='listOFseries1.html?film=r26'" src="https://wallpapers.com/images/hd/hannibal-liquor-hw6431wu9ttofbeu.jpg"style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r27'" src="https://www.ecranlarge.com/content/uploads/2020/04/hannibal-photo-mads-mikkelsen-1174853-320x170.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://fdewsdc.sbs/embed/q1h4emcj2gtd"
    ,
    
   title: 'Hannibal 2013 season 1 epside 12', 
   
   kind: 'crime • drama • thriller • horror ',
   
   description: `Hannibal Lecter is a brilliant psychiatrist and a secret serial killer. He manipulates people, using his psychological expertise to control others. The story follows Will Graham, an FBI profiler, who works with Lecter to catch a killer, unaware that Hannibal is the one behind the crimes. As their relationship deepens, Will becomes entangled in Hannibal’s twisted games, not realizing the danger he's in until it's too late.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/RuiklpUQ-p4?autoplay=1&mute=1&loop=1&playlist=RuiklpUQ-p4" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },
  "r27":          { 
    
  ses: `
    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r15'" src="https://canvas.tubitv.com/opts/dxr2cPQCgyOryw==/9fea4d40-4455-42ad-951b-fd39543e97bc/CIAPELgIOgUxLjEuMg==" style="width: 450px; height: 250px;" id="watch_film">
      </div>
      <p class="epside_num">epside 1</p>
    </div>
  
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r16'" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/hannibal-apertif.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 2</p>
    </div>
    
    
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r17'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/mads-mikkelsen-as-hannibal.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 3</p>
    </div> 
    
    <br>
    <br>
    <br>
    <br>
    
  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r18'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFkCM8rg4QDJMu71LIxqNeuU8WLVNwlv9IA&s" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 4</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r19'" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/hannibal-mads-mikkelsen.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 5</p>
  </div>
  

  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r20'" src="https://i.iplsc.com/-/000IKIOM7ORTURA5-C461-F4.jpg"style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 6</p>
  </div>


  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
    <div class="all_epsides ">
      <img onclick="window.location.href='listOFseries1.html?film=r21'" src="https://fr.web.img6.acsta.net/r_1280_720/pictures/14/04/15/14/40/088048.jpg" style="width: 450px; height: 250px;">
    </div>
    <p class="epside_num">epside 7</p>
  </div>
  
  <br>
  <br>
  <br>
  <br>

  <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r22'" src="https://img.goodfon.com/wallpaper/big/8/ac/hannibal-gannibal-serial-tv-7213.webp" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 8</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r23'" src="https://unaffiliatedcritic.com/wp-content/uploads/2015/06/Hannibal-Lecter-Mads-Mikkelsen-in-Antipasto.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 9</p>
    </div>
    
    
    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r24'" src="https://sm.ign.com/ign_pl/screenshot/default/sehdv1qckuts8uz8y74h_ehth.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 10</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r25'" src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_89.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 11</p>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides ">
        <img onclick="window.location.href='listOFseries1.html?film=r26'" src="https://wallpapers.com/images/hd/hannibal-liquor-hw6431wu9ttofbeu.jpg"style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 12</p>
    </div>


    <br>
    <br>
    <br>
    <br>

    <div class="alls_epsides">
      <div class="all_epsides color">
        <img onclick="window.location.href='listOFseries1.html?film=r27'" src="https://www.ecranlarge.com/content/uploads/2020/04/hannibal-photo-mads-mikkelsen-1174853-320x170.jpg" style="width: 450px; height: 250px;">
      </div>
      <p class="epside_num">epside 13</p>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    
    `
    ,
    
  list: `<button class="list_of_button"><i class="fa-solid fa-chevron-down " id='chevrons'></i><i class="fa-solid fa-chevron-up hide" id='chevronss'></i></button>`,

    
    wa:"https://fdewsdc.sbs/embed/ynw05ax6xmz6"
    ,
    
   title: 'Hannibal 2013 season 1 epside 13 End', 
   
   kind: 'crime • drama • thriller • horror ',
   
   description: `Hannibal Lecter is a brilliant psychiatrist and a secret serial killer. He manipulates people, using his psychological expertise to control others. The story follows Will Graham, an FBI profiler, who works with Lecter to catch a killer, unaware that Hannibal is the one behind the crimes. As their relationship deepens, Will becomes entangled in Hannibal’s twisted games, not realizing the danger he's in until it's too late.

`
   ,
   
   trailer: `<br><br><br><div class="video_of_movie">
   <iframe 
       width="900" 
       height="500" 
       style="border-radius: 40px;"
       src="https://www.youtube.com/embed/RuiklpUQ-p4?autoplay=1&mute=1&loop=1&playlist=RuiklpUQ-p4" 
       frameborder="0" 
       allow="autoplay; encrypted-media" 
       allowfullscreen>
   </iframe>
   
   </div>
   `
    },









// the wake of movies 1



// end section of series

}

  const filmId = getFilmFromUrl();


  if (films[filmId]) {
  document.getElementById('film-title').textContent = films[filmId].title;
  document.getElementById('film-description').textContent = films[filmId].description;
    document.getElementById('film-kind').textContent = films[filmId].kind;

  document.getElementById('film-trailer').innerHTML = films[filmId].trailer;
  
  document.getElementById('button_of_list').innerHTML = films[filmId].list;
  

  document.getElementById('show_ses').innerHTML = films[filmId].ses;


  } else {
  document.getElementById('film-title').textContent = "Film not found";
  document.getElementById('film-description').textContent = "";
 }


let wa = document.getElementById('watch-film');
wa.addEventListener('click', () => {
  const filmUrl = films[filmId].wa; 
  window.location.href = filmUrl;
});

  function onflix(page){
    window.location.href = page
  }
  

  
  let chevrons = document.getElementById('chevrons')
  
    let chevronss = document.getElementById('chevronss')

  
  let list = document.getElementById('show_l')
  
  chevrons.addEventListener('click', () => {
    list.classList.remove('hide')
  chevrons.classList.add('hide')
  chevronss.classList.remove('hide')
  })
  
  chevronss.addEventListener('click', () => {
    list.classList.add('hide')
    chevrons.classList.remove('hide')
    chevronss.classList.add('hide')
  })
  
  
  
  
  
  let chevrons1 = document.getElementById('chevrons1')
  
    let chevronss1 = document.getElementById('chevronss1')

  
  let list1 = document.getElementById('show_l1')
  
  chevrons1.addEventListener('click', () => {
    list1.classList.remove('hide')
  chevrons1.classList.add('hide')
  chevronss1.classList.remove('hide')
  })
  
  chevronss1.addEventListener('click', () => {
    list1.classList.add('hide')
    chevrons1.classList.remove('hide')
    chevronss1.classList.add('hide')
  })
