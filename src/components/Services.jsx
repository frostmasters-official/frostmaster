"use client";
import React, { memo, useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Wrench } from "lucide-react";
import serviceData from "./data/serviceData";
import { myContext } from "@/context/myContext";
import SectionHeader from "./SectionHeader";

const services = Object.entries(serviceData);

/* ─── Single Card ─────────────────────────────────────────────────────────── */
const ServiceCard = ({ slug, service, className = "", size = "md", index }) => (
  <motion.div
    className={`relative overflow-hidden rounded-2xl group cursor-pointer ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <Link href={`/services/${slug}`} className="block w-full h-full">
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient scrim — darker at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
      </div>

      {/* Top-left badge */}
      <div className="absolute top-3 left-3 z-10">
        <span
          className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <Wrench className="w-3 h-3 flex-shrink-0" />
          Expert Service
        </span>
      </div>

      {/* Bottom frosted bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-black/35 backdrop-blur-sm border-t border-white/10">
        <span
          className={`text-white font-bold tracking-wide leading-tight ${
            size === "lg" ? "text-xl" : size === "md" ? "text-base" : "text-sm"
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {service.title}
        </span>
        <motion.div
          className="w-8 h-8 flex-shrink-0 ml-2 rounded-full bg-white/20 border border-white/30 flex items-center justify-center"
          whileHover={{
            scale: 1.15,
            backgroundColor: "#EE3F4A",
            borderColor: "transparent",
          }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight className="w-4 h-4 text-white" />
        </motion.div>
      </div>
    </Link>
  </motion.div>
);

/* ─── Services Section ────────────────────────────────────────────────────── */
const Services = () => {
  const { servicesRef } = useContext(myContext);

  const [s0, s1, s2, s3, s4, s5] = services;
  const bottomRowCards = [s3, s4, s5].filter(Boolean);

  return (
    <section ref={servicesRef} className="py-16 bg-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <SectionHeader
          tag="Our Services"
          titleStart="Our"
          highlight="Services"
          description="Expert home appliance repair & maintenance-same-day service, genuine parts, 30-day warranty."
        />

        {/* ── Desktop Bento Grid (hidden on mobile) ── */}
        <div
          className="hidden lg:grid gap-3"
          style={{
            gridTemplateColumns: "2fr 1.1fr 1.1fr",
            gridTemplateRows: "350px 350px",
          }}
        >
          {/* Card 0 — large left, spans 2 rows */}
          {s0 && (
            <div style={{ gridRow: "1 / 3" }}>
              <ServiceCard
                slug={s0[0]}
                service={s0[1]}
                className="w-full h-full"
                size="lg"
                index={0}
              />
            </div>
          )}

          {/* Card 1 — top center */}
          {s1 && (
            <ServiceCard
              slug={s1[0]}
              service={s1[1]}
              className="w-full h-full"
              size="md"
              index={1}
            />
          )}

          {/* Card 2 — top right */}
          {s2 && (
            <ServiceCard
              slug={s2[0]}
              service={s2[1]}
              className="w-full h-full"
              size="md"
              index={2}
            />
          )}

          {/* Row 2: small cards across center + right columns (s3, s4, s5) */}
          {bottomRowCards.length > 0 && (
            <div
              style={{
                gridColumn: "2 / 4",
                display: "grid",
                gridTemplateColumns: `repeat(${bottomRowCards.length}, minmax(0, 1fr))`,
                gap: "12px",
                height: "350px",
              }}
            >
              {bottomRowCards.map(([slug, service], i) => (
                <ServiceCard
                  key={slug}
                  slug={slug}
                  service={service}
                  className="w-full h-full"
                  size="sm"
                  index={3 + i}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── Mobile / Tablet fallback: 2-column grid ── */}
        <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map(([slug, service], index) => (
            <div
              key={slug}
              className={index === 0 ? "sm:col-span-2" : ""}
              style={{ height: "360px" }}
            >
              <ServiceCard
                slug={slug}
                service={service}
                className="w-full h-full"
                size={index === 0 ? "lg" : "md"}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
