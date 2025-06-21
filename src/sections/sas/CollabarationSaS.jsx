import React from "react";
import wadhwani from "../../assets/sas/Partners/wadhwani.png";
import lemon from "../../assets/sas/Partners/lemon.png";
import coursera from "../../assets/sas/Partners/coursera.png";
import twoCom from "../../assets/sas/Partners/2com.png";

const partners = [
  {
    img: wadhwani,
    bg: "#FFF7E6",
    title: "Wadhwani Foundation",
    desc: "Empowers students with entrepreneurial skills, startup incubation, and industry mentorship to drive innovation and business success.",
  },
  {
    img: lemon,
    bg: "#E3F2FD",
    title: "Lemon Ideas",
    desc: "A startup accelerator providing mentorship, incubation, and funding opportunities for aspiring entrepreneurs.",
  },
  {
    img: coursera,
    bg: "#FFF0F0",
    title: "Coursera",
    desc: "Global platform offering top university courses & certifications.",
  },
  {
    img: twoCom,
    bg: "#F0F6FF",
    title: "2COMS",
    desc: "Recruitment partner providing national and international job placements, internships and work integrated degree programs.",
  },
];

function CollabarationSaS() {
  return (
    <section className="pt-[125px] px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-oswald-medium tracking-normal text-[#707070] font-[600] mb-12 ">
          <div className="border-t-4 border-[#EE4B2B] w-20 mb-2 "></div>
          Industry Partners and Collaborations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, idx) => (
            <div
              key={partner.title}
              className="rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full"
              style={{ background: partner.bg }}
            >
              <div className="w-24 h-24 flex items-center justify-center mb-3">
                <img
                  src={partner.img}
                  alt={partner.title}
                  className="object-contain w-full h-full"
                  style={{ background: "transparent" }}
                />
              </div>
              <h3 className="font-oswald-medium text-lg text-[#269BFF] mb-2">
                {partner.title}
              </h3>
              <p className="text-[#58595B] text-sm">{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollabarationSaS;
