import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Testimonial1 from "../../assets/JNMC/Testimonial/t1.png";
import Testimonial2 from "../../assets/JNMC/Testimonial/t2.png";
import Testimonial3 from "../../assets/JNMC/Testimonial/t3.png";
import Testimonial4 from "../../assets/JNMC/Testimonial/t4.png";


const tabOptions = ["Students", "Parents", "Alumni", "Faculty"];
const testimonialsData = {
    Students: [
        {
            name: "Rohan Khetan ",
            year: "BDS | 2019",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
            text: "It is of immense pleasure to be a part of DMIHER University. I am very proud that it is one of the renowned NAAC-accredited multi-Disciplinary deemed to be University in India. It’s amazing to see how the university has excelled in deepening its academic offerings and research focus over a period and how it strives to sharpen the skills of budding doctors towards competency building. I believe our faculties are truly a prized asset of our institution. My institution goes the extra mile to provide its students with varied opportunities in academics, research and co- curricular making the journey at DMIHER a holistic treat!",
        },
        {
            name: "Rahul Joshi",
            year: "Student | 2021",
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
            text: "The teachers and mentors are dedicated and also really helpful. DMIHER university is one of the renowned N.A.A.C. accredited deemed to be University in India. It gives me immense pleasure to say with pride that I have completed my B.P.T from this University.",
        },
    ],
    Parents: [
        {
            name: "Mrs. Alka Singh",
            year: "Parent of 2022 batch",
            img: "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=150&h=150&fit=crop&crop=face",
            text: "I am thankful to SPDC for giving my daughter the right exposure...",
        },
        {
            name: "Mr. Vijay Patil",
            year: "Parent of 2021 batch",
            img: "https://images.unsplash.com/photo-1589571894960-20bbe2828cdd?w=150&h=150&fit=crop&crop=face",
            text: "My son has become more confident and skilled after joining SPDC...",
        },
    ],
    Alumni: [
        {
            name: "Dr Samarth Shukla ",
            year: "MBBS, MD | 2000",
            img: Testimonial1,
            text: "The (MBBS) program offered at Jawaharlal Nehru medical College, Sawangi, serves as a fast-paced (five-year), fully immersive training program in the fields of medical health sciences, medical technology, and medical research. During the program, students work together and with top-ranked medical l faculty, medical doctors, and researchers to learn to analyze, diagnose, and treat all manners of health diseases and disorders. Students develop a great clinical acumen owing to the training and the amount of hands-on experience with the patients. Graduates of this program go on to work in private clinical setups, academics, and research fields. The training, networking opportunities, infrastructure, and resources offered by the medical program at JNMC are unparalleled in central India and should be considered by anyone looking for a career in MEDICAL Surgery.",
        },
        {
            name: "Dr Sourya Acharya",
            year: "MBBS, MD | 1998",
            img: Testimonial2,
            text: "JNMC has really helped me shape my future as an established clinician. I owe a big chunk of my success to the JNMC and the environment it has given me to flourish.",
        },
    ],
    Faculty: [
        {
            name: "Dr. Sunita Wagha ",
            year: "MBBS MD Pathology | 1990",
            img: Testimonial3,
            text: "I consider it an honor to be affiliated with this esteemed institution. Jawaharlal Nehru College not only provides rigorous academic and clinical training but also prioritizes the cultivation of strong character and professional ethics, which holds immense importance.",
        },
        {
            name: "Dr. Bhushan Madke",
            year: "MBBS MD Dermatology | 2015",
            img: Testimonial4,
            text: "Jawaharlal Nehru Medical College has been instrumental in shaping my future as a successful clinician. I attribute a significant portion of my achievements to the nurturing environment provided by JNMC, which has allowed me to thrive and excel in my field.",
        },
    ],
};

const TestimonialJNMC = () => {
    const [activeTab, setActiveTab] = useState("Students");

    return (
        <div className="px-6 md:px-40 py-20 bg-white">
            <h2 className="text-3xl sm:text-4xl ml-4 font-medium text-gray-500 font-oswald-medium mb-4">
                <hr className="border-red-500 border-2 w-12 mb-2" />
                TESTIMONIALS
            </h2>

            <div className="text-center flex justify-center pb-8 gap-4 flex-wrap">
                {tabOptions.map((tabName, index) => (
                    <button
                        key={tabName}
                        onClick={() => setActiveTab(tabName)}
                        className={`px-3 py-1 text-sm sm:text-base transition-all ${activeTab === tabName
                            ? "underline text-black"
                            : "text-gray-500 hover:text-gray-700"
                            } ${index < tabOptions.length - 1
                                ? "border-r border-gray-300 pr-4"
                                : ""
                            }`}
                    >
                        {tabName}
                    </button>
                ))}
            </div>

            <div className="my-10">
                <Swiper
                    style={{ paddingBottom: 80 }}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                >
                    {testimonialsData[activeTab]?.map((testimonial, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="flex-center gap-12 max-sm:flex-col text-center sm:text-left">
                                <img
                                    src={testimonial.img}
                                    alt={testimonial.name}
                                    className="w-36 h-36 object-cover rounded-full mx-auto sm:mx-0"
                                />
                                <div className="max-w-xl font-[Arial] text-sm">
                                    <p className="mb-4 text-[#707070]">{testimonial.text}</p>
                                    <p className="font-semibold text-base mt-1 text-[#707070]">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-[#707070] mt-1 font-semibold">{testimonial.year}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialJNMC;
