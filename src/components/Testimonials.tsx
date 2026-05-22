import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "They fought for me when I thought I had no chance. The settlement was life-changing.",
    stars: 5,
    name: "Maria Rodriguez",
  },
  {
    quote: "Professional, compassionate, and relentless. They didn't stop until I got what I deserved.",
    stars: 5,
    name: "James Patterson",
  },
  {
    quote: "The best legal team in South Texas. Highly recommended to anyone seeking justice.",
    stars: 5,
    name: "Susan Chen",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="w-full bg-[#0D0F14] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Quotation Mark */}
        <div className="text-7xl md:text-9xl text-[#C9A84C] mb-8 leading-none">"</div>

        {/* Quote */}
        <p
          className="text-3xl md:text-4xl text-white font-italic mb-8 leading-relaxed opacity-90"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          {t.quote}
        </p>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: t.stars }).map((_, i) => (
            <span key={i} className="text-[#C9A84C] text-2xl">★</span>
          ))}
        </div>

        {/* Name */}
        <p className="text-[#C9A84C] font-semibold tracking-widest text-sm mb-8">
          {t.name.toUpperCase()}
        </p>

        {/* Carousel Controls */}
        <div className="flex justify-center gap-6">
          <button
            onClick={prev}
            className="border-2 border-[#C9A84C] text-[#C9A84C] p-3 rounded-full hover:bg-[#C9A84C] hover:text-[#0D0F14] transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="border-2 border-[#C9A84C] text-[#C9A84C] p-3 rounded-full hover:bg-[#C9A84C] hover:text-[#0D0F14] transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current ? 'bg-[#C9A84C] w-8' : 'bg-[#C9A84C]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}