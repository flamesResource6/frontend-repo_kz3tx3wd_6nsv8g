import React from 'react'
import { motion } from 'framer-motion'

const StoreScreen = () => {
  return (
    <div className="pb-28">
      <header className="pt-6 pb-3">
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-lg font-semibold text-[#5b4639]">Store</h2>
          <p className="text-xs text-[#7b6a5f]">Zyra Smart Stroller</p>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4">
        <div className="rounded-2xl p-4 bg-[#FAF4E5] border border-[#E4E5DD] shadow-[8px_8px_24px_rgba(206,191,175,0.35),_-6px_-6px_20px_rgba(255,255,255,0.8)]">
          <div className="aspect-video rounded-xl bg-[#E4E5DD] mb-3" />
          <h3 className="font-semibold text-[#5b4639]">Zyra Smart Stroller</h3>
          <p className="text-sm text-[#7b6a5f]">Comfort-first stroller with integrated sensors and soft climate control.</p>
          <div className="flex items-center justify-between mt-3">
            <div>
              <div className="text-[#5b4639] font-semibold">$899</div>
              <div className="text-xs text-[#7b6a5f]">Ships in 2–3 days</div>
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="rounded-full px-5 py-2 bg-[#DEC7B5] text-[#5b4639] border border-[#B9A292] shadow-[0_8px_20px_rgba(185,162,146,0.35)]"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default StoreScreen
