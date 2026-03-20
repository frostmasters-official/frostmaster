// import { myContext } from "@/context/myContext";
// import React, { memo, useContext } from "react";
// import SectionHeader from "./SectionHeader";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";

// const complaintsOptions = {
//   Refrigerator: [
//     "Cooling Problem",
//     "Over Freezing",
//     "Water Leakage",
//     "Door Issue",
//     "Others",
//   ],
//   "Air Conditioner": [
//     "Cooling Issue",
//     "Water Leakage",
//     "Noise Issue",
//     "Not Turning On",
//     "Others",
//   ],
//   "Washing Machine": [
//     "Spinning Issue",
//     "Water Leakage",
//     "Draining Issue",
//     "Noise Issue",
//     "Others",
//   ],
//   "Microwave oven": [
//     "Heating Problem",
//     "Turntable Not Working",
//     "Door Issue",
//     "Noise Issue",
//     "Others",
//   ],
// };

// const Contact = ({ isModal = false }) => {
//   const {
//     contact,
//     contactRef,
//     errors,
//     handleContactSubmit,
//     handleContactChange,
//     handleComplaintToggle,
//     contactSubmitting,
//   } = useContext(myContext);

//   const cityOptions = ["Kochi", "Trissur", "Kottayam"];

//   const contactDetails = [
//     {
//       icon: <Phone className="w-6 h-6 text-blue-500" />,
//       title: "Call Us",
//       value: "+91 6282450300",
//       link: "tel:+916282450300",
//     },
//     {
//       icon: <Mail className="w-6 h-6 text-blue-500" />,
//       title: "Email Us",
//       value: "info@frostmasters.com",
//       link: "mailto:info@frostmasters.com",
//     },
//     {
//       icon: <MapPin className="w-6 h-6 text-blue-500" />,
//       title: "Visit Us",
//       value: "30/282 Pavamkulangara Jn, Puthiyakavu, Eranakulam, India - 682301",
//       link: "https://maps.app.goo.gl/YourActualMapLink", 
//     },
//   ];

//   return (
//     <section
//       ref={!isModal ? contactRef : null}
//       className={`${isModal ? "py-4" : "py-16"} bg-gray-50/50`}
//     >
//       <div className="container mx-auto px-4 lg:px-8">
//         {!isModal && (
//           <SectionHeader
//             tag="Get in Touch"
//             titleStart="Book Your"
//             highlight="Repair"
//             description="Same-day service · 30-day warranty · Expert technicians"
//           />
//         )}

//         <div
//           className={`grid grid-cols-1 ${
//             isModal ? "lg:grid-cols-1" : "lg:grid-cols-12"
//           } gap-8 lg:gap-12 mt-10`}
//         >
//           {/* Left Column: Contact Details & Map */}
//           {!isModal && (
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="lg:col-span-12 xl:col-span-5 space-y-8"
//             >
//               <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                   Contact Information
//                 </h3>

//                 <div className="space-y-6">
//                   {contactDetails.map((detail, index) => (
//                     <a
//                       key={index}
//                       href={detail.link}
//                       target={detail.link.startsWith("http") ? "_blank" : undefined}
//                       rel="noopener noreferrer"
//                       className="flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors group"
//                     >
//                       <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-white transition-colors">
//                         {detail.icon}
//                       </div>
//                       <div>
//                         <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
//                           {detail.title}
//                         </p>
//                         <p className="text-lg font-bold text-gray-900">
//                           {detail.value}
//                         </p>
//                       </div>
//                     </a>
//                   ))}
//                 </div>

//                 <div className="pt-6 border-t border-gray-100">
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <Clock className="w-5 h-5 text-blue-500" />
//                     <span className="font-medium">Open 24/7 for Bookings</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Map Embed */}
//               <div className="h-[300px] w-full rounded-3xl overflow-hidden shadow-sm border border-gray-100">
//                 <iframe
//                   title="Frost Masters Location"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.584319401768!2d76.3500313!3d9.9258303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08709333333333%3A0x3333333333333333!2sPavamkulangara%20Devi%20Temple!5e0!3m2!1sen!2sin!4v1710830000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </motion.div>
//           )}

