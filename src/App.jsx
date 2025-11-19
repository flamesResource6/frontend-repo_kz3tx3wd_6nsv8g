import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import HomeScreen from './components/screens/HomeScreen'
import ControlsScreen from './components/screens/ControlsScreen'
import SafetyScreen from './components/screens/SafetyScreen'
import ProfileScreen from './components/screens/ProfileScreen'
import BottomNav from './components/BottomNav'
import './index.css'

const Splash = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#FAF4E5] via-[#E5CCC0]/40 to-[#DEC7B5]/40">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center gap-3"
    >
      <div className="h-16 w-16 rounded-2xl bg-[#DEC7B5] border border-[#B9A292] shadow-[inset_8px_8px_20px_rgba(0,0,0,0.06),_inset_-8px_-8px_20px_rgba(255,255,255,0.6),_0_25px_60px_rgba(185,162,146,0.35)]" />
      <motion.div
        className="h-1.5 w-28 rounded-full bg-[#E4E5DD] overflow-hidden"
        initial={{}}
        animate={{}}
      >
        <motion.div
          className="h-full w-1/3 bg-[#B9A292]"
          initial={{ x: '-100%' }}
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  </div>
)

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 12 }}
    transition={{ duration: 0.25 }}
    className="min-h-screen bg-gradient-to-b from-[#FAF4E5] to-[#E5CCC0]/20 text-[#5b4639]"
  >
    <div className="max-w-md mx-auto pb-24">{children}</div>
  </motion.div>
)

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">{loading && <Splash key="splash" />}</AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomeScreen />
              </PageWrapper>
            }
          />
          <Route
            path="/controls"
            element={
              <PageWrapper>
                <ControlsScreen />
              </PageWrapper>
            }
          />
          <Route
            path="/safety"
            element={
              <PageWrapper>
                <SafetyScreen />
              </PageWrapper>
            }
          />
          <Route
            path="/profile"
            element={
              <PageWrapper>
                <ProfileScreen />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>

      <BottomNav />
    </div>
  )
}

export default App
