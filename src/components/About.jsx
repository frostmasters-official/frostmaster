"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Users, Zap, ShieldCheck, Award } from "lucide-react";
import all from "../../public/service/all.webp";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import Extra from './Extra'

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
      <section id="about" className="relative overflow-hidden py-20 bg-[#fafafa]">
        {/* Soft radial accents */}
        <div
          className="pointer-events-none absolute top-[-10%] right-[-5%] w-[600px] h-[600px]"
          style={{
            background: "radial-gradient(circle, rgba(182,245,0,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px]"
          style={{
            background: "radial-gradient(circle, rgba(238,63,74,0.03) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 px-6 lg:px-12 max-w-8xl mx-auto">
          {/* Section Header */}
          <SectionHeader
            tag="Who We Are"
            titleStart="The Future of"
            highlight="Appliance Care"
            description="Empowering homes with rapid, reliable, and premium repair solutions."
          />

          {/* ════════════════════════════════════════════════════════════════
              BENTO GRID
          ════════════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[minmax(180px,auto)] gap-4 lg:gap-6 mt-12">
            
            {/* 1. MAIN STORY (The Lead) - Rows 1-2, Cols 1-7 */}
            <motion.div
              className="lg:col-span-7 lg:row-span-2 rounded-[2.5rem] p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden group shadow-sm bg-black"
              {...fadeUp(0.1)}
            >
              <div className="relative z-10">
                <h3 className="text-white font-black leading-tight mb-5" style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                  Your Trusted Partner in <br />
                  <span className="text-[#EE3F4A]">Appliance Excellence</span>
                </h3>
                <p className="text-white/60 leading-relaxed max-w-lg" style={{ fontFamily: "'Inter',sans-serif", fontSize: "1rem" }}>
                  At Frost Masters, we've redefined appliance repair for the modern home. 
                  No more waiting days for a fix—we bring precision, genuine parts, and expert care to your doorstep within the hour.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="#contact"
                  className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full font-bold transition-all duration-500 bg-white text-black px-8 py-4 text-sm tracking-wider uppercase"
                >
                  <div className="absolute inset-0 bg-[#EE3F4A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 group-hover:text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 fill-current" />
                    BOOK INSTANT REPAIR
                  </span>
                </Link>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#EE3F4A]/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
            </motion.div>

            {/* 2. STATS (Quick Bits) - Row 1, Cols 8-12 */}
            <motion.div
              className="lg:col-span-5 lg:row-span-1 rounded-[2.5rem] p-8 flex flex-col justify-center border border-black/5 bg-white shadow-sm"
              {...fadeUp(0.2)}
            >
              <div className="grid grid-cols-2 gap-8">
                {stats.slice(0, 2).map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="text-4xl font-black text-black leading-none" style={{ fontFamily: "'Montserrat',sans-serif" }}>{stat.value}</span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-black/40 font-bold">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. REVIEWS & TRUST - Row 2, Cols 8-12 */}
            <motion.div
              className="lg:col-span-5 lg:row-span-1 rounded-[2.5rem] p-8 border border-black/5 bg-white shadow-sm flex items-center justify-between group overflow-hidden relative"
              {...fadeUp(0.3)}
            >
              <div className="flex flex-col gap-2 relative z-10">
                <div className="flex gap-1 text-[#EE3F4A]">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-lg">★</span>)}
                </div>
                <span className="text-2xl font-black text-black" style={{ fontFamily: "'Montserrat',sans-serif" }}>4.9/5 Rating</span>
                <span className="text-xs uppercase tracking-widest text-black/40 font-bold">Trusted by 5,000+ Kochi Homes</span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#EE3F4A]/5 flex items-center justify-center border border-[#EE3F4A]/10 group-hover:bg-[#EE3F4A] group-hover:border-[#EE3F4A] transition-all duration-500 relative z-10">
                <Users className="w-8 h-8 text-[#EE3F4A] group-hover:text-white transition-colors duration-500" />
              </div>
              {/* Subtle background flair */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#EE3F4A]/5 rounded-full blur-2xl group-hover:bg-[#EE3F4A]/10 transition-colors duration-500" />
            </motion.div>

            {/* 4. VISUAL (The Team Image) - Rows 3-5, Cols 1-7 */}
            <motion.div
              className="lg:col-span-7 lg:row-span-3 rounded-[2.5rem] overflow-hidden relative shadow-md group min-h-[560px]"
              {...fadeUp(0.4)}
            >
              <Image
                src={all}
                alt="Frost Masters Team"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white/80 text-[11px] font-bold uppercase tracking-[0.3em]">Currently Active in Ernakulam</span>
                </div>
                <h4 className="text-white text-3xl font-black leading-tight" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                  Certified Technicians <br />
                  <span className="text-[#EE3F4A]">Expertly Trained</span> for Every Brand
                </h4>
              </div>
            </motion.div>

            {/* 5. EXPERTISE (Feature List) - Rows 3-4, Cols 8-12 */}
            <motion.div
              className="lg:col-span-5 lg:row-span-2 rounded-[2.5rem] p-10 border border-black/5 bg-white shadow-sm flex flex-col gap-8"
              {...fadeUp(0.5)}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-black font-black uppercase tracking-[0.2em] text-xs" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                  Our Standard
                </h4>
                <Award className="w-5 h-5 text-[#EE3F4A]" />
              </div>
              <div className="space-y-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-5 group">
                    <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-[#EE3F4A]/10 transition-colors">
                      <CheckCircle className="w-5 h-5 text-[#EE3F4A]" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-black leading-tight mb-1">{f}</p>
                      <p className="text-xs text-black/40 font-medium">Guaranteed excellence in every service call.</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 7. WARRANTY & RELIABILITY (New Tile to fill the gap) - Row 5, Cols 8-12 */}
            <motion.div
              className="lg:col-span-5 lg:row-span-1 rounded-[2.5rem] p-8 border border-[#EE3F4A]/10 bg-[#EE3F4A]/5 shadow-sm flex items-center gap-6 group hover:bg-[#EE3F4A] transition-all duration-500"
              {...fadeUp(0.6)}
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-8 h-8 text-[#EE3F4A]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-black text-black group-hover:text-white transition-colors" style={{ fontFamily: "'Montserrat',sans-serif" }}>90-Day Warranty</span>
                <span className="text-xs font-bold text-[#EE3F4A] group-hover:text-white/80 uppercase tracking-widest transition-colors">Full Protection Guaranteed</span>
              </div>
            </motion.div>

            {/* 6. BRANDS (The Stripe) - Row 6, Cols 1-12 */}
            <motion.div
              className="lg:col-span-12 rounded-[2.5rem] p-10 border border-black/5 bg-white shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10"
              {...fadeUp(0.7)}
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-[#EE3F4A] uppercase tracking-[0.4em]">Multi-Brand Expertise</span>
                <h5 className="text-xl font-black text-black" style={{ fontFamily: "'Montserrat',sans-serif" }}>Authorized Service Provider</h5>
              </div>
              <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                {["Samsung", "LG", "Whirlpool", "Bosch", "IFB", "Haier", "Panasonic"].map(brand => (
                  <span
                    key={brand}
                    className="px-8 py-3 rounded-2xl bg-black/5 text-black/40 font-black text-[10px] uppercase tracking-[0.3em] border border-transparent hover:border-[#EE3F4A]/20 hover:bg-white hover:text-[#EE3F4A] transition-all duration-500 cursor-default"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
          
        </div>
        <Extra/>
      </section>
    </>
  );
};

export default AboutUs;
