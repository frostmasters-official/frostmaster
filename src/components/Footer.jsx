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

  // On service pages: /services/washing-machine OR /services/chennai/washing-machine-service-in-chennai
  const currentServiceSlug = useMemo(() => {
    if (!pathname || !pathname.startsWith("/services/")) return null;
    const segments = pathname.split("/").filter(Boolean);
    // ["services", "washing-machine"] or ["services", "chennai", "washing-machine-service-in-chennai"]
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
    <footer className="backdrop-blur-md bg-white text-black py-14 border-t border-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 text-left items-start">
          {/* Column 1: Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2"
          >
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                className="flex items-center text-xl md:text-2xl font-bold font-heading tracking-wider gap-2 md:gap-4"
              >
                <Image
                  src={image}
                  alt="logo"
                  className="w-40 h-10 md:w-52 md:h-12"
                />
              </Link>
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-justify">
                  Trusted home appliance repair in Chennai &amp; Coimbatore.
                  Call your city number below.
                </div>
                <div className="flex items-start gap-4">
                  <FaRegEnvelope className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
                  <Link
                    href="mailto:info@frostmasters.com"
                    className="hover:text-primary transition-colors"
                  >
                    info@frostmasters.com
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  {getAllPhones().map(({ city, tel, displayFull }) => (
                    <div key={city} className="flex items-start gap-4">
                      <LuPhone className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
                      <Link
                        href={`tel:${tel}`}
                        className="hover:text-primary transition-colors"
                        title={`Call ${city}`}
                      >
                        {/* <span className="font-medium text-black">
                          {city}:
                        </span>{" "} */}
                        {displayFull}
                      </Link>
                    </div>
                  ))}
                </div>
                {/* Address */}
                <div className="flex items-start gap-4">
                  <FaAddressBook className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
                  <Link
                    href="mailto:info@frostmasters.com"
                    className="hover:text-primary transition-colors"
                  >
                    30/282 Pavamkulangara Jn, <br /> Tripurathura po,
                    Puthiyakavu,
                    <br /> Eranakulam, India, 682301
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <FooterColumn title="" delay={0.2} items={[]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col gap-4 h-full">
              <h2 className="font-semibold text-lg text-black">Quick Links</h2>
              <ul className="flex flex-col items-start space-y-3">
                {filteredLinks?.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => onNavigate?.[link.key]?.()}
                    className="cursor-pointer text-black hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </ul>
            </div>
          </motion.div>

          <FooterColumn
            title="Our Services"
            delay={0.2}
            items={[
              {
                label: "Washing Machine Repair",
                path: "/services/washing-machine",
                title: "Washing machine service and repair",
              },
              {
                label: "Refrigerator Repair",
                path: "/services/refrigerator",
                title: "Fridge service and repair",
              },
              {
                label: "AC Repair",
                path: "/services/air-conditioner",
                title: "AC service and repair",
              },
              {
                label: "Microwave Oven",
                path: "/services/microwave-oven",
                title: "Microwave oven repair",
              },
              // {
              //   label: "Dishwasher",
              //   path: "/services/dishwasher",
              //   title: "Dishwasher repair",
              // },
              // {
              //   label: "Chimney",
              //   path: "/services/chimney",
              //   title: "Chimney cleaning and repair",
              // },
            ]}
          />

          {serviceInAreaLinks.length > 0 && (
            <FooterColumn
              title="Service in your area"
              delay={0.25}
              items={serviceInAreaLinks}
            />
          )}

          <FooterColumn
            title="Support"
            delay={0.3}
            items={[
              // { label: "Help", path: "/" },
              { label: "Privacy Policy", path: "/privacy-policy" },
              { label: "Terms & Conditions", path: "/terms-and-conditions" },
            ]}
          />
        </div>

        <SocialLinks />

        {/* Footer bottom */}
        <hr className="border-white/10 mt-8 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-4">
          <div className="text-sm">
            &copy; {currentYear} Frost Masters. All rights reserved.
          </div>
          <div>
            For work :{" "}
            <Link
              className="hover:text-[#EE3F4A] transition-colors"
              href="mailto:sathiya.4046@gmail.com"
            >
              Sathiyaseelan.A
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
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex flex-col gap-4 h-full">
      <h2 className="font-semibold text-lg text-black">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              title={item.title || item.label}
              className="text-black hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default memo(Footer);
