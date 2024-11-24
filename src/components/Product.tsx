"use client";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion } from "framer-motion";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );
  return (
    <div className="py-10">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={product.slug}
        className="relative"
      >
        <Image
          src={activeImage}
          alt="thumbnail"
          height="1000"
          width="1000"
          className="rounded-md object-contain"
        />
        <div className="rounded-md object-contain" />
      </motion.div>
      <div className="flex flex-row justify-center my-8 flex-wrap">
        {product.images.map((image, idx) => (
          <button
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
          >
            <Image
              src={image}
              alt="product thumbnail"
              height="1000"
              width="1000"
              className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-r border rounded-lg border-neutral-100"
            />
          </button>
        ))}
      </div>
      <div className="flex lg:flex-row gap-10 justify-between items-center flex-col mt-20">
        <Heading className="font-black mb-2 pb-1"> {product.title}</Heading>
        <div className="grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 lg:space-x-2 md:mb-1 mt-2 md:mt-0">
          {product.stack?.map((stack: string) => (
            <span
              key={stack}
              className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Paragraph className="max-w-xl mt-4">{product.description}</Paragraph>
      </div>
      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600">
        {product?.content}
      </div>

      <div className="block space-y-5 space-x-2 lg:space-y-0 md:space-y-0 md:flex lg:flex items-center justify-between gap-4">
        <a
          href={product.href}
          target="__blank"
          className="inline-flex flex-shrink-0 items-center gap-2 rounded-full hover:scale-105 transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 group/button:hover:bg-gray-50/15 focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2"
        >
          Live Preview
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 transition-transform group/button:hover:translate-x-0.5"
        >
           <path d="M5 12l14 0"></path>
           <path d="M13 18l6 -6"></path>
           <path d="M13 6l6 6"></path>
          </svg>
        </a>

        <a
    href={product.github}
    target="__blank"
    className="inline-flex flex-shrink-0 items-center gap-2 rounded-full hover:scale-105 transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 group/button:hover:bg-gray-50/15 focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2"
  >
    View Code on GitHub
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 transition-transform group/button:hover:translate-x-0.5"
    >
      <path d="M5 12l14 0"></path>
      <path d="M13 18l6 -6"></path>
      <path d="M13 6l6 6"></path>
    </svg>
        </a>
      </div>

    </div>
  );                            
};           