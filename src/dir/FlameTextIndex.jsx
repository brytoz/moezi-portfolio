import React, { useState } from 'react'; 

const FlameTextIndex = () => {
  const [flameActive, setFlameActive] = useState(false);

  const handleMouseEnter = () => {
    setFlameActive(true);
  };

  const handleMouseLeave = () => {
    setFlameActive(false);
  };

  return (
    <div className="flex justify-center items-center 100vh uppercase">
      <h1
        className={`cursor-pointer text-2xl md:text-8xl m-0 md:m-2 font-extrabold relative ${flameActive ? 'flame' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        M
      </h1>
      <h1
        className={`cursor-pointer text-2xl md:text-8xl m-0 md:m-2 font-extrabold relative ${flameActive ? 'flame' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        o
      </h1>
      <h1
        className={`cursor-pointer text-2xl md:text-8xl m-0 md:m-2 font-extrabold relative ${flameActive ? 'flame' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        e
      </h1>
      <h1
        className={`cursor-pointer text-2xl md:text-8xl m-0 md:m-2 font-extrabold relative ${flameActive ? 'flame' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        z
      </h1>

      <h1
        className={`cursor-pointer text-2xl md:text-8xl m-0 md:m-2 font-extrabold relative ${flameActive ? 'flame' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        i
      </h1>
    </div>
  );
};

export default FlameTextIndex;
