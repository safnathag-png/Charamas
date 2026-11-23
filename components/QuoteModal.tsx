"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    destinationCountry: "",
    requiredQuantity: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.companyName.trim()) errs.companyName = "Company name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Valid email is required";
    }
    if (!formData.destinationCountry.trim()) errs.destinationCountry = "Destination country is required";
    if (!formData.requiredQuantity.trim()) errs.requiredQuantity = "Quantity is required";
    if (!formData.message.trim()) errs.message = "Message details are required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`B2B Export Inquiry - ${formData.companyName}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Company Name: ${formData.companyName}\n` +
      `Email: ${formData.email}\n` +
      `Destination Country: ${formData.destinationCountry}\n` +
      `Required Quantity: ${formData.requiredQuantity}\n\n` +
      `Message & Requirements:\n${formData.message}\n\n` +
      `Sent via Charamas Export Indonesia Website`
    );
    window.location.href = `mailto:${COMPANY_INFO.emailPlaceholder}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#06182B] border border-[#16385A] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A2238] border-b border-[#16385A]">
          <div>
            <h3 className="text-base font-bold text-white">
              Request a Quotation
            </h3>
            <p className="text-xs text-slate-300">
              Charamas Export Indonesia · Direct Export Desk
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#16385A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-white">
                Inquiry Details Packaged
              </h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.fullName}. Your commercial specifications have been recorded for our export desk.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleOpenMailto}
                  className="btn-gold px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <span>Open in Email App</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg text-xs font-medium text-slate-300 bg-[#0A2238] border border-[#16385A]"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2 rounded-lg bg-[#0A2238] border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold ${
                      errors.fullName ? "border-rose-500" : "border-[#16385A]"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.fullName && (
                    <p className="text-[10px] text-rose-400 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2 rounded-lg bg-[#0A2238] border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold ${
                      errors.companyName ? "border-rose-500" : "border-[#16385A]"
                    }`}
                    placeholder="Your company"
                  />
                  {errors.companyName && (
                    <p className="text-[10px] text-rose-400 mt-1">{errors.companyName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2 rounded-lg bg-[#0A2238] border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold ${
                      errors.email ? "border-rose-500" : "border-[#16385A]"
                    }`}
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <p className="text-[10px] text-rose-400 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Destination Country / Port *
                  </label>
                  <input
                    type="text"
                    name="destinationCountry"
                    value={formData.destinationCountry}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2 rounded-lg bg-[#0A2238] border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold ${
                      errors.destinationCountry ? "border-rose-500" : "border-[#16385A]"
                    }`}
                    placeholder="e.g. UAE / Germany"
                  />
                  {errors.destinationCountry && (
                    <p className="text-[10px] text-rose-400 mt-1">{errors.destinationCountry}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Required Quantity (Estimated) *
                </label>
                <input
                  type="text"
                  name="requiredQuantity"
                  value={formData.requiredQuantity}
                  onChange={handleChange}
                  className={`w-full px-3.5 py-2 rounded-lg bg-[#0A2238] border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold ${
                    errors.requiredQuantity ? "border-rose-500" : "border-[#16385A]"
                  }`}
                  placeholder="e.g. 1x 20ft FCL or Sample order"
                />
                {errors.requiredQuantity && (
                  <p className="text-[10px] text-rose-400 mt-1">{errors.requiredQuantity}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Message / Details *
                </label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-3.5 py-2 rounded-lg bg-[#0A2238] border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold ${
                    errors.message ? "border-rose-500" : "border-[#16385A]"
                  }`}
                  placeholder="Specify packaging type, dimensions, or specific requirements..."
                />
                {errors.message && (
                  <p className="text-[10px] text-rose-400 mt-1">{errors.message}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gold py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
