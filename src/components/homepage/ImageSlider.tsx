"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ItineraryGallery } from "@/lib/type";
import Image from "next/image";

const ImageSlider = ({ data }: { data: ItineraryGallery[] }) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="z-0 w-full"
      >
        {data.map((photo) => (
          <SwiperSlide key={photo.gallery_id} className="w-full">
            <div className="w-full relative">
              <Image
                src={photo.src}
                width={400}
                height={400}
                alt={photo.gallery_alt_text}
                className="object-cover object-center w-full h-full aspect-video rounded-sm md:h-64 lg:h-96"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
