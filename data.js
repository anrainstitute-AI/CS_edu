/* =========================================================================
   data.js — Sample content for the CS learning platform
   In a real product this would come from an API / database. Here it's a
   static JS module so the whole site runs with zero backend, no build step.
   ========================================================================= */

/* ---- Featured / catalogue courses -------------------------------------- */
const COURSES = [
  {
  id: "data-science-ai-professional",
  title: "Data Science & Artificial Intelligence Professional",
  icon: "robot",
  ext: ".dsai",
  topic: "Data Science & AI",
  duration: "260h",
  rating: 4.9,
  color: "indigo",

  blurb: "Master Data Analytics, Machine Learning, Deep Learning, NLP, and Large Language Models through hands-on projects and industry-oriented assignments.",

  description:
    "This comprehensive 260-hour program is designed to transform beginners into industry-ready Data Science and AI professionals. Students will learn Python programming, SQL, Data Analysis, Data Visualization, Machine Learning, Deep Learning, Natural Language Processing (NLP), and Large Language Models (LLMs). The course emphasizes practical learning through real-world projects, case studies, assignments, and portfolio development.",

  learn: [
    "Write efficient Python programs for data analysis",
    "Query and manage databases using SQL",
    "Analyze and visualize data using Power BI and Tableau",
    "Perform data cleaning and exploratory data analysis",
    "Build predictive Machine Learning models",
    "Develop Deep Learning applications using Neural Networks",
    "Process and analyze text data using NLP",
    "Work with Large Language Models (LLMs)",
    "Create AI-powered applications and chatbots",
    "Develop industry-ready projects and portfolios"
  ],

  curriculum: [

    {
      title: "Module 1 — Python Programming (40 Hours)",
      lessons: [
        "Python Fundamentals",
        "Data Types & Operators",
        "Conditional Statements",
        "Loops",
        "Functions",
        "Object-Oriented Programming",
        "File Handling",
        "Exception Handling",
        "NumPy",
        "Pandas"
      ]
    },

    {
      title: "Module 2 — SQL for Data Analytics (30 Hours)",
      lessons: [
        "Database Fundamentals",
        "DDL, DML, DQL Commands",
        "Joins",
        "Subqueries",
        "CTEs",
        "Window Functions",
        "Views",
        "Stored Procedures",
        "Performance Optimization",
        "Real-World SQL Scenarios"
      ]
    },

    {
      title: "Module 3 — Data Analyst (35 Hours)",
      lessons: [
        "Data Collection",
        "Data Cleaning",
        "Data Transformation",
        "Exploratory Data Analysis",
        "Statistics for Analytics",
        "Business KPIs",
        "Data Storytelling",
        "Reporting Techniques"
      ]
    },

    {
      title: "Module 4 — Power BI (25 Hours)",
      lessons: [
        "Power BI Desktop",
        "Data Modeling",
        "Power Query",
        "DAX Functions",
        "Interactive Dashboards",
        "KPI Reports",
        "Publishing & Sharing Reports"
      ]
    },

    {
      title: "Module 5 — Tableau (20 Hours)",
      lessons: [
        "Tableau Interface",
        "Data Connections",
        "Calculated Fields",
        "Charts & Visualizations",
        "Dashboard Design",
        "Storytelling with Tableau"
      ]
    },

    {
      title: "Module 6 — Data Science (25 Hours)",
      lessons: [
        "Data Science Lifecycle",
        "Feature Engineering",
        "Data Preprocessing",
        "Data Visualization",
        "Hypothesis Testing",
        "Model Evaluation"
      ]
    },

    {
      title: "Module 7 — Machine Learning (30 Hours)",
      lessons: [
        "Introduction to Machine Learning",
        "Regression",
        "Classification",
        "Decision Trees",
        "Random Forest",
        "KNN",
        "Naive Bayes",
        "Clustering",
        "Model Evaluation Metrics"
      ]
    },

    {
      title: "Module 8 — Deep Learning (20 Hours)",
      lessons: [
        "Neural Networks",
        "Activation Functions",
        "TensorFlow Basics",
        "Keras",
        "Image Classification",
        "Deep Learning Applications"
      ]
    },

    {
      title: "Module 9 — Natural Language Processing (15 Hours)",
      lessons: [
        "Text Processing",
        "Tokenization",
        "Text Vectorization",
        "Sentiment Analysis",
        "Text Classification",
        "NLP Applications"
      ]
    },

    {
      title: "Module 10 — Large Language Models (LLM) (20 Hours)",
      lessons: [
        "Introduction to LLMs",
        "Prompt Engineering",
        "ChatGPT",
        "Gemini",
        "Claude",
        "RAG Fundamentals",
        "AI Chatbot Development"
      ]
    }

  ],

  projects: [

    "Sales Analytics Dashboard using Power BI",

    "HR Analytics Dashboard using Tableau",

    "E-Commerce Data Analysis Project",

    "Customer Churn Prediction",

    "House Price Prediction System",

    "Loan Approval Prediction",

    "Movie Recommendation System",

    "Sentiment Analysis on Customer Reviews",

    "Resume Screening using NLP",

    "AI-Powered PDF Chatbot",

    "Business Intelligence Dashboard",

    "Capstone Data Science Project"
  ],

  assignments: [

    "Python Programming Assignments",

    "SQL Query Challenges",

    "Data Cleaning Exercises",

    "Power BI Dashboard Assignment",

    "Tableau Dashboard Assignment",

    "Machine Learning Case Studies",

    "Deep Learning Practice Tasks",

    "NLP Text Analysis Assignment",

    "Prompt Engineering Exercises",

    "Capstone Project Presentation"
  ],

  certification: [
    "Data Science & AI Professional Certificate",
    "Project Completion Certificate",
    "Internship/Industrial Training Certificate (Optional)"
  ],

  requirements: [
    "Basic computer knowledge",
    "No prior coding experience required",
    "Interest in Data Analytics and Artificial Intelligence"
  ]
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
    color: "mint",
    description: "A hands-on, project-first machine learning course. You'll move from linear regression to deep neural networks, training and evaluating real models on real datasets using Python, scikit-learn, and a light touch of PyTorch — with an emphasis on knowing *why* a model works, not just calling .fit().",
    learn: [
      "Framing a problem as supervised or unsupervised learning",
      "Linear & logistic regression from first principles",
      "Model evaluation: train/test splits, cross-validation, metrics",
      "Decision trees, random forests, and gradient boosting",
      "Building and training a basic neural network",
      "Avoiding overfitting with regularization & tuning"
    ],
    curriculum: [
      { title: "Module 1 — ML Foundations", lessons: ["Supervised vs unsupervised learning", "The bias-variance tradeoff", "Setting up your ML environment"] },
      { title: "Module 2 — Regression Models", lessons: ["Linear regression from scratch", "Logistic regression", "Regularization (L1/L2)"] },
      { title: "Module 3 — Tree-Based Models", lessons: ["Decision trees", "Random forests", "Gradient boosting (XGBoost)"] },
      { title: "Module 4 — Model Evaluation", lessons: ["Cross-validation", "Precision, recall & F1", "Hyperparameter tuning"] },
      { title: "Module 5 — Intro to Neural Networks", lessons: ["Perceptrons & backpropagation", "Building a network in PyTorch", "Training on image data"] },
      { title: "Capstone Project", lessons: ["End-to-end model: data → deployment-ready notebook"] }
    ],
    requirements: ["Solid Python fundamentals", "Basic linear algebra & statistics", "A laptop that can run Jupyter/Colab"]
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
    color: "amber",
    description: "A practical, no-fluff tour of the modern AI toolbelt. Learn how to write effective prompts, call LLM APIs from your own code, wire up a simple vector search over your own documents, and use AI copilots to genuinely speed up day-to-day development work.",
    learn: [
      "Writing clear, effective prompts for LLMs",
      "Calling an LLM API from Python/JavaScript",
      "What embeddings & vector search actually do",
      "Building a tiny 'chat with your docs' tool",
      "Using AI coding copilots without losing code quality",
      "Where AI tools help — and where they still fall short"
    ],
    curriculum: [
      { title: "Module 1 — Prompting Basics", lessons: ["Anatomy of a good prompt", "Few-shot examples", "Common failure modes"] },
      { title: "Module 2 — Working with LLM APIs", lessons: ["Making your first API call", "Streaming responses", "Handling structured output"] },
      { title: "Module 3 — Embeddings & Vector Search", lessons: ["What is an embedding?", "Setting up a vector store", "Building a mini semantic search"] },
      { title: "Module 4 — AI Coding Copilots", lessons: ["Getting the most out of autocomplete", "Reviewing AI-generated code", "Workflow tips for daily use"] },
      { title: "Capstone Project", lessons: ["Ship a small 'chat with your notes' app"] }
    ],
    requirements: ["Basic programming knowledge in any language", "No prior AI experience required"]
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
    color: "mint",
    description: "The course everything else builds on. You'll implement every core data structure by hand — not just import them — so you understand exactly what's happening under the hood and can reason about which structure fits which problem.",
    learn: [
      "Arrays, linked lists, and when to use each",
      "Stacks & queues and their real-world use cases",
      "Trees: binary, BST, and traversal strategies",
      "Graphs: representation, BFS & DFS",
      "Hash tables and collision handling",
      "How to choose the right structure for a problem"
    ],
    curriculum: [
      { title: "Module 1 — Arrays & Linked Lists", lessons: ["Static vs dynamic arrays", "Singly & doubly linked lists", "Practice: reverse a linked list"] },
      { title: "Module 2 — Stacks & Queues", lessons: ["Stack implementation & use cases", "Queues & circular queues", "Practice: valid parentheses"] },
      { title: "Module 3 — Trees", lessons: ["Binary trees & traversals", "Binary search trees", "Balanced trees (intro to AVL)"] },
      { title: "Module 4 — Graphs", lessons: ["Adjacency list vs matrix", "BFS & DFS", "Practice: shortest path on unweighted graph"] },
      { title: "Module 5 — Hash Tables", lessons: ["Hash functions", "Collision resolution", "Practice: two-sum"] },
      { title: "Capstone Project", lessons: ["Build a small library management system using these structures"] }
    ],
    requirements: ["Basic understanding of any programming language", "A for-loop should look familiar"]
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
    color: "amber",
    description: "Learn to design and analyze algorithms like an engineer, not memorize solutions. From sorting and searching to dynamic programming, this course builds the pattern-recognition skills that carry over to any coding interview or performance-critical system.",
    learn: [
      "Analyzing time & space complexity (Big-O) confidently",
      "Sorting algorithms and when each one wins",
      "Divide-and-conquer problem solving",
      "Greedy algorithms and when greedy actually works",
      "Dynamic programming from first principles",
      "Recognizing which technique a new problem needs"
    ],
    curriculum: [
      { title: "Module 1 — Complexity Analysis", lessons: ["Big-O, Big-Θ, Big-Ω", "Analyzing loops & recursion", "Practice: comparing two solutions"] },
      { title: "Module 2 — Sorting & Searching", lessons: ["Merge sort & quicksort", "Binary search variants", "Practice: search in rotated array"] },
      { title: "Module 3 — Divide & Conquer", lessons: ["Breaking problems down", "Master theorem intuition", "Practice: closest pair of points"] },
      { title: "Module 4 — Greedy Algorithms", lessons: ["When greedy works (and when it doesn't)", "Interval scheduling", "Practice: coin change (greedy vs DP)"] },
      { title: "Module 5 — Dynamic Programming", lessons: ["Memoization vs tabulation", "Classic DP problems", "Practice: longest common subsequence"] },
      { title: "Capstone Project", lessons: ["Solve a mixed problem set under time constraints"] }
    ],
    requirements: ["Data Structures Essentials or equivalent", "Comfort with Python or a similar language", "Basic recursion knowledge"]
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
    color: "violet",
    description: "Learn how real databases are designed and queried. From modelling entities and relationships through normalization to writing production-quality SQL, this course gives you the foundation every backend developer and data analyst needs.",
    learn: [
      "Modelling data with ER diagrams",
      "Normalization (1NF through 3NF) and why it matters",
      "Writing joins, subqueries, and aggregate queries",
      "Understanding transactions & ACID properties",
      "How indexes speed up (or slow down) queries",
      "Designing a schema for a real application"
    ],
    curriculum: [
      { title: "Module 1 — Relational Modelling", lessons: ["Entities & relationships", "ER diagrams", "Keys & constraints"] },
      { title: "Module 2 — Normalization", lessons: ["1NF, 2NF, 3NF", "Denormalization tradeoffs", "Practice: normalize a messy schema"] },
      { title: "Module 3 — SQL in Depth", lessons: ["Joins (inner, left, right)", "Subqueries & CTEs", "Window functions"] },
      { title: "Module 4 — Transactions & Indexing", lessons: ["ACID properties", "Isolation levels", "How B-tree indexes work"] },
      { title: "Capstone Project", lessons: ["Design and query a small e-commerce database"] }
    ],
    requirements: ["No prior database experience needed", "Basic comfort with spreadsheets or tables is helpful"]
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
    color: "mint",
    description: "Peek behind the curtain of every program you run. This course covers how operating systems manage processes, memory, and concurrency — the internals that explain why your code sometimes hangs, leaks memory, or races against itself.",
    learn: [
      "How processes & threads are created and scheduled",
      "CPU scheduling algorithms (FCFS, SJF, Round Robin)",
      "Memory management: paging & segmentation",
      "The four conditions for deadlock — and how to avoid them",
      "Synchronization primitives: mutexes & semaphores",
      "How virtual memory makes multitasking possible"
    ],
    curriculum: [
      { title: "Module 1 — Processes & Threads", lessons: ["Process lifecycle", "Threads vs processes", "Context switching"] },
      { title: "Module 2 — CPU Scheduling", lessons: ["FCFS & SJF", "Round robin & priority scheduling", "Practice: simulate a scheduler"] },
      { title: "Module 3 — Memory Management", lessons: ["Paging & segmentation", "Virtual memory", "Page replacement algorithms"] },
      { title: "Module 4 — Concurrency & Deadlocks", lessons: ["Mutexes & semaphores", "The four deadlock conditions", "Deadlock prevention & avoidance"] },
      { title: "Capstone Project", lessons: ["Simulate a producer-consumer system with proper synchronization"] }
    ],
    requirements: ["Basic C or C++ knowledge", "Comfort with pointers is helpful but not required"]
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
    color: "amber",
    description: "Demystify what actually happens between typing a URL and seeing a page load. This course walks through the OSI and TCP/IP models, routing, sockets, and the protocols (HTTP, DNS, TCP) that quietly run the internet.",
    learn: [
      "The OSI and TCP/IP models, layer by layer",
      "How IP addressing & subnetting work",
      "The TCP three-way handshake and reliable delivery",
      "How DNS resolves a domain to an IP address",
      "The HTTP request/response lifecycle",
      "Basics of socket programming"
    ],
    curriculum: [
      { title: "Module 1 — Networking Models", lessons: ["OSI model layer by layer", "TCP/IP model", "Where common protocols live"] },
      { title: "Module 2 — Addressing & Routing", lessons: ["IP addressing", "Subnetting basics", "How routers forward packets"] },
      { title: "Module 3 — TCP & Reliable Delivery", lessons: ["The three-way handshake", "Flow & congestion control", "TCP vs UDP"] },
      { title: "Module 4 — DNS & HTTP", lessons: ["How DNS resolution works", "The HTTP request/response cycle", "HTTPS & TLS basics"] },
      { title: "Capstone Project", lessons: ["Build a simple client-server app using sockets"] }
    ],
    requirements: ["No prior networking experience needed", "Basic programming knowledge helps for the capstone"]
  }
];

/* ---- Shared instructor info for course detail pages ---------------------- */
const INSTRUCTOR = {
  name: "Mansi Garg",
  title: "Lead Instructor, ANRA Institute",
  image: "images/mansi-garg.jpg",
  bio: "Mansi has taught AI, Machine Learning, SQL and DBMS to hundreds of students at ANRA Institute, focusing on building real understanding rather than just finishing a syllabus."
};

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