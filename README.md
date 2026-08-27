# 🚗 AusDrive Motor Group

> **Melbourne's Prestige Automotive Service Centre**  
> Dealership-grade automotive servicing, diagnostics, and mechanical care for luxury European and modern vehicles.

Built with **React**, **Vite**, and **Tailwind CSS**, strictly matching the official Figma design (**Node `21:5`**).

---

## 📸 Figma Design Reference

- **Figma URL**: [AusDrive Figma Design](https://www.figma.com/design/iuROH7zJIvW6CKCOyMnTx6/AUSDRIVE?node-id=21-5&m=dev)
- **Target Node**: `21:5` (`ausdrive-service-page`)
- **Branding**: Gold Emblem (`AusDrive Motor Group Logo _Final_Gold_`)

---

## ✨ Features & Sections

- **Top Bar**: Contact phone `+61 400 857 777`, service email `ausdrivemotorgroup@gmail.com`, live WhatsApp chat support status, and LMCT registration.
- **Sticky Navigation Bar**: High-resolution brand logo, smooth scroll anchor links, mobile hamburger drawer, and fast "Book Now" CTA.
- **Hero Showcase**: High-impact dark backdrop with dual call-to-action buttons (*"Book a Service"*, *"Call Us Now"*) and trust badges (*100% Genuine Parts*, *Master Technicians*, *Same-Day Turnaround*).
- **Core Services Grid**: 6 structured service modules (Log Book Servicing, Brake & Clutch Repairs, Engine Diagnostics, Air Conditioning, Tyres & Alignment, Pre-Purchase Inspections) with interactive detail popups.
- **Sell Your Car Feature**: Real-time vehicle trade-in valuation calculator with instant estimation modal and celebration animation.
- **The AusDrive Standard (Why Choose Us)**: 4 core pillars (*Certified Mechanics*, *Genuine & OEM Parts*, *All Makes & Models*, *Transparent Pricing*).
- **Interactive Service Booking**: Multi-field scheduling form with vehicle model, service selection, calendar date picker, and confirmation view.
- **Prestige Servicing Packages**: Structured pricing tiers ($189 Basic Maintenance, $349 Full Service [*MOST POPULAR*], $549 Major Mechanical) with feature checklists.
- **Verified Client Testimonials**: Authentic Melbourne driver reviews with 5-star ratings.
- **Melbourne Workshop & Showroom**: 450 Elizabeth St, Melbourne VIC 3000 showcase with workshop statistics (`12,000+` Serviced, `100%` OEM Warranty, `24 Hour` Response) and directions link.
- **Interactive FAQ Accordion**: Expandable Q&A covering warranty compliance, servicing duration, replacement cars, and mechanical guarantees.
- **CTA Banner**: Full-width gold gradient action banner.
- **Footer**: Brand story, Quick Links, Get in Touch details, Social Media links, LMCT 12345 & ABN licensing, and copyright info.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom Figma tokens (`Outfit` & `Manrope` typography, `#0f0f11` background, `#d4af37` gold accents, `#18181c` card panels)
- **Icons**: [Lucide React](https://lucide.dev/)
- **FX**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** >= 18.x
- **npm** >= 9.x

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/fidelisyugita/ausdrive.git
cd ausdrive
npm install
```

### 3. Running Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Production Build
Compile optimized static production bundle:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```text
ausdrive/
├── public/
│   └── assets/
│       ├── ausdrive-logo.png          # High-resolution trimmed brand logo
│       ├── hero_2.jpg                 # Hero background
│       ├── left-panel_3.jpg           # Sell car feature card image
│       ├── left-panel_4.jpg           # Booking feature card image
│       └── map-container_5.jpg        # Showroom workshop photo
├── src/
│   ├── components/
│   │   ├── AboutLocationSection.jsx   # Melbourne workshop & showroom
│   │   ├── BookingModal.jsx           # Global booking popup modal
│   │   ├── BookServiceSection.jsx     # Inline booking scheduling form
│   │   ├── CtaBanner.jsx              # Gold action banner
│   │   ├── FaqSection.jsx             # Expandable FAQ accordions
│   │   ├── Footer.jsx                 # Footer & licensing
│   │   ├── Hero.jsx                   # Hero section
│   │   ├── Navbar.jsx                 # Header navigation
│   │   ├── PricingSection.jsx         # 3-tier pricing packages
│   │   ├── SellYourCarSection.jsx     # Valuation estimate calculator
│   │   ├── ServicesSection.jsx        # 6 core service modules & popups
│   │   ├── TestimonialsSection.jsx    # Verified Melbourne client reviews
│   │   ├── TopBar.jsx                 # Contact & WhatsApp top bar
│   │   └── WhyChooseSection.jsx       # 4 pillars of AusDrive standard
│   ├── App.jsx                        # Root page assembly
│   ├── index.css                      # Tailwind v4 design tokens & base styles
│   └── main.jsx                       # Application entry
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 📄 License & Accreditation

© 2025 AusDrive Motor Group. All rights reserved.  
**LMCT License**: 12345 · **ABN**: 87 123 456 789  
450 Elizabeth St, Melbourne VIC 3000
