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
  // Duplicates ensure the loop has enough slides to look seamless at larger breakpoints
  {
    id: 5,
    name: "Balan Krishnan",
    city: "Eranakulam",
    date: "December 10, 2025",
    message:
      "I recently had my Hitachi fridge repaired, and I’m really happy with the result! The technician was professional, on time, and explained everything clearly. They diagnosed the issue quickly and fixed it without any delays. My fridge is now working perfectly cool and quiet, just like when it was new. The service was efficient and honest, and the parts used are of good quality. I didn’t face any unnecessary charges, and the overall experience was smooth from start to finish. Thanks to the James for the great service, I’m very satisfied and would recommend them to anyone needing appliance repairs!",
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
];

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

      <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-1">
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
    </div>
  );
};

const Feedback = () => {
  const { feedbackRef } = useContext(myContext);

  return (
    <section ref={feedbackRef} className="py-16 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
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
      </div>

      {/* Full-width Swiper (outside padded container for edge-to-edge feel) */}
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