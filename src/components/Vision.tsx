import Image from "next/image";

const pillars = [
  {
    index: "01",
    title: "Discover Direction",
    description:
      "Explore the careers, industries, and opportunities that fit your strengths and values.",
    points: [
      "Career path workshops",
      "Industry insight panels",
      "Strengths and values exercises",
    ],
    accentColor: "#4778D5",
    icon: (
      // compass rose
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <circle cx="16" cy="16" r="13" />
        <polygon points="16,5 18.5,14 16,12 13.5,14" fill="currentColor" strokeWidth="0" />
        <polygon points="16,27 13.5,18 16,20 18.5,18" fill="currentColor" opacity="0.35" strokeWidth="0" />
        <line x1="16" y1="16" x2="16" y2="16" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
  },
  {
    index: "02",
    title: "Build Capabilities",
    description:
      "Gain the practical skills the 21st century rewards — across tech and AI, entrepreneurship, leadership, and wellbeing.",
    points: [
      "Skills masterclasses",
      "Hands-on sessions",
      "Mentor-guided learning",
    ],
    accentColor: "#8664DF",
    icon: (
      // layered blocks
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <rect x="4" y="4" width="10" height="10" rx="1.5" />
        <rect x="18" y="4" width="10" height="10" rx="1.5" />
        <rect x="11" y="18" width="10" height="10" rx="1.5" />
      </svg>
    ),
  },
  {
    index: "03",
    title: "Connect & Grow",
    description:
      "Build relationships with peers, mentors, founders, and investors who open doors.",
    points: [
      "Curated networking sessions",
      "Founder and investor conversations",
      "Peer community",
    ],
    accentColor: "#10B9A4",
    icon: (
      // people network
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <circle cx="10" cy="10" r="4" />
        <path d="M2 26a8 8 0 0 1 16 0" />
        <path d="M21 7a5 5 0 0 1 0 8" />
        <path d="M24 4a9 9 0 0 1 0 14" />
      </svg>
    ),
  },
] as const;

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative isolate scroll-mt-28 overflow-hidden bg-night"
      aria-labelledby="vision-heading"
    >
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 [background:radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(138,0,212,0.16)_0%,transparent_60%),radial-gradient(ellipse_40%_50%_at_10%_80%,rgba(77,20,109,0.14)_0%,transparent_55%)]"
      />
      {/* noise */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.025] [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2Ij48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC45IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')]"
      />

      {/* BLOCK A — VISION STATEMENT */}
      <div className="mx-auto w-full max-w-[1600px] px-6 pt-[clamp(5rem,9vw,9rem)] pb-[clamp(4rem,7vw,7rem)] sm:px-10 lg:px-[5.8vw]">

        {/* eyebrow rule */}
        <div className="mb-10 flex items-center gap-5 sm:mb-16">
          <div aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-white/[0.07] to-transparent" />
          <p className="shrink-0 text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">
            Vision — Where we are going
          </p>
          <div aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-white/[0.07] to-transparent" />
        </div>

        {/* two-column hero statement */}
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[1fr_0.92fr] lg:gap-x-[6vw] lg:items-center">

          {/* LEFT — headline */}
          <div>
            {/* kicker */}
            <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-bright sm:mb-6">
              <span aria-hidden="true" className="h-px w-8 bg-brand-bright/60" />
              Our Vision
            </p>
            <h2
              id="vision-heading"
              className="font-display font-extrabold uppercase leading-[0.88] tracking-[-0.035em] text-white"
              style={{ fontSize: "clamp(2.4rem,5.1vw,5.25rem)", fontFamily: "var(--font-archivo)", fontStretch: "79%" }}
            >
              <span className="block">A generation of young</span>
              <span className="block">
                <span className="bg-gradient-to-r from-[#c48bff] via-brand-bright to-brand bg-clip-text text-transparent">
                  Africans
                </span>
                {" "}
                equipped to build{" "}
                <br className="hidden sm:block" />
                the now &amp; shape the future.
              </span>
            </h2>
          </div>

          {/* RIGHT — event poster + caption */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(138,0,212,0.18)]">
              <Image
                src="/images/vision-spiral.png"
                alt="A spiralling funnel of newspaper pages, with a lone figure holding a pink umbrella at its centre"
                fill
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-cover object-center"
              />
            </div>

            <blockquote className="mt-4 border-l-2 border-brand/50 pl-4 sm:mt-6 sm:pl-5">
              <p
                className="font-display font-extrabold uppercase leading-[1.15] tracking-[-0.02em] text-white/80"
                style={{ fontSize: "clamp(1rem,1.5vw,1.3rem)", fontFamily: "var(--font-archivo)", fontStretch: "79%" }}
              >
                Come with questions, ideas, and ambitions.{" "}
                <span className="text-white/40">Leave with direction.</span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      {/* BLOCK B — THREE PILLARS */}
      <div className="relative border-t border-white/[0.06]">

        {pillars.map((pillar, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={pillar.title}
              className="group relative border-b border-white/[0.06] transition-colors duration-500 hover:bg-white/[0.02]"
            >
              {/* hover sweep line */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-transparent via-[--accent] to-transparent transition-transform duration-500 group-hover:scale-y-100"
                style={{ "--accent": pillar.accentColor } as React.CSSProperties}
              />

              <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-[5.8vw]">
                <div className={`grid grid-cols-1 gap-y-5 py-[clamp(2.8rem,4.5vw,4rem)] lg:grid-cols-12 lg:gap-x-[4vw] lg:items-start ${isEven ? "" : "lg:text-right"}`}>

                  {/* index + icon */}
                  <div className={`flex items-center gap-4 pr-10 lg:col-span-2 ${isEven ? "" : "lg:justify-end"}`}>
                    <span
                      aria-hidden="true"
                      className="font-display font-extrabold uppercase leading-none text-white/[0.06] transition-colors duration-300 group-hover:text-white/[0.1]"
                      style={{ fontSize: "clamp(3rem,5.5vw,4.5rem)", fontFamily: "var(--font-archivo)", fontStretch: "79%" }}
                    >
                      {pillar.index}
                    </span>
                    <span
                      className="block transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7"
                      style={{ color: pillar.accentColor }}
                    >
                      {pillar.icon}
                    </span>
                  </div>

                  {/* title + desc */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:col-start-3" : "lg:col-start-1 lg:order-last"}`}>
                    <h3
                      className="font-display font-extrabold uppercase leading-[0.93] tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-white"
                      style={{ fontSize: "clamp(1.7rem,3vw,3rem)", fontFamily: "var(--font-archivo)", fontStretch: "79%" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className={`mt-3 text-[clamp(0.85rem,1.1vw,1rem)] leading-[1.75] text-white/50 transition-colors duration-300 group-hover:text-white/65 ${isEven ? "max-w-[46ch]" : "ml-auto max-w-[46ch]"}`}>
                      {pillar.description}
                    </p>
                  </div>

                  {/* bullet list */}
                  <div className={`lg:col-span-4 ${isEven ? "lg:col-start-9 lg:text-left" : "lg:col-start-8 lg:text-left"}`}>
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
                      What this looks like
                    </p>
                    <ul className="space-y-2" role="list">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-[13.5px] leading-[1.6] text-white/45 transition-colors duration-300 group-hover:text-white/60"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[3px] h-[5px] w-[5px] shrink-0 rounded-full"
                            style={{ background: pillar.accentColor, opacity: 0.7 }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* BLOCK C — BOTTOM MANIFESTO STRIP */}
      <div className="mx-auto w-full max-w-[1600px] px-6 py-[clamp(3rem,5vw,5rem)] sm:px-10 sm:py-[clamp(4rem,7vw,7rem)] lg:px-[5.8vw]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          <p
            className="font-display font-extrabold uppercase leading-[0.93] tracking-[-0.03em] text-white"
            style={{ fontSize: "clamp(1.6rem,4vw,3rem)", fontFamily: "var(--font-archivo)", fontStretch: "79%" }}
          >
            This is not just a conference.{" "}
            <span className="bg-gradient-to-r from-brand-bright to-[#c48bff] bg-clip-text text-transparent">
              It&apos;s a turning point.
            </span>
          </p>

          <a
            href="#offer"
            className="group inline-flex w-fit shrink-0 items-center gap-4 bg-brand px-7 py-[1.15rem] text-[13px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-brand-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-9 sm:py-[1.65rem] sm:text-sm"
          >
            See what we offer
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
