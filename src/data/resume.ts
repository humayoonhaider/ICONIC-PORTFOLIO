export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  summary: string;
  experience: WorkExperience[];
  skills: {
    category: string;
    items: string[];
  }[];
  education: Education[];
  certifications: string[];
}

export const resumeData: ResumeData = {
  name: "Ubaid Ahmad",
  title: "Software Engineer & Full-Stack Developer",
  email: "ubaidahmad@gmail.com",
  location: "Islamabad, Pakistan",
  website: "https://ubaidahmad.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  summary: "Results-driven Software Engineer with 4+ years of hands-on experience designing and building scalable web applications, robust distributed backends, and responsive, high-performance frontends. Passionate about clean architecture, type-safety, accessibility, and translating complex product requirements into resilient software solutions.",
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "Islamabad, Pakistan",
      period: "2025 — Present",
      highlights: [
        "Architected and deployed scalable full-stack web applications serving 50k+ monthly active users with 99.9% uptime.",
        "Refactored legacy REST microservices to modern TypeScript/Node.js pipelines, cutting API latency by 35%.",
        "Mentored a team of 6 engineers on testing patterns, CI/CD automation, and modern component systems."
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"]
    },
    {
      role: "Full-Stack Web Developer",
      company: "Digital Craft Agency",
      location: "Remote",
      period: "2023 — 2025",
      highlights: [
        "Delivered 12+ custom web applications and client portals with strict accessibility (WCAG AA) compliance.",
        "Engineered real-time data visualization dashboards utilizing D3.js and WebSockets for sensor telemetry.",
        "Improved Core Web Vitals across high-traffic platforms, achieving 95+ Google Lighthouse performance scores."
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Express", "GraphQL"]
    },
    {
      role: "Junior Software Developer",
      company: "StartUp Hub",
      location: "Islamabad, Pakistan",
      period: "2021 — 2023",
      highlights: [
        "Built responsive user interfaces and modular component libraries using React and TypeScript.",
        "Assisted in designing relational database schemas in PostgreSQL and writing automated unit tests.",
        "Collaborated with UX designers to translate wireframes into interactive pixel-perfect prototypes."
      ],
      technologies: ["JavaScript", "React", "HTML5/CSS3", "Git", "REST APIs"]
    }
  ],
  skills: [
    {
      category: "Frontend Engineering",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "HTML5 / Semantic Web", "D3.js"]
    },
    {
      category: "Backend & Systems",
      items: ["Node.js", "Express", "RESTful APIs", "GraphQL", "WebSockets", "Python", "Microservices"]
    },
    {
      category: "Databases & Cloud",
      items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis", "Docker", "Git / GitHub Actions", "Vercel", "Linux"]
    },
    {
      category: "Methodologies",
      items: ["Clean Code", "Design Systems", "Agile / Scrum", "Test-Driven Development", "Core Web Vitals Optimization"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "National University of Computer & Emerging Sciences",
      year: "2018 — 2022",
      details: "Focus on Data Structures, Algorithms, Software Engineering & Database Systems."
    }
  ],
  certifications: [
    "Full-Stack Web Development Professional Certificate",
    "Advanced TypeScript & Modern React Architecture",
    "PostgreSQL Database Design & Query Optimization"
  ]
};
