import React from "react";
import { RiMenFill } from "react-icons/ri";
import { CalendarDaysIcon } from "lucide-react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import { HandRaisedIcon } from "@heroicons/react/24/outline";
const Newsletter = () => {
  return (
    <section>
      <div className="relative bg-tertiary overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div class="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight section-title sm:text-4xl">
                Need a Photographer
              </h2>
              <p className="mt-4 text-lg leading-8 subtitle">
                Sign up for my newsletter to get updates
              </p>

              <div className="mt-6 flex max-w-md gap-x-4">
                {/* <label>Email Address</label> */}
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  placeholder="Enter your email address..."
                />
                <Link href="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-x-2">
                    Subscribe <RiMenFill size={18} />
                  </Button>
                </Link>
              </div>
            </div>

            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="bg-primary text-white dark:text-black p-2 ring-1 ring-white/10 rounded-full">
                  <CalendarDaysIcon className="h-6 w-6" />
                </div>
                <div className="mt-4 font-semibold text-muted-foreground">
                  Weekly articles
                </div>
                <dd className="mt-2 leading-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nisi,
                </dd>
                quam.
              </div>

              <div className="flex flex-col items-start">
                <div className="bg-primary text-white dark:text-black p-2 ring-1 ring-white/10 rounded-full">
                  <HandRaisedIcon className="h-6 w-6" />
                </div>
                <div className="mt-4 font-semibold text-muted-foreground">
                  Full Security
                </div>
                <dd className="mt-2 leading-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nisi,
                </dd>
                quam.
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
