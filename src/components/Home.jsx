// "use client";

// import React, {
//   useRef,
//   useState,
//   useLayoutEffect,
//   useCallback,
//   memo,
// } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { gsap } from "gsap";
// import { Observer } from "gsap/Observer";
// import Image from "next/image";
// import { getAllPhones } from "@/data/contact";

// import AC from "../../public/cover/AC.webp";
// import Chimney from "../../public/cover/Chimney.webp";
// import fridge from "../../public/cover/fridge.webp";
// import dish from "../../public/cover/dish.webp";
// import oven from "../../public/cover/oven.webp";
// import tv from "../../public/cover/tv.webp";
// import washingMachine from "../../public/cover/washing-machine.webp";

// import AC_cropped from '../../public/cover/AC_cropped.webp'
// import fridge_cropped from '../../public/cover/fridge_cropped.jpg'
// import washingMachine_cropped from '../../public/cover/washing-machine_cropped.jpg'
// import tv_cropped from '../../public/cover/tv_cropped.jpg'
// import dish_cropped from '../../public/cover/dish_cropped.webp'
// import oven_cropped from '../../public/cover/oven_cropped.jpg'
// import chimney_cropped from '../../public/cover/Chimney_cropped.webp'

// gsap.registerPlugin(Observer);

// const slides = [
//   { id: 1, title: "Washing Machine", description: "Professional washing machine repair services", bg: washingMachine, bgMobile: washingMachine_cropped },
//   { id: 2, title: "Television",      description: "Expert TV repair and maintenance",             bg: tv, bgMobile: tv_cropped },
//   { id: 3, title: "Refrigerator",    description: "Reliable fridge repair solutions",             bg: fridge, bgMobile: fridge_cropped },
//   { id: 4, title: "Chimney",         description: "Chimney cleaning and repair services",         bg: Chimney, bgMobile: chimney_cropped },
//   { id: 5, title: "Air Conditioner", description: "AC installation and repair experts",           bg: AC, bgMobile: AC_cropped },
//   { id: 6, title: "Microwave Oven",  description: "Expert microwave oven repair and maintenance", bg: oven, bgMobile: oven_cropped },
//   { id: 7, title: "Dishwasher",      description: "Reliable dishwasher repair and installation",  bg: dish, bgMobile: dish_cropped },
// ];

// const SLIDE_DURATION      = 4;
// const TRANSITION_DURATION = 2;

// const bgStyle = (src, isActive) => ({
//   backgroundImage: `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.5)),url(${src})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   opacity: isActive ? 1 : 0,
//   willChange: "opacity",
//   transition: `opacity ${TRANSITION_DURATION}s ease-in-out`,
//   zIndex: isActive ? 1 : 0,
// });

// const BgLayer = memo(function BgLayer({ slide, isActive }) {
//   const mobileSrc = (slide.bgMobile || slide.bg).src;
//   const desktopSrc = slide.bg.src;
//   return (
//     <>
//       <div
//         className="absolute inset-0 md:hidden"
//         style={bgStyle(mobileSrc, isActive)}
//         aria-hidden="true"
//       />
//       <div
//         className="absolute inset-0 hidden md:block"
//         style={bgStyle(desktopSrc, isActive)}
//         aria-hidden="true"
//       />
//     </>
//   );
// });

// const cardVariants = {
//   initial: { scale: 0.85, opacity: 0 },
//   animate: { scale: 1,    opacity: 1 },
//   exit:    { scale: 0.85, opacity: 0 },
// };
// const textVariants = {
//   initial: { y: 22,  opacity: 0 },
//   animate: { y: 0,   opacity: 1 },
//   exit:    { y: -22, opacity: 0 },
// };
// const descVariants = {
//   initial: { y: 12,  opacity: 0    },
//   animate: { y: 0,   opacity: 0.92 },
//   exit:    { y: -12, opacity: 0    },
// };
// const textTransition = { duration: 0.8, ease: [0.33, 1, 0.68, 1] };
// const descTransition  = { duration: 0.8, ease: "easeInOut", delay: 0.08 };
// const cardTransition  = { duration: 1.4, ease: "easeInOut" };

// const Home = ({ homeRef }) => {
//   const [active, setActive] = useState(0);
//   const activeRef           = useRef(0);
//   const intervalRef         = useRef(null);
//   const isPausedRef         = useRef(false);

//   const goTo = useCallback((idx) => {
//     const next = ((idx % slides.length) + slides.length) % slides.length;
//     if (next === activeRef.current) return;
//     activeRef.current = next;
//     setActive(next);
//   }, []);

