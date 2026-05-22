import React from 'react';
import { Home, Settings, MessageCircle, Menu } from 'lucide-react';

const navItems = [
  { label: "Home", icon: Home, section: "#top" },
  { label: "Services", icon: Settings, section: "#practice" },
  { label: "Contact", icon: MessageCircle, section: "#contact" },
  { label: "Menu", icon: Menu },
];

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] flex justify-center md:hidden pb-safe" style={{pointerEvents:'auto'}}>
      <div className="mx-auto flex w-[98vw] max-w-xl px-2 py-3 bg-[#191C21] rounded-t-2xl shadow-xl border border-[#232631] items-center justify-between">
        {navItems.map((item, idx) => (
          <a
            href={item.section || '#'}
            className="flex flex-col items-center justify-center flex-1 group"
            key={item.label}
            aria-label={item.label}
          >
            <div
              className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-200 mb-1 ${idx === 0 ? 'bg-[#FFD700]/85 shadow-[0_0_14px_#FFF6CF]' : ''}`}
              style={{filter: idx === 0 ? 'drop-shadow(0 0 10px #FFD700AA)' : undefined}}
            >
              <item.icon size={26} className={idx === 0 ? 'text-[#2A2305]' : 'text-[#FFD700] group-hover:text-[#FFF6CF]'} />
            </div>
            <div
              className={`text-[13px] font-semibold font-sans tracking-widest ${idx === 0 ? 'text-[#FFD700] glow-text' : 'text-gray-300 group-hover:text-[#FFD700]'} transition-all duration-200`}
              style={idx === 0 ? { textShadow: '0 0 8px #FFD700, 0 0 11px #FFD70055' } : {}}
            >
              {item.label}
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
}
