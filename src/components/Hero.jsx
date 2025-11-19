import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-[#E5CCC0]/60 text-[#6b4e3d] text-xs mb-4">Smart Babycare System</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#5b4639] mb-4">
            Zyra — gentle tech for peaceful parenting
          </h1>
          <p className="text-[#6b4e3d]/80 text-lg leading-relaxed mb-8">
            Real-time comfort and safety for your little one with temperature control, vital monitoring, and soothing care — all in one soft, friendly system.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#store" className="px-5 py-3 rounded-xl bg-[#DEC7B5] text-[#543f32] font-semibold shadow-sm hover:shadow-md transition-all">Buy Now</a>
            <a href="#dashboard" className="px-5 py-3 rounded-xl bg-[#E4E5DD] text-[#5b4639] font-semibold hover:bg-[#E4E5DD]/80 transition-colors">Dashboard</a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#FAF4E5] to-[#E5CCC0] border border-[#E4E5DD] shadow-inner flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-2xl bg-[#E4E5DD] flex items-center justify-center border border-[#d9d9d2]">
              <span className="text-[#9a8778]">Placeholder Image</span>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-[#FAF4E5] border border-[#E4E5DD]"/>
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-[#E5CCC0] border border-[#E4E5DD] opacity-80"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
