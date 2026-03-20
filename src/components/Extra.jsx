"use client";
import { motion } from "framer-motion";

import { Clock, CreditCard, Gem, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";

const EASE = [0.76, 0, 0.24, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: EASE },
});

const Extra = () => {
  const promises = [
    {
      icon: Gem,
      title: "Certified\nTechnicians",
      desc: "Every technician is trained, vetted and certified to work on all major appliance brands.",
    },
    {
      icon: Clock,
      title: "Rapid\nResponse",
      desc: "We arrive within 60 minutes. Your time matters — we never keep you waiting.",
    },
    {
      icon: CreditCard,
      title: "Transparent\nPricing",
      desc: "No hidden charges. You'll know the cost upfront before any work begins.",
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden py-16">
        {/* subtle corner accents */}
        <div className="pointer-events-none absolute top-0 left-0 w-64 h-64" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-64 h-64" />

        <div className="relative z-10 px-6 lg:px-12">
          {/* Heading */}
          <SectionHeader
            tag="Our Commitment"
            titleStart="We Promise"
            highlight="You"
            description="Fast service, genuine spare parts, and reliable repairs you can trust."
          />

          {/* Promise cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {promises.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                className="group relative rounded-2xl p-8 overflow-hidden transition-all duration-400 cursor-default"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(17,27,52,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                }}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover lime fill from bottom */}
                <div
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-blue-500"
                  style={{ borderRadius: "16px" }}
                />

                {/* Icon */}
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    background: "rgba(182,245,0,0.12)",
                    border: "1px solid rgba(182,245,0,0.3)",
                  }}
                >
                  <Icon className="w-6 h-6 transition-colors duration-300 text-[black] group-hover:text-white" />
                </div>

                {/* Title */}
                <h3
                  className="relative z-10 font-black uppercase mb-3 transition-colors duration-300 text-[black] group-hover:text-white text-xl md:text-2xl"
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    lineHeight: 1.2,
                    whiteSpace: "pre-line",
                  }}
                >
                  {title}
                </h3>

                {/* Desc */}
                <p
                  className="relative z-10 leading-relaxed transition-colors duration-300 text-[black]/55 group-hover:text-white/60"
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "0.85rem",
                  }}
                >
                  {desc}
                </p>

                {/* Lime accent line bottom */}
                <div className="absolute bottom-4 left-8 right-8 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-white" />
              </motion.div>
            ))}
          </div>

          {/* Body paragraph */}
          <motion.p
            className="text-justify md:text-center mx-auto max-w-3xl text-[black]/55 leading-loose"
            style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.97rem" }}
            {...fadeUp(0.3)}
          >
            Our team arrives on time, communicates clearly, and ensures every
            repair is completed to the highest standards. With flexible
            scheduling, prompt support, and a focus on quality workmanship,{" "}
            <strong className="text-[black] font-semibold">FrostMasters</strong>{" "}
            makes appliance repair stress-free and convenient. Your comfort and
            satisfaction are our top priorities, and we strive to exceed
            expectations with every service call.
          </motion.p>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 bg-gray-400">
        {/* Lime glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px]"
          style={{
            background:
              "radial-gradient(ellipse,rgba(182,245,0,0.08) 0%,transparent 70%)",
          }}
        />
        {/* Diagonal stripe accent */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
        />

        <div className="relative z-10 px-6 lg:px-12">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {/* Left text */}
            <div className="text-center md:text-left">
              <p
                className="text-white uppercase tracking-[0.35em] mb-2"
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "0.62rem",
                }}
              >
                Ready to fix it?
              </p>
              <h3
                className="text-blue-500 font-black uppercase leading-tight"
                style={{
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "clamp(2.2rem,4vw,3.2rem)",
                }}
              >
                Book An
                <br />
                <span className="text-white">Appointment</span>
              </h3>
            </div>

            {/* Right — phone CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="tel:+916282450300"
                className="group relative overflow-hidden flex items-center gap-3 rounded-full font-bold transition-all text-white duration-300 bg-blue-500"
                style={{
                  padding: "14px 32px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "1.05rem",
                  letterSpacing: "0.05em",

                  boxShadow: "0 0 0 0 rgba(182,245,0,0.4)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 32px rgba(182,245,0,0.4)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 0 0 rgba(182,245,0,0.4)")
                }
              >
                {/* shine sweep */}
                <span
                  className="absolute inset-0 pointer-events-none translate-x-[-100%] group-hover:translate-x-[160%] transition-transform duration-500"
                  style={{
                    background:
                      "linear-gradient(105deg,transparent 35%,rgba(255,255,255,0.28) 50%,transparent 65%)",
                  }}
                />
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">+91 62824 50300</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Extra;
