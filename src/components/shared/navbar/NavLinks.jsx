import { navlinks } from "@/constant";
import Link from "next/link";

export default function NavLinks() {
  return (
    <ul className="flex flex-col md:flex-row">
      {navlinks.textLinks.map((link, idx) => (
        <Link
          href={link.path}
          key={idx}
          className="font-poppins font-semibold text-sm sm:text-xs lg:text-sm 2xl:text-base md:px-3 lg:px-4 2xl:px-6 hover:text-csPrimary transition-ease whitespace-nowrap"
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
}
