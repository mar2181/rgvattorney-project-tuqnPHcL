import React, { useState } from 'react';
import { Phone } from 'lucide-react';

export default function CaseEvalForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zip: '',
    caseDescription: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', zip: '', caseDescription: '' });
  };

  return (
    <section id="contact" className="w-full bg-[#0D0F14] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="bg-[#1E2028] rounded-lg p-8 md:p-12 flex flex-col justify-center">
            <h2
              className="text-3xl md:text-4xl font-black text-white mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Ready to Fight Back?
            </h2>
            <p className="text-white opacity-70 text-base md:text-lg leading-relaxed mb-8">
              Call us now for a free consultation. We\'re available 24/7 to discuss your case.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-[#C9A84C]" />
              <span className="text-3xl font-black text-[#C9A84C]" style={{ fontFamily: '"Playfair Display", serif' }}>
                (956) 123-4567
              </span>
            </div>
            <div className="text-[#C9A84C] font-semibold tracking-widest text-sm">
              AVAILABLE 24/7
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1E2028] border-2 border-[#1E2028] focus:border-[#C9A84C] text-white px-4 py-3 rounded-lg transition-colors focus:outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1E2028] border-2 border-[#1E2028] focus:border-[#C9A84C] text-white px-4 py-3 rounded-lg transition-colors focus:outline-none"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1E2028] border-2 border-[#1E2028] focus:border-[#C9A84C] text-white px-4 py-3 rounded-lg transition-colors focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-[#1E2028] border-2 border-[#1E2028] focus:border-[#C9A84C] text-white px-4 py-3 rounded-lg transition-colors focus:outline-none"
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={formData.zip}
                onChange={handleChange}
                required
                className="w-full bg-[#1E2028] border-2 border-[#1E2028] focus:border-[#C9A84C] text-white px-4 py-3 rounded-lg transition-colors focus:outline-none"
              />
              <textarea
                name="caseDescription"
                placeholder="Tell us about your case..."
                value={formData.caseDescription}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-[#1E2028] border-2 border-[#1E2028] focus:border-[#C9A84C] text-white px-4 py-3 rounded-lg transition-colors focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#C9A84C] text-[#0D0F14] px-8 py-3 rounded-lg font-semibold hover:bg-[#B39A3D] transition-colors"
              >
                Submit My Case
              </button>
              {submitted && (
                <div className="bg-[#C9A84C]/10 border border-[#C9A84C] text-[#C9A84C] px-4 py-3 rounded-lg text-sm font-medium text-center">
                  ✓ Thank you! We\'ll be in touch shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}