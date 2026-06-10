import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AboutSection } from "@/components/AboutSection";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { ProjectVisual } from "@/components/ProjectVisual";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  capabilities,
  experience,
  processSteps,
  projects,
  socialLinks,
} from "@/data/portfolio";

const sectionClass = "scroll-mt-24 border-t border-white/[0.07] py-20 md:py-28";

export default function Portfolio() {
  return (
    <main>
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />
        <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge
              variant="outline"
              className="mb-7 gap-2 px-3 py-1 font-mono tracking-[0.14em] uppercase"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
              </span>
              Available for opportunities
            </Badge>

            <p className="mb-5 text-sm font-medium tracking-[0.14em] text-zinc-400 uppercase">
              AI & Full-Stack Developer
            </p>
            <h1 className="max-w-3xl text-[clamp(3.5rem,8.5vw,7.4rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-balance text-white">
              I build AI systems{" "}
              <span className="text-zinc-400">that ship.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              I&apos;m Shivam, a developer turning complex AI workflows into
              clear, useful products with Python, Next.js, and thoughtful
              engineering.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#work">
                  View selected work
                  <ArrowDownRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={socialLinks.email}>
                  Start a conversation
                  <ArrowRight />
                </a>
              </Button>
              <a
                className="social-button"
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                className="social-button"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </div>
          </div>

          <AnimateOnScroll className="lg:justify-self-end">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-8 -z-10 rounded-full bg-violet-500/10 blur-3xl" />
              <Card className="rotate-[1.5deg] gap-0 border-white/10 bg-zinc-900/80 p-2 shadow-2xl shadow-black/35 backdrop-blur-xl">
                <div className="rounded-[1.25rem] border border-white/[0.08] bg-zinc-950/85 p-5">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="size-2 rounded-full bg-red-400/70" />
                      <span className="size-2 rounded-full bg-amber-300/70" />
                      <span className="size-2 rounded-full bg-emerald-300/70" />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.18em] text-zinc-600 uppercase">
                      build_process.ts
                    </span>
                  </div>
                  <div className="space-y-5">
                    {processSteps.map(({ label, Icon }, index) => (
                      <div
                        key={label}
                        className="group flex items-center gap-4"
                      >
                        <span className="font-mono text-xs text-zinc-600">
                          0{index + 1}
                        </span>
                        <div className="grid size-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-zinc-400 transition-colors group-hover:border-amber-300/20 group-hover:text-amber-200">
                          <Icon className="size-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-zinc-200">
                            {label}
                          </p>
                          <div className="mt-2 h-px bg-gradient-to-r from-white/15 to-transparent" />
                        </div>
                        <CheckCircle2 className="size-4 text-emerald-400/80" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 rounded-xl border border-amber-300/15 bg-amber-300/[0.055] px-4 py-3 font-mono text-xs text-amber-200">
                    status: ready to ship
                  </div>
                </div>
              </Card>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-zinc-900/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                <p className="text-[10px] tracking-[0.15em] text-zinc-500 uppercase">
                  Based in
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm font-medium text-white">
                  <MapPin className="size-3.5 text-amber-300" /> Pune, India
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <a
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-zinc-600 uppercase md:flex"
        >
          Scroll to explore <ArrowDownRight className="size-3.5" />
        </a>
      </section>

      <AboutSection />

      <div className="mx-auto max-w-[76rem] px-5 sm:px-8">
        <section id="experience" className={sectionClass}>
          <AnimateOnScroll>
            <SectionHeading
              number="02"
              eyebrow="Experience"
              title="Experience shaped by building, shipping, and learning."
              description="My current role brings AI and full-stack engineering together. My education built the technical foundation underneath it."
            />
          </AnimateOnScroll>
          <div className="grid gap-5 lg:grid-cols-[1.45fr_0.75fr] lg:items-start">
            <AnimateOnScroll>
              <Card className="gap-0 overflow-hidden border-white/10 bg-white/[0.035]">
                <div className="flex flex-col gap-5 border-b border-white/[0.08] p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-amber-300/20 bg-amber-300/[0.07] text-amber-200">
                      <BriefcaseBusiness className="size-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-medium text-amber-200">
                          {experience[0].place}
                        </p>
                        <Badge variant="outline">Current role</Badge>
                      </div>
                      <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-[1.75rem]">
                        {experience[0].title}
                      </h3>
                    </div>
                  </div>
                  <p className="shrink-0 font-mono text-xs leading-6 text-zinc-400">
                    {experience[0].date}
                  </p>
                </div>
                <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-sm font-medium text-zinc-200">
                      Role overview
                    </p>
                    <p className="mt-3 text-[15px] leading-7 text-zinc-300">
                      {experience[0].description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience[0].tools.map((tool) => (
                        <Badge key={tool}>{tool}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/[0.07] bg-black/15 p-5 sm:p-6">
                    <p className="text-sm font-medium text-zinc-200">
                      Selected contributions
                    </p>
                    <ul className="mt-5 grid gap-4">
                      {experience[0].highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-[15px] leading-6 text-zinc-300"
                        >
                          <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-300" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <Card className="gap-0 p-6 sm:p-7">
                <div className="flex items-center gap-3 border-b border-white/[0.08] pb-5">
                  <div className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300">
                    <GraduationCap className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Education</p>
                    <p className="mt-0.5 text-xs text-zinc-400">
                      Technical foundation
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-white/[0.08]">
                  {experience.slice(1).map((item) => (
                    <article key={item.title} className="py-6 last:pb-0">
                      <p className="font-mono text-xs text-amber-200">
                        {item.date}
                      </p>
                      <h3 className="mt-3 text-base font-semibold leading-6 text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">
                        {item.place}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-zinc-400">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </Card>
            </AnimateOnScroll>
          </div>
        </section>

        <section id="capabilities" className={sectionClass}>
          <AnimateOnScroll>
            <SectionHeading
              number="03"
              eyebrow="Capabilities"
              title="Focused capabilities, connected end to end."
              description="My best work combines model behavior, product thinking, and dependable software rather than treating them as separate concerns."
            />
          </AnimateOnScroll>
          <div className="grid gap-5 lg:grid-cols-3">
            {capabilities.map(
              ({ number, title, description, Icon, skills }, index) => (
                <AnimateOnScroll key={title} delay={index * 90}>
                  <Card className="h-full gap-0 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/15 hover:bg-white/[0.04]">
                    <div className="flex items-center justify-between">
                      <div className="grid size-11 place-items-center rounded-2xl border border-amber-300/15 bg-amber-300/[0.06] text-amber-200">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-xs text-zinc-400">
                        {number}
                      </span>
                    </div>
                    <h3 className="mt-9 text-xl font-semibold tracking-[-0.025em] text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-zinc-300">
                      {description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.07] pt-5">
                      {skills.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  </Card>
                </AnimateOnScroll>
              ),
            )}
          </div>
        </section>

        <section id="work" className={sectionClass}>
          <AnimateOnScroll>
            <SectionHeading
              number="04"
              eyebrow="Selected work"
              title="Projects built around real product questions."
              description="A selection of systems and interfaces that show how I approach retrieval, agentic workflows, and interactive frontend work."
            />
          </AnimateOnScroll>
          <div className="space-y-6">
            {projects.map(
              (
                {
                  number,
                  title,
                  eyebrow,
                  description,
                  outcome,
                  tags,
                  Icon,
                  visual,
                },
                index,
              ) => (
                <AnimateOnScroll key={title} delay={index * 80}>
                  <Card className="grid gap-0 overflow-hidden p-0 transition-colors hover:border-white/15 lg:grid-cols-[0.95fr_1.05fr]">
                    <ProjectVisual type={visual} />
                    <div className="flex flex-col p-7 sm:p-9">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{eyebrow}</Badge>
                        <span className="font-mono text-xs text-zinc-400">
                          {number}
                        </span>
                      </div>
                      <div className="mt-10 flex items-start gap-4">
                        <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300">
                          <Icon className="size-4.5" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">
                            {title}
                          </h3>
                          <p className="mt-3 text-[15px] leading-7 text-zinc-300">
                            {description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-8 border-l border-amber-300/30 pl-4">
                        <p className="text-xs font-medium tracking-[0.12em] text-zinc-400 uppercase">
                          What I built
                        </p>
                        <p className="mt-2 text-[15px] leading-6 text-zinc-200">
                          {outcome}
                        </p>
                      </div>
                      <div className="mt-auto flex flex-wrap gap-2 pt-8">
                        {tags.map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </AnimateOnScroll>
              ),
            )}
          </div>
        </section>

        <section id="contact" className={`${sectionClass} pb-10`}>
          <AnimateOnScroll>
            <Card className="relative isolate overflow-hidden border-amber-300/10 bg-amber-300/[0.035] px-6 py-12 sm:px-10 md:px-14 md:py-16">
              <div className="absolute -right-20 -top-28 -z-10 size-80 rounded-full bg-amber-300/10 blur-3xl" />
              <Badge
                variant="outline"
                className="mb-7 font-mono tracking-[0.16em] uppercase"
              >
                05 / Contact
              </Badge>
              <div className="grid gap-9 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <h2 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-balance text-white sm:text-6xl">
                    Have a useful problem worth solving?
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300">
                    I&apos;m open to AI engineering and full-stack opportunities
                    where thoughtful execution matters.
                  </p>
                </div>
                <Button asChild size="lg">
                  <a href={socialLinks.email}>
                    <Mail />
                    Say hello
                    <ArrowRight />
                  </a>
                </Button>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.08] pt-6 text-sm text-zinc-400">
                <a className="footer-link" href={socialLinks.email}>
                  Email <ArrowRight />
                </a>
                <a
                  className="footer-link"
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ExternalLink />
                </a>
                <a
                  className="footer-link"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ExternalLink />
                </a>
              </div>
            </Card>
          </AnimateOnScroll>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/[0.07] py-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} Shivam Ingle. Built with
            Next.js and ShadCN UI.
          </p>
          <a
            className="inline-flex items-center gap-2 transition-colors hover:text-zinc-300"
            href="#top"
          >
            Back to top <ArrowDownRight className="size-3 rotate-180" />
          </a>
        </footer>
      </div>
    </main>
  );
}
