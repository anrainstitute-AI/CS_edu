/* =========================================================================
   data.js — Sample content for the CS learning platform
   In a real product this would come from an API / database. Here it's a
   static JS module so the whole site runs with zero backend, no build step.
   ========================================================================= */

/* ---- Featured / catalogue courses -------------------------------------- */
const COURSES = [
  {
    id: "dsa-core",
    title: "Data Structures Essentials",
    ext: ".cpp",
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
    topic: "Computer Networks",
    level: "Beginner",
    duration: "6h 00m",
    lessons: 20,
    rating: 4.5,
    students: 9650,
    blurb: "OSI & TCP/IP models, routing, sockets, HTTP/DNS — the plumbing of the internet, demystified.",
    color: "amber"
  },
  {
    id: "ai-foundations",
    title: "Artificial Intelligence Foundations",
    ext: ".ai",
    topic: "Artificial Intelligence",
    level: "Intermediate",
    duration: "9h 30m",
    lessons: 28,
    rating: 4.8,
    students: 16940,
    blurb: "Search, knowledge representation, reasoning under uncertainty, and intelligent agents.",
    color: "violet"
  },
  {
    id: "ml-practical",
    title: "Machine Learning in Practice",
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
    topic: "AI Tools",
    level: "Beginner",
    duration: "4h 10m",
    lessons: 15,
    rating: 4.7,
    students: 13280,
    blurb: "Prompting, LLM APIs, vector search, and using AI copilots to ship code faster.",
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

/* ---- Blog posts ----------------------------------------------------------- */
const BLOG_POSTS = [
  {
    id: "big-o-intuition",
    title: "Big-O Notation: An Intuition-First Guide",
    topic: "Algorithms",
    date: "2026-06-12",
    readTime: "7 min",
    excerpt: "Forget memorizing the cheat sheet. Here's how to actually feel why O(n log n) beats O(n²) before you ever do the math.",
    cover: "amber"
  },
  {
    id: "b-trees-explained",
    title: "Why Databases Love B-Trees",
    topic: "DBMS",
    date: "2026-05-28",
    readTime: "9 min",
    excerpt: "Indexes make queries fast — but why a B-tree and not a binary search tree? We dig into branching factor and disk reads.",
    cover: "violet"
  },
  {
    id: "deadlocks-demystified",
    title: "Deadlocks, Demystified",
    topic: "Operating System",
    date: "2026-05-09",
    readTime: "6 min",
    excerpt: "Four conditions, one circular wait. A walk-through of how deadlocks form and the strategies OS schedulers use to dodge them.",
    cover: "mint"
  },
  {
    id: "tcp-three-way-handshake",
    title: "The TCP Handshake, Packet by Packet",
    topic: "Computer Networks",
    date: "2026-04-22",
    readTime: "5 min",
    excerpt: "SYN, SYN-ACK, ACK — three packets that quietly start every reliable connection on the internet.",
    cover: "amber"
  },
  {
    id: "gradient-descent-by-hand",
    title: "Gradient Descent, Computed by Hand",
    topic: "Machine Learning",
    date: "2026-04-03",
    readTime: "10 min",
    excerpt: "Before you call .fit(), trace one full update step yourself. It changes how you debug training curves forever.",
    cover: "violet"
  },
  {
    id: "prompting-as-engineering",
    title: "Prompting Is an Engineering Discipline Now",
    topic: "AI Tools",
    date: "2026-03-19",
    readTime: "6 min",
    excerpt: "Treat prompts like code: version them, test them, and review them. Here's a lightweight workflow that scales.",
    cover: "mint"
  }
];
