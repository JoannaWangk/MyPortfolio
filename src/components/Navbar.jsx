import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Hello', href: '#hello' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('hello')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a className="navbar-brand" href="#hello" onClick={() => handleLinkClick('#hello')}>
          <span className="brand-name">Joanna Wang</span>
          <span className="brand-diamond">◆</span>
        </a>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                className={active === href.slice(1) ? 'active' : ''}
                href={href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(href) }}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="btn-say-hello"
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleLinkClick('#contact') }}
            >
              Say Hello
            </a>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
