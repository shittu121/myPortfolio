import React from 'react';
import OrbitingItems3D from './ui/orbiting-items-3-d';
import { GithubIcon } from 'lucide-react'; // Import Github icon from lucide-react
import Image from 'next/image';
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiShadcnui } from "react-icons/si";






const OrbitingStack = () => {
  return (
    <OrbitingItems3D
      items={[
        <GithubIcon key="github" className="h-12 w-12" />, // GitHub icon from lucide-react
        <RiNextjsFill key="nextjs" className="h-12 w-12 object-cover" />, // Twitter icon (image)
        <FaReact key="react" className="h-12 w-12 object-cover" />, // React icon (image)
        <BiLogoTailwindCss key="tailwind" className="h-12 w-12" />, // Tailwind icon (image)
        <TbBrandFramerMotion key="framer" className="h-12 w-12" />, // Framer Motion icon (image)
        <SiShadcnui key="shadcn" className="h-12 w-12" /> // Apple icon (image)
      ]}
      radius={50} // Define the radius of the orbiting items
    />
  );
};

export default OrbitingStack;
