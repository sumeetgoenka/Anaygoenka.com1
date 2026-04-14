'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

export interface MarqueeItem {
  label: string;
  href?: string;
}

interface MarqueeProps {
  items: (string | MarqueeItem)[];
  accent?: boolean;
}

export default function Marquee({ items, accent = false }: MarqueeProps) {
  const normalised: MarqueeItem[] = items.map((i) =>
    typeof i === 'string' ? { label: i } : i
  );
  const doubled = [...normalised, ...normalised, ...normalised, ...normalised];

  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reversed, setReversed] = useState(false);

  // Drag-to-scrub
  const drag = useRef<{ active: boolean; startX: number; startScroll: number }>({
    active: false,
    startX: 0,
    startScroll: 0,
  });

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (!trackRef.current) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: trackRef.current.scrollLeft,
    };
    setPaused(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!drag.current.active || !trackRef.current) return;
    const delta = e.clientX - drag.current.startX;
    trackRef.current.scrollLeft = drag.current.startScroll - delta;
  }

  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    drag.current.active = false;
    setPaused(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  }

  return (
    <div
      className="relative overflow-hidden py-6 border-y border-[color:var(--line)] cursor-grab active:cursor-grabbing select-none group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onClick={() => setReversed((v) => !v)}
      title="hover to pause · click to reverse · drag to scrub"
    >
      <div
        ref={trackRef}
        className="flex gap-10 marquee-track whitespace-nowrap overflow-hidden"
        style={{
          animationPlayState: paused ? 'paused' : 'running',
          animationDirection: reversed ? 'reverse' : 'normal',
        }}
      >
        {doubled.map((item, i) => {
          const baseColor = accent ? 'text-[color:var(--accent)]' : 'text-[color:var(--ink)]';
          const inner = (
            <span
              className={`font-display text-3xl md:text-5xl inline-flex items-center gap-10 transition-all duration-300 ${baseColor}`}
            >
              <span
                className={`inline-block transition-transform duration-300 ${
                  item.href ? 'hover:scale-110 hover:-rotate-2' : ''
                }`}
                style={item.href ? { transformOrigin: 'center' } : undefined}
              >
                {item.label}
              </span>
              <span className="text-[color:var(--mute)]">✦</span>
            </span>
          );

          if (item.href) {
            return (
              <Link
                key={i}
                href={item.href}
                draggable={false}
                onClick={(e) => e.stopPropagation()}
                className="hover:text-[color:var(--ink)] transition-colors"
              >
                {inner}
              </Link>
            );
          }
          return <span key={i}>{inner}</span>;
        })}
      </div>

      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.2em] text-[color:var(--mute)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        hover · drag · click
      </div>
    </div>
  );
}
