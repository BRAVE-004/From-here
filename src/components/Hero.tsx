import Image from "next/image";
import SiteHeader from "./SiteHeader";

const pillars = ["Discover", "Build", "Connect", "Grow"];

export default function Hero() {
  return (
    <section
      id="here"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-night"
    >
      <Image
        src="/images/hero.jpg"
        alt="Four young people on a rocky outcrop overlooking a city skyline at sunrise"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[73%_52%] pin-b"
      />

      {/* Legibility scrims */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#040d1c]/85 via-[#040d1c]/20 to-[#040d1c]/5"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#040d1c]/90 via-[#040d1c]/30 to-transparent"
      />

      <SiteHeader />

      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-6 pb-16 pt-[clamp(8.5rem,20.4vh,14rem)] sm:px-10 sm:pb-20 lg:px-[5.8vw] lg:pb-24">
        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/75 sm:text-[13px]">
          A conference for what comes next
        </p>

        <h1 className="mt-6 font-display font-extrabold uppercase text-white [font-stretch:79%] sm:mt-9">
          <span className="block text-[clamp(2.4rem,9vw,4.6rem)] leading-[0.92] tracking-[-0.035em] sm:text-[clamp(2.6rem,7.25vw,7.3rem)]">
            Your Next
          </span>
          <span className="relative mt-1 block w-fit text-[clamp(3rem,12vw,5.6rem)] leading-[0.92] tracking-[-0.035em] sm:text-[clamp(3.4rem,9.6vw,9.6rem)]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[99%] top-[64%] -z-10 h-[clamp(120px,14vw,180px)] w-[clamp(120px,14vw,180px)] max-w-[82.5%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#c48bff_0%,#9b3fe0_40%,#a63fd0_66%,#d179a0_92%)] opacity-90 mix-blend-screen blur-[1px] sm:h-[clamp(150px,17.5vw,280px)] sm:w-[clamp(150px,17.5vw,280px)] sm:max-w-none"
            />
            Begins Here
          </span>
        </h1>

        <p className="mt-3 max-w-[33rem] text-[clamp(1rem,3.4vw,1.15rem)] leading-[1.35] text-white/95 sm:text-[clamp(1.05rem,1.55vw,1.55rem)]">
          Find your direction. Build your capabilities. Connect with the people
          and opportunities that move you forward
        </p>

        <a
          href="#about"
          className="group mt-6 block w-fit sm:mt-11 sm:inline-flex sm:w-fit sm:items-center sm:block sm:gap-4 bg-brand px-7 py-[1.1rem] text-[13px] font-bold uppercase tracking-[0.16em] text-white sm:px-9 sm:py-[1.65rem] sm:text-sm transition-colors duration-200 hover:bg-brand-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:hover:bg-brand-bright"
        >
          Start From Here
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto h-4 w-4 sm:block sm:h-5 sm:w-5 sm:translate-x-0.5 transition-transform duration-200 group-hover:translate-y-0.5"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>

        <ul className="mt-auto flex flex-wrap items-center justify-center gap-3 py-10 sm:justify-start sm:gap-x-12 sm:pt-0">
          {pillars.map((pillar) => (
            <li key={pillar} className="flex items-center gap-2 text-[14px] text-white/90 sm:text-[15px] sm:gap-x-2">
              <span aria-hidden="true" className="font-light text-white/70">
                +
              </span>
              {pillar}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
