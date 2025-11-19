import React, { useEffect, useMemo, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Toggle = ({ label, checked, onChange }) => (
  <button
    onClick={() => onChange(!checked)}
    className={`w-full flex items-center justify-between rounded-2xl px-4 py-3 border transition-all duration-300 ${
      checked
        ? 'bg-[#E5CCC0]/60 border-[#DEC7B5] shadow-inner'
        : 'bg-[#FAF4E5] border-[#E4E5DD] shadow-[8px_8px_24px_rgba(206,191,175,0.35),_-6px_-6px_20px_rgba(255,255,255,0.8)]'
    }`}
  >
    <span className="text-[#5b4639]">{label}</span>
    <span
      className={`ml-3 inline-flex h-7 w-12 items-center rounded-full p-1 transition-all ${
        checked ? 'bg-[#DEC7B5]' : 'bg-[#E4E5DD]'
      }`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        className={`h-5 w-5 rounded-full bg-white shadow ${checked ? 'ml-5' : ''}`}
      />
    </span>
  </button>
)

const CircleGauge = ({ value = 62, color = '#B9A292' }) => {
  const radius = 38
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" className="block">
      <circle cx="50" cy="50" r={radius} stroke="#E4E5DD" strokeWidth="10" fill="none" />
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        stroke={color}
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </svg>
  )
}

const HeartPulse = () => {
  const controls = useAnimation()
  useEffect(() => {
    controls.start({ scale: [1, 1.12, 1], transition: { repeat: Infinity, duration: 1.2 } })
  }, [controls])
  return (
    <motion.div animate={controls} className="h-3 w-3 rounded-full bg-[#B9A292]" />
  )
}

const Wave = () => {
  return (
    <svg viewBox="0 0 120 28" className="w-full h-8">
      <path
        d="M0 14 Q 10 0 20 14 T 40 14 T 60 14 T 80 14 T 100 14 T 120 14"
        fill="none"
        stroke="#B9A292"
        strokeWidth="2"
      />
    </svg>
  )
}

const DashboardScreen = () => {
  const [toggles, setToggles] = useState({ cooling: true, heating: false, light: true, hug: false })
  
  return (
    <div className="pb-24">
      <header className="pt-6 pb-3">
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-lg font-semibold text-[#5b4639]">Dashboard</h2>
          <p className="text-xs text-[#7b6a5f]">Live comfort and vitals</p>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1 rounded-2xl p-3 bg-[#FAF4E5] border border-[#E4E5DD] shadow-[8px_8px_24px_rgba(206,191,175,0.35),_-6px_-6px_20px_rgba(255,255,255,0.8)] flex flex-col items-center">
            <CircleGauge value={72} />
            <div className="text-xs text-[#5b4639] -mt-2">Temperature</div>
          </div>
          <div className="col-span-1 rounded-2xl p-3 bg-[#FAF4E5] border border-[#E4E5DD] shadow-[8px_8px_24px_rgba(206,191,175,0.35),_-6px_-6px_20px_rgba(255,255,255,0.8)] flex flex-col items-center justify-center gap-1">
            <HeartPulse />
            <div className="text-xs text-[#5b4639]">Heart Rate</div>
            <div className="text-[10px] text-[#7b6a5f]">132 bpm</div>
          </div>
          <div className="col-span-1 rounded-2xl p-3 bg-[#FAF4E5] border border-[#E4E5DD] shadow-[8px_8px_24px_rgba(206,191,175,0.35),_-6px_-6px_20px_rgba(255,255,255,0.8)]">
            <Wave />
            <div className="text-xs text-[#5b4639] text-center -mt-1">Breathing</div>
          </div>
        </div>

        <div className="space-y-2">
          <Toggle
            label="Cooling"
            checked={toggles.cooling}
            onChange={(v) => setToggles((t) => ({ ...t, cooling: v }))}
          />
          <Toggle
            label="Heating"
            checked={toggles.heating}
            onChange={(v) => setToggles((t) => ({ ...t, heating: v }))}
          />
          <Toggle
            label="Night Light"
            checked={toggles.light}
            onChange={(v) => setToggles((t) => ({ ...t, light: v }))}
          />
          <Toggle
            label="Hug Mode"
            checked={toggles.hug}
            onChange={(v) => setToggles((t) => ({ ...t, hug: v }))}
          />
        </div>
      </main>
    </div>
  )
}

export default DashboardScreen