//   const startAutoplay = useCallback(() => {
//     if (intervalRef.current) return;
//     intervalRef.current = setInterval(() => {
//       if (!isPausedRef.current) goTo(activeRef.current + 1);
//     }, SLIDE_DURATION * 1000);
//   }, [goTo]);

//   const stopAutoplay = useCallback(() => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   }, []);

//   useLayoutEffect(() => {
//     startAutoplay();

//     let accDelta  = 0;
//     const threshold = 80;

//     const obs = Observer.create({
//       target: document.body,
//       type: "touch,drag",
//       onPress:     () => { isPausedRef.current = true;  accDelta = 0; },
//       onDragStart: () => { isPausedRef.current = true; },
//       onDrag: (self) => {
//         accDelta += self.deltaX;
//         if (Math.abs(accDelta) >= threshold) {
//           goTo(activeRef.current + (accDelta < 0 ? 1 : -1));
//           accDelta = 0;
//         }
//       },
//       onRelease: () => { accDelta = 0; isPausedRef.current = false; },
//     });

//     return () => { obs.kill(); stopAutoplay(); };
//   }, [goTo, startAutoplay, stopAutoplay]);

//   useLayoutEffect(() => {
//     const src = (slides[0].bgMobile || slides[0].bg).src;
//     if (!src || typeof document === "undefined") return;
//     let link = document.querySelector(`link[rel="preload"][href="${src}"]`);
//     if (!link) {
//       link = document.createElement("link");
//       link.rel = "preload";
//       link.as = "image";
//       link.href = src;
//       document.head.appendChild(link);
//     }
//   }, []);

//   const currentSlide = slides[active];

//   return (
//     <section ref={homeRef}>
//       <section className="relative w-full h-screen overflow-hidden select-none">

//         {/* Backgrounds */}
//         <div className="absolute inset-0" aria-hidden="true">
//           {slides.map((slide, i) => (
//             <BgLayer key={slide.id} slide={slide} isActive={i === active} />
//           ))}
//         </div>

//         {/* Main content */}
//         <div className="
//           relative z-10
//           flex flex-col md:flex-row
//           h-full items-center
//           justify-center md:justify-between
//           px-6 sm:px-10 md:px-16 lg:px-24
//           gap-8 md:gap-0
//           pt-24 pb-16 md:py-0
//         ">

//           {/* ── Left: Text + CTA ────────────────────────────────────────────── */}
//           <div className="flex flex-col justify-center w-full md:w-1/2 gap-4 md:gap-6">

//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={`title-${active}`}
//                 className="
//                   text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
//                   text-white leading-none font-extrabold uppercase drop-shadow-xl
//                 "
//                 variants={textVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={textTransition}
//               >
//                 {currentSlide.title}
//               </motion.h1>
//             </AnimatePresence>

//             <AnimatePresence mode="wait">
//               <motion.p
//                 key={`desc-${active}`}
//                 className="
//                   max-w-[90%] sm:max-w-sm md:max-w-md
//                   text-sm sm:text-base md:text-lg
//                   text-white/90 drop-shadow-md
//                 "
//                 variants={descVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={descTransition}
//               >
//                 {currentSlide.description}
//               </motion.p>
//             </AnimatePresence>

//             {/* Phone buttons — wrap gracefully on small screens */}
//             <div className="flex flex-wrap gap-2 sm:gap-3 mt-1">
//               {getAllPhones().map(({ city, tel, display }) => (
//                 <a
//                   key={city}
//                   href={`tel:${tel}`}
//                   title={`Call ${city}`}
//                   className="
//                     hover:scale-105 hover:bg-[#EE3F4A]
//                     transition-all duration-300
//                     bg-white/90 text-black
//                     px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3
//                     rounded-full
//                     text-sm sm:text-base md:text-lg lg:text-xl
//                     font-extrabold whitespace-nowrap
//                   "
//                 >
//                   {city}: {display}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* ── Right: Image card (hidden on xs, shown sm+) ──────────────────── */}
//           <div className="
//             hidden sm:flex
//             w-full md:w-1/2
//             h-[220px] sm:h-[260px] md:h-[55%] lg:h-[65%]
//             items-center justify-center
//             relative
//           ">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`card-${active}`}
//                 className="
//                   absolute
//                   w-[85%] sm:w-4/5 md:w-3/4
//                   h-full
//                   rounded-[2rem] md:rounded-[3rem]
//                   overflow-hidden z-20 shadow-2xl
//                 "
//                 style={{ willChange: "opacity, transform" }}
//                 variants={cardVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={cardTransition}
//               >
//                 <Image
//                   src={currentSlide.bg}
//                   alt={currentSlide.title}
//                   className="h-full w-full object-cover"
//                   priority={active === 0}
//                   loading={active === 0 ? "eager" : "lazy"}
//                   sizes="(max-width: 640px) 0vw, (max-width: 1024px) 45vw, 37vw"
//                   width={600}
//                   height={400}
//                 />
//               </motion.div>
//             </AnimatePresence>
//           </div>

