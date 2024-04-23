"use client";
import Socials from "./Socials";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
      // console.log(isInView);
    }
  }, [control, isInView]);
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={control}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="bg-primary py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4  dark:text-black"
            iconStyles="text-white text-[20px] transition-all dark:text-black hover:text-white dark:hover:text-primary"
          />
          <div className="text-white dark:text-black">
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved.
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
