import React from 'react';

const reasons = [
  {
    number: '01',
    headline: 'Trial-Ready From Day One',
    description: 'We prepare every case as if it\'s going to trial. Insurance companies know we don\'t back down, which is why we recover more.',
  },
  {
    number: '02',
    headline: 'No Fee Unless You Win',
    description: 'We work on contingency. You pay nothing unless we recover compensation for you. Your success is our success.',
  },
  {
    number: '03',
    headline: '75 Years of Combined Experience',
    description: 'Our team has handled thousands of cases. That experience means we know every tactic, every defense, and how to beat them.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#1E2028] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left: Photo Card */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-md h-96 rounded-lg overflow-hidden border-r-4 border-[#C9A84C] shadow-2xl"
            >
              <img
                src="https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/alaniz-lawfirm/orlandogarciabannersbanner-04%20(1).jpg"
                alt="Aerial view of our office location in Edinburg, Texas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Intro Text */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Why Choose Orlando Garcia Law Firm?
            </h2>
            <p className="text-white opacity-70 text-base md:text-lg leading-relaxed mb-4">
              When you're injured, you need an attorney who understands the fight ahead. We combine aggressive courtroom tactics with compassionate client care.
            </p>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="space-y-0">
          {reasons.map((reason, idx) => (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-12 md:py-16">
                <div
                  className="text-6xl md:text-8xl font-black text-[#C9A84C] flex-shrink-0"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {reason.number}
                </div>
                <div className="flex-1">
                  <h3
                    className="text-2xl md:text-3xl font-black text-white mb-4"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {reason.headline}
                  </h3>
                  <p className="text-white opacity-70 text-base md:text-lg leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
              {idx < reasons.length - 1 && (
                <div className="border-t border-[#C9A84C]/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}