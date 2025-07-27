"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  images: string[];
}

const Slider = ({ images }: Props) => {
  if (!images?.length) return null;

  return (
    <div className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {images.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto rounded-lg shadow"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
