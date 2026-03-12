"use client";

import Home from "@/components/Home";
import Services from "@/components/Services";

export default function Page() {
  return (
    <main className="min-h-screen scroll-smooth font-general">
      <Home />
      <div id="services"> 
        <Services />
      </div>
    </main>
  );
}
