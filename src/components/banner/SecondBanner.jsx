"use client";

import Image from "next/image";
import CustomButtonVariantTwo from "../ui/CustomButtonVariantTwo";
import { motion } from "framer-motion";
import { img1Variant, textVariant } from "./anim";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import ArrowIcon from "../shared/ArrowIcon";
import Link from "next/link";
import { bannerButtonData1, bannerButtonData2 } from "@/data";

const SecondBanner = () => {
  return (
    <section className="bg-[url('/assets/images/banner/base-banner.webp')] bg-no-repeat bg-cover pt-32 md:pt-36 lg:pt-0">
      <div className="main-container max-screen-width">
        <div className=" flex flex-col lg:flex-row items-center justify-start w-full h-full min-h-[550px] sm:min-h-[570px] md:min-h-[800px] lg:min-h-[750px] xl:min-h-[840px] 2xl:min-h-[950px] relative overflow-hidden">
          {/* left content */}
          <motion.div
            variants={textVariant}
            initial="initial"
            whileInView="animate"
            // viewport={{
            //   once: true,
            // }}
            className="flex flex-col gap-5 sm:gap-6 md:gap-8 xl:gap-10 2xl:gap-12 relative z-20"
          >
            <div>
              {/* heading */}
              <h1 className="uppercase font-khand font-semibold text-[2.75em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:leading-[0.9] 2xl:text-[8.125em]">
                <span className="text-[#5CD4F6]">BRETT</span> FROM BASE
              </h1>
              <h2 className="uppercase font-magra font-semibold text-3xl leading-[0.4] sm:text-[2em] sm:leading-[0.8] md:leading-[0.8] md:text-[2.5em] lg:text-5xl xl:leading-[0.8] xl:text-[4.25em] 2xl:leading-[0.9] 2xl:text-[5.8125em]">
                joining <span className="text-[#FFC600]">Katana Inu</span>
              </h2>
            </div>

            <p className="font-khand font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:leading-[1] 2xl:text-[4.125em] uppercase">
              <span className="text-[#98DEFF]">$KATA BRIDGED</span> to Base
              chain!
            </p>

            <div className="flex flex-wrap gap-3">
              {/* 1st btn */}
              <Dialog>
                <DialogTrigger asChild>
                  <div>
                    <CustomButtonVariantTwo textLable="BUY $KATA ON CEX" />
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-[#0c0b0bc4] border-transparent flex flex-col gap-2 md:gap-3 xl:gap-3.5 p-8 lg:p-12">
                  {bannerButtonData1.map((data, i) => (
                    <Link
                      href={data.link}
                      target="_blank"
                      rel="norefferer"
                      key={i}
                    >
                      <Button
                        variant="customAnimated"
                        className="w-full py-2 md:py-3 lg:py-4 xl:py-5 2xl:py-[22px] text-xs lg:text-sm sm:text-base"
                        key={i}
                      >
                        {data.label}
                      </Button>
                    </Link>
                  ))}
                </DialogContent>
              </Dialog>
              {/* 2nd btn */}
              <Dialog>
                <DialogTrigger asChild>
                  <div>
                    <CustomButtonVariantTwo
                      primary={false}
                      textLable="BUY $KATA ON ETH/BSC"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-[#0c0b0bc4] border-transparent flex flex-col gap-2 md:gap-3 xl:gap-3.5 p-8 lg:p-12">
                  {bannerButtonData2.map((data, i) => (
                    <Link
                      href={data.link}
                      target="_blank"
                      rel="norefferer"
                      key={i}
                    >
                      <Button
                        variant="customAnimated"
                        className="w-full py-2 md:py-3 lg:py-4 xl:py-5 2xl:py-[22px] text-xs lg:text-sm sm:text-base"
                        key={i}
                      >
                        {data.label}
                      </Button>
                    </Link>
                  ))}
                </DialogContent>
              </Dialog>

              <CustomButtonVariantTwo
                primary={false}
                textLable="BUY $KATA ON BASE"
                buttonLink="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x02454a97A8372f3A760A033DBb39E67D73BD6d87&chain=base"
              />
            </div>
          </motion.div>
          {/* right content */}
          <motion.div
            variants={img1Variant}
            initial="initial"
            whileInView="animate"
            // viewport={{
            //   once: true,
            // }}
            className="absolute -bottom-32 sm:-bottom-44 md:-bottom-[320px] lg:-bottom-[100px] md:-right-[120px] xl:-right-[150px] 2xl:-bottom-[50px] 2xl:-right-[100px]"
          >
            <Image
              src="/assets/images/banner/ch-4.webp"
              alt=""
              width={900}
              height={720}
              priority={true}
              className="w-[400px] sm:w-[550px] md:w-auto lg:w-[700px] xl:w-[800px] 2xl:w-[900px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecondBanner;
