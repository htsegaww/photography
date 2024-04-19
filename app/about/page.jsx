import HeroImage from "@/components/HeroImage";
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
    <section className=" pb-12 xl:py-24 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative flex-1 xl:flex">
            <HeroImage
              containerStyles="w-[450px] h-[450px] lg:w-[505px] lg:h-[505px] bg-no-repeat relative"
              imgSrc="/about/profile.jpg"
            />
          </div>

          <div className="flex-1">
            {/* content */}

            <div className="text-lg mt-12 xl:mt-3">
              <div className="text-center xl:text-left">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
