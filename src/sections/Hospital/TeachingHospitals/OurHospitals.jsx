import React from "react";

function OurHospitals({ data }) {
  return (
    <div className="container py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight ">
        <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2 mr-4"></span>
        OUR HOSPITALS
      </h2>
      <p className="text-[#122E5E] text-xl">{data.ourHospitalsTitle}</p>

      <div className="flex-center items-end gap-8  flex-wrap mt-16">
        {data.hospitals.map((hospital, idx) => (
          <div
            key={idx}
            className="w-[250px] flex-center flex-col text-center gap-2"
          >
            <img src={hospital.logo} alt={hospital.name} />
            <span className="text-[#269BFF] font-bold">
              {hospital.shortName}
            </span>
            <span className="font-bold text-[#122E5E]">+</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {data.hospitals.map((hospital, idx) => (
          <div
            key={idx}
            className=" flex items-start gap-8 bg-white mt-4 p-10 rounded-lg shadow-md flex-col lg:flex-row"
          >
            <div className="flex-1 ">
              <h3 className="text-[#269BFF] font-bold mb-4 text-xl max-w-[350px]">
                {hospital.name}
              </h3>
              {hospital.desc}
            </div>
            <div className="flex-1 w-full">
              <img
                src={hospital.photo}
                alt={hospital.shortName}
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurHospitals;
