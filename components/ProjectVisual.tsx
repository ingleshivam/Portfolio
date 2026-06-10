import {
  Bot,
  Check,
  CreditCard,
  Database,
  FileText,
  FileUp,
  Globe,
  ListChecks,
  MapPin,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  SplitSquareHorizontal,
} from "lucide-react";

export function ProjectVisual({ type }: { type: string }) {
  if (type === "graph") {
    return (
      <div className="project-visual bg-[radial-gradient(circle_at_75%_20%,rgba(99,102,241,0.2),transparent_34%)]">
        {/* Top row: main flow nodes */}
        <div className="absolute inset-x-8 top-8 flex items-center justify-between">
          {[Search, ListChecks, RefreshCw, Sparkles].map((Icon, index) => (
            <div key={index} className="relative flex items-center">
              <div className="grid size-12 place-items-center rounded-2xl border border-indigo-300/15 bg-indigo-300/[0.08] text-indigo-200 shadow-xl shadow-black/20">
                <Icon className="size-5" />
              </div>
              {index < 3 && (
                <div className="absolute left-12 top-1/2 h-px w-[calc((100vw-8rem)/8)] max-w-16 bg-gradient-to-r from-indigo-300/35 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Branching line down to faithfulness check node */}
        <div className="absolute left-1/2 top-[68px] h-6 w-px -translate-x-1/2 bg-gradient-to-b from-indigo-300/35 to-transparent" />
        <div className="absolute left-1/2 top-[92px] -translate-x-1/2">
          <div className="grid size-10 place-items-center rounded-2xl border border-indigo-300/15 bg-indigo-300/[0.08] text-indigo-200 shadow-xl shadow-black/20">
            <ShieldCheck className="size-4" />
          </div>
        </div>

        {/* Bottom status card */}
        <div className="absolute inset-x-8 bottom-7 rounded-2xl border border-white/[0.08] bg-black/25 p-4 backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-indigo-200">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            faithful · grounded
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-11/12 rounded-full bg-white/15" />
            <div className="h-1.5 w-7/12 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "agents") {
    return (
      <div className="project-visual bg-[radial-gradient(circle_at_75%_20%,rgba(14,165,233,0.2),transparent_34%)]">
        <div className="absolute inset-x-8 top-8 flex items-center justify-between">
          {[MapPin, Globe, Bot, CreditCard].map((Icon, index) => (
            <div key={index} className="relative flex items-center">
              <div className="grid size-12 place-items-center rounded-2xl border border-sky-300/15 bg-sky-300/[0.08] text-sky-200 shadow-xl shadow-black/20">
                <Icon className="size-5" />
              </div>
              {index < 3 && (
                <div className="absolute left-12 top-1/2 h-px w-[calc((100vw-8rem)/8)] max-w-16 bg-gradient-to-r from-sky-300/35 to-transparent" />
              )}
            </div>
          ))}
        </div>
        <div className="absolute inset-x-8 bottom-7 rounded-2xl border border-white/[0.08] bg-black/25 p-4 backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-sky-200">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            plan ready
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-11/12 rounded-full bg-white/15" />
            <div className="h-1.5 w-8/12 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "canvas") {
    return (
      <div className="project-visual bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.2),transparent_50%)]">
        {/* Mini node graph */}
        <div className="absolute inset-8 flex flex-col justify-between">
          {/* Top row: source nodes */}
          <div className="flex items-start justify-between">
            {[FileUp, SplitSquareHorizontal, Database].map((Icon, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center gap-1.5"
              >
                <div className="grid size-10 place-items-center rounded-xl border border-sky-300/15 bg-sky-300/[0.08] text-sky-200 shadow-lg shadow-black/20">
                  <Icon className="size-4" />
                </div>
                {/* Connector line downward */}
                <div className="h-6 w-px bg-gradient-to-b from-sky-300/30 to-transparent" />
              </div>
            ))}
          </div>

          {/* Center: LLM node */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 rounded-2xl border border-sky-300/20 bg-sky-300/[0.08] px-4 py-2 shadow-xl shadow-black/20 backdrop-blur-sm">
              <Sparkles className="size-4 text-sky-300" />
              <span className="text-xs font-medium text-sky-200">LLM Node</span>
            </div>
          </div>

          {/* Bottom: output */}
          <div className="rounded-2xl border border-white/[0.08] bg-black/25 p-3 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-sky-200">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              output
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-10/12 rounded-full bg-white/15" />
              <div className="h-1.5 w-7/12 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.2),transparent_35%)]">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute left-[16%] top-[22%] h-28 w-px rotate-[24deg] bg-gradient-to-b from-transparent via-sky-300/60 to-transparent" />
      <div className="absolute left-[37%] top-[35%] h-32 w-px rotate-[68deg] bg-gradient-to-b from-transparent via-sky-300/50 to-transparent" />
      <div className="absolute right-[24%] top-[20%] h-32 w-px rotate-[20deg] bg-gradient-to-b from-transparent via-sky-300/60 to-transparent" />
      {[
        "left-[17%] top-[24%]",
        "left-[42%] top-[49%]",
        "right-[22%] top-[23%]",
        "right-[13%] bottom-[20%]",
      ].map((position, index) => (
        <div key={position} className={`absolute ${position}`}>
          <MapPin
            className={`${index === 1 ? "size-7" : "size-5"} text-sky-300 drop-shadow-[0_4px_16px_rgba(56,189,248,.5)]`}
          />
        </div>
      ))}
      <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/[0.08] bg-zinc-950/65 px-4 py-3 backdrop-blur-md">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-sky-300">
          Next stop
        </p>
        <p className="mt-1 text-sm font-medium text-white">
          A visual journey through India
        </p>
      </div>
    </div>
  );
}
