export function SectionLabel({ index, name }: { index: string; name: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-[13px] text-ink-muted">
      <span className="text-accent">{"/*"}</span>
      <span>
        {index} · {name}
      </span>
      <span className="text-accent">{"*/"}</span>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  );
}