//           {/* Right Column: Contact Form */}
//           <motion.div
//             initial={!isModal ? { opacity: 0, x: 30 } : {}}
//             whileInView={!isModal ? { opacity: 1, x: 0 } : {}}
//             viewport={{ once: true }}
//             className={`${isModal ? "lg:col-span-1" : "lg:col-span-12 xl:col-span-7"}`}
//           >
//             <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-gray-100">
//               <h3 className="text-2xl font-bold text-gray-900 mb-8">
//                 {isModal ? "Book Your Service" : "Send us a Message"}
//               </h3>

//               <form onSubmit={handleContactSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-sm font-semibold text-gray-700 ml-1">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="contactName"
//                       value={contact?.contactName || ""}
//                       onChange={handleContactChange}
//                       placeholder="Enter your name"
//                       className={`w-full p-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 transition-all ${
//                         errors.contactName
//                           ? "border-red-500 focus:ring-red-500"
//                           : "border-transparent focus:ring-blue-500 focus:bg-white"
//                       }`}
//                     />
//                     {errors.contactName && (
//                       <p className="text-red-500 text-xs mt-1 ml-1">
//                         {errors.contactName}
//                       </p>
//                     )}
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-semibold text-gray-700 ml-1">
//                       Mobile Number
//                     </label>
//                     <input
//                       type="number"
//                       name="contactNumber"
//                       value={contact?.contactNumber || ""}
//                       onChange={handleContactChange}
//                       placeholder="Enter 10-digit number"
//                       className={`w-full p-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 transition-all ${
//                         errors.contactNumber
//                           ? "border-red-500 focus:ring-red-500"
//                           : "border-transparent focus:ring-blue-500 focus:bg-white"
//                       }`}
//                     />
//                     {errors.contactNumber && (
//                       <p className="text-red-500 text-xs mt-1 ml-1">
//                         {errors.contactNumber}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-gray-700 ml-1">
//                     Email Address (Optional)
//                   </label>
//                   <input
//                     type="email"
//                     name="contactEmail"
//                     value={contact?.contactEmail || ""}
//                     onChange={handleContactChange}
//                     placeholder="Enter your email"
//                     className="w-full p-4 bg-gray-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
//                   />
//                 </div>

//                 <div className="space-y-4">
//                   <p className="text-sm font-semibold text-gray-700 ml-1">
//                     Select Your City
//                   </p>
//                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                     {cityOptions.map((city) => (
//                       <label
//                         key={city}
//                         className={`flex items-center justify-center gap-2 p-3 border rounded-2xl cursor-pointer transition-all ${
//                           contact?.contactCity === city
//                             ? "bg-blue-500 border-blue-500 text-white shadow-md shadow-blue-200"
//                             : "bg-gray-50 border-transparent text-gray-700 hover:bg-gray-100"
//                         }`}
//                       >
//                         <input
//                           type="radio"
//                           name="contactCity"
//                           value={city}
//                           checked={contact?.contactCity === city}
//                           onChange={handleContactChange}
//                           className="hidden"
//                         />
//                         <span className="text-sm font-bold">{city}</span>
//                       </label>
//                     ))}
//                   </div>
//                   {errors.contactCity && (
//                     <p className="text-red-500 text-xs mt-1 ml-1">
//                       {errors.contactCity}
//                     </p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-gray-700 ml-1">
//                     Appliance Type
//                   </label>
//                   <select
//                     name="product"
//                     value={contact?.product || ""}
//                     onChange={handleContactChange}
//                     className="w-full p-4 bg-gray-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-700"
//                   >
//                     <option value="">Choose a product</option>
//                     {Object.keys(complaintsOptions).map((p) => (
//                       <option key={p} value={p}>
//                         {p}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.product && (
//                     <p className="text-red-500 text-xs mt-1 ml-1">
//                       {errors.product}
//                     </p>
//                   )}
//                 </div>

