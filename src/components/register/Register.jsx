"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import Divider from "../shared/Divider";
import Image from "next/image";
import CustomButtonVariantTwo from "../ui/CustomButtonVariantTwo";
import CustomButtonVariant from "../ui/CustomButtonVariant";

const Register = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbzkfjQpghWgF2EMtVLVJlnoa0zzvoQYzDxpqjSXI29s3Caw770NjqyTK95K-JETVhsG/exec",
        null,
        {
          params: { email },
        }
      );
      toast({
        description: "Registration is successfull!",
      });
      setLoading(false);
      setEmail("");
    } catch (error) {
      toast({ description: "Registration failed. Please try again." });
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <div className="bg-black relative pb-[2px]">
      {/* <div className="devider-container-bottom">
        <Divider className="from-transparent via-csPrimary to-transparent" />
      </div> */}

      <section className="bg-[url('/assets/images/register/reg-bg.webp')] bg-no-repeat bg-cover bg-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/assets/images/register/reg-f-w.webp')] bg-no-repeat bg-cover lg:bg-contain" />
        {/* overlay */}
        <div className="block md:hidden w-full h-full absolute z-10 bg-black/50" />
        {/* content */}
        <div className="main-container flex flex-row-reverse justify-center sm:justify-start items-center min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[260px] xl:min-h-[300px] 2xl:min-h-[360px] relative z-20 pr-5">
          {/* content */}
          <div className="flex flex-col gap-0.5 lg:gap-1">
            <h3 className="font-poppins font-semibold text-white shadow-lg uppercase italic text-xs leading-none sm:text-sm sm:leading-tight md:text-base md:leading-tight lg:text-lg lg:leading-[1] 2xl:text-xl">
              ARE YOU READY Warriors?
            </h3>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-csPrimary to-csPrimary-foreground font-poppins font-extrabold uppercase italic text-xl leading-none sm:text-xl sm:leading-none md:text-2xl md:leading-tight lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Register here for free keys:
            </h1>
            {/* <h2 className="font-poppins font-semibold text-white shadow-lg uppercase italic text-lg leading-none sm:text-lg sm:leading-tight md:text-xl md:leading-tight lg:text-2xl xl:text-3xl 2xl:text-4xl">
              OPEN BETA Katana Inu
            </h2> */}
            <form
              onSubmit={handleSubmit}
              className="mt-1 md:mt-2 xl:mt-3 flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7"
            >
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="border border-gray-500 w-full bg-[#000000B2] h-8 min-w-[240px] sm:h-9 sm:min-w-[260px] md:h-10 md:min-w-[300px] lg:h-11 lg:min-w-[350px] xl:h-12 xl:min-w-[420px] 2xl:h-14 2xl:min-w-[500px] pl-3 sm:pl-4 md:pl-6 placeholder:text-white sm:placeholder:text-gray-300"
                required
              />
              {/* <Button
                variant="customAnimated"
                type="submit"
                disabled={loading}
                className="bg-[#ffe500] rounded-none sm:py-4 md:py-3 md:px-6 h-8 lg:h-10 lg:py-5 lg:px-7 xl:px-8 xl:py-5 2xl:px-9 2xl:py-6 font-poppins font-bold text-black uppercase border-none text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl w-fit hover:text-white duration-300 ease-in-out disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {loading ? "Registering..." : "Register"}
              </Button> */}
              <button type="submit" disabled={loading} className="w-fit">
                <CustomButtonVariant
                  textLabel={loading ? "Registering..." : "Register"}
                  textClass="font-poppins font-bold text-csPrimary uppercase text-black transition-all duration-500 ease-in"
                  gradElementColor="bg-gradient-to-b from-csPrimary to-csPrimary-foreground"
                  buttonExtraClass="bg-white border-none"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
