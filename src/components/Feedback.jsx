"use client";

import React, { memo, useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import { myContext } from "@/context/myContext";
import SectionHeader from "./SectionHeader";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const STATIC_FEEDBACKS = [
  {
    id: 1,
    name: "Kesiya Kesiya",
    city: "Eranakulam",
    date: "March 10, 2026",
    message:
      "I've had other repair services before, but this was by far the best experience. The technician was knowledgeable, explained the issue, and gave me tips to keep my washer running smoothly.",
    stars: 5,
  },
  {
    id: 2,
    name: "Akhil Pradeep",
    city: "Eranakulam",
    date: "March 05, 2026",
    message:
      "The repair was done well and my fridge is working fine again. Took a bit longer than expected, but the technician kept me updated.",
    stars: 5,
  },
  {
    id: 3,
    name: "Sandhya Binesh",
    city: "Eranakulam",
    date: "February 28, 2026",
    message:
      "Outstanding service from start to finish. The technician arrived on time, diagnosed the issue quickly, and had my fridge working perfectly the same day.",
    stars: 5,
  },
  {
    id: 4,
    name: "Ashik",
    city: "Eranakulam",
    date: "February 15, 2026",
    message:
      "My washing machine stopped spinning, and They repaired it efficiently. Very happy with their service.",
    stars: 4,
  },
  {
    id: 5,
    name: "Balan Krishnan",
    city: "Eranakulam",
    date: "December 10, 2025",
    message:
      "I recently had my Hitachi fridge repaired, and I'm really happy with the result! The technician was professional, on time, and explained everything clearly. They diagnosed the issue quickly and fixed it without any delays. My fridge is now working perfectly cool and quiet, just like when it was new. The service was efficient and honest, and the parts used are of good quality. I didn't face any unnecessary charges, and the overall experience was smooth from start to finish. Thanks to the James for the great service, I'm very satisfied and would recommend them to anyone needing appliance repairs!",
    stars: 5,
  },
  {
    id: 6,
    name: "Aloysius M J",
    city: "Eranakulam",
    date: "February 10, 2026",
    message:
      "My washing machine was making noise and not spinning properly. The technician arrived on time, identified the issue quickly, and fixed it the same day. Very professional and reliable washing machine service.",
    stars: 5,
  },
  {
    id: 7,
    name: "Binil Jose",
    city: "Eranakulam",
    date: "February 10, 2026",
    message:
      "Quick responce,work closed on the day.",
    stars: 5,
  },
  {
    id: 6,
    name: "Elizabeth Manuel",
    city: "Eranakulam",
    date: "February 10, 2026",
    message:
      "Good service and quick response",
    stars: 5,
  },
  {
    id: 6,
    name: "RG XN FOX YT",
    city: "Eranakulam",
    date: "February 10, 2026",
    message:
      "The washing machine was repaired neatly, and the service charges were transparent. I’m fully satisfied with the quality of service provided",
    stars: 5,
  },
  {
    id: 6,
    name: "Mini K A",
    city: "Eranakulam",
    date: "February 10, 2026",
    message:
      "Quick response, excellent service",
    stars: 5,
  },
  {
    id: 6,
    name: "Anirudh Vinod",
    city: "Eranakulam",
    date: "February 10, 2026",
    message:
      "I had a water leak issue with my AC, and James was able to diagnose the issue quickly and accurately, and got it fixed in a day. I am satisfied with the quality and transparency of the work and the charges. I have previously got my washing machine repaired by James and the service experience has been the same, fully satisfied. I would definitely recommend frostmasters for your appliances' service needs.",
    stars: 5,
  },
  {
    id: 6,
    name: "Ananthu Kumar",
    city: "Eranakulam",
    date: "February 10, 2026",
    message:
      "Highly satisfied with the refrigerator repair service. The technician was very knowledgeable and explained the issue clearly before repairing it. The work was done quickly and efficiently, and the fridge is now cooling perfectly. Very trustworthy and professional service. I would definitely recommend this service to anyone who needs fridge repair.",
    stars: 5,
  },
  {
    id: 6,
    name: "Chakradhar Yammanur",
    city: "Eranakulam",
    date: "February 10, 2026",
    message:
      "Professional.. work also properly check for the issues and explained it ..",
    stars: 5,
  },
];

// ─── Google SVG logo (official colours, no external deps) ──────────────────
const GoogleLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

// ─── Star row helper ────────────────────────────────────────────────────────
const StarRow = ({ count = 5, filled, size = "text-base" }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(count)].map((_, i) => (
      <FaStar
        key={i}
        className={`${size} ${i < filled ? "text-[#FBBC05]" : "text-gray-200"}`}
      />
    ))}
  </div>
);

// ─── Google Reviews Hero Banner ─────────────────────────────────────────────
const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/s9zi21ey8nYpPepR6"; // ← replace with your actual Google Maps link

const totalReviews = STATIC_FEEDBACKS.length;
const avgRating =
  Math.round(
    (STATIC_FEEDBACKS.reduce((s, f) => s + f.stars, 0) / totalReviews) * 10
  ) / 10;

// Count how many reviews per star level
const starCounts = [5, 4, 3, 2, 1].map((star) => ({
  star,
  count: STATIC_FEEDBACKS.filter((f) => f.stars === star).length,
}));

