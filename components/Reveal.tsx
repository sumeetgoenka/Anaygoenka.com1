import type { ReactNode, ElementType } from 'react';

/**
 * Scroll-driven reveal. Renders visible by default; the `.reveal` class only
 * animates where CSS scroll timelines are supported and motion is allowed
 * (see globals.css). No JS gating — content never ships blank.
 */
export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  return <Tag className={`reveal ${className}`}>{children}</Tag>;
}

/** Passthrough container. Natural stagger comes from items entering view in turn. */
export function Stagger({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
