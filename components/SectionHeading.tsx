import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] md:items-start md:gap-12">
      <div>
        <Badge variant="outline" className="mb-5 font-mono text-[11px] tracking-[0.12em] uppercase">
          {number} / {eyebrow}
        </Badge>
        <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-balance text-white sm:text-[3.25rem]">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-lg text-[15px] leading-7 text-zinc-300 md:mt-11 md:justify-self-end">
          {description}
        </p>
      )}
    </div>
  );
}
