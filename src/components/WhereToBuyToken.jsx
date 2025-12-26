"use client";

import Link from "next/link";
import { FaCopy } from "react-icons/fa6";
import { useState } from "react";
import { kataTokenStorePartner } from "@/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CustomButtonVariantTwo from "./ui/CustomButtonVariantTwo";

const tokenStore = [
  {
    place: "uniswap",
    code: "0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15",
    src: "/assets/images/kataToken/uniswap.png",
  },
  {
    place: "Base",
    code: "0x02454a97A8372f3A760A033DBb39E67D73BD6d87",
    src: "/assets/images/logo/base.png",
    link: "https://app.uniswap.org/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15&chain=mainnet",
  },
  {
    place: "pancake swap",
    code: "0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205",
    src: "/assets/images/kataToken/pancake-2.svg",
  },
];

const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhereToBuyToken = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
  };

  return (
    <section className="bg-[url('/assets/images/buy-token-bg.webp')] bg-no-repeat bg-cover">
      <motion.div
        className="main-container py-8 sm:py-10 md:py-12 xl:py-14 2xl:py-20"
        variants={parentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.div className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
          <motion.h3
            className="uppercase text-gradient font-bold tracking-[2px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-poppins text-center"
            variants={fadeUpVariants}
          >
            Where Can I Buy <span className="gradient-text">$KATA</span> Tokens?
          </motion.h3>
          <motion.p
            className="text-xs sm:text-sm md:text-base xl:text-lg italic text-[#d3d3d3] font-medium text-center max-w-[960px]"
            variants={fadeUpVariants}
          >
            Pancake Swap and Uniswap are the easiest outlets for purchasing
            $KATA Token. Copy and Paste the correct contract depending on the
            chain into PancakeSwap / Uniswap and chose the amount you want to
            buy and simply swap it for any other token you have. Be careful not
            to send funds to this address directly, as you will lose your
            tokens.
          </motion.p>
        </motion.div>

        <motion.div className="mt-4 overflow-hidden" variants={fadeUpVariants}>
          <ul className="flex flex-wrap gap-x-5 sm:grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 justify-center items-center place-items-center mx-0">
            {kataTokenStorePartner.map((store, i) => (
              <li key={i} className="sm:mx-4 my-2 list-none">
                <Link href={store.link} target="_blank" rel="noreferrer">
                  <Image
                    src={store.imgUrl}
                    alt={store.storeName}
                    width={154}
                    height={51}
                    className="w-20 object-contain sm:w-auto"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-4 md:gap-5 lg:gap-7 xl:gap-8"
          variants={parentVariants}
        >
          {tokenStore.map((store, i) => (
            <motion.div
              key={i}
              className={`sm:min-w-[240px] md:max-w-[300px] xl:max-w-[400px] 2xl:max-w-[500px] flex flex-col gap-4 justify-center items-center sm:gap-6 md:gap-8 flex-1 border-[0.5px] border-[#ffffff56] p-5 md:p-3 lg:p-4 xl:p-9 2xl:p-10 ${
                i === 0
                  ? "bg-[#F7047D1A]"
                  : i === 1
                  ? "bg-[#014FFF1A]"
                  : "bg-[#D1884F1A]"
              }`}
              variants={itemVariants}
            >
              <div className="flex flex-col items-center gap-4 md:gap-3 lg:gap-4 2xl:gap-8">
                <Image
                  src={store.src}
                  alt={store.place}
                  width={130}
                  height={100}
                  className={`${
                    i === 1
                      ? "w-14 h-12 sm:h-16 sm:w-20 md:h-12 md:w-20 lg:w-28 lg:h-16 xl:w-32 2xl:w-44 object-contain"
                      : "h-12 sm:h-16 md:h-11 lg:h-16 2xl:h-24 2xl:w-44 object-contain"
                  }`}
                />
                <Link
                  href={store?.link || "/"}
                  target={store?.link && "_blank"}
                  rel="noreferrer"
                >
                  <CustomButtonVariantTwo
                    textLable={store?.place}
                    primary={false}
                    tokenButton={true}
                    tokenButtonClass={
                      i === 0
                        ? "bg-[#F7047D]"
                        : i === 1
                        ? "bg-[#014FFF]"
                        : "bg-[#D1884F]"
                    }
                    buttonVariant="tokenButton"
                  />
                </Link>
              </div>
              {store.code && (
                <p
                  onClick={() => copyCode(store.code, i)}
                  className="text-wrap text-white break-all text-center cursor-pointer sm:text-xs lg:text-sm 2xl:text-base"
                >
                  {store.code}
                  <FaCopy color="#fff" size={20} className="inline ml-2 mr-3" />
                  <span className="inline">
                    {copiedIndex === i && "Copied"}
                  </span>
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhereToBuyToken;
