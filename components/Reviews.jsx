"use client";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Brain",
    job: "Web Developer",
    review:
      "A big thank you to Brain for crafting a platform that simplifies complex tasks. Your attention to detail and user experience expertise shine through in every interaction. Grateful for your hard work!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Mark Steve",
    job: "App Developer",
    review:
      "Thank you to the Mark for creating such an amazing mobile app! It's beautifully designed and has all the features I need for my daily tasks. You've made my life so much easier!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Henok",
    job: "App Developer",
    review:
      "Huge thanks to Henok for crafting an app that not only looks great but also works flawlessly. Your talent and creativity have made a positive impact on my productivity. Much appreciated!",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Elizabeth",
    job: "App Developer",
    review:
      "I'm incredibly thankful to Elizabeth for designing a platform that meets all my business needs. Your app's reliability and performance have exceeded my expectations. Thank you for your dedication to excellence!",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Betty",
    job: "App Developer",
    review:
      "Thank you to Betty for creating an app that has become an integral part of my daily life. Your attention to user feedback and continuous improvements are evident in the app's quality. I'm grateful for your hard work and commitment to delivering a top-notch experience!",
  },
];
const Reviews = () => {
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
      className="mb-12 xl:mb-32"
    >
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">
          They say about our work
        </h2>
        {/* slider */}
        <Swiper
          // install Swiper modules
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[370px] "
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="p-5 h-full overflow-hidden hover:bg-tertiary cursor-pointer duration-700 transition-all mb-20">
                  <CardHeader className="p-0 mb-1">
                    <div className="flex flex-col items-start gap-3">
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt={person.name}
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p className="mt-2">{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground ">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Reviews;
