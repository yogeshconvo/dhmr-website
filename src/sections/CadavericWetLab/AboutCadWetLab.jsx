import React from "react";

function AboutCadWetLab() {
  return (
    <section className="w-full px-4 py-16 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-[500] font-oswald-medium text-[#707070] uppercase leading-tight mb-6">
          ADVANCING SKILLS AND TRAINING FOR <br className="hidden sm:block" />
          REAL-WORLD READINESS
        </h2>
        <p
          className="mb-6 text-base md:text-sm text-[#58595B] leading-relaxed"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          At{" "}
          <span className="font-bold">
            Datta Meghe Institute of Higher Education & Research (DMIHER)
          </span>
          , we are committed to advancing hands-on surgical education through
          our{" "}
          <span className="font-semibold">
            state-of-the-art cadaveric and wet lab facilities
          </span>{" "}
          at both{" "}
          <span className="font-semibold">
            Wanadongri, Nagpur, and Wardha campuses
          </span>
          . These labs offer{" "}
          <span className="font-semibold">
            realistic, high-fidelity environments
          </span>
          , where students, residents, and professionals gain essential hands-on
          experience across multiple medical and surgical specialties.
        </p>
        <p
          className="text-base md:text-sm text-[#58595B] leading-relaxed"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          The <span className="font-semibold">cadaveric skill labs</span>{" "}
          provide unparalleled opportunities to explore human anatomy and
          practice complex surgical techniques with life-like precision. The{" "}
          <span className="font-semibold">wet labs</span> simulate real-world
          clinical scenarios, enabling trainees to refine surgical procedures
          using biological materials and high-fidelity models. Together, these
          facilities bridge the gap between theory and practice, ensuring that
          our learners enter the clinical world with confidence, competence, and
          a commitment to patient safety.
        </p>
      </div>
    </section>
  );
}

export default AboutCadWetLab;
