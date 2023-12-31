import React, { useEffect, useState } from "react";
import Socials from "./components/Socials";
import SocialsMobile from "./components/SocialsMobile";
import FlameTextIndex from "./components/FlameTextIndex";
import Navbar from "./components/navbar/Navbar";
import Info from "./components/Info";
import Music from "./components/Music";
import Contact from "./components/Contact";
import MainGallery from "./components/MainGallery";
import Videos from "./components/Videos";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [loadedText, setLoadedText] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showContact, setshowContact] = useState(false); 
  const [showGallery, setshowGallery] = useState(false); 
  const [showVideo, setshowVideo] = useState(false); 
  

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className={`background h-screen  relative ${loaded ? "loaded" : ""}`}>
      {loadedText && <Info closeAbout={() => setLoadedText(false)} />}
      {showMusic && <Music closeAbout={() => setShowMusic(false)} />}
      {showContact && <Contact closeContact={() => setshowContact(false)} />}
      {showGallery && <MainGallery closeGallery={() => setshowGallery(false)} />}
      {showVideo && <Videos closeVideos={() => setshowVideo(false)} />}
      

      <div className="absolute top-0 w-full">
        <Navbar
          showMusic={() => setShowMusic(!showMusic)}
          showAbout={() => setLoadedText(!loadedText)}
          showContact={() => setshowContact(!showContact)}
          showGallery={() => setshowGallery(!showGallery)}
          showVideo={() => setshowVideo(!showVideo)}
        />
      </div>

      <div className="overlay2 absolute top-0 left-0 w-full h-full " />
      <div className="content text-white w-full h-[100%] relative flex flex-col ">
        <div
          className={`w-full flex items-center h-full pl-4 ${
            loadedText && "max-w-[80%]"
          }`}
        >
          {!loadedText && <FlameTextIndex />}
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

export default Home;
