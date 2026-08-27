import React from 'react';

export default function CtaBanner({ onOpenBooking }) {
  return (
    <section className="w-full bg-gradient-to-r from-[#d4af37] via-[#e5a93c] to-[#f3c05d] py-[56px] px-6 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        <div className="flex flex-col gap-2 max-w-[843px]">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[32px] lg:leading-[40px] text-[#0f0f11]">
            Ready to Service Your Vehicle?
          </h2>
          <p className="font-sans font-medium text-sm sm:text-[16px] leading-[22px] text-[#0f0f11]">
            Book online today to schedule a mechanical diagnostic block or request an immediate service advisor quote.
          </p>
        </div>

        <div className="shrink-0">
          <button
            onClick={onOpenBooking}
            className="btn-figma-dark"
          >
            Book Your Service Today
          </button>
        </div>
      </div>
    </section>
  );
}
