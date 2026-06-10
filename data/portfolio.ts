import {
  BrainCircuit,
  Code2,
  Database,
  FileSearch,
  GitBranch,
  Layers3,
  Map,
  MapPin,
  Network,
  Sparkles,
  TerminalSquare,
  Workflow,
} from "lucide-react";

export const socialLinks = {
  email: "mailto:ingleshivam@gmail.com",
  github: "https://github.com/ingleshivam",
  linkedin: "https://linkedin.com/in/shivam-i-969839163",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const capabilities = [
  {
    number: "01",
    title: "AI systems",
    description:
      "Production-minded LLM workflows that turn unstructured information into useful, reliable product experiences.",
    Icon: BrainCircuit,
    skills: ["RAG", "LangChain", "LlamaIndex", "Prompt systems", "Qdrant"],
  },
  {
    number: "02",
    title: "Product engineering",
    description:
      "Responsive full-stack applications with thoughtful interfaces, maintainable architecture, and real deployment paths.",
    Icon: Layers3,
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Data & infrastructure",
    description:
      "APIs, relational data models, vector search, validation pipelines, and the tooling needed to ship confidently.",
    Icon: Database,
    skills: ["Python", "PostgreSQL", "Prisma", "REST APIs", "CI/CD"],
  },
];

export const projects = [
  {
    number: "01",
    title: "Corrective RAG Pipeline",
    eyebrow: "AI research assistant",
    description:
      "A self-correcting retrieval system that grades retrieved chunks for relevance, rewrites queries on miss, generates grounded answers, and verifies faithfulness — especially for math-heavy documents.",
    outcome:
      "Built the full CRAG loop: hybrid vector search, LLM-based relevance grading, query rewriting, answer generation, and a faithfulness checker that catches formula hallucinations.",
    tags: ["Python", "LangGraph", "Qdrant", "Voyage AI", "Groq", "Next.js"],
    Icon: GitBranch,
    accent: "indigo",
    visual: "graph",
  },
  {
    number: "02",
    title: "AI Travel Planner",
    eyebrow: "multi-agent system",
    description:
      "Orchestrates a team of specialized AI agents to build a complete trip — live transport prices, hotel options, and a day-by-day itinerary — all within the user's budget.",
    outcome:
      "Built the full agent graph: supervisor routing, real-time web scraping for flights/trains/hotels, structured LLM outputs, and budget validation with replan logic.",
    tags: ["Python", "LangGraph", "LangChain", "FastAPI"],
    Icon: MapPin,
    accent: "sky",
    visual: "agents",
  },

  {
    number: "03",
    title: "Visual AI Workflow Builder",
    eyebrow: "No-code AI orchestration",
    description:
      "A node-based canvas for composing AI pipelines — drag, connect, and run LLM chains and full RAG workflows without writing a single line of code.",
    outcome:
      "Built the end-to-end system: React Flow canvas, 10+ typed nodes (DocUpload → Chunker → Embedder → Retriever → LLM), LangGraph backend, and Qdrant vector store.",
    tags: ["React Flow", "LangGraph", "Qdrant", "FastAPI"],
    Icon: Workflow,
    accent: "sky",
    visual: "canvas",
  },
];

export const proofPoints = [
  { value: "1+", label: "year building in production" },
  { value: "5+", label: "projects taken from idea to deployment" },
  { value: "3", label: "core disciplines: AI, web, and data" },
];

export const experience = [
  {
    type: "Work",
    date: "Jul 2024 - Present",
    title: "Junior Software Developer",
    place: "DroitCloud, Pune",
    description:
      "Building AI pipelines and full-stack products across the complete delivery cycle, from technical discovery to production deployment.",
    highlights: [
      "Developed LLM workflows for document classification and structured extraction.",
      "Built Next.js applications backed by APIs, Prisma, and PostgreSQL.",
      "Shipped authentication and deployments with Clerk, NextAuth, Vercel, and Railway.",
    ],
    tools: ["Python", "LangChain", "Next.js", "PostgreSQL"],
    current: true,
  },
  {
    type: "Education",
    date: "2021 - 2024",
    title: "B.Tech. in Computer Science & Engineering",
    place: "D.Y. Patil College of Engineering & Technology",
    description:
      "Focused on modern web development, software engineering, and applied AI/ML technologies.",
    highlights: [],
    tools: [],
  },
  {
    type: "Education",
    date: "2018 - 2021",
    title: "Diploma in Computer Engineering",
    place: "Shri Shivaji Polytechnic Institute",
    description:
      "Built a strong foundation in programming, computer science, and practical problem solving.",
    highlights: [],
    tools: [],
  },
];

export const processSteps = [
  { label: "Understand", Icon: Sparkles },
  { label: "Architect", Icon: Network },
  { label: "Build", Icon: Code2 },
  { label: "Ship", Icon: TerminalSquare },
];
