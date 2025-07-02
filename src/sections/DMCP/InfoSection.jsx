import React from "react";

const DMCPInfoSection = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="flex flex-wrap items-center justify-center sm:justify-between text-[#F04E30] font-oswald-medium text-3xl tracking-wider uppercase mb-6 text-center">
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
        <span className="px-4 whitespace-normal uppercase text-sm sm:text-lg md:text-xl lg:text-xl xl:text-3xl">
          Datta Meghe College of Pharmacy, Wardha (DMCP)
        </span>
        <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
      </h2>

      <section className="bg-white text-center text-base mx-auto max-w-7xl px-2 sm:px-4">
        {/* Main Heading */}
        {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-[500] font-oswald-medium text-[#58595B] leading-snug mb-6">
          FUTURE-FOCUSED. TECHNOLOGY-LED.
        </h1> */}

        <div className="text-[#58595B] font-[Arial] tracking-wide max-w-4xl mx-auto">
          <p className="mb-4">
            Established in 2019, DMCP is a PCI-recognized institution under
            DMIHER (Deemed to be University), offering D.Pharm, B.Pharm,
            M.Pharm, Pharm D, and Ph.D. programs. Known for its strong research
            ethos, industry integration, and advanced simulation-based training,
            DMCP provides real-world exposure through access to hospitals,
            clinical setups, and a dedicated research house.
          </p>
          <p className="mb-5 tracking-wide  font-[Arial]">
            {" "}
            A highly qualified faculty and a diverse student body fuel a dynamic
            learning ecosystem focused on innovation, patient-centered care, and
            career readiness across academia, research, and the pharmaceutical
            industry.
          </p>
          <p className="mb-5 tracking-wide  font-[Arial]">
            Students gain hands-on expertise in formulation development with
            well-equipped labs, a herbal garden, and a modern machine room.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DMCPInfoSection;
