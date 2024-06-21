import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-10 bg-transparent w-full">
      <Link href="/">
        <Image
          src="/assets/logo.png"
          alt="Vimerge Studio"
          width={140}
          height={20}
          className="w-32 h-auto md:w-40 md:h-10"
        />
      </Link>
      <div className="flex flex-row items-center gap-4 relative">
        <Link
          href="/works"
          className="nav-link-hover relative text-[14px] sm:text-base md:text-lg"
        >
          WORKS
        </Link>
        <div className="hidden sm:inline-block">
        <Link
          href="/contact"
          className="hidden md:inline-block nav-link-hover relative text-[14px] sm:text-base md:text-lg"
        >
          CONTACT
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
