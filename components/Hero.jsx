"use client";
import React, { useEffect, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  RiMenFill,
  RiBookmark3Fill,
  RiBodyScanFill,
  RiServiceFill,
} from "react-icons/ri";
import Socials from "./Socials";
import HeroImage from "./HeroImage";
import Badge from "./Badge";
import { motion, useAnimation, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
      console.log(isInView);
    }
  }, [control, isInView]);
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={control}
      transition={{ duration: 0.5, delay: 0.25 }}
      ref={ref}
      className="py-12 xl:py-24 h-[auto] bg-bottom"
      // style={{ overflow: "scroll" }}
    >
      <motion.div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/*  left side of the content */}
          <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div>
              <motion.div
                initial={{ x: -250 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "tween" }}
                className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]"
              >
                Photography
              </motion.div>
            </div>

            <div>
              <motion.h1
                initial={{ x: -250 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "tween" }}
                className="h1 uppercase"
              >
                Let&apos;s make magic!
              </motion.h1>
            </div>

            <div>
              <motion.p
                initial={{ x: -250 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "tween" }}
                className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-auto"
              >
                We are fine art, nature & portrait film photographers from San
                Francisco, with a special love for natural light, medium format
                & redheads with freckles.
              </motion.p>
            </div>

            <div>
              {/* button */}
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <motion.div
                  initial={{ x: -250 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, type: "tween" }}
                  className="flex w-full gap-x-4"
                >
                  <label for="email-address" className="sr-only">
                    Email Address
                  </label>
                  <Input type="email" id="email" placeholder="Email" />
                  <Link href="/contact">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                    >
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-x-2">
                        Subscribe <RiMenFill size={18} />
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, type: "tween" }}
            >
              {/* social icons */}
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </motion.div>
          </div>

          {/* banner image */}
          <motion.div
            initial={{ x: 250 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: "tween" }}
            className="hidden xl:flex relative"
          >
            <HeroImage
              imgSrc={"/photography.svg"}
              containerStyles="w-[550px] h-[475px] bg-no-repeat relative bg-bottom"
            />
          </motion.div>
        </div>
        {/* badge section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.dl
              initial={{ x: 250 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3"
            >
              {/* badge 1 */}
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground ">
                  Years of Experience
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <Badge
                    icon={<RiBookmark3Fill className="dark:text-black" />}
                    endCountNum={12}
                    endCountText="+"
                    className="dark:text-black"
                  />
                </dd>
              </div>
              {/* badge 2 */}
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">
                  Followers
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <Badge
                    icon={<RiBodyScanFill className="dark:text-black" />}
                    endCountNum={967}
                    endCountText="K"
                  />
                </dd>
              </div>
              {/* badge 2 */}
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">
                  Projects
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <Badge
                    icon={<RiServiceFill className="dark:text-black" />}
                    endCountNum={79}
                    endCountText="+"
                  />
                </dd>
              </div>
            </motion.dl>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
