"use client";
import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`${
          theme === "dark"
            ? "bg-black text-white"
            : theme === "light"
            ? "bg-white text-black"
            : ""
        }`}
      >
        <SunIcon className="  h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
};

export default ThemeToggle;
