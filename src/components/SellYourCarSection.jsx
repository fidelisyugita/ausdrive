import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function SellYourCarSection() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    kilometres: '',
  });

  const [valuationResult, setValuationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.make || !formData.model) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const yr = parseInt(formData.year) || 2020;
      const base = 35000 + (yr - 2018) * 4500;
      const minVal = Math.max(12000, Math.round(base * 0.85 / 1000) * 1000);
      const maxVal = Math.round(base * 1.15 / 1000) * 1000;

      setValuationResult({
        vehicle: `${formData.year ? formData.year + ' ' : ''}${formData.make} ${formData.model}`,
        min: minVal.toLocaleString(),
        max: maxVal.toLocaleString(),
      });

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f3c05d', '#ffffff']
      });
    }, 600);
  };

  return (
    <section id="sell-your-car" className="w-full bg-[#0f0f11] border-t border-b border-[#2a2a30] py-[100px] px-6 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[32px] items-center">
        {/* Left Panel Image Card */}
        <div className="relative rounded-[8px] overflow-hidden min-h-[460px] lg:h-[540px] flex flex-col justify-end p-[40px] border border-[#2a2a30]">
          <img 
            src="/assets/left-panel_3.jpg" 
            alt="Sell Your Car" 
            className="absolute inset-0 w-full h-full object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-[#0f0f11]/40"></div>

          <div className="relative z-10 flex flex-col gap-2">
            <h3 className="font-heading font-bold text-[28px] leading-[35px] text-white">
              Hassle-Free Selling
            </h3>
            <p className="font-sans font-normal text-[15px] leading-[20px] text-[#a3a3ac]">
              Ditch the private market listings. We buy your vehicle directly with instant payment options.
            </p>
          </div>
        </div>

        {/* Right Panel Form */}
        <div className="bg-[#18181c] border border-[#2a2a30] rounded-[8px] p-8 lg:p-[48px] flex flex-col gap-[32px]">
          {/* Form Header */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-[2px] bg-[#d4af37]"></div>
              <span className="font-heading font-semibold text-[13px] leading-[16px] text-[#d4af37]">
                Valuation
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl lg:text-[36px] lg:leading-[43px] text-white">
              Sell Your Car Today
            </h2>

            <p className="font-sans font-normal text-[15px] leading-[22px] text-[#a3a3ac]">
              Enter your vehicle details below to receive a free, competitive industry valuation from our appraisals team.
            </p>
          </div>

          {/* Form Inputs */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
              {/* MAKE */}
              <div className="flex flex-col gap-2">
                <label className="font-sans font-semibold text-[12px] leading-[16px] text-[#a3a3ac] uppercase">
                  MAKE
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Toyota, BMW"
                  value={formData.make}
                  onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                  className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-[14px] text-[14px] text-white placeholder:text-[#6d6d75] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* MODEL */}
              <div className="flex flex-col gap-2">
                <label className="font-sans font-semibold text-[12px] leading-[16px] text-[#a3a3ac] uppercase">
                  MODEL
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Corolla, X5"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-[14px] text-[14px] text-white placeholder:text-[#6d6d75] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* YEAR */}
              <div className="flex flex-col gap-2">
                <label className="font-sans font-semibold text-[12px] leading-[16px] text-[#a3a3ac] uppercase">
                  YEAR
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2020"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-[14px] text-[14px] text-white placeholder:text-[#6d6d75] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* KILOMETRES */}
              <div className="flex flex-col gap-2">
                <label className="font-sans font-semibold text-[12px] leading-[16px] text-[#a3a3ac] uppercase">
                  KILOMETRES
                </label>
                <input
                  type="text"
                  placeholder="e.g. 45,000"
                  value={formData.kilometres}
                  onChange={(e) => setFormData({ ...formData, kilometres: e.target.value })}
                  className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-[14px] text-[14px] text-white placeholder:text-[#6d6d75] focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-figma-gold"
              >
                {loading ? 'Calculating Valuation...' : 'Get Your Free Valuation'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Valuation Modal */}
      {valuationResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#18181c] border border-[#2a2a30] rounded-[8px] max-w-md w-full p-8 text-center relative shadow-2xl">
            <h3 className="font-heading font-bold text-2xl text-white mb-2">{valuationResult.vehicle}</h3>
            
            <div className="my-6 p-4 rounded-[4px] bg-[#0f0f11] border border-[#2a2a30]">
              <p className="text-xs text-[#a3a3ac] uppercase mb-1">Estimated Trade-In Range</p>
              <p className="text-3xl font-heading font-extrabold text-[#d4af37]">
                ${valuationResult.min} - ${valuationResult.max} AUD
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="tel:+61400857777"
                className="btn-figma-gold flex-1 text-center"
              >
                Speak to Appraiser
              </a>
              <button
                onClick={() => setValuationResult(null)}
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
