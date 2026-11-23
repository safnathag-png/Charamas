"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flame, Check, Box, Clock, Layers, Sparkles, ArrowRight, FileText, Package } from "lucide-react";
import { PRODUCT_DATA } from "@/lib/data";

interface ProductSectionProps {
  onOpenQuote: () => void;
}

export default function ProductSection({ onOpenQuote }: ProductSectionProps) {
  return (
    <section id="product" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06182B] text-xs font-bold text-gold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5 text-gold" />
            <span>Primary Export Focus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            {PRODUCT_DATA.name}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {PRODUCT_DATA.description}
          </p>
        </div>

        {/* 4 Product Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {PRODUCT_DATA.highlights.map((highlight, idx) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-[#06182B] text-white border border-[#16385A] shadow-card flex flex-col justify-between hover:border-gold/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#16A6D6]">
                    Highlight {idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#0A2238] border border-[#16385A] flex items-center justify-center text-gold">
                    {idx === 0 && <Layers className="w-4 h-4" />}
                    {idx === 1 && <Sparkles className="w-4 h-4" />}
                    {idx === 2 && <Flame className="w-4 h-4" />}
                    {idx === 3 && <Clock className="w-4 h-4" />}
                  </div>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-gold mb-1">
                  {highlight.value}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {highlight.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Details Grid: Photography + Specification Table + Packaging Options */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Product Photography Showcase & Packaging Options */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#0A2238] border border-slate-200 shadow-card group">
              <div className="aspect-[4/3] sm:aspect-[4/5] w-full relative overflow-hidden bg-[#06182B]">
                <img
                  src="/images/coconut-shell-charcoal.jpg"
                  alt="Coconut Shell Charcoal Briquettes for Shisha & Hookah"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06182B] via-transparent to-transparent opacity-75" />
                
                {/* Visual Label */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-navy shadow-md">
                  100% Coconut Shell
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#06182B]/90 backdrop-blur-md border border-[#16385A] p-4 rounded-xl text-white">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                    <span>Shisha & Hookah Application</span>
                    <span className="text-gold">Low Ash &lt;2.5%</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Even heat output and consistent burning characteristics designed for shisha sessions.
                  </p>
                </div>
              </div>
            </div>

            {/* Packaging Options Box (Section H) */}
            <div className="p-6 rounded-2xl bg-[#F5F7FA] border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                <Package className="w-4 h-4 text-blue-bright" />
                <span>{PRODUCT_DATA.packaging.heading}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {PRODUCT_DATA.packaging.description}
              </p>

              <div className="space-y-2 pt-1">
                {PRODUCT_DATA.packaging.options.map((opt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                    <div className="w-4 h-4 rounded-full bg-blue-bright/10 text-blue-bright flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <div>
                      <span className="font-bold text-navy">{opt.name}:</span>{" "}
                      <span className="text-slate-600">{opt.note}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-500 italic pt-1">
                * {PRODUCT_DATA.packaging.disclaimer}
              </p>
            </div>
          </div>

          {/* Right: Central Product Specifications Table & Documentation Note */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
              <div className="bg-[#06182B] px-6 py-4 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Technical Specifications
                  </h3>
                  <p className="text-xs text-slate-300">
                    Shisha and hookah charcoal briquette parameters
                  </p>
                </div>
                <span className="text-xs font-bold text-gold bg-[#0A2238] border border-[#16385A] px-3 py-1 rounded-md">
                  Single Product Focus
                </span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {PRODUCT_DATA.specifications.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-b border-slate-100 hover:bg-[#F5F7FA]/70 transition-colors ${
                          idx % 2 === 0 ? "bg-white" : "bg-[#FAFBFC]"
                        }`}
                      >
                        <th className="py-4 px-6 text-xs sm:text-sm font-semibold text-slate-500 w-1/3">
                          {row.label}
                        </th>
                        <td className="py-4 px-6 text-xs sm:text-sm font-bold text-navy">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Simple Documentation Note (Section G requirement) */}
              <div className="p-4 bg-[#F5F7FA] border-t border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                <FileText className="w-4 h-4 text-blue-bright shrink-0 mt-0.5" />
                <span>
                  {PRODUCT_DATA.documentationNote}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="p-6 rounded-2xl bg-[#06182B] text-white border border-[#16385A] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white">
                  Looking for Shisha Charcoal Samples?
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Request pricing or coordinate sample evaluation for your brand or distribution.
                </p>
              </div>

              <button
                onClick={onOpenQuote}
                className="btn-gold px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-gold"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
