"use client";

import {
  ArrowRightIcon,
  Building,
  MessageSquare,
  UserCheck,
} from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* first name */}
      <div className="relative flex items-center">
        <Input type="name" id="first name" placeholder="First Name" />
        <UserCheck className="absolute right-6" size={20} />
      </div>

      {/* last name */}
      <div className="relative flex items-center">
        <Input type="name" id="first name" placeholder="Last Name" />
        <UserCheck className="absolute right-6" size={20} />
      </div>
      {/* email */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <Building className="absolute right-6" size={20} />
      </div>

      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea placeholder="Type your message here..." />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>

      <Button className="flex items-center gap-x-1 max-w-[165px] bg-primary text-white">
        Let&apos;s Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
