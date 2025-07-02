import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import researchicon1 from "../../assets/SHER/icon1.png";
import researchicon2 from "../../assets/SHER/icon2.png";
import researchicon3 from "../../assets/SHER/icon3.png";
import researchicon4 from "../../assets/FEAT/RC/4.svg";

const CollabarationSHER = () => {
    const mobileSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="px-32 py-20 bg-orange-50">
            <div className="max-w-8xl mx-auto grid md:grid-cols-[36%_60%] gap-6">
                {/* Left Side */}
                <div className="max-w-full">
                    <div className="h-1 w-16 bg-[#e8502e] mb-3"></div>
                    <h2 className="text-3xl md:text-4xl font-[500] text-[#707070] uppercase font-oswald-medium leading-tight">
                        RESEARCH & <br /> COLLABORATIONS
                    </h2>
                    <p className="mt-3 text-lg text-[#707070] font-[Arial]">
                        <span className="font-bold text-[#707070]">
                            Advancing Educational Innovation, Shaping the<br /> Future of Learning
                        </span>
                        <br />
                        SHER leads transformative educational research in curriculum design,
                        assessment reforms, learner-centric methodologies, program evaluation,
                        and skills training. Its work encompasses numerous research projects,
                        publications, and copyrights that contribute to advancing educational
                        innovation and scholarship. Through collaborations with national and
                        international partners, including the European Commission’s Erasmus+
                        ‘Tuning India’ initiative, SHER supports capacity building and the
                        continuous improvement of higher education.
                    </p>
                    <a
                        href="https://www.dmiher.edu.in/about-research-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0055FF] hover:underline"
                    >
                        Know More
                    </a>


                </div>

                {/* Right Side (Desktop) */}
                <div className="hidden sm:grid grid-cols-3 py-8 gap-4">
                    {[
                        {
                            icon: researchicon1,
                            label: (<>
                                Educational <br /> Research Projects
                            </>),
                            value: "300+",
                        },
                        {
                            icon: researchicon2,
                            label: (
                                <>
                                Research <br />Publications
                                </>
                            ),
                            value: "600+",
                        },
                        {
                            icon: researchicon3,
                            label: "Copyrights",
                            value: "1000",
                        },

                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col mb-10 font-oswald-medium  items-center text-center px-4 ${index % 3 !== 2 ? "border-r border-gray-300" : ""
                                }`}
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-28 h-28 mb-2"
                            />
                            <p className="text-[28px] font-oswald-medium text-orange-600">
                                {item.value}
                            </p>
                            <p className="text-[#58595B] text-2xl font-oswald-light">
                                {item.label}
                            </p>
                        </div>
                    ))}

                    {/* Bottom 3 text blocks */}
                    <div className="px-4 border-r border-gray-300 font-oswald-medium text-[20px]">
                        <p className="text-[#002060] font-bold mb-1">Key Collaborations:</p>
                        <p className="text-[#58595B] leading-snug font-light">
                            European Commission Erasmus+, Multicentric competency-based medical education study
                        </p>
                    </div>

                    <div className="px-4 border-r border-gray-300 font-oswald-medium  text-[20px]">
                        <p className="text-[#002060] font-bold mb-1">Two B.C. Roy Awards</p>
                        <p className="text-[#58595B] leading-snug font-light">
                            for excellence in medical education | <span className="text-[#f7941d] font-bold">MCI recognition</span> for training over 1,000 faculty in 2018 | <span className="text-[#0055FF] font-bold">ML Gupta National Award</span> for substantial contributions to medical education in 2020
                        </p>
                    </div>

                    <div className="px-4 font-oswald-medium  text-[20px]">
                        <p className="text-[#002060] font-bold mb-1">Thrust Areas:</p>
                        <p className="text-[#58595B] leading-snug font-light">
                            Curriculum innovation, assessment reforms, educational scholarship, program evaluation, skills training, learner-centric TLA
                        </p>
                    </div>
                </div>
            </div>

            <div className="block sm:hidden mt-10">
                <Slider {...mobileSliderSettings}>
                    {[
                        {
                            icon: researchicon1,
                            label: "Patents",
                            value: "11",
                        },
                        {
                            icon: researchicon2,
                            label: "Copyrights",
                            value: "75",
                        },
                        {
                            icon: researchicon3,
                            label: "Publications",
                            value: "224 by Faculty | 258 by Students",
                        },
                        {
                            icon: researchicon4,
                            label: "Conference Presentations",
                            value: "18 by Faculties | 54 by Students",
                        },
                        {
                            icon: researchicon1,
                            label: "Books Published",
                            value: "9 Books | 38 Book Chapters",
                        },
                        {
                            icon: researchicon2,
                            label: "Grants Received",
                            value: "₹522L Funded | ₹25L Consultancy",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center px-4"
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-20 h-20 mb-2"
                            />
                            <p className="text-xl font-oswald-medium text-orange-600">
                                {item.value}
                            </p>
                            <p className="text-[#58595B] text-base font-oswald-light">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CollabarationSHER;
