import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function BookServiceSection({ preselectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicle: '',
    serviceType: preselectedService || 'Select a service type...',
    preferredDate: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/ausdrivemotorgroup@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'Full Name': formData.fullName,
          'Phone': formData.phone,
          'Email': formData.email,
          'Vehicle': formData.vehicle,
          'Service Type': formData.serviceType,
          'Preferred Date': formData.preferredDate,
          _subject: `New Service Booking Request: ${formData.vehicle || 'Vehicle'} - ${formData.fullName}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking. Please try again.');
      }

      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f3c05d', '#ffffff']
      });
    } catch (err) {
      console.error('Booking submission error:', err);
      setErrorMessage('Unable to send booking right now. Please try again or call 0400 857 777.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book-service" className="w-full bg-[#0f0f11] py-[100px] px-6 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[32px] items-stretch">
        {/* Left Visual Column */}
        <div className="relative rounded-[8px] overflow-hidden min-h-[460px] lg:h-[680px] flex flex-col justify-end p-[40px] border border-[#2a2a30]">
          <img 
            src="/assets/left-panel_4.jpg" 
            alt="Elite Engineering Workshop" 
            className="absolute inset-0 w-full h-full object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-[#0f0f11]/35"></div>

          <div className="relative z-10 flex flex-col gap-2">
            <h3 className="font-heading font-bold text-[28px] leading-[35px] text-white">
              Elite Engineering
            </h3>
            <p className="font-sans font-normal text-[15px] leading-[20.5px] text-[#a3a3ac]">
              Your car represents significant engineering craft. We are here to keep it behaving exactly as the designers originally intended.
            </p>
          </div>
        </div>

        {/* Right Booking Form Column */}
        <div className="bg-[#18181c] border border-[#2a2a30] rounded-[8px] p-8 lg:p-[48px] flex flex-col justify-between">
          {submitted ? (
            <div className="text-center py-12 flex flex-col items-center justify-center h-full">
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mb-4">
                <span className="text-[#d4af37] text-2xl font-bold">✔</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Booking Request Sent!
              </h3>
              <p className="font-sans text-sm text-[#a3a3ac] max-w-md mx-auto mb-6">
                Thank you, {formData.fullName}. Our service advisors will contact you shortly at <span className="text-[#d4af37]">{formData.phone}</span> to confirm your booking for your {formData.vehicle || 'vehicle'}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-figma-outlined text-xs py-2 px-4"
              >
                Book Another Service
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-[32px]">
              {/* Header */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-semibold text-[13px] leading-[16px] text-[#d4af37]">
                    Online Scheduling
                  </span>
                  <div className="w-4 h-[2px] bg-[#d4af37]"></div>
                </div>

                <h2 className="font-heading font-bold text-3xl lg:text-[36px] lg:leading-[43px] text-white">
                  Book Your Service
                </h2>

                <p className="font-sans font-normal text-[16px] leading-[24px] text-[#a3a3ac]">
                  Complete the fields below and our service advisors will contact you to confirm your mechanical arrival window.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  {/* FULL NAME */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans font-semibold text-[13px] leading-[18px] text-[#a3a3ac] uppercase">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-[14px] text-[14px] text-white placeholder:text-[#6d6d75] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  {/* PHONE NUMBER */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans font-semibold text-[13px] leading-[18px] text-[#a3a3ac] uppercase">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0412 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-[14px] text-[14px] text-white placeholder:text-[#6d6d75] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  {/* EMAIL ADDRESS */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans font-semibold text-[13px] leading-[18px] text-[#a3a3ac] uppercase">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-[14px] text-[14px] text-white placeholder:text-[#6d6d75] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  {/* VEHICLE DETAILS */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans font-semibold text-[13px] leading-[18px] text-[#a3a3ac] uppercase">
                      VEHICLE DETAILS
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2021 Mercedes C300"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-[14px] text-[14px] text-white placeholder:text-[#6d6d75] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  {/* SERVICE TYPE */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans font-semibold text-[13px] leading-[18px] text-[#a3a3ac] uppercase">
                      SERVICE TYPE
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-[14px] text-[14px] text-white focus:outline-none focus:border-[#d4af37] cursor-pointer"
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

                  {/* PREFERRED DATE */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans font-semibold text-[13px] leading-[18px] text-[#a3a3ac] uppercase">
                      PREFERRED DATE
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#0f0f11] border border-[#2a2a30] rounded-[4px] p-[14px] text-[14px] text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-xs text-center">
                    {errorMessage}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-figma-gold w-full"
                  >
                    {loading ? 'Sending Request...' : 'Book My Service'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
