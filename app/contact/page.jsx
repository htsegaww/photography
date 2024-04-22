import Form from "@/components/Form";
import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24">
          {/* left content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hello
            </div>
            <h1 className="h1 max-w-md mb-8">
              Let&apos;s get in touch!
              <br />
              I&apos;d love to hear from you.
            </h1>
            <p className="subtitle max-w-[400px]">
              Thanks so much for considering us to photograph you, it really is
              such an honour. Interested in learning more or just want to say
              hello? Kindly fill out the contact form below and we will contact
              you as soon as possible! We can&apos;t wait to hear from you and
              capture your beautiful story.
            </p>
          </div>

          <div className="lg:mt-24">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
