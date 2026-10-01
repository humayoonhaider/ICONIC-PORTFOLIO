export interface SkillItem {
  name: string;
  tagline: string;
  description: string;
  highlight: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      {
        name: "TypeScript",
        tagline: "Static Typing & Scalable Architecture",
        description: "Employs strict type contracts, generics, utility types, and algebraic interfaces to eradicate runtime errors across complex enterprise applications and full-stack codebases.",
        highlight: "Generics • Type Guards • Strict Null Safety"
      },
      {
        name: "JavaScript",
        tagline: "Modern ES6+ & Asynchronous Mastery",
        description: "Deep mastery of asynchronous event loops, closures, promises, functional pipelines, and high-performance DOM manipulation with modern ES2024 standards.",
        highlight: "ES2024 • Event Loop • Asynchronous I/O"
      },
      {
        name: "HTML5",
        tagline: "Semantic Architecture & Accessibility",
        description: "Crafts accessible, WCAG-compliant semantic document structures with optimal SEO metadata, ARIA landmarks, and solid cross-browser compatibility.",
        highlight: "Semantic Web • WCAG 2.1 • SEO Best Practices"
      },
      {
        name: "CSS3",
        tagline: "Responsive Design & Hardware Acceleration",
        description: "Designs fluid, responsive layouts using modern CSS Grid, Subgrid, Flexbox, custom properties, and GPU-accelerated transforms for ultra-smooth rendering.",
        highlight: "CSS Grid • Flexbox • Keyframe Motion"
      },
      {
        name: "Python",
        tagline: "Scripting & Backend Automation",
        description: "Builds clean automated scripts, data scrapers, microservice helpers, and algorithm prototypes with pythonic readability and modular architecture.",
        highlight: "Automation • Data Scripts • Backend APIs"
      }
    ]
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        tagline: "Component Systems & Virtual DOM",
        description: "Architects modular component ecosystems, custom hooks, atomic state management, and optimized render cycles using memoization and modern React 19 patterns.",
        highlight: "Custom Hooks • React 19 • Concurrent Rendering"
      },
      {
        name: "Next.js",
        tagline: "Full-Stack React & Edge Rendering",
        description: "Delivers production-grade web applications leveraging App Router, Server Components (RSC), Incremental Static Regeneration (ISR), and lightning-fast edge caching.",
        highlight: "App Router • SSR / SSG • Edge Runtime"
      },
      {
        name: "Tailwind CSS",
        tagline: "Design Systems & Utility Architecture",
        description: "Constructs cohesive, token-driven UI design systems with micro-utility precision, custom themes, dark mode switching, and zero runtime CSS overhead.",
        highlight: "Design Tokens • Zero-Runtime • Responsive Systems"
      },
      {
        name: "Framer Motion",
        tagline: "Physics-Based Gesture & Motion",
        description: "Engineers buttery-smooth 60/120fps physics animations, shared layout transitions, page choreography, and tactile spring interactions that feel natural.",
        highlight: "Spring Physics • Shared Layouts • Gestures"
      },
      {
        name: "Redux",
        tagline: "Predictable Centralized State",
        description: "Manages deterministic application state with Redux Toolkit (RTK), slice architecture, RTK Query data caching, and immutable unidirectional pipelines.",
        highlight: "Redux Toolkit • RTK Query • Normalized Caching"
      }
    ]
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        tagline: "Event-Driven Asynchronous Runtime",
        description: "Engineers high-throughput backend services, event-driven microservices, file stream pipelines, and non-blocking I/O server architectures.",
        highlight: "Event Loop • Stream Processing • Microservices"
      },
      {
        name: "Express",
        tagline: "Minimalist REST Framework",
        description: "Builds modular routing systems, customized middleware chains, secure JWT authentication, and structured error-handling layers.",
        highlight: "Middleware • JWT Auth Guards • Route Handlers"
      },
      {
        name: "RESTful APIs",
        tagline: "Idempotent Contract Design",
        description: "Designs intuitive, hypermedia-ready REST APIs with strict HTTP status semantics, payload validation, token rate-limiting, and clear documentation.",
        highlight: "HTTP Semantics • Rate Limiting • Schema Validation"
      },
      {
        name: "GraphQL",
        tagline: "Type-Safe Client-Driven Queries",
        description: "Structures declarative schemas, resolvers, mutations, and query batches that eradicate over-fetching and streamline client-server data contracts.",
        highlight: "Schema Stitching • Resolvers • Apollo Client"
      }
    ]
  },
  {
    category: "Database & Tools",
    items: [
      {
        name: "PostgreSQL",
        tagline: "Relational Integrity & Complex SQL",
        description: "Architects relational schemas, indexes, ACID-compliant transactions, foreign key constraints, and optimized joins for enterprise data reliability.",
        highlight: "ACID Transactions • Indexing • Relational Design"
      },
      {
        name: "MongoDB",
        tagline: "Document Modeling & Aggregations",
        description: "Designs flexible JSON document structures, high-performance aggregation pipelines, index strategies, and multi-tenant database clusters.",
        highlight: "Document Schema • Aggregations • Indexing"
      },
      {
        name: "Git",
        tagline: "Distributed Version Control",
        description: "Maintains pristine commit histories through interactive rebasing, feature branching workflows, conflict resolution, and atomic commits.",
        highlight: "Git Flow • Interactive Rebase • Atomic Commits"
      },
      {
        name: "GitHub",
        tagline: "CI/CD & Collaborative Workflows",
        description: "Sets up automated GitHub Actions pipelines, pull request reviews, repository permissions, semantic releases, and collaborative quality checks.",
        highlight: "GitHub Actions • CI/CD • Code Reviews"
      },
      {
        name: "Docker",
        tagline: "Containerization & Environment Parity",
        description: "Builds lightweight multi-stage Dockerfiles, docker-compose multi-service environments, and guarantees identical dev-to-prod execution.",
        highlight: "Multi-Stage Builds • Docker Compose • Isolation"
      },
      {
        name: "Vercel",
        tagline: "Serverless Edge & Global CDN",
        description: "Manages automated zero-config deployments, preview branches, serverless functions, edge routing rules, and real-time performance analytics.",
        highlight: "Edge Network • Serverless Functions • Instant Deploy"
      }
    ]
  }
];
