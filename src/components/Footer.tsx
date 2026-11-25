'use client';
import Image from 'next/image';
import { scrollToSection } from '@/lib/scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1E3D] text-white">
      {/* Top divider accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#4A7FC1] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center p-1 shadow-sm">
                <Image
                  src="/images/at-logo-icon.png"
                  alt="AT Technologies Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">AT Technologies</div>
                <div className="text-[#93B8E3] text-[10px] tracking-widest uppercase">Authorised Distributor</div>
              </div>
            </div>
            <p className="text-[#7A9CC0] text-sm leading-relaxed max-w-xs">
              Authorised distributor of Sumitomo Electric cutting tools.
              Specialists in Carbide, CBN and Diamond tooling Bangalore and Mysore, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Carbide Tools', href: '#specialisation' },
                { label: 'CBN Tools', href: '#specialisation' },
                { label: 'Diamond / PCD Tools', href: '#specialisation' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-[#7A9CC0] hover:text-[#4A7FC1] text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Get in Touch</h4>
            <div className="space-y-3">
              <div>
                <div className="text-[#5A7A9C] text-xs mb-1">Email</div>
                <a
                  href="mailto:arvind.attechnologies@gmail.com"
                  className="text-[#93B8E3] hover:text-white text-sm transition-colors break-all"
                >
                  arvind.attechnologies@gmail.com
                </a>
              </div>
              <div>
                <div className="text-[#5A7A9C] text-xs mb-1">Location</div>
                <p className="text-[#7A9CC0] text-sm">
                  Abbigere, Bangalore - 560090<br />Karnataka, India
                </p>
              </div>
              <div>
                <div className="text-[#5A7A9C] text-xs mb-1">GST</div>
                <p className="text-[#7A9CC0] text-sm">29AMSPT3157B1ZN</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1F3A6A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#5A7A9C] text-xs text-center sm:text-left">
            &copy; {currentYear} AT Technologies. All rights reserved.
          </p>
          <p className="text-[#5A7A9C] text-xs text-center sm:text-right">
            Authorised Distributor · Sumitomo Electric Industries Ltd.
          </p>
        </div>
      </div>

      {/* Hidden SEO in footer */}
      <span className="sr-only">
        AT Technologies authorised Sumitomo distributor Bangalore Karnataka India.
        Sumitomo carbide tools CBN tools diamond PCD tools drills endmills inserts supplier dealer.
        Sumitomo cutting tools Bangalore. Sumitomo tools Karnataka. Sumitomo distributor South India.
      </span>
    </footer>
  );
}
