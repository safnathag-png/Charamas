"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trees, ShieldCheck, SlidersHorizontal, Ship, CheckCircle2 } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";

export default function WhyChooseUsSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Trees":
        return <Trees className="w-6 h-6 text-gold" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-gold" />;
      case "SlidersHorizontal":
        return <SlidersHorizontal className="w-6 h-6 text-gold" />;
      case "Ship":
        return <Ship className="w-6 h-6 text-gold" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F5F7FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-300 text-xs font-bold text-blue-bright uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            <span>Why Choose Charamas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Reliable Shisha Charcoal Export Solutions
          </h2>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We assist international buyers and distributors with focused sourcing and professional coordination for Indonesian shisha charcoal briquettes.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-card hover:shadow-xl hover:border-blue-bright/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#06182B] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  {getIcon(card.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-navy mb-3 leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-bright">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span>Export Advantage</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
