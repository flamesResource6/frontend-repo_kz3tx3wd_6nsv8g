import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-[#E4E5DD] bg-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#6b4e3d]/70">© {new Date().getFullYear()} Zyra. Gentle tech for tiny humans.</p>
        <div className="text-sm text-[#6b4e3d]/70">hello@zyra.example</div>
      </div>
    </footer>
  )
}

export default Footer
