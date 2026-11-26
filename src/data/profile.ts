export const profile = {
  name: "Abhishek Gupta",
  initials: "AG",
  headline: "B.Tech CSE Pre-Final Year @ Brainware University | C DSA | Python Developer",
  roles: ["Python Developer", "DSA in C", "Machine Learning Enthusiast"],
  location: "Howrah, West Bengal, India",
  email: "akgupta7606@gmail.com",
  linkedin: "https://www.linkedin.com/in/akgupta766",
  linkedinLabel: "linkedin.com/in/akgupta766",
  summary:
    "I am Abhishek Gupta, a Computer Science undergraduate at Brainware University with a hunger for solving complex problems. My technical journey is anchored in a rigorous study of Data Structures and Algorithms using C, fueling my enthusiasm for algorithmic optimization. Simultaneously, I am leveraging my proficiency in Python, Pandas, and NumPy to dive deep into the world of Machine Learning. Beyond code, I am an enthusiast of Computer Networking, actively seeking to understand the infrastructure that connects modern systems. With a collaborative spirit showcased at multiple hackathons like Nexathon 1.0, I am eager to join engineering teams tackling challenges in AI and system architecture.",
  highlightStats: [
    { value: "B.Tech CSE", label: "Class of 2028" },
    { value: "Cisco", label: "CyberOps Associate" },
    { value: "3", label: "Spoken Languages" },
    { value: "5+", label: "Certifications" },
  ],
} as const;

export const skillGroups = [
  {
    title: "Languages & Core",
    icon: "code",
    blurb: "Top skills from my toolkit, sharpened through DSA practice.",
    skills: ["Java", "Python", "SQL", "C (Data Structures & Algorithms)"],
  },
  {
    title: "Data & Machine Learning",
    icon: "brain",
    blurb: "Exploring data with the Python scientific stack.",
    skills: ["Pandas", "NumPy", "Machine Learning", "Python for Data Science"],
  },
  {
    title: "Networking & Security",
    icon: "shield",
    blurb: "Understanding the infrastructure that connects modern systems.",
    skills: ["Computer Networking", "Cybersecurity (Cisco CyberOps)", "Hardware Basics"],
  },
] as const;

export type TimelineItem = {
  kind: "work" | "education";
  title: string;
  org: string;
  /** Optional external link for the org name (opens in a new tab). */
  orgUrl?: string;
  period: string;
  duration: string;
  points: string[];
  /** Optional document (certificate/letter) shown in a popup from the card. */
  document?: {
    image: string;
    label: string;
    /** Tailwind aspect class — landscape certs are 4/3, letters are portrait. */
    aspectClass?: string;
  };
};

export const timeline: TimelineItem[] = [
  {
    kind: "work",
    title: "Winter Intern",
    org: "India Space Week",
    orgUrl: "https://indiaspaceweek.org",
    period: "Feb 2026 — Mar 2026",
    duration: "2 months",
    points: [
      "Completed the Winter Internship Technical Training Program with India Space Lab — advanced drone technology, CanSat & CubeSat satellite systems, remote sensing & GIS, rocketry, and disaster management.",
      "Shipped the assigned projects: recreated the Cessna 210 (NASA variant) in OpenVSP and designed a model rocket in OpenRocket.",
    ],
    document: {
      image: "/certificates/isl-completion-1.webp",
      label: "Internship Completion Letter",
      aspectClass: "aspect-[7/9]",
    },
  },
  {
    kind: "education",
    title: "B.Tech, Computer Science",
    org: "Brainware University",
    period: "Jul 2024 — Sep 2028",
    duration: "Expected graduation 2028",
    points: [
      "Bachelor of Technology in Computer Science & Engineering.",
      "Focused on Data Structures & Algorithms in C, Python, and ML.",
    ],
  },
];

export type RoadmapStop = {
  name: string;
  status: "current" | "upcoming";
  blurb: string;
  tag?: string;
};

