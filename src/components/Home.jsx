"use client";

import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  memo,
  useContext
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import Image from "next/image";
import { getAllPhones } from "@/data/contact";
import { FaLocationDot } from "react-icons/fa6";
import { myContext } from "@/context/myContext";

import AC from "../../public/cover/acBanner.webp";
import fridge from "../../public/cover/fridgeBanner.webp";
import oven from "../../public/cover/ovenBanner.webp";
import washingMachine from "../../public/cover/washBanner.webp";

import AC_cropped from "../../public/cover/acBanner.webp";
import fridge_cropped from "../../public/cover/fridgeBanner.webp";
import washingMachine_cropped from "../../public/cover/washBanner.webp";
import oven_cropped from "../../public/cover/ovenBanner.webp";

gsap.registerPlugin(Observer);

/* ─── Data ───────────────────────────────────────────────────────────────── */
const slides = [
  {
    id: 1,
    title: "Washing Machine",
    label: "LAUNDRY",
    description: "Professional washing machine repair services",
    bg: washingMachine,
    bgMobile: washingMachine_cropped,
  },
  {
    id: 3,
    title: "Refrigerator",
    label: "COOLING",
    description: "Reliable fridge repair solutions",
    bg: fridge,
    bgMobile: fridge_cropped,
  },
  {
    id: 5,
    title: "Air Conditioner",
    label: "HVAC",
    description: "AC installation and repair experts",
    bg: AC,
    bgMobile: AC_cropped,
  },
  {
    id: 6,
    title: "Microwave Oven",
    label: "COOKING",
    description: "Expert microwave oven repair and maintenance",
    bg: oven,
    bgMobile: oven_cropped,
  },
];

const CITIES = ["Kochi", "Trissur", "Kottayam"];

const SLIDE_DURATION = 5;
const TRANSITION_DURATION = 1.0;
const EASE_SMOOTH = [0.76, 0, 0.24, 1];

