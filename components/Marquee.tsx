interface MarqueeProps {
  items: string[];
  accent?: boolean;
}

export default function Marquee({ items, accent = false }: MarqueeProps) {
  const Sequence = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-12 md:gap-16 pr-12 md:pr-16"
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-12 md:gap-16 shrink-0">
          <span
            className={`font-display text-4xl md:text-6xl tracking-tight ${
              accent ? 'text-[color:var(--accent)]' : 'text-[color:var(--ink)]'
            }`}
          >
            {item}
          </span>
          <span className="text-[color:var(--mute)] text-2xl md:text-3xl shrink-0">✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      className="relative overflow-hidden border-y border-[color:var(--line)] py-6 md:py-8 bg-[color:var(--bg-2)]"
      aria-label="Things I work on"
    >
      <div className="flex w-max marquee-track">
        <Sequence />
        <Sequence ariaHidden />
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[color:var(--bg-2)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[color:var(--bg-2)] to-transparent" />
    </section>
  );
}
