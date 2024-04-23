"use client";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const features = [
  {
    name: "PHOTOGRAPHY",
    description:
      "View your portfolio in a list format. Use our portfolio lists to create amazing galleries of your work. It's easy, intuitive, and most important of all, your work is sure to command attention.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "PORTFOLIO LIST",
    description:
      "View your portfolio in a list format. Use our portfolio lists to create amazing galleries of your work. It's easy, intuitive, and most important of all, your work is sure to command attention.",
    icon: LockClosedIcon,
  },
  {
    name: "FULLY CUSTOMIZABLE",
    description:
      "View your portfolio in a list format. Use our portfolio lists to create amazing galleries of your work. It's easy, intuitive, and most important of all, your work is sure to command attention.",
    icon: ArrowPathIcon,
  },
  {
    name: "FREE PLUGINS",
    description:
      "View your portfolio in a list format. Use our portfolio lists to create amazing galleries of your work. It's easy, intuitive, and most important of all, your work is sure to command attention.",
    icon: FingerPrintIcon,
  },
];
const Features = () => {
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
      className="pb-12 xl:py-24"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, type: "tween" }}
          className="section-title mb-2 xl:mb-3 text-center mx-auto"
        >
          Key Features
        </motion.h2>
        <div className="flex flex-col">
          <div className="mx-auto max-w-7xl text-center">
            <motion.p
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, type: "tween" }}
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Everything you need to deliver faster
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-6 text-lg leading-8"
            >
              It&apos;s wide array of extremely useful and user-friendly
              elements and features turn website creation into a cakewalk. Get
              started ow and see how easy it is to make the website you always
              wanted
            </motion.p>
          </div>
        </div>
        {/* features list */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl ">
          <motion.dl
            initial={{ opacity: 0.6 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{
              amount: "all",
            }}
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
          >
            {features.map((feature) => {
              return (
                <div
                  key={feature.name}
                  className="relative hover:scale-110 transition-all"
                >
                  <dt className="text-base font-semibold leading-7 text-muted-foreground flex items-center gap-4 justify-center ">
                    <div className="flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center ">
                      <feature.icon className="h-[36px] w-[36px] aria-hidden=true" />
                    </div>
                    <div>{feature.name}</div>
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    {feature.description}
                  </dd>
                </div>
              );
            })}
          </motion.dl>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
