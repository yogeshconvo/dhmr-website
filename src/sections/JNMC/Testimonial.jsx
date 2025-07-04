import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import S1 from "../../assets/jnmc/testimonial/s1.jpg";
import S2 from "../../assets/jnmc/testimonial/s2.jpg";
import S3 from "../../assets/jnmc/testimonial/s3.png";

import P1 from "../../assets/jnmc/testimonial/p1.jpg";
import P2 from "../../assets/jnmc/testimonial/p2.jpg";

import A1 from "../../assets/jnmc/testimonial/A1.jpg";
import A2 from "../../assets/jnmc/testimonial/a2.png";
import A3 from "../../assets/jnmc/testimonial/a3.jpg";
import A4 from "../../assets/jnmc/testimonial/a4.png";

const tabOptions = ["Students", "Parents", "Alumni"];
const testimonialsData = {
  Students: [
    {
      name: "Dr. Arya Bhagwat",
      year: "MBBS | 2021",
      img: S1,
      text: "Jawaharlal Nehru medical college, this college has truly provided me a homely environment in the form of knowledgeable teachers who are approachable and supportive and loving seniors who are willing to guide us at every step. I’m grateful that I get to learn new things every day that has increased my interest in dentistry and its scope.",
    },
    {
      name: "Dr. Prakhar Shrivastava",
      year: "MBBS | 2022",
      img: S2, // Add photo if available
      text: "Overall, I am confident that Jawaharlal Nehru medical College provides an exceptional educational experience that prepares students for successful careers in medically while instilling in them the values of professionalism, integrity, and service. As a parent, I am grateful for the positive impact that the college has had on my child’s academic and personal growth, and I wholeheartedly recommend it to other aspiring dental professionals.",
    },
    {
      name: "Dr. Shubham Deshpande",
      year: "MD | 2023",
      img: S3, // Add photo if available
      text: "The teachers and mentors are dedicated and also really helpful. DMIHER university is one of the renowned N.A.A.C. accredited deemed to be University in India. It gives me immense pleasure to say with pride that I have completed my MBBS from this University.",
    },
  ],
  Parents: [
    {
      name: "Mr. Debasis Chakrabarty",
      year: "Parent of Debarun Chakraborty",
      img: P1,
      text: "I am truly grateful to Datta Meghe Institute of Higher Education & Research (DMIHER) for providing an exceptional learning environment for my son. The institute offers a lush green, clean, and serene campus that fosters both academic and personal growth. Their down-to-earth approach and student-friendly atmosphere make it an ideal place for holistic development. One of the aspects that impressed me the most is the faculty and administration's genuine concern for students and parents. They listen patiently, address concerns sincerely, and continuously strive for improvement not just in academics but in all areas that impact students' well-being. Their commitment to quality is evident in their decisions, such as changing service providers to ensure students receive nutritious and hygienic food. Over the past two years, I have witnessed a remarkable transformation in my son. He has become more confident, independent, and a true team player. His research orientation, inquisitiveness, and empathy toward both patients and those around him have grown significantly. Many institutions impart knowledge, but only a few teach students how to apply it effectively in real life, and DMIHER is one of them. I sincerely thank the faculty and management for shaping my son’s future and providing him with the opportunity to be part of such a prestigious institution.",
    },
    {
      name: "Mr. Rajeev Kumar Tripathi",
      year: "Parent of Ms. Saanz Rajiv Kumar Tripathi",
      img: P2,
      text: "As a proud father, I am truly grateful for the quality education and nurturing environment that JNMC is providing to my daughter who studies in 2nd year Medicine (MBBS). At the outset, we were impressed by the college’s commitment to academic excellence, hands-on clinical training, holistic development of student and above all an impressive feedback from my friend residing in Nagpur. The faculty members are not only highly qualified but also genuinely supportive, always encouraging students to reach their full potential. My daughter has grown well, both as a student and as a compassionate individual, thanks to the guidance and mentorship she is receiving here. Most fascination part is a very big hospital attached with the college with almost 80% patient load is giving highest level of satisfaction as a medical student and outstanding performance of practical experience imparted to them. Beyond academics, I am confident that my daughter is on the right path to becoming a dedicated and skilled doctor, and we wholeheartedly recommend JNMC to any parent or student seeking the best career in the field of Medicine.",
    },
  ],
  Alumni: [
    {
      name: "Dr. Shivam Om Mittal",
      year: "MBBS, MD",
      img: A1,

      text: "The pursuit of excellence in neurology began at JNMC. The rigorous training and patient-centered approach instilled in me during my MBBS years shaped my passion for Movement Disorders. Today, I strive to offer the best possible care for patients worldwide, but my roots remain deeply connected to where it all started—JNMC.",
      extra: `- Staff Physician, Neurological Institute, Cleveland Clinic Abu Dhabi <br /> 
- Former Movement Disorders Specialist, Columbia Asia Hospital and Vikram Hospital, Bangalore`,
    },
    {
      name: "Dr. Ruchi Mishra",
      year: "MBBS, MD",
      img: A2,
      text: "Healing goes beyond medicine; it extends into the mind and soul. JNMC shaped my understanding of patient care, which eventually led me to explore therapeutic techniques that transform lives beyond conventional medicine. My journey has been one of evolution, and I am grateful for the foundation that JNMC provided.",
      extra: `- Certified Clinical Hypnotherapist, Eastbourne, UK`,
    },
    {
      name: "Dr. Digant Amte",
      year: "MBBS",
      img: A4, // Add photo if available
      text: "Medicine is not just a profession; it is a means to serve humanity. My time at JNMC shaped my values and strengthened my resolve to dedicate my life to serving underprivileged tribal communities. The teachings and experiences I gained there continue to inspire me every day.",
      extra: `- Director, Lok Biradari Prakalp, Hemalkasa`,
    },
    {
      name: "Dr. Anand Sancheti",
      year: "MBBS, MS",
      img: A3,
      text: "There are no shortcuts to excellence. The foundation of my medical career was laid at JNMC, which instilled in me the discipline and perseverance to achieve my goals. The rigorous training I received shaped my journey, and I am forever grateful for the education and values instilled in me during my formative years.",
      extra: `- Director, New Era Hospital, Nagpur`,
    },
  ],
};

