import { motion } from "framer-motion";
import Link from "next/link";
import { perspectice1 } from "./anim";
import CustomButtonVariantTwo from "@/components/ui/CustomButtonVariantTwo";
import { navlinks } from "@/constant";
import CustomButtonVariant from "@/components/ui/CustomButtonVariant";

const MobileNavOptions = () => {
  return (
    <div className="text-white font-medium text-xl px-6 pt-14 pb-8 bg-black rounded-2xl">
      {navlinks.textLinks.map((link, i) => {
        return (
          <div key={i} className="mobile-link-container">
            <motion.div
              className="py-1.5"
              custom={i}
              variants={perspectice1}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              <Link href={link.path}>{link.label}</Link>
            </motion.div>
          </div>
        );
      })}

      <div className="flex flex-wrap gap-2 pt-5 sm:hidden">
        <CustomButtonVariant
          textLabel="Get started"
          textClass="font-poppins font-bold text-csPrimary uppercase group-hover:text-black transition-all duration-500 ease-in"
          gradElementColor="bg-gradient-to-b from-csPrimary to-csPrimary-foreground"
        />
      </div>
    </div>
  );
};

export default MobileNavOptions;
