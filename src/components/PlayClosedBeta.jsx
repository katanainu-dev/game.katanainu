"use client";

import { gameDownloadOptions, gameTags } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaWindows } from "react-icons/fa6";
import Tags from "./Tags";
import { useState } from "react";
import CustomButtonVariantTwo from "./ui/CustomButtonVariantTwo";
import Requirements from "./Requirements";
import Divider from "./shared/Divider";
import { cn } from "@/lib/utils";

const PlayClosedBeta = () => {
  const [showRequirements, setShowRequirements] = useState(false);

  return (
    <section className="pb-6 sm:pb-16 md:pb-16 lg:pb-20 relative">
      {/* <div className="devider-container-bottom">
        <Divider className="from-transparent via-csPrimary to-transparent" />
      </div> */}

      <div className="pb-6 sm:pb-8 md:pb-10 lg:pb-11 xl:pb-12 2xl:pb-14 relative">
        <div className="main-container-2 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-11 xl:gap-12 2xl:gap-14 justify-center items-center">
          {/* header text */}
          <div className="flex flex-col gap-1 justify-center items-center">
            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gradient font-semibold uppercase font-poppins">
              Burn Event:
            </h4>
            <p className="text-center text-[0.625em] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
              100.000.000 tokens will burned at beta-game launch immediatly. And
              another 100.000.000 tokens by kills
            </p>
            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold uppercase font-poppins gradient-text text-center">
              200.000.000 $kata tokens burn Event.
            </h4>
            <p className="text-center text-[0.625em] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
              For each kill in Katanainu Game we burn 10 tokens weekly: 1 Kill =
              Burn 10 tokens.
            </p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px]  text-gradient font-semibold uppercase font-poppins">
              Play Our
            </h4>
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] text-white font-bold uppercase font-poppins gradient-text">
              closed beta now!
            </h4>
          </div>

          {/* download options */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-2 gap-y-1.5 md:gap-y-2 md:gap-x-4 lg:gap-x-5 lg:gap-y-2.5 xl:gap-x-6 2xl:gap-x-7">
            <DownloadButton
              key="download launcher"
              idx={1}
              link={
                "https://download.katanainu.com/Katanainu-launcher.exe"
              }
              icon={
                <Image
                  src={"/assets/images/logo.png"}
                  alt="Katanainu logo"
                  width={50}
                  height={50}
                  className="w-10 sm:w-7 md:w-8 md:h-8 2xl:w-[34px] 2xl:h-[34px]"
                />
              }
              buttonExtraClass="bg-black border border-white/50 w-[188px] sm:w-auto"
              textLabel={
                <p className="font-jost text-sm md:text-xs">Play With</p>
              }
              secondTextLabel={
                <p className="font-jost font-medium text-base leading-[1] md:text-sm md:leading-[1]">
                  Game Launcher
                </p>
              }
            />
            <CustomButtonVariantTwo
              key="download directly"
              primary={false}
              textLable="Download directly"
              buttonHeight="h-11 md:h-10"
              buttonLink="https://download.katanainu.com/Katanainu-launcher.exe"
              textSize="text-xs xl:text-sm"
            />
            <DownloadButton
              key="download for windows"
              idx={2}
              link={
                "https://download.katanainu.com/Katanainu-launcher.exe"
              }
              icon={
                <FaWindows className="w-10 h-10 text-3xl sm:w-9 sm:h-9 sm:text-2xl md:w-8 md:h-8 2xl:w-8 2xl:h-8 2xl:text-3xl" />
              }
              buttonExtraClass="bg-black border border-white/50 w-[188px] sm:w-auto"
              textLabel={
                <p className="font-jost text-sm md:text-xs">Download for</p>
              }
              secondTextLabel={
                <p className="font-jost font-medium text-lg leading-[1] md:text-base md:leading-[0.9]">
                  Windows
                </p>
              }
            />

            {/* requirements */}
            <div onClick={() => setShowRequirements(!showRequirements)}>
              <CustomButtonVariantTwo
                primary={false}
                textLable={
                  showRequirements ? "Hide Requirements" : "Show Requirements"
                }
                buttonHeight="h-11 md:h-10"
                textSize="text-xs xl:text-sm"
              />
            </div>
          </div>

          {showRequirements && <Requirements />}
        </div>

        {/* divider */}
        {/* <div className="devider-container-bottom">
          <Divider className="from-transparent via-csPrimary to-transparent" />
        </div> */}
      </div>

      {/* new ui */}
      <div className="pt-7 sm:pt-9 md:pt-11 lg:pt-12 xl:pt-14 2xl:pt-16 main-container-2">
        <NewUI />
      </div>
    </section>
  );
};

