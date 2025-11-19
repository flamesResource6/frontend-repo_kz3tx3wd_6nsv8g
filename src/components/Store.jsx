import React from 'react'

const Store = () => {
  return (
    <section id="store" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5b4639] mb-3">Store</h2>
          <p className="text-[#6b4e3d]/80">Meet the Zyra Smart Stroller — comfort, safety, and care in a gentle form.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 items-start">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#FAF4E5] to-[#E5CCC0] border border-[#E4E5DD] shadow-inner flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-2xl bg-[#E4E5DD] flex items-center justify-center border border-[#d9d9d2]">
              <span className="text-[#9a8778]">Product Image</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-[#E4E5DD] p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#5b4639] mb-2">Zyra Smart Stroller</h3>
            <p className="text-[#6b4e3d]/80 mb-4">Integrated monitoring, climate care, night light, soft music, and Hug Mode.</p>
            <div className="text-[#5b4639] text-xl font-bold mb-4">$899</div>
            <ul className="text-sm text-[#6b4e3d]/90 space-y-2 mb-6 list-disc pl-5">
              <li>Temperature balancing with quiet airflow</li>
              <li>Heart & breathing monitoring</li>
              <li>Hug Mode calming pattern</li>
              <li>Long‑life battery and app control</li>
            </ul>
            <button className="px-5 py-3 rounded-xl bg-[#DEC7B5] text-[#543f32] font-semibold shadow-sm hover:shadow-md transition-all">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Store
