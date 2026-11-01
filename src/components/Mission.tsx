import Image from "next/image";

const missionCards = [
  {
    title: "Empower Youth",
    description:
      "Give every young person the tools, knowledge, and confidence to define their own path — regardless of background or resources.",
    accent: "#4778D5",
    points: [
      "Free access for all students",
      "Scholarship & travel grants",
      "Inclusive programming design",
      "Multilingual support",
    ],
  },
  {
    title: "Bridge Gaps",
    description:
      "Connect academic learning with real-world opportunities. Translate classroom theory into market-ready capabilities.",
    accent: "#8664DF",
    points: [
      "Industry-partnered curriculum",
      "Live project briefs from companies",
      "Internship & job pathways",
      "Startup incubator access",
    ],
  },
  {
    title: "Sustain Impact",
    description:
      "Build a self-reinforcing ecosystem where alumni become mentors, investors, and champions for the next generation.",
    accent: "#10B9A4",
    points: [
      "Alumni mentor program",
      "Reinvestment fund from exits",
      "Annual community summit",
      "Open-source resource library",
    ],
  },
];

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative isolate scroll-mt-28 overflow-hidden bg-night"
      aria-labelledby="mission-heading"
    >
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 [background:radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(138,0,212,0.16)_0%,transparent_60%),radial-gradient(ellipse_40%_50%_at_10%_80%,rgba(77,20,109,0.14)_0%,transparent_55%)]"
      />

      {/* BLOCK A — MISSION INTRO */}
      <div className="mx-auto w-full max-w-[1600px] px-6 pt-[clamp(5rem,9vw,9rem)] pb-[clamp(4rem,7vw,7rem)] sm:px-10 lg:px-[5.8vw]">

        {/* eyebrow rule */}
        <div className="mb-10 flex items-center gap-5 sm:mb-16">
          <div aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-white/[0.07] to-transparent" />
          <p className="shrink-0 text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">
            Mission — What we&apos;re here to do
          </p>
          <div aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-white/[0.07] to-transparent" />
        </div>

        {/* two-column: image left, text right */}
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[1fr_1fr] lg:gap-x-[6vw] lg:items-center">

          {/* LEFT — image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(138,0,212,0.14)]">
            <Image
              src="/images/mission-sky.jpg"
              alt="Four people sitting on a rocky outcrop overlooking a city skyline at sunset"
              fill
              sizes="(min-width: 1024px) 48vw, 92vw"
              className="object-cover object-center"
            />
          </div>

          {/* RIGHT — headline */}
          <div>
            {/* kicker */}
            <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-bright sm:mb-6">
              <span aria-hidden="true" className="h-px w-8 bg-brand-bright/60" />
              Our Mission
            </p>

            <h2
              id="mission-heading"
              className="font-display font-extrabold uppercase leading-[0.9] tracking-[-0.035em] text-white"
              style={{ fontSize: "clamp(1.4rem,4.5vw,3.4rem)", fontFamily: "var(--font-archivo)", fontStretch: "79%" }}
            >
              <span className="block">Give every young African</span>
              <span className="block">the knowledge, skills</span>
              <span className="block">&amp; connections to turn</span>
              <span className="block">
                ideas{" "}
                <span className="bg-gradient-to-r from-[#c48bff] via-brand-bright to-brand bg-clip-text text-transparent">
                  into impact.
                </span>
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* BLOCK B — THREE PILLARS */}
      <div className="relative border-t border-white/[0.06]">
        {missionCards.map((card, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={card.title}
              className="group relative border-b border-white/[0.06] transition-colors duration-500 hover:bg-white/[0.02]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-transparent via-[--accent] to-transparent transition-transform duration-500 group-hover:scale-y-100"
                style={{ "--accent": card.accent } as React.CSSProperties}
              />

              <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-[5.8vw]">
                <div className={`grid grid-cols-1 gap-y-4 py-[clamp(2.4rem,4vw,3.5rem)] lg:grid-cols-12 lg:gap-x-[4vw] lg:items-start ${isEven ? "" : "lg:text-right"}`}>

                  {/* index number */}
                  <div className={`lg:col-span-2 ${isEven ? "" : "lg:justify-end"}`}>
                    <span
                      className="font-display font-extrabold uppercase leading-none text-white/[0.06] transition-colors duration-300 group-hover:text-white/[0.1]"
                      style={{ fontSize: "clamp(2.8rem,5vw,4rem)", fontFamily: "var(--font-archivo)", fontStretch: "79%" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* title + desc */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:col-start-3" : "lg:col-start-1 lg:order-last"}`}>
                    <h3
                      className="font-display font-extrabold uppercase leading-[0.93] tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-white"
                      style={{ fontSize: "clamp(1.6rem,3vw,2.8rem)", fontFamily: "var(--font-archivo)", fontStretch: "79%" }}
                    >
                      {card.title}
                    </h3>
                    <p className={`mt-3 text-[clamp(0.85rem,1.1vw,1rem)] leading-[1.75] text-white/50 transition-colors duration-300 group-hover:text-white/65 ${isEven ? "max-w-[46ch]" : "ml-auto max-w-[46ch]"}`}>
                      {card.description}
                    </p>
                  </div>

                  {/* bullet list */}
                  <div className={`lg:col-span-4 ${isEven ? "lg:col-start-9" : "lg:col-start-8 lg:text-left"}`}>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
                      What this looks like
                    </p>
                    <ul className="space-y-2" role="list">
                      {card.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-[13.5px] leading-[1.6] text-white/45 transition-colors duration-300 group-hover:text-white/60"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[3px] h-[5px] w-[5px] shrink-0 rounded-full"
                            style={{ background: card.accent, opacity: 0.7 }}
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

      {/* BLOCK C — CTA */}
      <div className="mx-auto w-full max-w-[1600px] px-6 py-[clamp(3rem,5vw,5rem)] text-center">
        <a
          href="#offer"
          className="group inline-flex items-center gap-4 bg-brand px-7 py-[1.1rem] text-[13px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-brand-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-9 sm:py-[1.5rem] sm:text-sm"
        >
          See What We Offer
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>
      </div>
    </section>
  );
}
