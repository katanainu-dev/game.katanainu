"use client";

import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { leftAnimVariant } from "./anim";
import CustomButtonVariant from "../ui/CustomButtonVariant";
import { FaPlay } from "react-icons/fa6";
import RegisterPopup from "./RegisterPopup";

const BannerTitle = () => {
  return (
    <>
      <motion.div
        variants={leftAnimVariant}
        initial="initial"
        whileInView={"enter"}
        viewport={{
          once: true,
        }}
        className="flex flex-col gap-1 2xl:gap-2"
      >
        <p className="font-poppins uppercase tracking-wider text-lg sm:text-sm sm:leading-[0.7] md:text-lg md:leading-[0.8] lg:text-xl lg:leading-[0.8] xl:text-4xl xl:leading-[0.8] 2xl:text-[2.5em] 2xl:leading-[0.9] text-white sm:pb-1 xl:pb-2 font-bold">
          Katana Inu Open Beta MAY 2025
        </p>
        {/* heading */}
        <h1 className="text-3xl leading-[1] sm:text-2xl sm:leading-[0.8] md:text-3xl md:leading-[1] lg:text-4xl xl:text-6xl 2xl:text-7xl uppercase text-left font-poppins whitespace-nowrap font-bold">
          Pre-
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-csPrimary to-csPrimary-foreground">
            Register
          </span>{" "}
          Now
        </h1>

        {/* cta btn */}
        <div className="flex items-center gap-4 mt-2 lg:mt-2.5 2xl:mt-3">
          {/* pop up */}
          <Dialog>
            <DialogTrigger asChild>
              <div>
                <CustomButtonVariant
                  imageWidth={24}
                  imageHeight={24}
                  imageClass=""
                  buttonExtraClass="banner-button hover:border-transparent"
                  gradElementColor="primary-gradient"
                  textLabel="Play trailer"
                  hoveredIcon={
                    <FaPlay
                      className="w-[9px] h-[9px] md:w-[11px] md:h-[11px] 
                    lg:w-3 lg:h-3 2xl:w-auto 2xl:h-auto group-hover:text-black transition-all duration-500 ease-in"
                    />
                  }
                  hoveredIconClass="lg:w-3 xl:w-4 text-csPrimary group-hover:text-white
                 transition-ease-in"
                  textClass="relative banner-text group-hover:text-black transition duration-500 ease-in"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="mx-auto md:min-w-[600px] lg:min-w-[700px] xl:min-w-[800px] 2xl:min-w-[900px] bg-transparent border-none">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/LG4L11Q0pBk?si=0H_3GY9xm3X91OJU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <CustomButtonVariant
                imageWidth={24}
                imageHeight={24}
                imageClass=""
                buttonExtraClass="banner-button hover:border-transparent"
                gradElementColor="primary-gradient"
                textLabel="Register"
                textClass="relative banner-text group-hover:text-black transition duration-500 ease-in"
              />
            </DialogTrigger>
            <DialogContent className="mx-auto md:min-w-[600px] lg:min-w-[700px] xl:min-w-[800px] 2xl:min-w-[900px] bg-transparent border-none">
              <RegisterPopup />
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    </>
  );
};

export default BannerTitle;
