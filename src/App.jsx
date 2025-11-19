import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Store from './components/Store'
import Footer from './components/Footer'
import './index.css'

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    const handler = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    links.forEach((l) => l.addEventListener('click', handler))
    return () => links.forEach((l) => l.removeEventListener('click', handler))
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF4E5] text-[#5b4639]">
      <Header />

      <main className="">
        <Hero />
        <About />
        <section className="py-8 bg-[#E4E5DD]" aria-hidden>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="h-1.5 w-24 rounded-full bg-[#DEC7B5]" />
          </div>
        </section>
        <Dashboard />
        <Store />
      </main>

      <Footer />
    </div>
  )
}

export default App
