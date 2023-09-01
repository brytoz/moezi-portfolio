import React from "react";
import { BsSpotify } from "react-icons/bs";
import { SiAudiomack } from "react-icons/si";
import { BiLogoYoutube } from "react-icons/bi";
import { SiApplemusic } from "react-icons/si";

export default function Socials() {
  return (
    <div className="  w-full h-full flex justify-end  items-center">
      <div className="space-y-3 pl-4">
        <div className=" ">
          <BsSpotify
            title="Spotify"
            className="cursor-pointer text-green-400 text-4xl md:text-5xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
          />
        </div>

        

        <div className="  ">
          <BiLogoYoutube
            title="youtube"
            className="cursor-pointer text-red-700 text-4xl md:text-5xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
          />
        </div>
        <div className="  ">
          <SiAudiomack
            title="Audiomack"
            className="cursor-pointer text-orange-400 text-4xl md:text-5xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
          />
        </div>
        <div className="  ">
          <SiApplemusic
            title="Apple Music"
            className="cursor-pointer text-red-400 text-4xl md:text-5xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
          />
        </div>
      </div>
    </div>
  );
}
