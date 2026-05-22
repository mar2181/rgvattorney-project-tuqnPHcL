import React from 'react';

export default function IntroTrust() {
  return (
    <section id="about" className="w-full bg-[#0D0F14] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="h-1 w-16 bg-[#C9A84C] mb-8" />
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Texas Personal Injury Attorneys Who Fight For Full Recovery
            </h2>
            <p className="text-white opacity-70 text-base md:text-lg leading-relaxed mb-4">
              With over 75 years of combined experience, the Orlando Garcia Law Firm has recovered millions for injured clients across South Texas. We don't settle for less than what you deserve.
            </p>
            <p className="text-white opacity-70 text-base md:text-lg leading-relaxed mb-8">
              Our trial-ready approach means we're prepared to fight in court if necessary. Your recovery is our mission.
            </p>
            <button className="bg-[#C9A84C] text-[#0D0F14] px-8 py-3 rounded-lg font-semibold hover:bg-[#B39A3D] transition-colors">
              Contact Us Today
            </button>
          </div>

          {/* Right: Photo Card */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-md h-96 rounded-lg overflow-hidden border-l-4 border-[#C9A84C] shadow-2xl"
            >
              <img
                src="https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/alaniz-lawfirm/orlando%20(1).webp"
                alt="Orlando Garcia, personal injury attorney in Texas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}