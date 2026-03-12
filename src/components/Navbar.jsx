"use client";

import React, { memo, useContext, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { TbMenu } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { myContext } from "@/context/myContext";
import image from "./logo.webp";
import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import SocialLinks from "./SocialLinks";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { getAllPhones } from "@/data/contact";
import serviceData from "@/components/data/serviceData";

const navServices = Object.entries(serviceData).map(([slug, data]) => ({
  name: data.title,
  slug,
}));

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
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Navbar */}
      <header
        className={`text-white fixed top-0 left-0 right-0 z-50 bg-white border-b border-white/10 shadow-xl transition-[height,padding] duration-300 ease-in-out will-change-[height,transform] ${
          scrolled ? "h-26 py-1" : "h-30 py-2"
        }`}
      >
        <div className="container w-full mx-auto px-4 h-full flex flex-col">
          {/* 🔹 Top Row: Contact + Location + Socials */}
          <div className="flex justify-between items-center text-sm md:text-base py-1 border-b border-white/10 mx-2">
            {/* Left: Contact by city */}
            <div className="flex items-center gap-3 md:gap-6 flex-wrap">
              {getAllPhones().map(({ city, tel, display }) => (
                <Link
                  key={city}
                  href={`tel:${tel}`}
                  className="flex items-center gap-2 font-bold text-black transition"
                  title={`Call ${city}`}
                >
                  <FaPhoneVolume className="text-black flex-shrink-0" />
                  <span className="whitespace-nowrap">
                    <span className="text-black font-medium">{city}:</span>{" "}
                    {display}
                  </span>
                </Link>
              ))}
            </div>

            {/* Right: Social Links */}
            <div className="flex items-center gap-2">
              <SocialIcon
                icon={FaFacebookF}
                label="Facebook"
                link="https://www.facebook.com/profile.php?id=61579389825163"
              />
              <SocialIcon
                icon={FaInstagram}
                label="Instagram"
                link="https://www.instagram.com/Frost Masters/"
              />
              <SocialIcon
                icon={FaYoutube}
                label="Youtube"
                link="https://www.youtube.com/channel/UCwRXCFhCSGczfE7tA5mos5g"
              />
              <SocialIcon
                icon={FaLinkedin}
                label="LinkedIn"
                link="https://www.linkedin.com/in/Frost Masters-Frost Masters-751672380/"
              />
            </div>
          </div>

          {/* 🔹 Bottom Row: Logo + Navigation */}
          <div className="flex justify-between items-center mx-2 h-full border-t border-red-800/20">
            {/* Logo */}
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
                  className="w-40 h-10 md:w-52 md:h-12"
                />
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6 ps-6 py-2">
              {filteredLinks?.map((link, index) =>
                link.key === "services" ? (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((o) => !o)}
                      className="cursor-pointer text-sm lg:text-base font-medium text-black transition duration-400 inline-flex items-center gap-3 focus:outline-none focus:text-[#B6F500]"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-label="Open services menu"
                    >
                      Services
                      <span className="text-xs opacity-80">
                        {servicesOpen ? "▲" : "▼"}
                      </span>
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-2 min-w-[220px] z-50"
                        >
                          <div className="border border-white/20 rounded-lg shadow-xl py-2">
                            {navServices.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="block px-4 py-2.5 text-black transition font-medium"
                                title={`${s.name} repair in Chennai & Coimbatore`}
                                onClick={() => setServicesOpen(false)}
                              >
                                {s.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    key={index}
                    onClick={() => onNavigate?.[link.key]?.()}
                    className=" hover:scale-105 cursor-pointer text-sm lg:text-base font-medium text-black transition duration-400"
                  >
                    {link.name}
                  </button>
                ),
              )}
              <div className="flex items-center gap-2">
                {getAllPhones().map(({ city, tel, display }) => (
                  <Link
                    key={city}
                    href={`tel:${tel}`}
                    className="flex items-center justify-center gap-2 bg-white text-black rounded-full px-3 py-2 font-bold text-xs lg:text-sm shadow-md hover:bg-[#B6F500] hover:scale-105 transition duration-300"
                    aria-label={`Call ${city}`}
                    title={`${city}: ${display}`}
                  >
                    <FaPhoneVolume className="text-lg" />
                    <span className="hidden sm:inline">{city}</span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Hamburger Menu */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle_Menu"
            >
              <TbMenu className="text-4xl text-black  hover:scale-110 transition duration-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div
        className={`${scrolled ? "h-16" : "h-20"} transition-all duration-300`}
      />

      {/* Mobile Menu */}
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
                    className="w-40 h-12 md:w-52 md:h-16"
                  />
                </Link>
              </motion.div>
              <RxCross1
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl cursor-pointer p-2 shadow shadow-black hover:shadow-md rounded-full hover:scale-120 duration-500 transition text-black"
              />
            </div>

            <nav className="flex flex-col space-y-2">
              {filteredLinks?.map((link, index) =>
                link.key === "services" ? (
                  <div key={index} className="flex flex-col">
                    <button
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      className="text-xl py-3 flex items-center justify-between hover:text-black transition text-left"
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
                              className="block py-2 text-lg text-black"
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
                    className="text-xl py-3 text-black hover:translate-x-2 duration-500 transition text-left"
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
    </>
  );
};

export default memo(Navbar);

const SocialIcon = ({ icon: Icon, label, link }) => (
  <Link
    href={link}
    aria-label={label}
    className="text-black transition-color px-1"
  >
    <Icon className="h-4 w-4" />
  </Link>
);
