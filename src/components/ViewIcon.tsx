import React from "react";
import IconRipple from "./ui/icon-ripple";

// Define the custom SVG icon
const CustomSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mx-4"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045" />
      <path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0" />
    </g>
  </svg>
);

// Create the ViewIcon component
const ViewIcon: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <IconRipple
        icon={CustomSvg} // Pass the SVG component
        iconSize={40} // Size of the icon
        iconColor="#4caf50" // Icon color
        borderColor="#4caf50" // Ripple border color
        inset="20px" // Padding for ripple effect
      />
    </div>
  );
};

export default ViewIcon;