const NewUI = () => {
  return (
    <div className="w-full h-full sm:max-w-[608px] md:max-w-[688px] lg:max-w-[944px] xl:max-w-[1180px] 2xl:max-w-[1400px] mx-auto sm:min-h-[330px] md:min-h-[360px] lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[670px] relative isolate flex flex-col sm:flex-row justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full z-10 hidden sm:block">
        <Image
          src="/assets/icons/closed-beta-bg.svg"
          alt="background"
          width={1600}
          height={670}
          className="min-h-[300px] sm:h-[330px] md:h-[360px] lg:h-[400px] xl:h-[500px] 2xl:h-[670px] object-cover lg:object-contain sm:border-l border-l-csPrimary-foreground lg:border-none select-none pointer-events-none"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center relative z-20 w-full gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 sm:px-3 md:px-4 lg:px-8 xl:px-9 2xl:px-10">
        {/* left content */}
        <div className="flex flex-col gap-3.5 sm:gap-1.5 md:gap-2 lg:ga-3.5 xl:gap-4 2xl:gap-6">
          <h3 className="uppercase text-white font-poppins font-bold text-xl leading-[1.1] sm:text-base sm:leading-[1.05rem] md:text-lg md:leading-[1.2rem] lg:text-2xl lg:leading-[1.6rem] xl:text-3xl 2xl:text-4xl">
            ABOUT <br />
            <span className="gradient-text">KATANA INU</span>
          </h3>

          <div className="flex flex-col gap-2.5 sm:gap-1 md:gap-2 lg:ga-2.5 xl:gap-3 2xl:gap-4">
            <em className="font-poppins font-semibold text-white text-xs sm:text-[0.625em] sm:leading-[1.5] lg:text-sm xl:text-base 2xl:text-lg">
              Don’t have an access key? Sign up to our newsletter & join our
              Discord to stay updated on opportunities to win one!
            </em>

            <div className="w-fit">
              <CustomButtonVariantTwo
                textLable="Win A Key By Joining Our Discord"
                buttonHeight="h-7 sm:h-6 md:h-7 lg:h-8 xl:h-9 2xl:h-10"
                primary={false}
                buttonLink="https://discord.com/invite/katanainu"
                textSize="text-[0.625em] sm:text-[8px] md:text-[0.625rem] xl:text-xs 2xl:text-sm"
                buttonPadding="px-4 lg:px-6 2xl:px-8"
              />
            </div>

            <div className="flex flex-col gap-0.5 lg:gap-1">
              <em className="font-poppins font-semibold text-white text-xs sm:text-xs lg:text-sm xl:text-base 2xl:text-xl">
                or can access our closed beta without an access key if you:
              </em>
              <em className="uppercase font-poppins font-semibold gradient-text text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                Hold 30K $KATA TOKENS
              </em>
              <em className="uppercase font-poppins font-extrabold text-white text-sm sm:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl">
                OR
              </em>
              <em className="uppercase font-poppins font-semibold gradient-text text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                Hold 1 Takeru Genesis Collection NFT
              </em>
              <em className="uppercase font-poppins font-extrabold text-white text-sm sm:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl">
                OR
              </em>
              <em className="font-poppins font-semibold text-white text-xs sm:text-[0.625em] sm:leading-[1.5] lg:text-base xl:text-lg 2xl:text-xl">
                Hold one of the below combinations for the GameZone Sword or
                Bluezilla Axe NFT&apos;s:
              </em>
            </div>
          </div>
        </div>
        {/* right video */}
        <div className="relative w-full pt-[250px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[380px] xl:max-w-[480px] 2xl:max-w-[600px] sm:pt-[170px] md:pt-[180px] lg:pt-[220px] xl:pt-[250px] 2xl:pt-[300px] sm:-top-2 md:-top-2 lg:-top-2.5 xl:-top-3 2xl:-top-4">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/LG4L11Q0pBk?si=0H_3GY9xm3X91OJU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* buttons */}
      <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-12 md:-bottom-11 lg:-bottom-16 xl:-bottom-14 2xl:bottom-0 right-0 h-[114px] sm:h-auto 2xl:h-[140px] sm:mx-3 md:mx-4 lg:mx-8 xl:mx-9 2xl:mx-10 sm:w-[260px] md:w-[280px] lg:w-[360px] xl:w-[460px] 2xl:w-[580px]">
        <div className="w-full h-full flex flex-wrap items-center justify-center gap-x-2 md:gap-x-3 xl:gap-x-4 gap-y-0.5 lg:gap-y-2 2xl:gap-x-5 2xl:gap-y-3">
          {gameTags?.map((tag, idx) => (
            <div key={idx}>
              <CustomButtonVariantTwo
                textLable={tag?.tags}
                buttonType="customAnimatedBlue"
                primary={false}
                secondary={true}
                textSize="text-[0.625rem] sm:text-[8px] lg:text-[0.625em] xl:text-xs 2xl:text-sm"
                buttonPadding="px-3 lg:px-5 xl:px-6 2xl:px-7"
                buttonHeight="h-6 sm:h-5 lg:h-7 xl:h-8 2xl:h-10"
              >
                <p className="uppercase font-poppins text-[0.625rem] sm:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm">
                  {tag?.type}
                </p>
              </CustomButtonVariantTwo>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DownloadButton = ({
  textLabel,
  icon,
  secondTextLabel,
  idx,
  buttonExtraClass,
  link,
}) => {
  return (
    <Link
      key={idx}
      href={link}
      target="_blank"
      rel="noreffrer"
      className={cn(
        "flex items-center justify-center gap-2 xl:gap-3 px-3 py-2 md:px-3.5 xl:px-4 2xl:px-5",
        buttonExtraClass
      )}
    >
      {icon && icon}
      <div className="flex flex-col">
        {textLabel && textLabel}
        {secondTextLabel && secondTextLabel}
      </div>
    </Link>
  );
};

export default PlayClosedBeta;
