import React from "react";
import Img1 from "../../../assets/Nursing/Nursing/Institutes/1.png";
import Img2 from "../../../assets/Nursing/Nursing/Institutes/2.jpg";
import Img3 from "../../../assets/Nursing/Nursing/Institutes/3.png";

const collegeData = [
  {
    college: 1,
    title: "Smt. Radhikabai Meghe Memorial<br/> College of Nursing, Wardha",
    para: "Established in 2002, SRMMCON pioneered Postgraduate Nursing in Vidarbha and has consistently elevated standards in nursing education. Integrated with DMIHER in 2009, it has earned the highest NAAC ‘A++’ grade (CGPA 3.78), reflecting its unwavering commitment to academic rigor and excellence. From foundational B.Sc. programs, to advanced Post Basic B.Sc. Nursing, Post Basic Diploma, Postgraduate Nursing and PhD nursing, SRMMCON blends hands-on clinical training with a forward-thinking curriculum. Its stellar legacy and pursuit of transformative healthcare education make it a destination of choice for aspiring nursing leaders.",
    linkText: "Know more",
    linkHref: "#",
    sliderImages: Img1,
  },
  {
    college: 2,
    title: "Shalinitai Meghe College of <br/> Nursing (SMCON), Wardha",
    para: "Established in 2023, Shalinitai Meghe College of Nursing (SMCON), Wardha, offers a B.Sc. Nursing program dedicated to developing skilled, compassionate professionals. As a constituent of DMIHER (Deemed to be University), recognized with NAAC ‘A++’ and UGC Category-I status, SMCON operates with the highest academic and professional standards. Approved by the Maharashtra Nursing Council, the program integrates evidence-based nursing practice with technological advancements, supported by extensive clinical exposure at Shalinitai Meghe Super Speciality Hospital. Rooted in the values of Acharya Vinoba Bhave and Mahatma Gandhi, SMCON fosters a culture of professionalism, empathy, and service.",
    linkText: "Know more",
    linkHref: "#",
    sliderImages: Img2,
    customClass: "md:flex-row-reverse",
  },
  {
    college: 3,
    title: "Shalinitai Meghe College of <br/> Nursing (SMCON), Nagpur",
    para: "Established in 2023, SMCON, Nagpur, offers 100 B.Sc. nursing seats annually, with a focus on evidence-based learning, dedicated mentorship, and global academic perspectives. As a constituent of DMIHER (Category-I Deemed to be University), it provides students with the advantage of modern infrastructure and access to advanced multispecialty and super-specialty services at Shalinitai Meghe Hospital & Research Centre. SMCON Nagpur is committed to shaping competent, compassionate nursing professionals, equipping them with the skills and mindset required to thrive in a dynamic healthcare landscape.",
    linkText: "Know more",
    linkHref: "#",
    sliderImages: Img3,
  },
];

function CollegeBrief({ collegeTabNumber }) {
  let currentCollegeData = collegeData.filter(
    (data) => data.college == collegeTabNumber
  )[0];

  if (currentCollegeData)
    return (
      <div
        className={`container px-4 py-10 flex flex-col md:flex-row items-center justify-center gap-8 animate-fade transition ${
          currentCollegeData.customClass ? currentCollegeData.customClass : ""
        }`}
      >
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h3
            className="text-[#122E5E] font-oswald-medium text-2xl font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: currentCollegeData.title }}
          />
          <p className="text-[#58595B] text-base mb-6">
            {currentCollegeData.para}
          </p>
          <a
            href={currentCollegeData.linkHref}
            className="text-[#269BFF] underline"
          >
            {currentCollegeData.linkText}
          </a>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 rounded-md overflow-hidden shadow-lg">
          <img
            src={currentCollegeData.sliderImages}
            alt="College"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    );
}

export default CollegeBrief;
