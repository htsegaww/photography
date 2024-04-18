import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "PHOTOGRAPHY",
    description:
      "View your portfolio in a list format. Use our portfolio lists to create amazing galleries of your work. It's easy, intuitive, and most important of all, your work is sure to command attention.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "PORTFOLIO LIST",
    description:
      "View your portfolio in a list format. Use our portfolio lists to create amazing galleries of your work. It's easy, intuitive, and most important of all, your work is sure to command attention.",
    icon: LockClosedIcon,
  },
  {
    name: "FULLY CUSTOMIZABLE",
    description:
      "View your portfolio in a list format. Use our portfolio lists to create amazing galleries of your work. It's easy, intuitive, and most important of all, your work is sure to command attention.",
    icon: ArrowPathIcon,
  },
  {
    name: "FREE PLUGINS",
    description:
      "View your portfolio in a list format. Use our portfolio lists to create amazing galleries of your work. It's easy, intuitive, and most important of all, your work is sure to command attention.",
    icon: FingerPrintIcon,
  },
];
const Features = () => {
  return (
    <section className="pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">
          Key Features
        </h2>
        <div className="flex flex-col">
          <div className="mx-auto max-w-7xl text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to deliver faster
            </p>
            <p className="mt-6 text-lg leading-8">
              It&apos;s wide array of extremely useful and user-friendly
              elements and features turn website creation into a cakewalk. Get
              started ow and see how easy it is to make the website you always
              wanted
            </p>
          </div>
        </div>
        {/* features list */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl ">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => {
              return (
                <div
                  key={feature.name}
                  className="relative hover:scale-110 transition-all"
                >
                  <dt className="text-base font-semibold leading-7 text-muted-foreground flex items-center gap-4 justify-center ">
                    <div className="flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center ">
                      <feature.icon className="h-[36px] w-[36px] aria-hidden=true" />
                    </div>
                    <div>{feature.name}</div>
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    {feature.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
