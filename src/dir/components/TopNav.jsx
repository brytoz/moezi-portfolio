import React, { Fragment } from "react";
import FlameText from "./FlameText";

export default function TopNav({  showAbout, showMusic }) {

  return (
    <Fragment>
      <nav
        className={`  flex items-center justify-between   p-2 pt-3 md:px-24 text-[#d3d3d3]`}
        style={{ position: "relative", zIndex: 90 }} 
      >
        <div className="pl-4 flex items-center pt-3 flex-shrink-0 text-[#d3d3d3] md:mr-24">
          <FlameText />
        </div>


        <div className="  md:text-normal w-full lg:flex lg:items-center justify-evenly lg:w-auto text-base">
          <div className="font-bold lg:flex items-center justify-evenly md:space-x-20 md:mr-12">
          <div
              onClick={showAbout}
              className="responsive-header block cursor-pointer lg:inline-block lg:mt-0 text-[#d3d3d3} hover:text-[#d3d3d3}/75"
            >
              About
            </div>
            <div
              onClick={showMusic}
              className="responsive-header block cursor-pointer lg:inline-block lg:mt-0 text-[#d3d3d3} hover:text-[#d3d3d3}/75"
            >
              Music
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
