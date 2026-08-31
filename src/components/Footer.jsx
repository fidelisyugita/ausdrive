import React from 'react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="w-full bg-[#0b0b0c] pt-[80px] pb-[40px] px-6 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[64px]">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Column 1: Brand Info (405px -> col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-[24px]">
            <a href="#hero">
              <img
                src="/assets/ausdrive-logo.png"
                alt="AusDrive Motor Group"
                className="h-[40px] sm:h-[40px] w-auto object-contain"
              />
            </a>

            <p className="font-sans font-normal text-[14px] leading-[22.4px] text-[#a3a3ac] max-w-[405px]">
              Premium Melbourne-based automotive service and diagnostics dealership committed to delivering outstanding vehicle maintenance and luxury performance care.
            </p>

            <div className="flex flex-col gap-[6px] font-sans font-normal text-[13px] leading-[18px] text-[#6d6d75]">
              <p>LMCT License: 12345</p>
              <p>ABN: 87 123 456 789</p>
            </div>
          </div>

          {/* Column 2: Quick Links (187px -> col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-[20px]">
            <h4 className="font-heading font-bold text-[15px] leading-[19px] text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-[12px] font-sans font-normal text-[14px] leading-[19px] text-[#a3a3ac]">
              <li><a href="#hero" className="hover:text-[#d4af37] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Our Services</a></li>
              <li><a href="#pricing" className="hover:text-[#d4af37] transition-colors">Pricing Packages</a></li>
              <li><a href="#sell-your-car" className="hover:text-[#d4af37] transition-colors">Sell Your Car</a></li>
              <li><button onClick={onOpenBooking} className="hover:text-[#d4af37] transition-colors text-left">Book a Service</button></li>
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Column 3: Get in Touch (296px -> col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-[20px]">
            <h4 className="font-heading font-bold text-[15px] leading-[19px] text-white">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-[12px] font-sans font-normal text-[14px] leading-[19px] text-[#a3a3ac]">
              <p>
                <a 
                  href="https://maps.app.goo.gl/nrDHDF8RM6idfV9t5" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  10 Gladstone St, Thomastown VIC 3074
                </a>
              </p>
              <p>
                <a href="tel:+61400857777" className="hover:text-white transition-colors">
                  Phone: +61 400 857 777
                </a>
              </p>
              <p>
                <a href="mailto:ausdrivemotorgroup@gmail.com" className="hover:text-white transition-colors">
                  Email: ausdrivemotorgroup@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/message/ORHYHPVGBTERO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#34d399] font-semibold hover:underline"
                >
                  WhatsApp Support Online
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Social Media (296px -> col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-[20px]">
            <h4 className="font-heading font-bold text-[15px] leading-[19px] text-white">
              Social Media
            </h4>
            <div className="flex flex-col gap-[12px] font-sans font-normal text-[14px] leading-[19px] text-[#a3a3ac]">
              <p>
                <a 
                  href="https://www.instagram.com/ausdrive.motorgroup/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Instagram: @ausdrive.motorgroup
                </a>
              </p>
              <p>
                <a 
                  href="https://www.facebook.com/AusDriveMotorGroup" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Facebook: AusDriveMotorGroup
                </a>
              </p>
              <p>
                <a 
                  href="https://www.linkedin.com/company/ausdrive-motor-group/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#d4af37] transition-colors"
                >
                  LinkedIn: AusDrive Motor Group
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line & Copyright */}
        <div className="pt-[24px] border-t border-[#2a2a30] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans font-normal text-[13px] leading-[18px] text-[#6d6d75]">
          <p>© 2025 AusDrive Motor Group. All rights reserved. LMCT 12345</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
