"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { buttonVariants2 } from "../shared/anim";

export default function CustomButtonVariant({
  textLabel,
  icon,
  buttonLink,
  buttonExtraClass,
  gradElementColor,
  imageWidth = 16,
  imageHeight = 16,
  imageClass,
  hoveredIcon,
  hoveredIconClass,
  textClass,
  children,
}) {
  const ButtonContent = () => {
    return (
      <motion.div
        role="button"
        tabIndex={0}
        className={cn(
          "group relative border border-white px-5 py-2.5 flex items-center justify-center overflow-hidden hover:border-transparent duration-500 ease-in isolate",
          buttonExtraClass
        )}
        whileHover="hover"
        initial="initial"
      >
        {/* background element on hover */}
        <motion.div
          className={cn(
            "absolute bg-csPrimary-foreground z-20 rounded-full",
            gradElementColor
          )}
          variants={buttonVariants2}
        />
        {/* content */}
        <div className="flex flex-row items-center justify-between gap-2 relative z-30">
          {/* Show icon if hoveredIcon, and children is not available */}
          {icon && !hoveredIcon && !children && (
            <Image
              src={icon}
              alt={textLabel || "Button Icon"}
              width={imageWidth}
              height={imageHeight}
              className={cn("2xl:w-4 2xl:h-4", imageClass)}
            />
          )}

          {/* Show children if available */}
          {children && children}

          {/* Show hoveredIcon if available */}
          {hoveredIcon && (
            <div className={cn("2xl:w-4 2xl:h-4", hoveredIconClass)}>
              {hoveredIcon}
            </div>
          )}

          {textLabel && (
            <span
              className={cn(
                "font-poppins font-bold uppercase text-xs tracking-widest",
                textClass
              )}
            >
              {textLabel}
            </span>
          )}
        </div>
      </motion.div>
    );
  };

  return buttonLink ? (
    <Link href={buttonLink}>
      <ButtonContent />
    </Link>
  ) : (
    <div>
      <ButtonContent />
    </div>
  );
}
