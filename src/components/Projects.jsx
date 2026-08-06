import { useEffect, useState } from 'react'
import { ArrowUpRight, ExternalLink, Github, X } from 'lucide-react'
import { PROJECTS } from '../data.jsx'
import { Reveal, SectionLabel } from './ui.jsx'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [selected])

  return (
    <section
      id="projects"
      className="relative flex min-h-svh items-center overflow-hidden border-t border-white/10 bg-base text-ink"
    >

      <div className="relative w-full py-12 lg:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-6">
              <div>
                <SectionLabel>Projects</SectionLabel>
                <h2 className="mt-5 text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                  Selected work
                </h2>
              </div>
              <p className="max-w-sm pb-1 text-sm leading-relaxed text-mist">
                Five systems built, deployed, and running on live data. Select
                any project for the full story.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <article
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className={`group relative flex cursor-pointer flex-col rounded-lg bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#131313] lg:p-6 ${
                    p.featured ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[#c7c7c7] transition-colors duration-300 group-hover:text-white">
                      <p.icon size={20} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-dim">
                        {p.details.year}
                      </span>
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="text-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                      />
                    </span>
                  </div>

                  <h3
                    className={`mt-4 font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-white ${
                      p.featured ? 'text-lg lg:text-xl' : 'text-[15px]'
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{p.shortDesc}</p>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                    {p.featured && (
                      <span className="rounded-full border border-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b5b5b5]">
                        Featured
                      </span>
                    )}
                    <div className="ml-auto flex flex-wrap justify-end gap-1.5">
                      {p.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded border border-white/10 px-2 py-0.5 text-[10px] text-[#8f8f8f]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-dim">
                {PROJECTS.length} systems · open source on GitHub
              </p>
              <a
                href="https://github.com/JhonsonAyalew"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-xs font-medium text-[#b5b5b5] transition-colors duration-300 hover:text-white"
              >
                <Github size={14} strokeWidth={1.75} aria-hidden="true" />
                View GitHub profile
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.75}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="modal-backdrop absolute inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            aria-hidden="true"
          />

          <div className="modal-panel relative flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden rounded-xl border border-white/15 bg-[#0a0a0a]">
            <div className="overflow-y-auto p-7 lg:p-9">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[#c7c7c7]">
                  <selected.icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="rounded-md border border-white/15 p-2 text-[#d6d6d6] transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  <X size={18} strokeWidth={1.5} aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {selected.featured && (
                  <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
                    Featured
                  </span>
                )}
                <span className="rounded border border-white/10 px-2 py-0.5 text-[11px] text-dim">
                  {selected.details.year}
                </span>
              </div>

              <h3 className="mt-3 text-xl font-bold tracking-tight md:text-2xl">
                {selected.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#c7c7c7]">{selected.shortDesc}</p>

              <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-relaxed text-mist">
                {selected.details.description}
              </p>

              <div className="mt-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-dim">
                  Highlights
                </p>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {selected.details.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-[#d6d6d6]">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/40" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-dim">
                  Tech stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.details.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/15 px-2.5 py-1 text-xs text-[#c7c7c7]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
                <div className="flex items-center gap-8 text-sm">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
                      Status
                    </p>
                    <p className="mt-1 text-[#d6d6d6]">{selected.details.status}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
                      Year
                    </p>
                    <p className="mt-1 text-[#d6d6d6]">{selected.details.year}</p>
                  </div>
                </div>

                <a
                  href={selected.github || selected.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e6e6e6]"
                >
                  {selected.github ? (
                    <Github size={15} strokeWidth={2} aria-hidden="true" />
                  ) : (
                    <ExternalLink size={15} strokeWidth={2} aria-hidden="true" />
                  )}
                  {selected.github ? 'View on GitHub' : 'Visit Website'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
