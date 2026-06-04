import {
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Brain,
  Layers,
  Database,
  Wrench,
  Download,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const Github = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const CodeSnippet = () => (
  <div className="relative rounded-2xl border border-zinc-700/40 bg-zinc-900/90 backdrop-blur-md overflow-hidden shadow-2xl shadow-indigo-950/50 font-mono text-xs">
    <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/70 bg-zinc-900/80">
      <span className="w-3 h-3 rounded-full bg-red-500/80" />
      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <span className="w-3 h-3 rounded-full bg-green-500/80" />
      <span className="ml-3 text-zinc-500 text-xs">rag_pipeline.py</span>
    </div>
    <div className="p-5 leading-6 space-y-0">
      <div>
        <span className="text-violet-400">from</span>{" "}
        <span className="text-indigo-300">langchain</span>{" "}
        <span className="text-violet-400">import</span>{" "}
        <span className="text-zinc-200">ChatOpenAI</span>
      </div>
      <div>
        <span className="text-violet-400">from</span>{" "}
        <span className="text-indigo-300">qdrant_client</span>{" "}
        <span className="text-violet-400">import</span>{" "}
        <span className="text-zinc-200">QdrantClient</span>
      </div>
      <div className="h-3" />
      <div>
        <span className="text-zinc-500"># Initialize retrieval pipeline</span>
      </div>
      <div>
        <span className="text-sky-400">llm</span>{" "}
        <span className="text-zinc-500">=</span>{" "}
        <span className="text-emerald-400">ChatOpenAI</span>
        <span className="text-zinc-400">(</span>
      </div>
      <div>
        &nbsp;&nbsp;<span className="text-orange-300">model</span>
        <span className="text-zinc-500">=</span>
        <span className="text-amber-300">&quot;gpt-4o&quot;</span>
        <span className="text-zinc-400">,</span>
      </div>
      <div>
        &nbsp;&nbsp;<span className="text-orange-300">temperature</span>
        <span className="text-zinc-500">=</span>
        <span className="text-purple-400">0</span>
        <span className="text-zinc-400">,</span>
      </div>
      <div>
        <span className="text-zinc-400">)</span>
      </div>
      <div className="h-3" />
      <div>
        <span className="text-sky-400">chain</span>{" "}
        <span className="text-zinc-500">=</span>{" "}
        <span className="text-emerald-400">RetrievalQA</span>
        <span className="text-zinc-400">.</span>
        <span className="text-emerald-300">from_chain_type</span>
        <span className="text-zinc-400">(</span>
      </div>
      <div>
        &nbsp;&nbsp;<span className="text-orange-300">llm</span>
        <span className="text-zinc-500">=</span>
        <span className="text-sky-400">llm</span>
        <span className="text-zinc-400">,</span>
      </div>
      <div>
        &nbsp;&nbsp;<span className="text-orange-300">retriever</span>
        <span className="text-zinc-500">=</span>
        <span className="text-sky-400">vs</span>
        <span className="text-zinc-400">.</span>
        <span className="text-emerald-300">as_retriever</span>
        <span className="text-zinc-400">(),</span>
      </div>
      <div>
        <span className="text-zinc-400">)</span>
      </div>
      <div className="h-3" />
      <div>
        <span className="text-violet-400">return</span>{" "}
        <span className="text-sky-400">chain</span>
        <span className="text-zinc-400">.</span>
        <span className="text-emerald-300">invoke</span>
        <span className="text-zinc-400">(</span>
        <span className="text-sky-400">query</span>
        <span className="text-zinc-400">)</span>
      </div>
    </div>
  </div>
);

const SectionLabel = ({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-12">
    <p className="text-xs font-mono text-indigo-500 tracking-[0.2em] uppercase mb-3">
      {number} ──────────────────
    </p>
    <h3 className="text-4xl font-black text-white">{title}</h3>
    {subtitle && (
      <p className="mt-3 text-zinc-400 text-base max-w-lg">{subtitle}</p>
    )}
  </div>
);

const SKILLS = [
  {
    category: "AI & LLM",
    Icon: Brain,
    gradient: "from-indigo-500 to-violet-600",
    badgeCls:
      "bg-indigo-950/60 border-indigo-800/50 text-indigo-300 hover:bg-indigo-900/60",
    skills: [
      "Python",
      "LangChain",
      "LlamaIndex",
      "RAG Systems",
      "Prompt Engineering",
      "Qdrant Vector DB",
    ],
  },
  {
    category: "Frontend",
    Icon: Layers,
    gradient: "from-violet-500 to-purple-600",
    badgeCls:
      "bg-violet-950/60 border-violet-800/50 text-violet-300 hover:bg-violet-900/60",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
    ],
  },
  {
    category: "Backend & Database",
    Icon: Database,
    gradient: "from-purple-500 to-fuchsia-600",
    badgeCls:
      "bg-purple-950/60 border-purple-800/50 text-purple-300 hover:bg-purple-900/60",
    skills: ["Node.js", "Prisma ORM", "PostgreSQL", "RESTful APIs", "Qdrant"],
  },
  {
    category: "Tools & Workflows",
    Icon: Wrench,
    gradient: "from-sky-500 to-indigo-600",
    badgeCls:
      "bg-sky-950/60 border-sky-800/50 text-sky-300 hover:bg-sky-900/60",
    skills: ["Git/GitHub", "VS Code", "Vercel", "Railway", "CI/CD"],
  },
];

const PROJECTS = [
  {
    title: "Interactive Document Parser",
    description:
      "An intelligent system that extracts raw markdown structures from PDF documents and embeds them into a vector database, allowing users to contextually chat with massive documents in real-time.",
    tags: ["Python", "LangChain", "Qdrant"],
    Icon: Brain,
    headerGradient: "from-indigo-600/25 via-indigo-900/15 to-zinc-900",
    iconBg: "bg-indigo-500/15 border border-indigo-500/25",
    iconColor: "text-indigo-400",
    shadowColor: "hover:shadow-indigo-950/60",
    github: "#",
  },
  {
    title: "Natural Language SQL Agent",
    description:
      "A Python-based AI agent that connects directly to a PostgreSQL database, intelligently visualizes the schema context, and allows users to query complex analytics using plain English.",
    tags: ["LlamaIndex", "PostgreSQL", "Agentic AI"],
    Icon: Terminal,
    headerGradient: "from-violet-600/25 via-violet-900/15 to-zinc-900",
    iconBg: "bg-violet-500/15 border border-violet-500/25",
    iconColor: "text-violet-400",
    shadowColor: "hover:shadow-violet-950/60",
    github: "#",
  },
  {
    title: "Parallax Travelogue Interface",
    description:
      "A highly visual, frontend-focused Next.js web application utilizing scroll-linked parallax animations to dynamically showcase a detailed travel itinerary across historic sites in India.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    Icon: MapPin,
    headerGradient: "from-emerald-600/25 via-emerald-900/15 to-zinc-900",
    iconBg: "bg-emerald-500/15 border border-emerald-500/25",
    iconColor: "text-emerald-400",
    shadowColor: "hover:shadow-emerald-950/60",
    github: "#",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6">
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-16 pb-16 overflow-hidden">
        {/* Gradient mesh */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-indigo-600/18 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] bg-violet-600/14 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 bg-indigo-800/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center">
          {/* Left — Text */}
          <div className="space-y-7">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-800/40 bg-emerald-950/25 px-4 py-1.5 text-sm font-medium text-emerald-300 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Available for new opportunities
            </div>

            {/* Name */}
            <div className="space-y-2">
              <p className="text-lg md:text-xl text-zinc-500 font-medium tracking-wide">
                Hello, I&apos;m
              </p>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight bg-gradient-to-br from-indigo-200 via-violet-300 to-indigo-400 bg-clip-text text-transparent leading-none pb-1">
                Shivam
                <br />
                Ingle
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-indigo-500" />
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-200">
                AI &amp; Full-Stack Developer
              </h2>
            </div>

            <p className="text-zinc-400 max-w-xl leading-relaxed">
              Developer at the intersection of AI and the web — building LLM
              pipelines, RAG systems, and production-grade full-stack
              applications with Python, React, and Next.js.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                asChild
                className="bg-indigo-600 hover:bg-indigo-500 text-white gap-2 h-11 px-6 rounded-xl shadow-lg shadow-indigo-950/60"
              >
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-zinc-700 hover:bg-zinc-900 text-zinc-300 gap-2 h-11 px-5 rounded-xl"
              >
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-zinc-800 hover:bg-zinc-900 text-zinc-400 gap-2 h-11 px-5 rounded-xl"
              >
                <a
                  href="https://github.com/shivamingle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-zinc-800 hover:bg-zinc-900 text-zinc-400 gap-2 h-11 px-5 rounded-xl"
              >
                <a
                  href="https://linkedin.com/in/shivam-ingle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Right — Code block */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-6 bg-indigo-600/8 rounded-3xl blur-2xl" />
              <div className="absolute -inset-2 bg-violet-600/5 rounded-3xl blur-xl" />
              <CodeSnippet />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-xs tracking-[0.2em] uppercase font-mono">
            scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </section>

      {/* ─── ABOUT ─────────────────────────────────────────────── */}
      <section
        id="about"
        className="scroll-mt-20 border-t border-zinc-800/50 pt-24 pb-20"
      >
        <AnimateOnScroll>
          <SectionLabel number="01" title="My Journey" />
          <div className="grid md:grid-cols-3 gap-10">
            {/* Stats */}
            <div className="md:col-span-1 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/50 to-zinc-900/50 border border-indigo-800/30 text-center">
                  <p className="text-5xl font-black bg-gradient-to-br from-indigo-300 to-violet-400 bg-clip-text text-transparent leading-none">
                    1+
                  </p>
                  <p className="text-xs text-zinc-500 mt-2 font-semibold uppercase tracking-wider">
                    Years Exp.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/50 to-zinc-900/50 border border-indigo-800/30 text-center">
                  <p className="text-5xl font-black bg-gradient-to-br from-indigo-300 to-violet-400 bg-clip-text text-transparent leading-none">
                    5+
                  </p>
                  <p className="text-xs text-zinc-500 mt-2 font-semibold uppercase tracking-wider">
                    Projects
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 space-y-3">
                <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
                  <MapPin className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span>Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
                  <Briefcase className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span>DroitCloud · Full-Stack & AI Dev</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2 space-y-5 text-zinc-400 leading-relaxed">
              <p className="font-medium text-zinc-100 text-lg leading-relaxed border-l-2 border-indigo-500 pl-5 py-1">
                A developer who builds where AI meets the web — from LLM
                classification pipelines to full-stack applications that ship.
              </p>
              <p>
                I&apos;m a Full-Stack and AI Developer at DroitCloud, Pune,
                where I build Python-based LLM pipelines, RAG systems, and AI
                agents professionally. My work spans the full stack — from
                prompt engineering and vector database integrations to Next.js
                applications with real-world production deployments.
              </p>
              <p>
                I care about writing clean, maintainable code and designing
                systems that are both technically sound and actually useful.
                Whether it&apos;s a classification pipeline processing thousands
                of records or a responsive web interface, I hold both to the
                same standard.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ─── EXPERIENCE & EDUCATION ────────────────────────────── */}
      <section
        id="experience"
        className="scroll-mt-20 border-t border-zinc-800/50 pt-24 pb-20"
      >
        <AnimateOnScroll>
          <SectionLabel number="02" title="Experience & Education" />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-indigo-500/60 before:via-zinc-700/40 before:to-transparent">
            {/* Current Job */}
            <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-indigo-500 bg-indigo-950 text-indigo-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg shadow-indigo-500/25 mt-1">
                <Briefcase className="h-4 w-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-indigo-700/40 bg-indigo-950/15 hover:bg-indigo-950/25 hover:border-indigo-600/50 hover:shadow-xl hover:shadow-indigo-950/40 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Junior Software Developer
                    </h4>
                    <p className="text-zinc-400 text-sm mt-0.5">
                      DroitCloud &nbsp;·&nbsp; July 2024 – Present
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                    Current
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 text-zinc-400 text-sm space-y-2">
                  <li>
                    Built Python-based LLM pipelines for document classification
                    and automated data extraction using LangChain, LlamaIndex,
                    and Qdrant.
                  </li>
                  <li>
                    Designed and iterated prompt engineering workflows with
                    structured output schemas and multi-stage validation logic.
                  </li>
                  <li>
                    Developed and maintained Next.js full-stack applications
                    with responsive UI, REST/GraphQL API integrations, and
                    Prisma + PostgreSQL.
                  </li>
                  <li>
                    Implemented authentication using NextAuth and Clerk;
                    deployed on Vercel and Railway.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-800/40">
                  {[
                    "Python",
                    "LangChain",
                    "Next.js",
                    "PostgreSQL",
                    "Vercel",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* B.E. */}
            <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 mt-1">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700/60 transition-all duration-300">
                <h4 className="text-base font-bold text-white mb-1">
                  Bachelor&apos;s in Computer Science &amp; Engineering
                </h4>
                <p className="text-sm text-zinc-400 mb-2">
                  D.Y. Patil College of Engineering &amp; Technology, Pune
                  &nbsp;·&nbsp; 2021 – 2024
                </p>
                <p className="text-zinc-500 text-sm">
                  Specialized in modern web development and AI/ML technologies.
                </p>
              </div>
            </div>

            {/* Diploma */}
            <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 mt-1">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700/60 transition-all duration-300">
                <h4 className="text-base font-bold text-white mb-1">
                  Diploma in Computer Engineering
                </h4>
                <p className="text-sm text-zinc-400 mb-2">
                  Shri Shivaji Polytechnic Institute, Parbhani &nbsp;·&nbsp;
                  2018 – 2021
                </p>
                <p className="text-zinc-500 text-sm">
                  Foundation in computer science and programming fundamentals.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ─── SKILLS ────────────────────────────────────────────── */}
      <section
        id="skills"
        className="scroll-mt-20 border-t border-zinc-800/50 pt-24 pb-20"
      >
        <AnimateOnScroll>
          <SectionLabel
            number="03"
            title="Technical Arsenal"
            subtitle="The tools and technologies I work with daily."
          />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map(({ category, Icon, gradient, badgeCls, skills }, i) => (
            <AnimateOnScroll key={category} delay={i * 80}>
              <Card className="bg-zinc-900/25 border-zinc-800/60 text-white relative overflow-hidden h-full hover:bg-zinc-900/45 hover:border-zinc-700/60 transition-all duration-300 rounded-2xl group">
                {/* Top gradient bar */}
                <div
                  className={`h-0.5 w-full bg-gradient-to-r ${gradient} opacity-70 group-hover:opacity-100 transition-opacity`}
                />
                <CardHeader className="pb-3 pt-5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`p-1.5 rounded-lg bg-gradient-to-br ${gradient} opacity-80`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <CardTitle className="text-sm font-semibold text-zinc-200">
                      {category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-2.5 py-1 rounded-lg border text-xs font-medium transition-colors ${badgeCls}`}
                    >
                      {skill}
                    </span>
                  ))}
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ─── PROJECTS ──────────────────────────────────────────── */}
      <section
        id="projects"
        className="scroll-mt-20 border-t border-zinc-800/50 pt-24 pb-20"
      >
        <AnimateOnScroll>
          <SectionLabel
            number="04"
            title="Featured Projects"
            subtitle="A selection of tools, agents, and interfaces I've built."
          />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map(
            (
              {
                title,
                description,
                tags,
                Icon,
                headerGradient,
                iconBg,
                iconColor,
                shadowColor,
                github,
              },
              i,
            ) => (
              <AnimateOnScroll key={title} delay={i * 100}>
                <Card
                  className={`bg-zinc-900/30 border-zinc-800/60 flex flex-col overflow-hidden group hover:-translate-y-1.5 hover:shadow-2xl ${shadowColor} transition-all duration-300 h-full rounded-2xl`}
                >
                  {/* Project header */}
                  <div
                    className={`h-40 bg-gradient-to-br ${headerGradient} relative flex items-center justify-center overflow-hidden`}
                  >
                    {/* Subtle dot grid overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.07]"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <div
                      className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center backdrop-blur-sm shadow-lg`}
                    >
                      <Icon className={`h-8 w-8 ${iconColor}`} />
                    </div>
                    <a
                      href={github}
                      className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-all p-2 rounded-xl hover:bg-zinc-800/60 backdrop-blur-sm"
                      aria-label="View project"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <CardHeader className="pt-5 pb-2">
                    <CardTitle className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-zinc-400 text-sm leading-relaxed mt-1.5">
                      {description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto pt-2 flex flex-wrap gap-1.5 pb-5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-lg border border-zinc-700/60 text-zinc-400 text-xs font-medium bg-zinc-800/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ),
          )}
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────────── */}
      <section
        id="contact"
        className="scroll-mt-20 border-t border-zinc-800/50 pt-24 pb-28"
      >
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — CTA */}
          <AnimateOnScroll>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono text-indigo-500 tracking-[0.2em] uppercase mb-3">
                  05 ──────────────────
                </p>
                <h3 className="text-4xl font-black text-white leading-tight">
                  Let&apos;s Build
                  <br />
                  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    Something.
                  </span>
                </h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Currently open for new opportunities. Whether you have a project
                in mind, a question, or just want to say hi — I&apos;ll get back
                to you!
              </p>
              <Button
                asChild
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-500 text-white gap-2 h-12 px-7 rounded-xl shadow-lg shadow-indigo-950/50"
              >
                <a href="mailto:ingleshivam@gmail.com">
                  <Mail className="h-5 w-5" />
                  Say Hello
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Right — Contact cards */}
          <AnimateOnScroll delay={150}>
            <div className="space-y-2.5">
              {[
                {
                  href: "mailto:ingleshivam@gmail.com",
                  icon: <Mail className="h-5 w-5 text-indigo-400" />,
                  iconBg: "bg-indigo-950/60 border-indigo-800/40",
                  label: "Email",
                  value: "ingleshivam@gmail.com",
                },
                {
                  href: "https://github.com/shivamingle",
                  icon: <Github className="h-5 w-5 text-zinc-300" />,
                  iconBg: "bg-zinc-800/60 border-zinc-700/40",
                  label: "GitHub",
                  value: "github.com/shivamingle",
                },
                {
                  href: "https://linkedin.com/in/shivam-ingle",
                  icon: <Linkedin className="h-5 w-5 text-blue-400" />,
                  iconBg: "bg-blue-950/60 border-blue-800/40",
                  label: "LinkedIn",
                  value: "linkedin.com/in/shivam-ingle",
                },
              ].map(({ href, icon, iconBg, label, value }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-indigo-800/40 hover:shadow-md transition-all duration-200 group"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${iconBg} border flex items-center justify-center shrink-0`}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-zinc-300 group-hover:text-white transition-colors font-medium">
                      {value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/20">
                <div className="w-11 h-11 rounded-xl bg-zinc-800/60 border border-zinc-700/40 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-zinc-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-0.5">
                    Location
                  </p>
                  <p className="text-sm text-zinc-300 font-medium">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-800/50 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-bold text-base">
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Shivam Ingle
            </span>
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} · Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/shivamingle"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors text-xs font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shivam-ingle"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors text-xs font-medium"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ingleshivam@gmail.com"
            className="hover:text-white transition-colors text-xs font-medium"
          >
            Email
          </a>
        </div>
      </footer>
    </main>
  );
}
