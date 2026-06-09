import { Check, Database, FileText, MapPin, Search, Send, Sparkles } from "lucide-react";

export function ProjectVisual({ type }: { type: string }) {
  if (type === "pipeline") {
    return (
      <div className="project-visual bg-[radial-gradient(circle_at_75%_20%,rgba(139,92,246,0.2),transparent_34%)]">
        <div className="absolute inset-x-8 top-8 flex items-center justify-between">
          {[FileText, Search, Database, Sparkles].map((Icon, index) => (
            <div key={index} className="relative flex items-center">
              <div className="grid size-12 place-items-center rounded-2xl border border-violet-300/15 bg-violet-300/[0.08] text-violet-200 shadow-xl shadow-black/20">
                <Icon className="size-5" />
              </div>
              {index < 3 && (
                <div className="absolute left-12 top-1/2 h-px w-[calc((100vw-8rem)/8)] max-w-16 bg-gradient-to-r from-violet-300/35 to-transparent" />
              )}
            </div>
          ))}
        </div>
        <div className="absolute inset-x-8 bottom-7 rounded-2xl border border-white/[0.08] bg-black/25 p-4 backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-violet-200">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            grounded response
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-11/12 rounded-full bg-white/15" />
            <div className="h-1.5 w-8/12 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "terminal") {
    return (
      <div className="project-visual bg-[radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.18),transparent_38%)] p-7 font-mono">
        <div className="mb-5 flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-red-400/70" />
          <span className="size-2 rounded-full bg-amber-300/70" />
          <span className="size-2 rounded-full bg-emerald-400/70" />
          <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-zinc-600">sql agent</span>
        </div>
        <div className="space-y-4 text-xs">
          <p className="text-zinc-500">Ask your database</p>
          <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2.5 text-zinc-300">
            <span>Show revenue by quarter</span>
            <Send className="size-3.5 text-amber-300" />
          </div>
          <div className="space-y-2 pt-2">
            <p><span className="text-violet-300">SELECT</span> quarter, <span className="text-amber-200">SUM</span>(revenue)</p>
            <p><span className="text-violet-300">FROM</span> sales <span className="text-violet-300">GROUP BY</span> quarter;</p>
          </div>
          <div className="flex items-center gap-2 text-emerald-300">
            <Check className="size-3.5" />
            <span className="text-[11px]">Query validated and executed</span>
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
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-sky-300">Next stop</p>
        <p className="mt-1 text-sm font-medium text-white">A visual journey through India</p>
      </div>
    </div>
  );
}
