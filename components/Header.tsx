import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="container flex justify-between items-center py-6 bg-transparent w-full">
      <Image
        src="/assets/main-logo.png"
        alt="Vimerge Studio"
        width={200}
        height={30}
      />
      <div className="flex flex-row items-center gap-4 relative">
        <Link href="/works" className="nav-link-hover relative hidden md:inline-block">
          WORKS
        </Link>
        <Link href="/works" className="nav-link-hover relative">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
