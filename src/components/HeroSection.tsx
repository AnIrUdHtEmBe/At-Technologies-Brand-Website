'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Award, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F7FA] via-white to-[#EEF2F9]"
    >
      {/* Background geometric decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#4A7FC1]/8 to-[#1B3A6B]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#1B3A6B]/6 to-[#4A7FC1]/4 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#1B3A6B 1px, transparent 1px), linear-gradient(to right, #1B3A6B 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B3A6B]/8 border border-[#1B3A6B]/15 mb-8"
        >
          <Award size={14} className="text-[#4A7FC1]" />
          <span className="text-[#1B3A6B] text-xs font-semibold tracking-widest uppercase">
            Authorised Distributor · Sumitomo Electric
          </span>
        </motion.div>

        {/* Brand logos area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center justify-center gap-6 mb-10 flex-wrap"
        >
          {/* AT Technologies Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white border-2 border-[#1B3A6B]/20 flex items-center justify-center shadow-md p-2">
              <Image
                src="/images/at-logo-icon.png"
                alt="AT Technologies Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="text-left">
              <div className="text-[#1B3A6B] font-bold text-xl md:text-2xl tracking-tight">AT Technologies</div>
              <div className="text-[#5A6A85] text-xs font-medium tracking-wide">Precision Cutting Tools</div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-[#DDE3ED]" />

          {/* Sumitomo Electric Logo */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white border-2 border-[#1B3A6B]/20 flex items-center justify-center shadow-md p-2.5">
              <Image
                src="/images/sumitomo-logo.png"
                alt="Sumitomo Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="text-left">
              <div className="text-[#1B3A6B] font-bold text-xl md:text-2xl tracking-tight">Sumitomo</div>
              <div className="text-[#5A6A85] text-xs font-medium tracking-wide">Performance Cutting Tools</div>
            </div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A2E] leading-[1.1] tracking-tight mb-6"
        >
          Precision Cutting Tools{' '}
          <span className="gradient-text block sm:inline">
            for Modern Manufacturing
          </span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[#5A6A85] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Authorised distributor of{' '}
          <strong className="text-[#1B3A6B]">Sumitomo Electric</strong> cutting tools — specialists in
          Carbide, CBN and Diamond tooling solutions in Bangalore and Mysore, India.
        </motion.p>

        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-1.5 text-[#5A6A85] text-sm mb-10"
        >
          <MapPin size={14} className="text-[#4A7FC1]" />
          <span>Bangalore, Mysore, Karnataka, India</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-4 bg-[#1B3A6B] text-white font-semibold rounded-xl hover:bg-[#4A7FC1] transition-all duration-200 shadow-[0_4px_20px_rgba(27,58,107,0.3)] hover:shadow-[0_4px_30px_rgba(74,127,193,0.4)] hover:-translate-y-0.5 text-base cursor-pointer"
          >
            Get in Touch
          </button>
          <button
            onClick={() => handleScroll('#specialisation')}
            className="px-8 py-4 bg-white text-[#1B3A6B] font-semibold rounded-xl border border-[#DDE3ED] hover:border-[#4A7FC1] hover:text-[#4A7FC1] transition-all duration-200 text-base"
          >
            Our Specialisations
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => handleScroll('#about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5A6A85] hover:text-[#4A7FC1] transition-colors group"
          aria-label="Scroll to learn more"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>

      {/* Hidden SEO keywords - screen reader only */}
      <span className="sr-only">
        AT Technologies authorised distributor Sumitomo Electric cutting tools Bangalore India.
        Specialist in carbide tools, CBN tools, diamond tools, PCD tools, drills, endmills, inserts.
        Sumitomo carbide distributor Karnataka. Sumitomo cutting tools dealer South India.
      </span>
    </section>
  );
}
