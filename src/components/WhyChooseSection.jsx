import React from 'react';
import { UserCheck, ShieldCheck, Layers, FileSpreadsheet } from 'lucide-react';

export default function WhyChooseSection() {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Certified Mechanics',
      desc: 'Highly credentialed experts specialized in modern European, prestige, and high-performance vehicle mechanical setups.'
    },
    {
      icon: ShieldCheck,
      title: 'Genuine & OEM Parts',
      desc: 'We exclusively fit manufacturer-approved components and premium synthetic fluids to preserve vehicle dynamics.'
    },
    {
      icon: Layers,
      title: 'All Makes & Models',
      desc: 'Full suite diagnostic capability covering standard daily models, hybrid drivetrains, luxury SUVs, and exotic machinery.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Transparent Pricing',
      desc: 'Detailed itemized digital quotes. We will never perform any extra mechanical work without your direct permission.'
    }
  ];

  return (
    <section id="why-us" className="w-full bg-[#0f0f11] border-b border-[#2a2a30] py-[100px] px-6 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[56px]">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-[2px] bg-[#d4af37]"></div>
            <span className="font-heading font-semibold text-[13px] leading-[16px] text-[#d4af37]">
              The AusDrive Standard
            </span>
            <div className="w-4 h-[2px] bg-[#d4af37]"></div>
          </div>

          <h2 className="font-heading font-bold text-3xl lg:text-[36px] lg:leading-[43px] text-white">
            Why Discerning Melbourne Drivers Choose Us
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#18181c] border border-[#2a2a30] rounded-[6px] p-[32px] flex flex-col gap-[16px]"
              >
                <div className="w-[44px] h-[44px] rounded-[4px] bg-white/[0.06] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#d4af37]" />
                </div>

                <h3 className="font-heading font-bold text-[18px] leading-[23px] text-white">
                  {item.title}
                </h3>

                <p className="font-sans font-normal text-[14px] leading-[22.4px] text-[#a3a3ac]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
