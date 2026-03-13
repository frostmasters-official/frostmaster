"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, Shield, Clock, Star } from "lucide-react";
import Contact from "./Contact";

/* ── tiny helpers ──────────────────────────────────────────────────────── */
const EASE = [0.76, 0, 0.24, 1];
const perks = [
  { icon: Zap, text: "Same-day service available" },
  { icon: Shield, text: "90-day repair warranty" },
  { icon: Clock, text: "Arrive in 60 min or less" },
  { icon: Star, text: "4.9 ★ from 2,400+ customers" },
];

/* ── decorative animated ring ─────────────────────────────────────────── */
const Ring = ({ size, delay, opacity }) => (
  <motion.div
    className="absolute rounded-full border border-[#EE3F4A]/20 pointer-events-none"
    style={{
      width: size,
      height: size,
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
    }}
    initial={{ scale: 0.6, opacity: 0 }}
    animate={{ scale: [0.6, 1.05, 1], opacity: [0, opacity, opacity * 0.6] }}
    transition={{ delay, duration: 1.4, ease: EASE }}
  />
);

/* ══════════════════════════════════════════════════════════════════════════
   BOOKING MODAL
══════════════════════════════════════════════════════════════════════════ */
const BookingModal = ({ isOpen, onClose }) => {
  // Lock scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      <style>{`

      `}</style>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* ── Backdrop ────────────────────────────────────────────────── */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "rgba(4, 8, 20, 0.88)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={onClose}
            />

            {/* ── Modal shell ─────────────────────────────────────────────── */}
            <motion.div
              className="relative w-full z-10 flex overflow-hidden"
              style={{
                maxWidth: "860px",
                maxHeight: "92vh",
                borderRadius: "24px",
                boxShadow:
                  "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
              initial={{ scale: 0.88, opacity: 0, y: 32 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 32 }}
              transition={{ duration: 0.48, ease: EASE }}
            >
              {/* ════════════════════════════════════════════════════════════
                  LEFT PANEL — dark branded
              ════════════════════════════════════════════════════════════ */}
              <div
                className="relative hidden md:flex flex-col justify-between overflow-hidden flex-shrink-0"
                style={{
                  width: "300px",
                  background:
                    "linear-gradient(160deg, #0a0f1e 0%, black 60%, #0d1528 100%)",
                  padding: "36px 28px",
                }}
              >
                {/* Decorative rings */}
                <div
                  className="absolute"
                  style={{ bottom: "-60px", right: "-60px" }}
                >
                  <Ring size={260} delay={0.4} opacity={0.7} />
                  <Ring size={180} delay={0.55} opacity={0.5} />
                  <Ring size={100} delay={0.7} opacity={0.35} />
                </div>

                {/* Lime glow blob */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: "200px",
                    height: "200px",
                    bottom: "-40px",
                    right: "-40px",
                    background:
                      "radial-gradient(circle, rgba(182,245,0,0.12) 0%, transparent 70%)",
                    borderRadius: "50%",
                  }}
                />

                {/* Top: brand mark */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.55, ease: EASE }}
                >
                  {/* Headline */}
                  <div className="mb-8">
                    <div className="overflow-hidden mb-1">
                      <motion.p
                        className="text-[#EE3F4A] uppercase tracking-[0.3em]"
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "0.6rem",
                        }}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ delay: 0.38, duration: 0.5, ease: EASE }}
                      >
                        Book a service
                      </motion.p>
                    </div>
                    {["Fast.", "Reliable.", "Guaranteed."].map((word, i) => (
                      <div key={i} className="overflow-hidden">
                        <motion.h2
                          className="text-white font-black uppercase leading-[0.9]"
                          style={{
                            fontFamily: "'Montserrat',sans-serif",
                            fontSize: "2.4rem",
                          }}
                          initial={{ y: "104%" }}
                          animate={{ y: "0%" }}
                          transition={{
                            delay: 0.42 + i * 0.06,
                            duration: 0.55,
                            ease: EASE,
                          }}
                        >
                          {word}
                        </motion.h2>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Perks list */}
                <motion.div
                  className="flex flex-col gap-3 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                >
                  {perks.map(({ icon: Icon, text }, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.58 + i * 0.07,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(182,245,0,0.1)",
                          border: "1px solid rgba(182,245,0,0.2)",
                        }}
                      >
                        <Icon className="w-3.5 h-3.5 text-[#EE3F4A]" />
                      </div>
                      <span
                        className="text-white/60 leading-snug"
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "0.78rem",
                        }}
                      >
                        {text}
                      </span>
                    </motion.div>
                  ))}

                  {/* Bottom separator line */}
                  <motion.div
                    className="mt-4 h-px bg-gradient-to-r from-[#EE3F4A]/40 via-[#EE3F4A]/10 to-transparent"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
                  />
                  <p
                    className="text-white/25 mt-2"
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "0.52rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    All major appliances covered
                  </p>
                </motion.div>
              </div>

              {/* ════════════════════════════════════════════════════════════
                  RIGHT PANEL — form area
              ════════════════════════════════════════════════════════════ */}
              <div
                className="flex-1 flex flex-col overflow-y-auto"
                style={{ background: "#f7f8fa", minWidth: 0 }}
              >
                {/* Right panel top bar */}
                <div
                  className="flex items-center justify-between flex-shrink-0 px-6 pt-6 pb-4"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div>
                    <motion.h3
                      className="font-bold text-[black] leading-tight"
                      style={{
                        fontFamily: "'Montserrat',sans-serif",
                        fontSize: "1.35rem",
                        letterSpacing: "0.01em",
                      }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.28, duration: 0.45 }}
                    >
                      Schedule Your Repair
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 mt-0.5"
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "0.78rem",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.36, duration: 0.4 }}
                    >
                      Fill in your details — we'll confirm in minutes.
                    </motion.p>
                  </div>

                  {/* Close button — inside right panel top-right */}
                  <motion.button
                    onClick={onClose}
                    aria-label="Close"
                    className="flex items-center justify-center flex-shrink-0 rounded-full border transition-all duration-200 group"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "rgba(0,0,0,0.04)",
                      borderColor: "rgba(0,0,0,0.1)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    whileHover={{
                      scale: 1.1,
                      background: "black",
                      borderColor: "black",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
                  </motion.button>
                </div>

                {/* Mobile-only brand line */}
                <motion.div
                  className="md:hidden flex items-center gap-2 px-6 py-3"
                  style={{ background: "black" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center"
                    style={{ background: "#EE3F4A" }}
                  >
                    <Zap className="w-3 h-3 text-black" fill="black" />
                  </div>
                  <span
                    className="text-[#EE3F4A] uppercase tracking-widest"
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "0.55rem",
                    }}
                  >
                    Same-day · Guaranteed · 4.9★
                  </span>
                </motion.div>

                {/* Form content */}
                <motion.div
                  className="px-6 pt-5 pb-8"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.5, ease: "easeOut" }}
                >
                  <Contact isModal={true} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookingModal;
