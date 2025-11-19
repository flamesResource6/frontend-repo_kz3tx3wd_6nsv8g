import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Panel = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className="rounded-2xl p-4 bg-[#FAF4E5] border border-[#E4E5DD] shadow-[8px_8px_24px_rgba(206,191,175,0.35),_-6px_-6px_20px_rgba(255,255,255,0.8)]"
  >
    <h3 className="font-semibold text-[#5b4639] mb-2">{title}</h3>
    {children}
  </motion.div>
)

const ProfileScreen = () => {
  const [notifications, setNotifications] = useState(true)
  const [theme, setTheme] = useState('vanilla')
  const [language, setLanguage] = useState('en')

  return (
    <div className="pb-24">
      <header className="pt-6 pb-3">
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-lg font-semibold text-[#5b4639]">Profile & Settings</h2>
          <p className="text-xs text-[#7b6a5f]">Customize your experience</p>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 space-y-3">
        <Panel title="Notifications">
          <button
            onClick={() => setNotifications((v) => !v)}
            className={`w-full flex items-center justify-between rounded-2xl px-4 py-3 border transition-all duration-300 ${
              notifications ? 'bg-[#E5CCC0]/60 border-[#DEC7B5] shadow-inner' : 'bg-[#FAF4E5] border-[#E4E5DD]'
            }`}
          >
            <span className="text-[#5b4639]">Enable Notifications</span>
            <span className={`ml-3 inline-flex h-7 w-12 items-center rounded-full p-1 transition-all ${notifications ? 'bg-[#DEC7B5]' : 'bg-[#E4E5DD]' }`}>
              <motion.span layout transition={{ type: 'spring', stiffness: 400, damping: 28 }} className={`h-5 w-5 rounded-full bg-white shadow ${notifications ? 'ml-5' : ''}`} />
            </span>
          </button>
        </Panel>

        <Panel title="Language">
          <div className="grid grid-cols-3 gap-2">
            {['en','es','fr'].map((lng) => (
              <button
                key={lng}
                onClick={() => setLanguage(lng)}
                className={`rounded-2xl px-3 py-2 border text-sm ${language===lng ? 'bg-[#E5CCC0]/70 border-[#DEC7B5]' : 'bg-[#FAF4E5] border-[#E4E5DD]'}`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        </Panel>

        <Panel title="Theme">
          <div className="grid grid-cols-3 gap-2">
            {['vanilla','shell','mocha'].map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`rounded-2xl px-3 py-2 border text-sm capitalize ${theme===t ? 'bg-[#E5CCC0]/70 border-[#DEC7B5]' : 'bg-[#FAF4E5] border-[#E4E5DD]'}`}
              >
                {t}
              </button>
            ))}
          </div>
          <p className="text-xs text-[#7b6a5f] mt-2">Theme switch previews colors only (no persistence).</p>
        </Panel>
      </main>
    </div>
  )
}

export default ProfileScreen
