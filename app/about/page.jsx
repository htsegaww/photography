"use client";
import HeroImage from "@/components/HeroImage";
import { motion } from "framer-motion";
import {
  RiRidingFill,
  RiSendPlaneFill,
  RiStarHalfLine,
  RiUserHeartFill,
  RiVidiconFill,
  RiVipCrown2Fill,
} from "react-icons/ri";

const infoData = [
  {
    icon: <RiUserHeartFill size={20} />,
    text: "Mrs Smith",
  },
  {
    icon: <RiSendPlaneFill size={20} />,
    text: "+(1)-317-99-4657",
  },
  {
    icon: <RiVidiconFill size={20} />,
    text: "Photography@gmail.com",
  },
  {
    icon: <RiVipCrown2Fill size={20} />,
    text: "Mrs Smith",
  },
  {
    icon: <RiStarHalfLine size={20} />,
    text: "Born on 23 Jan, 2000",
  },
  {
    icon: <RiRidingFill size={20} />,
    text: "Indianapolis",
  },
];
const About = () => {
  return (
    <section className=" pb-12 xl:py-24 min-h-screen ">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="section-title mb-8 xl:mb-16 text-center mx-auto"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: "tween" }}
            className="relative flex-1 xl:flex"
          >
            <HeroImage
              containerStyles="w-[450px] h-[450px] lg:w-[505px] lg:h-[505px] bg-no-repeat relative"
              imgSrc="/about/profile.jpg"
            />
          </motion.div>

          <div className="flex-1">
            {/* content */}

            <div className="text-lg mt-12 xl:mt-3">
              <motion.div
                initial={{ x: 250 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "tween" }}
                className="text-center xl:text-left"
              >
                <h3 className="h3 mb-4">
                  Let&apos;s plan your perfect photoshoot
                </h3>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                  Our mission is to further develop the overall excellence of
                  photography and to capture memories that will be cherished for
                  a lifetime, in the timeless photographs.
                </p>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                  Professional photography services combine the classic
                  knowledge of traditional photographic portraiture and
                  contemporary style.
                </p>

                {/* icons */}

                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                  {infoData.map((item, index) => {
                    return (
                      <div key={index} className="flex gap-x-8 ">
                        <div className="text-primary">{item.icon}</div>
                        <div>{item.text}</div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
