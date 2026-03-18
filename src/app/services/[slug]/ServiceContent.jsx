"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { myContext } from "@/context/myContext";
import Extra from "../../../components/Extra";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Clock,
  Settings,
  ChevronDown,
  ChevronUp,
  Award,
  CircleCheck,
  PackageCheck,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function ServiceContent({ service, cityName }) {
  const { onNavigate } = useContext(myContext);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const hasFaq = Array.isArray(service.faq) && service.faq.length > 0;

  const shortIntro = service.description
    ? service.description.split(/[.!?]/)[0].trim() + "."
    : `${service.title} repair and service across Eranakulam. Expert technicians, genuine parts, same-day booking.`;

  const stats = [
    { icon: Clock, label: "Response", val: "60 Mins" },
    { icon: ShieldCheck, label: "Warranty", val: "90 Days" },
    { icon: Award, label: "Parts", val: "Genuine" },
    { icon: CircleCheck, label: "Inspection", val: "Free" },
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen text-black">
      {/* ─── HERO SECTION ────────────────────────────────────────────────── */}
      <section className="relative min-h-[850px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent lg:via-black/40" />
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            className="max-w-5xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: EASE }}
          >
            {cityName && (
              <span className="inline-flex px-4 py-1.5 rounded-full bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-lg shadow-blue-500/20">
                Serving {cityName}
              </span>
            )}
            <h1
              className="text-white font-black leading-tight mb-6"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
              }}
            >
              Expert <br />
              <span className="text-blue-500">{service.title}</span> <br />
              Repair & Care
            </h1>
            <p
              className="text-white/70 text-base md:text-xl leading-relaxed mb-10 max-w-xl font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {shortIntro} Professional maintenance and precision repairs using
              genuine parts for all major brands.
            </p>

            <button
              onClick={() => onNavigate?.["contact"]?.()}
              className="group relative px-10 py-5 rounded-full bg-blue-500 text-white font-black text-[11px] tracking-[0.25em] transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-blue-500/40"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover:text-black flex items-center gap-3">
                <Zap className="w-4 h-4 fill-current" />
                BOOK REPAIR NOW
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── BENTO CONTENT ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
              Unmatched Quality
            </span>
            <h2
              className="text-black font-black text-3xl md:text-5xl leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Why We Are Kochi's <br className="hidden md:block" /> First Choice
              for {service.title}
            </h2>
          </div>
          <div className="lg:max-w-xs">
            <p className="text-black/50 text-sm md:text-base leading-relaxed font-medium">
              We combine rapid response times with uncompromising technical
              precision to keep your home running smoothly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Main Content Card */}
          <motion.div
            className="lg:col-span-8 p-8 md:p-12 bg-white border border-black/5 rounded-[2.5rem] shadow-sm flex flex-col justify-between min-h-[400px]"
            {...fadeUp(0.1)}
          >
            <div>
              <h3
                className="text-black font-black text-xl md:text-2xl mb-6 flex items-center gap-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <CircleCheck className="w-6 h-6 text-blue-500" />
                Service Overview
              </h3>
              <p className="text-black/60 leading-relaxed whitespace-pre-line text-base md:text-lg font-medium">
                {service.description}
              </p>
            </div>
            <div className="flex items-center gap-5 pt-8 mt-10 border-t border-black/5">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                <PackageCheck className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-xs md:text-sm font-black text-black/80 tracking-tight uppercase">
                Full health check included with every service visit.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Genuine Parts Tile */}
            <motion.div
              className="group relative overflow-hidden bg-black rounded-[2.5rem] p-8 h-full flex flex-col justify-between min-h-[220px]"
              {...fadeUp(0.2)}
            >
              <div className="relative z-10">
                <span className="text-blue-500 text-[9px] font-black uppercase tracking-[0.4em] mb-2 block">
                  Premium Standard
                </span>
                <h4 className="text-white font-black text-2xl leading-tight">
                  100% Genuine <br /> Spare Parts
                </h4>
              </div>
              <Settings className="absolute -bottom-10 -right-10 w-40 h-40 text-white/10 group-hover:rotate-90 transition-transform duration-1000" />
              <div className="relative z-10 text-white/40 text-[10px] font-bold uppercase tracking-widest mt-4">
                Authorized Brands Only
              </div>
            </motion.div>

            {/* Rapid Response Tile */}
            <motion.div
              className="bg-blue-500 rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[160px] shadow-xl shadow-blue-500/20"
              {...fadeUp(0.3)}
            >
              <div className="flex justify-between items-start">
                <Clock className="w-10 h-10 text-white" />
                <div className="bg-white/20 p-2 rounded-lg">
                  <Zap className="w-4 h-4 text-white fill-current" />
                </div>
              </div>
              <h4 className="text-white font-black text-2xl leading-none mt-6">
                Express <br /> Same-Day Fix
              </h4>
            </motion.div>
          </div>
        </div>
      </section>

      <Extra />
    </div>
  );
}
