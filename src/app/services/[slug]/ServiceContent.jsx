"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { myContext } from "@/context/myContext";
import Extra from "../../../components/Extra";

export default function ServiceContent({ service, cityName }) {
  const { onNavigate } = useContext(myContext);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const hasFaq = Array.isArray(service.faq) && service.faq.length > 0;
  const hasCityKeywords =
    Array.isArray(service.cityKeywords) && service.cityKeywords.length > 0;

  // Short intro from description (first sentence or ~180 chars) for hero
  const shortIntro = service.description
    ? service.description.split(/[.!?]/)[0].trim() +
      (service.description.includes(".") ? "." : "")
    : `${service.title} repair and service across Eranakulam and Eranakulam. Expert technicians, genuine parts, same-day booking.`;

  return (
    <section className="min-h-screen pt-52 bg-gradient-to-b from-gray-50 to-white">
      <div className="">
        {cityName && (
          <p className="mb-6 text-center">
            <span className="inline-block px-5 py-2.5 rounded-full bg-[black] text-[#EE3F4A] text-base font-medium">
              Serving {cityName}
            </span>
          </p>
        )}
        {/* Hero: Image (left) + What we provide (right) */}
        <div className="max-w-7xl mx-auto px-6 bg-white shadow-xl rounded-2xl overflow-hidden mb-12 border border-gray-100">
          <div className="flex flex-col md:flex-row min-h-[420px] md:min-h-[480px]">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 relative min-h-[320px] md:min-h-0">
              <figure className="relative w-full h-full min-h-[320px] md:min-h-[480px]">
                <Image
                  src={service.image}
                  alt={`${service.title} repair and service`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
            </div>

            {/* Right: Service title + what we provide + CTA */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-14">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight font-heading mb-4 md:mb-6">
                {service.title} Repair & Service
                {cityName ? ` in ${cityName}` : ""}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-xl">
                {shortIntro}
              </p>
              <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-10">
                We provide expert {service.title.toLowerCase()} repair,
                maintenance, and installation. All major brands, genuine parts,
                transparent pricing.
              </p>
              <div>
                <button
                  onClick={() => onNavigate?.["contact"]?.()}
                  className="px-8 py-4 rounded-full bg-[#EE3F4A] text-black font-bold text-lg md:text-xl hover:bg-[black] hover:text-white transition duration-300 shadow-lg hover:shadow-xl inline-block"
                  style={{ fontFamily: "'Montserrat',sans-serif" }}
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed explanation */}
        {service.description && (
          <div className="bg-white shadow-md rounded-2xl p-6 md:p-10 mb-10 max-w-7xl mx-auto  px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-heading">
              About {service.title} Repair & Service
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {service.description}
            </p>
          </div>
        )}

        <Extra />
      </div>
    </section>
  );
}
