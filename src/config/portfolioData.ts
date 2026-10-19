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
    title: "Junior Full-Stack Developer",
    headline: "React · Node.js · JavaScript · AI Integration",
    avatar: [
      { url: "/profile.jpg", label: "Portrait" },
      { url: "/profile1.jpg", label: "Portrait" },
    ],
    summary:
      "Computer Science graduate and Full-Stack Developer with hands-on experience in React.js, JavaScript, Node.js, REST APIs and database design. Builds responsive, user-friendly web applications and has shipped three deployed projects. Completed an intensive full-stack program at Evangadi Networks on a scholarship and is eager to grow through real-world engineering work.",
    hero: {
      summary:
        "Computer Science graduate and Full-Stack Developer with hands-on experience in React.js, JavaScript, Node.js, REST APIs and database design. Builds responsive, user-friendly web applications and has shipped three deployed projects.",
      subtitle:
        "Open to junior full-stack & frontend roles · Also available for freelance projects · Addis Ababa",
    },
    contact: {
      email: "abelambachew11@gmail.com",
      phone: "+251 905 895 282",
      location: "Addis Ababa, Ethiopia",
      website: "https://github.com/Abela-code",
      socials: [
        {
          label: "GitHub",
          url: "https://github.com/Abela-code",
          icon: "SiGithub",
        },
        {
          label: "LinkedIn",
          url: "https://linkedin.com/in/abel-ambachew",
          icon: "SiLinkedin",
        },
      ],
    },
  },
  highlights: [
    "B.Sc. Computer Science — Debre Tabor University",
    "Evangadi Networks full-stack program (scholarship)",
    "Three deployed projects: Forum, EtGPT, Netstream",
    "Open to junior full-stack & frontend roles · Also available for freelance",
  ],
  skills: [
    {
      title: "Frontend",
      skills: [
        { name: "React", category: "frontend" },
        { name: "JavaScript", category: "frontend" },
        { name: "HTML5", category: "frontend" },
        { name: "CSS3", category: "frontend" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", category: "backend" },
        { name: "Express", category: "backend" },
        { name: "REST APIs", category: "backend" },
        { name: "JWT auth", category: "backend" },
      ],
    },
    {
      title: "Data & AI",
      skills: [
        { name: "MySQL", category: "database" },
        { name: "SQL", category: "database" },
        { name: "Gemini API", category: "other" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", category: "tooling" },
        { name: "GitHub", category: "tooling" },
        { name: "Vercel", category: "tooling" },
        { name: "Render", category: "tooling" },
      ],
    },
  ],
  experience: [],
  projects: [
    {
      id: "evangadi-forum",
      title: "Evangadi Forum",
      short: "Full-stack community Q&A platform",
      description:
        "Developed a full-stack community Q&A platform where users post questions, answer others and share knowledge. Built the interface in React.js with a Node.js backend and REST APIs; deployed to production on Vercel. Includes AI-powered search and course RAG for document-grounded answers.",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
        "Gemini API",
        "Qdrant",
        "JavaScript",
      ],
      image: "/preview-forum.png",
      imageFit: "cover",
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
      title: "EtGPT (ChatGPT Clone)",
      short: "Conversational AI chat application",
      description:
        "Built a conversational AI web application inspired by ChatGPT, integrating AI capabilities into a clean chat interface. Deployed live on Vercel as a hands-on project in AI integration, with streaming responses and multi-session support.",
      tags: ["React", "JavaScript", "Node.js", "Express.js", "MySQL", "Gemini"],
      image: "/preview-etgpt.png",
      imageFit: "cover",
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
      title: "Netstream (Netflix Clone)",
      short: "Streaming-platform UI with responsive layouts",
      description:
        "Recreated a streaming-platform interface with responsive layouts using HTML5, CSS3, JavaScript and React.js. Deployed to Vercel to practice component-based UI design and API-driven content.",
      tags: ["React", "JavaScript", "CSS", "Firebase", "TMDB"],
      image: "/preview-netstream.png",
      imageFit: "cover",
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
      school: "Debre Tabor University",
      date: "2021 – 2026",
      location: "Debre Tabor, Ethiopia",
    },
  ],
  certifications: [
    {
      name: "Full-Stack Application Development",
      issuer: "Evangadi Networks (scholarship)",
      date: "2026",
    },
  ],
  extras: {
    languages: [
      { name: "Amharic", level: "Native" },
      { name: "English", level: "Professional" },
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
