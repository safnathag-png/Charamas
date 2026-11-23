"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Globe, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface InquiryFormState {
  fullName: string;
  companyName: string;
  email: string;
  destinationCountry: string;
  requiredQuantity: string;
  message: string;
}

export default function InquirySection() {
  const [formData, setFormData] = useState<InquiryFormState>({
    fullName: "",
    companyName: "",
    email: "",
    destinationCountry: "",
    requiredQuantity: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormState | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof InquiryFormState, string>> = {};

    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.companyName.trim()) errs.companyName = "Company name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.destinationCountry.trim()) errs.destinationCountry = "Destination country is required";
    if (!formData.requiredQuantity.trim()) errs.requiredQuantity = "Estimated required quantity is required";
    if (!formData.message.trim()) errs.message = "Please include your inquiry details or specifications";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryFormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean packaging for future backend or mailto dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleOpenMailto = () => {
    if (!submittedData) return;
    const subject = encodeURIComponent(`B2B Export Inquiry - ${submittedData.companyName}`);
    const body = encodeURIComponent(
      `Full Name: ${submittedData.fullName}\n` +
      `Company Name: ${submittedData.companyName}\n` +
      `Email: ${submittedData.email}\n` +
      `Destination Country: ${submittedData.destinationCountry}\n` +
      `Required Quantity: ${submittedData.requiredQuantity}\n\n` +
      `Message & Requirements:\n${submittedData.message}\n\n` +
      `Sent via Charamas Export Indonesia Website`
    );
    window.location.href = `mailto:${COMPANY_INFO.emailPlaceholder}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-[#06182B] text-white border-t border-[#16385A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Supporting Text, and Official Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2238] border border-[#16385A] text-xs font-bold text-gold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>Inquiry Desk</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Request Pricing &amp; Samples
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Looking for reliable Indonesian shisha charcoal briquettes? Share your product requirements, target quantity, and destination. Contact Charamas to discuss your inquiry.
            </p>

            {/* Trading Info Box */}
            <div className="pt-4 space-y-4">
              <div className="p-5 rounded-xl bg-[#0A2238] border border-[#16385A] flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#06182B] border border-[#16385A] flex items-center justify-center text-gold shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Inquiry Email</p>
                  <p className="text-sm font-bold text-white mt-0.5">{COMPANY_INFO.emailPlaceholder}</p>
                  <p className="text-[11px] text-slate-400 mt-1">Direct inquiries answered by our export trading desk.</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0A2238] border border-[#16385A] flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#06182B] border border-[#16385A] flex items-center justify-center text-blue-bright shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Origin &amp; Logistics</p>
                  <p className="text-sm font-bold text-white mt-0.5">{COMPANY_INFO.location}</p>
                  <p className="text-[11px] text-slate-400 mt-1">Coordinating shipments with suppliers to international ports.</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0A2238] border border-[#16385A] flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#06182B] border border-[#16385A] flex items-center justify-center text-gold shrink-0 mt-0.5">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Inquiry Support</p>
                  <p className="text-sm font-bold text-white mt-0.5">Commercial Discussion</p>
                  <p className="text-[11px] text-slate-400 mt-1">Product specifications, packaging options, and sample requests.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0A2238] p-6 sm:p-9 rounded-2xl border border-[#16385A] shadow-card">
              
              {submittedData ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Inquiry Packaged Successfully
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-gold font-semibold">{submittedData.fullName}</span> from <span className="text-white font-semibold">{submittedData.companyName}</span>. Your inquiry details have been formatted for our export desk.
                    </p>
                  </div>

                  {/* Summary Details */}
                  <div className="p-4 rounded-xl bg-[#06182B] border border-[#16385A] text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between text-slate-300">
                      <span>Destination Country:</span>
                      <span className="font-bold text-white">{submittedData.destinationCountry}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Required Quantity:</span>
                      <span className="font-bold text-white">{submittedData.requiredQuantity}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Contact Email:</span>
                      <span className="font-bold text-white">{submittedData.email}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleOpenMailto}
                      className="w-full sm:w-auto btn-gold px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <span>Open in Email App</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSubmittedData(null)}
                      className="w-full sm:w-auto px-5 py-3 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-[#06182B] border border-[#16385A]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#16385A] pb-4 mb-2">
                    <h3 className="text-lg font-bold text-white">
                      Commercial Inquiry Details
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Please complete all required fields for accurate quotation preparation.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Alexander Smith"
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#06182B] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold transition-colors ${
                          errors.fullName ? "border-rose-500" : "border-[#16385A]"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Company Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Global Trading Ltd."
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#06182B] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold transition-colors ${
                          errors.companyName ? "border-rose-500" : "border-[#16385A]"
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.companyName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Destination Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alexander@company.com"
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#06182B] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold transition-colors ${
                          errors.email ? "border-rose-500" : "border-[#16385A]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Destination Country / Port <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="destinationCountry"
                        value={formData.destinationCountry}
                        onChange={handleChange}
                        placeholder="e.g. Germany (Hamburg Port)"
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#06182B] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold transition-colors ${
                          errors.destinationCountry ? "border-rose-500" : "border-[#16385A]"
                        }`}
                      />
                      {errors.destinationCountry && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.destinationCountry}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Required Quantity */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Required Quantity (Estimated) <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="requiredQuantity"
                      value={formData.requiredQuantity}
                      onChange={handleChange}
                      placeholder="e.g. 1x 20ft FCL (18 Tons) or Sample Box"
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#06182B] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold transition-colors ${
                        errors.requiredQuantity ? "border-rose-500" : "border-[#16385A]"
                      }`}
                    />
                    {errors.requiredQuantity && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.requiredQuantity}
                      </p>
                    )}
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message & Requirements <span className="text-gold">*</span>
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify your packaging preference, target dimensions, delivery timeframe, or sample request..."
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#06182B] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold transition-colors resize-y ${
                        errors.message ? "border-rose-500" : "border-[#16385A]"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gold py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      Inquiries are processed directly by our export trading desk.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
