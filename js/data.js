/* =====================================================================
   📄 DATA FILE — শুধু এই ফাইল edit করলেই পুরো সাইট update হবে
   ---------------------------------------------------------------------
   ✅ এখানে পরিবর্তন করতে পারো: লেখা, লিংক, ছবির path, project, demo, quote
   🚫 হাত দিও না: const D={ ... } এর structure, comma (,) ও quote ("") মুছো না
   ➕ নতুন item দিতে: আগের item copy করে নিচে paste করো, শেষে comma (,) দিও
   🖼️ ছবি/PDF: images/ folder এ রাখো, তারপর path লেখো (যেমন "images/me.jpg")
   ===================================================================== */
const D={
  name:"Riyad",   // ✅ নাম বদলালে navbar/footer এর <Riyad/> লোগোও বদলাবে
  color:"sea",          // default site color: sea | blue | purple | sunset | rose (visitor nijeo 🎨 diye bodlate pare)
  role:["SQA Engineer","Manual & Automation Tester","API Testing Enthusiast"],
  tagline:"Find Bugs Before Users Do.",
  email:"shadothriyad@gmail.com",

  /* 📬 Contact form: "Send message" চাপলে mail যাবে Formspree এ (তোমার Gmail এ আসবে) */
  formspree:"https://formspree.io/f/mljdawre",

  /* 📊 Suggestion গুলো Google Sheet এ যাবে — এখানে Google Apps Script এর Web App URL বসাও
     (কীভাবে বানাবে: google-sheet-setup.md ফাইলে ধাপে ধাপে লেখা আছে)
     ফাঁকা "" থাকলে suggestion গুলো আপাতত Formspree এ (mail এ) যাবে, হারাবে না। */
  sheetUrl:"",
  photo:"images/riyad.png",            // ex: "images/me.jpg"
  story:[
  {h:"Journey Started",p:"Game On! 🎮 Journey Started. I used to just break apps out of curiosity—now I get paid (and certified) to do it professionally as an SQA Engineer! From my early tech studies to working on enterprise projects like MyGov, the learning never stops. Ready to turn potential crashes into butter-smooth user journeys. Let’s do this!",img:"images/riyad_thumps.jpg",e:"🌱"},
    {h:"Introduce with QA",p:"How did I end up in SQA? Honestly, it started because I always liked breaking things to see how they tick! While studying CSE, I realized that writing code is fun, but making sure it doesn't crash on a real user is where the real challenge is. That curiosity pulled me into QA, led me to hands-on projects like MyGov, and now here I am—turning potential app disasters into smooth, bug-free experiences using manual smarts and Playwright automation.",img:"images/5754.jpg",e:"🐞"},
    {h:"Nowadays & What next",p:`Nowadays: Officially earning my stripes as an SQA Engineer. Mixing my manual testing mindset with Playwright code, making sure developers code doesn't explode when real users touch it, and enjoying every bit of the bug-hunting process. What Next: Mastering advanced automation frameworks, exploring performance testing, and collaborating with awesome teams to build next-gen software. The adventure continues! 💻🔥`,img:"images/about3.jpeg",e:"🚀"}








    
  ], // ✅ img: "images/x.jpg" দিলে ছবি আসবে
  // Daily quote: din onujayi auto change hoy. Notun quote just ekta line add koro.
  quoteOfDay:"",   // ekhane likhle ajker jonno oi quote-i thakbe (faka rakhle auto)
  quotes:[
    ["Quality is not an act, it is a habit.","Aristotle"],
    ["Testing shows the presence, not the absence of bugs.","Dijkstra"],
    ["The bitterest pill: a bug the user finds first.","QA Proverb"],
    ["Small steps every day lead to big results.",""],
    ["Do it right the first time, then test it twice.",""],
    ["A good tester thinks like a user and breaks like a hacker.",""],
    ["Consistency beats intensity.",""],
    ["Test early, test often, test smart.",""],
    ["Every bug is a lesson in disguise.",""],
  ["Automation is a tool, not a replacement for thinking.",""],
    ["The best code is the code that never runs into a bug.",""],
    ["A tester's job is to find the bugs before the users do.",""],
    ["Quality is never an accident; it is always the result of intelligent effort.","John Ruskin"],
    ["A good tester is like a detective, always looking for clues.",""],
    ["Testing is not about finding bugs, it's about preventing them.",""],
    ["If try maybe you will succeed, if you don't try you will never know.",""],
    ["The best way to predict the future is to create it.",""],
    ["Pera Nai , Chill 😉!",""],
    ["অবস্থা বুঝে ব্যবস্থা নাও Broh!", "Riyad"],
    ["Let's make world bug free 🌎", "Riyad"],
    ["Vlo hou bojhla 😎", "Riyad"],
    ["Like Messi finding a gap in a 10-man defense, a great QA engineer finds the one edge case that destroys the entire system.", "Riyad"],
    ["Leoooooooooooooooo Messsssssssssssssssssi 🐐", "Riyad"],
    













  ],
  /* 🎮 Demo projects
     e = emoji, t = নাম, d = ছোট বর্ণনা, u = live link, b = ছোট badge (ঐচ্ছিক)
     hide:true দিলে ওই demo সাইটে লুকিয়ে যাবে; দেখাতে চাইলে hide:false বা লাইনটা মুছে দাও */
  demos:[
    {e:"🌾",t:"Crop Recommendation System",d:"Machine Learning based crop suggestion",u:"https://crop-group7.streamlit.app/",b:"Thesis Project"},
    {e:"🎉",t:"Birthday Wish",d:"A little surprise page for birthdays",u:"https://shadot-riyad.github.io/BirthDay-wish-Rid7/",hide:false},   // ← মাঝে মাঝে লুকাতে hide:true করো
    {e:"🌦️",t:"Weather App",d:"Live weather by city",u:"https://shadot-riyad.github.io/Weather/"},
    {e:"🎂",t:"Age Calculator",d:"Exact age from date of birth",u:"https://shadot-riyad.github.io/Age-calculator/"},
    {e:"🕒",t:"Digital Clock",d:"Simple live digital clock",u:"https://shadot-riyad.github.io/Digital-Clock/"},
    {e:"💼",t:"My Other Portfolio",d:"Another portfolio I built earlier",u:"https://shadot-riyad.github.io/Portfolio-Riyad/index.html"},
    {e:"🧪",t:"SQA Portfolio (Earlier)",d:"Earlier version of my SQA portfolio",u:"https://shadot-riyad.github.io/SQA_riyad/"}
  ],
  certs:[
    {t:"ISTQB Foundation Level",o:"ISTQB",d:"2025",img:"",link:""},
    {t:"Selenium WebDriver Course",o:"Udemy",d:"2025",img:"",link:""},
    {t:"API Testing with Postman",o:"Postman Academy",d:"2024",img:"",link:""}
  ],
  cv:"",               // CV PDF link thakle direct download dite parben
  bio:"Hi, I’m Riyad — a curious learner who enjoys building things, exploring technology, and figuring out how things work.",

  // Icon name diye auto ashe: LinkedIn, GitHub, Facebook, X/Twitter, YouTube, Instagram, Telegram, WhatsApp, Email (onno name dile 🌐 icon)
  socials:[["LinkedIn","https://bd.linkedin.com/in/shadot-riyad7"],["GitHub","https://github.com/shadot-Riyad"],["Facebook","https://facebook.com/Shadot.riyad"],["Instagram","https://instagram.com/shadot_riyad"]],
  stats:[["2+","Years Learning"],["10+","Projects Tested"],["100+","Test Cases"],["50+","Bugs Reported"]],
  skills:[["Manual Testing",98],["Test Case Design",88],["Playwright / Selenium",75],["API Testing (Postman)",80],["JIRA / Bug Tracking",85],["SQL Basics",80]],
  /* =====================================================================
     💼 Experience / 📚 Course / 🎓 Education — সবগুলো card এ ডানপাশে ছবির জায়গা থাকবে
     প্রতিটা item এর ফিল্ড:
       t   = title            o = প্রতিষ্ঠানের নাম     d = সময়      p = বর্ণনা
       img = ছবির path (যেমন "images/walton.jpg") — না দিলে নিচের emoji (e) দেখাবে, দিলে ছবি দেখাবে
       link= ছবিতে ক্লিক করলে যে ওয়েবসাইটে যাবে (ঐচ্ছিক)
       e   = ছবি না থাকলে যে emoji দেখাবে (ঐচ্ছিক)      nopic:true = এই card এ ছবির জায়গা লুকাবে
     ➕ নতুন কিছু যোগ করতে: যেকোনো একটা {...}, লাইন copy করে নিচে paste করো, শেষে comma (,) দিও
     ===================================================================== */
 exp:[
    {t:"Officer",o:"Walton Hi-Tech Industries PLC",d:"2026 - Present",p:"Customer support and testing.",img:"images/waltonpic.jpg",link:"https://waltonbd.com",e:"🏭"},
    {t:"SQA & Support Engineer",o:"UY Systems Ltd.",d:"2024 - 2026",p:"Manual testing and support.",img:"images/uysys1.jpg",link:"https://www.uysys.com/uy-family/",e:"💼"},
  ],
  course:[
    {t:"SQA: Manual and Automated Testing",o:"XYZ",d:"2026 - Continuing",p:"Focus: AI Driven Software Quality Assurance",img:"",link:"",e:"📚"},
  ],
  edu:[
    {t:"B.Sc in Computer Science & Engineering",o:"European University Of Bangladesh",d:"2023 - 2026",p:"Focus: Software Quality Assurance",img:"images/versity.jpg",link:"https://eub.edu.bd",e:"🎓"},
    {t:"Diploma in Computer Engineering",o:"Aptouch Polytechnic Institute,Dinajpur",d:"2017 - 2021",p:"Focus: Software Quality Development & Networking",img:"images/api.jpeg",link:"https://api.edu.bd/",e:"🎓"},
  ],
  /* =====================================================================
     ✅ About পেজের "What next" এর নিচের To-Do List (animated)
       t    = কাজের নাম
       s    = অবস্থা: "done" (শেষ ✓) | "doing" (চলছে) | "todo" (পরে করব)
       p    = শুধু "doing" এর জন্য অগ্রগতি % (০-১০০), ঐচ্ছিক
       note = ছোট বিবরণ (ঐচ্ছিক)
     ➕ নতুন কাজ: একটা লাইন copy-paste করো। কাজ শেষ হলে s:"done" করো — progress bar নিজেই বদলাবে।
     (নিচের গুলো নমুনা — নিজের আসল কাজ দিয়ে বদলাও)
     ===================================================================== */
  todo:[
    {t:"Launch my SQA portfolio website",s:"done",note:"Live with projects, demos and contact form"},
    {t:"Complete SQA: Manual & Automated Testing course",s:"doing",p:60,note:"AI-driven software quality assurance"},
    {t:"Practice Playwright automation on real projects",s:"doing",p:40},
    {t:"Explore performance testing",s:"todo"},
    {t:"Build an API automation framework",s:"todo"},
    {t:"Add real certificates to this site",s:"todo"}
  ],

  /* =====================================================================
     📇 Contact পেজের info card
       photo = ছোট ছবির path (ফাঁকা "" দিলে ছবি লুকাবে, বাকি layout নিজে ঠিক হয়ে যাবে)
       items = [emoji, লেবেল, মান, লিংক(ঐচ্ছিক)] — মান ফাঁকা "" হলে ওই সারি দেখাবে না
               (@ থাকলে email লিংক, নম্বর হলে ফোন লিংক নিজে হয়ে যায়)
     ➕ নতুন সারি: যেমন ["🕒","Available","Sun - Thu, 10am - 6pm"]
     ===================================================================== */
  contact:{
       //photo:"images/riyad.png",
    photo:"images/riyad_contact.JPG",
 
    items:[
      ["📍","Address","Mirpur,Dhaka, Bangladesh"],
      ["📞","Phone","+8801706877681"],                              // ← এখানে ফোন নম্বর লেখো, যেমন "+880 1XXX-XXXXXX"
      ["✉️","Email","shadothriyad@gmail.com"]
    ]
  },

  /* =====================================================================
     ⚽ About পেজের "Beyond Testing" কার্ড (passion / hobby) — ক্লিক করলে Fan Zone পেজে (#football) যাবে
       logo    = animated লোগো emoji (যেমন "⚽")
       logoImg = emoji এর বদলে ছবি দিতে চাইলে path (যেমন "images/ball.png"), না চাইলে ফাঁকা ""
       hobbies = [emoji, নাম] — নিজের hobby দিয়ে বদলাও, নতুন যোগ করা যাবে
     (নিচের hobby গুলো নমুনা — নিজের আসল গুলো বসাও)
     ===================================================================== */
  passion:{
    logo:"⚽", logoImg:"",
    title:"Beyond Testing: My Passions",
    text:"Away from the keyboard, you’ll find me lost in football. Messi’s magic is my favourite kind of quality assurance. Tap here to enter my Fan Zone!",
    hobbies:[["⚽","Football"],["🐐","Messi fan"],["💻","Exploring tech"],["📚","Always learning"]]
  },

  /* =====================================================================
     🏟️ Fan Zone পেজ (#football) — এখানকার সব লেখা/সংখ্যা edit করা যাবে
       photo  = তোমার নিজের football এর ছবি (ঐচ্ছিক, ফাঁকা "" হলে লুকাবে)। Messi এর official ছবি দিও না (copyright)
       stats  = [সংখ্যা, শেষে যা বসবে(যেমন "+"), লেবেল] — সংখ্যা গুনে গুনে বাড়বে
       quotes = QA x Football নিজের লেখা quote (কারো নামে বানানো quote দিও না)
       statsNote = stats এর নিচের ছোট নোট — তথ্য বদলালে তারিখও বদলাও
     ===================================================================== */
  football:{
    player:"MESSI", number:10, photo:"",
    tagline:"Football is my other passion, and Messi is the reason I fell in love with it.",
    intro:"I test software during the week and watch football whenever I can. Both are about details, teamwork and never giving up until the final whistle.",
    stats:[[8,"","Ballon d’Or awards"],[1,"","FIFA World Cup (2022)"],[2,"","Copa América titles (2021, 2024)"],[900,"+","Career goals"]],
    statsNote:"Figures as of Sep 2026 (Britannica, ESPN). Update them anytime.",
    quotes:[
      "A tester is the goalkeeper of the release: the last line between a bug and the user.",
      "One great pass can beat ten players; one great test case can beat ten bugs.",
      "Skill wins matches, but discipline and teamwork win tournaments. Same for software.",
      "Every match starts 0-0. Every release should start with zero known bugs.",
      "The best game plan still needs adapting on the pitch, just like exploratory testing.",
      "Small touches, repeated daily, become magic moments."
    ]
  },

  /* 🧪 QA Projects — এখানকার drive/github লিংক আপাতত placeholder, নিজের আসল লিংক বসাও */
  projects:[
    {title:"E-Commerce Web Testing",drive:"https://drive.google.com/",github:"https://github.com/",shots:[["images/s1.png","Login page test"],["images/s2.png","Bug in cart"]],desc:"Cart, checkout, payment flow er full QA cycle.",tags:["Manual","Selenium","JIRA"],
     plan:"Scope: Login, Product Search, Cart, Checkout\nApproach: Manual + Automated smoke\nEnv: Chrome, Firefox, Android\nEntry: Build deployed on QA\nExit: 0 critical/high open bugs\nRisks: Payment gateway sandbox downtime",
     cases:[["TC-01","Valid login","Pass"],["TC-02","Invalid password","Pass"],["TC-03","Add to cart","Pass"],["TC-04","Checkout with expired card","Fail"]],
     bugs:[["BUG-101","Cart total wrong after coupon","High","Open"],["BUG-102","Typo on checkout button","Low","Fixed"]],
     auto:`describe('Login',()=>{\n  it('logs in',()=>{\n    cy.visit('/login')\n    cy.get('#email').type('user@test.com')\n    cy.get('#pass').type('123456')\n    cy.get('button[type=submit]').click()\n    cy.url().should('include','/dashboard')\n  })\n})`,
     api:`GET /api/products  -> 200\nPOST /api/login\nBody: {"email":"user@test.com","password":"123456"}\nTests:\n pm.test("Status 200",()=>pm.response.to.have.status(200))\n pm.test("Has token",()=>pm.expect(pm.response.json().token).to.exist)`},
    {title:"Mobile Banking App QA",drive:"",github:"https://github.com/",shots:[["","Transfer screen"]],desc:"Functional + security + usability testing.",tags:["Mobile","API","Postman"],
     plan:"Scope: Login, Transfer, Statement\nApproach: Exploratory + API\nDevices: 3 Android, 1 iOS",
     cases:[["TC-11","Transfer valid amount","Pass"],["TC-12","Transfer > balance","Pass"]],
     bugs:[["BUG-201","OTP resend not throttled","Medium","Open"]],
     auto:"// Appium script ekhane add korun",api:"POST /transfer -> 200\nPOST /transfer (low balance) -> 400"}
  ]
};
