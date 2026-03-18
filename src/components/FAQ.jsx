"use client";

import { myContext } from "@/context/myContext";
import { useState, useRef, useEffect, memo, useContext } from "react";
import SectionHeader from "./SectionHeader";

const FAQ = () => {
  const { faqRef, faqList } = useContext(myContext);
  const [openIndex, setOpenIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [heights, setHeights] = useState([]);
  const answerRefs = useRef([]);

  useEffect(() => {
    setHeights(answerRefs.current.map((ref) => (ref ? ref.scrollHeight : 0)));
  }, [search, faqList]); // Re-calculate heights when list changes

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = (faqList || []).filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase()),
  );

  const faqSchema =
    (faqList || []).length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: (faqList || []).map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: (item.answer || "").replace(/\*\*/g, ""),
            },
          })),
        }
      : null;

  return (
    <section ref={faqRef} className="max-w-8xl mx-auto px-6 lg:px-12 py-16">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <SectionHeader
        tag="FAQ"
        titleStart="Frequently Asked"
        highlight="Questions"
        description="Quick answers to common questions about our appliance repair services."
      />

      <div className="mb-10 max-w-2xl mx-auto relative group">
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-black transition-all duration-300 shadow-sm group-hover:shadow-md"
          style={{ fontFamily: "'Inter',sans-serif" }}
        />
      </div>

      <div className="space-y-4 mx-auto">
        {filteredFaqs.length === 0 ? (
          <p className="text-center text-gray-500 py-6">No results found.</p>
        ) : (
          filteredFaqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-300 group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className={`text-left pr-4 font-bold text-lg sm:text-base md:text-lg transition-colors duration-300 ${openIndex === index ? "text-blue-500" : "text-gray-900 group-hover:text-blue-500"}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.question}
                </span>
                <span
                  className={`text-2xl shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-500" : "text-gray-400 group-hover:text-blue-500"}`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight:
                    openIndex === index ? `${heights[index] || 500}px` : "0px",
                }}
                ref={(el) => (answerRefs.current[index] = el)}
              >
                <div
                  className={`px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-sm md:text-base text-justify transition-opacity duration-500 ${
                    openIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ fontFamily: "'Inter',sans-serif" }}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default memo(FAQ);
