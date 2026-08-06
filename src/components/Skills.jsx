import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { PROJECTS, SKILLS } from '../data.jsx'
import { Reveal, SectionLabel } from './ui.jsx'

export default function Skills() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIndex((i) => (i + 1) % SKILLS.length), 3500)
    return () => clearInterval(t)
  }, [paused])

  const skill = SKILLS[index]
  const related = skill.relatedProjects
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter(Boolean)

  const go = (i) => setIndex((i + SKILLS.length) % SKILLS.length)

  return (
    <section
      id="skills"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative flex min-h-svh items-center overflow-hidden border-t border-white/10 bg-base text-ink"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px]"
      >
        <div className="absolute inset-0 rounded-full border border-white/[0.05] animate-[spin_40s_linear_infinite]" />
        <div className="absolute inset-20 rounded-full border border-dashed border-white/[0.04] animate-[spin_26s_linear_infinite_reverse]" />
        <div className="absolute inset-40 rounded-full border border-white/[0.03]" />
      </div>

      <div className="relative w-full py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 pb-8">
              <div>
                <SectionLabel>Skills</SectionLabel>
                <h2 className="mt-5 text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                  My technical stack
                </h2>
              </div>
              <p className="max-w-sm pb-1 text-sm leading-relaxed text-mist">
                {SKILLS.length} skills, one live spotlight — hover to pause,
                click to jump straight to a skill.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mt-6 lg:mt-8">
              {/* stage */}
              <div key={skill.id} className="anim-fade-up relative">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 right-0 select-none text-[clamp(5rem,10vw,8.5rem)] font-bold leading-none tracking-[-0.06em] text-white/[0.04]"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-dim">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/60" />
                  Live index — {skill.category}
                  <span className="text-white/25">
                    {String(index + 1).padStart(2, '0')} / {String(SKILLS.length).padStart(2, '0')}
                  </span>
                </p>

                <h3 className="mt-4 bg-gradient-to-b from-white via-white/70 to-white/25 bg-clip-text text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-transparent">
                  {skill.name}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist">{skill.desc}</p>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {related.length > 0 ? (
                    related.slice(0, 2).map((p) => (
                      <a
                        key={p.id}
                        href={p.github || p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 text-sm font-semibold text-ink"
                      >
                        <span className="border-b border-white/30 pb-0.5 transition-colors duration-300 group-hover:border-white">
                          {p.title}
                        </span>
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.75}
                          aria-hidden="true"
                          className="text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                        />
                      </a>
                    ))
                  ) : (
                    <span className="text-sm text-mist">Used across production workflows.</span>
                  )}
                </div>
              </div>

              {/* controls */}
              <div className="absolute right-0 top-0 hidden gap-2 sm:flex">
                <button
                  onClick={() => go(index - 1)}
                  aria-label="Previous skill"
                  className="rounded-md border border-white/15 p-2 text-[#d6d6d6] transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  <ArrowLeft size={16} strokeWidth={1.75} aria-hidden="true" />
                </button>
                <button
                  onClick={() => go(index + 1)}
                  aria-label="Next skill"
                  className="rounded-md border border-white/15 p-2 text-[#d6d6d6] transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </button>
              </div>

              {/* pill index */}
              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="flex flex-wrap items-center gap-2">
                  {SKILLS.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => go(i)}
                      aria-pressed={i === index}
                      className={`rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300 ${
                        i === index
                          ? 'border-white bg-white text-black'
                          : 'border-white/15 text-[#8f8f8f] hover:border-white/40 hover:text-ink'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
