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
import { Badge } from "@/components/ui/badge";
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

const SKILLS = [
  {
    category: "AI & LLM",
    Icon: Brain,
    iconColor: "text-indigo-400",
    gradient: "from-indigo-500 to-violet-500",
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
    iconColor: "text-violet-400",
    gradient: "from-violet-500 to-purple-500",
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
    iconColor: "text-purple-400",
    gradient: "from-purple-500 to-fuchsia-500",
    skills: ["Node.js", "Prisma ORM", "PostgreSQL", "RESTful APIs", "Qdrant"],
  },
  {
    category: "Tools & Workflows",
    Icon: Wrench,
    iconColor: "text-sky-400",
    gradient: "from-sky-500 to-indigo-500",
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
    headerGradient: "from-indigo-950/80 via-indigo-900/30 to-zinc-900",
    iconBg: "bg-indigo-500/20",
    iconColor: "text-indigo-400",
    github: "#",
  },
  {
    title: "Natural Language SQL Agent",
    description:
      "A Python-based AI agent that connects directly to a PostgreSQL database, intelligently visualizes the schema context, and allows users to query complex analytics using plain English.",
    tags: ["LlamaIndex", "PostgreSQL", "Agentic AI"],
    Icon: Terminal,
    headerGradient: "from-violet-950/80 via-violet-900/30 to-zinc-900",
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
    github: "#",
  },
  {
    title: "Parallax Travelogue Interface",
    description:
      "A highly visual, frontend-focused Next.js web application utilizing scroll-linked parallax animations to dynamically showcase a detailed travel itinerary across historic sites in India.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    Icon: MapPin,
    headerGradient: "from-emerald-950/80 via-emerald-900/30 to-zinc-900",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    github: "#",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6">
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex flex-col justify-center pt-16 pb-24 space-y-6 overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[650px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-10 w-72 h-72 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

        {/* Status badge */}
        <div className="inline-flex items-center rounded-full border border-indigo-800/60 bg-indigo-950/40 px-3 py-1 text-sm font-medium text-indigo-300 w-fit">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Heading */}
        <div className="space-y-1">
          <p className="text-xl md:text-2xl text-zinc-400 font-medium">
            Hello, I&apos;m
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent leading-none pb-2">
            Shivam Ingle
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-300">
          AI &amp; Full-Stack Developer
        </h2>

        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Developer at the intersection of AI and the web — building LLM
          pipelines, RAG systems, and production-grade full-stack applications
          with Python, React, and Next.js.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Button
            asChild
            className="bg-indigo-600 hover:bg-indigo-500 text-white gap-2"
          >
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-zinc-700 hover:bg-zinc-900 text-zinc-300 gap-2"
          >
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-zinc-800 hover:bg-zinc-900 text-zinc-400 gap-2"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-zinc-800 hover:bg-zinc-900 text-zinc-400 gap-2"
          >
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600">
          <span className="text-xs tracking-widest uppercase">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </section>

      {/* ─── ABOUT ─────────────────────────────────────────────── */}
      <section
        id="about"
        className="scroll-mt-20 border-t border-zinc-800 pt-20 pb-20"
      >
        <AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Stats column */}
            <div className="md:col-span-1 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white">My Journey</h3>
                <div className="mt-2 h-1 w-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40">
                  <p className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    1+
                  </p>
                  <p className="text-xs text-zinc-400 mt-1 font-medium">
                    Years Exp.
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40">
                  <p className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    5+
                  </p>
                  <p className="text-xs text-zinc-400 mt-1 font-medium">
                    Projects
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <MapPin className="h-4 w-4 text-indigo-400 shrink-0" />
                <span>Pune, India</span>
              </div>
            </div>

            {/* Bio column */}
            <div className="md:col-span-2 space-y-5 text-zinc-400 leading-relaxed text-lg">
              <p className="font-medium text-zinc-200 text-xl">
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
        className="scroll-mt-20 border-t border-zinc-800 pt-20 pb-20"
      >
        <AnimateOnScroll>
          <h3 className="text-3xl font-bold text-white">
            Experience &amp; Education
          </h3>
          <div className="mt-2 mb-12 h-1 w-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
        </AnimateOnScroll>

        {/* Timeline */}
        <AnimateOnScroll delay={100}>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500/50 before:via-zinc-700 before:to-transparent">
            {/* Current Job */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-indigo-700 bg-indigo-950 text-indigo-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg shadow-indigo-950/60">
                <Briefcase className="h-4 w-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-indigo-800/40 bg-indigo-950/20 hover:bg-indigo-950/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      Junior Software Developer
                    </h4>
                    <p className="text-zinc-400 text-sm mt-0.5">
                      DroitCloud &nbsp;·&nbsp; July 2024 – Present
                    </p>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
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
              </div>
            </div>

            {/* B.E. */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                <h4 className="text-lg font-bold text-white mb-1">
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
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                <h4 className="text-lg font-bold text-white mb-1">
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
        className="scroll-mt-20 border-t border-zinc-800 pt-20 pb-20"
      >
        <AnimateOnScroll>
          <h3 className="text-3xl font-bold text-white">Technical Arsenal</h3>
          <div className="mt-2 h-1 w-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
          <p className="mt-4 text-zinc-400 mb-10">
            The tools and technologies I work with daily.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map(({ category, Icon, iconColor, gradient, skills }, i) => (
            <AnimateOnScroll key={category} delay={i * 80}>
              <Card className="bg-zinc-900/30 border-zinc-800 text-white relative overflow-hidden h-full hover:bg-zinc-900/50 transition-colors group">
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradient}`}
                />
                <CardHeader className="pb-3 pt-5">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                    <CardTitle className="text-base font-semibold">
                      {category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 text-xs"
                    >
                      {skill}
                    </Badge>
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
        className="scroll-mt-20 border-t border-zinc-800 pt-20 pb-20"
      >
        <AnimateOnScroll>
          <h3 className="text-3xl font-bold text-white">Featured Projects</h3>
          <div className="mt-2 h-1 w-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
          <p className="mt-4 text-zinc-400 mb-10">
            A selection of tools, agents, and interfaces I&apos;ve built.
          </p>
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
                github,
              },
              i,
            ) => (
              <AnimateOnScroll key={title} delay={i * 100}>
                <Card className="bg-zinc-900/40 border-zinc-800 flex flex-col overflow-hidden group hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/60 transition-all duration-300 h-full">
                  {/* Gradient project header */}
                  <div
                    className={`h-28 bg-gradient-to-br ${headerGradient} relative flex items-center justify-center`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center backdrop-blur-sm`}
                    >
                      <Icon className={`h-7 w-7 ${iconColor}`} />
                    </div>
                    <a
                      href={github}
                      className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-zinc-800/60"
                      aria-label="View project"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <CardHeader className="pt-4">
                    <CardTitle className="text-lg text-white group-hover:text-indigo-400 transition-colors">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-zinc-400 text-sm leading-relaxed mt-1">
                      {description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto pt-0 flex flex-wrap gap-2 pb-5">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-zinc-700 text-zinc-400 text-xs"
                      >
                        {tag}
                      </Badge>
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
        className="scroll-mt-20 border-t border-zinc-800 pt-20 pb-24"
      >
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — CTA */}
          <AnimateOnScroll>
            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-black text-white leading-tight">
                  Let&apos;s Build
                  <br />
                  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    Something.
                  </span>
                </h3>
                <div className="mt-3 h-1 w-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Currently open for new opportunities. Whether you have a project
                in mind, a question, or just want to say hi — I&apos;ll get
                back to you!
              </p>
              <Button
                asChild
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-500 text-white gap-2"
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
            <div className="space-y-3">
              <a
                href="mailto:ingleshivam@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-indigo-800/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Email</p>
                  <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                    ingleshivam@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-indigo-800/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800/60 border border-zinc-700/40 flex items-center justify-center shrink-0">
                  <Github className="h-5 w-5 text-zinc-300" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">GitHub</p>
                  <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                    github.com/shivamingle
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-indigo-800/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center shrink-0">
                  <Linkedin className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">LinkedIn</p>
                  <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                    linkedin.com/in/shivam-ingle
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/60 border border-zinc-700/40 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-zinc-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Location</p>
                  <p className="text-sm text-zinc-300">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-900 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-semibold">
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Shivam Ingle
            </span>
          </p>
          <p>© {new Date().getFullYear()} · Built with Next.js &amp; Tailwind CSS</p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ingleshivam@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </footer>
    </main>
  );
}