//         </div>

//         {/* ── Dot / pill indicators ─────────────────────────────────────────── */}
//         <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goTo(i)}
//               aria-label={`Go to slide ${i + 1}`}
//               className={`
//                 rounded-full transition-all duration-500
//                 ${i === active
//                   ? "bg-[#EE3F4A] w-6 h-2"
//                   : "bg-white/50 hover:bg-white/80 w-2 h-2"}
//               `}
//             />
//           ))}
//         </div>

//       </section>
//     </section>
//   );
// };

// export default memo(Home);

"use client";

import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  memo,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import Image from "next/image";
import { getAllPhones } from "@/data/contact";

import AC from "../../public/cover/AC.webp";
import Chimney from "../../public/cover/Chimney.webp";
import fridge from "../../public/cover/fridge.webp";
import dish from "../../public/cover/dish.webp";
import oven from "../../public/cover/oven.webp";
import tv from "../../public/cover/tv.webp";
import washingMachine from "../../public/cover/washing-machine.webp";

import AC_cropped from "../../public/cover/AC_cropped.webp";
import fridge_cropped from "../../public/cover/fridge_cropped.jpg";
import washingMachine_cropped from "../../public/cover/washing-machine_cropped.jpg";
import tv_cropped from "../../public/cover/tv_cropped.jpg";
import dish_cropped from "../../public/cover/dish_cropped.webp";
import oven_cropped from "../../public/cover/oven_cropped.jpg";
import chimney_cropped from "../../public/cover/Chimney_cropped.webp";

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
    id: 2,
    title: "Television",
    label: "DISPLAY",
    description: "Expert TV repair and maintenance",
    bg: tv,
    bgMobile: tv_cropped,
  },
  {
    id: 3,
    title: "Refrigerator",
    label: "COOLING",
    description: "Reliable fridge repair solutions",
    bg: fridge,
    bgMobile: fridge_cropped,
  },
  // {
  //   id: 4,
  //   title: "Chimney",
  //   label: "VENTILATION",
  //   description: "Chimney cleaning and repair services",
  //   bg: Chimney,
  //   bgMobile: chimney_cropped,
  // },
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
  // {
  //   id: 7,
  //   title: "Dishwasher",
  //   label: "CLEANING",
  //   description: "Reliable dishwasher repair and installation",
  //   bg: dish,
  //   bgMobile: dish_cropped,
  // },
];

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
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
});

