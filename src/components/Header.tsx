import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#11141A] border-b border-[#22252C] py-4 flex justify-center items-center shadow-md">
      <div className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.01em' }}>
        Orlando <span className="text-[#FFD700]" style={{filter:'drop-shadow(0 0 6px #FFD70099)'}}>Garcia</span> Law
      </div>
    </header>
  );
}
