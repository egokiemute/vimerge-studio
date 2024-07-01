import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-10 bg-transparent w-full">
      <Link href="/">
        <img
          src="/assets/logo.png"
          alt="Vimerge Studio"
          className="w-32 h-auto md:w-40"
        />
      </Link>
      <div className="flex flex-row items-center gap-4 relative">
        <Link
          href="/works"
          className="nav-link-hover relative text-base font-medium"
        >
          WORKS
        </Link>
        <div className="hidden sm:inline-block">
        <Link
          href="/contact"
          className="hidden md:inline-block nav-link-hover relative text-base font-medium"
        >
          CONTACT
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
