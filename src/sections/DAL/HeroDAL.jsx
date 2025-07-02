import React from "react";
import { useNavigate } from "react-router-dom";
import outcomeImg from "../../assets/ProgramBanner.jpg";
import FloatingButtons from "../../components/FloatingButtons";

const HeroDAL = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={outcomeImg}
        alt="Outcome Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute top-auto md:top-0 bottom-0 w-full h-1/2 md:h-full z-10 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Text Section */}
      <div
        className="absolute top-auto bottom-12 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
  left-0
  px-4 sm:px-6 sm:pl-20
  text-white
  max-w-full
  w-auto
  sm:w-1/2
  text-left
  z-20"
      >
        <h1 className="md:text-[42px] text-[35px] md:mt-10 md:ml:10 font-oswald-medium font-[500] leading-tight max-w-full tracking-wide text-left">
          ADVANCING KNOWLEDGE,
          <br />
          <span className="text-[#E1CD67] font-[600]">
            FOSTERING INNOVATION
          </span>
        </h1>
      </div>
      <FloatingButtons />
    </div>
  );
};

export default HeroDAL;
