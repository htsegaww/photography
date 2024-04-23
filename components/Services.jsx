"use client";
import { Smile, Scan, Bird } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const serviceData = [
  {
    icon: <Smile size={48} strokeWidth={1} />,
    title: "Portraiture",
    description:
      "I specialize in capturing the essence of your personality through portraits. Whether you're a family member or an individual looking for a professional portrait, I use my expertise and creativity to create a unique and memorable image that truly reflects your character. My approach is personalized and collaborative, ensuring that your vision is brought to life in the most authentic way possible.",
  },
  {
    icon: <Scan size={48} strokeWidth={1} />,
    title: "Landscape",
    description:
      "I specialize in capturing the essence of your personality through portraits. Whether you're a family member or an individual looking for a professional portrait, I use my expertise and creativity to create a unique and memorable image that truly reflects your character. My approach is personalized and collaborative, ensuring that your vision is brought to life in the most authentic way possible.",
  },
  {
    icon: <Bird size={48} strokeWidth={1} />,
    title: "Lifestyle",
    description:
      "I specialize in capturing the essence of your personality through portraits. Whether you're a family member or an individual looking for a professional portrait, I use my expertise and creativity to create a unique and memorable image that truly reflects your character. My approach is personalized and collaborative, ensuring that your vision is brought to life in the most authentic way possible.",
  },
];
const Services = () => {
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
      className="mb-12 xl:mb-36"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          duration={{ delay: 0.9, duration: 2, type: "tween" }}
          className="section-title mb-6 xl:mb-24 text-center mx-auto"
        >
          Our Services
        </motion.h2>

        {/* category Items */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          duration={{ delay: 0.9, duration: 2 }}
          className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8"
        >
          {serviceData.map((item, index) => {
            return (
              <Card
                key={index}
                className="relative w-full max-w-[425px] h-[450px] flex lg:flex-col  pb-10 justify-center items-center cursor-pointer hover:bg-tertiary  dark:hover:bg-white/10 transition-all duration-700"
              >
                <CardHeader className="text-primary">
                  <div className="w-[80px] h-[80px] bg-primary text-white  dark:text-black rounded-full flex justify-center items-center absolute -bottom-6 right-6">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
