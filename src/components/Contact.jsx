"use client";

import { myContext } from "@/context/myContext";
import React, { memo, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Wrench,
  ChevronDown,
  CheckSquare,
  Send,
  Zap,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

/* ─── complaints map ─────────────────────────────────────────────────────── */
const complaintsOptions = {
  "Washing Machine": [
    "Spinning Issue",
    "Water Leakage",
    "Draining Issue",
    "Noise Issue",
    "Others",
  ],
  Dishwasher: [
    "Not Cleaning Properly",
    "Water Leakage",
    "Starting Issue",
    "Bad Smell",
    "Others",
  ],
  Fridge: [
    "Cooling Problem",
    "Over Freezing",
    "Water Leakage",
    "Door Issue",
    "Others",
  ],
  AC: [
    "Cooling Issue",
    "Water Leakage",
    "Noise Issue",
    "Not Turning On",
    "Others",
  ],
  Microwave: [
    "Heating Problem",
    "Turntable Not Working",
    "Door Issue",
    "Noise Issue",
    "Others",
  ],
};

const products = Object.keys(complaintsOptions);
const EASE = [0.76, 0, 0.24, 1];

/* ─── styled field wrapper ───────────────────────────────────────────────── */
const Field = ({ icon: Icon, error, children }) => (
  <div className="flex flex-col gap-1">
    <div
      className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200"
      style={{
        background: "rgba(0,0,0,0.03)",
        border: `1px solid ${error ? "rgba(239,68,68,0.6)" : "rgba(0,0,0,0.12)"}`,
      }}
    >
      <Icon
        className="w-4 h-4 flex-shrink-0"
        style={{ color: error ? "#ef4444" : "#EE3F4A" }}
      />
      {children}
    </div>
    <AnimatePresence>
      {error && (
        <motion.p
          className="text-red-500 text-xs pl-1"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.22 }}
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

/* ─── shared input className ─────────────────────────────────────────────── */
const inputCls = `
  w-full bg-transparent text-black placeholder-black/40 text-sm
  focus:outline-none
`;

const Contact = ({ isModal = false }) => {
  const {
    contact,
    contactRef,
    errors,
    handleContactSubmit,
    handleContactChange,
    handleComplaintToggle,
    contactSubmitting,
  } = useContext(myContext);

  const selectedProduct = contact?.product || "";
  const selectedComplaints = contact?.complaint || [];
  const complaints = selectedProduct ? complaintsOptions[selectedProduct] : [];

  return (
    <>
      <style>{`

        .contact-select option 
        .contact-scroll::-webkit-scrollbar { width: 4px; }
        .contact-scroll::-webkit-scrollbar-track { background: transparent; }
        .contact-scroll::-webkit-scrollbar-thumb { background: rgba(182,245,0,0.25); border-radius: 99px; }
      `}</style>

      <section
        ref={!isModal ? contactRef : null}
        className={isModal ? "" : "py-16 relative overflow-hidden bg-white"}
        style={{}}
      >
        {/* ── standalone page: decorative BG elements ── */}
        {!isModal && (
          <>
            <div
              className="pointer-events-none absolute top-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full"
            />
            <div
              className="pointer-events-none absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(182,245,0,0.10) 0%, transparent 70%)",
              }}
            />
          </>
        )}

        <div
          className={`relative z-10 ${isModal ? "" : "max-w-2xl mx-auto px-4 sm:px-6"}`}
        >
          {/* ── Section header (standalone only) ── */}
          {!isModal && (
            <SectionHeader
              tag="Get in Touch"
              titleStart="Book Your"
              highlight="Repair"
              description="Same-day service · 90-day warranty · Expert technicians"
            />
          )}

          {/* ════════════════════════════════════════════════════════════════
              FORM CARD
          ════════════════════════════════════════════════════════════════ */}
          <motion.form
            onSubmit={handleContactSubmit}
            className={`contact-scroll relative overflow-hidden ${isModal ? "" : "rounded-2xl"}`}
            style={{
              background: isModal ? "transparent" : "#ffffff",
              border: isModal ? "none" : "1px solid rgba(0,0,0,0.08)",
              backdropFilter: "none",
              padding: isModal ? "0" : "2rem",
              boxShadow: isModal ? "none" : "0 8px 40px rgba(0,0,0,0.08)",
            }}
            initial={!isModal ? { opacity: 0, y: 24 } : {}}
            whileInView={!isModal ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          >
            {/* Lime corner accent */}
            {!isModal && (
              <div
                className="pointer-events-none absolute top-0 right-0 w-32 h-32"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(182,245,0,0.25) 0%, transparent 70%)",
                }}
              />
            )}

            <div
              className="relative z-10 flex flex-col gap-4"
              style={{ fontFamily: "'Inter',sans-serif" }}
            >
              {/* Row 1: Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field icon={User} error={errors.contactName}>
                  <input
                    type="text"
                    name="contactName"
                    value={contact?.contactName || ""}
                    onChange={handleContactChange}
                    placeholder="Full Name"
                    className={inputCls}
                  />
                </Field>

                <Field icon={Phone} error={errors.contactNumber}>
                  <input
                    type="number"
                    name="contactNumber"
                    value={contact?.contactNumber || ""}
                    onChange={handleContactChange}
                    placeholder="Mobile Number"
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* Row 2: Email */}
              <Field icon={Mail} error={errors.contactEmail}>
                <input
                  type="email"
                  name="contactEmail"
                  value={contact?.contactEmail || ""}
                  onChange={handleContactChange}
                  placeholder="Email Address (optional)"
                  className={inputCls}
                />
              </Field>

              {/* Row 3: City */}
              <Field icon={MapPin} error={errors.contactCity}>
                <input
                  type="text"
                  name="contactCity"
                  value={contact?.contactCity || ""}
                  onChange={handleContactChange}
                  placeholder="Your City"
                  className={inputCls}
                />
              </Field>

              {/* Row 4: Product select */}
              <Field icon={Wrench} error={errors.product}>
                <div className="relative flex-1 flex items-center">
                  <select
                    name="product"
                    value={selectedProduct}
                    onChange={handleContactChange}
                    className={`${inputCls} contact-select appearance-none pr-6 cursor-pointer`}
                  >
                    <option value="">Choose Appliance</option>
                    {products.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-0 w-4 h-4 text-black/40" />
                </div>
              </Field>

              {/* Row 5: Complaints — animated reveal */}
              <AnimatePresence>
                {selectedProduct && (
                  <motion.div
                    key={selectedProduct}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.38, ease: EASE }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="flex flex-col gap-3">
                      {/* Label */}
                      <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-[#EE3F4A]" />
                        <span
                          className="text-black/60 text-xs uppercase tracking-[0.2em]"
                          style={{ fontFamily: "'Inter',sans-serif" }}
                        >
                          Select Issues
                        </span>
                      </div>

                      {/* Chip grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {complaints.map((c) => {
                          const checked = selectedComplaints.includes(c);
                          return (
                            <motion.label
                              key={c}
                              className="flex items-center gap-2 rounded-xl px-3 py-2.5 cursor-pointer transition-all duration-200 select-none"
                              style={{
                                background: checked
                                  ? "rgba(182,245,0,0.20)"
                                  : "rgba(0,0,0,0.03)",
                                border: `1px solid ${checked ? "rgba(182,245,0,0.7)" : "rgba(0,0,0,0.10)"}`,
                              }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.97 }}
                            >
                              {/* Custom checkbox */}
                              <div
                                className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200"
                                style={{
                                  background: checked
                                    ? "#EE3F4A"
                                    : "transparent",
                                  border: `1.5px solid ${checked ? "#EE3F4A" : "rgba(0,0,0,0.25)"}`,
                                }}
                              >
                                {checked && (
                                  <svg
                                    width="9"
                                    height="7"
                                    viewBox="0 0 9 7"
                                    fill="none"
                                  >
                                    <path
                                      d="M1 3.5L3.2 6L8 1"
                                      stroke="#000"
                                      strokeWidth="1.6"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                )}
                              </div>
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => handleComplaintToggle(c)}
                                className="sr-only"
                              />
                              <span
                                className="text-xs leading-snug"
                                style={{
                                  color: checked
                                    ? "#5a8a00"
                                    : "rgba(0,0,0,0.65)",
                                  fontFamily: "'Inter',sans-serif",
                                }}
                              >
                                {c}
                              </span>
                            </motion.label>
                          );
                        })}
                      </div>

                      <AnimatePresence>
                        {errors.complaint && (
                          <motion.p
                            className="text-red-400 text-xs pl-1"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                          >
                            {errors.complaint}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={contactSubmitting}
                className="relative w-full overflow-hidden rounded-xl font-bold text-black flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: "#EE3F4A",
                  padding: "14px 24px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "1rem",
                  letterSpacing: "0.06em",
                }}
                whileHover={
                  !contactSubmitting
                    ? {
                        scale: 1.015,
                        boxShadow: "0 0 28px rgba(182,245,0,0.4)",
                      }
                    : {}
                }
                whileTap={!contactSubmitting ? { scale: 0.98 } : {}}
              >
                {/* Shine sweep */}
                <motion.span
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%)",
                  }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "160%" }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                />

                {contactSubmitting ? (
                  <>
                    <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" fill="black" />
                    <span>SEND SERVICE REQUEST</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              {/* Trust micro-line */}
              <p
                className="text-center text-black/35"
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "0.52rem",
                  letterSpacing: "0.15em",
                }}
              >
                SAME-DAY RESPONSE · 90-DAY WARRANTY · NO HIDDEN FEES
              </p>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default memo(Contact);
