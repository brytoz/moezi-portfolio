import React from "react";
import { BsSpotify } from "react-icons/bs";
import { SiAudiomack } from "react-icons/si";
import { BiLogoYoutube } from "react-icons/bi";
import { SiApplemusic } from "react-icons/si";

export default function SocialsMobile() {
  return (
    <div className="100-vw flex justify-center items-end">
      <div className="overlay  rounded-xl flex justify-center items-end w-full  space-x-4 p-4">
        <div className=" ">
          <BsSpotify
            title="Spotify"
            className="cursor-pointer text-green-400 text-5xl md:text-4xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
          />
        </div>

       
        <div className="  ">
          <BiLogoYoutube
            title="youtube"
            className="cursor-pointer text-red-700 text-5xl md:text-4xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
          />
        </div>

        <div className="  ">
          <SiAudiomack
            title="Audiomack"
            className="cursor-pointer text-orange-400 text-4xl md:text-4xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
          />
        </div>

        <div className="  ">
          <SiApplemusic
            title="Apple Music"
            className="cursor-pointer text-red-400 text-5xl md:text-4xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
          />
        </div>
      </div>
    </div>
  );
}
