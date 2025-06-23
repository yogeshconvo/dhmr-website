import React from "react";
import DOCTOR from "../../assets/FEAT/AH.png";
const AffiliatedHospital = () => {
    return (
        <div className="bg-[#fefaf3] px-6 md:px-35 py-20 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            {/* Left Content */}
            <div className="lg:w-[510px] pb-10">
                {/* Heading */}
                <div className="mb-4">
                    {" "}
                    <h2 className="text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] leading-tight">
                        <span className="block border-t-4 border-[#F04E30] w-25 mb-4"></span>
                        FACULTY
                    </h2>
                    <h4 className="text-3xl  text-[#58595B] tracking-tight font-oswald font-[400] ">
                        {/* <span className="block border-t-4 border-[#F25022] w-10 mb-3"></span> */}
                        Leading with Experience.
                        <br /> Teaching with Purpose.
                    </h4>
                </div>

                {/* Subheading Paragraph */}
                <p className="text-[#58595B] text-xm font-oswald font-[400] border-b  pb-2 tracking-tight">
                    Comprising of global  INTERNATIONAL and national experts, the CDOE faculty are industry
                    veterans and impactful enablers of transformation. With a deep understanding of
                    both academic frameworks and evolving industry dynamics, they foster a learning
                    environment that is intellectually rigorous, professionally relevant, and personally empowering.
                    <br className="" />
                    <br />
                    <span className="tracking-normal font-[600] ">
                        165+ strong pool of faculty members I National and international experts I {" "}
                    </span>{" "}
                    From tier-1 institutions (IIMs, IITs, XLRI, IMT, Symbiosis and more) I Professors of Practice I Seasoned industry professionals.
                </p>

                {/* Bottom Link */}
                <div className="flex flex-col justify-end sm:flex-row sm:items-center gap-4 mt-4">
                    <a href="#" className="text-xs text-blue-600 underline">
                        Know More{" "}

                    </a>
                </div>
            </div>
            {/* Right Image Section */}
            <div className="">

                <img
                    src={DOCTOR}
                    alt="SPDC Building"
                    className="w-full h-[600px] mt-7 ml-3 rounded-xl object-contain"
                />

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                    <span className="w-3 h-3 bg-white rounded-full opacity-70"></span>
                    <span className="w-3 h-3 bg-white rounded-full opacity-70"></span>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
                    <svg
                        className="w-4 h-4 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M7.05 4.55a1 1 0 0 0 0 1.4L10.1 9.1 7.05 12.15a1 1 0 1 0 1.4 1.4l4-4a1 1 0 0 0 0-1.4l-4-4a1 1 0 0 0-1.4 0z" />
                    </svg>
                </div>
            </div>
        </div>

    );
};

export default AffiliatedHospital;