const GoogleReviewsBanner = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="google-banner mx-auto max-w-3xl mb-14 rounded-2xl border border-gray-100 bg-white shadow-sm px-6 py-6 flex flex-col sm:flex-row items-center gap-6"
  >
    {/* Left: big score */}
    <div className="flex flex-col items-center sm:items-start gap-1 shrink-0 sm:pr-6 sm:border-r sm:border-gray-100">
      <div className="flex items-center gap-2 mb-1">
        <GoogleLogo size={22} />
        <span className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
          Google Reviews
        </span>
      </div>
      <span className="text-6xl font-extrabold text-gray-900 leading-none">
        {avgRating}
      </span>
      <StarRow filled={Math.round(avgRating)} size="text-xl" />
      <span className="text-sm text-gray-400 mt-1">
        Based on {totalReviews} reviews
      </span>
    </div>

    {/* Middle: bar chart */}
    {/* <div className="flex-1 w-full flex flex-col gap-1.5">
      {starCounts.map(({ star, count }) => {
        const pct = totalReviews ? Math.round((count / totalReviews) * 100) : 0;
        return (
          <div key={star} className="flex items-center gap-2 w-full">
            <span className="text-xs font-semibold text-gray-500 w-3 shrink-0">
              {star}
            </span>
            <FaStar className="text-[#FBBC05] text-xs shrink-0" />
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-[#FBBC05]"
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + (5 - star) * 0.06 }}
              />
            </div>
            <span className="text-xs text-gray-400 w-6 shrink-0 text-right">
              {count}
            </span>
          </div>
        );
      })}
    </div> */}

    {/* Right: CTA */}
    <div className="shrink-0 flex flex-col items-center gap-3 sm:pl-4">
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 bg-white border-2 border-[#4285F4] text-[#4285F4] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#4285F4] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <GoogleLogo size={16} />
        <span className="group-hover:text-white transition-colors duration-300">
          See all reviews
        </span>
        <svg
          className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
      <p className="text-xs text-gray-400 text-center leading-snug">
        Verified by&nbsp;
        <span className="font-semibold text-gray-500">Google</span>
      </p>
    </div>
  </motion.div>
);

// ─── Individual card (unchanged logic, tiny Google badge added) ─────────────
const FeedbackCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = item.message.length > 150;

  return (
    <div className="bg-gray-100 p-4 md:p-8 rounded-2xl shadow-md flex flex-col h-full hover:scale-105 transition-all duration-300 group cursor-default select-none">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full shrink-0 bg-blue-500/5 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
            <FaQuoteLeft className="text-blue-500 group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 font-heading line-clamp-1">
              {item.name}
            </h3>
            <p
              className="text-sm font-medium text-gray-500 uppercase tracking-wider"
              style={{ fontFamily: "'Inter',sans-serif" }}
            >
              {item.city}
            </p>
          </div>
        </div>
        {/* Google badge top-right */}
        <div className="flex items-center gap-1 bg-white rounded-lg px-2 py-1 shadow-sm border border-gray-100 shrink-0">
          <GoogleLogo size={14} />
          <span className="text-[10px] font-semibold text-gray-400 leading-none">
            Google
          </span>
        </div>
      </div>

      <div className="flex-grow flex flex-col relative">
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : isLong ? "88px" : "auto" }}
          className="relative overflow-hidden"
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <p
            className="text-gray-600 leading-relaxed text-lg italic"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            "{item.message}"
          </p>
          {!isExpanded && isLong && (
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
          )}
        </motion.div>

        {isLong && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="text-blue-500 font-semibold text-sm mt-3 focus:outline-none hover:text-blue-600 hover:underline text-left transition-colors w-max relative z-10"
          >
            {isExpanded ? "See less" : "See more"}
          </button>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-lg ${
                i < item.stars ? "text-yellow-400" : "text-gray-200"
              }`}
            />
          ))}
          <span
            className="ml-2 text-sm font-bold text-gray-900"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {item.stars}.0 / 5.0
          </span>
        </div>
        <span
          className="text-xs text-gray-400"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {item.date}
        </span>
      </div>
    </div>
  );
};

// ─── Main section ────────────────────────────────────────────────────────────
const Feedback = () => {
  const { feedbackRef } = useContext(myContext);

  return (
    <section ref={feedbackRef} className="py-16 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            tag="Testimonials"
            titleStart="What Our Customers"
            highlight="Say"
            description="Real feedback from customers who trust our repair services."
          />
        </motion.div>

        {/* ── Google Reviews Banner ── */}
        <GoogleReviewsBanner />
      </div>

      {/* Full-width Swiper */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="feedback-swiper-wrapper"
      >
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.25,
            momentumVelocityRatio: 0.4,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4500}
          grabCursor={true}
          centeredSlides={false}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3.1 },
          }}
          className="feedback-swiper !px-12 lg:!px-12"
        >
          {STATIC_FEEDBACKS.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto py-2">
              <FeedbackCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Bottom CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-col items-center gap-3"
      >
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <GoogleLogo size={16} />
          <span>All reviews are from verified Google customers</span>
        </div>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#4285F4] hover:underline hover:text-[#1a73e8] transition-colors"
        >
          View all reviews on Google Maps
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>

      <style jsx global>{`
        /* Fade edges for a polished "infinite ribbon" effect */
        .feedback-swiper-wrapper {
          position: relative;
        }
        .feedback-swiper-wrapper::before,
        .feedback-swiper-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 10;
          pointer-events: none;
        }
        .feedback-swiper-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #fcfcfc, transparent);
        }
        .feedback-swiper-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #fcfcfc, transparent);
        }

        /* Keep cards equal height inside Swiper */
        .feedback-swiper .swiper-slide {
          height: auto;
          display: flex;
          flex-direction: column;
        }
        .feedback-swiper .swiper-slide > div {
          flex: 1;
        }
      `}</style>
    </section>
  );
};

export default memo(Feedback);