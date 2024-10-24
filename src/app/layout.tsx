import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import SmHeader from "@/components/SmHeader";
import { Tesmonial } from "@/components/Tesmonials";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shittu Faruq - Developer",
  description:
    "Shittu Faruq is a software developer. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <div className="sm-hidden">
         <Sidebar />
        </div>
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-slate-50 lg:border-neutral-200 overflow-y-auto">
            <div className="shadow-2xl fixed w-full z-50 bg-slate-50">
              <SmHeader />
            </div>
            {children}
            <Tesmonial />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
