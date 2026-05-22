import React, { useState, useEffect, useRef } from 'react';

interface CounterData {
  display: string;
  label: string;
  target?: number;
  isText?: boolean;
}

const counters: CounterData[] = [
  { display: '$11M', label: 'Workplace Injury', target: 11000000 },
  { display: '$9-10M', label: 'Wrongful Death', isText: true },
  { display: '$3M', label: 'Car Crash', target: 3000000 },
];

export default function VerdictCounter() {
  const [displayValues, setDisplayValues] = useState(counters.map(c => c.display));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          counters.forEach((counter, idx) => {
            if (counter.target) {
              const start = 0;
              const end = counter.target;
              const duration = 2000;
              const increment = end / (duration / 50);
              let current = start;

              const timer = setInterval(() => {
                current += increment;
                if (current >= end) {
                  current = end;
                  clearInterval(timer);
                  setDisplayValues(prev => {
                    const newVals = [...prev];
                    newVals[idx] = `$${(end / 1000000).toFixed(0)}M`;
                    return newVals;
                  });
                } else {
                  setDisplayValues(prev => {
                    const newVals = [...prev];
                    newVals[idx] = `$${(current / 1000000).toFixed(1)}M`;
                    return newVals;
                  });
                }
              }, 50);
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1E2028] py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {counters.map((counter, idx) => (
            <div key={idx} className="flex flex-col items-center md:border-r md:border-[#C9A84C]/30 md:last:border-r-0 md:px-8">
              <div
                className="text-5xl md:text-6xl font-black text-white mb-3"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {displayValues[idx]}
              </div>
              <div className="text-[#C9A84C] text-sm md:text-base font-semibold tracking-wide">
                {counter.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}