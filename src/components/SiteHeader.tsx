"use client";

import { useEffect, useState } from "react";

const links: { label: string; href: string }[] = [
  { label: "Offer", href: "#offer" },
  { label: "About", href: "#about" },
  { label: "HERE", href: "#here" },
  { label: "Vision", href: "#vision" },
  { label: "Mission", href: "#mission" },
];

const SECTION_ID: Record<string, string> = {
  Offer: "offer",
  About: "about",
  HERE: "here",
  Vision: "vision",
  Mission: "mission",
};

function CalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
    >
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
    >
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function Logo() {
  return (
    <a
      href="#here"
      aria-label="FROM HERE — back to top"
      className="group flex shrink-0 flex-col items-start"
    >
      <span className="font-display text-[21px] font-extrabold uppercase leading-none tracking-[-0.02em]">
        From
      </span>
      <span className="mt-[3px] rounded-full border-2 border-brand-deep px-[7px] pb-[2px] pt-[1px] font-display text-[21px] font-extrabold uppercase leading-[1.05] tracking-[-0.02em] shadow-[0_0_20px_rgba(138,0,212,0.55)] transition-shadow duration-300 group-hover:shadow-[0_0_26px_rgba(168,31,255,0.85)]">
        Here
      </span>
    </a>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("here");

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          intersecting.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(intersecting[0].target.id);
        }
      },
      { threshold: 0.45 }
    );

    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isActive = (label: string) => SECTION_ID[label] === activeSection;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-night/85 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6 px-6 pb-4 pt-7 sm:px-10 sm:pt-8 lg:px-[5.8vw] lg:pb-5 lg:pt-[3.4vw]">
        <Logo />

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-[15px] text-white/90 lg:flex xl:gap-14"        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={isActive(link.label) ? "page" : undefined}
              className={
                "relative py-2 transition-colors hover:text-white " +
                (isActive(link.label) ? "font-semibold text-white" : "")
              }
            >
              {link.label}
              {isActive(link.label) ? (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-brand shadow-[0_0_12px_rgba(168,31,255,0.9)]"
                />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-8 text-[15px] text-white/90 lg:flex">
          <span className="flex items-center gap-2">
            <span className="text-brand-bright">
              <CalendarIcon />
            </span>
            5th DEC
          </span>
          <span className="flex items-center gap-2">
            <span className="text-brand-bright">
              <PinIcon />
            </span>
            Uli, Anambra
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-white/25 bg-white/5 backdrop-blur transition-colors hover:border-white/50 lg:hidden"
        >
          <span
            className={
              "h-[1.5px] w-5 bg-white transition-transform duration-300 " +
              (open ? "translate-y-[3.75px] rotate-45" : "")
            }
          />
          <span
            className={
              "h-[1.5px] w-5 bg-white transition-transform duration-300 " +
              (open ? "-translate-y-[3.75px] -rotate-45" : "")
            }
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={
          "mx-6 overflow-hidden rounded-2xl border border-white/10 bg-night/90 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden " +
          (open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0")
        }
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.label) ? "page" : undefined}
              className={
                "rounded-xl px-4 py-3 text-base transition-colors hover:bg-white/5 " +
                (isActive(link.label) ? "font-semibold text-white" : "text-white/80")
              }
            >
              {link.label}
              {isActive(link.label) ? (
                <span
                  aria-hidden="true"
                  className="ml-2 h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_8px_rgba(168,31,255,0.9)]"
                />
              ) : null}
            </a>
          ))}
          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 px-4 pt-4 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <span className="text-brand-bright">
                <CalendarIcon />
              </span>
              5th DEC
            </span>
            <span className="flex items-center gap-2">
              <span className="text-brand-bright">
                <PinIcon />
              </span>
              Uli, Anambra
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
