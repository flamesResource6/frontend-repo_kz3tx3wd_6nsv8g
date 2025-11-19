import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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

const CircleGauge = ({ label, value, color = '#B9A292' }) => {
  const radius = 38
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference
  return (
    <div className="flex flex-col items-center">
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
      <div className="text-xs text-[#5b4639] -mt-2">{label}</div>
    </div>
  )
}

const ControlsScreen = () => {
  const [toggles, setToggles] = useState({ cooling: true, heating: false, light: true, music: false, motion: false })
  const [comfort, setComfort] = useState(78)
  const [temp, setTemp] = useState(23)
  const [humidity, setHumidity] = useState(48)

  // playful auto-variance within safe range
  useEffect(() => {
    const id = setInterval(() => {
      setComfort((c) => Math.max(50, Math.min(95, c + (Math.random() * 4 - 2))))
      setTemp((t) => Math.max(20, Math.min(26, t + (Math.random() * 0.6 - 0.3))))
      setHumidity((h) => Math.max(35, Math.min(65, h + (Math.random() * 2 - 1))))
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="pb-24">
      <header className="pt-6 pb-3">
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-lg font-semibold text-[#5b4639]">Controls</h2>
          <p className="text-xs text-[#7b6a5f]">Cooling, heating, lights, music, motion</p>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1 rounded-2xl p-3 bg-[#FAF4E5] border border-[#E4E5DD] shadow-[8px_8px_24px_rgba(206,191,175,0.35),_-6px_-6px_20px_rgba(255,255,255,0.8)]">
            <CircleGauge label={`Comfort ${Math.round(comfort)}%`} value={comfort} />
          </div>
          <div className="col-span-1 rounded-2xl p-3 bg-[#FAF4E5] border border-[#E4E5DD] shadow-[8px_8px_24px_rgba(206,191,175,0.35),_-6px_-6px_20px_rgba(255,255,255,0.8)]">
            <CircleGauge label={`${temp.toFixed(1)}°C`} value={(temp - 18) * (100/14)} />
          </div>
          <div className="col-span-1 rounded-2xl p-3 bg-[#FAF4E5] border border-[#E4E5DD] shadow-[8px_8px_24px_rgba(206,191,175,0.35),_-6px_-6px_20px_rgba(255,255,255,0.8)]">
            <CircleGauge label={`${Math.round(humidity)}% RH`} value={humidity} />
          </div>
        </div>

        <div className="space-y-2">
          <Toggle label="Cooling" checked={toggles.cooling} onChange={(v) => setToggles((t) => ({ ...t, cooling: v }))} />
          <Toggle label="Heating" checked={toggles.heating} onChange={(v) => setToggles((t) => ({ ...t, heating: v }))} />
          <Toggle label="Night Light" checked={toggles.light} onChange={(v) => setToggles((t) => ({ ...t, light: v }))} />
          <Toggle label="Music" checked={toggles.music} onChange={(v) => setToggles((t) => ({ ...t, music: v }))} />
          <Toggle label="Stroller Motion" checked={toggles.motion} onChange={(v) => setToggles((t) => ({ ...t, motion: v }))} />
        </div>
      </main>
    </div>
  )
}

export default ControlsScreen
