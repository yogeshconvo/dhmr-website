import React from "react";
import researchicon1 from "../../assets/FEAT/RC/1.svg";
import researchicon2 from "../../assets/FEAT/RC/2.svg";
import researchicon3 from "../../assets/FEAT/RC/3.svg";
import researchicon4 from "../../assets/FEAT/RC/4.svg";

const Collaborations = () => {
    return (
        <div className="px-10 py-20 bg-[rgba(18,46,94,0.05)]">
            {" "}
            <div className="max-w-7xl mx-auto grid md:grid-cols-[36%_60%] gap-6">
                {/* Left Side */}
                <div className="max-w-full">
                    <div className="h-1 w-10 bg-[#e8502e] mb-3"></div>
                    <h2 className="text-3xl md:text-4xl font-[500] text-[#707070] uppercase font-oswald-medium leading-tight">
                        Research & <br /> Collaborations
                    </h2>
                    <p className="mt-3 text-xm text-[#707070] font-[Arial]">
                        <span className="font-bold text-[#707070]">
                            Powered by Partnerships. Defined by Opportunity.
                        </span>
                        <br />
                        SAHS partners with top hospitals, global universities, and
                        leading healthcare academies to offer real-world training,
                        global exposure, and skill-based learning. These alliances drive
                        clinical excellence, academic depth, and industry readiness.
                    </p>
                    <a
                        href="#"
                        className="text-[#007bff] underline mt-6 inline-block text-xs"
                    >
                        Know more
                    </a>
                </div>

                {/* Right Side */}
                <div className="grid grid-cols-2 mt-15 sm:grid-cols-2  gap-1">
                    {/* Top 3 Items */}
                    <div className="flex flex-col items-center border-r border-gray-300 pr-2">
                        <h4 className="font-bold text-[#707070] text-[20px] mb-7">National Developmental Partners</h4>
                        <ol className="list-disc">
                            <li>Asian Institute of Gastroenterology, Hyderabad</li>
                            <li>ALPS (MAX Health Care Ltd, New Delhi</li>
                            <li>National Cancer Hospital, Nagpur</li>
                            <li>LENSKART EYETECH PVT. LTD, New Delhi</li>
                            <li>Lifenity Health Limited, Pune</li>
                            <li>ADCC Academy Private Limited Nagpur</li>
                            <li>AIIMS Hospital, Nagpur</li>
                            <li>Hinduja Hospital, Nagpur</li>
                            <li>KIMS Kingsway Hospital, Nagpur</li>
                            <li>HCG, Nagpur</li>
                            <li>Wockhardth Hospital, Nagpur</li>
                            <li>Mahatme Eye Hospital, Nagpur</li>
                        </ol>
                    </div>

                    <div className="flex flex-col items-center border-r border-gray-300 pr-2">
                        <h4 className="font-bold text-[#707070] text-[20px] mb-7">International Developmental Partners</h4>
                        <ol className="list-disc">
                            <li>BAPIO Training Academy, UK</li>
                            <li>Leeds Bucket University, UK</li>
                            <li>Kartz School, Yeshiva University, USA</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-9">
                <h3 className="font-bold text-[#707070]">
                    Skills and Knowledge Partner: Max Healthcare Education
                </h3>
                <p>
                    Datta Meghe Institute of Higher Education & Research (DMIHER), 
                    in collaboration with Max Healthcare Education, offers specialized 
                    Allied Health Sciences programs in apprenticeship embedded mode which 
                    are designed to equip students with the skills and knowledge required 
                    for a successful career in healthcare. This partnership combines DMIHER's 
                    academic excellence with Max Healthcare's extensive clinical expertise, 
                    providing students with a comprehensive learning experience
                </p>
            </div>
            <div className="mt-8 mr-12 text-right">
                <a
                    href="https://www.dmiher.edu.in/about-research-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#0055FF] hover:underline"
                >
                    Know More about MAX Advantage & Programs offered 
                </a>
            </div>
        </div>
    );
}


export default Collaborations;