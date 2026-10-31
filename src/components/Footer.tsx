import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night/90 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-14 sm:px-10 lg:px-[5.8vw]">
        {/* Community Callout Banner */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center sm:flex-row sm:p-8 sm:text-left">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-bright">
              Get Connected
            </p>
            <h3 className="mt-1 font-display text-[1.4rem] font-extrabold uppercase tracking-[-0.02em] text-white sm:text-[1.7rem]">
              Join our community
            </h3>
            <p className="mt-1 text-[14px] text-white/60">
              Connect directly with participants, mentors, and organizers on WhatsApp.
            </p>
          </div>
          <a
            href="https://chat.whatsapp.com/K24skMjObOw48KkIeWDas0?s=cl&p=i&mlu=4&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.14em] text-emerald-400 transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500 hover:text-night hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.301-.15-1.776-.876-2.05-.975-.276-.1-.476-.15-.676.15-.2.299-.775.974-.95 1.174-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.488-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.131-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.926-2.23-.244-.585-.492-.506-.676-.515-.174-.009-.374-.01-.574-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.026-1.05 2.5 0 1.474 1.075 2.899 1.225 3.099.15.2 2.115 3.23 5.124 4.53.716.31 1.275.495 1.71.634.72.23 1.375.197 1.893.12.578-.087 1.776-.726 2.026-1.426.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35zm-5.467 7.618a10.024 10.024 0 0 1-5.11-1.393l-.366-.218-3.799.997 1.014-3.703-.238-.379a9.986 9.986 0 0 1-1.53-5.304c0-5.526 4.498-10.024 10.029-10.024 2.678 0 5.197 1.044 7.091 2.937a10 10 0 0 1 2.932 7.086c0 5.53-4.498 10.027-10.023 10.027zm8.508-18.536A11.954 11.954 0 0 0 12.005 0C5.385 0 .004 5.38.004 12a11.94 11.94 0 0 0 1.606 6.002L0 24l6.155-1.615A11.943 11.943 0 0 0 12.005 24c6.623 0 12.005-5.38 12.005-12a11.93 11.93 0 0 0-3.492-8.536z" />
            </svg>
            Join WhatsApp Group
          </a>
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* brand */}
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <a
              href="#here"
              aria-label="FROM HERE — back to top"
              className="group flex shrink-0 flex-col items-center md:items-start"
            >
              <span className="font-display text-[19px] font-extrabold uppercase leading-none tracking-[-0.02em]">
                From
              </span>
              <span
                className="mt-[3px] rounded-full border-2 border-brand-deep px-[7px] pb-[2px] pt-[1px] font-display text-[19px] font-extrabold uppercase leading-[1.05] tracking-[-0.02em] shadow-[0_0_20px_rgba(138,0,212,0.55)] transition-shadow duration-300 group-hover:shadow-[0_0_26px_rgba(168,31,255,0.85)]"
              >
                Here
              </span>
            </a>
            <p className="text-[14px] text-white/60 max-w-xs">
              A conference for what comes next. 5th DEC · Uli, Anambra.
            </p>
          </div>

          {/* in-page nav */}
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[14px] text-white/60">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#offer" className="hover:text-white transition-colors">Offer</a>
            <a href="#vision" className="hover:text-white transition-colors">Vision</a>
            <a href="#mission" className="hover:text-white transition-colors">Mission</a>
          </nav>

          {/* official social links: Gmail, Instagram, X, WhatsApp */}
          <div className="flex items-center gap-3">
            {/* Gmail */}
            <a
              href="mailto:fromhere477@gmail.com"
              aria-label="Email fromhere477@gmail.com"
              title="Email: fromhere477@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/65 transition-all duration-300 hover:border-[#EA4335]/50 hover:bg-[#EA4335]/10 hover:text-[#EA4335] hover:scale-110"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/fromhere2026?exln=MTMxYXEwdzdhYTJ2dg%3D%3D&utm_source=qr&wa_status_inline=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="From Here on Instagram"
              title="Instagram: @fromhere2026"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/65 transition-all duration-300 hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10 hover:text-[#E4405F] hover:scale-110"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* X (formerly Twitter) */}
            <a
              href="https://x.com/fromherecoou?s=11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="From Here on X"
              title="X: @fromherecoou"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/65 transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:text-white hover:scale-110"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://chat.whatsapp.com/K24skMjObOw48KkIeWDas0?s=cl&p=i&mlu=4&ilr=4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our WhatsApp community"
              title="WhatsApp: Join community"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/65 transition-all duration-300 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-[#25D366] hover:scale-110"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M17.472 14.382c-.301-.15-1.776-.876-2.05-.975-.276-.1-.476-.15-.676.15-.2.299-.775.974-.95 1.174-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.488-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.131-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.926-2.23-.244-.585-.492-.506-.676-.515-.174-.009-.374-.01-.574-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.026-1.05 2.5 0 1.474 1.075 2.899 1.225 3.099.15.2 2.115 3.23 5.124 4.53.716.31 1.275.495 1.71.634.72.23 1.375.197 1.893.12.578-.087 1.776-.726 2.026-1.426.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35zm-5.467 7.618a10.024 10.024 0 0 1-5.11-1.393l-.366-.218-3.799.997 1.014-3.703-.238-.379a9.986 9.986 0 0 1-1.53-5.304c0-5.526 4.498-10.024 10.029-10.024 2.678 0 5.197 1.044 7.091 2.937a10 10 0 0 1 2.932 7.086c0 5.53-4.498 10.027-10.023 10.027zm8.508-18.536A11.954 11.954 0 0 0 12.005 0C5.385 0 .004 5.38.004 12a11.94 11.94 0 0 0 1.606 6.002L0 24l6.155-1.615A11.943 11.943 0 0 0 12.005 24c6.623 0 12.005-5.38 12.005-12a11.93 11.93 0 0 0-3.492-8.536z" />
              </svg>
            </a>
          </div>
        </div>

        {/* copyright & startup attribution */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-[13px] text-white/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} FROM HERE. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 text-[12px] text-white/50">
            <span className="tracking-[0.14em] uppercase font-medium">Designed &amp; Developed by</span>
            <a
              href="https://fortis-stack.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/25 bg-blue-500/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <Image
                src="/images/fortis-stack-transparent.png"
                alt="Fortis-Stack Ltd Logo"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span className="font-display font-bold uppercase tracking-[0.06em] text-[12px] text-white">
                Fortis-Stack Ltd
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
