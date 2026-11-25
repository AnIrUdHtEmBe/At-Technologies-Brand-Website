'use client';
import { FadeIn } from './animations';
import { Mail, ArrowRight, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn direction="up" className="text-center mb-6 md:mb-8">
          <p className="text-[#4A7FC1] text-xs font-bold tracking-[0.2em] uppercase mb-1.5">
            Contact Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#1A1A2E] leading-[1.15] mb-2.5">
            Ready to Discuss{' '}
            <span className="gradient-text">Your Tooling Needs?</span>
          </h2>
          <p className="text-[#5A6A85] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether you need technical advice or a quotation for Sumitomo cutting tools,
            reach out and we will respond promptly.
          </p>
        </FadeIn>

        {/* Contact Card */}
        <FadeIn direction="up" delay={0.1}>
          <div className="max-w-xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B3A6B] via-[#223D72] to-[#2A5298] p-0.5 shadow-[0_20px_60px_rgba(27,58,107,0.25)]">
              <div className="rounded-[22px] bg-white overflow-hidden">

                {/* Top accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#1B3A6B] via-[#4A7FC1] to-[#1B3A6B]" />

                <div className="p-6 sm:p-8">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#4A7FC1] flex items-center justify-center mb-4 shadow-lg mx-auto">
                    <Mail size={22} className="text-white" />
                  </div>

                  <h3 className="text-[#1A1A2E] font-bold text-lg sm:text-xl text-center mb-1.5">
                    Email Us Directly
                  </h3>
                  <p className="text-[#5A6A85] text-xs sm:text-sm text-center mb-5 leading-relaxed">
                    Send us your tooling requirements or enquiries and we will get back to you as soon as possible.
                  </p>

                  {/* Email Link */}
                  <a
                    href="mailto:arvind.attechnologies@gmail.com"
                    className="group flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-[#F5F7FA] border-2 border-[#DDE3ED] hover:border-[#4A7FC1] hover:bg-[#EEF3FB] transition-all duration-300 mb-4"
                    aria-label="Send email to AT Technologies"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1B3A6B] to-[#4A7FC1] flex items-center justify-center flex-shrink-0">
                        <Mail size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-[#5A6A85] text-xs font-medium mb-0.5">Email Address</div>
                        <div className="text-[#1B3A6B] font-bold text-sm md:text-base break-all">
                          arvind.attechnologies@gmail.com
                        </div>
                      </div>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-[#4A7FC1] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2"
                    />
                  </a>

                  {/* Primary CTA */}
                  <a
                    href="mailto:arvind.attechnologies@gmail.com"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#1B3A6B] to-[#4A7FC1] text-white font-bold rounded-2xl hover:opacity-90 transition-opacity text-sm sm:text-base shadow-[0_4px_20px_rgba(27,58,107,0.35)]"
                  >
                    <Mail size={18} />
                    Send an Enquiry
                  </a>

                  {/* Address */}
                  <div className="mt-5 pt-4 border-t border-[#DDE3ED] flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 text-xs sm:text-sm text-[#5A6A85]">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#4A7FC1] flex-shrink-0" />
                      <span>Abbigere, Bangalore - 560090, Karnataka</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust note */}
            {/* <p className="text-center text-[#5A6A85] text-xs mt-6 leading-relaxed">
              We typically respond within one business day. All enquiries are confidential.
            </p> */}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
