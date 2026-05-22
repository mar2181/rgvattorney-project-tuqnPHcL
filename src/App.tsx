import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VerdictCounter from './components/VerdictCounter';
import IntroTrust from './components/IntroTrust';
import PracticeAreas from './components/PracticeAreas';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CaseEvalForm from './components/CaseEvalForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ResultsReviews from './components/ResultsReviews';
import MobileBottomNav from './components/MobileBottomNav';

export default function App() {
  return (
    <div className="bg-[#0D0F14] text-white min-h-screen" style={{ fontFamily: '"Inter", sans-serif' }}>
      <Header />
      <Hero />
      <VerdictCounter />
      <IntroTrust />
      <PracticeAreas />
      <WhyChooseUs />
      <ResultsReviews />
      <Testimonials />
      <CaseEvalForm />
      <FAQ />
      <Footer />
      {/* Only for mobile: bottom nav bar */}
      <MobileBottomNav />
    </div>
  );
}
