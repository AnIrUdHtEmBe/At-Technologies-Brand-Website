'use client';
import { FadeIn, StaggerContainer, staggerChild } from './animations';
import { motion } from 'framer-motion';
import { Shield, Star, Users, Zap } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'Authorised Distributor',
    description: 'Officially authorised by Sumitomo Electric Industries, Japan to distribute genuine tooling solutions across Bangalore and Mysore, India.',
  },
  {
    icon: Star,
    title: 'Expert Product Knowledge',
    description: 'Deep technical expertise across Carbide, CBN and Diamond cutting tools for precision machining and industrial applications.',
  },
  {
    icon: Zap,
    title: 'Application Engineering',
    description: 'We help you select the right tool for your specific machining challenges, from roughing to finishing operations.',
  },
  {
    icon: Users,
    title: 'Trusted by Industry',
    description: 'Serving manufacturing companies across Bangalore and Mysore, India with genuine Sumitomo products and responsive support.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <FadeIn direction="up" className="text-center mb-6 md:mb-8">
          <p className="text-[#4A7FC1] text-xs font-bold tracking-[0.2em] uppercase mb-1.5">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#1A1A2E] leading-[1.15] mb-2.5">
            Your Trusted Sumitomo
            <span className="gradient-text block">Cutting Tools Partner</span>
          </h2>
          <p className="text-[#5A6A85] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            AT Technologies is an authorised distributor of Sumitomo Electric cutting tools,
            based in Bangalore and Mysore. We supply precision carbide, CBN and diamond tooling solutions
            to manufacturing.
          </p>
        </FadeIn>

        {/* Stats row */}
        <FadeIn direction="up" delay={0.1} className="mb-4 md:mb-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { value: '100%', label: 'Genuine Products' },
              { value: 'Sumitomo', label: 'Performance Cutting Tools' },
              { value: 'Global Support', label: 'Global Solutions' },
              { value: '100%', label: 'Tooling Solution Providers' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#F5F7FA] to-white border border-[#DDE3ED] hover:border-[#4A7FC1]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="text-xl md:text-2xl font-black text-[#1B3A6B] mb-0.5">{stat.value}</div>
                <div className="text-[#5A6A85] text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Trust points grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4" staggerDelay={0.08}>
          {trustPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={staggerChild}
              className="flex gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#F5F7FA] to-white border border-[#DDE3ED] hover:border-[#4A7FC1]/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B3A6B] to-[#4A7FC1] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <point.icon size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A2E] text-sm sm:text-base mb-1">{point.title}</h3>
                <p className="text-[#5A6A85] text-xs sm:text-sm leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Sumitomo partnership callout */}
        <FadeIn direction="up" delay={0.15} className="mt-4 md:mt-5">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1B3A6B] to-[#2A5298] p-5 md:p-6 text-white">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="text-[#93B8E3] text-xs font-bold tracking-[0.2em] uppercase mb-1">
                  Official Partnership
                </p>
                <h3 className="text-lg md:text-2xl font-bold mb-1">
                  Sumitomo Cutting Tools
                </h3>
                <p className="text-blue-200 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Sumitomo Electric is a globally recognised Japanese manufacturer of
                  precision cutting tools including carbide, CBN (Cubic Boron Nitride)
                  and PCD (Poly-Crystalline Diamond) tooling. As their authorised
                  distributor, we bring world-class tooling to your doorstep.
                </p>
              </div>
              {/* <a
                href="mailto:arvind.attechnologies@gmail.com"
                className="flex-shrink-0 px-6 py-3 bg-white text-[#1B3A6B] font-bold rounded-xl hover:bg-[#F5F7FA] transition-colors text-sm"
              >
                Enquire Now
              </a> */}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Hidden SEO */}
      <span className="sr-only">
        Authorised Sumitomo distributor Bangalore. Sumitomo Electric cutting tools Karnataka.
        Sumitomo carbide tools dealer India. Sumitomo drills endmills inserts PCD tools supplier.
      </span>
    </section>
  );
}
