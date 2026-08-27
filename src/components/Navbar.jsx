import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Sell', id: 'sell-your-car' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'footer' },
  ];

  // ScrollSpy to highlight active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler with offset for sticky navbar
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 86;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f0f11]/95 backdrop-blur-md border-b border-[#2a2a30] px-6 lg:px-[80px] h-[86px] flex items-center shadow-lg">
      <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center"
        >
          <img
            src="/assets/ausdrive-logo.png"
            alt="AusDrive Motor Group"
            className="h-[40px] w-auto object-contain transition-transform hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-[36px] lg:gap-[40px]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`font-heading font-medium text-[15px] leading-[19px] transition-all relative py-1 ${
                  isActive ? 'text-[#d4af37]' : 'text-[#ffffff] hover:text-[#d4af37]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4af37] rounded-full animate-in fade-in duration-200"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <button 
            onClick={onOpenBooking}
            className="btn-figma-gold"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#d4af37] focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4af37]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[86px] left-0 right-0 bg-[#0f0f11]/98 backdrop-blur-xl border-b border-[#2a2a30] p-6 shadow-2xl flex flex-col gap-3 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`font-heading font-medium text-base py-2.5 px-3 rounded-md transition-colors ${
                  isActive ? 'text-[#d4af37] bg-white/5 font-bold' : 'text-white hover:text-[#d4af37]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="btn-figma-gold w-full mt-3"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
