import React from "react";
import { Link } from "react-router-dom";

function ButtonsNursing() {
  return (
    <div className="container py-10 flex flex-center gap-10 flex-wrap">
      <button className="bg-[#F04E30] text-white text-base sm:text-xl font-medium px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
        Transcripts – UG & PG
      </button>
      <button className="bg-[#102B64] text-white text-base sm:text-xl px-6 sm:px-8 py-2 min-w-[220px] rounded-md shadow-[4px_6px_10px_rgba(0,0,0,0.2)]">
        Electives Offered
      </button>
    </div>
  );
}

export default ButtonsNursing;
