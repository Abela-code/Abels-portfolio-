import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://github.com/Abela-code",
    pdf: "/resume.pdf",
  },
  personal: {
    name: "Abel Ambachew",
    title: "Full Stack Web Developer",
    headline: "React · Node.js · MySQL · AI Integration",
    avatar: [
      { url: "./profile.jpg", label: "Portrait" },
      { url: "./profile1.jpg", label: "Portrait" },
    ],
    summary:
      "Computer Science graduate and AI-Powered Fullstack developer trained at Evangadi Network. I build responsive web applications with React and Node.js, integrate AI APIs (including Gemini), and care about clean UI, solid backends, and shipping real projects end to end.",
    hero: {
      summary:
        "Full Stack Web Developer focused on React, Node.js, and AI-powered applications. Fresh Computer Science graduate with hands-on projects in forums, chat apps, and streaming-style UIs — ready to grow with a team and ship products users love.",
      subtitle: "Based in Addis Ababa · Open to opportunities",
    },
    contact: {
      email: "abelambachew11@gmail.com",
      location: "Addis Ababa, Ethiopia",
      website: "https://github.com/Abela-code",
      socials: [
        {
          label: "GitHub",
          url: "https://github.com/Abela-code",
          icon: "SiGithub",
        },
      ],
    },
  },
  highlights: [
    "B.Sc. Computer Science graduate",
    "Evangadi Network — AI Powered Fullstack Application Development",
    "Built full-stack apps with React, Node.js, MySQL & Gemini API",
    "Open to junior full-stack / frontend roles",
  ],
  skills: [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 85, icon: "SiHtml5", category: "frontend" },
        { name: "CSS3", level: 85, icon: "SiCss3", category: "frontend" },
        {
          name: "JavaScript",
          level: 80,
          icon: "SiJavascript",
          category: "frontend",
        },
        { name: "React.js", level: 80, icon: "SiReact", category: "frontend" },
        {
          name: "Responsive Design",
          level: 80,
          icon: "SiCss3",
          category: "frontend",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 75, icon: "SiNodedotjs", category: "backend" },
        { name: "Express.js", level: 75, icon: "SiExpress", category: "backend" },
        {
          name: "REST APIs",
          level: 75,
          icon: "SiPostman",
          category: "backend",
        },
        {
          name: "Auth (JWT)",
          level: 70,
          icon: "SiJsonwebtokens",
          category: "backend",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 75, icon: "SiMysql", category: "database" },
        { name: "SQL", level: 75, icon: "SiMysql", category: "database" },
      ],
    },
    {
      title: "AI Integration",
      skills: [
        {
          name: "Gemini API",
          level: 70,
          icon: "SiGoogle",
          category: "other",
        },
        {
          name: "AI API Integration",
          level: 70,
          category: "other",
        },
        {
          name: "Embeddings / RAG",
          level: 65,
          category: "other",
          note: "Used in Evangadi Forum with Qdrant",
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 80, icon: "SiGit", category: "tooling" },
        { name: "GitHub", level: 80, icon: "SiGithub", category: "tooling" },
        { name: "VS Code", level: 85, icon: "SiVisualstudiocode", category: "tooling" },
        { name: "npm", level: 80, icon: "SiNpm", category: "tooling" },
        { name: "Postman", level: 75, icon: "SiPostman", category: "tooling" },
      ],
    },
  ],
  experience: [],
  projects: [
    {
      id: "evangadi-forum",
      title: "Evangadi Forum",
      short: "AI-powered discussion platform",
      description:
        "A full-stack discussion platform where users can ask questions, post answers, interact with the community, and explore AI-powered search and document-based assistance.",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
        "Gemini API",
        "Qdrant",
        "JavaScript",
      ],
      href: "https://evangadi-ai-forum-pi.vercel.app",
      links: [
        {
          label: "Live Demo",
          url: "https://evangadi-ai-forum-pi.vercel.app",
        },
        {
          label: "GitHub",
          url: "https://github.com/Abela-code/Evangadi-ai-forum.git",
          icon: "SiGithub",
        },
      ],
      featured: true,
      isUnderDevelopment: false,
    },
    {
      id: "etgpt-clone",
      title: "ChatGPT Clone (EtGPT)",
      short: "Streaming AI chat with multi-session support",
      description:
        "An AI chat application inspired by ChatGPT, built to practice conversational UIs, streaming responses, authentication, and full-stack integration with a Node/Express backend.",
      tags: ["React", "JavaScript", "Node.js", "Express.js", "MySQL", "Gemini"],
      href: "https://etgpt-mu.vercel.app",
      links: [
        {
          label: "Live Demo",
          url: "https://etgpt-mu.vercel.app",
        },
        {
          label: "GitHub",
          url: "https://github.com/Abela-code/Etgpt-clone.git",
          icon: "SiGithub",
        },
      ],
      featured: true,
      isUnderDevelopment: false,
    },
    {
      id: "netstream",
      title: "Netflix Clone (Netstream)",
      short: "Streaming-style UI with auth & personalization",
      description:
        "A Netflix-inspired browsing experience built to practice responsive UI design, reusable components, Firebase auth, and movie discovery flows.",
      tags: ["React", "JavaScript", "CSS", "Firebase", "TMDB"],
      href: "https://netstream-two.vercel.app",
      links: [
        {
          label: "Live Demo",
          url: "https://netstream-two.vercel.app",
        },
        {
          label: "GitHub",
          url: "https://github.com/Abela-code/netstream.git",
          icon: "SiGithub",
        },
      ],
      featured: true,
      isUnderDevelopment: false,
    },
  ],
  education: [
    {
      degree: "Bachelor's Degree in Computer Science",
      school: "University",
      date: "5-year program · Graduated",
    },
  ],
  certifications: [
    {
      name: "AI Powered Fullstack Application Development",
      issuer: "Evangadi Network",
      date: "2025–2026",
    },
  ],
  extras: {
    languages: [
      { name: "English", level: "Professional" },
      { name: "Amharic", level: "Native" },
    ],
    interests: ["Web development", "AI applications", "Building products"],
  },
};

export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",
  JavaScript: "bg-yellow-100 text-yellow-800",
  CSS: "bg-teal-100 text-teal-800",
  CSS3: "bg-teal-100 text-teal-800",
  "Node.js": "bg-green-100 text-green-800",
  "Express.js": "bg-gray-100 text-gray-800",
  MySQL: "bg-blue-100 text-blue-800",
  "Gemini API": "bg-violet-100 text-violet-800",
  Gemini: "bg-violet-100 text-violet-800",
  Qdrant: "bg-purple-100 text-purple-800",
  Firebase: "bg-amber-100 text-amber-800",
  TMDB: "bg-red-100 text-red-800",
  AI: "bg-gray-100 text-gray-800",
  HTML5: "bg-orange-100 text-orange-800",
};
