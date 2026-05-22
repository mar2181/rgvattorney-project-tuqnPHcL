import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const verdictResults = [
  {
    caseType: 'Workplace Injury',
    amount: 11000000,
    description: 'Construction worker recovered full settlement for permanent disability.',
  },
  {
    caseType: 'Wrongful Death',
    amount: 9500000,
    description: 'Family awarded damages for fatal industrial accident.',
  },
  {
    caseType: 'Car Crash',
    amount: 3200000,
    description: 'Multi-vehicle collision victim received full recovery.',
  },
];

const testimonials = [
  {
    quote: "They fought for me when I thought I had no chance. The settlement was life-changing. I couldn't have done this without them.",
    name: 'Maria Rodriguez',
    stars: 5,
    source: 'Google Reviews',
  },
  {
    quote: "Professional, compassionate, and relentless. They didn't stop until I got what I deserved. Truly exceptional legal representation.",
    name: 'James Patterson',
    stars: 5,
    source: 'Avvo',
  },
  {
    quote: "The best legal team in South Texas. Highly recommended to anyone seeking justice. They treated me like family.",
    name: 'Susan Chen',
    stars: 5,
    source: 'Google Reviews',
  },
];

const mediaLogos = [
  { label: 'Texas Legal Magazine' },
  { label: 'South Texas Law Journal' },
  { label: 'Houston Business Review' },
  { label: 'Texas Trial Lawyers' },
];

interface AnimatedCounterProps {
  target: number;
  duration?: number;
}

function AnimatedCounter({ target, duration = 2 }: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = 0;
          const increment = target / (duration * 60);
          let current = start;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setValue(target);
              clearInterval(timer);
            } else {
              setValue(Math.floor(current));
            }
          }, 1000 / 60);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <div ref={counterRef}>
      ${(value / 1000000).toFixed(1)}M
    </div>
  );
}

export default function ResultsReviews() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[currentTestimonial];

  return (
    <div className="w-full">
      {/* Section 1: Verdict Showcase */}
      <section className="bg-[#0D0F14] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-black text-white text-center mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Real Results for Real People
          </motion.h2>
          <motion.p
            className="text-gray-400 text-center mb-16 text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We've recovered millions for Texas injury victims.
          </motion.p>

          {/* Verdict Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {verdictResults.map((result, idx) => (
              <motion.div
                key={idx}
                className="bg-[#1A1D25] rounded-lg p-8 border-t-4 border-[#C9A84C]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="text-[#C9A84C] text-xs font-semibold tracking-widest mb-6 uppercase">
                  {result.caseType}
                </div>
                <div
                  className="text-5xl md:text-6xl font-black text-white mb-4"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  <AnimatedCounter target={result.amount} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Legal Disclaimer */}
          <p className="text-gray-600 text-xs text-center mb-8 max-w-3xl mx-auto">
            *Results vary based on individual case circumstances. Past performance does not guarantee future outcomes. Attorney fees may apply to settlements. Consult with legal counsel for case-specific details.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <motion.button
              className="border-2 border-[#C9A84C] text-[#C9A84C] px-8 py-3 rounded-lg font-semibold text-sm hover:bg-[#C9A84C]/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See All Results →
            </motion.button>
          </div>
        </div>
      </section>

      {/* Section 2: Testimonials */}
      <section
        className="bg-[#0D0F14] py-16 md:py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/alaniz-lawfirm/orlandogarciabannersbanner-04%20(1).jpg)',
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(13, 15, 20, 0.95) 0%, rgba(13, 15, 20, 0.85) 50%, rgba(13, 15, 20, 0.95) 100%)',
          }}
        />

        {/* Vignette Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 80px rgba(0,0,0,0.6)',
          }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-black text-white text-center mb-16"
            style={{ fontFamily: '"Playfair Display", serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>

          {/* Testimonial Card */}
          <motion.div
            className="text-center"
            key={currentTestimonial}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Opening Quote */}
            <div className="text-9xl md:text-[120px] text-[#C9A84C] leading-none mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
              "
            </div>

            {/* Quote Text */}
            <p
              className="text-2xl md:text-3xl text-white italic mb-8 leading-relaxed"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {t.quote}
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i} className="text-[#C9A84C] text-2xl">★</span>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-12 bg-[#C9A84C] mx-auto mb-4" />

            {/* Client Name */}
            <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-2">
              {t.name}
            </p>
            <p className="text-gray-500 text-xs uppercase tracking-wide">
              {t.source}
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-[#C9A84C] text-[#C9A84C] flex items-center justify-center hover:bg-[#C9A84C]/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial ? 'bg-[#C9A84C] w-8' : 'bg-[#C9A84C]/30 w-2'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-[#C9A84C] text-[#C9A84C] flex items-center justify-center hover:bg-[#C9A84C]/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Review Platform Badges */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-16 pt-12 border-t border-[#C9A84C]/20">
            {/* Google Review Badge */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#1A1D25] flex items-center justify-center text-xs font-bold text-[#C9A84C] border border-[#C9A84C]/30">
                G
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Google Reviews</p>
                <p className="text-gray-500 text-xs">★★★★★ 4.9/5 (287 reviews)</p>
              </div>
            </motion.div>

            {/* Avvo Badge */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#1A1D25] flex items-center justify-center text-xs font-bold text-[#C9A84C] border border-[#C9A84C]/30">
                A
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Avvo Ratings</p>
                <p className="text-gray-500 text-xs">★★★★★ 5.0/5 (142 reviews)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured In / Social Proof Bar */}
      <section className="bg-[#1A1D25] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest text-center uppercase mb-8">
            As Seen In
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mediaLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-center h-16 rounded-lg bg-[#0D0F14] border border-[#C9A84C]/10 hover:border-[#C9A84C]/50 transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 text-xs text-center font-medium group-hover:text-[#C9A84C] transition-colors px-4">
                  {logo.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}