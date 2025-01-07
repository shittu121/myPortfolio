"use client";

import { usePathname } from "next/navigation";
import { BrowserComponent } from "@/components/ui/browser";

export const Browser = () => {
  const currentPath = usePathname(); // Get the current path

  return (
    <BrowserComponent className="w-full" currentPath={currentPath}>
      {/* <section className={'w-full h-full flex items-center justify-center'}>
        <h1 className={'md:text-xl text-base'}>Hi!</h1>
      </section> */}
    </BrowserComponent>
  );
};
