"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import OrbitingStack from "../OrbitingStack";


let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  imageUrl: string;
  icons: React.ReactNode; // Added this field for icons
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 4000);
  };

  return (
    <div className="relative mx-4 lg:mx-16 md:mx-56 h-full lg:h-[26rem] w-full">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-white w-full h-full rounded-3xl p-4 shadow-xl border flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700">
                {card.content}
            </div>
            <div className="block lg:flex md:justify-between lg:justify-center gap-0 lg:gap-20 w-full items-center">
              <div>
               <Image src={card.imageUrl} className="flex mx-auto lg:mx-0 w-96 my-0 lg:my-5 lg:w-60 md:w-52 h-[25rem] lg:h-64 object-cover" alt="review1" width={200} height={50} />
              </div>
              <div className="">
                <p className="text-neutral-500 font-medium">
                  {card.name}
                </p>
                <p className="text-neutral-400 font-normal">
                  {card.designation}
                </p>
              </div>
              <div className="mx-10 sm-hidden md:hidden lg:flex">
              {card.icons}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
