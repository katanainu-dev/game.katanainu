"use client";

import { navlinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  MobileMenuList,
  MobileMenuListContent,
  MobileMenuListItem,
  MobileMenuListTrigger,
} from "../ui/mobile-menu-list";
import { Button } from "../ui/button";

const MobileNavbar = () => {
  const [showSubMenu, setShowSubMenu] = useState({});

  // This handle mobile sub menu toggle
  const toggleSubMenu = (id) => {
    setShowSubMenu((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggling the state for the clicked submenu
    }));
  };

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <IoMenu size={32} color="#fff" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* logo and close btn */}
            <div className="navLogo">
              <Link href="/">
                <Image
                  src="/assets/images/logo.png"
                  alt="Logo"
                  width={150}
                  height={150}
                  className="w-[150px]"
                />
              </Link>
            </div>
          </SheetHeader>

          {/* menu content */}
          {/* nav links */}
          <ul className="border-b border-[#00000016] ml-0">
            {navlinks.textLinks.map((link, i) => (
              <MobileMenuList key={i} type="single" collapsible>
                <MobileMenuListItem value={`item-${i}`}>
                  {/* menu */}
                  <li className="border-t border-[#00000016] list-none">
                    <span className=" flex justify-between items-center pl-[25px] pr-[14px] py-[8px]">
                      <Link
                        href={link.path}
                        className=" font-medium text-[15px] capitalize w-fit text-black lg:text-white"
                        target={i === 1 || i === 2 ? "_blank" : ""}
                        rel="norefferer"
                      >
                        <SheetClose>{link.label}</SheetClose>
                      </Link>

                      <MobileMenuListTrigger>
                        <span
                          className={`nav-dropdown ${
                            showSubMenu[link.label] ? "rotate-90" : ""
                          }`}
                          onClick={() => toggleSubMenu(link.label)}
                        >
                          {/* <IoIosArrowDown size={16} /> */}
                        </span>
                      </MobileMenuListTrigger>
                    </span>

                    {/* sub menu if exist */}
                    <MobileMenuListContent>
                      <ul className="ml-0">
                        {link.subMenu &&
                          link.subMenu.map((subLink, i) => (
                            <li
                              key={subLink.label}
                              className=" pl-[25px] pr-[14px] py-3 border-t border-[#00000016] list-none"
                            >
                              <Link
                                href={subLink.path}
                                className=" font-medium text-[15px] capitalize ml-6 text-black lg:text-white"
                              >
                                <SheetClose>{subLink.label}</SheetClose>
                              </Link>
                            </li>
                          ))}
                        {/* for second sub menu */}
                        {link.secondSubMenu &&
                          link.secondSubMenu.map((subLink, i) => (
                            <li
                              key={subLink.label}
                              className=" pl-[25px] pr-[14px] py-3 border-t border-[#00000016] list-none"
                            >
                              <Link
                                href={subLink.path}
                                className=" font-medium text-[15px] capitalize ml-6 text-black lg:text-white"
                                target={
                                  i === 1 || i === 2 || i === 3 ? "_blank" : ""
                                }
                                rel="noreferer"
                              >
                                <SheetClose>{subLink.label}</SheetClose>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </MobileMenuListContent>
                  </li>
                </MobileMenuListItem>
              </MobileMenuList>
            ))}
          </ul>

          {/* social links */}
          {/* <ul className="flex gap-5 justify-center items-center px-6 py-8 ml-0">
            {navlinks.socialLinks.map((link, i) => (
              <li key={i} className={`${i === 4 && "hidden"}  list-none`}>
                <Link href={link.path} target="_blank">
                  <SheetClose>
                    <Image
                      width={16}
                      height={16}
                      src={link.imageUrlC}
                      alt={link.name}
                    />
                  </SheetClose>
                </Link>
              </li>
            ))}
          </ul> */}
          {/* button */}
          <div className="flex items-center gap-6 ml-9 mt-5">
            <Button
              variant="customAnimatedBlue"
              className="rounded-none border border-white hover:border-[#46c3ff] flex gap-2 font-poppins uppercase tracking-wide"
            >
              <Image
                src="/assets/icons/open-sea.svg"
                alt="Open sea logo"
                width={24}
                height={24}
              />
              Opensea
            </Button>
            <Button
              variant="customAnimatedBlue"
              className="rounded-none border border-[#46c3ff] flex gap-2 font-poppins uppercase tracking-wide"
            >
              <Image
                src="/assets/images/kainu-logo.png"
                alt="Open sea logo"
                width={72}
                height={25}
              />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavbar;
