"use client";

import React from "react";
import { cn } from "../../../lib/cn";

interface BrowserComponentProps {
  children?: React.ReactNode;
  className?: string;
  currentPath?: string; // Add a prop for the current path
}

export const BrowserComponent: React.FC<BrowserComponentProps> = ({
  className,
  children,
  currentPath = "/", // Fallback to "/" if no path is provided
}) => {
  return (
    <div className={cn("relative text-sm rounded-lg w-full h-14", className)}>
      <div
        className={
          "border-b border-inherit flex items-center justify-between w-full py-4 px-4 bg-inherit rounded-t-lg"
        }
      >
        <div className={"flex gap-2"}>
          <div className={"w-3 h-3 rounded-full dark:bg-neutral-800 bg-neutral-300"} />
          <div className={"w-3 h-3 rounded-full dark:bg-neutral-800 bg-neutral-300"} />
          <div className={"w-3 h-3 rounded-full dark:bg-neutral-800 bg-neutral-300"} />
        </div>
        <div
          className={
            "border border-inherit rounded-md flex gap-2 px-1.5 py-1 font-sans w-fit min-w-1/3"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            className={"dark:stroke-neutral-700 stroke-neutral-300 w-4 max-w-5"}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className={"text-sm flex items-center justify-center"}>
            {`my-portfolio-xi-opal-77.vercel.app${currentPath}`}
          </span>
        </div>
        <div />
      </div>
      <div className={"w-full h-full absolute top-0 left-0 pt-12"}>{children}</div>
    </div>
  );
};
