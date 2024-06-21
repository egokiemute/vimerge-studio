import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container flex flex-col justify-center gap-6 text-cente md:flex-row md:justify-between items-center py-10 bg-transparent w-full  bg-grid-gray-50">
      <div className="flex flex-col items-center md:items-start gap-5">
        <p>&copy; 2024 Vimerge Studio</p>
        <div className="flex items-center gap-8">
          <Link href="/">Subscribe to our Newsletter</Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link
          className="nav-link-hover relative"
          href="/about-us"
        >
          About Us
        </Link>
        <Link
          className="nav-link-hover relative"
          href="https://www.instagram.com/vimerge.studio/"
        >
          Instagram
        </Link>
        <Link
          className="nav-link-hover relative"
          href="https://web.facebook.com/profile.php?id=61559930160694&sk=about"
        >
          Facebook
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
