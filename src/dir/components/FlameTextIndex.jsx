import React, { useEffect, useState } from "react";

const FlameTextIndex = () => {
  const [flameActive, setFlameActive] = useState(false);

  const handleMouseEnter = () => {
    setFlameActive(true);
  };

  const handleMouseLeave = () => {
    setFlameActive(false);
  };

  const phrases = [
    "M O E Z I",
    "Anyanwu",
    "Chukwuemeka",
    "Moses",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        setShowText(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentPhraseIndex]);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex justify-center items-center 100vh uppercase"
    >
      <h1
        className={`cursor-pointer text-2xl md:text-8xl m-0 md:m-2 font-extrabold relative ${
          flameActive ? "flame" : ""
        }`}
      >
        {phrases[currentPhraseIndex]}
      </h1>
      <style jsx>
        {`
          @keyframes fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes fade-out {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-in-out;
          }

          .animate-fade-out {
            animation: fade-out 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default FlameTextIndex;
