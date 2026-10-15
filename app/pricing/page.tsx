"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Zap } from "lucide-react";
import pricingConfig from "@/config/bot-hosting/plans.json";

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const config = pricingConfig;

  return (
    <div className="min-h-screen bg-black text-zinc-100 pb-20">
      <section className="relative w-full flex flex-col items-center justify-center pt-40 pb-20 px-4">
        <div className="text-center w-full max-w-4xl mx-auto flex flex-col items-center">
          <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-xs md:text-sm font-bold px-4 py-1.5 rounded-full border border-[#C8FF00]/25 text-[#C8FF00] bg-[#C8FF00]/5 tracking-wide mb-4 inline-flex items-center gap-2">
            <Zap size={14} /> Room to grow
          </motion.span>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Simple pricing<br /><span className="text-zinc-400">for your business.</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-zinc-400 mt-6 text-sm md:text-lg max-w-2xl mx-auto">
            {config.description}
          </motion.p>
          <div role="group" aria-label="Billing frequency" className="mt-9 inline-flex flex-wrap justify-center gap-1 rounded-2xl border border-zinc-800 bg-zinc-950 p-1.5">
            <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)}
              className={`rounded-xl px-5 py-3 text-sm font-bold transition-colors ${!annual ? "bg-zinc-100 text-black" : "text-zinc-400 hover:text-white"}`}>Monthly</button>
            <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)}
              className={`rounded-xl px-5 py-3 text-sm font-bold transition-colors flex items-center gap-3 ${annual ? "bg-zinc-100 text-black" : "text-zinc-400 hover:text-white"}`}>
              Annual <span className="rounded-full bg-[#C8FF00] text-black px-2.5 py-1 text-xs">3 months free</span>
            </button>
          </div>
          <p className="text-zinc-500 text-xs mt-4">Pay yearly and save 25% on Growth and Pro.</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.plans.map((plan, i) => {
            const total = plan.monthlyPrice === null ? null : plan.monthlyPrice * 9;
            const price = plan.monthlyPrice === null ? null : annual ? plan.monthlyPrice * 9 / 12 : plan.monthlyPrice;
            return (
              <motion.article key={plan.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -4 }}
                className={`relative p-0.5 rounded-3xl overflow-hidden ${plan.featured ? "bg-zinc-500" : "bg-zinc-800"}`}>
                <div className="relative bg-black h-full p-6 rounded-[23px] flex flex-col gap-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 min-h-7">
                      <h2 className="font-bold text-xl text-white">{plan.name}</h2>
                      {plan.featured && <span className="rounded-full border border-[#C8FF00]/25 bg-[#C8FF00]/5 text-[#C8FF00] text-xs px-3 py-1 font-bold">The complete package</span>}
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mt-3 min-h-12">{plan.description}</p>
                    <div className="mt-6" aria-live="polite" aria-atomic="true">
                      {price === null ? <p className="text-4xl font-extrabold text-white">Let’s talk.</p> :
                        <p className="text-5xl font-extrabold text-white tracking-tight">£{Number.isInteger(price) ? price : price.toFixed(2)}<span className="text-sm text-zinc-500 font-medium tracking-normal"> / month</span></p>}
                      <p className="text-zinc-400 text-xs mt-3 min-h-10">{price === null ? "Custom pricing for your requirements." : annual ? `£${total} billed annually. Save £${plan.monthlyPrice! * 3} a year.` : "Billed monthly."}</p>
                    </div>
                  </div>
                  <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-5 grow">
                    <p className="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-5">{plan.featureHeading}</p>
                    <ul className="space-y-4">
                      {plan.features.map(feature => <li key={feature} className="flex items-start gap-3"><Check size={17} className="shrink-0 mt-0.5 text-zinc-400" /><span className="text-sm font-medium text-zinc-300">{feature}</span></li>)}
                    </ul>
                  </div>
                  <a href={plan.monthlyPrice === null ? "/contact" : `https://orbet.co.uk/signup/?plan=${plan.name.toLowerCase()}&billing=${annual ? "annual" : "monthly"}`} className={`flex items-center justify-between rounded-xl px-5 py-4 text-sm font-bold transition-colors ${plan.featured ? "bg-[#C8FF00] text-black hover:bg-[#d7ff4d]" : "border border-zinc-700 text-white hover:bg-zinc-900"}`}>
                    {plan.monthlyPrice === null ? "Discuss Enterprise" : `Explore ${plan.name}`}<ArrowUpRight size={18} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
        <p className="text-zinc-500 text-xs text-center mt-6 leading-relaxed">Annual subscriptions are paid upfront. The monthly figure shown is the annual total divided by 12. Payment processing and transaction fees are separate.</p>
      </main>

      <section id="plan-enquiry" className="max-w-7xl mx-auto px-6 lg:px-10 scroll-mt-32">
        <div className="border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#C8FF00]">Find your fit</p>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">Good things start with a conversation.</h2>
          <p className="text-zinc-400 mt-5 max-w-2xl leading-relaxed">From your first online booking to a more connected operation, choose the tools that fit the way you work.</p>
          <p className="text-zinc-500 mt-4 max-w-2xl text-sm leading-relaxed">Choose Growth or Pro to start signing up, or contact us to discuss Enterprise. Full pricing terms, tax treatment and applicable payment fees will be confirmed before you subscribe.</p>
        </div>
      </section>
    </div>
  );
}
