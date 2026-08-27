import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Marcus Sterling',
      initials: 'MS',
      location: 'Toorak, VIC · Audi R8 Owner',
      quote: '"Amazing diagnostic precision. Solved an electronic engine misfire code on my Audi that two other Melbourne workshop centers couldn\'t trace."',
    },
    {
      name: 'Elena Rostova',
      initials: 'ER',
      location: 'Brighton, VIC · Porsche Cayenne Driver',
      quote: '"Outstandingly transparent experience. Kept me fully appraised with digital photo reports of the worn pads before carrying out clutch repairs."',
    },
    {
      name: 'David Chen',
      initials: 'DC',
      location: 'Melbourne CBD · Corporate Fleet Manager',
      quote: '"Regularly bring my company transport fleet to AusDrive. Dealership level workshop care accompanied with honest pricing and detailed service listings."',
    }
  ];

  return (
    <section className="w-full bg-[#0f0f11] py-[100px] px-6 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[56px]">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-[2px] bg-[#d4af37]"></div>
            <span className="font-heading font-semibold text-[13px] leading-[16px] text-[#d4af37]">
              Verified Client Feedback
            </span>
            <div className="w-4 h-[2px] bg-[#d4af37]"></div>
          </div>

          <h2 className="font-heading font-bold text-3xl lg:text-[36px] lg:leading-[43px] text-white">
            What Melbourne Drivers Say
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#18181c] border border-[#2a2a30] rounded-[8px] p-[32px] flex flex-col justify-between gap-[24px]"
            >
              <div className="flex flex-col gap-[24px]">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-[14px] h-[14px] fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-sans font-normal text-[15px] leading-[24px] text-white">
                  {item.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] rounded-full bg-[#222228] flex items-center justify-center font-heading font-bold text-sm text-[#d4af37]">
                  {item.initials}
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h4 className="font-heading font-bold text-[15px] leading-[19px] text-white">
                    {item.name}
                  </h4>
                  <p className="font-sans font-normal text-[13px] leading-[18px] text-[#a3a3ac]">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
