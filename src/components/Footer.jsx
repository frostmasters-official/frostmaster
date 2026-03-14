"use client"

import React, { memo, useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { FaAddressBook, FaRegEnvelope } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";
import { myContext } from "@/context/myContext";
import image from "./logo.webp";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import {
  getAllPhones,
  SERVICE_CITIES,
  getServiceInCityPath,
  getServiceInAreaPath,
  parseServiceInCitySlug,
} from "@/data/contact";
import serviceData from "@/components/data/serviceData";

const Footer = () => {
  const { filteredLinks, onNavigate, pathname } = useContext(myContext);
  const currentYear = new Date().getFullYear();

  const currentServiceSlug = useMemo(() => {
    if (!pathname || !pathname.startsWith("/services/")) return null;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 2) {
      const slug = segments[1];
      return serviceData[slug] ? slug : null;
    }
    if (segments.length === 3) {
      const parsed = parseServiceInCitySlug(segments[2]);
      return parsed && serviceData[parsed.serviceSlug]
        ? parsed.serviceSlug
        : null;
    }
    return null;
  }, [pathname]);

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-14 text-left items-start">

          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <Link
              href="/"
              className="inline-block transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={image}
                alt="Frost Masters Logo"
                className="w-64 h-14 brightness-0 invert"
              />
            </Link>

            <p
              className="text-white/70 leading-relaxed text-base max-w-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Premium home appliance repair in Eranakulam & Kochi. Expert
              technicians at your doorstep within 60 minutes.
            </p>

            <div className="space-y-5">

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#EE3F4A]/50 transition-colors">
                  <FaRegEnvelope className="h-5 w-5 text-[#EE3F4A]" />
                </div>

                <Link
                  href="mailto:info@frostmasters.com"
                  className="text-white/80 hover:text-white transition-colors text-base font-medium"
                >
                  info@frostmasters.com
                </Link>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#EE3F4A]/50 transition-colors">
                  <LuPhone className="h-5 w-5 text-[#EE3F4A]" />
                </div>

                <div className="flex flex-col">
                  {getAllPhones()
                    .slice(0, 1)
                    .map(({ tel, displayFull }) => (
                      <Link
                        key={tel}
                        href={`tel:${tel}`}
                        className="text-white hover:text-white transition-colors text-lg font-bold"
                      >
                        {displayFull}
                      </Link>
                    ))}

                  <span className="text-white/50 text-sm uppercase tracking-wider">
                    Primary Support
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#EE3F4A]/50 transition-colors mt-1">
                  <FaAddressBook className="h-5 w-5 text-[#EE3F4A]" />
                </div>

                <p className="text-white/70 text-base leading-relaxed max-w-[280px]">
                  30/282 Pavamkulangara Jn, Tripurathura po, Puthiyakavu,
                  Eranakulam, India - 682301
                </p>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <div className="lg:col-span-2">
            <FooterColumn
              title="Our Services"
              delay={0.1}
              items={[
                { label: "Washing Machine", path: "/services/washing-machine" },
                { label: "Refrigerator", path: "/services/refrigerator" },
                { label: "Air Conditioner", path: "/services/air-conditioner" },
                { label: "Microwave Oven", path: "/services/microwave-oven" },
                { label: "Dishwasher Repair", path: "/services/dishwasher" },
              ]}
            />
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <h3
              className="text-[#EE3F4A] font-bold uppercase tracking-[0.18em] text-md"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Quick Links
            </h3>

            <ul className="flex flex-col gap-4">
              {filteredLinks?.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => onNavigate?.[link.key]?.()}
                    className="text-white/70 hover:text-[#EE3F4A] transition-all duration-300 text-base font-medium hover:translate-x-1 inline-block text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <div className="lg:col-span-3">
            <FooterColumn
              title="Support"
              delay={0.3}
              items={[
                { label: "Privacy Policy", path: "/privacy-policy" },
                { label: "Terms of Service", path: "/terms-and-conditions" },
              ]}
            />
          </div>
        </div>

        <SocialLinks />

        {/* Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-white/50 text-sm font-medium tracking-wide">
            &copy; {currentYear} FROST MASTERS. ALL RIGHTS RESERVED.
          </p>

          
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col gap-6"
  >
    <h3
      className="text-[#EE3F4A] font-bold uppercase tracking-[0.18em] text-md"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {title}
    </h3>

    <ul className="flex flex-col gap-4">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.path}
            className="text-white/70 hover:text-[#EE3F4A] transition-all duration-300 text-base font-medium hover:translate-x-1 inline-block"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default memo(Footer);