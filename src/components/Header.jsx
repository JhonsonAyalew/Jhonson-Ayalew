import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks } from '../data.jsx'

export default function Header() {
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      let current = ''

      for (const link of navLinks) {
        const el = document.getElementById(link.href.slice(1))
        if (!el) continue

        if (el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = link.href
        }
      }

      setActive(current)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const closeMobile = () => {
    setMobileOpen(false)
  }

  return (
    <header className="anim-fade-up fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-white text-sm font-bold text-black transition-transform duration-300 group-hover:-rotate-6">
            J
          </span>

          <span className="text-sm font-semibold tracking-[0.14em] text-ink">
            JHONSON AYALEW
            <span className="text-dim transition-colors duration-300 group-hover:text-white">
              .
            </span>
          </span>
        </a>


        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href

            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`group relative text-sm transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-mist hover:text-ink'
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-white transition-transform duration-300 ${
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            )
          })}
        </nav>


        {/* Desktop CV */}
        <a
          href="/download/jhonson_cv.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-[#d6d6d6] transition-all duration-300 hover:-translate-y-px hover:border-white/35 hover:text-white"
        >
          <Download size={14} strokeWidth={1.75} aria-hidden="true" />
          Download CV
        </a>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#d6d6d6] transition-colors hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={24} strokeWidth={1.8} />
          ) : (
            <Menu size={24} strokeWidth={1.8} />
          )}
        </button>

      </div>


      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl transition-all duration-300 ${
          mobileOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >

        <nav className="flex flex-col gap-5 px-6 py-6">

          {navLinks.map((link) => {
            const isActive = active === link.href

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className={`text-sm transition-colors duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-mist hover:text-white'
                }`}
              >
                {link.label}
              </a>
            )
          })}


          <a
            href="/download/jhonson_cv.pdf"
            download
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-[#d6d6d6] transition-all duration-300 hover:border-white/35 hover:text-white"
          >
            <Download size={14} strokeWidth={1.75} />
            Download CV
          </a>

        </nav>

      </div>

    </header>
  )
}
