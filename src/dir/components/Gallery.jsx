import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Gallery({
  img,
}) {

  return (
    <div
      className={`max-w-sm mb-8 mt-8 md:mt-0 relative  `}
    >
     
      <div className="w-full rounded overflow-hidden shadow-lg bg-gray-200">
        <img src={img} className="w-full md:w-full" alt="image" />
        
      </div>
    </div>
  );
}
