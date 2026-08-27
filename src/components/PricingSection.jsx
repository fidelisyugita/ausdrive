import React from 'react';

export default function PricingSection({ onSelectPackage }) {
  const packages = [
    {
      id: 'basic',
      name: 'Basic Maintenance',
      price: '$189',
      popular: false,
      desc: 'Essential diagnostic checks and oil fluid renewals. Ideal for six-month safety checks.',
      features: [
        { text: '✔ Premium Engine Oil & Filter Renewal', included: true },
        { text: '✔ Comprehensive 40-Point Inspection', included: true },
        { text: '✔ Full Fluid Top-Up (Coolant, Brakes)', included: true },
        { text: '✔ Tyre Pressure & Tread Check', included: true },
        { text: '✘ Complete Diagnostic Scan', included: false },
      ]
    },
    {
      id: 'full',
      name: 'Full Service',
      price: '$349',
      popular: true,
      desc: 'Complete logbook-equivalent maintenance. Recommended for yearly standard services.',
      features: [
        { text: '✔ Premium Synthetic Oil & Filter', included: true },
        { text: '✔ 100-Point Mechanical Analysis', included: true },
        { text: '✔ On-Board Diagnostic Fault Scan', included: true },
        { text: '✔ Braking System & Fluid Inspection', included: true },
        { text: '✔ Full Battery & Charging Profiling', included: true },
      ]
    },
    {
      id: 'major',
      name: 'Major Mechanical',
      price: '$549',
      popular: false,
      desc: 'Complete diagnostics, spark plugs, filters, and full safety recalibration.',
      features: [
        { text: '✔ Everything in Full Service', included: true },
        { text: '✔ Spark Plug Replacement', included: true },
        { text: '✔ Cabin Filter & Air Filter Upgrades', included: true },
        { text: '✔ Fuel System Treatment', included: true },
        { text: '✔ Braking Fluid System Flush', included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="w-full bg-[#0f0f11] border-t border-b border-[#2a2a30] py-[100px] px-6 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[56px]">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-[2px] bg-[#d4af37]"></div>
            <span className="font-heading font-semibold text-[13px] leading-[16px] text-[#d4af37]">
              Complete Transparency
            </span>
            <div className="w-4 h-[2px] bg-[#d4af37]"></div>
          </div>

          <h2 className="font-heading font-bold text-3xl lg:text-[36px] lg:leading-[43px] text-white">
            Prestige Servicing Packages
          </h2>

          <p className="font-sans font-normal text-base text-[#a3a3ac] max-w-[720px]">
            We provide structured maintenance solutions with zero diagnostic overheads. All work is detailed beforehand.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-[#18181c] rounded-[8px] p-[40px] flex flex-col justify-between gap-[32px] ${
                pkg.popular ? 'border border-[#d4af37]' : 'border border-[#2a2a30]'
              }`}
            >
              <div className="flex flex-col gap-[12px]">
                {/* Title & Badge */}
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-[22px] leading-[28px] text-white">
                    {pkg.name}
                  </h3>
                  {pkg.popular && (
                    <span className="px-[10px] py-[4px] rounded-[4px] bg-[#d4af37] text-[#0f0f11] font-sans font-bold text-[11px] leading-[15px]">
                      MOST POPULAR
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="font-heading font-extrabold text-[40px] leading-[50px] text-[#d4af37]">
                  {pkg.price}
                </div>

                {/* Description */}
                <p className="font-sans font-normal text-[14px] leading-[19px] text-[#a3a3ac] min-h-[38px]">
                  {pkg.desc}
                </p>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-[#2a2a30] my-2"></div>

                {/* Feature Checklist */}
                <div className="flex flex-col gap-[14px]">
                  {pkg.features.map((feat, idx) => (
                    <div 
                      key={idx} 
                      className={`font-sans font-normal text-[14px] leading-[19px] ${
                        feat.included ? 'text-white' : 'text-[#6d6d75]'
                      }`}
                    >
                      {feat.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action */}
              <button
                onClick={() => onSelectPackage(`${pkg.name} (${pkg.price})`)}
                className={`w-full ${pkg.popular ? 'btn-figma-gold' : 'btn-figma-outlined'}`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
