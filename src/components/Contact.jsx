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
      className="flex items-center gap-3 rounded-xl px-5 py-3.5 transition-all duration-200"
      style={{
        background: "rgba(0,0,0,0.03)",
        border: `1px solid ${error ? "rgba(239,68,68,0.6)" : "rgba(0,0,0,0.12)"}`,
      }}
    >
      <Icon
        className="w-5 h-5 flex-shrink-0"
        style={{ color: error ? "#ef4444" : "#EE3F4A" }}
      />
      {children}
    </div>

    <AnimatePresence>
      {error && (
        <motion.p
          className="text-red-500 text-sm pl-1"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

/* ─── shared input className ─────────────────────────────────────────────── */

const inputCls = `
  w-full bg-transparent text-black placeholder-black/60 text-base
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
      <section
        ref={!isModal ? contactRef : null}
        className={isModal ? "" : "py-16 relative overflow-hidden bg-white"}
      >
        <div
          className={`relative z-10 ${
            isModal ? "" : "max-w-2xl mx-auto px-4 sm:px-6"
          }`}
        >
          {!isModal && (
            <SectionHeader
              tag="Get in Touch"
              titleStart="Book Your"
              highlight="Repair"
              description="Same-day service · 90-day warranty · Expert technicians"
            />
          )}

          <motion.form
            onSubmit={handleContactSubmit}
            className={`relative overflow-hidden ${
              isModal ? "" : "rounded-2xl"
            }`}
            style={{
              background: isModal ? "transparent" : "#ffffff",
              border: isModal ? "none" : "1px solid rgba(0,0,0,0.08)",
              padding: isModal ? "0" : "2rem",
              boxShadow: isModal ? "none" : "0 8px 40px rgba(0,0,0,0.08)",
            }}
            initial={!isModal ? { opacity: 0, y: 24 } : {}}
            whileInView={!isModal ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          >
            <div
              className="relative z-10 flex flex-col gap-5"
              style={{ fontFamily: "'Inter',sans-serif" }}
            >
              {/* Row 1 */}
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
                    type="tel"
                    inputMode="numeric"
                    name="contactNumber"
                    value={contact?.contactNumber || ""}
                    onChange={handleContactChange}
                    placeholder="Mobile Number"
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* Email */}
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

              {/* City */}
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

              {/* Product */}
              <Field icon={Wrench} error={errors.product}>
                <div className="relative flex-1 flex items-center">
                  <select
                    name="product"
                    value={selectedProduct}
                    onChange={handleContactChange}
                    className={`${inputCls} appearance-none pr-6 cursor-pointer`}
                  >
                    <option value="">Choose Appliance</option>
                    {products.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-0 w-5 h-5 text-black/40" />
                </div>
              </Field>

              {/* Complaints */}
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
                      <div className="flex items-center gap-2">
                        <CheckSquare className="w-5 h-5 text-[#EE3F4A]" />
                        <span className="text-black/70 text-sm uppercase tracking-[0.18em]">
                          Select Issues
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {complaints.map((c) => {
                          const checked = selectedComplaints.includes(c);

                          return (
                            <motion.label
                              key={c}
                              className="flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer transition-all"
                              style={{
                                background: checked
                                  ? "rgba(182,245,0,0.20)"
                                  : "rgba(0,0,0,0.03)",
                                border: `1px solid ${
                                  checked
                                    ? "rgba(182,245,0,0.7)"
                                    : "rgba(0,0,0,0.10)"
                                }`,
                              }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.97 }}
                            >
                              <div
                                className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                                style={{
                                  background: checked
                                    ? "#EE3F4A"
                                    : "transparent",
                                  border: `1.5px solid ${
                                    checked ? "#EE3F4A" : "rgba(0,0,0,0.25)"
                                  }`,
                                }}
                              >
                                {checked && (
                                  <svg width="10" height="8">
                                    <path
                                      d="M1 4L3.5 7L9 1"
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

                              <span className="text-sm font-medium leading-snug">
                                {c}
                              </span>
                            </motion.label>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={contactSubmitting}
                className="relative w-full overflow-hidden rounded-xl font-bold text-black flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60"
                style={{
                  background: "#EE3F4A",
                  padding: "16px 26px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "1.1rem",
                  letterSpacing: "0.06em",
                }}
              >
                {contactSubmitting ? (
                  <>
                    <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                   
                    <span>SEND REQUEST</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {/* Trust line */}
              <p
                className="text-center text-black/40"
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "0.8rem",
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