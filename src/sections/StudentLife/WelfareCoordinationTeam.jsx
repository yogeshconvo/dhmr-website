import React from "react";

const WelfareCoordinationTeam = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[460px] bg-gray-300">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-end px-4 md:px-20">
        <div className="text-white max-w-md text-left">
          <h2 className="text-xl md:text-2xl font-oswald-medium mb-4">
            Students Welfare Cell Co-ordination Team
          </h2>
          <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed">
            The activities of the Students Welfare Cell are coordinated at the
            university level, under the leadership of the Director of the
            Students Welfare Cell. To ensure smooth execution at the institute
            level, designated Conveners are appointed at each institute.
          </p>
          <button className="bg-[#f04e30] hover:bg-[#d64627] text-white px-6 py-2 rounded font-oswald-medium text-sm sm:text-base transition-all duration-300">
            VIEW TEAM
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelfareCoordinationTeam;
