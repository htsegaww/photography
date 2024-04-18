import { Smile, Scan, Bird } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-6 xl:mb-24 text-center mx-auto">
          Our Services
        </h2>

        {/* category Items */}

        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((item, index) => {
            return (
              <Card
                key="index"
                className="relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary  dark:hover:bg-white/10 transition-all duration-700"
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
        </div>
      </div>
    </section>
  );
};

export default Services;
