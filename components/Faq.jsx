import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full pt-12 mb-6 xl:mb-24">
          <h2 className="section-title mb-12 text-center mx-auto">
            Our Studio
          </h2>
        </div>
        {/* accordion */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="mb-3">
                01.what kind of photography equipment do you use?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              But I must explain to you how a photo is not just a picture. The
              photo is a window into the soul of man in search of but the photo
              is a window into the soul of man in search of connection with
              others and nature.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="mb-3">
                02.Do i have to come to studio to view my photos?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              But I must explain to you how a photo is not just a picture. The
              photo is a window into the soul of man in search of but the photo
              is a window into the soul of man in search of connection with
              others and nature.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="mb-3">02.How long have you been in business?</div>
            </AccordionTrigger>
            <AccordionContent>
              But I must explain to you how a photo is not just a picture. The
              photo is a window into the soul of man in search of but the photo
              is a window into the soul of man in search of connection with
              others and nature.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
