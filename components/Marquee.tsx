interface MarqueeProps {
  items: string[];
  accent?: boolean;
}

export default function Marquee({ items, accent = false }: MarqueeProps) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden py-6 border-y border-[color:var(--line)]">
      <div className="flex gap-10 marquee-track whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-display text-3xl md:text-5xl inline-flex items-center gap-10 ${
              accent ? 'text-[color:var(--accent)]' : 'text-[color:var(--ink)]'
            }`}
          >
            {item}
            <span className="text-[color:var(--mute)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
