import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import BookServiceSection from './components/BookServiceSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import SellYourCarSection from './components/SellYourCarSection';
import AboutLocationSection from './components/AboutLocationSection';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to Top visibility listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (service = '') => {
    setSelectedServiceForBooking(service);
    setIsModalOpen(true);
  };

  const handleScrollToBooking = (service = '') => {
    setSelectedServiceForBooking(service);
    const element = document.getElementById('book-service');
    if (element) {
      const headerOffset = 86;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f11] text-[#ffffff]">
      {/* Top Contact Bar */}
      <TopBar />

      {/* Main Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleScrollToBooking()} />

        {/* 2. Core Automotive Services Grid */}
        <ServicesSection onSelectService={(service) => handleScrollToBooking(service)} />

        {/* 3. Why Choose AusDrive Standard */}
        <WhyChooseSection />

        {/* 4. Direct Interactive Booking Section */}
        <BookServiceSection preselectedService={selectedServiceForBooking} />

        {/* 5. Structured Pricing Packages */}
        <PricingSection onSelectPackage={(pkg) => handleScrollToBooking(pkg)} />

        {/* 6. Client Testimonials */}
        <TestimonialsSection />

        {/* 7. Sell Your Car Valuation Feature (Positioned right before About) */}
        <SellYourCarSection />

        {/* 8. Melbourne Showroom & Workshop Location */}
        <AboutLocationSection />

        {/* 9. Interactive FAQ Accordion */}
        <FaqSection />

        {/* 10. Pre-footer CTA Banner */}
        <CtaBanner onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer & Accreditations */}
      <div id="footer">
        <Footer onOpenBooking={() => handleOpenBooking()} />
      </div>

      {/* Fast Access Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedServiceForBooking}
      />

      {/* Scroll to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#18181c] border border-[#d4af37] text-[#d4af37] shadow-2xl hover:bg-[#d4af37] hover:text-[#0f0f11] transition-all transform hover:scale-110 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
