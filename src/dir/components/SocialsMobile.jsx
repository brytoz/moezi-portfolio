import React from "react";
import { BsSpotify } from "react-icons/bs";
import { SiAudiomack } from "react-icons/si";
import { BiLogoYoutube } from "react-icons/bi";
import { SiApplemusic } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

export default function SocialsMobile() {
  return (
    <div className="100-vw flex justify-center items-end">
      <div className="overlay  rounded-xl flex justify-center items-end w-full  space-x-4 p-4">
        <div className=" ">
          <a
            href="https://open.spotify.com/artist/4vFaVYSKz241ur43oPxXC4?si=uE903jKAS3CXj_DH4yYuPQ"
            target="_blank"
            referrerPolicy="no_referrer"
          >
            <BsSpotify
              title="Spotify"
              className="cursor-pointer text-green-400 text-5xl md:text-4xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
            />
          </a>
        </div>
        <div className="  ">
          <a
            href="https://youtube.com/@moezi_cc?src=Linkfire&lId=6e5971f1-d180-4450-973c-41a81250144d&cId=d3d58fd7-4c47-11e6-9fd0-066c3e7a8751"
            target="_blank"
            referrerPolicy="no_referrer"
          >
            <BiLogoYoutube
              title="youtube"
              className="cursor-pointer text-red-700 text-5xl md:text-4xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
            />
          </a>
        </div>
        <div className=" ">
          <a
            href="https://www.instagram.com/moezi_cc"
            target="_blank"
            referrerPolicy="no_referrer"
          >
            <AiFillInstagram
              title="Instagram"
              className="cursor-pointer -p-2 rounded-xl text-black/50 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-5xl md:text-4xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
            />
          </a>
        </div>

        <div className="  ">
          <a
            href="https://audiomack.com/moezi"
            target="_blank"
            referrerPolicy="no_referrer"
          >
            <SiAudiomack
              title="Audiomack"
              className="cursor-pointer text-orange-400 text-4xl md:text-4xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
            />
          </a>
        </div>

        <div className="  ">
          <a
            href="https://music.apple.com/ng/artist/moezi/1621882790?at=1l3vpUI&app=music&ct=LFV_62dbc49fb5f64fadf34a5d223e5d74bd&itscg=30440&itsct=catchall_p1&lId=29265882&cId=none&sr=1&src=Linkfire&ls=1"
            target="_blank"
            referrerPolicy="no_referrer"
          >
            <SiApplemusic
              title="Apple Music"
              className="cursor-pointer text-red-400 text-5xl md:text-4xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
            />
          </a>
        </div>
      </div>
    </div>
  );
}
