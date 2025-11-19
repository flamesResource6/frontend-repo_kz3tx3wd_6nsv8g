import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BellRing, ShieldAlert } from 'lucide-react'

const TipCard = ({ title, desc }) => (
  <motion.div
    whileHover={{ y: -2, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    className="rounded-2xl p-4 bg-[#FAF4E5] border border-[#E4E5DD] shadow-[8px_8px_24px_rgba(206,191,175,0.35),_-6px_-6px_20px_rgba(255,255,255,0.8)]"
  >
    <h4 className="font-semibold text-[#5b4639]">{title}</h4>
    <p className="text-sm text-[#7b6a5f]">{desc}</p>
  </motion.div>
)

const SafetyScreen = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, title: 'Temperature Rising', detail: 'Cabin at 26.5°C. Consider enabling cooling.', level: 'medium' },
    { id: 2, title: 'Low Humidity', detail: 'RH at 32%. Keep within 40–60% for comfort.', level: 'low' },
  ])

  return (
    <div className="pb-24">
      <header className="pt-6 pb-3">
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-lg font-semibold text-[#5b4639]">Safety</h2>
          <p className="text-xs text-[#7b6a5f]">Alerts, notifications, and tips</p>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 space-y-4">
        <div className="rounded-2xl p-4 bg-[#FAF4E5] border border-[#E4E5DD] shadow-[8px_8px_24px_rgba(206,191,175,0.35),_-6px_-6px_20px_rgba(255,255,255,0.8)]">
          <div className="flex items-center gap-2 mb-2 text-[#5b4639]">
            <BellRing size={18} />
            <span className="font-medium">Recent Alerts</span>
          </div>
          <div className="space-y-2">
            {alerts.map((a) => (
              <motion.div key={a.id} whileTap={{ scale: 0.98 }} className={`rounded-xl border p-3 ${a.level==='medium' ? 'bg-[#E5CCC0]/60 border-[#DEC7B5]' : 'bg-[#FAF4E5] border-[#E4E5DD]'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#5b4639] font-medium">{a.title}</div>
                    <div className="text-xs text-[#7b6a5f]">{a.detail}</div>
                  </div>
                  <ShieldAlert className="text-[#B9A292]" size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <TipCard title="Shade & Ventilation" desc="Keep stroller in shade and provide soft airflow in warm weather." />
          <TipCard title="Check Harness" desc="Ensure a snug-but-gentle fit; two-ﬁnger rule for straps." />
          <TipCard title="Layering" desc="Dress in breathable layers; avoid overheating with heavy blankets." />
          <TipCard title="Quiet Mode" desc="Reduce stimuli during naps: dim light and soft white noise." />
        </div>
      </main>
    </div>
  )
}

export default SafetyScreen
