import tistMisDashboard from '../assets/images/tist_mis_dashboard_1790870484242.jpg';
import projectMinimalTech from '../assets/images/project_minimal_tech_1790846322923.jpg';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Taleem Institute of Science & Technology (TIST)",
    category: "Enterprise MIS & EdTech",
    year: "2026",
    description: "Full-scale institutional platform comprising an integrated Management Information System (MIS), Student LMS, Staff & Faculty Portal, and Super Admin control center. Features role-based access control (RBAC), automated fee billing, real-time attendance, online lecture delivery, and academic grading pipelines.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "RESTful APIs", "JWT Auth", "Prisma ORM"],
    image: tistMisDashboard || "/images/tist_mis_dashboard.jpg",
    liveUrl: "https://taleeminstitute.online",
    githubUrl: "https://github.com/ubaidahmad/tist-mis-portal",
    featured: true
  },
  {
    id: "02",
    title: "EcoSphere Dashboard",
    category: "Full Stack & IoT",
    year: "2026",
    description: "A comprehensive environmental monitoring dashboard utilizing real-time sensor data, telemetry streaming, and predictive analytics. Built with high-throughput WebSocket streams and precision D3 charts.",
    technologies: ["React 19", "TypeScript", "Node.js", "MongoDB", "D3.js", "Tailwind CSS", "WebSocket"],
    image: projectMinimalTech || "/images/project_minimal_tech.jpg",
    liveUrl: "https://ecosphere-dashboard.vercel.app",
    githubUrl: "https://github.com/ubaidahmad/ecosphere-dashboard",
    featured: true
  },
  {
    id: "03",
    title: "Vanguard UI System",
    category: "Design System & UI",
    year: "2025",
    description: "A highly customizable design system and component library built for rapid enterprise development. Features strict WAI-ARIA accessibility compliance, token-based theming, and comprehensive Storybook documentation.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Framer Motion", "Radix UI"],
    image: projectMinimalTech || "/images/project_minimal_tech.jpg",
    liveUrl: "https://vanguard-ui-storybook.vercel.app",
    githubUrl: "https://github.com/ubaidahmad/vanguard-ui-system",
    featured: true
  },
  {
    id: "04",
    title: "Lumina CRM & Analytics",
    category: "SaaS Web Application",
    year: "2025",
    description: "A customer relationship management tool designed for fast-growing businesses. Features automated lead scoring, pipeline automation, financial forecasting, and interactive analytics reporting.",
    technologies: ["Next.js 15", "PostgreSQL", "Prisma ORM", "TypeScript", "Tailwind CSS", "RESTful APIs"],
    image: projectMinimalTech || "/images/project_minimal_tech.jpg",
    liveUrl: "https://lumina-crm.vercel.app",
    githubUrl: "https://github.com/ubaidahmad/lumina-crm",
    featured: true
  },
  {
    id: "05",
    title: "Aura Mobile Wallet",
    category: "Mobile & Web3",
    year: "2024",
    description: "A minimalist digital wallet and crypto asset manager emphasizing biometric security and effortless usability. Includes multi-currency balance aggregation and transaction history tracking.",
    technologies: ["React Native", "TypeScript", "Web3.js", "Firebase", "Tailwind CSS", "Ethers.js"],
    image: projectMinimalTech || "/images/project_minimal_tech.jpg",
    liveUrl: "https://aura-wallet.vercel.app",
    githubUrl: "https://github.com/ubaidahmad/aura-wallet",
    featured: false
  },
  {
    id: "06",
    title: "Nexus API Gateway",
    category: "Backend Infrastructure",
    year: "2024",
    description: "A lightweight, resilient API Gateway designed for microservice routing, rate-limiting, JWT authentication validation, and low-latency payload caching with Redis.",
    technologies: ["Node.js", "Express", "Docker", "Redis", "GraphQL", "PostgreSQL"],
    image: projectMinimalTech || "/images/project_minimal_tech.jpg",
    liveUrl: "https://nexus-gateway-api.vercel.app",
    githubUrl: "https://github.com/ubaidahmad/nexus-api-gateway",
    featured: false
  }
];
