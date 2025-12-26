"use client";

import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { useEffect, useRef, useState } from "react";
import CustomButtonVariantTwo from "@/components/ui/CustomButtonVariantTwo";
import Divider from "../Divider";
import CustomButtonVariant from "@/components/ui/CustomButtonVariant";

export default function Navbar() {
  // const [navHeight, setNavHeight] = useState(0);
  // const headerRef = useRef(null);

  // // storing scroll Y value to conditionally show nav button & animate element
  // useEffect(() => {
  //   function handleScroll() {
  //     if (headerRef.current) {
  //       setNavHeight(window.scrollY);
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header
      // ref={headerRef}
      className={` top-0 left-0 w-full z-50 fixed animate-fade-in bg-gradient-to-r from-black to-black/80 border-b`}
    >
      <div className="relative w-full">
        {/* nav */}
        <nav className="main-container-2 max-screen-width flex items-center justify-between gap-10 w-full py-3.5 lg:py-4 2xl:py-5">
          <div className="flex items-center justify-between gap-10">
            <Link href={"/"}>
              <Image
                src={"/assets/images/logo.png"}
                alt="Kainu logo"
                width={150}
                height={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`w-10 h-10 lg:w-11 lg:h-11`}
              />
            </Link>

            <div className="hidden lg:block">
              <NavLinks />
            </div>
          </div>

          <div className="hidden sm:flex items-center justify-between gap-3">
            <div className="hidden sm:block">
              <CustomButtonVariant
                textLabel="Get started"
                textClass="font-poppins font-bold text-csPrimary uppercase group-hover:text-black transition-all duration-500 ease-in"
                gradElementColor="bg-gradient-to-b from-csPrimary to-csPrimary-foreground"
              />
            </div>
            <div className="hidden sm:block lg:hidden">
              <MobileNav />
            </div>
          </div>

          {/* mobile nav */}
          <div className="block sm:hidden">
            <MobileNav />
          </div>
        </nav>
        {/* border bottom */}
        {/* <div className="devider-container-bottom">
          <Divider />
        </div> */}
      </div>
    </header>
  );
}
