"use client";
import React, { useState } from "react";
import Profile from "../../public/images/Profile.jpg";
import { FiAlignJustify } from "react-icons/fi"; // Default mobile toggle icon
import { IoMdClose } from "react-icons/io";
import { navlinks } from "@/constants/navlinks";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { Navlink } from "@/types/navlink";
import { usePathname } from "next/navigation";
import Link from "next/link"; // Next.js Link component for client-side navigation
import { twMerge } from "tailwind-merge";

const people = [
  {
    id: 1,
    name: "Shittu Faruq",
    designation: "Software Developer",
    image: Profile,
  },
];

const SmHeader = () => {
  const [isOpen, setIsOpen] = useState(false); // Track toggle state
  const pathname = usePathname(); // Get current path

  // Function to check if the link is active
  const isActive = (href: string) => pathname === href;

  // Function to toggle mobile menu
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden md:hidden z-50">
      <div className="flex mx-4 py-4 items-center justify-between">
        {/* Profile Tooltip */}
        <AnimatedTooltip items={people} />

        {/* Mobile Toggle Button */}
        <div className="cursor-pointer" onClick={handleToggle}>
          {isOpen ? (
            <IoMdClose className="h-7 w-7" /> // Close icon
          ) : (
            <FiAlignJustify className="h-7 w-7" /> // Mobile toggle icon
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg flex flex-col items-center py-20 px-10 space-y-4 z-40`}
      >
        <IoMdClose onClick={handleToggle} className="h-8 w-8 fixed top-5 right-5" />

        {navlinks.map((link: Navlink) => (
          <li key={link.href} className="w-full">
            <Link
              href={link.href}
              className={twMerge(
                "flex items-center gap-4 text-xl font-medium text-secondary hover:text-blue-500",
                isActive(link.href) && "text-blue-500" // Active link style
              )}
            >
              <link.icon
                size={26}
                className={twMerge(
                  "flex-shrink-0",
                  isActive(link.href) && "text-sky-500" // Icon active color
                )}
              />
              {link.label}
            </Link>
          </li>
        ))}

        {socials.map((link: Navlink) => (
          <li key={link.href} className="w-full">
            <Link
              href={link.href}
              className="flex items-center gap-4 text-xl font-medium text-secondary hover:text-blue-500"
            >
              <link.icon size={26} />
              {link.label}
            </Link>
          </li>
        ))}

        <Badge href="/resume" text="Read Resume" />
      </ul>
    </div>
  );
};

export default SmHeader;
