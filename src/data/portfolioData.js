export const developerProfile = {
  name: "Yashasvi Kumar Shukla",
  handle: "yashasvi@dev",
  role: "Full-Stack Web & Mobile Software Engineer",
  location: "Lucknow, UP, India",
  availability: "Available for Freelance & Full-Stack Roles",
  email: "yashasvishukla2002@gmail.com",
  github: "https://github.com/Yashasvi-kumar-shukla",
  linkedin: "https://www.linkedin.com/in/yashasvi-kumar-shukla/",
  resumeUrl: "https://drive.google.com/uc?export=download&id=1c01Na6zZjo8RuqUHL_sxWB5PJJ7AqGK3",
  resumePreviewUrl: "https://drive.google.com/file/d/1c01Na6zZjo8RuqUHL_sxWB5PJJ7AqGK3/view",
  headline: "Shipping scalable web platforms & cross-platform mobile apps from zero to production.",
  subheadline:
    "I partner with founders, startups, and businesses to architect full-stack products, payment workflows, and high-performance mobile apps using React, Node.js, Django, and Flutter.",
  highlights: [
    { label: "Core Focus", value: "MVP Architecture & Full-Stack Delivery" },
    { label: "Platforms", value: "Web (React/Django) & Android/iOS (Flutter)" },
    { label: "Live Production", value: "Play Store & Client Deployments" }
  ]
};

