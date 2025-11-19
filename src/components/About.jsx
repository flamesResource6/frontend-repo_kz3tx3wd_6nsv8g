import React from 'react'

const features = [
  {
    title: 'Temperature Control',
    desc: 'Smart climate system keeps the perfect warmth or coolness for nap time and strolls.',
  },
  {
    title: 'Heart Rate & Breathing',
    desc: 'Gentle sensors monitor vitals and notify you if something needs attention.',
  },
  {
    title: 'Cooling/Heating Unit',
    desc: 'Quiet, efficient module with soft airflow for steady comfort day and night.',
  },
  {
    title: 'Night Light',
    desc: 'A soft, adjustable glow to soothe in the dark without waking fully.',
  },
  {
    title: 'Soft Music',
    desc: 'Built‑in lullabies and white noise with volume limits for tiny ears.',
  },
  {
    title: 'Hug Mode',
    desc: 'A gentle swaddle‑like vibration and warmth pattern that mimics a cuddle.',
  },
]

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF4E5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5b4639] mb-3">About Zyra</h2>
          <p className="text-[#6b4e3d]/80">Thoughtfully designed to keep your baby comfortable and help you feel calm and in control.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white border border-[#E4E5DD] p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#E5CCC0]/70 flex items-center justify-center mb-4">
                <div className="w-4 h-4 rounded bg-[#B9A292]" />
              </div>
              <h3 className="font-semibold text-[#5b4639] mb-1">{f.title}</h3>
              <p className="text-sm text-[#6b4e3d]/80 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
