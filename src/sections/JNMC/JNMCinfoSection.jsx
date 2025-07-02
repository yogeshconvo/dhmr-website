import React from "react";

const JNMCInfoSection = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="flex flex-wrap items-center justify-center sm:justify-between text-[#F04E30] font-oswald-medium text-3xl tracking-wider uppercase mb-6 text-center">
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
        <span className="px-4 whitespace-normal text-sm sm:text-lg md:text-xl lg:text-xl xl:text-3xl">
          JAWAHARLAL NEHRU MEDICAL COLLEGE (JNMC)
        </span>
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
      </h2>

      <section className="bg-white text-center text-sm mx-auto max-w-7xl px-2 sm:px-4">
        <p className="text-sky-500 mb-5">
          Mandatory Disclosures | Dean & Leadership | FAQ I NMC Nodal Centre |
          Affiliated Hospitals (Teaching Hospital) | Holistic Learning |
          Departments
        </p>
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-[500] font-oswald-medium text-[#58595B] leading-snug mb-6">
          ADVANCING CARE. INSPIRING FUTURES.
        </h1>

        {/* Body Text */}
        <div className="text-[#58595B] font-[Arial] tracking-wide  max-w-4xl mx-auto">
          <p className="mb-4">
            Established in 1990, JNMC, Wardha is a premier centre for medical
            education, clinical excellence, and healthcare innovation. With 250
            MBBS seats, 205 Postgraduate seats, and 10 Super-Specialty DM/M.Ch.
            programs, all recognized by the National Medical Commission, JNMC
            offers comprehensive academic progression. A pioneer in
            learner-centric education, it adopts global best practices like PBL,
            CBL, self-directed learning, Mayo Clinic-backed patient simulations,
            and bioethics training with Haifa’s International Chair.
          </p>

          <p className="mb-4 tracking-wide  font-[Arial]">
            The campus features cutting-edge infrastructure—virtual dissection
            suites, simulation wards, ICT-enabled classrooms, advanced labs,
            immersive digital learning, and more. JNMC is also an American Heart
            Association-accredited International Training Centre and a Nodal
            Centre for Faculty Development under the National Medical
            Commission.
          </p>

          <a href="#" className="text-sky-500">
            Know More
          </a>
        </div>
      </section>
    </div>
  );
};

export default JNMCInfoSection;
