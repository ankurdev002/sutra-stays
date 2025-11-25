"use client";
import Image from "next/image";
import Button from "./Button";
import navlinks from "@/constants/navlinks";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-23 bg-[#00000066] flex justify-between items-center px-10 drop-shadow-md">
      <div>
        <Image
          src="/assets/logo/nav-logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div className="lg:hidden">
        <Image
          src="/assets/icons/ham.svg"
          alt="menu"
          width={40}
          height={40}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <div className="hidden lg:flex flex-1 gap-9.5 items-center justify-center">
        {navlinks.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className="text-bone-white text-sm font-medium font-inter px-4"
          >
            <span className="text-bone-white text-sm font-medium font-inter hover:text-deep-green transition-all duration-300">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex gap-2 items-center justify-center">
        <Button
          variant="off-white"
          className="rounded-full text-black border-0"
          label="Book Now"
        />
        <Button
          variant="transparent"
          className="rounded-full"
          label="EN"
          icon={
            <Image
              src="/assets/icons/down-arrow.svg"
              alt="en"
              width={16}
              height={16}
            />
          }
        />
      </div>
    </div>
  );
};

export default Navbar;
