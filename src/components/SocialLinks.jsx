import Link from "next/link";
import React from "react";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { getAllPhones } from "@/data/contact";

const SocialLinks = () => {
  return (
    <div className="mt-12 pt-8 border-t border-white/10 flex lg:flex-row justify-between items-center gap-8 flex-wrap">
      <div className="flex items-center gap-5 text-xl pt-2">
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
      <div className="flex items-center gap-2">
        {getAllPhones().map(({ city, tel, display }) => (
          <Link
            key={city}
            href={`tel:${tel}`}
            className="flex items-center justify-center gap-2 bg-white text-black rounded-full px-4 py-3 font-bold text-sm shadow-md hover:bg-[#B6F500] hover:scale-105 transition duration-300"
            aria-label={`Call ${city}`}
            title={`${city}: ${display}`}
          >
            <FaPhoneVolume className="text-lg" />
            <span className="hidden sm:inline">{city}</span>
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
    className="text-black transition-colors p-2"
  >
    <Icon className="h-6 w-6" />
  </Link>
);
