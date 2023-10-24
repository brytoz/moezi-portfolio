import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsYoutube } from "react-icons/bs";

export default function VideoCard({extra, img, songTitle, fanlink, text }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`max-w-sm mb-8 mt-8 md:mt-0 relative  `}
     

    >
      
 {/* {hovered && (
        <motion.div
          transition={{ delay: 0.07, ease: "easeIn" }}
          animate={{ y: 1, opacity: 1, scale: 1 }}
          initial={{ y: -260, opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-black/90 absolute text-white z010 h-full w-full p-2 rounded"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          voluptatibus commodi eos atque, non consectetur deleniti. Labore hic
          consectetur error excepturi. Aut quibusdam perferendis sapiente nisi
          non quisquam porro quo.
        </motion.div>
      )}  */}

      <div className="w-full rounded overflow-hidden shadow-lg bg-gray-200">
        <div className="w-full md:w-72 h-[16rem] md:h-[16rem]  relative"
         onMouseLeave={() => setHovered(false)}
         onMouseEnter={() => setHovered(true)}
         >
          {hovered && (
        <motion.div
          transition={{ delay: 0.07, ease: "easeIn" }}
          animate={{ y: 1, opacity: 1, scale: 1 }}
          initial={{ y: -260, opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-black/90 absolute text-white z010 h-full w-full p-2 "
        >
          {extra}
        </motion.div>
      )} 
          <img
            src={img}
            className="text-xs h-[16rem] md:h-[16rem]  object-cover bg-no-repeat bg-center w-full"
            style={{ objectFit: "cover" }}
            alt="image"
          />
        </div>
        <div className="pl-2 ">
          <div className="font-bold text-xl mb-2 text-black">{songTitle}</div>
          <p className="text-black text-base">
            {text}  
          </p>
        </div>
        <div className="pl-2 pt-4 pb-2">
          <a
            target="_blank"
            href={fanlink}
            className=" bg-gray-900 hover:bg-orange-500 transition-all ease-linear delay-75  hover:text-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
          >
            Play  Video
          </a>
          {/* <span className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            #Apple
          </span>
          <span className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            #winter
          </span> */}
        </div>
      </div>
    </div>
  );
}
