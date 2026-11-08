export function SectionHeading({
  index,
  label,
  title
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.16em] text-accent">
        <span>{index}</span>
        <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 className="mt-4 text-balance font-serif text-[2rem] leading-[1.15] tracking-tight text-ink sm:text-[2.4rem]">
        {title}
      </h2>
    </div>
  );
}
