import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'reveal-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

export function SectionLabel({ children }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-dim">
      <span className="h-px w-8 bg-white/30" />
      {children}
    </p>
  )
}

export function IconTile({ icon: Icon, size = 20, className = '' }) {
  return (
    <span
      className={`grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[#c7c7c7] transition-all duration-300 group-hover:border-white/25 group-hover:text-white ${className}`}
    >
      <Icon size={size} strokeWidth={1.5} aria-hidden="true" />
    </span>
  )
}
