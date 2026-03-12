import { myContext } from "@/context/myContext";
import React, { memo, useContext } from "react";

const complaintsOptions = {
  "Washing Machine": [
    "Spinning Issue",
    "Water Leakage",
    "Draining Issue",
    "Noise Issue",
    "Others",
  ],
  Dishwasher: [
    "Not Cleaning Properly",
    "Water Leakage",
    "Starting Issue",
    "Bad Smell",
    "Others",
  ],
  Fridge: [
    "Cooling Problem",
    "Over Freezing",
    "Water Leakage",
    "Door Issue",
    "Others",
  ],
  AC: ["Cooling Issue", "Water Leakage", "Noise Issue", "Not Turning On","Others"],
  Microwave: [
    "Heating Problem",
    "Turntable Not Working",
    "Door Issue",
    "Noise Issue",
    "Others",
  ],
};

const Contact = ({ isModal = false }) => {

  const [showFullForm, setShowFullForm] = React.useState(false);

  const {
    contact,
    activeTab,
    setActiveTab,
    contactRef,
    feedback,
    errors,
    setErrors,
    handleContactSubmit,
    handleContactChange,
    handleComplaintToggle,
    handleFeedbackChange,
    handleStarSelect,
    handleFeedbackSubmit,
    contactSubmitting,
    feedbackSubmitting,
  } = useContext(myContext);

  return (
    <section 
      ref={!isModal ? contactRef : null} 
      className={`${isModal ? 'py-4' : 'py-16'} bg-gray-100 h-fit`}
    >
      <div className={`${isModal ? 'max-w-full' : 'max-w-xl'} mx-auto px-4`}>
        {!isModal && (
        <div className="flex justify-center mb-8 rounded-lg overflow-hidden border border-gray-300">
          <button
            onClick={() => {
              setActiveTab("contact");
              setErrors({});
            }}
            className={`w-1/2 py-3 font-semibold transition-all ${
              activeTab === "contact"
                ? "bg-[#B6F500] text-black"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Contact Form
          </button>
          <button
            onClick={() => {
              setActiveTab("feedback");
              setErrors({});
            }}
            className={`w-1/2 py-3 font-semibold transition-all ${
              activeTab === "feedback"
                ? "bg-[#B6F500] text-black"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Feedback Form
          </button>
        </div>
        )}

        {/* Contact Form */}
        {(isModal || activeTab === "contact") && (
          <form
            onSubmit={handleContactSubmit}
            className="bg-white p-2 sm:p-8 rounded-2xl shadow space-y-4"
          >
            {!isModal && (
              <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-wider text-center mb-6">
                Contact Us
              </h2>
            )}

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
                      : "border-gray-300 focus:ring-[#B6F500]"
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
                      : "border-gray-300 focus:ring-[#B6F500]"
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
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#B6F500]"
              />
            </div>

            <div>
              <input
                type="text"
                name="contactCity"
                value={contact?.contactCity || ""}
                onChange={handleContactChange}
                placeholder="City"
                className={`w-full p-3 border rounded focus:outline-none focus:ring-2 ${
                  errors.contactCity
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#B6F500]"
                }`}
              />
              {errors.contactCity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contactCity}
                </p>
              )}
            </div>

            {/* Product Selection */}
            <div>
              <select
                name="product"
                value={contact?.product || ""}
                onChange={handleContactChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-[#B6F500] focus:border-[#B6F500] 
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
                        className="h-4 w-4 text-[#B6F500] focus:ring-[#B6F500] border-gray-300 rounded"
                      />
                      <span className="text-gray-700 text-sm">{c}</span>
                    </label>
                  ))}
                </div>
                {errors.complaint && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.complaint}
                  </p>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={contactSubmitting}
              className="w-full bg-[#B6F500] text-black font-semibold py-3 rounded hover:bg-black hover:text-white transition duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-[#B6F500] disabled:hover:text-black"
            >
              {contactSubmitting ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" aria-hidden />
                  Sending...
                </span>
              ) : (
                "Send Request"
              )}
            </button>
          </form>
        )}

        {/* Feedback Form */}
        {!isModal && activeTab === "feedback" && (
          <form
            onSubmit={handleFeedbackSubmit}
            className="bg-white p-2 sm:p-8 rounded-2xl shadow space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-wider text-center mb-6">
              Feedback Form
            </h2>

            {/* ✅ Step 1: Mobile Number Input */}
            <div className="flex flex-col">
              <input
                type="number"
                name="mobile"
                value={feedback.mobile || ""}
                onChange={async (e) => {
                  const value = e.target.value;
                  handleFeedbackChange(e); // keep your existing state handling

                  // When user entered exactly 10 digits → check backend
                  if (value.length === 10) {
                    try {
                      const res = await fetch("/api/contact/number", {
                        method: "POST",
                        body: JSON.stringify({ number: value }),
                      });
                      const data = await res.json();

                      if (data.exists) {
                        // ✅ Number found, clear error and show full form
                        setErrors((prev) => ({ ...prev, mobile: "" }));
                        setShowFullForm(true);
                      } else {
                        // ❌ Not found
                        setShowFullForm(false);
                        setErrors((prev) => ({
                          ...prev,
                          mobile:
                            "Mobile number is not registered.",
                        }));
                      }
                    } catch (err) {
                      console.error("Error checking number:", err);
                      setErrors((prev) => ({
                        ...prev,
                        mobile: "Something went wrong. Try again later.",
                      }));
                      setShowFullForm(false);
                    }
                  } else {
                    // Less than 10 digits → hide form and clear error
                    setShowFullForm(false);
                    setErrors((prev) => ({ ...prev, mobile: "" }));
                  }
                }}
                placeholder="Enter Registered Mobile Number"
                className={`w-full p-3 border rounded focus:outline-none focus:ring-2 ${
                  errors.mobile
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#B6F500]"
                }`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* ✅ Step 2: Show remaining fields only if number found */}
            {showFullForm && (
              <>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="name"
                      value={feedback.name || ""}
                      onChange={handleFeedbackChange}
                      placeholder="Name"
                      className={`w-full p-3 border rounded focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-[#B6F500]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      name="city"
                      value={feedback.city || ""}
                      onChange={handleFeedbackChange}
                      placeholder="City"
                      className={`w-full p-3 border rounded focus:outline-none focus:ring-2 ${
                        errors.city
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-[#B6F500]"
                      }`}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>
                </div>

                <input
                  type="email"
                  name="email"
                  value={feedback.email || ""}
                  onChange={handleFeedbackChange}
                  placeholder="Email"
                  className={`w-full p-3 border rounded focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#B6F500]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}

                <textarea
                  name="message"
                  value={feedback.message || ""}
                  onChange={handleFeedbackChange}
                  placeholder="Feedback"
                  maxLength={500}
                  rows={3}
                  className={`w-full p-3 border rounded focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#B6F500]"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}

                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => handleStarSelect(star)}
                      className={`cursor-pointer text-2xl ${
                        feedback.stars >= star
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                {errors.stars && (
                  <p className="text-red-500 text-sm mt-1">{errors.stars}</p>
                )}

                <button
                  type="submit"
                  disabled={feedbackSubmitting}
                  className="w-full bg-[#B6F500] text-black font-semibold py-3 rounded hover:bg-black hover:text-white transition duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-[#B6F500] disabled:hover:text-black"
                >
                  {feedbackSubmitting ? (
                    <span className="inline-flex items-center justify-center gap-2">
                      <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" aria-hidden />
                      Submitting...
                    </span>
                  ) : (
                    "Submit Feedback"
                  )}
                </button>
              </>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default memo(Contact);
