"use client";

import { brandLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"; // Importing icons
import Divider from "../shared/Divider";

export default function PartneredLogo() {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const swiperRef = useRef(null); // Ref to control Swiper manually

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Navigation, Autoplay]);
      setSwiperLoaded(true);
    });
  }, []);

  if (!swiperLoaded) {
    return null; // Loading state
  }

  return (
    <div className="relative py-6 md:py-7 lg:py-8 xl:py-9 2xl:py-7 bg-black">
      {/* <div className="devider-container-top">
        <Divider className="from-transparent via-white to-transparent" />
      </div>
      <div className="devider-container-bottom">
        <Divider className="from-transparent via-csPrimary to-transparent" />
      </div> */}
      {/* Custom Navigation Buttons */}
      {/* <button
        onClick={() => swiperRef.current?.slidePrev()} // Slide left
        className="absolute left-2 sm:-left-5 md:left-0 z-10 p-1 md:p-2 text-white bg-gray-800 rounded-full shadow-lg top-1/2 -translate-y-1/2"
      >
        <BiChevronLeft size={30} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()} // Slide right
        className="absolute right-2 sm:-right-5 md:right-0 z-10 p-1 md:p-2 text-white bg-gray-800 rounded-full shadow-lg top-1/2 -translate-y-1/2"
      >
        <BiChevronRight size={30} />
      </button> */}

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 }, // Small devices (default)
          640: { slidesPerView: 3, spaceBetween: 10 }, // Tablets
          1280: { slidesPerView: 5, spaceBetween: 15 }, // Large screens
        }}
        className="lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
      >
        {brandLinks.map((brand, i) => (
          <SwiperSlide
            key={i}
            className="!flex items-center justify-center w-full h-full !mt-auto !mb-auto"
          >
            <Link
              href={brand.linkPath}
              target={brand.linkPath.length !== 1 ? "_blank" : "_parent"}
              className="flex items-center justify-center"
            >
              <Image
                src={brand.imgPath}
                alt={brand.name}
                width={200}
                height={70}
                // className={` ${
                //   i === 3 || i === 7 || i === 5
                //     ? "h-8 md:h-10 xl:h-12"
                //     : "h-12 md:h-14 xl:h-20 "
                // } ${i === 4 || i === 6 ? "object-cover" : "object-contain"}`}
                className="h-10 w-28 sm:w-32 sm:h-12 object-contain"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
