import {
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const expertise = [
  { label: "AI", detail: "Intelligent systems", Icon: BrainCircuit },
  { label: "Web", detail: "Product engineering", Icon: Layers3 },
  { label: "Data", detail: "Reliable foundations", Icon: Database },
];

const technologies = ["LangGraph", "Next.js", "Python", "PostgreSQL"];

const glassCard =
  "relative isolate h-full overflow-hidden border-white/10 bg-white/[0.035] shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_24px_70px_-36px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-200/20 hover:bg-white/[0.055] hover:shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_28px_80px_-34px_rgba(251,191,36,0.18)]";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-white/[0.07] py-20 md:py-28"
    >
      {/* <div className="pointer-events-none absolute -left-48 top-0 -z-10 size-[34rem] rounded-full bg-amber-300/[0.07] blur-[110px]" /> */}
      {/* <div className="pointer-events-none absolute left-1/3 top-24 -z-10 size-72 rounded-full bg-violet-500/[0.06] blur-[110px]" /> */}

      <div className="mx-auto max-w-[76rem] px-5 sm:px-8">
        <AnimateOnScroll>
          <div className="max-w-4xl">
            <Badge
              variant="outline"
              className="mb-6 font-mono text-[11px] tracking-[0.12em] uppercase"
            >
              01 / About
            </Badge>
            {/* <h2 className="max-w-4xl text-[clamp(2.8rem,6.6vw,6.2rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-2xl text-white">
              I turn ambitious ideas into{" "}
              <span className="text-zinc-400">useful digital products.</span>
            </h2> */}
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-balance text-white sm:text-[3.25rem]">
              I turn ambitious ideas into{" "}
              <span className="text-zinc-400">useful digital products.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              My mission is to make advanced technology feel clear, dependable,
              and genuinely helpful by combining AI engineering with thoughtful
              product design.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-12">
          <AnimateOnScroll className="md:col-span-4" delay={40}>
            <Card className={`${glassCard} min-h-64 p-7 sm:p-8`}>
              <div className="absolute -right-14 -top-14 -z-10 size-40 rounded-full bg-amber-300/10 blur-3xl transition-transform duration-500 group-hover/card:scale-125" />
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-zinc-300">
                  Years of experience
                </span>
                <div className="grid size-10 place-items-center rounded-2xl border border-amber-300/15 bg-amber-300/[0.07] text-amber-200">
                  <Sparkles className="size-4" />
                </div>
              </div>
              <div className="mt-auto pt-12">
                <p className="text-7xl font-semibold leading-none tracking-[-0.075em] text-white sm:text-8xl">
                  3<span className="text-amber-200">+</span>
                </p>
                <p className="mt-4 max-w-52 text-sm leading-6 text-zinc-400">
                  Building and shipping production software across AI and the
                  web.
                </p>
              </div>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll className="md:col-span-4" delay={90}>
            <Card className={`${glassCard} min-h-64 p-7 sm:p-8`}>
              <div className="absolute -bottom-16 -left-12 -z-10 size-44 rounded-full bg-violet-500/10 blur-3xl transition-transform duration-500 group-hover/card:scale-125" />
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-zinc-300">
                  Projects delivered
                </span>
                <div className="grid size-10 place-items-center rounded-2xl border border-violet-300/15 bg-violet-300/[0.07] text-violet-200">
                  <Rocket className="size-4" />
                </div>
              </div>
              <div className="mt-auto pt-12">
                <p className="text-7xl font-semibold leading-none tracking-[-0.075em] text-white sm:text-8xl">
                  8<span className="text-violet-200">+</span>
                </p>
                <p className="mt-4 max-w-52 text-sm leading-6 text-zinc-400">
                  Ideas taken from early exploration through working delivery.
                </p>
              </div>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll className="md:col-span-4 md:row-span-2" delay={140}>
            <Card className={`${glassCard} min-h-full p-7 sm:p-8`}>
              <div className="absolute -right-20 bottom-10 -z-10 size-52 rounded-full bg-sky-400/[0.08] blur-3xl transition-transform duration-500 group-hover/card:scale-125" />
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-300">
                    Core expertise
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Connected end to end
                  </p>
                </div>
                <div className="grid size-10 place-items-center rounded-2xl border border-sky-300/15 bg-sky-300/[0.07] text-sky-200">
                  <Code2 className="size-4" />
                </div>
              </div>
              <div className="mt-10 space-y-3">
                {expertise.map(({ label, detail, Icon }, index) => (
                  <div
                    key={label}
                    className="group/item flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/15 p-4 transition-colors hover:border-white/[0.14] hover:bg-white/[0.045]"
                  >
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-zinc-300 transition-colors group-hover/item:text-amber-200">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">
                        {label}
                      </p>
                      <p className="mt-0.5 text-xs text-zinc-400">{detail}</p>
                    </div>
                    <span className="ml-auto font-mono text-xs text-zinc-600">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-6 text-zinc-400">
                I work across the complete product stack, connecting model
                behavior, interfaces, and dependable data systems.
              </p>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll className="md:col-span-8" delay={190}>
            <Card className={`${glassCard} min-h-56 p-7 sm:p-8`}>
              <div className="absolute -bottom-20 left-1/3 -z-10 h-48 w-72 rounded-full bg-emerald-400/[0.07] blur-3xl transition-transform duration-500 group-hover/card:scale-125" />
              <div className="grid h-full gap-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-end">
                <div>
                  <p className="text-sm font-medium text-zinc-300">
                    Technologies
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em] text-white">
                    A focused toolkit for building modern products.
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {technologies.map((technology, index) => (
                    <div
                      key={technology}
                      className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-black/15 px-4 py-3.5 text-sm font-medium text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300/15 hover:bg-white/[0.05] hover:text-white"
                    >
                      <span
                        className={`size-2 rounded-full ${
                          index === 0
                            ? "bg-violet-300"
                            : index === 1
                              ? "bg-white"
                              : index === 2
                                ? "bg-amber-300"
                                : "bg-sky-300"
                        }`}
                      />
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
