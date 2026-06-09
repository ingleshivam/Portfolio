import {
  BrainCircuit,
  Code2,
  Database,
  FileSearch,
  Layers3,
  Map,
  Network,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

export const socialLinks = {
  email: "mailto:ingleshivam@gmail.com",
  github: "https://github.com/shivamingle",
  linkedin: "https://linkedin.com/in/shivam-ingle",
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
    title: "Interactive Document Parser",
    eyebrow: "AI knowledge system",
    description:
      "Transforms dense PDF documents into searchable knowledge, then answers questions with grounded context instead of guesswork.",
    outcome:
      "Designed the full retrieval flow: extraction, chunking, embeddings, vector search, and conversational answers.",
    tags: ["Python", "LangChain", "Qdrant"],
    Icon: FileSearch,
    accent: "violet",
    visual: "pipeline",
  },
  {
    number: "02",
    title: "Natural Language SQL Agent",
    eyebrow: "Agentic analytics",
    description:
      "Lets teams explore a PostgreSQL database in plain English while preserving schema context and readable query results.",
    outcome:
      "Connected language models to structured data through schema-aware prompting and controlled SQL generation.",
    tags: ["LlamaIndex", "PostgreSQL", "Agentic AI"],
    Icon: TerminalSquare,
    accent: "amber",
    visual: "terminal",
  },
  {
    number: "03",
    title: "Parallax Travelogue",
    eyebrow: "Interactive web experience",
    description:
      "A visual travel itinerary that uses scroll-linked storytelling to guide visitors through historic destinations across India.",
    outcome:
      "Built a responsive, motion-led interface with a deliberate content rhythm across desktop and mobile.",
    tags: ["Next.js", "Tailwind CSS", "Motion"],
    Icon: Map,
    accent: "sky",
    visual: "map",
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
    title: "B.E. in Computer Science & Engineering",
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
