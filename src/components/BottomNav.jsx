import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Gauge, ShoppingBag, User } from 'lucide-react'

const tabs = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/dashboard', label: 'Dashboard', icon: Gauge },
  { to: '/store', label: 'Store', icon: ShoppingBag },
  { to: '/profile', label: 'Profile', icon: User },
]

const BottomNav = () => {
  return (
    <nav className="fixed inset-x-0 bottom-3 z-50">
      <div className="mx-auto max-w-md px-4">
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF4E5]/90 backdrop-blur-md p-2 shadow-[inset_8px_8px_20px_rgba(0,0,0,0.06),_inset_-8px_-8px_20px_rgba(255,255,255,0.6),_0_10px_30px_rgba(185,162,146,0.25)] border border-[#E4E5DD]">
          {tabs.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex-1 group relative flex flex-col items-center gap-1 py-2 text-xs transition-all duration-300 ${
                  isActive ? 'text-[#5b4639]' : 'text-[#7b6a5f]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="relative">
                    <div className={`absolute -inset-3 rounded-full transition-all duration-300 ${isActive ? 'bg-[#E5CCC0]/60 blur-md scale-100' : 'scale-0'}`} />
                    <Icon
                      size={22}
                      className={`relative z-[1] transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}
                    />
                  </div>
                  <span className="relative z-[1]">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default BottomNav
