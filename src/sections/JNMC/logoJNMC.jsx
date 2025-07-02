import React from "react";

import icon1 from "../../assets/JNMC/logo1.png";
import icon2 from "../../assets/JNMC/logo2.png";
import icon3 from "../../assets/JNMC/logo3.png";
import icon4 from "../../assets/JNMC/logo4.png";
import icon5 from "../../assets/JNMC/logo5.png";
function LogoJNMC() {
  return (
    <>
      <div className="max-w-8xl mx-auto py-20 bg-gray-100">
        {/* Buttons */}
        <div className="flex flex-wrap font-oswald-medium justify-center gap-6 mb-8">
          <button className="bg-[#F04E30] text-white text-base sm:text-xl font-medium px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
            Transcripts – UG & PG
          </button>
          <button className="bg-[#102B64] text-white text-base sm:text-xl px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
            Electives Offered
          </button>
        </div>

        {/* Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
          <img
            src={icon1}
            alt="Johns Hopkins University"
            className="h-10 w-50 sm:h-20 object-contain border-r pr-4 sm:pr-6 last:border-r-0"
          />

          <img
            src={icon2}
            alt="University of Pennsylvania"
            className="h-16 sm:h-20 object-contain border-r pr-4 sm:pr-6 last:border-r-0"
          />
          <img
            src={icon3}
            alt="Stanford University"
            className="h-16 sm:h-20 object-cover border-r pr-4 sm:pr-6 last:border-r-0"
          />
          <img
            src={icon4}
            alt="University of Hong Kong"
            className="h-12 sm:h-16 object-contain pr-4 sm:pr-6 border-r last:border-r-0"
          />
          <img
            src={icon5}
            alt="University of Hong Kong"
            className="h-12 sm:h-16 object-contain pr-4 sm:pr-6"
          />
        </div>

        <div className="text-center mt-6">
          <button className="mt-2 mb-4 px-6 py-2 bg-[#f0644b] text-white rounded font-semibold transition hover:bg-[#d13d22]">
            Know More
          </button>
        </div>
      </div>
    </>
  );
}

export default LogoJNMC;
