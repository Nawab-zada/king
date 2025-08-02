// components/TestimonialsSlider.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ayesha Khan",
    feedback:
      "Thanks to Akhuwat, I was able to start a small tailoring business from home. The process was easy and supportive.",
    location: "Lahore",
  },
  {
    name: "Zahid Ali",
    feedback:
      "The loan I received helped me expand my grocery shop. I'm truly grateful for this opportunity.",
    location: "Karachi",
  },
  {
    name: "Fatima Noor",
    feedback:
      "Without Akhuwat, I wouldn't have been able to support my family's education expenses. Highly recommended!",
    location: "Peshawar",
  },
];

export default function TestimonialsSlider() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-10">
          What People Say
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-md rounded-xl p-6 text-left h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <FaQuoteLeft className="text-green-600 text-3xl mb-4" />
                <p className="text-gray-700 mb-4">{item.feedback}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-green-700">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

