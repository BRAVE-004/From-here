import Image from "next/image";

export default function Offer() {
  return (
    <section
      id="offer"
      className="relative isolate bg-night px-6 py-[clamp(4rem,8vw,7rem)] sm:px-10 lg:px-[5.8vw]"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <header className="text-center">
          <p className="font-display text-[clamp(1.9rem,3.6vw,3.6rem)] font-medium lowercase leading-none tracking-[-0.01em] text-white/45">
            what we offer
          </p>
          <h2 className="mt-2 font-display text-[clamp(2.3rem,5.6vw,5.6rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.025em] text-white sm:mt-3">
            The FROM HERE Experience
          </h2>
        </header>

        <div className="mt-[clamp(2.5rem,6vw,5.5rem)] grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 lg:grid-cols-3 lg:gap-10">
          {offerCards.map((card, index) => (
            <article
              key={card.title}
              className="group relative rounded-3xl border border-white/10 bg-white/2.5 p-7 transition-all duration-500 hover:border-brand/50 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(138,0,212,0.15)]"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-6 h-12 w-12 rounded-xl bg-gradient-to-br from-brand to-brand-bright flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  {card.icon}
                </svg>
              </div>

              <h3 className="font-display text-[1.5rem] font-extrabold uppercase tracking-[-0.02em] text-white mb-3">
                {card.title}
              </h3>

              <p className="text-[15px] leading-[1.7] text-white/85">
                {card.description}
              </p>

              <div className="mt-6 pt-6 border-t border-white/5">
                <ul className="space-y-3" role="list">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-white/75">
                      <span
                        aria-hidden="true"
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/50"
                      >
                        <svg
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <polyline points="2 6 5 9 10 3" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const offerCards = [
  {
    title: "Main Stage",
    description:
      "Keynotes and fireside chats with founders, investors, and industry leaders sharing unfiltered stories and actionable insights.",
    icon: (
      <>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
    points: [
      "Visionary founder keynotes",
      "Investor perspective panels",
      "Live Q&A sessions",
      "Recording access for alumni",
    ],
  },
  {
    title: "Hands-On Workshops",
    description:
      "Small-group sessions where you build real things — code, designs, business models, pitches — with expert guidance.",
    icon: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
        <path d="M12 2v20" />
      </>
    ),
    points: [
      "Technical skill tracks",
      "Design thinking sprints",
      "Business model canvas",
      "Pitch deck workshops",
    ],
  },
  {
    title: "Mentor Matching",
    description:
      "Structured 1:1 and small-group sessions with mentors matched to your interests, stage, and goals.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    points: [
      "Curated mentor profiles",
      "Pre-conference matching",
      "30-min focused sessions",
      "Ongoing connection platform",
    ],
  },
  {
    title: "Networking Events",
    description:
      "Designed collisions — from structured speed-networking to casual mixers — that spark real relationships.",
    icon: (
      <>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        <path d="M2 12h20" />
      </>
    ),
    points: [
      "Speed networking rounds",
      "Interest-based breakouts",
      "Founder & investor mixers",
      "Alumni welcome reception",
    ],
  },
  {
    title: "Resource Hub",
    description:
      "Lifetime access to recordings, templates, frameworks, and a growing library of community-contributed resources.",
    icon: (
      <>
        <path d="M3 11h8M13 11h8M6 11V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" />
        <path d="M18 13v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8" />
      </>
    ),
    points: [
      "Session recordings & slides",
      "Template & framework library",
      "Community discussion forum",
      "Job & opportunity board",
    ],
  },
  {
    title: "Post-Event Support",
    description:
      "The relationship doesn't end at the conference. Ongoing programs to help you execute on what you learned.",
    icon: (
      <>
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    points: [
      "90-day accountability cohorts",
      "Monthly mastermind calls",
      "Alumni-only opportunities",
      "Annual reunion summit",
    ],
  },
];