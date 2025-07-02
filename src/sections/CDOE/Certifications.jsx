// import React from "react";
// import Img from "../../assets/CDOE/Picture1.png";

// const Certifications = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto px-4">
//       <h2 className="text-3xl uppercase font-[500] text-[#707070] pt-20 mb-4 tracking-wider font-oswald-medium">
//         <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
//         Certification Courses from top universities
//       </h2>

//       <div className="max-w-4xl">
//         <p className="text-base md:text-lg text-gray-600 mb-6">
//           Harvard, Stanford & more | Certifications by industry leaders: Google,
//           IBM, etc | In-demand domains: Data Science, Healthcare, Business
//           Analytics, AI | Flexible, AI-powered, on-demand learning
//         </p>
//       </div>

//       <img
//         src={Img}
//         alt="Certification Courses"
//         className="mx-auto max-w-full mb-5 h-auto rounded-lg shadow-md"
//       />
//     </div>
//   );
// };

// export default Certifications;
import React from "react";
import icon1 from "../../assets/CDOE/ICONS/1.png";
import icon2 from "../../assets/CDOE/ICONS/2.png";
import icon3 from "../../assets/CDOE/ICONS/3.png";
import icon4 from "../../assets/CDOE/ICONS/4.png";
const Certifications = () => {
  return (
    <div className="w-full max-w-7xl mx-auto ">
      <h2 className="text-3xl px-5 md:px-0 uppercase font-[500] text-[#707070] pt-20 mb-4 tracking-wider font-oswald-medium">
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
        Certification Courses from top universities
      </h2>

      <div className="max-w-4xl">
        <p className="text-base px-5 md:px-0 md:text-lg text-gray-600 mb-6">
          Harvard, Stanford & more | Certifications by industry leaders: Google,
          IBM, etc | In-demand domains: Data Science, Healthcare, Business
          Analytics, AI | Flexible, AI-powered, on-demand learning
        </p>
      </div>

      {/* <img
    src={Img}
    alt="Certification Courses"
    className="mx-auto max-w-full mb-5 h-auto rounded-lg shadow-md"
/> */}
      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 p-4 relative">
        {/* <!-- Vertical Line --> */}
        <div class="hidden md:block absolute top-[15px] left-1/2 transform -translate-x-1/2 w-[3px] h-[248px] bg-gray-700 z-0"></div>

        {/* <!-- Horizontal Line --> */}
        <div class="hidden md:block absolute top-[260px] left-1/4 w-1/2 h-1 bg-gray-600 z-0"></div>

        {/* <!-- SMALL VERTICAL LINES from midpoint to bottom box tops --> */}
        <div class="hidden md:block absolute top-[260px] left-[25%] w-[3px] h-[30px] bg-gray-700 z-0"></div>
        <div class="hidden md:block absolute top-[260px] left-[75%] w-[3px] h-[30px] bg-gray-700 z-0"></div>

        {/* <!-- Box 1 --> */}
        <div class="bg-white p-6 md:p-8 shadow-md relative z-10 mx-5">
          <div class="absolute top-0 left-0 right-0 h-2 bg-[#1e5da6]"></div>
          <div class="flex items-start mb-4">
            <img src={icon1} alt="icon" class="w-[80px] h-[70px] mr-4" />
            <div>
              <h3 class="text-xl font-extrabold text-gray-800 leading-snug">
                1,900+ Guided
                <br />
                Projects
              </h3>
              <ul class="mt-2 text-lg font-medium mx-5 text-black space-y-1 list-disc">
                <li>Learn a job-relevant skill</li>
                <li>&lt;5-2 hours</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Box 2 --> */}
        <div class="bg-white p-6 md:p-8 shadow-md relative z-10 mx-5">
          <div class="absolute top-0 left-0 right-0 h-2 bg-[#1e5da6]"></div>
          <div class="flex items-start mb-4">
            <img src={icon2} alt="icon" class="w-[80px] h-[70px] mr-4" />
            <div>
              <h3 class="text-xl font-extrabold text-gray-800 leading-snug">
                5,000+ Courses
              </h3>
              <ul class="mt-2 text-lg font-medium mx-5 text-black space-y-1 list-disc">
                <li>Gain knowledge on a wide array of subjects</li>
                <li>4-6 weeks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Box 3 --> */}
        <div class="bg-white p-6 md:p-8 shadow-md relative z-10 m-5">
          <div class="absolute top-0 left-0 right-0 h-2 bg-[#1e5da6]"></div>
          <div class="flex items-start mb-4">
            <img src={icon3} alt="icon" class="w-[80px] h-[70px] mr-4" />
            <div>
              <h3 class="text-xl font-extrabold text-gray-800 leading-snug">
                45+ Professional
                <br />
                Certificates
              </h3>
              <ul class="mt-2 text-lg font-medium mx-5 text-black space-y-1 list-disc">
                <li>Get job-ready for an in-demand career</li>
                <li>1-12 months</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Box 4 --> */}
        <div class="bg-white p-6 md:p-8 shadow-md relative z-10 m-5">
          <div class="absolute top-0 left-0 right-0 h-2 bg-[#1e5da6]"></div>
          <div class="flex items-start mb-4">
            <img src={icon4} alt="icon" class="w-[80px] h-[70px] mr-4" />
            <div>
              <h3 class="text-xl font-extrabold text-gray-800 leading-snug">
                500+
                <br />
                Specializations
              </h3>
              <ul class="mt-2 text-lg font-medium mx-5 text-black space-y-1 list-disc">
                <li>Master a skill</li>
                <li>3-6 months</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
