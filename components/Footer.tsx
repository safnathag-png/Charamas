"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, ArrowUp, Globe, ShieldCheck } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS, PRODUCT_DATA } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#030d17] text-slate-300 border-t border-[#0A2238] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#0A2238]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Charamas Export Indonesia"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md pt-2">
              {COMPANY_INFO.footerDesc}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06182B] border border-[#16385A] text-gold font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Indonesian Export Trading</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06182B] border border-[#16385A] text-[#16A6D6] font-medium">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Ocean Logistics</span>
              </span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-gold transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Product Col */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2.5">
              Primary Export Line
            </h4>
            
            <div className="p-4 rounded-xl bg-[#06182B] border border-[#16385A]">
              <p className="text-sm font-bold text-white">{PRODUCT_DATA.name}</p>
              <p className="text-xs text-slate-400 mt-1">100% Coconut Shell · Low Ash &lt;2.5% · Carbon ≥5%</p>
              <div className="mt-3 pt-3 border-t border-[#16385A] flex items-center justify-between text-[11px] text-slate-400">
                <span>Origin: Indonesia</span>
                <span className="text-gold">Burn: Up to 2.5h</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Inquiries: {COMPANY_INFO.emailPlaceholder}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Trade Operations: {COMPANY_INFO.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>{COMPANY_INFO.copyright}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Indonesian export trading business dedicated to coconut shell charcoal briquettes for international shisha and hookah markets.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#06182B] border border-[#16385A] text-slate-400 hover:text-gold hover:border-gold transition-colors"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
