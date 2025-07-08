import React from "react";

function HolisticCadWetLab() {
  return (
    <section
      className="container py-16
    "
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight">
        <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2"></span>
        <span className="whitespace-pre">
          {`HOLISTIC LEARNING\nINFRASTRUCTURE`}{" "}
        </span>
      </h2>

      <ul className="mt-12 flex flex-wrap  gap-4">
        <li className="text-2xl text-[#58595B] sm:max-w-[250px] pb-4 sm:pr-4 mr-4 max-sm:border-b sm:border-r border-black/50">
          <b>Dedicated well-ventilated space</b> for cadaveric skill lab
        </li>
        <li className="text-2xl text-[#58595B] sm:max-w-[250px] pb-4 sm:pr-4 mr-4 max-sm:border-b md:border-r border-black/50">
          <b>Radiolucent</b> Imaging operating tables
        </li>
        <li className="text-2xl text-[#58595B] sm:max-w-[250px] pb-4 sm:pr-4 mr-4 max-sm:border-b lg:border-r border-black/50">
          <b>C- arm for radiological investigations</b> during the sessions
        </li>
        <li className="text-2xl text-[#58595B] sm:max-w-[250px]">
          <b>Briefing room</b> for discussion and interactive sessions
        </li>
      </ul>
    </section>
  );
}

export default HolisticCadWetLab;
