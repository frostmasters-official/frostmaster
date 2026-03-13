"use client";

import Home from "@/components/Home";
import Services from "@/components/Services";
import { useContext } from "react";

import Feedback from "@/components/Feedback";
import AboutUs from "@/components/About";
import FAQ from "@/components/FAQ";
import { myContext } from "@/context/myContext";

export default function Page() {
  const { homeRef, servicesRef, feedbackRef, aboutRef } = useContext(myContext);
  return (
    <main className="min-h-screen scroll-smooth font-general">
      <div id="home" ref={homeRef}>
        <Home />
      </div>
      <div id="services" ref={servicesRef}>
        <Services />
      </div>

      <div id="feedback" ref={feedbackRef}>
        <Feedback />
      </div>

      <div id="about" ref={aboutRef}>
        <AboutUs />
        <FAQ />
      </div>
    </main>
  );
}
