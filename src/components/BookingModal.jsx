"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Contact from "./Contact";

const BookingModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          {/* WRAPPER (IMPORTANT) */}
          <div className="relative w-full max-w-2xl">
            {/* CLOSE BUTTON — OUTSIDE CARD */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="
                absolute
                -top-6
                left-1/2
                -translate-x-1/2
                z-50
                p-2.5
                rounded-full
                bg-gray-100
                border-4 border-gray-300
                shadow-xl
                hover:bg-gray-200
                transition-colors
              "
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>

            {/* MODAL CARD */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                bg-white
                rounded-2xl
                shadow-2xl
                max-h-[90vh]
                overflow-y-auto
              "
            >
              {/* CONTENT */}
              <div className="pt-12 pb-6 px-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#111B34]">
                    Book Your Service Now!
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Get expert appliance repair in minutes.
                  </p>
                </div>

                <Contact isModal={true} />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
