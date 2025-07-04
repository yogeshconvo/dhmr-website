import React from "react";
import hospital1 from "../../../assets/Nursing/Nursing/Institutes/1.png";
import hospital2 from "../../../assets/Nursing/Nursing/Institutes/2.jpg";
import hospital3 from "../../../assets/Nursing/Nursing/Institutes/3.png";

const collegeData = [
  {
    college: 1,
    bg: "#fef5ea",
    image: hospital1,
    title: "SRMMCON, Wardha",
    para: "The teaching hospital serves as a dynamic learning hub for nursing students, offering hands-on experience across diverse healthcare settings. Guided by experienced professionals, students actively engage in patient care, diagnostics, and therapeutic procedures, developing essential skills and clinical competence.",
    linkText: "Visit",
    // linkHref: "#",
    linkTitle: "AVBRH Hospital",
    linkHref: "https://www.avbrhsawangimeghe.com",
    target: "_blank",
    linkTitle2: "Community Outreach & Social Responsibility",
  },
  {
    college: 2,
    bg: "#ebf6ff",
    image: hospital2,
    title: "SMCON (WARDHA)",
    para: "The teaching hospital at SMCON provides immersive clinical training, exposing students to diverse medical and surgical services. Guided by experienced professionals, students develop critical thinking, clinical competence, and hands-on skills essential for their nursing careers.",
    linkText: "Visit",
    linkTitle: " Shalinitai Meghe Super Speciality Hospital, Wardha",
    linkText2: "Visit",
    linkHref: "https://www.smschospital.com",
    linkTitle2: "Community Outreach & Social Responsibility",
  },
  {
    college: 3,
    bg: "#f2f2f2",
    image: hospital3,
    title: "SMCON (NAGPUR)",
    para: "The teaching hospital provides extensive hands-on training in diverse medical and surgical settings, fostering critical thinking, clinical competence, and professional growth. Students gain practical skills and real-world insights under expert guidance, preparing them for excellence in patient care.",
    linkText: "Visit",
    linkHref: "https://www.smhospitalnagpur.com",
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
      <div className="container  ">
        <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          AFFILIATED HOSPITALS
        </h2>

        <div
          className="flex flex-wrap  items-center justify-center gap-8 max-w-[1000px] m-auto rounded-lg mt-14  "
          style={{ backgroundColor: currentCollegeData.bg }}
        >
          <div className="min-w-[315px]  flex-1">
            <img src={currentCollegeData.image} alt="" />
          </div>
          <div className="flex-1 pl-7 md:pl-0 min-w-[315px] mt-5 ">
            <span className="font-bold font-oswald-medium mt-3 text-[#F04E30]">
              {currentCollegeData.title}
            </span>
            <p className="font-[Arial] mt-1  text-[#707070] leading-5 pr-15 text-sm ">
              {currentCollegeData.para}
            </p>

            <div className="my-6 text-sm text-[#707070]">
              <a
                href={currentCollegeData.linkHref}
                className="block text-[#269BFF] underline text-xm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentCollegeData.linkTitle}
              </a>
            </div>

            <div className="my-6 text-sm">
              <a
                href={currentCollegeData.linkHref2}
                className="block text-[#269BFF] underline text-sm"
              >
                {currentCollegeData.linkTitle2}
              </a>
              <span className="text-[#707070]"></span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CollegeHospitals;
