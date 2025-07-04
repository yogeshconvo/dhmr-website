
import React, { useState } from 'react';
import program1 from "../../assets/ProgramSPDC/1.png";
import program2 from "../../assets/ProgramSPDC/2.png";
import program4 from "../../assets/ProgramSPDC/4.png";


const programs = [

    {
        src: program2,
        alt: "Postgraduate",
    },

];


const Program = () => {
    const [activeCampus, setActiveCampus] = useState('wardha');
    const [activeHospital, setActiveHospital] = useState('wardha-hospital');

    const showLeadership = (campus) => {
        alert(`Opening ${campus.toUpperCase()} Leadership Page...`);
        // In real application: navigate to leadership page
    };
    return (
        <>
            <div className="max-w-8xl mx-auto bg-white px-6 md:px-32 py-16">
                {/* Heading */}
                <span className="block border-t-4 border-[#F25022] w-10 mb-2"></span>
                <h2 className="text-4xl font-[500] md:text-4xl font-oswald-medium mb-10 relative text-[#707070]">
                    OUR PROGRAMS
                </h2>

                {/* Images & Button Side by Side */}
                <div className="flex flex-col md:flex-row items-center">
                    {/* Images Grid */}
                    <div className="grid w-full">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className="w-[180px] mx-auto text-center"
                            >
                                <img
                                    src={program.src}
                                    alt={program.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Explore Button */}
                </div>
                <h2 className="text-3xl font-[500] text-[#707070] pt-20 mb-8 tracking-wider font-oswald-medium">
                    <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
                    MANDATORY DISCLOSURES
                </h2>

                <div className="sm:flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex justify-center">
                        <a
                            href="#"
                            className="text-xl tracking-wide font-oswald-medium  text-gray-600  rounded-md font-[300] hover:bg-blue-100 transition"
                        >
                            Check all Mandatory Disclosures{" "}
                            <span className="font-[400] underline">Click Here</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Program;