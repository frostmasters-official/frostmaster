"use client";
import React, { memo, useRef, useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import axios from "axios";
import { myContext } from "@/context/myContext";

const Feedback = () => {
  const { feedback, feedbackRef } = useContext(myContext);
  const swiperRef = useRef(null);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get("/api/feedback");
        if (res.data.success) {
          setFeedbacks(res.data.feedbacks);
        }
      } catch (err) {
        console.error("Failed to load feedback:", err);
      }
    };

    fetchFeedback();
  }, [feedback]);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      swiperRef.current.swiper.params.navigation
    ) {
      swiperRef.current.swiper.params.navigation.prevEl =
        ".feedback-prev-button";
      swiperRef.current.swiper.params.navigation.nextEl =
        ".feedback-next-button";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <section
      ref={feedbackRef}
      className="case-studies-wrapper py-12 relative"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold font-heading tracking-wider text-center my-10">
          Customer Feedback
        </h1>

        <div className="relative h-76">
          <Swiper
            ref={swiperRef}
            modules={[Grid, Navigation, Autoplay]}
            slidesPerView={3}
            grid={{ rows: 1, fill: "row" }}
            spaceBetween={20}
            loop={feedbacks.length >= 6}
            autoplay={feedbacks.length >= 2 ? { delay: 5000, disableOnInteraction: false } : false}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
            }}
          >
            {feedbacks.map((item) => (
              <SwiperSlide key={item._id || item.id || item.createdAt}>
                <div className="bg-white rounded-lg shadow-md p-6 h-64 md:h-56 flex flex-col hover:bg-[#B6F500] transition duration-600 hover:-translate-y-2 my-5">
                  <div className="flex justify-between items-start my-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <em className="text-gray-500">{item.city}</em>
                    </div>
                    <div className=" text-xs text-gray-400">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <p className="text-gray-600 flex-grow">{item.message}</p>

                  <div className="mt-4 flex justify-end text-yellow-500 text-xl font-bold">
                    {"★".repeat(parseInt(item.stars || 0))}
                  </div>

                  {/* show createdAt in top-right corner */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons bottom-right */}
          <div className="absolute -bottom-6 right-4 flex gap-3 z-20">
            <button
              className="feedback-prev-button bg-white p-2 rounded-full shadow-md transition hover:bg-[#B6F500] duration-500 hover:scale-110"
              aria-label="Previous feedback"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="feedback-next-button bg-white p-2 rounded-full shadow-md transition hover:bg-[#B6F500] duration-500 hover:scale-110"
              aria-label="Next feedback"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Feedback);
