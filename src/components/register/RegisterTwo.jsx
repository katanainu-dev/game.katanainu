import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import RegisterTwoForm from "./RegisterTwoForm";

const RegisterTwo = () => {
  return (
    <div className="bg-black sm:min-h-[263px] md:min-h-[315px] lg:min-h-[420px] xl:min-h-[570px] 2xl:min-h-[780px] relative overflow-hidden">
      <section>
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <Image
            src={"/assets/images/register-2.webp"}
            alt=""
            width={2400}
            height={788}
            className="min-h-[200px] xl:h-[620px] 2xl:h-[780px] object-cover"
          />
        </div>
        {/* overlay */}
        {/* <div className="block w-full h-full absolute z-10 bg-black/40 sm:bg-black/60 md:bg-black/20" /> */}
        {/* content */}
        <div className="main-container-2 flex flex-row justify-center sm:justify-start items-center min-h-[180px] sm:min-h-[263px] md:min-h-[315px] lg:min-h-[420px] xl:min-h-[570px] 2xl:min-h-[780px] relative z-20">
          <div className="flex flex-col gap-1.5 sm:gap-2.5 md:gap-1.5 lg:gap-3 xl:gap-4">
            <Link href={"/"}>
              <Image
                src={"/assets/images/logo.png"}
                alt="Kainu logo"
                width={150}
                height={50}
                className="w-10 sm:w-14 md:w-16 lg:w-20 xl:w-[100px] 2xl:w-[120px]"
              />
            </Link>
            {/* /////// */}
            <div className="flex flex-col gap-1.5 lg:gap-2.5 xl:gap-3 2xl:gap-4">
              <div className="flex flex-col">
                <p className="italic font-poppins uppercase gradient-text font-extrabold text-lg sm:text-xl sm:leading-[0.8] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  Register Now
                </p>
                <p className="italic font-poppins uppercase text-white font-semibold text-base leading-[0.8] sm:text-lg md:text-xl md:leading-[1] lg:text-2xl lg:leading-[1] xl:text-3xl 2xl:text-4xl">
                  OPEN BETA Katana Inu
                </p>
                <RegisterTwoForm btnLable={"Register"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterTwo;
