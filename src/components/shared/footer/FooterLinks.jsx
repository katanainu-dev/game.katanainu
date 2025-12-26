import { footerLinksAbout, footerLinksSupport } from "@/constant";
import Link from "next/link";

export default function FooterLinks() {
  return (
    <div className="sm:ml-[70px] md:ml-0 flex items-start gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 2xl:gap-5 3xl:gap-6">
      {/* about links */}
      <div className="flex flex-col gap-4 min-w-24 sm:min-w-24 md:min-w-20 lg:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[150px] 3xl:min-w-[195px]">
        <TextLabel label="About" key="About" />

        {/* links */}
        <FooterLinksContainer data={footerLinksAbout} key="about links" />
      </div>
      {/* support links */}
      <div className="flex flex-col gap-4 3xl:min-w-[195px]">
        <TextLabel label="Support" key="About" />

        {/* links */}
        <FooterLinksContainer data={footerLinksSupport} key="support links" />
      </div>
    </div>
  );
}

const TextLabel = ({ label }) => {
  return (
    <p className="gradient-text font-tahomaBold font-bold text-xs sm:text-[0.625em] md:text-xs lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl">
      {label}
    </p>
  );
};

const FooterLinksContainer = ({ data }) => {
  return (
    <div className="flex flex-col">
      {data?.map((li) => (
        <Link
          href={li.link}
          key={li.label}
          target="_blank"
          rel="noreferrer"
          className="text-[#747474] hover:text-white transition-ease font-tahoma text-xs sm:text-[0.625em] lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg gap-1 py-2 lg:py-2.5 3xl:py-3"
        >
          {li.label}
        </Link>
      ))}
    </div>
  );
};
