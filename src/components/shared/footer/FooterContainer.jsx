import React from "react";
import FooterDesc from "./FooterDesc";
import FooterLinks from "./FooterLinks";

export default function FooterContainer() {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-start gap-8 sm:gap-9 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 3xl:gap-20">
      {/* footer descriptions */}
      <FooterDesc />
      {/* footer links */}
      <FooterLinks />
    </div>
  );
}
