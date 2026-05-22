import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0D0F14]"
      style={{
        backgroundImage: 'url(https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/alaniz-lawfirm/Website-Video.mp4)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Video Background (Desktop Only) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        style={{ zIndex: 0 }}
        src="https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/alaniz-lawfirm/Website-Video.mp4"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background: 'linear-gradient(135deg, rgba(13, 15, 20, 0.7) 0%, rgba(13, 15, 20, 0.5) 50%, rgba(13, 15, 20, 0.7) 100%)',
          zIndex: 1,
        }}
      />

      {/* Mobile Version: Stacked Layout */}
      <div className="md:hidden relative z-10 w-full flex flex-col items-center px-4 pt-24 pb-24">
        <div className="rounded-2xl overflow-hidden w-[84vw] max-w-xs shadow-2xl border border-[#232631] bg-[#191C21] aspect-square mb-8">
          <video
            src="https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/alaniz-lawfirm/Website-Video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <h1
          className="font-black text-2xl sm:text-3xl text-center"
          style={{
            fontFamily: '"Playfair Display", serif',
            color: '#FFD700',
            textShadow: '0 0 18px #e6c34b, 0 0 5px #FFD70099',
            letterSpacing: '0.02em',
          }}
        >
          Orlando Garcia Law Firm
        </h1>
        <div className="text-md font-semibold text-gray-300 text-center mt-2 mb-6 tracking-wide" style={{letterSpacing:'0.03em'}}>Texas Personal Injury Attorneys</div>
        <div
          className="w-[90vw] max-w-sm px-6 py-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
            boxShadow: '0 8px 32px 0 rgba(201, 168, 76, 0.1)',
          }}
        >
          <p className="text-[#C9A84C] font-semibold text-sm tracking-wide uppercase mb-4">Ready to Fight Back?</p>
          <p className="text-white text-sm leading-relaxed mb-6 opacity-90">
            Schedule your free consultation today. Available 24/7 to discuss your case and fight for the justice you deserve.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="tel:(956)123-4567"
              className="w-full bg-[#C9A84C] text-[#0D0F14] px-6 py-3 rounded-lg font-semibold hover:bg-[#B39A3D] transition-all duration-300 text-center text-sm"
            >
              Call (956) 123-4567
            </a>
            <button className="w-full border-2 border-[#C9A84C] text-[#C9A84C] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A84C]/10 transition-all duration-300 text-sm">
              Book Appointment
            </button>
          </div>
          <p className="text-[#C9A84C] text-xs font-semibold text-center mt-4">Se Habla Español</p>
        </div>
      </div>

      {/* Desktop Version: Centered Content */}
      <div className="hidden md:flex relative z-10 flex-col items-center justify-center text-center max-w-4xl mx-auto px-6">
        <h1
          className="text-6xl md:text-7xl font-black mb-6 leading-tight"
          style={{
            fontFamily: '"Playfair Display", serif',
            color: '#FFD700',
            textShadow: '0 0 30px #e6c34b, 0 0 60px #FFD700BB, 0 0 10px #FFD70099',
            letterSpacing: '0.02em',
          }}
        >
          Orlando Garcia Law Firm
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-gray-200 mb-8 tracking-wide">
          Texas Personal Injury Attorneys Fighting for Your Recovery
        </p>

        <p className="text-lg text-gray-300 mb-12 max-w-2xl leading-relaxed">
          With over 75 years of combined experience, we've recovered millions for injury victims across South Texas. Available 24/7.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="tel:(956)123-4567"
            className="bg-[#C9A84C] text-[#0D0F14] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#B39A3D] transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_#C9A84C88]"
          >
            Call (956) 123-4567
          </a>
          <button className="border-2 border-[#C9A84C] text-[#C9A84C] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#C9A84C] hover:text-[#0D0F14] transition-all duration-300 shadow-2xl">
            Free Consultation
          </button>
        </div>

        <p className="text-[#C9A84C] font-semibold tracking-widest text-sm mt-8">Se Habla Español</p>
      </div>
    </section>
  );
}
