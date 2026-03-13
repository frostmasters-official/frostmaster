import Link from "next/link";
import React from "react";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { getAllPhones } from "@/data/contact";

const SocialLinks = () => {
  return (
    <div className="mt-16 pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
      <div className="flex items-center gap-6">
        <SocialIcon
          icon={FaFacebookF}
          label="Facebook"
          link="https://www.facebook.com/frostmasters/"
        />
        <SocialIcon
          icon={FaInstagram}
          label="Instagram"
          link="https://www.instagram.com/frostmasters.official/"
        />
        <SocialIcon
          icon={FaYoutube}
          label="Youtube"
          link="https://www.youtube.com"
        />
        <SocialIcon
          icon={FaLinkedin}
          label="LinkedIn"
          link="https://www.linkedin.com/in/frostmasters-offical-5a1082394/"
        />
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        {getAllPhones().map(({ city, tel, display }) => (
          <Link
            key={city}
            href={`tel:${tel}`}
            className="flex items-center gap-3 bg-black border border-white/10 text-white rounded-xl px-5 py-3 text-sm font-bold hover:bg-[#EE3F4A] hover:border-[#EE3F4A] hover:text-black hover:-translate-y-1 transition-all duration-300 group shadow-lg"
            aria-label={`Call ${city}`}
            title={`${city}: ${display}`}
          >
            <FaPhoneVolume className="text-lg text-white group-hover:text-black transition-colors" />
            <span className="tracking-wide uppercase text-[10px]">{city}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;

const SocialIcon = ({ icon: Icon, label, link }) => (
  <Link
    href={link}
    aria-label={label}
    className="w-11 h-11 rounded-full bg-black border border-white/10 flex items-center justify-center text-white hover:text-white hover:bg-[#EE3F4A] hover:border-[#EE3F4A]/50 transition-all duration-300 group"
  >
    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
  </Link>
);
