"use client";

import { requiremnts } from "@/data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.4 } },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Requirements = () => {
  return (
    <motion.section
      className="main-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="flex flex-col gap-6 lg:gap-8 2xl:gap-10 justify-center items-center">
        {/* Title & Description */}
        <motion.div
          className="flex flex-col justify-center items-center"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col justify-center items-center gap-1"
            variants={textVariants}
          >
            <motion.h5
              className="uppercase text-gradient font-bold tracking-[2px] text-lg md:text-xl lg:text-2xl font-jost"
              variants={textVariants}
            >
              Katana Inu
            </motion.h5>
            <motion.h2
              className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-white font-jost font-bold"
              variants={textVariants}
            >
              System Requirements
            </motion.h2>
          </motion.div>
          <motion.p
            className="text-sm md:text-base lg:text-lg text-center mx-10 sm:mx-0 text-gray-300"
            variants={textVariants}
          >
            Ensure your machine is ready to enter the world of Katana Inu.
          </motion.p>
        </motion.div>

        {/* System Requirements Lists */}
        <motion.div
          className="flex flex-col md:flex-row gap-12 md:gap-14 lg:gap-24"
          variants={containerVariants}
        >
          {/* Minimum Requirements */}
          <motion.ul className="ml-0" variants={containerVariants}>
            <motion.span
              className="text-center text-base md:text-lg 2xl:text-xl font-medium text-white block mb-3"
              variants={textVariants}
            >
              Minimum System Requirements
            </motion.span>
            {requiremnts.minimum.map((req, i) => (
              <motion.li
                key={i}
                className="text-white flex items-start gap-1 list-none 2xl:text-lg"
                variants={listItemVariants}
              >
                <span className="text-[#f9c306] mb-1 font-bold">
                  {req.label}:
                </span>
                <span className="text-[#9b9898] text-left">{req.slug}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Recommended Requirements */}
          <motion.ul className="ml-0" variants={containerVariants}>
            <motion.span
              className="text-center text-base md:text-lg 2xl:text-xl font-medium text-white block mb-3"
              variants={textVariants}
            >
              Suggested System Requirements
            </motion.span>
            {requiremnts.recomended.map((req, i) => (
              <motion.li
                key={i}
                className="text-white flex items-start gap-1 list-none 2xl:text-lg"
                variants={listItemVariants}
              >
                <span className="text-[#f9c306] mb-1 font-bold">
                  {req.label}:
                </span>
                <span className="text-[#9b9898] text-left">{req.slug}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Requirements;
