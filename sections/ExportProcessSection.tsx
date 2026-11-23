"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { EXPORT_PROCESS } from "@/lib/data";

interface ExportProcessSectionProps {
  onOpenQuote: () => void;
}

export default function ExportProcessSection({ onOpenQuote }: ExportProcessSectionProps) {
  return (
    <section id="export-process" className="py-20 lg:py-28 bg-[#06182B] text-white border-t border-[#16385A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2238] border border-[#16385A] text-xs font-bold text-gold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-gold" />
            <span>Structured Export Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Export Coordination Process
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            From initial product inquiry to final container dispatch, we coordinate every stage with clarity, precision, and adherence to international trade practices.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative mb-14">
          {/* Continuous Connecting Line */}
          <div className="absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-gold via-blue-bright to-[#16385A] z-0 opacity-40" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {EXPORT_PROCESS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                {/* Step Circle Marker */}
                <div className="mb-6 flex items-center justify-start">
                  <div className="w-20 h-20 rounded-2xl bg-[#0A2238] border-2 border-gold flex flex-col items-center justify-center shadow-gold transition-transform hover:scale-105 duration-300">
                    <span className="text-xs uppercase font-semibold text-slate-400">Step</span>
                    <span className="text-xl font-extrabold text-gold">{item.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-[#0A2238] p-5 rounded-xl border border-[#16385A] flex-1 flex flex-col justify-between hover:border-gold/40 transition-colors">
                  <div>
                    <h3 className="text-base font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#16385A]/60 flex items-center text-[11px] text-[#16A6D6] font-medium">
                    <span>Stage {idx + 1} of 5</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-auto text-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative space-y-6 mb-12 pl-4 border-l-2 border-[#16385A]">
          {EXPORT_PROCESS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-6"
            >
              {/* Step indicator node */}
              <div className="absolute -left-[25px] top-1 w-8 h-8 rounded-full bg-[#06182B] border-2 border-gold flex items-center justify-center text-xs font-bold text-gold">
                {item.step}
              </div>

              {/* Card */}
              <div className="bg-[#0A2238] p-5 rounded-xl border border-[#16385A]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#16A6D6]">
                  Step {item.step}
                </span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Footer CTA Banner */}
        <div className="bg-[#0A2238] border border-[#16385A] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Ready to begin Step 01?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Submit your inquiry with destination port and target volume. We respond promptly with full commercial terms.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="btn-gold px-7 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-gold"
          >
            <span>Start Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
