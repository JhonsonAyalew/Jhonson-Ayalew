import { Briefcase, GraduationCap, Rocket } from 'lucide-react'
import { experience } from '../data.jsx'
import { Reveal, SectionLabel } from './ui.jsx'

const ICONS = { Education: GraduationCap, Freelance: Briefcase, Production: Rocket }

export default function Experience() {
  const lastIndex = experience.length - 1

  return (
    <section
      id="experience"
      className="relative flex min-h-svh items-center overflow-hidden border-t border-white/10 bg-base text-ink"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.07), transparent)' }}
      />

      <div className="relative w-full py-10 lg:py-14">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 pb-8 lg:pb-10">
              <div>
                <SectionLabel>Experience</SectionLabel>
                <h2 className="mt-5 text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                  Two years in — shipping systems that run 24/7.
                </h2>
              </div>
              <p className="max-w-sm pb-1 text-sm leading-relaxed text-mist">
                From the classroom to production. A quick look at the journey,
                the work, and where I am now.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/25 to-transparent lg:block"
              />
              <span
                aria-hidden="true"
                className="absolute right-0 top-6 hidden h-4 w-[3px] -translate-y-1/2 animate-pulse bg-white/50 lg:block"
              />

              <div className="grid gap-6 lg:grid-cols-4 lg:gap-5">
                {experience.map((item, i) => {
                  const Icon = ICONS[item.type] || GraduationCap
                  const isCurrent = i === lastIndex

                  return (
                    <div key={item.year + item.title} className="group relative h-full lg:pt-16">
                      <span className="absolute left-5 top-6 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                        <span className="relative grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-gradient-to-b from-white/[0.08] to-transparent text-[#c7c7c7] shadow-[inset_0_0_12px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:border-white/60 group-hover:text-white">
                          <span
                            aria-hidden="true"
                            className="absolute inset-[4px] rounded-full border border-white/15"
                          />
                          {isCurrent && (
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 animate-ping rounded-full bg-white/10 opacity-40"
                            />
                          )}
                          <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
                        </span>
                      </span>

                      <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-[#131313]">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                        />

                        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
                          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
                            {isCurrent && (
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/50" />
                            )}
                            {item.type}
                          </span>
                          <span className="rounded border border-white/15 px-1.5 py-0.5 text-[10px] font-semibold tabular-nums tracking-[0.14em] text-white/40">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
                          <span className="bg-gradient-to-b from-white/45 via-white/20 to-white/5 bg-clip-text text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold leading-none tracking-[-0.04em] text-transparent transition-all duration-300 group-hover:from-white/70 group-hover:to-white/25">
                            {item.year}
                          </span>

                          <h3 className="mt-3 text-sm font-bold leading-snug tracking-tight text-ink lg:text-[15px]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-mist">{item.desc}</p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 border-t border-white/10 px-5 py-3.5">
                          {item.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[10px] text-[#8f8f8f]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 lg:mt-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-dim">
                {experience.length} milestones · {experience[0].year} →{' '}
                {experience[experience.length - 1].year}
              </p>
              <p className="hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-dim sm:flex">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white/60" />
                </span>
                Open to new opportunities
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
