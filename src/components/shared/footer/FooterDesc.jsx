import { footerSocialLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export default function FooterDesc() {
  return (
    <div
      className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-7 2xl:gap-8 3xl:gap-10
     md:max-w-[480px] lg:max-w-[670px] xl:max-w-[800px] 2xl:max-w-[940px] 3xl:max-w-[1100px]"
    >
      {/* logo */}
      <Image
        src={"/assets/images/logo.png"}
        alt="Logo"
        width={100}
        height={100}
        className=" w-20 sm:w-14 md:w-12 lg:w-14 xl:w-16 2xl:w-20 3xl:w-24"
      />
      {/* description & socials */}
      <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-9 xl:gap-10 2xl:gap-12 3xl:gap-14">
        {/* description */}
        <p className="text-white font-tahoma text-xs sm:text-xs lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl">
          <span className="gradient-text font-bold">
            KATANA INU IS A A PROJECT FROM CHAINVISION GAMES
          </span>
          
        </p>

        {/* social link */}
        <div
          className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5
         xl:gap-4 2xl:gap-5 3xl:gap-6"
        >
          {/* social link */}
          <div
            className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6
         xl:gap-7 2xl:gap-8 3xl:gap-10"
          >
            {footerSocialLinks?.map((li, idx) => (
              <Link href={li.link} target="_blank" rel="noreferrer" key={idx}>
                <Image
                  src={li.icon}
                  alt=""
                  width={46}
                  height={33}
                  className="h-4 lg:h-5 xl:h-6 2xl:h-7 3xl:h-8 object-contain"
                />
              </Link>
            ))}
          </div>
          {/* footer closing text */}
          <p className="font-poppins text-white text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl tracking-wide">
            © All Right Reserved, katanainu.com
          </p>
        </div>
      </div>
    </div>
  );
}