const TestimonialJNMC = () => {
  const [activeTab, setActiveTab] = useState("Students");

  return (
    <div className="px-4 md:px-8 py-10 bg-[#F4F4F4]">
      <h2 className="text-4xl ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
        <hr className="border-red-500 border-2 w-12 mb-2" />
        TESTIMONIALS
      </h2>

      <div className="text-center flex justify-center gap-4 flex-wrap">
        {tabOptions.map((label, index) => (
          <button
            key={label}
            className={`px-3 py-1 text-base transition-all ${
              activeTab === label
                ? "underline text-black"
                : "text-gray-500 hover:text-gray-700"
            } ${index < 2 ? "border-r border-gray-300 pr-4" : ""}`}
            onClick={() => setActiveTab(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="m-auto max-w-[800px]">
        <Swiper
          style={{ paddingBottom: 60 }}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonialsData[activeTab]?.length ? (
            testimonialsData[activeTab].map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex-center gap-12 max-sm:flex-col min-h-[316px]">
                  <div className="w-[200px] flex-1 h-[200px] rounded-full overflow-hidden">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-full !h-[200px] object-cover"
                    />
                  </div>
                  <div className="flex-3">
                    <div className="max-w-xl font-[Arial] text-base">
                      <p className="text-[#707070] mt-2">{testimonial.text}</p>
                      <p className="font-[600] text-xm mt-1">
                        {testimonial.name}
                      </p>
                      <pre className="font-[Arial] text-[#707070] leading-5 mt-2">
                        {testimonial.year}
                      </pre>
                      {testimonial.extra && (
                        <div
                          className="text-[#707070] mt-2"
                          dangerouslySetInnerHTML={{
                            __html: testimonial.extra,
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="text-[#707070] text-center py-16">
                No testimonials available for this category yet.
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialJNMC;
