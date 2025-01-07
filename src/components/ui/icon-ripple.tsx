"use client";

import { Mic } from "lucide-react";

import { cn } from "../../../lib/utils";

interface IconRippleProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Icon we want to have.
     */
    icon: React.ElementType | React.ReactNode; // Allow React components or JSX elements
    /**
     * Size of Icon
     */
    iconSize?: number;
    /**
     * Color of the Icon
     */
    iconColor?: string;
    /**
     * Border color that will have ripple animation
     */
    borderColor?: string;
    /**
     * Padding around the icon
     */
    inset?: string;
  }
  
  export default function IconRipple({
    icon: Icon = null,
    iconSize = 24,
    iconColor = "#ddd",
    borderColor = "#ddd",
    inset = "10px",
  }: IconRippleProps) {
    const customBorderStyle = {
      borderColor,
    };
    const insetStyle = {
      top: `-${inset}`,
      bottom: `-${inset}`,
      left: `-${inset}`,
      right: `-${inset}`,
    };
  
    return (
      <div className={cn("group relative flex items-center justify-center")}>
        {typeof Icon === "function" ? (
          <Icon size={iconSize} color={iconColor} />
        ) : (
          <div
            style={{ width: iconSize, height: iconSize, fill: iconColor }}
            dangerouslySetInnerHTML={{ __html: Icon as string }}
          />
        )}
        <div
          className={cn("absolute mt-5 -inset-4 animate-ping rounded-full h-8 mx-8 w-10 border-2")}
          style={{ ...customBorderStyle, ...insetStyle }}
        />
      </div>
    );
  }
  