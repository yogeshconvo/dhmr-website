import React from "react";
import DeanImage from "../../assets/DMCP/Dean.png";

const DeansMessageDMCP = () => {
  return (
    <div className="bg-[#0C2C5B] text-white px-6 md:px-40 py-20">
      <h2 className="text-3xl md:text-4xl font-oswald-medium font-[500] mb-10">
        <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
        DEAN’S MESSAGE
      </h2>

      <div className="flex flex-col  lg:flex-row gap-10 items-center lg:items-start text-center lg:text-left">
        {/* Image + Name */}
        <div className="flex-shrink-0">
          <img
            src={DeanImage}
            alt="Dean"
            className="rounded-lg w-[300px] md:w-[370px] h-auto object-cover mb-4 mx-auto lg:mx-0"
          />
          <div className="text-[13px] leading-6 text-[#E1CD67] mt-2">
            <p className="text-[#E1CD67] font-bold">Dr. Anil M. Pethe</p>
            <p>
              Dean, Datta Meghe College of Pharmacy, Sawangi (M), Wardha
              <br />
              M.Pharm, PhD, MBA
              <br />
    
            </p>
            <p>Email - anil.pethe@dmiher.edu.in</p>
          </div>
        </div>

        {/* Message */}
        <div className="text-lg tracking-wide font-sans text-[16px] mt-4 leading-6 text-[#FFFFFF] max-w-2xl font-[400]">
          <p className="mb-6">
            Welcome to Datta Meghe College of Pharmacy, Sawangi (Meghe), Wardha.<br/>
            At our institution, we are dedicated to providing high-quality
            education through a team of well-qualified faculty members who
            mentor and guide students toward excellence in pharmaceutical
            sciences. Our strong industry connects and placement cell ensures
            promising career opportunities by bridging the gap between academics
            and industry requirements.
          </p>

          <a href="#" className="text-[#9AD1FF] text-sm underline">
            Know more
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeansMessageDMCP;
