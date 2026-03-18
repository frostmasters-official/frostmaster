"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1];

export default function SectionHeader({
  tag,
  titleStart,
  highlight,
  description,
}) {
  return (
    <motion.div
      className="text-center my-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {/* Top Label */}
      {tag && (
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-px w-10 bg-blue-500/60" />
          <span
            className="uppercase tracking-[0.35em]"
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: "0.85rem",
              color: "#000",
            }}
          >
            {tag}
          </span>
          <span className="h-px w-10 bg-blue-500/60" />
        </div>
      )}

      {/* Heading */}
      <h2
        className="font-black capitalize leading-[0.9] pt-3 pb-1"
        style={{
          fontFamily: "'Montserrat',sans-serif",
          fontSize: "clamp(2.3rem,5vw,3.5rem)",
          color: "#000",
          lineHeight: "1.4",
        }}
      >
        {titleStart} <span className="text-blue-500">{highlight}</span>
      </h2>

      {/* Description */}
      {description && (
        <p
          className="text-black/60 "
          style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: "1rem",
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
