// src/data/portfolio.ts
// CREATE THIS FILE if it does not exist

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Shopping Experience",
    description:
      "A modern e-commerce platform built with Next.js, featuring real-time inventory, AI-powered recommendations, and seamless checkout experience.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    color: "#0071e3",
  },
  {
    id: 2,
    title: "AI Dashboard",
    subtitle: "Data Visualization & Analytics",
    description:
      "An intelligent analytics dashboard that transforms complex data into beautiful, actionable insights using machine learning algorithms.",
    image: "/projects/dashboard.jpg",
    tags: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    color: "#bf5af2",
  },
  {
    id: 3,
    title: "Social Connect",
    subtitle: "Real-time Social Platform",
    description:
      "A feature-rich social media platform with real-time messaging, video calls, and AI-powered content moderation.",
    image: "/projects/social.jpg",
    tags: ["React Native", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    color: "#30d158",
  },
  {
    id: 4,
    title: "DevOps Pipeline",
    subtitle: "CI/CD Automation Tool",
    description:
      "An automated DevOps pipeline tool that streamlines deployment processes with one-click deployments and monitoring.",
    image: "/projects/devops.jpg",
    tags: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    color: "#ff9f0a",
  },
  {
    id: 5,
    title: "HealthTrack App",
    subtitle: "Personal Health & Fitness",
    description:
      "A comprehensive health tracking application with AI-powered workout recommendations and nutrition planning.",
    image: "/projects/health.jpg",
    tags: ["Flutter", "Firebase", "TensorFlow Lite", "HealthKit"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    color: "#ff375f",
  },
  {
    id: 6,
    title: "Crypto Portfolio",
    subtitle: "DeFi Investment Tracker",
    description:
      "A decentralized finance portfolio tracker with real-time price feeds, yield farming analytics, and tax reporting.",
    image: "/projects/crypto.jpg",
    tags: ["Web3.js", "Solidity", "React", "The Graph", "Chainlink"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    color: "#ffd60a",
  },
];

export const skills = [
  { name: "React / Next.js", icon: "⚛️", level: 95, category: "Frontend" },
  { name: "TypeScript", icon: "📘", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", level: 92, category: "Frontend" },
  { name: "Framer Motion", icon: "✨", level: 85, category: "Frontend" },
  { name: "Node.js", icon: "🟢", level: 88, category: "Backend" },
  { name: "Python", icon: "🐍", level: 82, category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", level: 80, category: "Backend" },
  { name: "GraphQL", icon: "◈", level: 78, category: "Backend" },
  { name: "Docker", icon: "🐳", level: 85, category: "DevOps" },
  { name: "AWS", icon: "☁️", level: 80, category: "DevOps" },
  { name: "CI/CD", icon: "🔄", level: 82, category: "DevOps" },
  { name: "Kubernetes", icon: "⚙️", level: 72, category: "DevOps" },
];

export const experiences = [
  {
    id: 1,
    company: "Apple Inc.",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    description: [
      "Led development of core features for iOS applications used by millions",
      "Architected microservices infrastructure reducing latency by 40%",
      "Mentored team of 5 junior developers",
    ],
    logo: "🍎",
  },
  {
    id: 2,
    company: "Google",
    role: "Software Engineer II",
    period: "2020 — 2022",
    description: [
      "Built scalable APIs serving 10M+ daily requests",
      "Improved search algorithm performance by 25%",
      "Contributed to open-source projects",
    ],
    logo: "🔍",
  },
  {
    id: 3,
    company: "Startup XYZ",
    role: "Full-Stack Developer",
    period: "2018 — 2020",
    description: [
      "Built the entire product from scratch using React and Node.js",
      "Implemented real-time features using WebSockets",
      "Grew user base from 0 to 50,000 users",
    ],
    logo: "🚀",
  },
];