import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Will servicing my car at AusDrive void my manufacturer warranty?',
      a: 'No. Under Australian Consumer Law, you have the right to select an authorized independent mechanic. We operate to strict dealer standards, use genuine or OEM components, and stamp your digital logbook to keep your new car warranty fully protected.'
    },
    {
      q: 'How long does a standard Major or Full Service take?',
      a: 'Typically, a basic diagnostic check takes 1-2 hours. A full or major scheduled service requires 3 to 4 hours as it involves deep mechanical inspections, digital diagnostic sweeps, spark plug, and synthetic oil filter renewals.'
    },
    {
      q: 'Do you provide a service drop-off or replacement car option?',
      a: 'Yes. We have specialized transport options and prestige replacement car models available on request. Please inform our automotive advisors when scheduling your initial booking.'
    },
    {
      q: 'How often should my vehicle have a scheduled service check?',
      a: 'We highly recommend booking an oil fluid change and mechanics review every 10,000 km or 6 months (whichever occurs first) to prevent major engine component wear.'
    },
    {
      q: 'Do you guarantee all mechanical repair and diagnostic work?',
      a: 'Absolutely. Every single mechanical replacement is backed by a 12-month workshop and parts warranty. This is part of our dedicated AusDrive Motor Group standard.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full bg-[#0f0f11] py-[100px] px-6 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[48px]">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-[2px] bg-[#d4af37]"></div>
            <span className="font-heading font-semibold text-[13px] leading-[16px] text-[#d4af37]">
              Expert Consultation
            </span>
            <div className="w-4 h-[2px] bg-[#d4af37]"></div>
          </div>

          <h2 className="font-heading font-bold text-3xl lg:text-[36px] lg:leading-[43px] text-white">
            Common Servicing Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-[16px]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#18181c] border border-[#2a2a30] rounded-[8px] p-[24px] flex flex-col gap-[12px]"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-heading font-bold text-base sm:text-[18px] leading-[23px] text-white">
                    {faq.q}
                  </span>
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 text-[#d4af37]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <p className="font-sans font-normal text-[14px] leading-[21px] text-[#a3a3ac] pt-1">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