/* ═══════════════════════════════════════════════════════════════════════════
   CAROUSEL STRIP  — fixed row, active expands in-place (no scrolling)
   All 7 thumbs always visible. Active one grows wider + taller in-place.
═══════════════════════════════════════════════════════════════════════════ */
const CarouselStrip = memo(function CarouselStrip({
  active,
  goTo,
  slideDuration,
}) {
  // Fixed sizes — no scrolling, everything always visible
  const STRIP_H = 110; // height of the whole strip container
  const T_W = 52; // inactive thumb width
  const T_H = 62; // inactive thumb height (shorter, sits at bottom)
  const A_W = 360; // active card width
  const A_H = 210; // active card height (full strip height)
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
            {/* Photo */}
            <Image
              src={slide.bg}
              alt={slide.title.replace("\n", " ")}
              fill
              className="object-cover"
              sizes="170px"
              priority={i < 2}
            />

            {/* Dark overlay for inactive */}
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: isAct ? 0 : 1 }}
              transition={{ duration: 0.42 }}
              style={{ background: "rgba(144, 140, 140, 0.55)" }}
            />

            {/* ── Active-only overlays ── */}
            <AnimatePresence>
              {isAct && (
                <>
                  {/* Bottom lime tint */}
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

                  {/* Lime border — wipes bottom→top */}
                  <motion.div
                    key="border"
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                      borderRadius: RADIUS_A,
                      border: "2px solid #EE3F4A",
                      boxShadow:
                        "0 0 18px rgba(182,245,0,0.3), inset 0 0 8px rgba(182,245,0,0.06)",
                    }}
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
                    transition={{ duration: 0.6, ease: EASE_SMOOTH }}
                  />

                  {/* Title text */}
                  <motion.div
                    key="title"
                    className="absolute bottom-7 left-2.5 right-2 z-30 pointer-events-none"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ delay: 0.2, duration: 0.32 }}
                  >
                    <span
                      className="text-white font-black uppercase leading-tight block"
                      style={{
                        fontFamily: "'Montserrat',sans-serif",
                        fontSize: "0.72rem",
                        textShadow: "0 1px 6px rgba(0,0,0,0.7)",
                      }}
                    >
                      {slide.title.replace("\n", " ")}
                    </span>
                  </motion.div>

                  {/* Label pill */}
                  <motion.div
                    key="lbl"
                    className="absolute bottom-2 left-2.5 z-30"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ delay: 0.25, duration: 0.3 }}
                  >
                    <span
                      className="bg-[#EE3F4A] text-black font-bold px-2 py-[2px] rounded-full uppercase tracking-widest"
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "0.42rem",
                      }}
                    >
                      {slide.label}
                    </span>
                  </motion.div>

                  {/* Progress bar at base of active card */}
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
                      className="absolute inset-y-0 left-0 bg-[#EE3F4A]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: slideDuration, ease: "linear" }}
                    />
                  </div>
                </>
              )}
            </AnimatePresence>

            {/* Inactive: small index */}
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
   SLIDE COUNTER
═══════════════════════════════════════════════════════════════════════════ */
const SlideCounter = memo(function SlideCounter({ active, total }) {
  return (
    <div
      className="flex items-end gap-1 select-none"
      style={{ fontFamily: "'Inter',sans-serif" }}
    >
      <div className="overflow-hidden" style={{ lineHeight: 1 }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={active}
            className="text-[#EE3F4A] font-bold block"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.33, 1, 0.68, 1] }}
          >
            {String(active + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        className="text-white/28 pb-0.5"
        style={{ fontSize: "clamp(0.75rem, 1.6vw, 1rem)" }}
      >
        /{String(total).padStart(2, "0")}
      </span>
    </div>
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
      <section className="relative max-w-8xl h-[850px] mx-auto overflow-hidden select-none">
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
        <div className="relative z-30 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 pt-28 pb-44 max-w-4xl">
          {/* Category tag */}
          {/* <AnimatePresence mode="wait">
            <motion.div
              key={`tag-${active}`}
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 14 }}
              transition={{ duration: 0.48, ease: "easeOut" }}
            >
              <span className="h-px w-7 bg-[#EE3F4A]" />
              <span
                className="text-[#EE3F4A] tracking-[0.35em] uppercase"
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "0.67rem",
                }}
              >
                {current.label}
              </span>
            </motion.div>
          </AnimatePresence> */}

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
              className="text-white/62 mb-7 max-w-sm"
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "clamp(0.85rem,1.4vw,1rem)",
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
                  className="absolute inset-0 bg-[#EE3F4A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"
                  aria-hidden="true"
                />
                <span
                  className="relative z-10 flex items-center gap-1.5 bg-white/10 border border-white/20 group-hover:border-[#EE3F4A] text-white group-hover:text-black transition-colors duration-300 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 font-bold tracking-wide whitespace-nowrap"
                  style={{ fontSize: "clamp(0.8rem,1.3vw,1rem)" }}
                >
                  <span
                    className="text-[#EE3F4A] group-hover:text-black transition-colors"
                    style={{ fontSize: "0.65em" }}
                  >
                    ●
                  </span>
                  {city}: {display}
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            BOTTOM-RIGHT CAROUSEL
        ════════════════════════════════════════════════ */}
        <div className="absolute bottom-28 right-6 md:right-10 lg:right-14 z-30 hidden md:flex flex-col items-end gap-2">
          {/* Header */}
          <div className="flex items-center gap-2 mr-1">
            <span className="h-px w-5 bg-white/22" />
            <span
              className="text-white/32 uppercase tracking-[0.24em]"
              style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.57rem" }}
            >
              Services
            </span>
          </div>

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
              className={`rounded-full transition-all duration-500 ${i === active ? "bg-[#EE3F4A] w-6 h-2" : "bg-white/32 hover:bg-white/60 w-2 h-2"}`}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default memo(Home);