export const projectsData = [
  {
    id: "payflow",
    title: "PayFlow — Offline Expense Tracker",
    category: "app",
    categoryLabel: "Mobile App",
    status: "Live on Play Store",
    statusType: "live",
    featured: true,
    summary:
      "Privacy-first offline expense tracking mobile application engineered with Flutter and local persistent storage for instant, zero-latency daily finance management.",
    highlights: [
      "100% offline-first architecture with local database persistence",
      "Category-level spend breakdowns and fast transaction logging",
      "Published and live on Google Play Store"
    ],
    tech: ["Flutter", "Dart", "Local Storage", "Android"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.rinzler.offline_expense_tracker",
    liveLabel: "Google Play Store",
    repoUrl: "https://github.com/Yashasvi-kumar-shukla"
  },
  {
    id: "comfy-emobility",
    title: "Comfy E-Mobility",
    category: "web",
    categoryLabel: "Web Platform",
    status: "Live Production",
    statusType: "live",
    featured: true,
    summary:
      "Digital storefront and partner onboarding web platform built with React for an urban sustainable electric mobility company.",
    highlights: [
      "Dynamic product & fleet showcase modules with responsive layouts",
      "Dedicated partnership portals for advertising, sales, and fleet inquiries",
      "Streamlined service request flows for end customers"
    ],
    tech: ["React.js", "JavaScript", "CSS3", "Responsive UI"],
    liveUrl: "https://comfyemobility.co.in/",
    liveLabel: "Visit Live Site",
    repoUrl: null
  },
  {
    id: "comfy-porter",
    title: "Comfy Porter — Hyperlocal Delivery",
    category: "app",
    categoryLabel: "Multi-Role Platform",
    status: "Live Production",
    statusType: "live",
    featured: true,
    summary:
      "Multi-role hyperlocal logistics ecosystem connecting customers, delivery riders, and service partners with real-time order dispatch and role-based access control.",
    highlights: [
      "Role-based workflows for customers, drivers, and dispatch admins",
      "Real-time order lifecycle management and status tracking",
      "Scalable backend designed for concurrent local deliveries"
    ],
    tech: ["Flutter", "Node.js", "Firebase", "REST APIs"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.comfymobility.porter",
    liveLabel: "Google Play Store",
    repoUrl: null
  },
  {
    id: "apex-logic",
    title: "Apex Logic Corporate Platform",
    category: "web",
    categoryLabel: "Full-Stack Web",
    status: "Live Production",
    statusType: "live",
    featured: true,
    summary:
      "Custom end-to-end corporate web platform architected and deployed to client specifications, covering frontend UI engineering and backend service integration.",
    highlights: [
      "Full-stack architecture tailored to business workflows",
      "Cross-device responsive design optimized for fast load times",
      "Deployed and actively serving live production traffic"
    ],
    tech: ["React.js", "Node.js", "REST APIs", "Full-Stack"],
    liveUrl: "https://apexlogic.in/",
    liveLabel: "Visit Live Site",
    repoUrl: null
  },
  {
    id: "lms-portal",
    title: "LMS Portal Platform",
    category: "saas",
    categoryLabel: "SaaS Platform",
    status: "In Development",
    statusType: "wip",
    featured: false,
    summary:
      "Subscription-based Learning Management System supporting secure authentication, gated course delivery, student progress tracking, and tiered access control.",
    highlights: [
      "Role-based authentication and subscription entitlement checks",
      "Structured module and media content delivery pipeline",
      "Built for multi-cohort scalability"
    ],
    tech: ["React.js", "Django", "PostgreSQL", "Auth & Billing"],
    liveUrl: null,
    liveLabel: null,
    repoUrl: null
  },
  {
    id: "portfolio-system",
    title: "Developer Portfolio & Interactive CLI",
    category: "web",
    categoryLabel: "UI & Systems",
    status: "Live Production",
    statusType: "live",
    featured: false,
    summary:
      "Component-driven developer portfolio combining clean product-grade UI architecture with an embedded interactive Unix-style command shell.",
    highlights: [
      "Accessible, responsive layout with interactive command-line drawer",
      "Structured data layer powering both visual cards and CLI commands",
      "Automated EmailJS communications pipeline with live status logs"
    ],
    tech: ["React.js", "JavaScript", "CSS Architecture", "EmailJS"],
    liveUrl: "#top",
    liveLabel: "Current Site",
    repoUrl: "https://github.com/Yashasvi-kumar-shukla"
  }
];

export const skillsCategories = [
  {
    id: "frameworks",
    category: "Frameworks & Runtimes",
    subtitle: "Full-Stack Web & Cross-Platform Mobile",
    description:
      "Architecting reactive frontends, RESTful backend services, and native-feel mobile applications.",
    skills: [
      { name: "React.js", level: "Primary" },
      { name: "Node.js", level: "Primary" },
      { name: "Flutter", level: "Primary" },
      { name: "Django", level: "Production" },
      { name: "Flask", level: "Production" }
    ]
  },
  {
    id: "languages",
    category: "Languages & Core",
    subtitle: "Syntax, Systems & Type-Safe Logic",
    description:
      "Writing maintainable, efficient, and secure code across frontend, backend, and mobile environments.",
    skills: [
      { name: "JavaScript (ES6+)", level: "Primary" },
      { name: "Python", level: "Primary" },
      { name: "Dart", level: "Primary" },
      { name: "C / C++", level: "Core" },
      { name: "HTML5 / CSS3", level: "Primary" }
    ]
  },
  {
    id: "databases",
    category: "Databases & Cloud",
    subtitle: "Data Modeling, Storage & Auth",
    description:
      "Designing relational and document schemas, managing state persistence, and deploying cloud services.",
    skills: [
      { name: "PostgreSQL", level: "Production" },
      { name: "MongoDB", level: "Production" },
      { name: "MySQL", level: "Production" },
      { name: "Firebase", level: "Production" },
      { name: "Git & GitHub", level: "Daily" }
    ]
  }
];

export const engineeringPillars = [
  {
    number: "01",
    title: "End-to-End MVP Execution",
    description:
      "Taking ideas from database schema and API design through responsive web and mobile interfaces without handoff bottlenecks."
  },
  {
    number: "02",
    title: "Practical System Architecture",
    description:
      "Building clean, modular codebases with real-world integrations—payments, auth, role-based access, and offline persistence."
  },
  {
    number: "03",
    title: "Speed & Maintainability",
    description:
      "Shipping working software quickly while keeping structures clean enough to iterate, scale, and onboard future engineers."
  }
];