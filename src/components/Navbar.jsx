"use client";

import React, { memo, useContext, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { TbMenu } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";

import { myContext } from "@/context/myContext";
import { getAllPhones } from "@/data/contact";
import serviceData from "@/components/data/serviceData";
import image from "./logo.webp";
import SocialLinks from "./SocialLinks";

/* ─── Constants & Data ─────────────────────────────────────────────────────── */
const navServices = Object.entries(serviceData).map(([slug, data]) => ({
  name: data.title,
  slug,
}));

const EASE = [0.16, 1, 0.3, 1];

/* ─── Sub-Components ───────────────────────────────────────────────────────── */

const SocialIcon = ({ icon, label, link }) => (
  <Link
    href={link}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full hover:scale-110 transition-colors duration-400 p-1"
  >
    <Image src={icon} alt={label} width={20} height={20} />
  </Link>
);

const NavLink = ({ name, onClick, isActive }) => (
  <button
    onClick={onClick}
    className="relative py-2 text-md font-semibold text-gray-900 group transition-colors duration-300 hover:text-blue-500"
  >
    {name}
    <span
      className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
    />
  </button>
);

const ServiceLink = ({ name, slug, onClick }) => (
  <Link
    href={`/services/${slug}`}
    onClick={onClick}
    className="block px-5 py-3 text-md font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50/50 transition-all duration-200 rounded-xl"
  >
    {name}
  </Link>
);

/* ─── Main Navbar Component ────────────────────────────────────────────────── */

const Navbar = () => {
  const {
    onNavigate,
    mobileMenuOpen,
    setMobileMenuOpen,
    scrolled,
    setScrolled,
    filteredLinks,
  } = useContext(myContext);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  return (
    <nav className="max-w-8xl mx-auto">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-1"
            : "bg-white py-2"
        }`}
      >
        <div className="px-6 lg:px-12">
          {/* ── TOP ROW: Contact & Socials ── */}
          <div
            className={`flex justify-between items-center border-b transition-all duration-500 ${scrolled ? "h-0 opacity-0 overflow-hidden border-transparent" : "h-10 opacity-100 border-gray-100"}`}
          >
            <div className="flex items-center gap-6">
              {getAllPhones().map(({ city, tel, display }) => (
                <Link
                  key={city}
                  href={`tel:${tel}`}
                  className="flex items-center gap-2 group"
                >
                  <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors duration-300">
                    <FaPhoneVolume className="text-lg text-blue-500" />
                  </div>
                  <span className="text-blue-500 text-lg md:text-xl font-bold">
                    Call Now : <span className="text-black">{display}</span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <SocialIcon
                icon="/fb.svg"
                label="Facebook"
                link="https://facebook.com"
              />
              <SocialIcon
                icon="/instagram.svg"
                label="Instagram"
                link="https://instagram.com"
              />
              <SocialIcon
                icon="/yt.svg"
                label="Youtube"
                link="https://youtube.com"
              />
              <SocialIcon
                icon="/linkedin.svg"
                label="LinkedIn"
                link="https://linkedin.com"
              />
            </div>
          </div>

          {/* ── BOTTOM ROW: Logo & Nav ── */}
          <div
            className={`flex justify-between items-center transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}
          >
            {/* Logo */}
            <Link href="/" className="relative flex items-center group">
              <Image
                src={image}
                alt="Frost Masters Logo"
                className={`transition-all duration-500 ${scrolled ? "w-64 h-14" : "w-64 h-14"}`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {filteredLinks?.map((link) =>
                link.key === "services" ? (
                  <div
                    key={link.key}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-2 text-md font-semibold transition-colors duration-300 ${servicesOpen ? "text-blue-500" : "text-gray-900"}`}
                    >
                      Services
                      <motion.span
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        className="text-md opacity-60"
                      >
                        ▼
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: EASE }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                        >
                          <div className="bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-2xl p-2">
                            {navServices.map((s) => (
                              <ServiceLink
                                key={s.slug}
                                {...s}
                                onClick={() => setServicesOpen(false)}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.key}
                    name={link.name}
                    onClick={() => onNavigate?.[link.key]?.()}
                  />
                ),
              )}

              {/* Action Buttons */}
              {getAllPhones().map(({ city, tel }) => (
                <div
                  key={city}
                  className="flex items-center gap-2 text-black px-3 py-1.5"
                >
                  <Link
                    href={`tel:${tel}`}
                    className="hover:scale-110 hover:bg-blue-500 hover:text-white transition-transform p-2 bg-white/20 rounded-full"
                    title={`Call ${city}`}
                  >
                    <FaPhoneVolume className="text-2xl" />
                  </Link>
                  <Link
                    href={`https://wa.me/${tel.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 hover:bg-green-500 hover:text-white transition-transform p-2 bg-white/20 rounded-full"
                    title={`WhatsApp ${city}`}
                  >
                    <FaWhatsapp className="text-2xl" />
                  </Link>
                </div>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-14 h-14 flex items-center justify-center text-gray-900 transition-all"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <TbMenu className="text-4xl cursor-pointer p-2 shadow shadow-blue-500 hover:shadow-lg rounded-full hover:scale-120 duration-600 transition text-black" />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-white text-black p-6 z-999 lg:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href="/"
                  className="flex items-center text-3xl md:text-4xl font-bold font-heading tracking-wider gap-2 md:gap-4"
                >
                  <Image
                    src={image}
                    alt="logo"
                    className="w-40 h-10 md:w-52 md:h-14"
                  />
                </Link>
              </motion.div>
              <RxCross1
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl cursor-pointer p-2 shadow shadow-blue-500 hover:shadow-lg rounded-full hover:scale-120 duration-500 transition text-black"
              />
            </div>

            <nav className="flex flex-col space-y-2">
              {filteredLinks?.map((link, index) =>
                link.key === "services" ? (
                  <div key={index} className="flex flex-col">
                    <button
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      className="text-xl py-3 flex items-center justify-between font-bold transition text-left hover:translate-x-2 duration-500 hover:text-blue-500"
                    >
                      Services
                      <span className="text-lg">
                        {mobileServicesOpen ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 space-y-1"
                        >
                          {navServices.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={() => {
                                setMobileServicesOpen(false);
                                setMobileMenuOpen(false);
                              }}
                              className="block py-2 text-lg text-black hover:translate-x-2 duration-500 transition text-left hover:text-blue-500"
                            >
                              {s.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    key={index}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate?.[link.key]?.();
                    }}
                    className="font-bold text-xl py-2 text-black hover:translate-x-2 duration-500 transition text-left hover:text-blue-500"
                  >
                    {link.name}
                  </button>
                ),
              )}
            </nav>
            <SocialLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default memo(Navbar);
