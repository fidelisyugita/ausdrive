import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full bg-[#09090a] border-b border-[#2a2a30] py-[12px] px-6 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left Side: Phone & Email */}
        <div className="flex items-center flex-wrap gap-6 text-[13px] font-medium text-[#a3a3ac]">
          <a 
            href="tel:+61400857777" 
            className="flex items-center gap-2 hover:text-[#d4af37] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>+61 400 857 777</span>
          </a>

          <a 
            href="mailto:ausdrivemotorgroup@gmail.com" 
            className="hidden sm:flex items-center gap-2 hover:text-[#d4af37] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>ausdrivemotorgroup@gmail.com</span>
          </a>
        </div>

        {/* Right Side: WhatsApp & LMCT */}
        <div className="flex items-center gap-5 text-[13px]">
          <a 
            href="https://wa.me/message/ORHYHPVGBTERO1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#34d399] font-semibold hover:opacity-80 transition-opacity"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#34d399]" />
            <span>WhatsApp Online</span>
          </a>

          <span className="text-[#6d6d75] font-normal">
            LMCT 12345 · Melbourne, VIC
          </span>
        </div>
      </div>
    </div>
  );
}
