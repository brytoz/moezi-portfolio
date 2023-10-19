import React from "react";
import { motion } from "framer-motion";
import { PiArrowBendDownLeftThin } from "react-icons/pi";
import Gallery from "./Gallery";
import {
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  ELEVEN,
  TWELVE,
  THIRTEEN,
  FOURTEEN,
} from "./Images";

export default function MainGallery({ closeGallery }) {
  const imx = [
    {
      images: ONE,
    },
    {
      images: TWO,
    },
    {
      images: THREE,
    },
    {
      images: FOUR,
    },
    {
      images: FIVE,
    },
    {
      images: SIX,
    },
    {
      images: SEVEN,
    },
    {
      images: EIGHT,
    },
    {
      images: NINE,
    },
    {
      images: TEN,
    },
    {
      images: ELEVEN,
    },
    {
      images: TWELVE,
    },
    {
      images: THIRTEEN,
    },
    {
      images: FOURTEEN,
    },
  ];
  return (
    <motion.div
      animate={{ y: 1, opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, ease: "backIn" }}
      initial={{ y: -260, opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ zIndex: 100 }}
      className="w-full bg-black/90 h-screen absolute top-0 bottom-0 left-0 z-50 px-4  "
    >
      <button
        onClick={closeGallery}
        className="flex items-center justify-center rounded-xl mt-2 flex-grow bg-gray-200 p-2 px-4 text-black"
      >
        <PiArrowBendDownLeftThin className="font-bol text-xl" /> Back
      </button>
      <div className="w-full max-h-full scroll overflow-y-scroll md:px-4 my-16 text-white  text-base  flex-wrap md:flex  justify-around  pb-32  ">
        {imx.map((datas, key) => (
          <Gallery img={datas.images} key={key} />
        ))}
      </div>
    </motion.div>
  );
}
