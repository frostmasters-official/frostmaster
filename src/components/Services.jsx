"use client";
import React, { memo, useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import serviceData from "./data/serviceData";
import { myContext } from "@/context/myContext";

const Services = () => {
  const {servicesRef} = useContext(myContext)
  return (
    <section ref={servicesRef} className="">
      <div className="container mx-auto px-4 w-screen">
        <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-wider text-center my-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {Object.entries(serviceData).map(([slug, service], index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition hover:scale-105 duration-500"
            >
              <Link href={`/services/${slug}`} className="block h-full">
                <div className="h-[400px] flex flex-col gap-4 items-center justify-center">
                  <div className="w-full h-full relative rounded overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width="auto"
                      height="auto"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
