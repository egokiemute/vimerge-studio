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
          className="nav-link-hover relative hidden md:inline-block text-base md:text-lg"
        >
          WORKS
        </Link>
        <Link
          href="/contact"
          className="nav-link-hover relative text-base md:text-lg"
        >
          CONTACT
        </Link>
        {/* <Link href="/contact">
          <button className="px-8 md:px-12 py-2 text-base md:text-lg rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Let&apos;s Build
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
