'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Specialisation', href: '#specialisation' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on('change', (y) => setScrolled(y > 20));
    return () => unsub();
  }, [scrollY]);

  const handleNav = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const navOffset = 70;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const offsetPosition = elementRect - bodyRect - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(27,58,107,0.08)] border-b border-[#DDE3ED]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo & Text */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer"
            aria-label="AT Technologies Home"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/90 border border-[#DDE3ED] shadow-sm flex items-center justify-center p-1.5 flex-shrink-0 group-hover:border-[#4A7FC1]/50 group-hover:shadow transition-all duration-200">
              <Image
                src="/images/at-logo-icon.png"
                alt="AT Technologies Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[#1B3A6B] font-bold text-base md:text-lg tracking-tight group-hover:text-[#4A7FC1] transition-colors">
                AT Technologies
              </span>
              <span className="text-[#4A7FC1] text-[9px] md:text-[10px] font-medium tracking-widest uppercase">
                Authorised Distributor Sumitomo
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="text-[#1A1A2E] hover:text-[#4A7FC1] text-sm font-medium transition-colors relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#4A7FC1] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-[#1B3A6B] hover:bg-[#F5F7FA] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-white border-t border-[#DDE3ED]"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="text-left text-[#1A1A2E] font-medium text-base hover:text-[#4A7FC1] transition-colors py-1 cursor-pointer block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#contact');
            }}
            className="mt-2 px-5 py-3 bg-[#1B3A6B] text-white font-medium rounded-lg hover:bg-[#4A7FC1] transition-colors text-center cursor-pointer block"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
