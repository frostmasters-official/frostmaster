"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronRight,
  HandCoins,
  AlertTriangle,
  RotateCcw,
  UserCheck,
  RefreshCw,
} from "lucide-react";

const EASE = [0.76, 0, 0.24, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: EASE },
});

export default function TermsAndConditions() {
  const sections = [
    {
      id: 1,
      title: "Services",
      icon: FileText,
      content: (
        <p>
          We provide repair and maintenance services for home appliances such as
          washing machines, refrigerators, air conditioners, dishwashers, and
          microwave oven. Service availability may vary based on location.
        </p>
      ),
    },
    {
      id: 2,
      title: "Booking & Payments",
      icon: HandCoins,
      content: (
        <div className="space-y-4">
          <p>
            All service bookings must be made through our website or customer
            support. Service charges will be communicated before work begins.
          </p>
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 italic text-sm text-gray-500">
            "Payments can be made online or offline after service completion."
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Warranties & Liability",
      icon: AlertTriangle,
      content: (
        <div className="space-y-4">
          <p>
            We strive to deliver quality repair services. Any warranty on parts
            or service will be clearly mentioned at the time of repair.
          </p>
          <p>
            We are not responsible for damages caused by misuse, pre-existing
            issues, or third-party repairs.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Cancellation & Refunds",
      icon: RotateCcw,
      content: (
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-blue-500 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Cancellation
            </h4>
            <p className="text-sm text-gray-600">
              Appointments can be canceled or rescheduled at least{" "}
              <strong>24 hours in advance</strong>.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-blue-500 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Refunds
            </h4>
            <p className="text-sm text-gray-600">
              Refunds (if applicable) will be processed within{" "}
              <strong>7 business days</strong>.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "User Responsibilities",
      icon: UserCheck,
      content: (
        <ul className="space-y-3">
          <li className="flex gap-3">
            <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <span>
              Customers must provide accurate information while booking
              services.
            </span>
          </li>
          <li className="flex gap-3">
            <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <span>
              Ensure safe access to the appliance at the scheduled time.
            </span>
          </li>
        </ul>
      ),
    },
    {
      id: 6,
      title: "Changes to Terms",
      icon: RefreshCw,
      content: (
        <p>
          We reserve the right to update these Terms & Conditions at any time.
          Continued use of our services constitutes acceptance of the updated
          terms.
        </p>
      ),
    },
  ];

  return (
    <main className="bg-white min-h-screen text-gray-900 font-body">
      {/* ─── Hero Section ────────────────────────────────────────────────── */}
      <section className="relative pt-42 pb-20 bg-[#f7f8fa] overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px]"
          style={{
            background:
              "radial-gradient(circle at top right,rgba(182,245,0,0.10) 0%,transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-blue-500" />
              <span className="text-blue-500 uppercase tracking-[0.3em] font-bold text-[0.65rem]">
                Service Agreement
              </span>
            </div>
            <h1
              className="font-black mb-6 uppercase leading-[0.9]"
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "clamp(2rem,5vw,3rem)",
                color: "black",
              }}
            >
              Terms & <span className="text-blue-500">Conditions</span>
            </h1>
            <p className="text-gray-500 font-medium">
              Last Updated: March 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Content Sections ────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {sections.map((section, idx) => (
              <motion.section
                key={section.id}
                className="relative"
                {...fadeUp(idx * 0.05)}
              >
                <div className="flex items-start gap-6">
                  <span className="hidden sm:flex text-4xl font-black text-gray-100 font-heading select-none mt-[-8px]">
                    {String(section.id).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 font-heading flex items-center gap-3">
                      <span className="sm:hidden text-blue-500/20 font-black">
                        {section.id}.
                      </span>
                      {section.title}
                    </h2>
                    <div className="text-gray-600 leading-relaxed text-lg">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Section ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 mb-10 mx-6 rounded-[2rem] lg:rounded-[3rem]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <h2
              className="font-black mb-10 uppercase leading-[0.9]"
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "clamp(2rem,5vw,3rem)",
                color: "black",
              }}
            >
              Need <span className="text-blue-500">Support?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:info@frostmasters.com"
                      className="font-bold hover:text-blue-500"
                    >
                      info@frostmasters.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                      Phone
                    </p>
                    <a
                      href="tel:+916282450300"
                      className="font-bold hover:text-blue-500"
                    >
                      +91 6282450300
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-900 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    Head Office
                  </p>
                  <p className="font-bold text-gray-800 leading-snug mt-1">
                    FrostMasters
                    <br />
                    30/282 Pavamkulangara Jn,
                    <br />
                    Tripurathura po, Puthiyakavu,
                    <br />
                    Eranakulam, India, 682301
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
