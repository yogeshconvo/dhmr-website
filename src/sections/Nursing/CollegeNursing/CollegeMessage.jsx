import React from "react";
import message1 from "../../../assets/Nursing/Nursing/Principal/Dr. Vaishali Taksande (Chahande).jpg";
import message2 from "../../../assets/Nursing/Nursing/Principal/Dr. Ranjana Sharma.jpg";
import message3 from "../../../assets/Nursing/Nursing/Principal/Dr. Nilima Rakhsale.jpg";

const collegeData = [
  {
    college: 1,
    para: "Welcome to Smt. Radhikabai Meghe Memorial College of Nursing (SRMMCON), where we are committed to excellence in nursing education, research, and clinical practice. Our state-of-the-art facilities, experienced faculty, and student-centered approach ensure holistic development, preparing future nursing professionals to meet global healthcare challenges.",
    linkText: "Know more",
    linkHref: "#",
    drName: "Dr. Vaishali Taksande (Chahande) Professor Cum",
    drTitle: "Principal, SRMMCON",
    drPara: "PhD in OBGY Nursing, M.Phil.in HPE",
    drPara2: "M.Sc. Nursing in OBGY nursing, and B.Sc. Nursing",
    drMail: "principal.srmmcon@dmiher.edu.in",
    image: message1,
  },
  {
    college: 2,
    para: "It is my privilege to welcome you to Shalinitai Meghe College of Nursing, Salod, (Hirapur) at Datta Meghe Institute of Higher Education and Research (Deemed to be University) Wardha. SMCON Nursing college excellence in healthcare education, and dedicated to nurturing skilled, compassionate, and knowledgeable professionals who will contribute meaningfully to the healthcare sector.",
    linkText: "Know more",
    linkHref: "#",
    drName: "Dr. Ranjana Sharma",
    drTitle: "Principal, SMCON, Wardha",
    drPara: "M.Sc. Nursing, M. Phil, Fellowship, PhD.",
    drPara2: "Medical Surgical Nursing",
    drMail: "principal_smconbsc@dmiher.edu.in",
    image: message2,
  },
  {
    college: 3,
    para: "Welcome to Shalinitai Meghe College of Nursing, a premier institution shaping future nursing leaders. Established in 2023 under DMIHER (DU), we are committed to academic excellence, hands-on clinical training, and holistic student development. Nursing is more than a profession—it’s a calling. We equip our students with cutting-edge knowledge, ethical values, and compassionate care, blending theory with practical exposure in top healthcare institutions. Our state-of-the-art facilities, research-driven curriculum, and global standards ensure graduates exceed industry expectations.",
    linkText: "Know more",
    linkHref: "#",
    drName: "Dr. Nilima Rakshale",
    drTitle: "Shalinitai Meghe College of Nursing, Wanadongri, Nagpur",
    drPara: "Ph.D. in Mental Health Nursing",
    drPara2: "Principal.smconnagpur@dmiher.edu.in",
    drMail: "",
    image: message3,
  },
];

function CollegeMessage({ collegeTabNumber }) {
  let currentCollegeData = collegeData.filter(
    (data) => data.college == collegeTabNumber
  )[0];

  if (currentCollegeData)
    return (
      <div className="  bg-primary py-18 text-white">
        <div className="container">
          <h2 className="text-3xl font-[500] text-[#FFF] mb-8 tracking-wider font-oswald-medium">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            PRINCIPAL’S MESSAGE
          </h2>

          <div className="flex items-center justify-center gap-10 flex-wrap">
            {/* <img
              src={currentCollegeData.image}
              alt={currentCollegeData.drName}
              className="h-[300px] rounded-xl object-cover"
            /> */}
            <div className="flex-1 rounded-xl overflow-hidden min-w-[300px] max-w-[350px] h-[250px]">
              <img
                src={currentCollegeData.image}
                alt={currentCollegeData.drName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-2 tracking-wide  text-[16px] min-w-[250px]">
              <p className="mb-6  md:max-w-2xl">{currentCollegeData.para}</p>
              <a
                href={currentCollegeData.linkHref}
                className="text-sm  text-[#269BFF] underline"
              >
                {currentCollegeData.linkText}
              </a>
            </div>
          </div>

          <div>
            <p className="text-[#E1CD67] *:block  pt-5 max-sm:mt-4">
              <b className="*:block">
                <span>{currentCollegeData.drName} </span>
                <span>{currentCollegeData.drTitle}</span>
              </b>
              <span className="*:block">
                <span>{currentCollegeData.drPara}</span>
                <span>{currentCollegeData.drPara2}</span>
                <span>{currentCollegeData.drMail}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
}

export default CollegeMessage;
