"use client";

import React, { useContext } from "react";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { myContext } from "@/context/myContext";
import WhastappButton from "@/components/WhastappButton";
import AboutUs from "@/components/About";

import { useState, useEffect } from "react";
import BookingModal from "@/components/BookingModal";

export default function ClientLayout({ children }) {
  const {homeRef,feedbackRef,aboutRef,contactRef} = useContext(myContext)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 10 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="mainBody">
      <Navbar/>
      
      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <div id="home" ref={homeRef}>
        {children}
      </div>

      <div id="feedback" ref={feedbackRef}>
        <Feedback />
      </div>

      <div id="about" ref={aboutRef}>
        <AboutUs/>
        <FAQ />
      </div>

      <div id="contact" ref={contactRef}>
        <Contact/>
      </div>

      <div className="z-50 relative">
      <WhastappButton/>
      </div>
      <Footer />
      <Toaster position="top-center" reverseOrder={false}/>
    </main>
  );
}
