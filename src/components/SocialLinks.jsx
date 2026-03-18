import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaPhoneVolume } from "react-icons/fa6";
import { getAllPhones } from "@/data/contact";

const socials = [
  {
    icon: "/fb.svg",
    label: "Facebook",
    link: "https://www.facebook.com/frostmasters/",
  },
  {
    icon: "/instagram.svg",
    label: "Instagram",
    link: "https://www.instagram.com/frostmasters.official/",
  },
  { icon: "/yt.svg", label: "Youtube", link: "https://www.youtube.com" },
  {
    icon: "/linkedin.svg",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/frostmasters-offical-5a1082394/",
  },
];

const SocialLinks = () => {
  return (
    <div className="mt-16 pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
      {/* Social Media Icons */}
      <div className="flex items-center gap-6">
        {socials.map((platform) => (
          <SocialIcon key={platform.label} {...platform} />
        ))}
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {getAllPhones().map(({ city, tel, display }) => {
          const cleanTel = tel.replace(/[^0-9]/g, "");

          return (
            <div key={city} className="flex gap-4">
              <Link
                href={`tel:${tel}`}
                className="flex items-center gap-3 bg-gray-300 border border-white/10 text-black rounded-xl px-5 py-3 text-sm font-bold hover:bg--blue-500 hover:border--blue-500 hover:text-black hover:-translate-y-1 transition-all duration-300 group shadow-lg"
                aria-label={`Call ${city}`}
                title={`${city}: ${display}`}
              >
                <FaPhoneVolume className="text-lg text-black group-hover:text-black transition-colors" />
                <span className="tracking-wide uppercase text-[10px]">
                  Call Now
                </span>
              </Link>

              <Link
                href={`https://wa.me/${cleanTel}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-300 border border-white/10 text-black rounded-xl px-5 py-3 text-sm font-bold hover:bg-green-500 hover:border-green-500 hover:text-black hover:-translate-y-1 transition-all duration-300 group shadow-lg"
                aria-label={`WhatsApp ${city}`}
                title={`${city}: ${display}`}
              >
                <FaWhatsapp className="text-lg text-black group-hover:text-black transition-colors" />
                <span className="tracking-wide uppercase text-[10px]">
                  WhatsApp
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;

const SocialIcon = ({ icon, label, link }) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className=" rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
  >
    <Image
      src={icon}
      alt={label}
      width={40}
      height={40}
      className="group-hover:scale-110 transition-transform"
    />
  </Link>
);
