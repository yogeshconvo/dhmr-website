import React from "react";
import hospital1 from "../../../assets/Nursing/college/hospital1.png";
import hospital2 from "../../../assets/Nursing/college/hospital3.jpg";
import hospital3 from "../../../assets/Nursing/college/hospital3.jpg";
const collegeData = [
  {
    college: 1,
    bg: "#fef5ea",
    image: hospital1,
    title: "SRMMCON, Wardha",
    para: "The teaching hospital serves as a dynamic learning hub for nursing students, offering hands-on experience across diverse healthcare settings. Guided by experienced professionals, students actively engage in patient care, diagnostics, and therapeutic procedures, developing essential skills and clinical competence.",
    linkText: "Visit",
    linkHref: "#",
    linkTitle: "AVBRH hospital",
    linkText2: "Visit",
    linkHref2: "#",
    linkTitle2: "Community Outreach & Social Responsibility",
  },
  {
    college: 2,
    bg: "#ebf6ff",
    image: hospital2,
    title: "SMCON (WARDHA)",
    para: "The teaching hospital at SMCON provides immersive clinical training, exposing students to diverse medical and surgical services. Guided by experienced professionals, students develop critical thinking, clinical competence, and hands-on skills essential for their nursing careers.",
    linkText: "Visit",
    linkHref: "#",
    linkTitle: " Shalinitai Meghe Super Speciality Hospital, Wardha",
    linkText2: "Visit",
    linkHref2: "#",
    linkTitle2: "Community Outreach & Social Responsibility",
  },
  {
    college: 3,
    bg: "#f2f2f2",
    image: hospital3,
    title: "SMCON (NAGPUR)",
    para: "The teaching hospital provides extensive hands-on training in diverse medical and surgical settings, fostering critical thinking, clinical competence, and professional growth. Students gain practical skills and real-world insights under expert guidance, preparing them for excellence in patient care.",
    linkText: "Visit",
    linkHref: "#",
    linkTitle: "Shalinitai Meghe Hospital & Research Centre, Nagpur",
    linkText2: "",
    linkHref2: "",
    linkTitle2: "",
  },
];

function CollegeHospitals({ collegeTabNumber }) {
  let currentCollegeData = collegeData.filter(
    (data) => data.college == collegeTabNumber
  )[0];

  if (currentCollegeData)
    return (
      <div className="container py-20  ">
        <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          AFFILIATED HOSPITALS
        </h2>

        <div
          className="flex flex-wrap items-center justify-center gap-5 max-w-[1000px] m-auto rounded-lg mt-14  "
          style={{ backgroundColor: currentCollegeData.bg }}
        >
          <div className="min-w-[315px] h-full flex-1">
            <img src={currentCollegeData.image} alt="" className="object-contain"/>
          </div>
          <div className="flex-1 min-w-[315px]">
            <span className="font-oswald-medium text-[#F04E30]">
              {currentCollegeData.title}
            </span>
            <p className="font-[Arial] leading-1 text-sm tracking-tight">{currentCollegeData.para}</p>

            <div className="my-6  ">
              <a
                href={currentCollegeData.linkHref}
                className="block text-[#269BFF] underline text-sm"
              >
                {currentCollegeData.linkText}
              </a>
              <span>{currentCollegeData.linkTitle}</span>
            </div>
            <div className="my-6 ">
              <a
                href={currentCollegeData.linkHref2}
                className="block text-[#269BFF] underline text-sm"
              >
                {currentCollegeData.linkText2}
              </a>
              <span>{currentCollegeData.linkTitle2}</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CollegeHospitals;
