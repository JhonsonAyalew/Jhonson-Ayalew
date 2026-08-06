import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Bot, RotateCcw, Send } from 'lucide-react'
import { agentWelcome, askAgent, suggestedQuestions } from '../data.jsx'
import { Reveal, SectionLabel } from './ui.jsx'

const knowledgeAreas = ['Projects', 'Skills', 'Experience', 'How to hire']

function AgentAvatar() {
  return (
    <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/15 bg-gradient-to-b from-white/[0.09] to-transparent text-[11px] font-bold text-ink">
      J
      <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border-2 border-[#0c0c0c] bg-white/90" />
    </span>
  )
}

export default function Agents() {
  const [messages, setMessages] = useState([{ role: 'agent', text: agentWelcome, typing: false }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const reset = () => {
    setMessages([{ role: 'agent', text: agentWelcome, typing: false }])
    setInput('')
    setTyping(false)
  }

  const send = async (text) => {
    const prompt = (text ?? input).trim()
    if (!prompt || typing) return
    setMessages((m) => [...m, { role: 'user', text: prompt, typing: false }])
    setInput('')
    setTyping(true)
    const history = messages
      .map((m) => ({
        role: m.role === 'agent' ? 'assistant' : 'user',
        content: m.text,
      }))
      .filter((m) => m.content && m.content.trim() !== '')
    try {
      const reply = await askAgent(prompt, history)
      setMessages((m) => [...m, { role: 'agent', text: '', typing: true }])
      for (let i = 0; i <= reply.length; i += 3) {
        const slice = reply.slice(0, i)
        setMessages((m) =>
          m.map((msg, idx) => (idx === m.length - 1 ? { ...msg, text: slice } : msg)),
        )
        await new Promise((r) => setTimeout(r, 8))
      }
      setMessages((m) =>
        m.map((msg, idx) => (idx === m.length - 1 ? { ...msg, text: reply, typing: false } : msg)),
      )
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'agent', text: "I'm having trouble connecting right now. Please try again in a moment.", typing: false },
      ])
    }
    setTyping(false)
  }

  return (
    <section
      id="agents"
      className="relative flex min-h-svh items-center overflow-hidden border-t border-white/10 bg-base text-ink"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, transparent 0 3px, rgba(255,255,255,0.012) 3px 4px)',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <Reveal>
              <SectionLabel>AI Agent</SectionLabel>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-6 text-[clamp(1.9rem,3vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.03em]">
                Ask me anything — an AI agent answers
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#c9c9c9] ">
                A built-in agent trained on Jhonson's work, stack, and
                experience. Ask it about projects, skills, automation, or how
                to hire him — it replies right in the console.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-dim">
                  Try asking
                </p>
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="group flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-left text-sm text-[#d6d6d6] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[13px] text-[#8f8f8f]">❯</span>
                      {q}
                    </span>
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="shrink-0 text-dim transition-colors duration-300 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-dim">
                  What the agent knows
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {knowledgeAreas.map((k) => (
                    <li
                      key={k}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#b5b5b5]"
                    >
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 rounded-3xl bg-white/[0.04] blur-3xl"
              />

              <div className="relative flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[#0c0c0c] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.06)]">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[80%] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl"
                />

                {/* header */}
                <div className="relative flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/15 bg-gradient-to-b from-white/[0.09] to-transparent text-[#e6e6e6]">
                      <Bot size={18} strokeWidth={1.5} aria-hidden="true" />
                      <span className="absolute -bottom-px -right-px h-2.5 w-2.5 rounded-full border-2 border-[#0c0c0c] bg-white/90" />
                    </span>
                    <div>
                      <p className="flex items-center gap-2 text-sm font-bold tracking-tight text-ink">
                        Jhonson AI
                        <span className="rounded-full border border-white/15 px-1.5 py-px text-[9px] font-semibold uppercase tracking-[0.14em] text-dim">
                          beta
                        </span>
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-dim">
                        Trained on work, stack & experience
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={reset}
                    aria-label="New chat"
                    title="New chat"
                    className="rounded-md border border-white/10 p-2 text-[#b5b5b5] transition-colors duration-200 hover:border-white/25 hover:text-white"
                  >
                    <RotateCcw size={14} strokeWidth={1.75} aria-hidden="true" />
                  </button>
                </div>

                {/* messages */}
                <div
                  ref={scrollRef}
                  className="relative flex h-[400px] flex-col gap-5 overflow-y-auto px-5 py-6 sm:px-6 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-px flex-1 bg-white/10" />
                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-dim">
                      Today
                    </span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>

                  {messages.map((m, i) =>
                    m.role === 'user' ? (
                      <div key={i} className="msg-in flex flex-col items-end">
                        <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-dim">
                          You
                        </p>
                        <div className="max-w-[85%] whitespace-pre-line rounded-lg rounded-br-sm bg-white px-4 py-3 text-sm font-medium leading-relaxed text-black">
                          {m.text}
                        </div>
                      </div>
                    ) : (
                      <div key={i} className="msg-in flex items-end gap-2.5">
                        <AgentAvatar />
                        <div className="min-w-0 max-w-[85%]">
                          <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-dim">
                            Jhonson AI
                          </p>
                          <div className="whitespace-pre-line rounded-lg rounded-bl-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-[13.5px] leading-relaxed text-[#e6e6e6]">
                            {m.text}
                            {m.typing && (
                              <span className="ml-0.5 inline-block h-[13px] w-[2px] translate-y-0.5 animate-pulse bg-white/80" />
                            )}
                            {!m.text && !m.typing && (
                              <span className="inline-block text-[#8f8f8f]">▍</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ),
                  )}

                  {typing && (
                    <div className="msg-in flex items-end gap-2.5">
                      <AgentAvatar />
                      <div className="rounded-lg rounded-bl-sm border border-white/10 bg-white/[0.03] px-4 py-3">
                        <span className="flex items-center gap-1.5">
                          <span className="typing-dot" />
                          <span className="typing-dot" style={{ animationDelay: '0.15s' }} />
                          <span className="typing-dot" style={{ animationDelay: '0.3s' }} />
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* input */}
                <div className="relative border-t border-white/10 p-4">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      send()
                    }}
                    className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] p-1.5 pl-4 transition-colors duration-200 focus-within:border-white/35 focus-within:bg-white/[0.05]"
                  >
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about his work, skills, or hiring…"
                      className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-dim"
                    />
                    <button
                      type="submit"
                      aria-label="Send message"
                      disabled={!input.trim() || typing}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white text-black transition-all duration-300 hover:bg-[#e6e6e6] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <Send size={15} strokeWidth={2} aria-hidden="true" />
                    </button>
                  </form>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-dim">
                      <span className="h-1 w-1 rounded-full bg-white/40" />
                      Live demo — replies instantly
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.12em] text-white/30">
                      ⏎ enter to send
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
