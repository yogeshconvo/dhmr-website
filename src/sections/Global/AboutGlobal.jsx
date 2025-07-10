import React from "react";

function AboutGlobal() {
  return (
    <section className="w-full px-4 py-16 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-[500] font-oswald-medium text-[#707070] uppercase leading-tight">
          CONNECTING STUDENTS, FACULTY, AND <br /> INSTITUTIONS ACROSS
          CONTINENTS
        </h2>
        <p
          className="mt-6 text-base md:text-sm text-[#58595B] leading-relaxed"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          <b>Fostering innovation, collaboration, and shared growth.</b>
          <br /> From immersive global programs and high-impact research to
          alumni shaping industries worldwide, DMIHER’s global footprint
          empowers learners and educators to drive change both within and beyond
          our borders. Our international centers, faculty exchange, student
          mobility, and collaborations with top-ranked institutions create a
          dynamic environment where knowledge knows no bounds.
        </p>
      </div>
    </section>
  );
}

export default AboutGlobal;
