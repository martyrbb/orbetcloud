"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import faqData from "@/config/home/faq.json";

const FAQ = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="w-full py-20 relative z-10 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#C8FF00]/10 rounded-full blur-[120px] -z-10 pointer-events-none"
          aria-hidden="true"
        />

        <div className="mb-16 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
            Frequently Asked{" "}
            <span className="bg-linear-to-br from-[#C8FF00] via-[#C8FF00] to-[#C8FF00] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-4 text-zinc-400 text-lg font-medium">
            Got questions about Orbet? Find answers to some of the most common
            questions about our platform, features, and getting started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqData.map((faq, i) => {
            const isOpen = expanded === i;

            return (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative p-px rounded-2xl overflow-hidden border border-[#C8FF00]/10 hover:border-[#C8FF00]/30 transition-colors"
              >
                <div className="bg-black/50 rounded-[23px] overflow-hidden">
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="w-full p-5 flex items-center justify-between text-left group"
                  >
                    <span className="text-zinc-100 font-semibold text-lg group-hover:text-[#C8FF00] transition-colors pr-4">
                      {faq.q}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-zinc-500 shrink-0"
                    >
                      <ChevronDown size={22} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-4 pb-4 text-zinc-400 font-medium leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;