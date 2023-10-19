import React from "react";
import { motion } from "framer-motion";
import { PiArrowBendDownLeftThin } from "react-icons/pi";

export default function Info({closeAbout}) {
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
        {/* telekinesis
        psychometry
        levitation
        necromancy
        widgerboards
        tairocards */}
        <button
          onClick={closeAbout}
          className="rounded-xl mt-2 flex -grow bg-gray-200 p-2 px-4 text-black "
        >
          <PiArrowBendDownLeftThin className="font-bol text-xl" /> Back
        </button>
      <div className="w-full md:h-2/3  md:px-4 mt-16 text-white   text-base  ">
        <p className="leading-10">
        Anyanwu Moses Chukwuemeka, known by his stage name MOEZI (Pronounced as
        Mo-Zee) , is a Singer/Rapper/Songwriter from Imo State, Southeast
        Nigeria. While growing up, MOEZI was exposed to diverse musical
        influences, including hip-hop and afro beats sounds from artists such as
        Bow Wow, Weird MC, Eminem, IcePrince, Wizkid, and 9ice. As an artist,
        MOEZI prides himself on his lyricism and believes that words are
        powerful instruments that can change the world. His sound is a fusion of
        hip-hop and acrobat with a touch of other genres. Conscious hip-hop
        artists and numerous afro beats artists heavily influence MOEZI's music.
        Moezi began his musical journey as part of a three-boy group, "SMJ
        Gang," consisting of his childhood friends Orji Emeka (Artiste name
        Meykar) and Oguneko Boluwatife (Artiste name Cardinal). After releasing
        their debut single, a cover of Ajebutter22's Omo Pastor track titled
        "Hangover," MOEZI and his friends continued to hone their talent. In
        addition to his musical talents, MOEZI is also a graduate of Imo State
        University, where he studied Accountancy and graduated with a
        second-class degree. However, MOEZI left his accounting career behind to
        pursue his passion for music. MOEZI is currently signed to Cruize
        Central Entertainment, working on his debut EP. With his unique sound
        and lyrical prowess, MOEZI is poised to impact the Nigerian music scene
        and beyond significantly.
        </p>

        
      </div>
    </motion.div>
  );
}
