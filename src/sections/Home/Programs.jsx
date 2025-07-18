import React from "react";
import program1 from "../../assets/Programs/program1.jpg";
import program2 from "../../assets/Programs/program2.jpg";
import program3 from "../../assets/Programs/program3.jpg";
import program4 from "../../assets/Programs/program4.jpg";
import program5 from "../../assets/Programs/program5.jpg";
import program6 from "../../assets/Programs/program6.jpg";
import program7 from "../../assets/Programs/program7.jpg";
import program8 from "../../assets/Programs/program8.jpg";
import program9 from "../../assets/Programs/program9.jpg";
import program10 from "../../assets/Programs/program10.jpg";
import program11 from "../../assets/Programs/program11.png";
import program12 from "../../assets/Programs/program12.jpg";
import program13 from "../../assets/Programs/program13.jpg";
import program14 from "../../assets/Programs/program14.jpg";
import program15 from "../../assets/Programs/program15.jpg";
import program16 from "../../assets/Programs/program16.jpg";
import programicon from "../../assets/Programs/programicon.png";

const ProgramsComponent = () => {
  const programs = [
    { name: "Medicine", img: program1 },
    { name: "Dentistry", img: program2 },
    { name: "Ayurveda", img: program3 },
    { name: "Physiotherapy", img: program4 },
    { name: "Nursing", img: program5 },
    { name: "Pharmacy", img: program6 },
    { name: "Allied Health<br />Sciences", img: program7 },
    { name: "Homeopathy", img: program8 },
    { name: "Engineering", img: program9 },
    { name: "Commerce &<br />Management", img: program10 },
    { name: "Science and<br />Technology", img: program11 },
    { name: "Social Sciences,<br />Humanities & Liberal Arts", img: program12 },
    { name: "Advanced Studies", img: program13 },
    { name: "Public Health", img: program14 },
    { name: "Hospital<br />Administration", img: program15 },
    { name: "Online Programs", img: program16 },
  ];

  return (
    <div className="bg-[#0a2b5a] px-3 sm:px-6 md:px-25 py-15">
      <div className="text-white mb-8">
        <div className="w-20 h-1.5 bg-red-500 mb-2"></div>
        <h2 className="text-2xl sm:text-3xl font-oswald-medium font-medium tracking-wide">
          PROGRAMS
        </h2>
      </div>

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[15px] gap-y-6 items-stretch">
        {programs.map((program, index) => (
          <a
            key={index}
            href="https://www.dmiher.edu.in/courses"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-white flex flex-col h-full min-h-[320px] rounded-b-xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={program.img}
              alt="Program"
              className="w-full h-36 sm:h-48 object-cover"
            />
            <div className="flex flex-col justify-between flex-grow">
              <div
                className="text-xl px-3 pt-3 sm:p-5 text-[#0a2b5a] leading-snug"
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                }}
                dangerouslySetInnerHTML={{ __html: program.name }}
              ></div>

              <div className="flex justify-start px-3 pb-3 pt-3 sm:px-5 sm:pb-5">
                <img
                  src={programicon}
                  alt="Program Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
            </div>
          </a>
        ))}
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[15px] gap-y-4 sm:gap-y-6">
        {programs.map((program, index) => (
          <a
            key={index}
            href="https://www.dmiher.edu.in/courses"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-b-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={program.img}
              alt={program.name}
              className="w-full h-36 sm:h-50 object-cover"
            />
            <div className="flex-grow flex flex-col justify-between">
              <h6
                className="text-xl px-3 py-3 sm:pb-10 sm:p-5 text-[#0a2b5a]"
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                }}
                dangerouslySetInnerHTML={{ __html: program.name }}
              ></h6>
              <div className="flex justify-start px-3 pb-3 sm:p-4">
                <img
                  src={programicon}
                  alt="Program Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProgramsComponent;
