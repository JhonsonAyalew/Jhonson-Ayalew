import { ArrowRight, MapPin } from 'lucide-react'
import { socials } from '../data.jsx'

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-6 pb-10 pt-28 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="max-w-xl">
            <p
              className="anim-fade-up flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-dim"
              style={{ animationDelay: '80ms' }}
            >
              <span className="h-px w-8 bg-white/30" />
              AI Automation Engineer
            </p>

            <h1
              className="anim-fade-up mt-6 text-[clamp(2.9rem,6.2vw,5rem)] font-bold leading-[1.02] tracking-[-0.035em] text-ink"
              style={{ animationDelay: '160ms' }}
            >
              Jhonson Ayalew
            </h1>

            <p
              className="anim-fade-up mt-4 text-lg font-medium text-[#c7c7c7]"
              style={{ animationDelay: '220ms' }}
            >
              Python &amp; Full-Stack Developer
            </p>

            <p
              className="anim-fade-up mt-5 max-w-lg text-base leading-relaxed text-mist md:text-[17px]"
              style={{ animationDelay: '280ms' }}
            >
              I build automation pipelines, ETL systems, web scrapers, and
              AI-integrated tools that run in production — not demos. Based
              in Addis Ababa, working with clients across the US and Europe.
            </p>

            <div
              className="anim-fade-up mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '360ms' }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e6e6e6]"
              >
                View Projects
                <ArrowRight size={16} strokeWidth={2} />
              </a>
              <a
                href="mailto:JhonsonAyalew21@gmail.com"
                className="inline-flex items-center gap-2.5 rounded-md border border-white/15 px-7 py-3.5 text-sm font-medium text-[#d6d6d6] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:text-white"
              >
                Get in Touch
              </a>
            </div>

            <p
              className="anim-fade-up mt-12 text-[11px] font-medium uppercase tracking-[0.26em] text-dim"
              style={{ animationDelay: '440ms' }}
            >
              Automation
              <span className="mx-3 text-white/25">·</span>
              ETL
              <span className="mx-3 text-white/25">·</span>
              Web Scraping
              <span className="mx-3 text-white/25">·</span>
              AI Integration
            </p>
          </div>

          <div className="anim-portrait relative mx-auto w-full max-w-[470px]">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-full opacity-40 blur-2xl"
                style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.12), transparent)' }}
                aria-hidden="true"
              />
              <img
                src="/download/jhonson.png"
                alt="Portrait of Jhonson Ayalew"
                className="relative w-full"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                }}
              />
            </div>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-dim">
              <MapPin size={13} strokeWidth={1.5} aria-hidden="true" />
              Addis Ababa, Ethiopia — working globally
            </p>
          </div>
        </div>
      </div>

      <ul
        className="anim-fade-in absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex"
        style={{ animationDelay: '560ms' }}
      >
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-[#8f8f8f] transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
            >
              {s.icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
