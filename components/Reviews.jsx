"use client";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Brain",
    job: "Web Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor error expedita assumenda amet vitae esse molestiae, ea similique alias",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Mark Steve",
    job: "App Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor error expedita assumenda amet vitae esse molestiae, ea similique alias",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Henok",
    job: "App Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor error expedita assumenda amet vitae esse molestiae, ea similique alias",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Elizabeth",
    job: "App Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor error expedita assumenda amet vitae esse molestiae, ea similique alias",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Betty",
    job: "App Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor error expedita assumenda amet vitae esse molestiae, ea similique alias",
  },
];
const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
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
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-3">
                    <div className="flex flex-col items-start gap-x-4">
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt={person.name}
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
          ...
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
