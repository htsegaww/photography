"use client";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import React from "react";

const includedFeatures = [
  "private forum access",
  "member Resources",
  " Entry to annual conference",
  "Official member equipment",
];
const Pricing = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 1 }}
          className="section-title mb-8 xl:mb-16 text-center mx-auto"
        >
          My pricing
        </motion.h2>

        <motion.div
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xl sm:text-center "
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Memories worth love cherishing
          </h2>
          <p>
            I offer a variety of packages to fit your needs. All my photos are
            taken in person and edited by hand, so you can be sure that every
            photo is as good as it gets.
          </p>
        </motion.div>

        {/* pricing data */}

        <div className="mx-auto mt-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          {/* left section */}
          <motion.div
            initial={{ x: 250 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-10 lg:flex-auto"
          >
            <h3 className="text-2xl font-bold tracking-tight">
              Lifetime Membership
            </h3>
            <p className="mt-10 flex items-center gap-x-4">
              Get access to all my photos for life! This includes unlimited
              downloads, printable prints, and exclusive discounts on other
              products. It is the perfect way to enjoy my work without any
              limits.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                What&apos;s included
              </h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>

            <ul
              role="list"
              className="mt-8 grid grid-cols gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => {
                return (
                  <li
                    key={feature}
                    className="flex text-muted-foreground gap-x-3"
                  >
                    <CheckIcon
                      className="h-6 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* right section */}

          <motion.div
            initial={{ x: 250 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0"
          >
            <div className="bg-tertiary py-10 rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight">
                    $349
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide">
                    USD
                  </span>
                </p>
                <Button
                  className="gap-x-2 mt-3 bg-primary text-white"
                  onClick={() => {
                    toast({
                      title: "Purchased successfully",
                      description: "Friday, february 10, 2024 at 5:57pm",

                      action: <ToastAction altText="Close">Close</ToastAction>,
                    });
                  }}
                >
                  Purchase
                </Button>
                <p className="mt-6 text-xs leading-5">
                  1 month free trial
                  <br />
                  No credit card required
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
