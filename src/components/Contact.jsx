import { myContext } from "@/context/myContext";
import React, { memo, useContext } from "react";
import SectionHeader from "./SectionHeader";

const complaintsOptions = {
  Refrigerator: [
    "Cooling Problem",
    "Over Freezing",
    "Water Leakage",
    "Door Issue",
    "Others",
  ],
  "Air Conditioner": [
    "Cooling Issue",
    "Water Leakage",
    "Noise Issue",
    "Not Turning On",
    "Others",
  ],
  "Washing Machine": [
    "Spinning Issue",
    "Water Leakage",
    "Draining Issue",
    "Noise Issue",
    "Others",
  ],
  "Microwave oven": [
    "Heating Problem",
    "Turntable Not Working",
    "Door Issue",
    "Noise Issue",
    "Others",
  ],
};

const Contact = ({ isModal = false }) => {
  const {
    contact,
    contactRef,
    errors,
    handleContactSubmit,
    handleContactChange,
    handleComplaintToggle,
    contactSubmitting,
  } = useContext(myContext);

  const cityOptions = ["Kochi", "Trissur", "Kottayam"];

  return (
    <section
      ref={!isModal ? contactRef : null}
      className={`${isModal ? "py-4" : "py-16"} h-fit`}
    >
      {!isModal && (
        <SectionHeader
          tag="Get in Touch"
          titleStart="Book Your"
          highlight="Repair"
          description="Same-day service · 30-day warranty · Expert technicians"
        />
      )}
      <div className={`${isModal ? "max-w-full" : "max-w-xl"} mx-auto px-4`}>
        {/* Contact Form */}
        <form
          onSubmit={handleContactSubmit}
          className="bg-white p-2 sm:p-8 rounded-2xl shadow space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                name="contactName"
                value={contact?.contactName || ""}
                onChange={handleContactChange}
                placeholder="Name"
                className={`w-full p-3 border rounded focus:outline-none focus:ring-2 ${
                  errors.contactName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.contactName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contactName}
                </p>
              )}
            </div>

            <div className="w-full md:w-1/2">
              <input
                type="number"
                name="contactNumber"
                value={contact?.contactNumber || ""}
                onChange={handleContactChange}
                placeholder="Mobile Number"
                className={`w-full p-3 border rounded focus:outline-none focus:ring-2 ${
                  errors.contactNumber
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contactNumber}
                </p>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              name="contactEmail"
              value={contact?.contactEmail || ""}
              onChange={handleContactChange}
              placeholder="Email (Optional)"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <p className="mb-3 font-semibold text-gray-800">Select City</p>
            <div className="grid grid-cols-2 gap-3">
              {cityOptions.map((city) => (
                <label
                  key={city}
                  className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition"
                >
                  <input
                    type="radio"
                    name="contactCity"
                    value={city}
                    checked={contact?.contactCity === city}
                    onChange={handleContactChange}
                    className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-700 text-sm">{city}</span>
                </label>
              ))}
            </div>
            {errors.contactCity && (
              <p className="text-red-500 text-sm mt-1">{errors.contactCity}</p>
            )}
          </div>

          {/* Product Selection */}
          <div>
            <select
              name="product"
              value={contact?.product || ""}
              onChange={handleContactChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 transition text-gray-700"
            >
              <option value="">Choose a product</option>
              {Object.keys(complaintsOptions).map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            {errors.product && (
              <p className="text-red-500 text-sm mt-1">{errors.product}</p>
            )}
          </div>

          {/* Dynamic Complaints */}
          {contact?.product && (
            <div>
              <p className="mb-3 font-semibold text-gray-800">
                Select Complaints
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {complaintsOptions[contact.product].map((c) => (
                  <label
                    key={c}
                    className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg 
                       cursor-pointer hover:bg-gray-50 transition"
                  >
                    <input
                      type="checkbox"
                      checked={contact.complaint.includes(c)}
                      onChange={() => handleComplaintToggle(c)}
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-gray-700 text-sm">{c}</span>
                  </label>
                ))}
              </div>
              {errors.complaint && (
                <p className="text-red-500 text-sm mt-1">{errors.complaint}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={contactSubmitting}
            className="w-full bg-blue-500 text-black font-semibold py-3 rounded hover:bg-black hover:text-white transition duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-blue-500 disabled:hover:text-black"
          >
            {contactSubmitting ? (
              <span className="inline-flex items-center justify-center gap-2">
                <span
                  className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"
                  aria-hidden
                />
                Sending...
              </span>
            ) : (
              "Send Request"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default memo(Contact);
