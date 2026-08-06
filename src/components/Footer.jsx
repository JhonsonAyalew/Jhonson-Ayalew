import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react'
import { navLinks, socials } from '../data.jsx'

const marqueeItems = [
  'AI Automation',
  'Web Scraping',
  'ETL Pipelines',
  'Python',
  'React',
  'PostgreSQL',
  'Claude AI',
  'Data Engineering',
  'Telegram Bots',
  'REST APIs',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-base text-ink">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-44 left-1/2 h-80 w-[70%] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          {/* brand */}
          <div>
            <a href="#top" className="text-sm font-semibold tracking-[0.14em] text-ink">
              JHONSON AYALEW
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
              AI automation engineer and Python developer building systems that
              run in production — not demos.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-medium text-[#b5b5b5]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white/70" />
              </span>
              Available for freelance
            </div>

            <div className="mt-6 flex items-center gap-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="text-dim transition-colors duration-300 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* navigate */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-dim">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-mist transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* connect */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-dim">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:JhonsonAyalew21@gmail.com"
                  className="group inline-flex items-center gap-2 text-sm text-mist transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-4" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/johnson-ayalew"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-mist transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~011fb9ce9920513a41"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-mist transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-4" />
                  Upwork
                </a>
              </li>
            </ul>
            <a
              href="mailto:JhonsonAyalew21@gmail.com"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e6e6e6]"
            >
              <Mail size={13} strokeWidth={2} aria-hidden="true" />
              Email me
            </a>
          </div>
        </div>

        {/* skill marquee */}
        <div className="mt-14 overflow-hidden border-y border-white/10 py-4">
          <div className="marquee flex w-max">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                aria-hidden={i >= marqueeItems.length}
                className="flex shrink-0 items-center gap-6 px-6"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/30">
                  {item}
                </span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
              </span>
            ))}
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 py-6 sm:flex-row">
          <p className="text-xs text-dim">
            © {new Date().getFullYear()} Jhonson Ayalew — AI Automation Engineer
          </p>
          <a
            href="#top"
            className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-mist transition-colors duration-300 hover:border-white/40 hover:text-white"
          >
            Back to top
            <ArrowUp
              size={13}
              strokeWidth={1.75}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      {/* watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative select-none px-6 pb-2 lg:px-8"
      >
        <p className="mx-auto w-full max-w-6xl whitespace-nowrap bg-gradient-to-b from-white/[0.08] to-transparent bg-clip-text text-center text-[clamp(2.5rem,12vw,9rem)] font-bold leading-[0.9] tracking-[-0.05em] text-transparent">
          JHONSON AYALEW
        </p>
      </div>

      <span
        aria-hidden="true"
        className="block h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <p className="flex items-center justify-center gap-2 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
        <ArrowUpRight size={11} strokeWidth={2} aria-hidden="true" />
        Built with React — crafted line by line
      </p>
    </footer>
  )
}
