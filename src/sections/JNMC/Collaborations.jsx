import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import researchicon1 from "../../assets/JNMC/icon1.png";
import researchicon2 from "../../assets/JNMC/icon2.png";
import researchicon3 from "../../assets/JNMC/icon3.png";
import researchicon4 from "../../assets/JNMC/icon4.png";
import ViewMoreButton from "../../components/UI/ViewMore";

const Collabaration = () => {
  const mobileSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="px-6 md:px-40 py-20 bg-sky-50">
      <div className="max-w-8xl mx-auto grid md:grid-cols-[36%_60%] gap-6">
        {/* Left Side */}
        <div className="max-w-full">
          <div className="h-1 w-16 bg-[#e8502e] mb-3"></div>
          <h2 className="text-3xl md:text-4xl font-[500] text-[#707070] uppercase font-oswald-medium leading-tight">
            RESEARCH & <br /> COLLABORATIONS
          </h2>
          <p className="mt-2 text-xm text-[#707070] font-[Arial]">
            Driven by a team of highly qualified and experienced faculty, JNMC
            upholds a rich legacy of teaching excellence and a strong track
            record of research contributions. Faculty have published extensively
            in prestigious journals, including The Lancet, BMJ, Frontiers,
            Nature, and more.
          </p>
          <p className="mt-2 text-xm text-blue-900 font-[600] font-[Arial]">
            Three faculties are in the list of the world’s top 2% scientists
            released by Stanford University (Elsevier’s Scopus database): <br />{" "}
            <span className="pt-2.5 pb-2.5 pl-15 ">1. Dr. Zahir Quazi </span> <br />{" "}
            <span className="pt-2.5 pb-2.5 pl-15 ">2. Dr Abhay Gaidhane </span>
            <br />
            <span className="pt-2.5 pb-2.5 pl-15 ">
              {" "}
              3. Dr Mahalaque Nazli Khatib{" "}
            </span>
          </p>
          <p className="mt-2 text-xm text-[#707070] font-[Arial]">
            The institution’s contributions include books, copyrights, and
            patents advancing medical science. Research funding has been secured
            from Grand Challenges Canada, Wellcome Trust-DBT India Alliance,
            ICMR, DST, WHO, USAID, and others. JNMC has also been recognized by
            the Global Health Research (GHR) Unit and ICMR as a Technical
            Resource Hub for mentoring institutions in conducting systematic
            reviews and contributing to guideline development.
          </p>

          <ViewMoreButton />
        </div>

        {/* Right Side (Desktop) */}
        {/* <div className="hidden sm:grid grid-cols-3 mt-15 py-8 gap-4">
          {[
            {
              icon: researchicon1,
              label: (
                <>
                  24 Granted, 30 <br /> Filed
                </>
              ),
              value: "Patents",
            },
            {
              icon: researchicon2,
              label: "Copyrights",
              value: "400+",
            },
            {
              icon: researchicon3,
              label: <>Total Research Publications</>,
              value: "10,000+",
            },

            {
              icon: researchicon4,
              label: "Citations",
              value: "41,000",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col mb-10 font-oswald-medium items-center text-left px-4 ${
                index % 3 !== 2 ? "border-r border-gray-300" : ""
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-28 h-28 mb-2"
              />
              <p className="text-[24px] font-[400]  font-oswald-medium text-orange-600 text-left">
                {item.value}{" "}
              </p>
              <span className="text-[#58595B] font-[500] text-xl text-center font-[Arial]">
                {item.label}
              </span>
            </div>
          ))}

        
          <div className="h-full flex flex-col justify-center font-oswald-medium text-[22px]">
            <p className="text-[#002060] font-bold mb-1">
              Institutional h-index: 60
            </p>
            <p className="text-[#F04E30] font-bold mb-1">
              1246 Articles Published{" "}
              <span className="text-[#58595B] font-light leading-snug">
                in 2024, including 82 in Q1 & Q2 Journals
              </span>
            </p>
          </div>
        </div> */}
        <div className="hidden sm:grid grid-cols-3 mt-15 py-8 gap-4">
          {/* First Row: 3 items */}
          {[
            {
              icon: researchicon1,
              label: (
                <>
                  24 Granted, 30 <br /> Filed
                </>
              ),
              value: "Patents",
            },
            {
              icon: researchicon2,
              label: "Copyrights",
              value: "400+",
            },
            {
              icon: researchicon3,
              label: <>Total Research Publications</>,
              value: "10,000+",
            },
          ].map((item, index, arr) => (
            <div
              key={index}
              className={`flex flex-col mb-5 items-center text-left px-4 border-r border-gray-300 ${
                index === arr.length - 1 ? "border-r-0" : ""
              }`}
            >
              <img src={item.icon} alt="icon" className="w-28 h-28 mb-2" />
              <p className="text-[24px] font-[400] font-oswald-medium text-orange-600 text-left">
                {item.value}
              </p>
              <span className="text-[#58595B] font-[500] text-xl text-center font-[Arial]">
                {item.label}
              </span>
            </div>
          ))}

          {/* Second Row: Centered in the grid */}
          <div className="col-span-3 grid ml-20 grid-cols-2 place-items-center gap-4">
            {/* Fourth Icon Card */}
            <div className="flex flex-col border-r border-gray-300 pr-20 font-oswald-medium items-center text-left px-4">
              <img
                src={researchicon4}
                alt="Citations"
                className="w-28 h-28 mb-2"
              />
              <p className="text-[24px] font-[400] font-oswald-medium text-orange-600 text-left">
                41,000
              </p>
              <span className="text-[#58595B] font-[500] text-xl text-center font-[Arial]">
                Citations
              </span>
            </div>

            {/* Text Block */}
            <div className="h-full flex flex-col justify-center text-[22px] text-left">
              <p className="text-[#002060] font-oswald-medium font-bold mb-1">
                Institutional h-index: 60
              </p>
              <p className="text-[#F04E30] font-bold font-oswald-medium mb-1">
                1246 Articles Published{" "}
                <span className="text-[#58595B] font-[400] leading-snug">
                  in 2024, including 82 in Q1 & Q2 Journals
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="block sm:hidden mt-10">
        <Slider {...mobileSliderSettings}>
          {[
            {
              icon: researchicon1,
              label: " 24 Granted, 30 Filed",
              value: "Patents",
            },
            {
              icon: researchicon2,
              label: "Copyrights",
              value: "400+",
            },
            {
              icon: researchicon3,
              label: "Total Research Publications",
              value: "10,000+",
            },
            {
              icon: researchicon4,
              label: "Citations",
              value: "41,000+",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col mb-10 font-oswald-medium items-left text-left px-4 ${
                index % 3 !== 2 ? "border-r border-gray-300" : ""
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-28 h-28 mb-2"
              />
              <p className="text-[24px] font-[500]  font-oswald-medium text-orange-600 text-left">
                {item.value}{" "}
              </p>
              <span className="text-[#58595B] font-[600] text-xl text-center font-[Arial]">
                {item.label}
              </span>
            </div>
          ))}

          {/* Bottom text blocks */}
          <div className="h-full flex flex-col justify-center font-oswald-medium text-[22px] pl-4">
            <p className="text-[#002060] font-bold mb-1">
              Institutional h-index: 60
            </p>
            <p className="text-[#F04E30] font-bold mb-1">
              1246 Articles Published{" "}
              <span className="text-[#58595B] font-light leading-snug">
                in 2024, including 82 in Q1 & Q2 Journals
              </span>
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Collabaration;