//                 {contact?.product && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     className="space-y-4"
//                   >
//                     <p className="text-sm font-semibold text-gray-700 ml-1">
//                       Select Issues
//                     </p>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       {complaintsOptions[contact.product].map((c) => (
//                         <label
//                           key={c}
//                           className={`flex items-center gap-3 p-3 border rounded-2xl cursor-pointer transition-all ${
//                             contact.complaint.includes(c)
//                               ? "bg-blue-50 border-blue-200"
//                               : "bg-gray-50 border-transparent hover:bg-gray-100"
//                           }`}
//                         >
//                           <input
//                             type="checkbox"
//                             checked={contact.complaint.includes(c)}
//                             onChange={() => handleComplaintToggle(c)}
//                             className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded-lg"
//                           />
//                           <span className="text-gray-700 text-sm font-medium">
//                             {c}
//                           </span>
//                         </label>
//                       ))}
//                     </div>
//                     {errors.complaint && (
//                       <p className="text-red-500 text-xs mt-1 ml-1">
//                         {errors.complaint}
//                       </p>
//                     )}
//                   </motion.div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={contactSubmitting}
//                   className="w-full bg-blue-500 text-black font-bold py-4 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 shadow-lg shadow-blue-100 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 active:scale-95 mt-4"
//                 >
//                   {contactSubmitting ? (
//                     <span className="inline-flex items-center justify-center gap-2">
//                       <span
//                         className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin"
//                         aria-hidden
//                       />
//                       Processing...
//                     </span>
//                   ) : (
//                     "Book Service Now"
//                   )}
//                 </button>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default memo(Contact);


import { myContext } from "@/context/myContext";
import React, { memo, useContext } from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ChevronDown, ArrowRight } from "lucide-react";

const complaintsOptions = {
  Refrigerator: ["Cooling Problem", "Over Freezing", "Water Leakage", "Door Issue", "Others"],
  "Air Conditioner": ["Cooling Issue", "Water Leakage", "Noise Issue", "Not Turning On", "Others"],
  "Washing Machine": ["Spinning Issue", "Water Leakage", "Draining Issue", "Noise Issue", "Others"],
  "Microwave oven": ["Heating Problem", "Turntable Not Working", "Door Issue", "Noise Issue", "Others"],
};

const cityOptions = ["Kochi", "Trissur", "Kottayam"];

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 6282450300",
    link: "tel:+916282450300",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@frostmasters.com",
    link: "mailto:info@frostmasters.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: (
      <>
      30/282 Pavamkulangara Jn <br />
      Puthiyakavu, Eranakulam — 682301
    </>
    ),
    link: "https://maps.app.goo.gl/YourActualMapLink",
  },
];

