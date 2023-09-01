import React, { useEffect, useState } from "react";
import Socials from "./Socials";
import SocialsMobile from "./SocialsMobile";
import FlameTextIndex from "./FlameTextIndex";
import TopNav from "./components/TopNav";

const BackgroundImage = () => {
  const [loaded, setLoaded] = useState(false);
  const [loadedText, setLoadedText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);
  return (
    <div className={`background h-screen ${loaded ? "loaded" : ""}`}>
      <div className="absolute top-0 w-full">
        <TopNav showAbout={() => setLoadedText(!loadedText) }  />
      </div>

      <div className="overlay absolute top-0 left-0 w-full h-full " />
      <div className="content text-white w-full h-[100%] relative flex flex-col ">
        <div className={`w-full flex items-center h-full pl-4 ${loadedText && "max-w-[80%]"}`}>
          {loadedText ? (
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo repellat ipsam vero dignissimos voluptatibus voluptates quam laborum cumque, eos doloribus iure atque, voluptatum unde esse facere assumenda! Laborum, natus."
          ) : (
            <FlameTextIndex />
          )}
        </div>
        <div className="hidden md:h-screen md:absolute md:-top-1 md:right-0 p-4   md:flex">
          <Socials />
        </div>
        <div className="flex items-end justify-center p-4  md:hidden ">
          <SocialsMobile />
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
