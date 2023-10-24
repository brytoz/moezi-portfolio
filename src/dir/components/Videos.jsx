import React from "react";
import { motion } from "framer-motion";
import { PiArrowBendDownLeftThin } from "react-icons/pi";
import { FRONTIER2, SARE2 } from "./Images";
import VideoCard from "./VideoCard";

export default function Videos({ closeVideos }) {
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
        onClick={closeVideos}
        className="flex items-center justify-center rounded-xl mt-2 flex-grow bg-gray-200 p-2 px-4 text-black"
      >
        <PiArrowBendDownLeftThin className="font-bol text-xl" /> Back
      </button>
      <div className="  w-full max-h-full scroll overflow-y-scroll md:px-4 my-16 text-white  text-base  flex-wrap md:flex  md:justify-around  pb-32  ">
        <VideoCard
          img={FRONTIER2}
          fanlink={"https://youtu.be/bslGD_1hyvo?si=ZSj6sis-NpY9FpCa"}
          text="-Moezi"
          songTitle="FRONTIER"
          extra="Moezi [official music video]
        CREDITS:
        Director: Felix Awolaye//@mufasastudios7071
        Creative director: Anyanwu Franklyn Nnamdi
        Gaffer: Ikechukwu Ndubuisi Peter
        Cast: Nwankpa James Chibueze
        Set design: Ekeh Ugochukwu, Ogoke Harrison"
        />

        <VideoCard
          img={SARE2}
          fanlink={"https://youtu.be/7IJlk01FEDw?si=AUpSHABUtoXmmZp2"}
          text="-Moezi"
          songTitle="SARE"
          extra="Moezi - SARE [official music video]

        Directed + edited by: Simeonumez
        Song produced by: Akiira
        Creative director: High Roller
        co-creative director: Xdeoye
        Executive producer: High Roller
        lighting: J71 production 
        Cast 1: James Clara
        Cast 2: Anyamele osinnachi
        Cast 3: Valerie Akindele
        Cast 4: Purple God
        Styling: High Roller"
        />
      </div>
    </motion.div>
  );
}
