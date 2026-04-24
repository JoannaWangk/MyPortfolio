import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useFadeIn()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
