import { ArrowRight } from 'lucide-react'
import { aboutFacts } from '../data.jsx'
import { Reveal } from './ui.jsx'

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-svh items-center overflow-hidden border-t border-white/10 bg-panel text-ink"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.08), transparent)' }}
      />

      <div className="pointer-events-none absolute inset-y-0 left-6 hidden items-center lg:flex">
        <span className="flex items-center gap-4 rotate-180 text-[11px] font-semibold uppercase tracking-[0.4em] text-[#8f8f8f] [writing-mode:vertical-rl]">
          <span className="h-px w-10 bg-white/25" />
          About me
        </span>
      </div>

      <div className="relative w-full py-14 lg:py-20">
        <div className="mx-auto w-full max-w-6xl px-6 lg:pl-24 lg:pr-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8f8f8f]">
                  <span className="h-px w-8 bg-white/30" />
                  About me
                </p>
              </Reveal>

              <Reveal delay={80}>
                <h2 className="mt-6 text-[clamp(1.85rem,3.2vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
                  I build automation that runs
                  <br className="hidden sm:block" />
                  in production.
                  <span className="mt-2 block text-[clamp(1.1rem,1.6vw,1.4rem)] font-medium italic tracking-[-0.01em] text-[#b5b5b5]">
                    Not demos.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#b5b5b5] ">
                  AI automation engineer and Python developer working remotely
                  with clients across the US and Europe — shipping ETL systems,
                  scrapers, and AI-integrated tools on real production data
                  every day.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <a
                  href="#projects"
                  className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-ink transition-colors duration-300 hover:text-white"
                >
                  <span className="border-b border-white/30 pb-0.5 transition-colors duration-300 group-hover:border-white">
                    View my work
                  </span>
                  <ArrowRight
                    size={16}
                    strokeWidth={1.75}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </a>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <dl className="border-t border-white/15">
                  {aboutFacts.map((fact, i) => (
                    <div
                      key={fact.label}
                      className="group flex items-baseline gap-5 border-b border-white/15 py-4 transition-colors duration-300 hover:bg-white/[0.03]"
                    >
                      <span className="w-5 shrink-0 text-[10px] font-semibold tabular-nums text-white/40">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <dt className="w-24 shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8f8f8f]">
                        {fact.label}
                      </dt>
                      <dd>
                        <p className="text-[15px] font-semibold leading-snug text-ink">
                          {fact.value}
                        </p>
                        {fact.sub && (
                          <p className="mt-0.5 text-xs leading-relaxed text-[#b5b5b5]">
                            {fact.sub}
                          </p>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#8f8f8f]">
                  <span className="h-px w-6 bg-white/20" />
                  Jhonson Ayalew — AI Automation Engineer
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
