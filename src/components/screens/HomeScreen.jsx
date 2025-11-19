import React from 'react'
import { motion } from 'framer-motion'
import { HeartPulse, Baby, BellRing, ThermometerSun, Wind } from 'lucide-react'

const Card = ({ title, icon: Icon, desc, to }) => {
  return (
    <motion.a
      href={to}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="block rounded-2xl p-4 bg-[#FAF4E5] border border-[#E4E5DD] shadow-[8px_8px_24px_rgba(206,191,175,0.35),_-6px_-6px_20px_rgba(255,255,255,0.8)]"
    >
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-2xl bg-[#E5CCC0]/60 border border-[#DEC7B5] text-[#5b4639] shadow-inner">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-[#5b4639]">{title}</h3>
          <p className="text-sm text-[#7b6a5f]">{desc}</p>
        </div>
      </div>
    </motion.a>
  )
}

const HomeScreen = () => {
  return (
    <div className="pb-24">
      <header className="pt-6 pb-4">
        <div className="max-w-md mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-[#DEC7B5] border border-[#B9A292] shadow-inner" />
              <div>
                <h1 className="text-xl font-semibold tracking-tight text-[#5b4639]">Zyra</h1>
                <p className="text-xs text-[#7b6a5f] -mt-0.5">Your Smart Baby Companion</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 space-y-4">
        <Card title="Baby Status" icon={Baby} desc="Live vitals & comfort level" to="/dashboard" />
        <Card title="Stroller Controls" icon={Wind} desc="Cooling, heating, lights" to="/dashboard" />
        <Card title="Alerts & Safety" icon={BellRing} desc="Notifications & tips" to="/dashboard" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl p-4 bg-gradient-to-br from-[#FAF4E5] to-[#E5CCC0]/50 border border-[#E4E5DD] text-[#5b4639] shadow-[8px_8px_24px_rgba(206,191,175,0.35),_-6px_-6px_20px_rgba(255,255,255,0.8)]"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#E5CCC0]/60 border border-[#DEC7B5] text-[#5b4639] shadow-inner">
              <ThermometerSun size={22} />
            </div>
            <p className="text-sm">Tip: Ideal comfort range is 22–24°C with gentle airflow.</p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default HomeScreen
