"use client";

import MediaPoster from "./MediaPoster";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { mediaDataPrimary, mediaDataSecondary } from "@/data";

export default function MediaContent() {
  const [videoId, setVideoId] = useState("Vj4eSet_2nA");
  const [isPlaying, setIsPlaying] = useState(false);

  //   TODO: FIX MEDIA SECTON RESPONSIVENESS
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 2xl:gap-5 3xl:gap-6 w-full lg:max-w-[890px] xl:max-w-[1000px] 2xl:max-w-[1200px] mx-auto">
      {/* Video Player with Custom Poster */}
      <div className="w-full min-h-[180px] max-w-[370px] sm:max-w-full sm:min-h-[320px] md:min-h-[314px] md:max-h-[314px] lg:min-h-[345px] lg:max-h-[265px] xl:min-h-[390px] xl:max-h-[320px] 2xl:min-h-[470px] 3xl:min-h-[520px] relative">
        {!isPlaying ? (
          <div
            className="relative w-full cursor-pointer flex items-center justify-center min-h-[180px] sm:min-h-[320px] md:min-h-[314px] lg:min-h-[345px] lg:max-h-[265px] xl:min-h-[390px] xl:max-h-[320px] 2xl:min-h-[470px] 3xl:min-h-[520px]"
            onClick={() => setIsPlaying(true)}
          >
            {/* Custom Poster Image */}
            <Image
              src="/assets/images/media/media-1.webp"
              alt="Video Poster"
              width={1150}
              height={550}
              className="absolute top-0 left-0 w-full  min-h-[180px] object-cover sm:min-h-[320px] md:min-h-[314px] lg:min-h-[345px] lg:max-h-[265px] xl:min-h-[390px] xl:max-h-[320px] 2xl:min-h-[470px] 3xl:min-h-[520px]"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 w-full min-h-[180px] sm:min-h-[320px] md:min-h-[314px] lg:min-h-[345px] lg:max-h-[265px] xl:min-h-[390px] xl:max-h-[320px] 2xl:min-h-[470px] 3xl:min-h-[520px] flex items-center justify-center">
              <button className="text-white primary-gradient w-8 h-8 md:w-10 md:h-10 2xl:w-12 2xl:h-12 rounded-full text-lg font-bold">
                <span className="relative left-0.5">▶</span>
              </button>
            </div>

            {/* content */}
            <div className="absolute bottom-2 left-2.5 sm:bottom-2.5 sm:left-3 md:bottom-3 md:left-3.5 xl:bottom-3.5 xl:left-4 2xl:bottom-4 2xl:left-5 3xl:bottom-5 3xl:left-6 flex flex-col gap-0 lg:gap-0.5 2xl:gap-1">
              <p className="font-tahomaBold font-bold gradient-text text-sm sm:text-xs md:text-sm xl:text-base 2xl:text-lg 3xl:text-xl">
                {mediaDataPrimary?.title}
              </p>
              <p className="font-tahoma text-white text-xs sm:text-[0.625em] lg:text-xs 3xl:text-sm">
                {mediaDataPrimary?.date}
              </p>
            </div>
          </div>
        ) : (
          // Iframe will be shown after clicking the poster
          <motion.div className="relative w-full pt-[180px] sm:pt-[320px] md:pt-[314px] lg:pt-[345px] xl:pt-[390px] 2xl:pt-[470px] 3xl:pt-[520px]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </motion.div>
        )}
      </div>

      {/* Video Thumbnails / Media Posters */}
      <div className="flex items-center justify-center flex-wrap sm:flex-nowrap sm:justify-between gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 2xl:gap-5 3xl:gap-6 w-full">
        {mediaDataSecondary?.map((media, idx) => (
          <div
            key={idx}
            onClick={() => {
              setVideoId(media?.videoLink);
              setIsPlaying(true);
            }}
          >
            <MediaPoster data={media} />
          </div>
        ))}
      </div>
    </div>
  );
}
