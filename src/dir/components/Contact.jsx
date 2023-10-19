import React from "react";
import { motion } from "framer-motion";
import { PiArrowBendDownLeftThin } from "react-icons/pi";
import { FaSquareXTwitter, FaTiktok } from "react-icons/fa6";
import {  FaFacebookSquare } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";


export default function Contact({ closeContact }) {
  return (
    <motion.div
      animate={{ y: 1, opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, ease: "easeIn" }}
      initial={{ y: -260, opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ zIndex: 100 }}
      className="w-full bg-black/80 h-screen absolute top-0 bottom-0 left-0 z-50 px-4 max-h-full scroll overflow-y-scroll "
    >
      <button
        onClick={closeContact}
        className="rounded-xl mt-2 flex -grow bg-gray-200 p-2 px-4 text-black "
      >
        <PiArrowBendDownLeftThin className="font-bol text-xl" /> Back
      </button>
      <div className="w-full md:h-2/3  md:px-4 mt-16 text-white text-2xl    ">
      For Sponsorship and booking<p className="leading-10 text-xl mb-4">
       mailto:  <i>Cruizecentral@protonmail.com</i>
        </p>
        <p className="leading-10 text-xl mb-4">
Follow me:
        </p>
        <p className="flex items-center justify-around w-full md:w-1/2">
          <a target="_blank" href="https://twitter.com/moezi_cc?s=21&t=gmWQQLq4sg_fVJ3imx2HPw">
          <FaSquareXTwitter className="text-3xl cursor-pointer transition-all ease-in delay-75 hover:bg-white hover:text-black" title="x(formerlly twitter)" /> 
          </a>
          <a target="_blank" href="https://www.instagram.com/moezi_cc">
          <BiLogoInstagramAlt className="text-3xl cursor-pointer transition-all ease-in delay-75 hover:bg-white hover:text-black" title="Instagram" /> 
          </a>
         <a target="_blank" href="https://www.tiktok.com/@moezi_cc?_t=8eXWyCj75SH&_r=1">
           <FaTiktok className="text-3xl cursor-pointer transition-all ease-in delay-75 hover:bg-white hover:text-black" title="Tiktok" />
          </a>
        </p>
      </div>
    </motion.div>
  );
}
