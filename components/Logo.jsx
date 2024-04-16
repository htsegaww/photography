"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <Image
        // src={`${theme === "light" ? `/logo.png` : `/logo-black.png`}`}
        src={"/logo-black.png"}
        alt="logo"
        width={55}
        height={55}
      />
    </Link>
  );
};

export default Logo;
