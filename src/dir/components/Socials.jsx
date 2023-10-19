import React from "react";
import { BsSpotify } from "react-icons/bs";
import { SiAudiomack } from "react-icons/si";
import { BiLogoYoutube } from "react-icons/bi";
import { SiApplemusic } from "react-icons/si";

export default function Socials() {
  return (
    <div className="  w-full h-full flex justify-end  items-center">
      <div className="overlay p-4 rounded-xl space-y-3 pl-4">
        <div className=" ">
        <a
            href="https://open.spotify.com/artist/4vFaVYSKz241ur43oPxXC4?si=uE903jKAS3CXj_DH4yYuPQ"
            target="_blank"
            referrerPolicy="no_referrer"
          >
          <BsSpotify
            title="Spotify"
            className="cursor-pointer text-green-600 text-4xl md:text-5xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
          />
          </a>
        </div>

        {/* 

        

        

        https://twitter.com/moezi_cc?s=21&t=gmWQQLq4sg_fVJ3imx2HPw

        https://www.instagram.com/moezi_cc

         */}
        <div className="  ">
          <a
            href="https://youtube.com/@moezi_cc?src=Linkfire&lId=6e5971f1-d180-4450-973c-41a81250144d&cId=d3d58fd7-4c47-11e6-9fd0-066c3e7a8751"
            target="_blank"
            referrerPolicy="no_referrer"
          >
            <BiLogoYoutube
              title="youtube"
              className="cursor-pointer text-red-700 text-4xl md:text-5xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
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
            className="cursor-pointer text-orange-400 text-4xl md:text-5xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
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
            className="cursor-pointer text-red-500 text-4xl md:text-5xl transition duration-500 ease-in-out transform hover:-translate-z-1 hover:scale-110 "
          />
        </a>
        </div>

      </div>
    </div>
  );
}
