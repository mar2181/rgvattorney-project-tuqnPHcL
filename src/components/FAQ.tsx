import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: "How much does it cost to hire Orlando Garcia Law Firm?",
    answer: "We work on a contingency fee basis, which means you pay nothing unless we win your case. There are no upfront costs or hidden fees. We only collect a percentage of your settlement or verdict.",
  },
  {
    question: "How long will my personal injury case take?",
    answer: "Every case is unique, but most personal injury cases take 6-18 months. Some settle quickly, while others require litigation. We'll keep you informed every step of the way.",
  },
  {
    question: "What if I was partially at fault for my accident?",
    answer: "Texas follows comparative fault rules. Even if you were partially at fault, you may still recover damages as long as you were less than 51% responsible. We'll evaluate your case thoroughly.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#0D0F14] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-black text-white text-center mb-16"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-start justify-between gap-4 py-6 text-left group"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#C9A84C] transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-[#C9A84C] transition-transform duration-300" style={{
                  transform: openIdx === idx ? 'rotate(45deg)' : 'rotate(0)',
                }}>
                  {openIdx === idx ? <X size={24} /> : <Plus size={24} />}
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIdx === idx ? '500px' : '0',
                  opacity: openIdx === idx ? 1 : 0,
                }}
              >
                <p className="text-white opacity-70 text-base leading-relaxed pb-6">
                  {faq.answer}
                </p>
              </div>

              {idx < faqs.length - 1 && (
                <div className="border-t border-[#C9A84C]/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}