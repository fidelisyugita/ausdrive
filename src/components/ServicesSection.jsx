import React, { useState } from 'react';
import { 
  BookOpen, 
  Disc, 
  Cpu, 
  Wind, 
  CircleDot, 
  ClipboardCheck, 
  ChevronRight,
  X
} from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'logbook',
      icon: BookOpen,
      title: 'Log Book Servicing',
      desc: 'Keep your manufacturer warranty fully intact with our dealership-grade scheduled services and complete history logging.',
      features: [
        'Manufacturer-compliant logbook validation & stamp',
        'Genuine OEM components and approved synthetic oils',
        'Detailed 50-point diagnostic safety report',
        'Service warning interval resets'
      ]
    },
    {
      id: 'brakes',
      icon: Disc,
      title: 'Brake & Clutch Repairs',
      desc: 'Premium component replacements and pad upgrades ensuring absolute safety and structural braking response.',
      features: [
        'Low-dust ceramic pad & rotor replacements',
        'Precision disc machining & runout alignment',
        'High-temperature brake fluid flush',
        'Dual-mass flywheel & clutch kit overhaul'
      ]
    },
    {
      id: 'diagnostics',
      icon: Cpu,
      title: 'Engine Diagnostics',
      desc: 'State-of-the-art electronic analysis to identify system faults, clear diagnostic codes, and calibrate fuel maps.',
      features: [
        'European dealership scanner systems',
        'ECU & live telemetry sensor diagnosis',
        'Ignition & fuel trim calibration',
        'Engine warning fault code clearance'
      ]
    },
    {
      id: 'ac',
      icon: Wind,
      title: 'Air Conditioning',
      desc: 'A/C system inspections, refrigerant re-gassing, and anti-bacterial cabin sanitation to ensure optimal temp settings.',
      features: [
        'R134a & modern R1234yf system re-gassing',
        'Anti-bacterial cabin filter decontamination',
        'Compressor & condenser leak testing',
        'Climate control diagnostic inspection'
      ]
    },
    {
      id: 'tyres',
      icon: CircleDot,
      title: 'Tyres & Wheel Alignment',
      desc: 'Precision computerized alignment, balance adjustments, and premium tyre options from high-performance global brands.',
      features: [
        '3D computerized laser alignment rig',
        'Dynamic high-speed wheel balancing',
        'Michelin, Pirelli, Continental fitments',
        'Tread wear and camber calibration'
      ]
    },
    {
      id: 'pre-purchase',
      icon: ClipboardCheck,
      title: 'Pre-Purchase Inspections',
      desc: 'Comprehensive 150-point diagnostic mapping and digital body structure report before finalizing a vehicle purchase.',
      features: [
        '150-point comprehensive mechanical audit',
        'Digital chassis & paint thickness analysis',
        'Drivetrain & transmission health diagnostics',
        'Immediate digital report with photos'
      ]
    }
  ];

  return (
    <section id="services" className="w-full bg-[#0f0f11] py-[100px] px-6 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[56px]">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-[2px] bg-[#d4af37]"></div>
            <span className="font-heading font-semibold text-[13px] leading-[16px] text-[#d4af37]">
              Expert Mechanical Care
            </span>
            <div className="w-4 h-[2px] bg-[#d4af37]"></div>
          </div>

          <h2 className="font-heading font-bold text-3xl lg:text-[36px] lg:leading-[43px] text-white">
            Premium Automotive Services
          </h2>

          <p className="font-sans font-normal text-base text-[#a3a3ac] max-w-[720px]">
            Ranging from routine log book validations to complex mechanical repairs and precision diagnostic profiling.
          </p>
        </div>

        {/* Services Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-[#18181c] border border-[#2a2a30] rounded-[8px] p-[32px] flex flex-col justify-between min-h-[320px] transition-all hover:border-[#d4af37]/60"
              >
                <div>
                  {/* Icon */}
                  <div className="w-[48px] h-[48px] rounded-[4px] bg-[#d4af37] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#0f0f11]" />
                  </div>

                  <h3 className="font-heading font-bold text-[20px] leading-[25px] text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="font-sans font-normal text-[14px] leading-[21px] text-[#a3a3ac]">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 font-heading font-bold text-[13px] text-[#d4af37] hover:text-[#f3c05d] transition-colors"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-[12px] text-[#6d6d75] hover:text-white transition-colors"
                  >
                    Book This
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#18181c] border border-[#2a2a30] rounded-[8px] max-w-lg w-full p-8 relative shadow-2xl">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-[#a3a3ac] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-[4px] bg-[#d4af37] flex items-center justify-center">
                <selectedService.icon className="w-6 h-6 text-[#0f0f11]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-white">{selectedService.title}</h3>
                <span className="text-xs text-[#d4af37] font-semibold">AusDrive Dealership Standard</span>
              </div>
            </div>

            <p className="text-[#a3a3ac] text-sm mb-6 leading-relaxed">
              {selectedService.desc}
            </p>

            <div className="space-y-2.5 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Included Procedures:</p>
              {selectedService.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-[#ffffff]">
                  <span className="text-[#d4af37] font-bold">✔</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectService(title);
                }}
                className="btn-figma-gold flex-1"
              >
                Book {selectedService.title}
              </button>
              <button 
                onClick={() => setSelectedService(null)}
                className="btn-figma-outlined"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
