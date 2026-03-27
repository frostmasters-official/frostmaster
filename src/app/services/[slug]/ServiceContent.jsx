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
    { icon: ShieldCheck, label: "Warranty", val: "30 Days" },
    { icon: Award, label: "Parts", val: "Genuine" },
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
          <div className="absolute inset-0 bg-black/60 lg:via-black/80" />
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

        {/* ─── STATS GRID ─── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-black/5 rounded-[2rem] p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              {...fadeUp(0.1 + idx * 0.1)}
            >
              <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-blue-500 mb-4" />
              <span className="text-black/50 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-1">
                {stat.label}
              </span>
              <span className="text-black font-black text-xl md:text-3xl">
                {stat.val}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 relative mb-12">
          <div className="flex flex-col gap-6">
            {service.detailedContent ? (
              <>
                {service.detailedContent.map((section, idx) => (
                  <motion.div
                    key={idx}
                    className="p-8 md:p-10 bg-white border border-black/5 rounded-[2.5rem] shadow-sm flex flex-col"
                    {...fadeUp(0.1 + idx * 0.05)}
                  >
                    <div className="space-y-5">
                      {section.title && (
                        <h3
                          className="text-black font-black text-xl md:text-2xl flex items-center gap-3"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {idx === 0 ? (
                            <CircleCheck className="w-6 h-6 text-blue-500 shrink-0" />
                          ) : (
                            <div className="w-2 h-6 bg-blue-500 rounded-full shrink-0"></div>
                          )}
                          {section.title}
                        </h3>
                      )}
                      {section.content && (
                        <p className="text-black/60 leading-relaxed text-base md:text-lg font-medium">
                          {section.content}
                        </p>
                      )}
                      {section.type === "list" && section.items && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-6">
                          {section.items.map((item, i) => (
                            <div
                              key={i}
                              className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 md:p-6 rounded-[1.5rem] bg-[#f8f9fa] border border-black/5 hover:border-black/10 hover:shadow-md transition-all duration-300 h-full"
                            >
                              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-black/5">
                                <Zap className="w-5 h-5 text-blue-500 fill-current" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-extrabold text-black text-base md:text-lg mb-2 leading-snug">
                                  {item.title}
                                </h4>
                                <p className="text-black/60 font-medium text-sm md:text-base leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </>
            ) : (
              <motion.div
                className="p-8 md:p-12 bg-white border border-black/5 rounded-[2.5rem] shadow-sm flex flex-col justify-between min-h-[400px]"
                {...fadeUp(0.1)}
              >
                <>
                  <h3
                    className="text-black font-black text-xl md:text-2xl mb-6 flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <CircleCheck className="w-6 h-6 text-blue-500 shrink-0" />
                    Service Overview
                  </h3>
                  <p className="text-black/60 leading-relaxed whitespace-pre-line text-base md:text-lg font-medium">
                    {service.description}
                  </p>
                </>
              </motion.div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:sticky lg:top-8">
          {/* ───── TILE 1 ───── */}
          <motion.div
            className="group relative overflow-hidden bg-white rounded-[2rem] p-8
               flex flex-col justify-between min-h-[160px] h-full
               shadow-sm border border-black/5"
            {...fadeUp(0.2)}
          >
            <div className="relative z-10">
              <span className="text-blue-500 text-[8px] font-black uppercase tracking-[0.35em] mb-1 block">
                Premium Standard
              </span>
              <h4 className="text-black font-black text-xl leading-tight">
                100% Genuine <br /> Spare Parts
              </h4>
            </div>

            <Settings
              className="absolute -bottom-12 -right-12 w-32 h-32 text-black/10 
                         group-hover:rotate-90 transition-transform duration-1000"
            />

          </motion.div>

          {/* ───── TILE 2 ───── */}
          <motion.div
            className="bg-blue-500 rounded-[2rem] p-8 flex flex-col justify-between
               min-h-[160px] h-full shadow-lg shadow-blue-500/20"
            {...fadeUp(0.3)}
          >
            <div className="flex justify-between items-start">
              <Clock className="w-8 h-8 text-white" />
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Zap className="w-3.5 h-3.5 text-white fill-current" />
              </div>
            </div>

            <h4 className="text-white font-black text-xl leading-tight mt-4">
              Express Same-Day Fix
            </h4>
          </motion.div>

          {/* ───── TILE 3 ───── */}
          <motion.div
            className="bg-white rounded-[2rem] p-8 flex flex-col items-center 
               text-center justify-center min-h-[160px] h-full shadow-xl"
            {...fadeUp(0.4)}
          >
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>

            <h4 className="text-black font-black text-lg mb-2">
              Need Immediate Assistance?
            </h4>

            <p className="text-black/50 text-sm font-medium mb-4">
              Our experts are ready to help fast.
            </p>

            <button
              onClick={() => onNavigate?.("contact")}
              className="w-full py-3 rounded-full bg-blue-500 text-white font-black 
                 text-[9px] tracking-[0.18em] uppercase hover:bg-blue-600 
                 transition-colors shadow-md shadow-blue-500/30"
            >
              Book Technician
            </button>
          </motion.div>
        </div>
      </section>

      <Extra />
    </div>
  );
}
