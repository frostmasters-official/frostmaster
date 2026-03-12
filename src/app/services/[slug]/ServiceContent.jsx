"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { myContext } from "@/context/myContext";

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
    : `${service.title} repair and service across Chennai and Coimbatore. Expert technicians, genuine parts, same-day booking.`;

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {cityName && (
          <p className="mb-6 text-center">
            <span className="inline-block px-5 py-2.5 rounded-full bg-[black] text-[#EE3F4A] text-base font-medium">
              Serving {cityName}
            </span>
          </p>
        )}
        {/* Hero: Image (left) + What we provide (right) */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden mb-12 border border-gray-100">
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
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed explanation */}
        {service.description && (
          <div className="bg-white shadow-md rounded-2xl p-6 md:p-10 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-heading">
              About {service.title} Repair & Service
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {service.description}
            </p>
          </div>
        )}

        {/* Service-specific FAQ */}
        {hasFaq && (
          <div className="bg-white shadow-md rounded-2xl p-6 md:p-10 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-heading">
              {service.title} – Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {service.faq.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between px-5 py-4 text-left bg-[#EE3F4A] text-black font-medium text-base md:text-lg hover:bg-[#a5e000] transition-colors"
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="pr-4">{item.question}</span>
                    <span className="text-xl shrink-0">
                      {openFaqIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-5 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* City-based keywords for SEO (visible, useful for users) */}
        {hasCityKeywords && (
          <div className="bg-white shadow-md rounded-2xl p-6 md:p-10 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-heading">
              We Serve {service.title} Repair In
            </h2>
            <p className="text-gray-600 mb-6">
              Book {service.title.toLowerCase()} repair or service in your city.
              Popular searches:
            </p>
            <div className="space-y-6">
              {service.cityKeywords.map(({ city, keywords }, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold text-[black] mb-2">
                    {city}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-600 text-sm">
              Feedback and contact are the same across all services—scroll down
              for customer reviews and to get in touch.
            </p>
          </div>
        )}

        {/* CTA: Feedback & Contact are below (in layout) */}
        <div className="text-center py-6">
          <p className="text-gray-600 mb-4">
            Scroll down for customer feedback and to contact us for{" "}
            {service.title.toLowerCase()} repair.
          </p>
          <button
            onClick={() => onNavigate?.["feedback"]?.()}
            className="mr-3 px-5 py-2 rounded-full border-2 border-[black] text-[black] hover:bg-[#EE3F4A] hover:border-[#EE3F4A] hover:text-black transition font-semibold"
          >
            See Feedback
          </button>
          <button
            onClick={() => onNavigate?.["contact"]?.()}
            className="px-5 py-2 rounded-full bg-[#EE3F4A] text-black font-semibold hover:bg-black hover:text-white transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
