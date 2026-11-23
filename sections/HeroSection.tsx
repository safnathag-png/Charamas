"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Globe } from "lucide-react";

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  const scrollToProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#product");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 bg-[#06182B] text-white overflow-hidden"
    >
      {/* Background: Cargo Vessel & Container Port with Dark Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/john-simmons.jpg"
          alt="International Container Vessel and Export Port"
          className="w-full h-full object-cover object-center filter brightness-50"
        />
        {/* Dark Navy Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182B] via-[#06182B]/90 to-[#06182B]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06182B] via-transparent to-[#06182B]/70" />
      </div>

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#087EAD]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#D9B65C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call-To-Action */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A2238]/90 border border-[#087EAD]/40 text-xs font-semibold text-[#16A6D6] tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>INDONESIAN EXPORT TRADING BUSINESS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Premium Indonesian <br className="hidden sm:inline" />
              <span className="text-gold-gradient">Shisha Charcoal</span> Briquettes
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg font-semibold text-[#16A6D6] tracking-wide">
              100% Coconut Shell Charcoal Briquettes for Shisha & Hookah
            </p>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-slate-200 max-w-xl leading-relaxed">
              Charamas Export Indonesia focuses on supplying Indonesian coconut shell charcoal briquettes for international shisha and hookah markets. We connect quality-focused sourcing with professional export coordination.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="btn-gold px-7 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#product"
                onClick={scrollToProduct}
                className="btn-outline-light px-7 py-3.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span>Explore Our Product</span>
              </a>
            </div>

            {/* Trust Highlights Row */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>100% Indonesian Coconut Shell</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Shisha & Hookah Specialization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Export Sourcing & Coordination</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Frosted Glassmorphism Standards & Metrics Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glassmorphism Card */}
              <div className="rounded-3xl bg-[#06182B]/60 backdrop-blur-xl border border-white/15 p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">
                
                {/* Header text */}
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide">
                  Export-grade standards, transparent B2B
                </h3>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-8 sm:gap-y-10">
                  
                  {/* Item 1 */}
                  <div className="space-y-1.5">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#16A6D6] tracking-tight">
                      99.5%
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      Low Ash (Charcoal)
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="space-y-1.5">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#16A6D6] tracking-tight">
                      ≥5%
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      High Carbon
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="space-y-1.5">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#16A6D6] tracking-tight">
                      100%
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      Pure Coconut Shell
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div className="space-y-1.5">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#16A6D6] tracking-tight">
                      2.5 Hours
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      Burning Time
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
