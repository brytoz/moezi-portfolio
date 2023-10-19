import React from "react";
import { motion } from "framer-motion";
import { PiArrowBendDownLeftThin } from "react-icons/pi";
import Card from "./Card";
import { SIDDEM, DESIRE, DIFFERENT, DRIFT, FRONTIER, SARE } from "./Images";

export default function Music({ closeAbout }) {
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
        onClick={closeAbout}
        className="flex items-center justify-center rounded-xl mt-2 flex-grow bg-gray-200 p-2 px-4 text-black"
      >
        <PiArrowBendDownLeftThin className="font-bol text-xl" /> Back
      </button>
      <div className="w-full max-h-full scroll overflow-y-scroll md:px-4 my-16 text-white  text-base  flex-wrap md:flex  justify-around  pb-32  ">
        <Card img={SIDDEM} fanlink={"https://soundgenie.fanlink.to/siddem"} text="SIDDEM" songTitle="SIDDEM" />
        <Card img={DESIRE} fanlink={"https://fanlink.to/moezi"} text="DESIIRE" songTitle="DESIIRE" />
        <Card
          img={DIFFERENT}
          fanlink={"https://soundgenie.fanlink.to/Differentstyle"}
          text="DIFFERENT STYLES"
          songTitle="DIFFERENT STYLES"
        />
        <Card img={FRONTIER} fanlink={"https://onerpm.link/708417296142"} text="FRONTIER" songTitle="FRONTIER" />
        <Card img={DRIFT} fanlink={"https://onerpm.link/734033169257"} text="DRIFT" songTitle="DRIFT" /> 
        <Card img={SARE} fanlink={"https://onerpm.link/872598872799"} text="SARE" songTitle="SARE" /> 
      </div>
      
    </motion.div>
  );
}
