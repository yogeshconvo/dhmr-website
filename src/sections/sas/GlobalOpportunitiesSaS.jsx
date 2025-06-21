import React from "react";
import wadhwani from "../../assets/sas/Partners/wadhwani.png";
import lemon from "../../assets/sas/Partners/lemon.png";
import coursera from "../../assets/sas/Partners/coursera.png";
import twoCom from "../../assets/sas/Partners/2com.png";
// import nus from "../../assets/sas/Global/nus.png";
// import ucsi from "../../assets/sas/Global/ucsi.png";
// import berkeley from "../../assets/sas/Global/berkeley.png";
// import yeshiva from "../../assets/sas/Global/yeshiva.png";

// const universities = [
//   { src: nus, alt: "NUS Singapore" },
//   { src: ucsi, alt: "UCSI Malaysia" },
//   { src: berkeley, alt: "UC Berkeley" },
//   { src: yeshiva, alt: "Yeshiva University, New York" },
// ];

const partners = [
  { src: wadhwani, alt: "Wadhwani Foundation" },
  { src: lemon, alt: "Lemon Ideas" },
  { src: coursera, alt: "Coursera" },
  { src: twoCom, alt: "2COMS" },
];

function GlobalOpportunitiesSaS() {
  return (
    <section className="bg-[#fcfaf1]  ">
      <div className="max-w-7xl mx-auto font-[Arial] px-6 py-16 container">
        <div className="mb-8">
          <h2 className="text-3xl font-oswald-medium sm:text-4xl font-[500] text-[#707070] mb-4 uppercase relative">
            <span className="block border-t-4 border-[#F04E30] w-16 mb-4"></span>
            Global Opportunities <br /> at SAS
          </h2>
          <p className="text-gray-600 text-xm max-w-5xl tracking-normal leading-relaxed mb-6">
            SAS offers multiple pathways for students to gain international
            exposure through semester abroad programs, research projects,
            immersion programs, and study tours. Through DMIHER Global, students
            have participated in programs at NUS Singapore, UCSI Malaysia, UC
            Berkeley, and Yeshiva University, New York—gaining insights into
            global best practices, research methodologies, and cross-cultural
            business environments. These experiences broaden their global
            perspective, enhance professional skills, and boost career
            prospects. The institute is actively working on new collaborations
            with universities in the US, Germany, UK, and Australia to expand
            these opportunities.
          </p>
        </div>

        {/* Universities Logos
        <div className="mb-10">
          <h3 className="text-lg font-oswald-medium text-[#269BFF] mb-4">
            Featured Universities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
            {universities.map((uni, idx) => (
              <div key={idx} className="flex justify-center items-center">
                <img
                  src={uni.src}
                  alt={uni.alt}
                  className="object-contain max-h-20 w-full"
                  style={{ maxWidth: 140 }}
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Partners Logos */}
        <div>
          <h3 className="text-lg font-oswald-medium text-[#269BFF] mb-4">
            Industry Partners and Collaborations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center px-12 pt-4">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="object-contain max-h-auto w-full mb-2"
                  style={{ maxWidth: 120 }}
                />
                {/* <span className="text-[#58595B] text-xs">{partner.alt}</span> */}
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs mt-4 max-w-4xl">
            Wadhwani Foundation – Entrepreneurial skills, incubation, and
            industry mentorship | Lemon Ideas – Startup accelerator with
            mentorship and funding support | Coursera – Global certifications
            from top universities and companies | 2COMS – National and
            international placements, internships, work-integrated programs
          </p>
        </div>
      </div>
    </section>
  );
}

export default GlobalOpportunitiesSaS;
