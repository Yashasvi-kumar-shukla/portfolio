// --- PROJECTS DATA ---
// Used by both the Terminal (ls, cat) and your UI Project Cards
export const projectsData = [
  { 
    title: "PayFlow - Expense Tracker App", 
    type: "app", 
    description: "An offline expense tracker app built using Flutter to help users manage daily spending without requiring internet access. The app gained 10+ downloads within the first 2 days of launch. It includes features like expense logging, category tracking, and local data storage for privacy and speed." 
  },
  { 
    title: "Comfy Porter - Hyperlocal Delivery", 
    type: "app",
    description: "[UNDER PRODUCTION] A multi-role hyperlocal delivery platform designed to connect customers, delivery partners, and service providers. The system includes features like order management, role-based access, and scalable backend architecture for real-time operations." 
  },
  { 
    title: "Comfy E-Mobility", 
    type: "web",
    description: "A comprehensive frontend React application serving as the digital storefront for sustainable urban transport. It features dynamic informational modules, service request forms, and dedicated partnership portals for advertising, product sales, and general inquiries." 
  },
  { 
    title: "Apex Logic Website", 
    type: "web",
    description: "Developed a custom full-stack website based on client requirements, handling both frontend and backend development. The platform includes responsive UI design and has been successfully deployed for live use, ensuring a smooth user experience across devices." 
  },
  { 
    title: "Personal Portfolio Website", 
    type: "web",
    description: "Designed and developed a personal portfolio website to showcase projects, technical skills, and development work. The site focuses on clean UI, structured content, and clear presentation of projects for better visibility and professional branding." 
  },
  { 
    title: "LMS Portal Platform", 
    type: "saas",
    description: "[UNDER PRODUCTION] A learning management system designed to handle user authentication, course access, subscriptions, and content delivery. The platform aims to provide a scalable solution for managing online learning environments efficiently." 
  }
];

// --- RAW SKILLS DATA ---
// Used by the Terminal 'ls' command inside the ~/skills directory
export const skillsData = [
  "React", "Node.js", "Flutter", "Android", "Python"
];

// --- SKILLS TIMELINE DATA ---
// Used by the animated UI Skills Timeline component
export const skillsTimelineData = [
  {
    id: 1,
    category: "Frameworks & Libraries",
    title: "Full-Stack Development",
    date: "Primary Stack",
    description: "Building scalable web applications and high-performance cross-platform mobile apps.",
    tech: ["React.js", "Node.js", "Django", "Flask", "Flutter"]
  },
  {
    id: 2,
    category: "Languages",
    title: "Core Programming",
    date: "Syntax & Logic",
    description: "The foundational languages used to write clean, efficient, and secure code.",
    tech: ["Python", "JavaScript", "Dart", "C/C++", "HTML/CSS"]
  },
  {
    id: 3,
    category: "Databases & Cloud",
    title: "Data Architecture",
    date: "Storage & State",
    description: "Designing schemas and managing data flow for robust backend architectures.",
    tech: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"]
  }
];