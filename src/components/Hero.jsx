import React from 'react';

export default function Hero({ onOpenBooking }) {
  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[640px] lg:h-[680px] flex items-center px-6 lg:px-[80px] py-16 overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero_2.jpg" 
          alt="AusDrive Luxury Workshop" 
          className="w-full h-full object-cover object-center filter brightness-75"
        />
        <div className="absolute inset-0 bg-[#0f0f11]/70"></div>
      </div>

      <div className="max-w-[1280px] w-full mx-auto relative z-10">
        <div className="max-w-[1060px] flex flex-col gap-6">
          {/* Badge */}
          <div className="self-start inline-flex items-center px-4 py-2 rounded-full bg-white/[0.07] border border-white/20">
            <span className="font-sans font-bold text-[12px] leading-[16px] text-[#d4af37] tracking-wider uppercase">
              MELBOURNE'S PRESTIGE AUTOMOTIVE SERVICE CENTRE
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[56px] lg:leading-[62px] text-white tracking-tight">
            Expert Car Servicing You Can Trust
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-normal text-base sm:text-lg lg:text-[20px] lg:leading-[30px] text-[#a3a3ac] max-w-[900px]">
            Melbourne Premium Automotive Service Centre — All Makes & Models. Transparent pricing, expert certified mechanics, and pristine workshop care.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button 
              onClick={onOpenBooking}
              className="btn-figma-gold"
            >
              Book a Service
            </button>

            <a 
              href="tel:+61400857777" 
              className="btn-figma-outlined"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
