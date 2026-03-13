"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Users, Zap } from "lucide-react";
import all from "../../public/service/all.webp";
import Extra from "./Extra";

const EASE = [0.76, 0, 0.24, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: EASE },
});

/* ─── data ───────────────────────────────────────────────────────────────── */
const stats = [
  { value: "4+", label: "Years of Experience" },
  { value: "5K+", label: "Happy Customers" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "1 Yr", label: "Repair Warranty" },
];

const features = [
  "Certified & Skilled Technicians",
  "100% Genuine Spare Parts",
  "Same-Day Doorstep Service",
  "1 Year Warranty on Repairs",
];

const AboutUs = () => {
  return (
    <>
      <style>{`

      `}</style>
      <section
        id="about"
        className="relative overflow-hidden py-20 lg:py-28 bg-[#f7f8fa]"
      >
        {/* soft radial accents */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px]"
          style={{
            background:
              "radial-gradient(circle at top right,rgba(182,245,0,0.10) 0%,transparent 65%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px]"
          style={{
            background:
              "radial-gradient(circle at bottom left,rgba(17,27,52,0.05) 0%,transparent 65%)",
          }}
        />

        <div className="relative z-10 px-6 lg:px-12">
          {/* ── Top headline ── */}
          <motion.div className="text-center mb-14" {...fadeUp(0)}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#EE3F4A]" />
              <span
                className="text-[#EE3F4A] uppercase tracking-[0.35em]"
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "0.62rem",
                }}
              >
                Who We Are
              </span>
              <span className="h-px w-10 bg-[#EE3F4A]" />
            </div>
            <h2
              className="text-[black] font-black capitalize leading-[0.9] py-10 text-center"
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "clamp(2rem,5vw,3rem)",
              }}
            >
              Trusted Appliance
              <br />
              <span style={{ color: "#EE3F4A", WebkitTextStroke: "2px black" }}>
                Repair Experts
              </span>
            </h2>
          </motion.div>

          {/* ── 3-column grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-8 items-start">
            {/* ── COL 1: Left — tagline + body + CTA + partners ── */}
            <motion.div
              className="flex flex-col gap-6 lg:pt-4"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE }}
            >
              <div>
                <h3
                  className="text-[black] font-black leading-tight mb-3"
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: "clamp(1.4rem,2.5vw,1.75rem)",
                  }}
                >
                  Your Trusted Partner in
                  <br />
                  Appliance Repair
                </h3>
                <p
                  className="text-[black]/55 leading-relaxed"
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                  }}
                >
                  At{" "}
                  <strong className="text-[black] font-semibold">
                    Frost Masters
                  </strong>
                  , we believe appliance repair should be fast, transparent, and
                  stress-free. With{" "}
                  <strong className="text-[black] font-semibold">
                    4+ years of expertise
                  </strong>
                  , we restore your home's comfort quickly — serving{" "}
                  <strong className="text-[black] font-semibold">
                    Eranakulam &amp; Eranakulam
                  </strong>
                  .
                </p>
              </div>

              {/* About CTA */}
              <motion.a
                href="#contact"
                className="group relative overflow-hidden inline-flex items-center gap-2 self-start rounded-full font-bold transition-all duration-300"
                style={{
                  background: "black",
                  color: "white",
                  padding: "11px 28px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "0.9rem",
                  letterSpacing: "0.06em",
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 bg-[#EE3F4A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[black] flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Book a Repair
                </span>
              </motion.a>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {stats.map(({ value, label }, i) => (
                  <motion.div
                    key={label}
                    className="rounded-xl p-4 group transition-all duration-300"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(17,27,52,0.08)",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                    whileHover={{ borderColor: "#EE3F4A", y: -2 }}
                  >
                    <p
                      className="font-black leading-none mb-0.5"
                      style={{
                        fontFamily: "'Montserrat',sans-serif",
                        fontSize: "1.8rem",
                        color: "#EE3F4A",
                      }}
                    >
                      {value}
                    </p>
                    <p
                      className="text-[black]/45 leading-tight"
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "0.68rem",
                      }}
                    >
                      {label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Partner logos row */}
              <motion.div
                className="pt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p
                  className="text-[black]/35 uppercase tracking-[0.2em] mb-3"
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "0.55rem",
                  }}
                >
                  Brands We Service
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Samsung", "LG", "Whirlpool", "Bosch", "IFB"].map(
                    (brand) => (
                      <span
                        key={brand}
                        className="px-3 py-1 rounded-full text-[black]/50 transition-all duration-200 hover:text-[black] hover:border-[#EE3F4A]"
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "0.6rem",
                          border: "1px solid rgba(17,27,52,0.12)",
                          background: "#fff",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {brand}
                      </span>
                    ),
                  )}
                </div>
              </motion.div>
            </motion.div>

            {/* ── COL 2: Centre — tall image ── */}
            <motion.div
              className="relative mx-auto w-full lg:w-[320px] xl:w-[360px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            >
              {/* Lime frame offset */}
              <div
                className="absolute -inset-2 rounded-[28px] opacity-50"
                style={{ border: "1.5px solid rgba(182,245,0,0.5)" }}
              />

              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  border: "1px solid rgba(17,27,52,0.1)",
                  aspectRatio: "3/4",
                }}
              >
                <Image
                  src={all}
                  alt="Frost Masters Repair Team"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 360px"
                  priority
                />
                {/* bottom vignette */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(17,27,52,0.7) 0%, transparent 45%)",
                  }}
                />

                {/* Floating badge inside image — bottom */}
                <motion.div
                  className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{
                    background: "rgba(8,13,28,0.75)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(182,245,0,0.25)",
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55, duration: 0.5, ease: EASE }}
                >
                  {/* Avatar stack */}
                  <div className="flex -space-x-2 flex-shrink-0">
                    {["#EE3F4A", "black", "#4A90D9"].map((bg, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          background: bg,
                          border: "2px solid rgba(8,13,28,0.8)",
                          color: i === 1 ? "white" : "black",
                          zIndex: 3 - i,
                        }}
                      >
                        <Users className="w-3 h-3" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p
                      className="text-white font-bold leading-none"
                      style={{
                        fontFamily: "'Montserrat',sans-serif",
                        fontSize: "1rem",
                      }}
                    >
                      5,000+
                    </p>
                    <p
                      className="text-white/45"
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "0.62rem",
                      }}
                    >
                      Happy Customers
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span
                          key={s}
                          style={{ color: "#EE3F4A", fontSize: "0.65rem" }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p
                      className="text-white/40 text-right"
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "0.5rem",
                      }}
                    >
                      4.9 avg
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* ── COL 3: Right — features + reviews ── */}
            <motion.div
              className="flex flex-col gap-6 lg:pt-4"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
            >
              {/* Feature list — divider style like reference */}
              <div className="flex flex-col">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    className="group flex items-start gap-4 py-4 cursor-default"
                    style={{
                      borderBottom:
                        i < features.length - 1
                          ? "1px solid rgba(17,27,52,0.08)"
                          : "none",
                    }}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + i * 0.08,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    whileHover={{ x: 4 }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(182,245,0,0.1)",
                        border: "1px solid rgba(182,245,0,0.25)",
                      }}
                    >
                      <CheckCircle className="w-4 h-4 text-[#EE3F4A]" />
                    </div>
                    <div>
                      <p
                        className="text-[black] font-semibold leading-tight mb-1"
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "0.9rem",
                        }}
                      >
                        {item}
                      </p>
                      <p
                        className="text-[black]/40 leading-snug"
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "0.75rem",
                        }}
                      >
                        {
                          [
                            "Industry-certified experts on every job",
                            "Original OEM parts, no substitutes",
                            "Book today, fixed today",
                            "Free re-service if issue returns",
                          ][i]
                        }
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Reviews card */}
              <motion.div
                className="rounded-2xl p-5"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(17,27,52,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, ease: EASE }}
              >
                <p
                  className="text-[black]/35 uppercase tracking-[0.2em] mb-3"
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "0.55rem",
                  }}
                >
                  Customer Reviews
                </p>
                <div className="flex items-center gap-4">
                  {/* Avatar row */}
                  <div className="flex -space-x-2 flex-shrink-0">
                    {["#EE3F4A", "black", "#6EE7B7", "#FCA5A5"].map((bg, i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center"
                        style={{ background: bg, zIndex: 4 - i }}
                      >
                        <Users
                          className="w-4 h-4"
                          style={{ color: i === 1 ? "white" : "black" }}
                        />
                      </div>
                    ))}
                    <div
                      className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-[black]"
                      style={{
                        background: "#f0f0f0",
                        zIndex: 0,
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "0.5rem",
                      }}
                    >
                      +99
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span
                          key={s}
                          style={{ color: "#EE3F4A", fontSize: "0.9rem" }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p
                      className="font-black text-[black] leading-none"
                      style={{
                        fontFamily: "'Montserrat',sans-serif",
                        fontSize: "1.5rem",
                      }}
                    >
                      4.9
                    </p>
                    <p
                      className="text-[black]/40"
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "0.72rem",
                      }}
                    >
                      Customer Ratings
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Extra />
    </>
  );
};

export default AboutUs;
