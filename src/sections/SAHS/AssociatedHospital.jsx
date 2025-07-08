import React from "react";
import avbrhImg from "../../assets/SAHS/hospitals/avbrh.jpg"; // Replace with actual image path
import smhrcImg from "../../assets/SAHS/hospitals/smhrc.jpg"; // Replace with actual image path

const hospitalData = {
  wardha: {
    bg: "#fef5ea",
    image: avbrhImg,
    title: "Acharya Vinoba Bhave Rural Hospital (AVBRH), Wardha",
    para: (
      <>
        <span className="font-semibold text-[#F04E30] block mb-1">
          A 1,500+ Bedded Ecosystem for Real-World Learning
        </span>
        AVBRH is one of Central India’s largest teaching hospitals, providing
        Allied Health Sciences students with unmatched clinical exposure. From
        diagnostics to surgical care, students train alongside specialists,
        gaining hands-on experience in real-time patient settings.
        <br />
        <br />
        Its multidisciplinary setup, community outreach, and state-of-the-art
        facilities foster critical thinking, clinical skills, and professional
        confidence—preparing students to meet real-world healthcare challenges
        with competence and compassion.
      </>
    ),
    linkTitle: "Know More",
    linkHref: "https://www.avbrhsawangimeghe.com",
    target: "_blank",
  },
  nagpur: {
    bg: "#ebf6ff",
    image: smhrcImg,
    title:
      "Shalinitai Meghe Hospital & Research Centre (SMHRC), Wanadongri, Nagpur",
    para: (
      <>
        <span className="font-semibold text-[#F04E30] block mb-1">
          Advanced Care. Applied Learning.
        </span>
        SMHRC is a modern multi-super specialty hospital and the clinical
        training ground for SAHS Nagpur. Students engage in active care across
        high-end diagnostic and therapeutic settings under the guidance of
        expert doctors. With leading infrastructure and a strong focus on
        equitable healthcare, SMHRC shapes students into skilled, ethical, and
        empathetic professionals—ready to serve diverse patient needs in a
        fast-evolving health landscape.
      </>
    ),
    linkTitle: "Know More",
    linkHref: "https://www.smhospitalnagpur.com",
    target: "_blank",
  },
};

function AssociatedHospitalSAHS({ activeTab }) {
  const current = hospitalData[activeTab] || hospitalData.wardha;

  return (
    <div className="container py-12">
      <h2 className="text-3xl md:text-4xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
        ASSOCIATED HOSPITAL
      </h2>

      <div
        className="flex flex-wrap items-center justify-center gap-16 max-w-[1000px] m-auto rounded-lg mt-14"
        style={{ backgroundColor: current.bg }}
      >
        <div className="min-w-[315px] flex-1 h-[400px] overflow-hidden">
          <img
            src={current.image}
            alt={current.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex-1 pl-7 md:pl-0 min-w-[315px] mt-5">
          <span className="font-bold font-oswald-medium mt-3 text-[#F04E30]">
            {activeTab === "wardha" ? "SAHS Wardha" : "SAHS Nagpur"}
          </span>
          <h3 className="text-xl font-semibold mt-2 mb-2 text-[#58595B]">
            {current.title}
          </h3>
          <p className="font-[Arial] mt-1 text-[#707070] leading-5 pr-15 text-sm">
            {current.para}
          </p>
          <div className="my-6 text-sm text-[#707070]">
            <a
              href={current.linkHref}
              className="block text-[#269BFF] underline text-xm"
              target={current.target}
              rel="noopener noreferrer"
            >
              {current.linkTitle}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssociatedHospitalSAHS;
