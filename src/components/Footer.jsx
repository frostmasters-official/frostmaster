import React, { memo, useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { FaAddressBook, FaRegEnvelope } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";
import { myContext } from "@/context/myContext";
import image from "./logo.webp";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import { locations } from "@/data/locations";
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

  // On service pages: /services/washing-machine OR /services/Eranakulam/washing-machine-service-in-Eranakulam
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

  const serviceInAreaLinks = useMemo(() => {
    if (!currentServiceSlug) return [];
    const service = serviceData[currentServiceSlug];
    const title = service?.title || currentServiceSlug.replace(/-/g, " ");
    return SERVICE_CITIES.map(({ slug: citySlug, name: cityName }) => ({
      label: `${title} service in ${cityName}`,
      path: getServiceInCityPath(currentServiceSlug, citySlug),
      title: `${title} repair and service in ${cityName} | Frost Masters`,
    }));
  }, [currentServiceSlug]);

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-left items-start">
          
          {/* Column 1: Brand & Primary Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <Link href="/" className="inline-block transform hover:scale-105 transition-transform duration-300">
              <Image src={image} alt="Frost Masters Logo" className="w-48 h-auto brightness-0 invert" />
            </Link>
            
            <p className="text-white/60 leading-relaxed text-sm max-w-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Premium home appliance repair in Eranakulam & Kochi. Expert technicians at your doorstep within 60 minutes.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#EE3F4A]/50 transition-colors">
                  <FaRegEnvelope className="h-4 w-4 text-[#EE3F4A]" />
                </div>
                <Link href="mailto:info@frostmasters.com" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                  info@frostmasters.com
                </Link>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#EE3F4A]/50 transition-colors">
                  <LuPhone className="h-4 w-4 text-[#EE3F4A]" />
                </div>
                <div className="flex flex-col">
                  {getAllPhones().slice(0, 1).map(({ tel, displayFull }) => (
                    <Link key={tel} href={`tel:${tel}`} className="text-white hover:text-white transition-colors text-sm font-bold">
                      {displayFull}
                    </Link>
                  ))}
                  <span className="text-white/40 text-[10px] uppercase tracking-wider">Primary Support</span>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#EE3F4A]/50 transition-colors mt-1">
                  <FaAddressBook className="h-4 w-4 text-[#EE3F4A]" />
                </div>
                <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">
                  30/282 Pavamkulangara Jn, Tripurathura po, Puthiyakavu, Eranakulam, India - 682301
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Our Services */}
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

          {/* Column 3: Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              {filteredLinks?.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => onNavigate?.[link.key]?.()}
                    className="text-white/60 hover:text-[#EE3F4A] transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Support & Legal */}
          <div className="lg:col-span-3">
            <FooterColumn
              title="Support"
              delay={0.3}
              items={[
                // { label: "Help Center", path: "/" },
                { label: "Privacy Policy", path: "/privacy-policy" },
                { label: "Terms of Service", path: "/terms-and-conditions" },
                // { label: "Service Request", path: "/" },
              ]}
            />
          </div>
        </div>

        {/* Mid-level Action: Socials & All Locations */}
        <SocialLinks />

        {/* Footer bottom */}
        <div className="pt-10 mt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs font-medium tracking-wide">
            &copy; {currentYear} FROST MASTERS. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
            <span>DESIGNED BY</span>
            <Link
              href="mailto:sathiya.4046@gmail.com"
              className="text-white/60 hover:text-[#EE3F4A] transition-colors border-b border-white/20 hover:border-[#EE3F4A]"
            >
              SATHIYASEELAN.A
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable Footer Column
const FooterColumn = ({ title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col gap-6"
  >
    <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {title}
    </h3>
    <ul className="flex flex-col gap-4">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.path}
            className="text-white/60 hover:text-[#EE3F4A] transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default memo(Footer);
