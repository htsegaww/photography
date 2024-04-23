"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Faq = () => {
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
    >
      <div className="container mx-auto">
        <div className="w-full pt-12 mb-6 xl:mb-24">
          <h2 className="section-title mb-12 text-center mx-auto">
            Our Studio
          </h2>
        </div>
        {/* accordion */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="mb-3">
                01.what kind of photography equipment do you use?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              But I must explain to you how a photo is not just a picture. The
              photo is a window into the soul of man in search of but the photo
              is a window into the soul of man in search of connection with
              others and nature.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="mb-3">
                02.Do i have to come to studio to view my photos?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              But I must explain to you how a photo is not just a picture. The
              photo is a window into the soul of man in search of but the photo
              is a window into the soul of man in search of connection with
              others and nature.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="mb-3">02.How long have you been in business?</div>
            </AccordionTrigger>
            <AccordionContent>
              But I must explain to you how a photo is not just a picture. The
              photo is a window into the soul of man in search of but the photo
              is a window into the soul of man in search of connection with
              others and nature.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.section>
  );
};

export default Faq;
