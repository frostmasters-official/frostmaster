"use client";
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, MapPin, ShieldCheck, Clock, Phone } from "lucide-react";
import { myContext } from "@/context/myContext";
import { getPhoneForCity } from "@/data/contact";

const LocationPage = ({ data, city, area }) => {
  const { updateFaqList } = useContext(myContext);

  useEffect(() => {
    if (data?.faq) {
      updateFaqList(data.faq);
    }
    return () => updateFaqList(null); // Reset to default on unmount
  }, [data, updateFaqList]);

  const cityName = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";
  const areaName = data?.name || (area && area.replace(/-/g, " ")) || "";

  if (!data) return null;

  return (
    <div className="min-h-screen selection:bg-[#EE3F4A] font-general">
      {/* Hero Section */}
      <section className="relative items-center justify-center pt-32 pb-20 px-4 md:px-10 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0" />
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[black] font-bold tracking-widest uppercase text-sm md:text-base mb-4 block">
              {city} &bull; {area.replace("-", " ")}
            </span>
            <h1 className="text-[black] text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              {data.h1}
            </h1>
            <p className="text-[black] text-lg md:text-xl leading-relaxed mb-8 text-justify">
              {data.metaDescription}
            </p>
            <a
              href={`tel:${getPhoneForCity(city).tel}`}
              className="inline-flex items-center gap-2 bg-[#EE3F4A] text-black px-8 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform duration-300"
              title={`Call ${getPhoneForCity(city).city}`}
            >
              <Phone className="w-6 h-6" />
              Call {getPhoneForCity(city).city}: {getPhoneForCity(city).display}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 px-4 md:px-10 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Intro */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="text-3xl font-bold mb-6 text-[black]">
                About Our Service
              </h2>
              <p className="text-[black] text-lg leading-relaxed whitespace-pre-wrap text-justify">
                {data.content.intro}
              </p>
            </div>

            {/* Local Relevance */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-8 h-8 text-[#EE3F4A]" />
                <h2 className="text-3xl font-bold">
                  Serving {area.replace(/-/g, " ")}
                </h2>
              </div>
              <p className="text-[black] text-lg leading-relaxed text-justify">
                {data.content.localRelevance}
              </p>
            </div>

            {/* Benefits Grid */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.content.benefits.map((benefit, idx) => {
                  const [title, desc] = benefit.replace("**", "").split(":**");
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#EE3F4A]/50 transition-colors"
                    >
                      <CheckCircle className="w-8 h-8 text-[#EE3F4A] mb-4" />
                      <h3 className="text-xl font-bold mb-2">{title}</h3>
                      <p className="text-[black] text-justify">{desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Services List */}
            <div className="bg-[#EE3F4A] text-black p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 font-main">
                Services Offered
              </h3>
              <ul className="space-y-4">
                {data.services.map((service, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-lg font-medium border-b border-black/10 pb-2 last:border-0 last:pb-0"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-black shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Need Help Fast?</h3>
              <p className="text-gray-600 mb-6 text-justify">
                Our technicians are in your area. Book now for same-day service.
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${getPhoneForCity(city).tel}`}
                  className="flex items-center justify-center gap-3 w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition"
                  title={`Call ${getPhoneForCity(city).city}`}
                >
                  <Phone className="w-5 h-5" />
                  Call {getPhoneForCity(city).city}:{" "}
                  {getPhoneForCity(city).display}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-3 w-full border border-[black] text-[black] py-3 rounded-lg font-bold hover:bg-[#EE3F4A]/10 transition"
                >
                  <Clock className="w-5 h-5" />
                  Book Online
                </Link>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="p-8 rounded-2xl bg-[black]/10 border border-[black]/20">
              <ShieldCheck className="w-12 h-12 text-[#EE3F4A] mb-4" />
              <h3 className="text-xl font-bold mb-2">Verified Professionals</h3>
              <p className="text-[black] italic text-justify">
                "{data.content.trustSignals}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO: Keyword-rich section — helps Google and users find relevant searches */}
      <section className="py-12 px-4 md:px-10 border-t border-[black]/20 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[black] mb-2 text-center">
            Appliance repair searches in {areaName}
          </h2>
          <p className="text-[black]/80 text-center mb-6 text-sm md:text-base">
            People in {areaName}, {cityName} often search for these services. We
            offer all of them at your doorstep.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {data.keywords?.map((kw, idx) => (
              <span
                key={idx}
                className="text-xs md:text-sm text-[black] bg-white border border-[black]/10 px-3 py-1.5 rounded-full shadow-sm hover:border-[#EE3F4A]/50 transition-colors"
              >
                {kw}
              </span>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-[black]/10">
            <h3 className="text-lg font-semibold text-[black] mb-4">
              Why search for appliance repair in {areaName}, {cityName}?
            </h3>
            <p className="text-[black] text-justify leading-relaxed">
              When you look for <strong>AC repair</strong>,{" "}
              <strong>washing machine service</strong>, or{" "}
              <strong>fridge repair</strong> in {areaName}, you want a trusted
              local technician who can reach you the same day. Frost Masters
              provides <strong>same-day home appliance repair</strong> for{" "}
              <strong>Air Conditioner</strong>, <strong>Washing Machine</strong>
              , <strong>Refrigerator</strong>, <strong>Microwave Oven</strong>,
              and <strong>Geyser</strong> in your locality. Our experts serve
              all major brands including LG, Samsung, Whirlpool, IFB, and
              Godrej. Book online or call{" "}
              <strong>{getPhoneForCity(city).display}</strong> (
              {getPhoneForCity(city).city}) for quick service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
