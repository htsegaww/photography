import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <section className="bg-primary py-12">
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
    </section>
  );
};

export default Footer;
