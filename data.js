/* =========================================================================
   data.js — Sample content for the CS learning platform
   In a real product this would come from an API / database. Here it's a
   static JS module so the whole site runs with zero backend, no build step.
   ========================================================================= */

/* ---- Featured / catalogue courses -------------------------------------- */
const COURSES = [
  {
    id: "ai-foundations",
    title: "Artificial Intelligence Foundations",
    icon: "robot",
    ext: ".ai",
    topic: "Artificial Intelligence",
    //level: "Intermediate",
    // duration: "9h 30m",
    // lessons: 28,
    
    rating: 4.8,
    students: 16940,
    blurb: "Search, knowledge representation, reasoning under uncertainty, and intelligent agents.",
    color: "violet"
  },
  {
    id: "ml-practical",
    title: "Machine Learning in Practice",
    icon: "graph-up",
    ext: ".ipynb",
    topic: "Machine Learning",
    level: "Advanced",
    duration: "10h 50m",
    lessons: 34,
    rating: 4.9,
    students: 20110,
    blurb: "Regression to neural nets — train, evaluate, and ship real models with Python & scikit-learn.",
    color: "mint"
  },
  {
    id: "ai-tools",
    title: "Modern AI Tools & Copilots",
    ext: ".json",
    icon: "tools",
    topic: "AI Tools",
    level: "Beginner",
    duration: "4h 10m",
    lessons: 15,
    rating: 4.7,
    students: 13280,
    blurb: "Prompting, LLM APIs, vector search, and using AI copilots to ship code faster.",
    color: "amber"
  },
  {
    id: "dsa-core",
    title: "Data Structures Essentials",
    ext: ".cpp",
    icon: "diagram-3",
    topic: "Data Structures",
    level: "Beginner",
    duration: "6h 20m",
    lessons: 24,
    rating: 4.8,
    students: 18450,
    blurb: "Arrays, linked lists, stacks, queues, trees and graphs — built from scratch, not just imported.",
    color: "mint"
  },
  {
    id: "algo-master",
    title: "Algorithms & Complexity",
    ext: ".py",
    icon: "cpu",
    topic: "Algorithms",
    level: "Intermediate",
    duration: "8h 05m",
    lessons: 31,
    rating: 4.9,
    students: 22310,
    blurb: "Sorting, searching, greedy, divide & conquer, dynamic programming, and how to reason about Big-O.",
    color: "amber"
  },
  {
    id: "dbms-fund",
    title: "Database Management Systems",
    ext: ".sql",
    icon: "database",
    topic: "DBMS",
    level: "Beginner",
    duration: "5h 40m",
    lessons: 19,
    rating: 4.6,
    students: 14020,
    blurb: "Relational modelling, normalization, transactions, indexing, and writing real SQL queries.",
    color: "violet"
  },
  {
    id: "os-internals",
    title: "Operating Systems Internals",
    ext: ".c",
    icon: "terminal",
    topic: "Operating System",
    level: "Intermediate",
    duration: "7h 15m",
    lessons: 22,
    rating: 4.7,
    students: 11870,
    blurb: "Processes, threads, scheduling, memory management, deadlocks — how your OS really works.",
    color: "mint"
  },
  {
    id: "net-basics",
    title: "Computer Networks 101",
    ext: ".net",
    icon: "hdd-network",
    topic: "Computer Networks",
    level: "Beginner",
    duration: "6h 00m",
    lessons: 20,
    rating: 4.5,
    students: 9650,
    blurb: "OSI & TCP/IP models, routing, sockets, HTTP/DNS — the plumbing of the internet, demystified.",
    color: "amber"
  }
];

