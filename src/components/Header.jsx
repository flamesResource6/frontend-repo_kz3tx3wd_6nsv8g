import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-[#E4E5DD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-[#DEC7B5] flex items-center justify-center shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b4e3d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2c2.5 2 3.5 4.5 3.5 7.5S12 18 12 22"/>
              <path d="M12 2C9.5 4 8.5 6.5 8.5 9.5S12 18 12 22"/>
            </svg>
          </div>
          <span className="font-semibold text-[#6b4e3d] text-lg tracking-tight">Zyra</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="text-[#6b4e3d]/80 hover:text-[#6b4e3d] transition-colors">Home</a>
          <a href="#dashboard" className="text-[#6b4e3d]/80 hover:text-[#6b4e3d] transition-colors">Dashboard</a>
          <a href="#store" className="text-[#6b4e3d]/80 hover:text-[#6b4e3d] transition-colors">Store</a>
          <a href="#about" className="text-[#6b4e3d]/80 hover:text-[#6b4e3d] transition-colors">About</a>
          <a href="#contact" className="text-[#6b4e3d]/80 hover:text-[#6b4e3d] transition-colors">Contact</a>
        </nav>

        <a href="#store" className="md:inline-flex hidden px-4 py-2 rounded-xl bg-[#DEC7B5] text-[#543f32] font-medium shadow-sm hover:shadow transition-all">Buy Now</a>
      </div>
    </header>
  )
}

export default Header
