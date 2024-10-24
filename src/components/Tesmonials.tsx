"use client";
import { CardStack } from "../components/ui/card-stack";
import { cn } from "../../lib/utils";
import { Heading } from "./Heading";
export function Tesmonial() {
  return (
    <div className="">
        <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg px-4 lg:px-24 md:px-56 mb-5 -mt-16 lg:-mt-5 md:-mt-5 py-10 lg:py-0"
      >
        What they say about me
      </Heading>
      <div className="h-[40rem] -my-0 lg:-my-10 flex items-center justify-center w-full">
        <CardStack items={CARDS} offset={12} scaleFactor={0.08} />
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}

    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Plartform",
    designation: "Software Developer on Fiverr",
    content: (
      <p>
        Great seller, good work ethic, <Highlight>Finds solutions to things that haven&apos;t been done before</Highlight> Very Skilled and provided future extended value with new tools of use
      </p>
    ),
    imageUrl: "/images/review1.jpg",
    
  },
  {
    id: 1,
    name: "Plartform",
    designation: "Web Developer on Upwork",
    content: (
      <p>
        <Highlight>Great to work with,</Highlight> good english, good skills, eager to learn.
      </p>
    ),
    imageUrl: "/images/review2.jpg",
  },
  {
    id: 2,
    name: "Gregwood",
    designation: "Worked on Slack Bot Automation on Fiverr",
    content: (
      <p>
        Chatpdf was
        <Highlight>fantastic to work with</Highlight> I had a specific set of needs from the project,
        which he helped make a reality, and i personally place a high value on communication, and his was always
        prompt and reasonable and polite...
      </p>
    ),
    imageUrl: "/images/review3.jpg",
  },
];
