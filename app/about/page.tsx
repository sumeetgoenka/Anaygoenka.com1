import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Anay Goenka',
  description: 'A bit about me.',
};

export default function AboutPage() {
  return (
    <article className="px-5 md:px-10 pt-32 md:pt-44 pb-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)] mb-6">About</p>
        <h1 className="font-display display-lg max-w-4xl">
          Hi. I&apos;m <span className="text-[color:var(--accent)]">Anay</span>.
        </h1>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-4 md:sticky md:top-28 self-start space-y-6 text-sm">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs text-[color:var(--mute)] mb-2">Location</p>
              <p className="text-[color:var(--ink-soft)]">Dubai, UAE</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.2em] text-xs text-[color:var(--mute)] mb-2">Age</p>
              <p className="text-[color:var(--ink-soft)]">13</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.2em] text-xs text-[color:var(--mute)] mb-2">Mostly writes</p>
              <p className="text-[color:var(--ink-soft)]">Swift, TypeScript, Python</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.2em] text-xs text-[color:var(--mute)] mb-2">Shipped with</p>
              <p className="text-[color:var(--ink-soft)]">Next.js, SwiftUI, Firebase, Vercel</p>
            </div>
          </aside>

          <div className="md:col-span-8 space-y-10 text-lg md:text-xl leading-relaxed text-[color:var(--ink-soft)]">
            <p className="text-2xl md:text-3xl text-[color:var(--ink)] leading-snug">
              I started coding at 11 the way most people start a bad habit — by accident,
              because it was more interesting than whatever I was supposed to be doing.
            </p>

            <p>
              The first thing I ever shipped was{' '}
              <Link href="/work/happystudy" className="text-[color:var(--ink)] link-sweep">HappyStudy</Link> —
              an ed-tech platform I built at 12 that somehow picked up 500+ students. I had no idea what
              I was doing for most of it. That turned out to be the whole point.
            </p>

            <p>
              These days I mostly build{' '}
              <span className="text-[color:var(--ink)]">things I actually want to use</span>. My menu bar
              runs an app I wrote (
              <Link href="/work/nudge" className="text-[color:var(--accent)] link-sweep">Nudge</Link>). My
              distraction blocker is one I had to build myself because every other one was too easy to
              disable (
              <Link href="/work/focusdragon" className="text-[color:var(--accent)] link-sweep">FocusDragon</Link>).
            </p>

            <blockquote className="relative border-l-2 border-[color:var(--accent)] pl-6 py-2 font-display text-2xl md:text-3xl text-[color:var(--ink)] leading-tight">
              If the product doesn&apos;t survive my own use, it doesn&apos;t deserve anyone else&apos;s.
            </blockquote>

            <p>
              I teach too. My YouTube channel{' '}
              <a href="https://www.youtube.com/@AnayTheTutor" target="_blank" rel="noreferrer" className="text-[color:var(--ink)] link-sweep">
                AnayTheTutor
              </a>{' '}
              is where I figure out whether I actually understand something by trying to explain it.
              Usually the answer is &quot;not quite yet&quot; — which is the part I like.
            </p>

            <p>
              Outside of code: maths competitions, long walks, and a loud opinion about menu bar ergonomics.
            </p>

            <div className="pt-8 border-t border-[color:var(--line)]">
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--mute)] mb-4">Right now</p>
              <ul className="space-y-2 text-base text-[color:var(--ink-soft)]">
                <li>— Shipping FocusDragon updates.</li>
                <li>— Teaching myself Metal and shaders.</li>
                <li>— Recording more for AnayTheTutor.</li>
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[color:var(--ink)] text-[color:var(--bg)] font-medium text-sm transition-transform hover:scale-[1.02]"
              >
                Say hello
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
