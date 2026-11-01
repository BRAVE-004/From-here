import Image from "next/image";
import React from "react";

type PossibleIcon = "learn" | "build" | "connect" | "grow" | "poster";

type PossibleCard = {
  key: PossibleIcon;
  title: string;
  description: string;
  accent: string;
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
};

const cards: PossibleCard[] = [
  {    key: "learn",
    title: "Learn",
    description: "Develop the knowledge, skills, and mindset to pursue your path — with guidance from people who have already walked it.",
    accent: "#4778D5",
    image: "/images/offer-learn.webp",
    imageAlt: "A person bending to pull back the sky, revealing rolling green hills beneath",
    imageSide: "left",
  },
  {
    key: "build",
    title: "Build",
    description: "Turn ideas, skills, and opportunities into something tangible. Hands-on work, real briefs, real output.",
    accent: "#8664DF",
    image: "/images/offer-build.webp",
    imageAlt: "A hand reaching out toward a glass skyscraper against a clear blue sky",
    imageSide: "right",
  },
  {
    key: "connect",
    title: "Connect",
    description: "Meet people, mentors, collaborators, investors, and communities. The relationships that change everything.",
    accent: "#10B9A4",
    image: "/images/offer-connect.webp",
    imageAlt: "Silhouettes of people in discussion around a table, orange sun behind them",
    imageSide: "left",
  },
  {
    key: "grow",
    title: "Grow",
    description: "Turn what you learn and build into momentum — opportunities, influence, and impact that compound over time.",
    accent: "#F59E0B",
    image: "/images/offer-grow.webp",
    imageAlt: "People ascending a dramatic spiral staircase, black and white",
    imageSide: "right",
  },
  {
    key: "poster",
    title: "Join Us",
    description: "5TH OF DECEMBER · COOU, ULI Campus",
    accent: "#F472B6",
    image: "/images/offer-poster.webp",
    imageAlt: "Poster with FROM HERE text, orbital structures, and people in VR",
    imageSide: "right",
  },
];

function LearnIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
    >
      <circle cx="24" cy="17" r="11" />
      <path d="M24 28v11" />
      <path d="M17 39h14" />
    </svg>
  );
}

function BuildIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
    >
      <rect x="6" y="6" width="14" height="14" rx="2" />
      <rect x="28" y="6" width="14" height="14" rx="2" />
      <rect x="17" y="28" width="14" height="14" rx="2" />
    </svg>
  );
}

function ConnectIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
    >
      <circle cx="16" cy="14" r="5.5" />
      <path d="M6 36a10 10 0 0 1 20 0" />
      <path d="M30 9a8 8 0 0 1 0 12" />
      <path d="M35 4.5a13.5 13.5 0 0 1 0 21" />
    </svg>
  );
}

function PosterIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
    >
      <rect x="6" y="6" width="14" height="14" rx="2" />
      <rect x="28" y="6" width="14" height="14" rx="2" />
    </svg>
  );
}

function GrowIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
    >
      <path d="M24 42V22" />
      <path d="M24 22c-9 0-14-5-14-14 9 0 14 5 14 14Z" />
      <path d="M24 28c9 0 14-5 14-14-9 0-14 5-14 14Z" />
      <path d="M15 42h18" />
    </svg>
  );
}

const iconFor: Record<PossibleIcon, () => React.ReactElement> = {
  learn: LearnIcon,
  build: BuildIcon,
  connect: ConnectIcon,
  grow: GrowIcon,
  poster: PosterIcon,
};

function Card({ card, index }: { card: PossibleCard; index: number }) {
  const Icon = iconFor[card.key];
  // reference design: odd rows (0, 2) → image LEFT, text RIGHT
  //                   even rows (1, 3) → text LEFT, image RIGHT
  const imageLeft = index % 2 === 0;

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 min-h-[clamp(320px,42vw,520px)]">
      {/* ── IMAGE panel ── */}
      <div
        className={[
          "relative w-full",
          // mobile: always full height aspect ratio
          "aspect-[4/3] lg:aspect-auto",
          imageLeft ? "lg:order-1" : "lg:order-2",
        ].join(" ")}
      >
        <Image
          src={card.image}
          alt={card.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        {/* subtle dark gradient toward the text panel */}
        <div
          aria-hidden="true"
          className={[
            "absolute inset-0",
            imageLeft
              ? "bg-gradient-to-r from-transparent to-[#0b1019]/30"
              : "bg-gradient-to-l from-transparent to-[#0b1019]/30",
          ].join(" ")}
        />
      </div>

      {/* ── TEXT panel ── */}
      <div
        className={[
          "flex flex-col justify-center bg-panel",
          "px-[clamp(2rem,5vw,5.5rem)] py-[clamp(2.5rem,5vw,5rem)]",
          imageLeft ? "lg:order-2" : "lg:order-1",
        ].join(" ")}
      >
        {/* icon */}
        <span
          className="mb-5 block leading-none"
          style={{ color: card.accent }}
          aria-hidden="true"
        >
          <Icon />
        </span>

        {/* title — large, condensed, uppercase, matches Hero h1 */}
        <h3
          className="font-display font-extrabold uppercase leading-none tracking-[-0.025em] text-white"
          style={{
            fontSize: "clamp(2.4rem,4.5vw,5rem)",
            fontFamily: "var(--font-archivo)",
            fontStretch: "79%",
          }}
        >
          {card.title}
        </h3>

        {/* rule — thin accent line matching icon color */}
        <div
          aria-hidden="true"
          className="my-5 h-px w-12"
          style={{ background: card.accent, opacity: 0.5 }}
        />

        {/* description */}
        <p className="max-w-[38ch] text-[clamp(0.9rem,1.1vw,1.05rem)] leading-[1.8] text-white/55">
          {card.description}
        </p>
      </div>
    </article>
  );
}

export default function WhatIsPossible() {
  return (
    <section
      id="offer"
      className="scroll-mt-28 overflow-hidden bg-night"
      aria-labelledby="wip-heading"
    >
      {/* ── section header — same eyebrow rhythm as About / Vision / Mission ── */}
      <div className="mx-auto w-full max-w-[1600px] px-6 pt-[clamp(5rem,9vw,9rem)] sm:px-10 lg:px-[5.8vw]">
        {/* rule + label */}
        <div className="mb-14 flex items-center gap-5">
          <div aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-white/[0.07] to-transparent" />
          <p className="shrink-0 text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">
            Offer — What&apos;s possible
          </p>
          <div aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-white/[0.07] to-transparent" />
        </div>

        <div className="pb-[clamp(2.5rem,5vw,5rem)] text-center">
          <h2
            id="wip-heading"
            className="font-display font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-white"
            style={{
              fontSize: "clamp(2.6rem,6vw,6.5rem)",
              fontFamily: "var(--font-archivo)",
              fontStretch: "79%",
            }}
          >
            From Here
          </h2>
        </div>
      </div>

      {/* ── alternating image / text rows — no gaps between rows ── */}
      <div className="flex flex-col">
        {cards.map((card, i) => (
          <Card key={card.key} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
