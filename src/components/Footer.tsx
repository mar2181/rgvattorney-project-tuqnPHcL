import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E2028] border-t border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Column 1: Logo & Address */}
          <div>
            <div className="text-2xl font-bold tracking-tight mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              Orlando <span className="text-[#C9A84C]">Garcia</span> Law
            </div>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-1" />
              <div>
                <p className="text-white text-sm leading-relaxed">
                  1215 E University Dr<br />
                  Edinburg, TX 78539
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-5 h-5 text-[#C9A84C]" />
              <p className="text-white text-sm">(956) 123-4567</p>
            </div>
            <p className="text-[#C9A84C] text-sm font-semibold">
              Se Habla Español
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white opacity-70 hover:text-[#C9A84C] transition-colors text-sm">About</a></li>
              <li><a href="#practice" className="text-white opacity-70 hover:text-[#C9A84C] transition-colors text-sm">Practice Areas</a></li>
              <li><a href="#" className="text-white opacity-70 hover:text-[#C9A84C] transition-colors text-sm">Commercial Litigation</a></li>
              <li><a href="#" className="text-white opacity-70 hover:text-[#C9A84C] transition-colors text-sm">Blog</a></li>
              <li><a href="#contact" className="text-white opacity-70 hover:text-[#C9A84C] transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-white opacity-70 hover:text-[#C9A84C] transition-colors text-sm">Español</a></li>
            </ul>
          </div>

          {/* Column 3: Awards & Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Why Choose Us</h4>
            <div className="space-y-4">
              <div className="bg-[#0D0F14] border-l-4 border-[#C9A84C] px-4 py-3 rounded">
                <p className="text-[#C9A84C] font-semibold text-sm">75+ Years Combined</p>
                <p className="text-white opacity-70 text-xs">Unmatched experience in personal injury law</p>
              </div>
              <div className="bg-[#0D0F14] border-l-4 border-[#C9A84C] px-4 py-3 rounded">
                <p className="text-[#C9A84C] font-semibold text-sm">$100M+ Recovered</p>
                <p className="text-white opacity-70 text-xs">Proven track record of success</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Divider & Copyright */}
        <div className="border-t border-[#C9A84C]/20 pt-8 text-center">
          <p className="text-white opacity-70 text-sm">
            2025 Orlando Garcia Law Firm. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}