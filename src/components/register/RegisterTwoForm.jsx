"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import CustomButtonVariantTwo from "../ui/CustomButtonVariantTwo";
import CustomButtonVariant from "../ui/CustomButtonVariant";

const RegisterTwoForm = ({ btnLable }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast({ description: "Email is needed" });
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
      console.log(error, "form error");
      toast({ description: "Registration failed. Please try again." });
      setLoading(false);
      setEmail("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:gap-1 md:gap-1.5 lg:gap-2 xl:gap-3"
    >
      <label
        htmlFor={"email"}
        className=" py-2 sm:py-1 md:py-1.5 lg:py-2 rounded-md lg:rounded-lg flex justify-between sm:justify-start items-center gap-3 w-fit"
      >
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="border border-gray-500 w-full bg-[#000000B2] h-8 min-w-[240px] sm:h-9 sm:min-w-[260px] md:h-10 md:min-w-[300px] lg:h-11 lg:min-w-[350px] xl:h-12 xl:min-w-[420px] 2xl:h-14 2xl:min-w-[500px] pl-3 sm:pl-4 md:pl-6 placeholder:text-white sm:placeholder:text-gray-300 placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base"
          required
        />
      </label>
      {/* btn */}
      <button type="submit" disabled={loading} className="w-fit">
        <CustomButtonVariant
          textLabel={loading ? "Registering..." : "Register"}
          textClass="font-poppins font-bold text-csPrimary uppercase text-black transition-all duration-500 ease-in text-[0.625em] md:text-xs"
          gradElementColor="bg-gradient-to-b from-csPrimary to-csPrimary-foreground"
          buttonExtraClass="bg-white border-none py-1.5 md:py-2.5"
        />
      </button>
    </form>
  );
};

export default RegisterTwoForm;
