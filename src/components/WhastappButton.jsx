"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import whatsapp from "../../public/images/whatsapp.svg";
import { getPhoneForCity } from "@/data/contact";

const WhastappButton = () => {
  const pathname = usePathname() || "";
  const citySlug = pathname.startsWith("/Eranakulam")
    ? "Eranakulam"
    : "Eranakulam";
  const phone = getPhoneForCity(citySlug);
  const whatsappUrl = `https://wa.me/${phone.tel.replace(/\+/g, "")}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-50"
      title={`WhatsApp ${phone.city}`}
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
        <Image
          src={whatsapp}
          width={50}
          height={50}
          alt="WhatsApp"
          className="relative"
        />
      </div>
    </Link>
  );
};

export default WhastappButton;
