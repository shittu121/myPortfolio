import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "React",
      src: "/images/react.jpg",

      className: "h-10 w-10",
    },
    {
      title: "Firebase",
      src: "/images/firebase.jpg",

      className: "h-10 w-14",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",

      className: "h-10 w-10",
    },
    {
      title: "Shadcn",
      src: "/images/shadcn.jpg",

      className: "h-10 w-24",
    },
    {
      title: "Aceternity",
      src: "/images/aceternity.jpg",

      className: "h-10 w-20",
    },
    {
      title: "Html",
      src: "/images/html.jpg",

      className: "h-10 w-14",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Php",
      src: "/images/php.png",

      className: "h-10 w-20",
    },
    {
      title: "Mysql",
      src: "/images/mysql.jpg",

      className: "h-10 w-14",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
