'use client';

import { myContext } from '@/context/myContext';
import { useState, useRef, useEffect,memo, useContext } from 'react';

  const FAQ = ()=>{
    const {faqRef, faqList} = useContext(myContext)
  const [openIndex, setOpenIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [heights, setHeights] = useState([]);
  const answerRefs = useRef([]);

  useEffect(() => {
    setHeights(answerRefs.current.map(ref => ref ? ref.scrollHeight : 0));
  }, [search, faqList]); // Re-calculate heights when list changes

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = (faqList || []).filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  const faqSchema = (faqList || []).length > 0 ? {
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
  } : null;

  return (
    <section ref={faqRef} className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-wider text-center my-10">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="mb-8 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 sm:py-2 border border-[#B6F500] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B6F500] text-black transition-all duration-500"
        />
      </div>

      <div className="space-y-4 mx-auto">
        {filteredFaqs.length === 0 ? (
          <p className="text-center text-gray-500 py-6">No results found.</p>
        ) : (
          filteredFaqs.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-[#B6F500] text-black font-medium text-lg sm:text-base md:text-lg hover:bg-[#a5e000] transition-colors duration-500"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-left pr-4">{item.question}</span>
                <span className="text-xl shrink-0 ">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className="bg-white overflow-hidden transition-all duration-600 ease-in-out"
                style={{
                  maxHeight: openIndex === index ? `${heights[index] || 300}px` : '0px',
                }}
                ref={el => answerRefs.current[index] = el}
              >
                <div className={`px-5 pb-4 pt-1 text-gray-700 text-base text-sm lg:text-base text-justify ${
                  openIndex === index ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-500`}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default memo(FAQ)