/* ---- Topic directory (the 8 required subjects) -------------------------- */
const TOPICS = [
  { id: "data-structures", name: "Data Structures", ext: ".cpp", icon: "diagram-3", desc: "Trees, graphs, heaps & the shapes your data takes." },
  { id: "algorithms", name: "Algorithms", ext: ".py", icon: "cpu", desc: "Search, sort, and solve — efficiently, provably." },
  { id: "dbms", name: "Database Management System", ext: ".sql", icon: "database", desc: "Model, store and query data that has to be right." },
  { id: "os", name: "Operating System", ext: ".c", icon: "terminal", desc: "Processes, memory, and the kernel beneath everything." },
  { id: "networks", name: "Computer Networks", ext: ".net", icon: "hdd-network", desc: "How packets find their way across the world." },
  { id: "ai", name: "Artificial Intelligence", ext: ".ai", icon: "robot", desc: "Agents, search and reasoning that mimic cognition." },
  { id: "ml", name: "Machine Learning", ext: ".ipynb", icon: "graph-up", desc: "Models that learn patterns instead of being told rules." },
  { id: "ai-tools", name: "AI Tools", ext: ".json", icon: "tools", desc: "Copilots, LLM APIs and the modern dev toolbelt." }
];

/* ---- FAQ entries --------------------------------------------------------- */
const FAQS = [
  {
    q: "Do I need prior programming experience to start?",
    a: "No. Most learners begin with Data Structures Essentials, which assumes only that you can write a basic for-loop. Every course states its prerequisites up front."
  },
  {
    q: "Are the courses self-paced?",
    a: "Yes — every lesson, quiz and project stays unlocked once you start. Your dashboard saves progress automatically so you can pick up exactly where you left off."
  },
  {
    q: "Do I get a certificate on completion?",
    a: "Each course awards a verifiable completion certificate once you finish all lessons and pass the final assessment with at least 70%."
  },
  {
    q: "Can I switch between dark and light mode?",
    a: "Yes — use the sun/moon toggle in the navigation bar. Your preference is remembered the next time you visit."
  },
  {
    q: "How is this different from generic coding bootcamps?",
    a: "We focus on CS fundamentals — the theory behind the syntax — so the knowledge transfers across languages, frameworks, and the technical interviews that test for it."
  }
];



//----- Testimonials ------
const TESTIMONIALS = [

{
   name: "Pushpa Rajput",
   role: "AI, Machine Learning, Data Analyst",
   image: "images/students/pushpa-rajput.jpg",
   rating: 5,
   review: "Ma'am teaches exceptionally well and focuses on making concepts truly understandable rather than simply completing the syllabus. She is supportive, kind, and dedicated to student success. The institute offers quality education, affordable courses, and an excellent learning experience. I highly recommend ANRA Institute."
},

{
    name: "Bhumika Trivedi",
    role: "Advance Excel",
    image: "images/students/bhumika-trivedi.jpg",
    rating: 5,
    review: "ANRA Institute provides an exceptional learning experience with a strong focus on practical knowledge. The curriculum is modern, well-structured, and delivered effectively. The supportive guidance, healthy learning environment, and excellent facilities make it a great place to learn and grow."
},

{
    name: "Rudra",
    role: "AI, Data Science, SQL",
    image: "images/students/rudra.jpg",
    rating: 5,
    review: "ANRA Institute provides excellent guidance with a well-structured curriculum and highly qualified faculty. The teachers explain concepts clearly, adapt to each student's learning pace, and create an engaging learning experience."
},

{
    name: "Shreya",
    role: "Python, Machine Learning & SQL Student",
    image: "images/students/shreya.jpg",
    rating: 5,
    review: "Mansi Ma'am is an outstanding instructor who makes complex concepts easy to understand. Her engaging teaching style, patience, and dedication helped me grow in Python, Machine Learning, SQL, and DBMS. She genuinely cares about her students' success and goes above and beyond to help them achieve their goals."
},

{
    name: "Virendra",
    role: "Full Stack Developer",
    image: "images/students/virendra.jpg",
    rating: 4,
    review: "I've been learning at ANRA Institute for the past two months, and it has been a great experience. The institute provides an excellent environment for learning programming with clear guidance and practical understanding."
},

{
    name: "Tanzy D",
    role: "Parent",
    image: "images/students/tanzy-d.jpg",
    rating: 5,
    review: "My daughter is a student at ANRA Institute and has become much more confident in computer studies. Her academic performance improved significantly, scoring above 95%. Thank you to Mansi Ma'am for the excellent guidance and support."
}

];
