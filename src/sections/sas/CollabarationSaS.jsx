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
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-[500] text-[#707070] pt-20 mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          {"Industry Partners and Collaborations".toUpperCase()}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, idx) => (
            <div
              key={partner.title}
              className="rounded-xl shadow-md p-6 w-[90%] flex flex-col items-center text-center h-full"
              style={{ background: partner.bg }}
            >
              <div
                className="w-full flex items-center justify-center mb-3"
                style={{
                  height: idx === 2 || idx === 3 ? "110px" : "88px", // Increase height for 3rd and 4th logo
                }}
              >
                <img
                  src={partner.img}
                  alt={partner.title}
                  className="object-cover w-full h-full"
                  style={{ background: "transparent" }}
                />
              </div>
              <p className="text-[#58595B] text-sm pt-5">{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollabarationSaS;
