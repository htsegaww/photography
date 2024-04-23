"use client";

import React, { useState, useEffect } from "react";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Nav from "./Nav";
import MobileNavigation from "./MobileNavigation";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Header = () => {
  const [header, setHeader] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const scrollYPosition = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    //remove events

    return () => window.removeEventListener("scroll", scrollYPosition);
  });
  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${path === "/" && "bg-white"}`}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-between items-center"
        >
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* navigation */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />

            {/* toggle theme */}
            <ThemeToggle />
            {/* Mobile navigation */}
            <div className="xl:hidden">
              <MobileNavigation />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
