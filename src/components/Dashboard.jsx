import React from 'react'

const Card = ({ title, children }) => (
  <div className="rounded-2xl bg-white border border-[#E4E5DD] p-5 shadow-sm">
    <h3 className="font-semibold text-[#5b4639] mb-3">{title}</h3>
    <div className="text-sm text-[#6b4e3d]/90">{children}</div>
  </div>
)

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-16 sm:py-24 bg-[#FFFDF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5b4639] mb-3">Dashboard</h2>
          <p className="text-[#6b4e3d]/80">A calm overview that highlights what matters at a glance.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Baby Status">
            <ul className="space-y-2">
              <li>Temp: 36.7°C • Heart: 118 bpm • Breathing: 24/min</li>
              <li className="text-[#B9A292]">Comfort: Cozy • Sleep: Light</li>
            </ul>
          </Card>
          <Card title="Stroller Controls">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Hug Mode</span>
                <button className="px-3 py-1.5 rounded-lg bg-[#DEC7B5] text-[#543f32] text-xs font-medium">Toggle</button>
              </div>
              <div className="flex items-center justify-between">
                <span>Night Light</span>
                <input type="range" min="0" max="100" defaultValue="40" className="w-32 accent-[#B9A292]" />
              </div>
              <div className="flex items-center justify-between">
                <span>Music Volume</span>
                <input type="range" min="0" max="100" defaultValue="30" className="w-32 accent-[#B9A292]" />
              </div>
            </div>
          </Card>
          <Card title="Alerts">
            <ul className="space-y-2">
              <li className="rounded-lg bg-[#E5CCC0]/40 border border-[#E4E5DD] px-3 py-2">All clear. No alerts right now.</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
