import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About — Anay Goenka',
  description: 'A bit about me.',
};

export default function AboutPage() {
  return (
    <article className="px-5 md:px-10 pt-32 md:pt-44 pb-20">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h1 className="font-display display-lg max-w-4xl text-balance">
            Hi. I&apos;m <span className="text-[color:var(--accent)]">Anay</span>.
          </h1>
        </Reveal>

        <Reveal className="mt-16 grid md:grid-cols-12 gap-10" as="div">
          <aside className="md:col-span-4 md:sticky md:top-28 self-start text-sm">
            <dl className="divide-y divide-[color:var(--line)]">
              <div className="pb-4">
                <dt className="font-mono text-xs text-[color:var(--mute)] mb-1.5">location</dt>
                <dd className="text-[color:var(--ink-soft)]">Dubai, UAE</dd>
              </div>
              <div className="py-4">
                <dt className="font-mono text-xs text-[color:var(--mute)] mb-1.5">age</dt>
                <dd className="text-[color:var(--ink-soft)]">13</dd>
              </div>
              <div className="py-4">
                <dt className="font-mono text-xs text-[color:var(--mute)] mb-1.5">mostly writes</dt>
                <dd className="text-[color:var(--ink-soft)]">Swift, TypeScript, Python</dd>
              </div>
              <div className="pt-4">
                <dt className="font-mono text-xs text-[color:var(--mute)] mb-1.5">shipped with</dt>
                <dd className="text-[color:var(--ink-soft)]">Next.js, SwiftUI, Supabase, Vercel</dd>
              </div>
            </dl>
          </aside>

          <div className="md:col-span-8 space-y-10 text-lg md:text-xl leading-relaxed text-[color:var(--ink-soft)] text-pretty">
            <p className="text-2xl md:text-3xl text-[color:var(--ink)] leading-snug text-balance">
              I started coding at 11 the way most people start a bad habit — by accident,
              because it was more interesting than whatever I was supposed to be doing.
            </p>

            <p>
              The first thing I shipped was{' '}
              <Link href="/work/happystudy" className="text-[color:var(--ink)] link-sweep">HappyStudy</Link> —
              a revision platform I built at 12 for students at my old school in London. I had no idea
              what I was doing for most of it. That turned out to be the whole point.
            </p>

            <p>
              These days I mostly build{' '}
              <span className="text-[color:var(--ink)]">things I actually want to use</span>. My menu bar
              runs an app I wrote (
              <Link href="/work/nudge" className="text-[color:var(--accent)] link-sweep">Nudge</Link>). My
              distraction blocker is one I had to build myself because every other one was too easy to
              disable (
              <Link href="/work/focusdragon" className="text-[color:var(--accent)] link-sweep">FocusDragon</Link>).
              When my father&apos;s recruitment firm needed an ATS, I designed the data model and{' '}
              <Link href="/work/yallo-ats" className="text-[color:var(--accent)] link-sweep">built it</Link>.
            </p>

            <p>
              I teach too.{' '}
              <a href="https://www.youtube.com/@CoolestAnay" target="_blank" rel="noreferrer" className="text-[color:var(--ink)] link-sweep">
                AnayTheTutor
              </a>{' '}
              is where I figure out whether I actually understand something by trying to explain it.
              Usually the answer is &quot;not quite yet&quot; — which is the part I like.
            </p>

            <p>
              Outside of code: cricket, music production, and competition maths.
              Mostly in that order depending on the week.
            </p>
          </div>
        </Reveal>

        <Reveal className="grid md:grid-cols-12 gap-10 mt-4" as="div">
          <div className="md:col-start-5 md:col-span-8 py-10 border-y border-[color:var(--line)]">
            <span className="block font-display text-[color:var(--accent)] text-6xl md:text-7xl leading-none select-none">
              &ldquo;
            </span>
            <p className="font-display display-md text-[color:var(--ink)] leading-tight text-balance -mt-3 md:-mt-5">
              If the product doesn&apos;t survive my own use, it doesn&apos;t deserve anyone else&apos;s.
            </p>
          </div>
        </Reveal>

        <Reveal className="grid md:grid-cols-12 gap-10 mt-4" as="div">
          <div className="md:col-start-5 md:col-span-8 space-y-10">
            <div>
              <p className="label mb-4">right now</p>
              <ul className="space-y-2 text-base text-[color:var(--ink-soft)]">
                <li>— Shipping FocusDragon updates.</li>
                <li>— Prepping for AMC 10.</li>
                <li>— Recording more for AnayTheTutor.</li>
              </ul>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[color:var(--ink)] text-[color:var(--bg)] font-medium text-sm transition-transform hover:scale-[1.02]"
              >
                Say hello
                <span>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
