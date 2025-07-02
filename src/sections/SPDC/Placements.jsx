import React from "react";
import icon1 from "../../assets/SPDC/Icons/icon1.png";
import icon2 from "../../assets/SPDC/Icons/icon2.png";
import icon3 from "../../assets/SPDC/Icons/icon3.png";
import icon4 from "../../assets/SPDC/Icons/icon4.png";
import icon5 from "../../assets/SPDC/Icons/icon5.png";
import icon6 from "../../assets/SPDC/Icons/icon6.png";

export default function Placements() {
  return (
    <div className="bg-white px-6 py-12 text-gray-500 font-[Arial]">
      <div className="max-w-7xl mx-auto">
      <h className="text-3xl md:text-4xl uppercase font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
      <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          PLACEMENTS
        </h>
        <p className="text-base font-light max-w-3xl">
          On an average, 40% of SPDCH graduates pursue higher education in
          renowned institutions, while 60% are successfully placed in reputed
          national and International healthcare organizations or establish
          private practices.
        </p>

        <div className="mt-10 flex w-full max-w-5xl text-white rounded overflow-hidden text-center text-xl">
          <div className="w-[40%] bg-[#0A2B61] py-2">
            <div className="font-medium text-2xl">40%</div>
            <div className="text-base">Higher Studies</div>
          </div>
          <div className="w-[58%] rounded-r bg-[#2EADFF] py-2">
            <div className="font-medium text-2xl">60%</div>
            <div className="text-base">Placement self-employed</div>
          </div>
        </div>

        <div className=" mt-4 md:mt-10 flex flex-wrap gap-12 text-lg">
          <div>
            <p>
              74 students currently pursuing higher education across the globe
            </p>
          </div>
          <div>
            <p>100% students benefitted guidance for</p>
            <ul className="">
              <li>- Competitive examinations</li>
              <li>- Career advancement</li>
              <li>- Entrepreneurial chip skill</li>
              <li>- Overseas opportunities</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 max-w-7xl mx-auto flex p-4 flex-wrap items-center justify-center">
          {[icon1, icon2, icon3, icon4, icon5, icon6].map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`University logo ${index + 1}`}
              className={`pr-4 pl-4 ${
                index !== 5 ? "h-17 border-r border-gray-300" : " pl-8 h-25"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
