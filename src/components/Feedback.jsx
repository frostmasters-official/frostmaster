"use client";

import React, { memo, useContext } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import { myContext } from "@/context/myContext";

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
];

const FeedbackCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300 group"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 rounded-full bg-[#EE3F4A]/5 flex items-center justify-center group-hover:bg-[#EE3F4A] transition-colors duration-300">
          <FaQuoteLeft className="text-[#EE3F4A] group-hover:text-white transition-colors duration-300" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 font-heading">
            {item.name}
          </h3>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            {item.city}
          </p>
        </div>
      </div>
      {/* <span className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
        {item.date}
      </span> */}
    </div>

    <p className="text-gray-600 leading-relaxed flex-grow text-lg italic">
      "{item.message}"
    </p>

    <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-lg ${
            i < item.stars ? "text-yellow-400" : "text-gray-200"
          }`}
        />
      ))}
      <span className="ml-2 text-sm font-bold text-gray-900">
        {item.stars}.0 / 5.0
      </span>
    </div>
  </motion.div>
);

const Feedback = () => {
  const { feedbackRef } = useContext(myContext);

  return (
    <section
      ref={feedbackRef}
      className="py-24 lg:py-32 bg-[#fcfcfc] overflow-hidden"
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#EE3F4A]/10 text-[#EE3F4A] text-sm font-bold uppercase tracking-widest mb-4"
          >
            Testimonials
          </motion.div>
          <h2
            className="text-[black] font-black capitalize leading-[0.9] py-10 text-center"
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: "clamp(2rem,5vw,3rem)",
            }}
          >
            What Our Customers Say
          </h2>
          {/* <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real feedback from homeowners in Eranakulam and Eranakulam who trust
            Frost Masters for their appliance needs.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STATIC_FEEDBACKS.map((item, index) => (
            <FeedbackCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Feedback);
