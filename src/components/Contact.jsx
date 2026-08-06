import { useState } from 'react'
import { ArrowUpRight, ExternalLink, Mail, MapPin, Send } from 'lucide-react'
import { Reveal, SectionLabel } from './ui.jsx'

const channels = [
  {
    label: 'Upwork',
    value: 'Jonson Ayalew',
    href: 'https://www.upwork.com/freelancers/~011fb9ce9920513a41',
    icon: ExternalLink,
  },
  { label: 'Location', value: 'Addis Ababa, Ethiopia · remote', href: null, icon: MapPin },
]

const inputClass =
  'w-full border-b border-white/15 bg-transparent py-3 text-sm text-ink outline-none transition-colors duration-300 placeholder:text-dim focus:border-white/60'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:JhonsonAyalew21@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contact"
      className="flex min-h-svh items-center border-t border-white/10 bg-base text-ink"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionLabel>Contact</SectionLabel>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-6 text-[clamp(1.9rem,3.4vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.03em]">
                Let's build your
                <br />
                automation.
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mist md:text-lg">
                Have a scraping, ETL, or AI automation project in mind? Tell me
                about it — I usually respond within a day.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <a
                href="mailto:JhonsonAyalew21@gmail.com"
                className="group mt-10 inline-flex items-center gap-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-[#c7c7c7] transition-colors duration-300 group-hover:border-white/25 group-hover:text-white">
                  <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-dim">
                    Email me
                  </span>
                  <span className="text-sm font-medium text-ink underline decoration-white/25 underline-offset-4 transition-colors duration-300 group-hover:decoration-white">
                    JhonsonAyalew21@gmail.com
                  </span>
                </span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.75}
                  className="text-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  aria-hidden="true"
                />
              </a>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-col">
                {channels.map((c) =>
                  c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-6 border-b border-white/10 py-5 transition-colors duration-300 hover:border-white/30"
                    >
                      <span className="flex items-center gap-4">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-[#c7c7c7] transition-colors duration-300 group-hover:text-white">
                          <c.icon size={16} strokeWidth={1.5} aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-dim">
                            {c.label}
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-ink">{c.value}</p>
                        </div>
                      </span>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="shrink-0 text-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <div
                      key={c.label}
                      className="flex items-center justify-between gap-6 border-b border-white/10 py-5"
                    >
                      <span className="flex items-center gap-4">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-[#c7c7c7]">
                          <c.icon size={16} strokeWidth={1.5} aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-dim">
                            {c.label}
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-ink">{c.value}</p>
                        </div>
                      </span>
                    </div>
                  ),
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b5b5b5]">
                  Send a message
                </p>
                <span className="grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-dim">
                  <Send size={13} strokeWidth={1.75} aria-hidden="true" />
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-dim">
                    Name
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-dim">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@email.com"
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-dim">
                  Message
                </span>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                />
              </label>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e6e6e6]"
              >
                Send message
                <Send
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>

              <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-dim">
                Opens your email app — no data stored
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
