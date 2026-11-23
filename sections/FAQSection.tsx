"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import { FAQS } from "@/lib/data";

interface FAQSectionProps {
  onOpenQuote: () => void;
}

export default function FAQSection({ onOpenQuote }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06182B] text-xs font-bold text-gold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            <span>Buyer Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Essential information for international shisha charcoal buyers, importers, and brand owners.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-blue-bright bg-[#F5F7FA] shadow-subtle"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-navy flex items-center gap-3">
                    <span className="text-xs font-bold text-gold bg-[#06182B] w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-blue-bright text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-[#06182B] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#0A2238] border border-[#16385A] flex items-center justify-center text-gold shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Have a specific commercial inquiry?
              </p>
              <p className="text-xs text-slate-300">
                Contact our export desk with your destination requirements.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuote}
            className="btn-gold px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider shrink-0"
          >
            Submit an Inquiry
          </button>
        </div>

      </div>
    </section>
  );
}