export const roadmap = {
  intro:
    "pov: you caught me mid-roadtrip. the route? eat the whole MERN stack, take the devops detour, and run the AI side quests in the background. seatbelt on, playlist loaded — scroll the route ↓",
  progress: {
    value: "14%",
    location: "JavaScript City",
    mode: "learning cruise",
    fuel: "caffeine ☕",
  },
  highway: [
    {
      name: "JavaScript",
      status: "current",
      blurb:
        "current city. const confusion slowly becoming const confidence — the browser and i are finally bonding.",
    },
    {
      name: "React",
      status: "upcoming",
      blurb:
        "next stop — where the UI goes brrr. components, hooks and pixel-perfect vibes on the menu.",
    },
    {
      name: "Express.js",
      status: "upcoming",
      blurb: "the API pit lane. routes, middleware, and REST done right.",
    },
    {
      name: "Node.js",
      status: "upcoming",
      blurb: "same JS, but it escaped the browser. server-side arc loading…",
    },
    {
      name: "MongoDB",
      status: "upcoming",
      tag: "🏁 MERN complete",
      blurb:
        "where the data sleeps. reach here and the full-stack badge unlocks.",
    },
  ] as RoadmapStop[],
  detour: {
    name: "Docker",
    blurb:
      "devops detour — starting now. learning to ship my apps in little containers, like blind-box toys but reproducible.",
  },
  sideQuest: {
    blurb:
      "the main quest is MERN, but the AI side quests are already running in the background — currently exploring:",
    tools: [
      { name: "llama.cpp", line: "running open LLMs locally. GPU: crying. me: learning." },
      { name: "claude code", line: "pair programming with an AI that never needs a coffee break." },
      { name: "opencode agents", line: "my terminal is haunted — in a productive way." },
      { name: "google ai studio", line: "the prompt playground, where ideas get stress-tested." },
      { name: "antigravity", line: "the agentic IDE era — letting agents ride shotgun." },
      { name: "RAG", line: "teaching LLMs to cite their sources. receipts or it didn't happen." },
    ],
  },
  flashForward: {
    note:
      "we haven't hit these checkpoints yet — but future me already has. here's the spoiler:",
    items: [
      { text: "mern mastered — shipped real full-stack apps with react, express, node & mongodb.", done: true },
      { text: "dockerized everything. this portfolio? containerized. docker compose up and go.", done: true },
      {
        text: "built a RAG assistant over my own notes — answers with receipts, zero hand-waving.",
        done: true,
      },
      {
        text: "open LLMs via llama.cpp running on my machine; my laptop files a complaint, i ship anyway.",
        done: true,
      },
      {
        text: "agents (claude code · opencode · ai studio · antigravity) are my default pair-programmers.",
        done: true,
      },
      {
        text: "still driving — next checkpoints: kubernetes, langchain, and whatever drops next.",
        done: false,
      },
    ],
  },
};

export type Certification = {
  title: string;
  issuer: string;
  icon: "shield" | "brain" | "award" | "cpu" | "spark" | "lock";
  /** WebP file under /public/certificates — cards with one open the popup viewer. */
  image?: string;
};

export const certifications: Certification[] = [
  {
    title: "Cisco CyberOps Associate",
    issuer: "Cisco NetAcad · NIIT Foundation",
    icon: "shield",
    image: "/certificates/cisco-cyberops.webp",
  },
  {
    title: "Privacy-Preserving Cryptographic Security",
    issuer: "ISEA · ISI Kolkata",
    icon: "lock",
    image: "/certificates/cryptography-stc.webp",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL · Jul–Aug 2025",
    icon: "brain",
    image: "/certificates/python-data-science.webp",
  },
  {
    title: "Nexathon 1.0",
    issuer: "Hackathon · Brainware University",
    icon: "award",
    image: "/certificates/nexathon-1.0.webp",
  },
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    icon: "cpu",
    image: "/certificates/computer-hardware-basics.webp",
  },
  {
    title: "Quantum Computing Seminar",
    issuer: "Brainware University",
    icon: "spark",
    image: "/certificates/quantum-computing.webp",
  },
];

export const languages = [
  { name: "Hindi", level: "Native or Bilingual" },
  { name: "Bengali", level: "Native or Bilingual" },
  { name: "English", level: "Full Professional" },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#terminal", label: "Terminal" },
  { href: "#journey", label: "Journey" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;
