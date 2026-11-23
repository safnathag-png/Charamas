"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ship, ShieldCheck, CheckCircle2, ArrowRight, MessageSquare, Anchor, Building2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export default function AboutSection({ onOpenQuote }: AboutSectionProps) {
  const commitments = [
    {
      title: "Indonesian Coconut Shell Briquettes",
      desc: "Supplying 100% coconut shell briquettes intended specifically for shisha and hookah applications.",
    },
    {
      title: "Quality-Focused Product Sourcing",
      desc: "Product requirements and specifications are coordinated with suppliers to meet buyer needs.",
    },
    {
      title: "Clear Business Communication",
      desc: "Direct, responsive, and professional communication to discuss product inquiries and commercial details.",
    },
    {
      title: "Export Coordination and Support",
      desc: "Support for commercial documentation, order arrangements, and shipment coordination.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F7FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Maritime Trade / Cargo Port Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-200 bg-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/images/john-simmons.jpg"
                  alt="International Cargo Ship and Container Port"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06182B]/80 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-gold" />
                    <span className="text-xs font-semibold tracking-wide">
                      Indonesian Maritime Logistics & Export
                    </span>
                  </div>
                  <span className="text-xs bg-[#06182B]/90 border border-slate-700 px-2.5 py-1 rounded-md text-slate-300">
                    Export Trading
                  </span>
                </div>
              </div>

              {/* Inset Second Perspective Photo */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-36 rounded-xl overflow-hidden shadow-2xl border-2 border-white">
                <img
                  src="/images/cargo-ship.jpg"
                  alt="Container Vessel at Sea"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Note box */}
            <div className="mt-8 sm:mt-10 p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
              <Building2 className="w-5 h-5 text-blue-bright shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-navy">Export Trading Business:</span> We connect international shisha charcoal buyers with suitable Indonesian product suppliers, coordinating specifications, orders, and export documentation.
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-300 text-xs font-bold text-blue-bright uppercase tracking-wider shadow-sm">
              <Ship className="w-3.5 h-3.5 text-gold" />
              <span>About Charamas</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Your Trusted Shisha Charcoal Export Partner from Indonesia
            </h2>

            {/* Official Description */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Charamas Export Indonesia specializes in supplying Indonesian coconut shell charcoal briquettes for international shisha and hookah markets. We focus on buyer requirements, product specifications, supplier coordination, and export documentation to support international business partnerships.
            </p>

            {/* Commitments List */}
            <div className="pt-2 space-y-3.5">
              {commitments.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-bright/50 transition-colors shadow-subtle"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#06182B] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="btn-gold px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-sm"
              >
                <span>Discuss Your Export Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