/* ═══════════════════════════════════════════════════════════════════════════
   BG LAYER
═══════════════════════════════════════════════════════════════════════════ */
const BgLayer = memo(function BgLayer({ slide, isActive, direction }) {
  const mobileSrc = (slide.bgMobile || slide.bg).src;
  const desktopSrc = slide.bg.src;
  const variants = {
    enter: (d) => ({
      clipPath: d >= 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
      scale: 1.07,
    }),
    center: {
      clipPath: "inset(0 0% 0 0%)",
      scale: 1,
      transition: { duration: TRANSITION_DURATION, ease: EASE_SMOOTH },
    },
    exit: (d) => ({
      clipPath: d >= 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
      scale: 1,
      transition: { duration: TRANSITION_DURATION, ease: EASE_SMOOTH },
    }),
  };
  return (
    <AnimatePresence custom={direction} initial={false}>
      {isActive && (
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ willChange: "clip-path, transform" }}
        >
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(115deg, rgba(0,0,0,0.76) 0%, rgba(0,0,0,0.22) 20%)",
            }}
          />
          <div
            className="absolute inset-0 md:hidden"
            style={{
              backgroundImage: `url(${mobileSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage: `url(${desktopSrc})`,
              backgroundSize: "fit",
              backgroundPosition: "center",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
});

/* ═══════════════════════════════════════════════════════════════════════════
   CAROUSEL STRIP
═══════════════════════════════════════════════════════════════════════════ */
const CarouselStrip = memo(function CarouselStrip({
  active,
  goTo,
  slideDuration,
}) {
  const STRIP_H = 110;
  const T_W = 52;
  const T_H = 62;
  const A_W = 360;
  const A_H = 210;
  const RADIUS_T = 5;
  const RADIUS_A = 14;
  const STRIP_GAP = 6;

  return (
    <div
      className="flex items-end"
      style={{
        gap: `${STRIP_GAP}px`,
        height: `${STRIP_H}px`,
        alignItems: "flex-end",
      }}
    >
      {slides.map((slide, i) => {
        const isAct = i === active;
        return (
          <motion.button
            key={slide.id}
            onClick={() => goTo(i)}
            aria-label={slide.title.replace("\n", " ")}
            className="relative flex-shrink-0 overflow-hidden focus:outline-none"
            style={{ willChange: "width, height, border-radius" }}
            animate={{
              width: isAct ? A_W : T_W,
              height: isAct ? A_H : T_H,
              borderRadius: isAct ? RADIUS_A : RADIUS_T,
              opacity: isAct ? 1 : 0.85,
            }}
            transition={{ duration: 0.62, ease: EASE_SMOOTH }}
            whileHover={
              !isAct
                ? { opacity: 0.82, scale: 1.05, transition: { duration: 0.32 } }
                : {}
            }
          >
            <Image
              src={slide.bg}
              alt={slide.title.replace("\n", " ")}
              fill
              className="object-cover"
              sizes="170px"
              priority={i < 2}
            />

            <motion.div
              className="absolute inset-0"
              animate={{ opacity: isAct ? 0 : 1 }}
              transition={{ duration: 0.42 }}
              style={{ background: "rgba(144, 140, 140, 0.55)" }}
            />

            <AnimatePresence>
              {isAct && (
                <>
                  <motion.div
                    key="tint"
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(182,245,0,0.22) 0%, transparent 70%)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  />

                  <motion.div
                    key="border"
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                      borderRadius: RADIUS_A,
                      border: "none",
                      boxShadow:
                        "0 0 18px rgba(182,245,0,0.3), inset 0 0 8px rgba(182,245,0,0.06)",
                    }}
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
                    transition={{ duration: 0.6, ease: EASE_SMOOTH }}
                  />

                  <div
                    className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden"
                    style={{
                      height: "3px",
                      borderRadius: `0 0 ${RADIUS_A}px ${RADIUS_A}px`,
                      background: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <motion.div
                      key={`pb-${active}`}
                      className="absolute inset-y-0 left-0 bg-blue-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: slideDuration, ease: "linear" }}
                    />
                  </div>
                </>
              )}
            </AnimatePresence>

            {!isAct && (
              <div className="absolute inset-0 z-20 flex items-end justify-center pb-1.5 pointer-events-none">
                <span
                  className="text-white/40 tabular-nums"
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "0.5rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
});

/* ═══════════════════════════════════════════════════════════════════════════
   CITY BADGE
═══════════════════════════════════════════════════════════════════════════ */
const CityBadges = memo(function CityBadges() {
  return (
    <motion.div
      className="flex flex-wrap items-center gap-2 mt-5"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
      }}
    >
      {CITIES.map((city) => (
        <motion.span
          key={city}
          className="flex items-center gap-1.5 text-white text-sm font-medium rounded-full border border-white/15 px-3 py-1 backdrop-blur-sm bg-blue-500"
          variants={{
            hidden: { opacity: 0, y: 8, scale: 0.92 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.45, ease: [0.33, 1, 0.68, 1] },
            },
          }}
          whileHover={{
            background: "rgba(255,255,255,0.14)",
            borderColor: "rgba(255,255,255,0.32)",
            scale: 1.04,
            transition: { duration: 0.2 },
          }}
        >
          <FaLocationDot className="text-white text-xs flex-shrink-0" />
          {city}
        </motion.span>
      ))}
    </motion.div>
  );
});

/* ═══════════════════════════════════════════════════════════════════════════
   HOME
═══════════════════════════════════════════════════════════════════════════ */
const Home = ({ homeRef }) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeRef = useRef(0);
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);

  const {
      scrolled,
    } = useContext(myContext);

  const goTo = useCallback((idx) => {
    const next = ((idx % slides.length) + slides.length) % slides.length;
    if (next === activeRef.current) return;
    const dir = next > activeRef.current ? 1 : -1;
    activeRef.current = next;
    setDirection(dir);
    setActive(next);
  }, []);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) goTo(activeRef.current + 1);
    }, SLIDE_DURATION * 1000);
  }, [goTo]);

  const stopAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  useLayoutEffect(() => {
    startAutoplay();
    let acc = 0;
    const obs = Observer.create({
      target: document.body,
      type: "touch,drag",
      onPress: () => {
        isPausedRef.current = true;
        acc = 0;
      },
      onDragStart: () => {
        isPausedRef.current = true;
      },
      onDrag: (self) => {
        acc += self.deltaX;
        if (Math.abs(acc) >= 80) {
          goTo(activeRef.current + (acc < 0 ? 1 : -1));
          acc = 0;
        }
      },
      onRelease: () => {
        acc = 0;
        isPausedRef.current = false;
      },
    });
    return () => {
      obs.kill();
      stopAutoplay();
    };
  }, [goTo, startAutoplay, stopAutoplay]);

  useLayoutEffect(() => {
    const src = (slides[0].bgMobile || slides[0].bg).src;
    if (!src || typeof document === "undefined") return;
    if (!document.querySelector(`link[rel="preload"][href="${src}"]`)) {
      const l = Object.assign(document.createElement("link"), {
        rel: "preload",
        as: "image",
        href: src,
      });
      document.head.appendChild(l);
    }
  }, []);

  const current = slides[active];
  const titleWords = current.title.split("\n");

  return (
    <section ref={homeRef}>
      <section className={`relative max-w-8xl h-screen min-h-[700px] mx-auto overflow-hidden select-none ${!scrolled && "mt-30"}`}>
        {/* Backgrounds */}
        <div className="absolute inset-0" aria-hidden="true">
          {slides.map((slide, i) => (
            <BgLayer
              key={slide.id}
              slide={slide}
              isActive={i === active}
              direction={direction}
            />
          ))}
        </div>

        {/* Left text */}
        <div className="relative z-30 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 pt-28 pb-44 max-w-6xl">
          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.div key={`title-${active}`} className="mb-5">
              {titleWords.map((word, i) => (
                <div key={i} className="overflow-hidden -my-2 py-2">
                  <motion.h1
                    className="text-white font-black uppercase leading-[1.1] block py-2"
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: "clamp(3.2rem,9vw,5rem)",
                      textShadow: "0 4px 30px rgba(0,0,0,0.35)",
                    }}
                    initial={{ y: "104%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-104%", opacity: 0 }}
                    transition={{
                      duration: 0.62,
                      delay: i * 0.07,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${active}`}
              className="text-white/62 mb-7 max-w-2xl"
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "clamp(1rem,1.4vw,2rem)",
                lineHeight: 1.65,
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {current.description}
            </motion.p>
          </AnimatePresence>

          {/* Phone CTAs */}
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            {getAllPhones().map(({ city, tel, display }) => (
              <a
                key={city}
                href={`tel:${tel}`}
                title={`Call ${city}`}
                className="group relative overflow-hidden rounded-full"
                style={{ fontFamily: "'Montserrat',sans-serif" }}
              >
                <span
                  className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"
                  aria-hidden="true"
                />
                <span
                  className="relative z-10 flex items-center gap-1.5 bg-white hover:bg-white/10 text-black group-hover:text-white transition-colors duration-300 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 font-bold tracking-wide whitespace-nowrap"
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: "clamp(1rem,1.3vw,1.8rem)",
                  }}
                >
                  Call Now: {display}
                </span>
              </a>
            ))}
          </motion.div>

          {/* ── City Coverage Badges ── */}
          <CityBadges />
        </div>

        {/* Bottom-right carousel */}
        <div className={`absolute right-6 md:right-10 lg:right-14 z-30 hidden md:flex flex-col items-end gap-2 ${scrolled ? "bottom-28" : "bottom-40"}`}>
          <CarouselStrip
            active={active}
            goTo={goTo}
            slideDuration={SLIDE_DURATION}
          />
        </div>

        {/* Mobile dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex md:hidden items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-500 ${
                i === active
                  ? "bg-blue-500 w-6 h-2"
                  : "bg-white/32 hover:bg-white/60 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default memo(Home);
