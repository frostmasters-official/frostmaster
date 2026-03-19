"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Mail, Phone, MapPin, Globe, ChevronRight } from "lucide-react";

const EASE = [0.76, 0, 0.24, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: EASE },
});

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: (
        <p>
          Welcome to <strong>FrostMasters</strong>, we respect your privacy and
          are committed to protecting your personal information. This Privacy
          Policy explains what information we collect, how we use it, with whom
          we share it, and your choices regarding that information. By accessing
          or using our Site and services, you consent to the practices described
          in this Privacy Policy.
        </p>
      ),
    },
    {
      id: 2,
      title: "Information We Collect",
      content: (
        <div className="space-y-4">
          <p>
            We collect information when you interact with our services,
            including but not limited to:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-blue-500 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Personal Information
              </h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Full Name</li>
                <li>• Email Address</li>
                <li>• Phone Number</li>
                <li>• Service Address</li>
                <li>• Device details (brand, model, complaints)</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-blue-500 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Automatically Collected Data
              </h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• IP address & Browser type</li>
                <li>• Pages visited and time spent</li>
                <li>• Referral/exit pages</li>
                <li>• Device type and operating system</li>
                <li>• Date/time stamps</li>
              </ul>
            </div>
          </div>
          <p className="mt-4">
            <strong>Cookies and Tracking:</strong> We use cookies and similar
            technologies to enhance user experience, remember preferences, and
            analyze traffic. You may disable cookies via your browser settings.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "How We Use Your Information",
      content: (
        <ul className="space-y-3">
          {[
            {
              label: "Service Delivery",
              desc: "To respond to your inquiries and provide repair services.",
            },
            {
              label: "Communication",
              desc: "To send confirmations, updates, inquiries, support, and promotional messages.",
            },
            {
              label: "Personalization",
              desc: "Tailor content and improve user experience.",
            },
            {
              label: "Analytics",
              desc: "Analyze usage to improve services and the Site.",
            },
            {
              label: "Security & Compliance",
              desc: "Protect against fraud and enforce terms.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>
                <strong>{item.label}:</strong> {item.desc}
              </span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 4,
      title: "How We Share Your Information",
      content: (
        <div className="space-y-4">
          <p>
            We will not sell your personal information. We may share information
            in the following cases:
          </p>
          <div className="space-y-3">
            <p>
              • <strong>Service Providers:</strong> With trusted third-party
              providers who assist in operating the Site or providing services.
            </p>
            <p>
              • <strong>Legal Requirements:</strong> If required by law, to
              protect rights, safety, or property.
            </p>
            <p>
              • <strong>Business Transfers:</strong> In the event of a merger,
              sale, or reorganization.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Data Security",
      content: (
        <p>
          We use reasonable technical and administrative measures to protect
          personal information from unauthorized access, alteration, disclosure,
          or destruction. However, no internet-based system can be fully secure.
        </p>
      ),
    },
    {
      id: 6,
      title: "Your Rights and Choices",
      content: (
        <div className="space-y-3">
          <p>Depending on your location, you may have rights such as:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Accessing your personal information",
              "Correcting or updating information",
              "Deleting your data",
              "Opting out of marketing",
            ].map((right, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg"
              >
                <Shield className="w-4 h-4 text-blue-500" />
                {right}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 7,
      title: "Third-Party Links",
      content: (
        <p>
          Our Site may contain links to external websites. We are not
          responsible for the privacy practices of those websites, and we
          encourage you to review their policies.
        </p>
      ),
    },
    {
      id: 8,
      title: "Changes to this Policy",
      content: (
        <p>
          We may update this Privacy Policy occasionally to reflect changes in
          the law or our practices. We will post the updated date at the top.
          Your continued use of the Site after changes means you accept the
          revised policy.
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
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="text-blue-500 uppercase tracking-[0.3em] font-bold text-[0.65rem]">
                Privacy Protected
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
              Privacy <span className="text-blue-500">Policy</span>
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
              Contact <span className="text-blue-500">Us</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                      Website
                    </p>
                    <a
                      href="https://www.frostmasters.com"
                      className="font-bold hover:text-blue-500"
                    >
                      www.frostmasters.com
                    </a>
                  </div>
                </div>
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
                    Office Address
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
