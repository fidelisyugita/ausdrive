import React from 'react';
import { ExternalLink, CheckCircle2, Clock, MapPin, Wrench } from 'lucide-react';

export default function AboutLocationSection() {
  const stats = [
    { value: '12,000+', label: 'Vehicles Serviced' },
    { value: '100%', label: 'OEM Parts Warranty' },
    { value: '24 Hour', label: 'Advisor Response' },
  ];

  const facilityHighlights = [
    '6 State-of-the-Art Computerized Diagnostic Bays',
    'Calibrated 3D Laser Wheel Alignment Rig',
    'Climate-Controlled Clean Workshop Environment',
    'Dedicated European & Prestige Machinery Specialists'
  ];

  return (
    <section id="about" className="w-full bg-[#0f0f11] border-t border-b border-[#2a2a30] py-[100px] px-6 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center">
        {/* Left Workshop Description & Stats */}
        <div className="flex flex-col gap-[32px]">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-heading font-semibold text-[13px] leading-[16px] text-[#d4af37]">
                Melbourne Workshop
              </span>
              <div className="w-4 h-[2px] bg-[#d4af37]"></div>
            </div>

            <h2 className="font-heading font-bold text-3xl lg:text-[36px] lg:leading-[43px] text-white">
              Premium Showroom & Mechanical Garage
            </h2>
          </div>

          <p className="font-sans font-normal text-base text-[#a3a3ac] leading-[26px]">
            Situated conveniently at 10 Gladstone St, Thomastown, AusDrive Motor Group's flagship servicing headquarters boasts state-of-the-art diagnostic bays, highly calibrated computerized alignment rigs, and premium synthetic lubricant hubs. Our clean, secure environment is engineered to serve premium European machinery and modern family daily transports under optimal climate controls.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-[40px] pt-2">
            {stats.map((st, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="font-heading font-extrabold text-[32px] leading-[40px] text-[#d4af37]">
                  {st.value}
                </div>
                <div className="font-sans font-semibold text-[13px] leading-[18px] text-[#a3a3ac]">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Workshop Showcase Card (Replacing Static Map) */}
        <div className="bg-[#18181c] border border-[#2a2a30] rounded-[8px] p-8 lg:p-[40px] flex flex-col justify-between gap-[28px]">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between pb-4 border-b border-[#2a2a30]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[4px] bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[18px] text-white">
                    Flagship Servicing Bays
                  </h3>
                  <p className="font-sans text-[12px] text-[#a3a3ac]">
                    10 Gladstone St, Thomastown VIC 3074
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-flex px-2.5 py-1 rounded bg-[#d4af37]/10 text-[#d4af37] text-[11px] font-bold">
                LMCT 12345
              </span>
            </div>

            {/* Facility Feature Checkpoints */}
            <div className="space-y-3">
              <p className="font-heading font-bold text-xs uppercase tracking-wider text-[#d4af37]">
                Facility Specifications
              </p>
              {facilityHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-[14px] text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="font-sans text-[#e5e7eb]">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operating Hours & Directions Link */}
          <div className="pt-4 border-t border-[#2a2a30] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[13px] text-[#a3a3ac]">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              <span>Mon-Sat: <strong className="text-white">9:00 AM – 6:00 PM</strong></span>
            </div>

            <a
              href="https://maps.app.goo.gl/nrDHDF8RM6idfV9t5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-heading font-bold text-[#d4af37] hover:text-[#f3c05d] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
