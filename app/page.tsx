"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProductSection from "@/sections/ProductSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import ExportProcessSection from "@/sections/ExportProcessSection";
import FAQSection from "@/sections/FAQSection";
import InquirySection from "@/sections/InquirySection";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-navy selection:bg-gold selection:text-navy">
      {/* Navbar with Sticky Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      <main className="flex-grow">
        {/* Section 2: Hero */}
        <HeroSection onOpenQuote={handleOpenQuote} />

        {/* Section 3: About Charamas */}
        <AboutSection onOpenQuote={handleOpenQuote} />

        {/* Section 4: Our Product (Only 1 product: Coconut Shell Charcoal Briquettes for Shisha & Hookah) */}
        <ProductSection onOpenQuote={handleOpenQuote} />

        {/* Section 5: Why Choose Charamas */}
        <WhyChooseUsSection />

        {/* Section 6: Export Process */}
        <ExportProcessSection onOpenQuote={handleOpenQuote} />

        {/* Section 7: FAQ */}
        <FAQSection onOpenQuote={handleOpenQuote} />

        {/* Section 8: Request a Quotation */}
        <InquirySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Quotation Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}
