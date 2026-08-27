import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicle: '',
    serviceType: initialService || 'Select a service type...',
    preferredDate: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f3c05d', '#ffffff']
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#18181c] border border-[#2a2a30] rounded-[8px] max-w-lg w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#a3a3ac] hover:text-white p-2 rounded bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mb-4">
              <span className="text-[#d4af37] text-2xl font-bold">✔</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-2">
              Booking Received!
            </h3>
            <p className="font-sans text-sm text-[#a3a3ac] max-w-md mx-auto mb-6">
              Thank you, {formData.fullName}. Our service advisors will contact you shortly at <span className="text-[#d4af37]">{formData.phone}</span> regarding your booking for your {formData.vehicle || 'vehicle'}.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-figma-gold"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-[2px] bg-[#d4af37]"></div>
                <span className="font-heading font-semibold text-[13px] leading-[16px] text-[#d4af37]">
                  Online Scheduling
                </span>
              </div>
              <h2 className="font-heading font-bold text-2xl text-white">
                Book Your Service
              </h2>
              <p className="font-sans text-xs text-[#a3a3ac]">
                Complete the fields below and our service advisors will contact you immediately.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans font-semibold text-[12px] text-[#a3a3ac] uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-3 text-[14px] text-white placeholder:text-[#6d6d75] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans font-semibold text-[12px] text-[#a3a3ac] uppercase">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0412 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-3 text-[14px] text-white placeholder:text-[#6d6d75] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans font-semibold text-[12px] text-[#a3a3ac] uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-3 text-[14px] text-white placeholder:text-[#6d6d75] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans font-semibold text-[12px] text-[#a3a3ac] uppercase">
                    Vehicle Details *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2021 Mercedes C300"
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-3 text-[14px] text-white placeholder:text-[#6d6d75] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans font-semibold text-[12px] text-[#a3a3ac] uppercase">
                    Service Type
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-3 text-[14px] text-white focus:outline-none focus:border-[#d4af37] cursor-pointer"
                  >
                    <option value="Select a service type...">Select a service type...</option>
                    <option value="Basic Maintenance ($189)">Basic Maintenance ($189)</option>
                    <option value="Full Service ($349)">Full Service ($349)</option>
                    <option value="Major Mechanical ($549)">Major Mechanical ($549)</option>
                    <option value="Log Book Servicing">Log Book Servicing</option>
                    <option value="Brake & Clutch Repairs">Brake & Clutch Repairs</option>
                    <option value="Engine Diagnostics">Engine Diagnostics</option>
                    <option value="Air Conditioning">Air Conditioning</option>
                    <option value="Tyres & Wheel Alignment">Tyres & Wheel Alignment</option>
                    <option value="Pre-Purchase Inspections">Pre-Purchase Inspections</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans font-semibold text-[12px] text-[#a3a3ac] uppercase">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-3 text-[14px] text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-figma-gold w-full"
                >
                  {loading ? 'Submitting...' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
