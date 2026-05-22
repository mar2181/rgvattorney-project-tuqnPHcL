import React, { useState } from 'react';
import { Car, Brain, AlertCircle, Footprints, Users, Baby, Heart, Zap } from 'lucide-react';

const practiceAreas = [
  { icon: Car, title: 'Car Crashes', image: 'https://v3b.fal.media/files/b/0a9b3262/M33grViVPFUamEGLomBn-_1a699ca2b3e449f79f72c2f0ba76bbd6.jpg' },
  { icon: Brain, title: 'Brain Injuries', image: 'https://v3b.fal.media/files/b/0a9b3262/6jU0mtPxvQMoEi2epCroR_caa8e24641e34eddaab77051753f82d3.jpg' },
  { icon: AlertCircle, title: 'Medical Malpractice', image: 'https://v3b.fal.media/files/b/0a9b3263/_UMxzZWMPCCN8fJUWU5JK_10584448c1f5487bad8e19de1faed148.jpg' },
  { icon: Footprints, title: 'Slip and Fall', image: 'https://v3b.fal.media/files/b/0a9b3262/EqNiyTO9suVz6W26mLfp4_95c8b8a3cc0041d0a8fc33d9487e6faf.jpg' },
  { icon: Users, title: 'Pedestrian Accidents', image: 'https://v3b.fal.media/files/b/0a9b3262/JOPS4HktKVSApZQWK5zxb_a79ec7db99ee41dd8f55527376e709ce.jpg' },
  { icon: Baby, title: 'Child Accidents', image: 'https://v3b.fal.media/files/b/0a9b3262/CCWiCI9tGa0VwFnunOZVi_91c42753bdc54daf8b8eb9818d1f434c.jpg' },
  { icon: Heart, title: 'Wrongful Death', image: 'https://v3b.fal.media/files/b/0a9b3262/9NbYMjE3mOWUnGgX6ib6e_97d9886b63ec45ec805640a148730f86.jpg' },
  { icon: Zap, title: 'Workplace Accidents', image: 'https://v3b.fal.media/files/b/0a9b3262/Hi8REdIua1dNSetBczpBd_72e3e4d252214aaa8b2a583000157dd2.jpg' },
];

export default function PracticeAreas() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#0D0F14] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-black text-white text-center mb-16"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          What We Fight For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {practiceAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Image Container */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 bg-[#1E2028] border-2 border-transparent transition-all duration-300" style={{
                  borderColor: hoveredIdx === idx ? '#C9A84C' : 'transparent',
                  boxShadow: hoveredIdx === idx ? '0 0 30px rgba(201, 168, 76, 0.3)' : 'none',
                }}>
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                {/* Text Container */}
                <div className="bg-[#1E2028] rounded-lg p-6 text-center transition-all duration-300 transform" style={{
                  transform: hoveredIdx === idx ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredIdx === idx ? '0 0 20px rgba(201, 168, 76, 0.2)' : 'none',
                  borderColor: hoveredIdx === idx ? '#C9A84C' : 'transparent',
                  borderWidth: '2px',
                }}>
                  <Icon className="w-8 h-8 mx-auto mb-3 text-[#C9A84C] transition-transform duration-300" style={{
                    transform: hoveredIdx === idx ? 'scale(1.2)' : 'scale(1)',
                  }} />
                  <h3 className="text-white font-semibold text-lg">{area.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button className="border-2 border-[#C9A84C] text-[#C9A84C] px-8 py-3 rounded-lg font-semibold hover:bg-[#C9A84C] hover:text-[#0D0F14] transition-all duration-300">
            See All Practice Areas
          </button>
        </div>
      </div>
    </section>
  );
}