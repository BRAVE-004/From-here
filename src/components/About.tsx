"use client";

/* ─────────────────────────────────────────────
   About.tsx  —  premium editorial redesign.
   A magazine-style split-spread that flows
   directly from the Hero's energy: same
   condensed Archivo type, same purple glow
   system, no fabricated numbers.
───────────────────────────────────────────── */

const pillars = [
  {
    index: "01",
    tag: "Discover",
    line: "Find your direction.",
    body: "Explore the paths open to you, gain clarity on what matters, and align your next move with purpose.",
  },
  {
    index: "02",
    tag: "Build",
    line: "Sharpen your edge.",
    body: "Hands-on sessions that turn ideas into practical skills — the kind that compound over a career.",
  },
  {
    index: "03",
    tag: "Connect",
    line: "Meet your people.",
    body: "The mentors, peers, and leaders whose doors open once you know exactly where you're going.",
  },
  {
    index: "04",
    tag: "Grow",
    line: "Move forward.",
    body: "Leave with direction, momentum, and the tools to take every next step with confidence.",
  },
] as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-16 overflow-hidden bg-night"
      aria-labelledby="about-heading"
    >
      {/* ── seamless bleed from Hero ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-night to-transparent"
      />

      {/* ── purple atmosphere — same palette as Hero orb ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 [background:radial-gradient(ellipse_70%_60%_at_80%_10%,rgba(168,31,255,0.14)_0%,transparent_60%),radial-gradient(ellipse_50%_70%_at_5%_85%,rgba(138,0,212,0.12)_0%,transparent_55%)]"
      />

      {/* ── film-grain noise ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.028] [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2Ij48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC45IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')]"
      />

      {/* ════════════════════════════════════════════════════
          BLOCK A — MANIFESTO
          Left: giant headline.  Right: copy + the
          manifesto statement rendered as a pull-quote.
      ════════════════════════════════════════════════════ */}
      <div className="relative mx-auto w-full max-w-[1600px] px-6 pt-[clamp(5rem,9vw,9rem)] pb-0 sm:px-10 lg:px-[5.8vw]">

        {/* top rule + eyebrow — identical rhythm to Hero overline */}
        <div className="mb-14 flex items-center gap-5">
          <div aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-white/[0.07] to-transparent" />
          <p className="shrink-0 text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">
            About — Why we exist
          </p>
          <div aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-white/[0.07] to-transparent" />
        </div>

        {/* two-column split */}
        <div className="grid grid-cols-1 items-end gap-y-14 lg:grid-cols-[1fr_1fr] lg:gap-x-[7vw]">

          {/* ── LEFT: headline ── */}
          <div>
            <h2
              id="about-heading"
              className="font-display font-extrabold uppercase leading-[0.9] tracking-[-0.035em] text-white"
              style={{
                fontSize: "clamp(3rem,7vw,8rem)",
                fontFamily: "var(--font-archivo)",
                fontStretch: "79%",
              }}
            >
              <span className="block">The room</span>
              <span className="block">where</span>
              {/* gradient word — matches Hero "Begins Here" treatment */}
              <span className="relative block w-fit">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-[8%] top-[50%] -z-10 h-[clamp(90px,13vw,180px)] w-[clamp(90px,13vw,180px)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_38%_32%,#c48bff_0%,#9b3fe0_42%,#a63fd0_65%,#d179a0_90%)] opacity-65 mix-blend-screen blur-[3px]"
                />
                <span className="bg-gradient-to-r from-[#c48bff] via-brand-bright to-brand bg-clip-text text-transparent">
                  potential
                </span>
              </span>
              <span className="block">becomes</span>
              <span className="block">progress.</span>
            </h2>
          </div>

          {/* ── RIGHT: editorial copy + pull-quote ── */}
          <div className="flex flex-col gap-10 lg:pb-3">

            {/* running copy */}
            <div className="space-y-5 border-l border-white/[0.08] pl-7">
              <p className="text-[clamp(1rem,1.25vw,1.2rem)] font-light leading-[1.75] tracking-[0.005em] text-white/80">
                FROM HERE is a conference designed to help young people —
                especially tertiary students — discover their direction,
                develop the skills to pursue it, and connect with the people
                and opportunities that can move them forward.
              </p>
              <p className="text-[clamp(0.9rem,1.1vw,1.05rem)] leading-[1.8] text-white/45">
                It brings together students, innovators, founders, tech
                professionals, mentors, and community leaders to exchange
                ideas, build meaningful connections, and turn potential into
                progress.
              </p>
            </div>

            {/* pull-quote — large typographic accent */}
            <blockquote className="relative">
              {/* decorative opening mark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-4 -left-1 select-none font-display font-extrabold leading-none text-white/[0.06]"
                style={{ fontSize: "clamp(5rem,10vw,9rem)", fontFamily: "var(--font-archivo)" }}
              >
                "
              </span>
              <p
                className="relative font-display font-extrabold uppercase leading-[1.05] tracking-[-0.025em] text-white/90"
                style={{ fontSize: "clamp(1.2rem,2vw,1.9rem)", fontFamily: "var(--font-archivo)", fontStretch: "79%" }}
              >
                Come with questions,
                ideas, and ambitions.
                <br />
                <span className="text-white/35">
                  Leave with direction, connections,
                  and the tools to take your next step.
                </span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          BLOCK B — PILLARS
          Full-bleed horizontal list with vertical dividers.
          Each pillar is a stacked typographic unit — no
          cards, no shadows. Pure editorial.
      ════════════════════════════════════════════════════ */}
      <div className="relative mt-[clamp(5rem,9vw,9rem)]">

        {/* hairline rule above */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/[0.07]" />
        {/* hairline rule below */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-white/[0.07]" />

        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ index, tag, line, body }, i) => (
            <div
              key={tag}
              className="group relative flex flex-col gap-6 border-r border-white/[0.07] px-8 py-12 last:border-r-0 transition-colors duration-300 hover:bg-white/[0.025] lg:px-10 lg:py-14"
            >
              {/* accent top line that sweeps in on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-brand via-brand-bright to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100"
              />

              {/* index + tag on same row */}
              <div className="flex items-baseline justify-between">
                <span
                  aria-hidden="true"
                  className="font-display font-extrabold uppercase leading-none text-white/[0.07] transition-colors duration-300 group-hover:text-white/[0.12]"
                  style={{ fontSize: "clamp(2.8rem,5vw,4.5rem)", fontFamily: "var(--font-archivo)", fontStretch: "79%" }}
                >
                  {index}
                </span>
                {/* Hero-footer-style pill: "+ Discover" */}
                <span className="flex items-center gap-[6px] text-[11px] font-medium uppercase tracking-[0.22em] text-white/30 transition-colors duration-300 group-hover:text-brand-bright/70">
                  <span aria-hidden="true" className="text-brand-bright/50 group-hover:text-brand-bright">+</span>
                  {tag}
                </span>
              </div>

              {/* headline — large, tight, uppercase */}
              <h3
                className="font-display font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-brand-bright"
                style={{ fontSize: "clamp(1.6rem,2.6vw,2.4rem)", fontFamily: "var(--font-archivo)", fontStretch: "79%" }}
              >
                {line}
              </h3>

              {/* body */}
              <p className="text-[14px] leading-[1.75] text-white/40 transition-colors duration-300 group-hover:text-white/55">
                {body}
              </p>

              {/* arrow — appears on hover */}
              <div className="mt-auto flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div aria-hidden="true" className="h-px w-6 bg-brand-bright/60" />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-brand-bright/60"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          BLOCK C — CTA STRIP
          Full-width typographic statement + the exact
          same sharp CTA button the Hero uses.
      ════════════════════════════════════════════════════ */}
      <div className="mx-auto w-full max-w-[1600px] px-6 py-[clamp(4rem,7vw,7rem)] sm:px-10 lg:px-[5.8vw]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">

          <p
            className="font-display font-extrabold uppercase leading-[0.93] tracking-[-0.03em] text-white"
            style={{ fontSize: "clamp(2rem,4.5vw,4.5rem)", fontFamily: "var(--font-archivo)", fontStretch: "79%" }}
          >
            Your next{" "}
            <span className="bg-gradient-to-r from-brand-bright to-[#c48bff] bg-clip-text text-transparent">begins</span>
            <br className="hidden sm:block" />
            {" "}from here.
          </p>

          <a
            href="#offer"
            className="group inline-flex w-fit shrink-0 items-center gap-4 bg-brand px-7 py-[1.15rem] text-[13px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-brand-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-9 sm:py-[1.65rem] sm:text-sm"
          >
            Explore the experience
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