const inputCls = (err) =>
  `w-full px-4 py-3.5 rounded-xl border-2 bg-white/70 text-slate-800 placeholder-slate-400 text-sm font-medium outline-none transition-all duration-200 ${
    err
      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
      : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white"
  }`;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Contact = ({ isModal }) => {
  const {
    contact,
    contactRef,
    errors,
    handleContactSubmit,
    handleContactChange,
    handleComplaintToggle,
    contactSubmitting,
  } = useContext(myContext);

  return (
    <section
      ref={!isModal ? contactRef : null}
      className={`relative overflow-hidden ${isModal ? "py-4" : "py-20 lg:py-28"}`}

    >
      {/* Background orbs */}
      {!isModal && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-40 blur-[120px]"
            style={{ background: "radial-gradient(circle,#bfdbfe 0%,transparent 70%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-30 blur-[100px]"
            style={{ background: "radial-gradient(circle,#c7d2fe 0%,transparent 70%)" }}
          />
        </>
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
        {!isModal && (
          <SectionHeader
            tag="Get in Touch"
            titleStart="Book Your"
            highlight="Repair"
            description="Same-day service · 30-day warranty · Expert technicians"
          />
        )}

        {/*
         * ═══════════════════════════════════════════
         *  PERFECT TWO-COLUMN GRID
         *  Left  (5 cols) → dark blue info + map
         *  Right (7 cols) → white booking form
         * ═══════════════════════════════════════════
         */}
        <div
          className={`${isModal ? "mt-0": "mt-12"} grid rounded-3xl overflow-hidden shadow-2xl shadow-blue-100/70 border border-white/80 ${
            isModal
              ? "grid-cols-1"
              : "grid-cols-1 lg:grid-cols-12"
          }`}
        >

          {/* ╔══════════════════════════════╗
              ║  LEFT PANEL — info + map     ║
              ╚══════════════════════════════╝ */}
          {!isModal && (
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col min-h-full"
              style={{
                background:
                  "linear-gradient(170deg,#1e3a8a 0%,#1e40af 45%,#2563eb 100%)",
              }}
            >
              {/* Info area */}
              <div className="flex-1 px-8 py-10 lg:px-10 lg:py-12 flex flex-col">
                {/* Contact details */}
                <ul className="space-y-5">
                  {contactDetails.map(({ icon: Icon, title, value, link }) => (
                    <motion.li key={title} variants={fadeUp}>
                      <a
                        href={link}
                        target={link.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4"
                      >
                        <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                          <Icon size={17} className="text-blue-200" />
                        </span>
                        <div className="min-w-0 pt-0.5">
                          <p className="text-blue-400 text-[10px] font-extrabold uppercase tracking-[0.15em] mb-0.5">
                            {title}
                          </p>
                          <p className="text-white text-sm font-semibold leading-snug break-words group-hover:text-blue-100 transition-colors">
                            {value}
                          </p>
                        </div>
                      </a>
                    </motion.li>
                  ))}
                </ul>


                {/* Spacer */}
                <div className="flex-1" />
              </div>

              {/* Map pinned to bottom of left panel */}
              <div className="h-86 w-full border-t border-white/10 overflow-hidden flex-shrink-0">
                <iframe
                  title="Frost Masters Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.584319401768!2d76.3500313!3d9.9258303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08709333333333%3A0x3333333333333333!2sPavamkulangara%20Devi%20Temple!5e0!3m2!1sen!2sin!4v1710830000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    display: "block",
                    filter: "saturate(0.8) contrast(1.05)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          )}

          {/* ╔══════════════════════════════╗
              ║  RIGHT PANEL — booking form  ║
              ╚══════════════════════════════╝ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`bg-white flex flex-col ${
              isModal ? "col-span-1" : "lg:col-span-7"
            }`}
          >
            {/* Form header */}
            <div className={`px-4 lg:px-6 ${isModal ? "pt-4": "pt-10"} pb-6 border-b border-slate-100 flex items-center justify-between flex-shrink-0`}>
              <motion.div variants={fadeUp}>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-blue-500 mb-1">
                  {isModal ? "Schedule" : "Service Request"}
                </p>
                <h3 className="text-2xl font-black text-slate-900 leading-tight">
                  {isModal ? "Book Your Service" : "Book a Repair"}
                </h3>
              </motion.div>
              
            </div>

            {/* ─── FORM ─── */}
            <form
              onSubmit={handleContactSubmit}
              className="flex-1 px-8 lg:px-10 py-8 space-y-5"
            >
              {/* Row A: Name + Phone */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={contact?.contactName || ""}
                    onChange={handleContactChange}
                    placeholder="Your full name"
                    className={inputCls(errors.contactName)}
                  />
                  {errors.contactName && (
                    <p className="text-red-500 text-xs font-semibold">{errors.contactName}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={contact?.contactNumber || ""}
                    onChange={handleContactChange}
                    placeholder="10-digit number"
                    maxLength={10}
                    className={inputCls(errors.contactNumber)}
                  />
                  {errors.contactNumber && (
                    <p className="text-red-500 text-xs font-semibold">{errors.contactNumber}</p>
                  )}
                </div>
              </motion.div>

              {/* Row B: Email */}
              <motion.div variants={fadeUp} className="space-y-1.5">
                <label className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  Email Address{" "}
                  <span className="normal-case tracking-normal font-normal text-slate-400 text-xs">
                    (optional)
                  </span>
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={contact?.contactEmail || ""}
                  onChange={handleContactChange}
                  placeholder="you@example.com"
                  className={inputCls(false)}
                />
              </motion.div>

              {/* Row C: City pills */}
              <motion.div variants={fadeUp} className="space-y-2.5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  Your City
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {cityOptions.map((city) => {
                    const active = contact?.contactCity === city;
                    return (
                      <label
                        key={city}
                        className={`flex items-center justify-center py-3 rounded-xl border-2 cursor-pointer select-none transition-all duration-200 text-sm font-bold ${
                          active
                            ? "border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-200"
                            : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-300 hover:bg-blue-50/60"
                        }`}
                      >
                        <input
                          type="radio"
                          name="contactCity"
                          value={city}
                          checked={active}
                          onChange={handleContactChange}
                          className="sr-only"
                        />
                        {city}
                      </label>
                    );
                  })}
                </div>
                {errors.contactCity && (
                  <p className="text-red-500 text-xs font-semibold">{errors.contactCity}</p>
                )}
              </motion.div>

              {/* Row D: Appliance (left) + Issues (right) — true side-by-side */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start"
              >
                {/* Appliance dropdown */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                    Appliance Type
                  </label>
                  <div className="relative">
                    <select
                      name="product"
                      value={contact?.product || ""}
                      onChange={handleContactChange}
                      className={`${inputCls(errors.product)} appearance-none pr-10 cursor-pointer`}
                    >
                      <option value="">Choose a product…</option>
                      {Object.keys(complaintsOptions).map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                  </div>
                  {errors.product && (
                    <p className="text-red-500 text-xs font-semibold">{errors.product}</p>
                  )}
                </div>

                {/* Issues column — animates in when product selected */}
                {contact?.product ? (
                  <motion.div
                    key={contact.product}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28 }}
                    className="space-y-1.5"
                  >
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                      Select Issues
                    </p>
                    <div className="flex flex-col gap-2">
                      {complaintsOptions[contact.product].map((c) => {
                        const checked = contact.complaint?.includes(c);
                        return (
                          <label
                            key={c}
                            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border-2 cursor-pointer select-none transition-all duration-150 text-sm font-semibold ${
                              checked
                                ? "border-blue-400 bg-blue-50 text-blue-800"
                                : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-300 hover:bg-blue-50/50"
                            }`}
                          >
                            {/* Custom checkbox dot */}
                            <span
                              className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                                checked
                                  ? "bg-blue-500 border-blue-500"
                                  : "bg-white border-slate-300"
                              }`}
                            >
                              {checked && (
                                <svg viewBox="0 0 10 8" fill="none" className="w-3 h-3">
                                  <path
                                    d="M1 4l2.5 2.5L9 1"
                                    stroke="white"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </span>
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => handleComplaintToggle(c)}
                              className="sr-only"
                            />
                            {c}
                          </label>
                        );
                      })}
                    </div>
                    {errors.complaint && (
                      <p className="text-red-500 text-xs font-semibold">{errors.complaint}</p>
                    )}
                  </motion.div>
                ) : (
                  /* Placeholder keeps layout stable before selection */
                  <div className="hidden sm:flex items-center justify-center h-full min-h-[130px] rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/60">
                    <p className="text-slate-400 text-xs font-medium text-center px-4 leading-relaxed">
                      Select an appliance<br />to see issue options
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Submit button */}
              <motion.div variants={fadeUp} className="pt-2">
                <button
                  type="submit"
                  disabled={contactSubmitting}
                  className="group relative w-full overflow-hidden rounded-xl font-black text-sm py-4 text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: contactSubmitting
                      ? "#94a3b8"
                      : "linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%)",
                    boxShadow: contactSubmitting
                      ? "none"
                      : "0 12px 30px -6px rgba(37,99,235,0.42)",
                  }}
                >
                  {/* Shimmer sweep */}
                  {!contactSubmitting && (
                    <span
                      aria-hidden
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                  )}
                  <span className="relative flex items-center justify-center gap-2">
                    {contactSubmitting ? (
                      <>
                        <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Processing…
                      </>
                    ) : (
                      <>
                        Book Service Now
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </span>
                </button>

                <p className="text-center text-[11px] text-slate-400 font-medium mt-3">
                  🔒 Your information is safe with us. No spam, ever.
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);