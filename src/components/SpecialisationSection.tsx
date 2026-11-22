'use client';

import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, staggerChild } from './animations';
import { CheckCircle2 } from 'lucide-react';

const specialisations = [
  {
    id: 'carbide',
    name: 'Carbide',
    subtitle: 'Tungsten Carbide Tooling',
    gradient: 'from-[#1B3A6B] to-[#2A5298]',
    accentColor: '#4A7FC1',
    bgLight: '#EEF3FB',
    description:
      'Sumitomo carbide cutting tools deliver exceptional hardness and wear resistance for demanding machining applications in steel, cast iron and stainless steel and super alloys.',
    features: [
      'Carbide inserts for turning and milling',
      'Solid carbide end mills and drills',
      'High-speed, high-feed machining grades',
      'Multi-layer PVD & CVD coated grades',
      'Grooving and parting tools',
    ],
    applications: ['Automotive', 'Aerospace', 'General Engineering'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <polygon points="24,4 44,40 4,40" stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
        <polygon points="24,16 36,38 12,38" stroke="white" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"/>
      </svg>
    ),
  },
  {
    id: 'cbn',
    name: 'CBN',
    subtitle: 'Cubic Boron Nitride',
    gradient: 'from-[#2C4A8A] to-[#4A7FC1]',
    accentColor: '#6A9FD1',
    bgLight: '#EEF3FB',
    description:
      'CBN is the second hardest material in the world — ideal for hard turning and interrupted cuts on hardened steels and cast iron without coolant.',
    features: [
      'Hard turning of hardened steels (45–70 HRC)',
      'Replaces grinding in many operations',
      'High thermal stability up to 1400°C',
      'Dry machining capability',
      'Coated and uncoated Sumiboron Series',
    ],
    applications: ['Die & Mould', 'Hard Turning', 'Bearing Industry'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="white" strokeWidth="2.5" fill="none"/>
        <rect x="16" y="16" width="16" height="16" rx="2" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.2)"/>
        <line x1="24" y1="4" x2="24" y2="8" stroke="white" strokeWidth="2"/>
        <line x1="24" y1="40" x2="24" y2="44" stroke="white" strokeWidth="2"/>
        <line x1="4" y1="24" x2="8" y2="24" stroke="white" strokeWidth="2"/>
        <line x1="40" y1="24" x2="44" y2="24" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 'diamond',
    name: 'Diamond',
    subtitle: 'PCD & Diamond Tooling',
    gradient: 'from-[#1B3A6B] to-[#355E9E]',
    accentColor: '#7BB3E0',
    bgLight: '#EEF3FB',
    description:
      'Poly-Crystalline Diamond (PCD) tools offer the hardest cutting edge available — perfect for non-ferrous metals, composites and abrasive materials.',
    features: [
      'PCD tipped inserts and end mills',
      'Aluminium and non-ferrous machining',
      'CFRP and composite material cutting',
      'Mirror-finish surface quality',
      'Exceptional tool life vs carbide',
    ],
    applications: ['Aluminium Alloy', 'Copper Alloy', 'Reinforced Plastics'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <polygon points="24,4 44,20 36,44 12,44 4,20" stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
        <polygon points="24,12 38,22 32,40 16,40 10,22" stroke="white" strokeWidth="1" strokeLinejoin="round" fill="rgba(255,255,255,0.12)"/>
        <line x1="24" y1="4" x2="24" y2="12" stroke="white" strokeWidth="1.5"/>
        <line x1="44" y1="20" x2="38" y2="22" stroke="white" strokeWidth="1.5"/>
        <line x1="4" y1="20" x2="10" y2="22" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function SpecialisationSection() {
  return (
    <section id="specialisation" className="section-padding bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn direction="up" className="text-center mb-16">
          <p className="text-[#4A7FC1] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Our Specialisation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A2E] leading-tight mb-4">
            World-Class Tooling
            <span className="gradient-text block">in Three Categories</span>
          </h2>
          <p className="text-[#5A6A85] text-lg max-w-2xl mx-auto leading-relaxed">
            From the hardness of carbide to the precision of diamond, we supply
            Sumitomo cutting tools across the complete spectrum of machining requirements.
          </p>
        </FadeIn>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
          {specialisations.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerChild}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#DDE3ED] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Card top gradient */}
              <div className={`h-44 bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between`}>
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Category</div>
                    <div className="text-white/90 text-sm font-medium">{item.subtitle}</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-black text-3xl tracking-tight mb-0.5">{item.name}</h3>
                  <div className="flex gap-2 flex-wrap">
                    {item.applications.map((app) => (
                      <span key={app} className="px-2 py-0.5 bg-white/15 text-white text-[10px] font-medium rounded-full tracking-wide">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#5A6A85] text-sm leading-relaxed mb-5">{item.description}</p>
                <ul className="space-y-2.5 flex-1">
                  {item.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[#4A7FC1] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1A1A2E] text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
                {/* <a
                  href="mailto:arvind.attechnologies@gmail.com"
                  className={`mt-6 w-full py-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white text-sm font-semibold text-center hover:opacity-90 transition-opacity block`}
                >
                  Enquire About {item.name}
                </a> */}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Bottom CTA row */}
        <FadeIn direction="up" delay={0.3} className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <p className="text-[#5A6A85] text-base">
              Looking for a specific tool or grade?
            </p>
            <a
              href="mailto:arvind.attechnologies@gmail.com"
              className="px-6 py-2.5 bg-[#1B3A6B] text-white text-sm font-semibold rounded-lg hover:bg-[#4A7FC1] transition-colors"
            >
              Send a Tool Enquiry
            </a>
          </div>
        </FadeIn>

      </div>

      {/* Hidden SEO keywords */}
      <span className="sr-only">
        Sumitomo carbide inserts Bangalore. Sumitomo CBN inserts Karnataka.
        Sumitomo PCD diamond tools India. Sumitomo drills endmills India.
        Sumitomo cutting tools distributor Bangalore. Carbide drills endmills inserts PCD tools supplier.
      </span>
    </section>
  );
}
