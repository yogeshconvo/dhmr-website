import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Replace with actual images
import student1 from "../../assets/RNPC/testimonials/student1.png";
import student2 from "../../assets/RNPC/testimonials/student2.png";
import student3 from "../../assets/RNPC/testimonials/student3.png";
import parent1 from "../../assets/RNPC/testimonials/parent1.png";
import parent2 from "../../assets/RNPC/testimonials/parent2.png";
import alumni1 from "../../assets/RNPC/testimonials/alumni1.png";
import alumni2 from "../../assets/RNPC/testimonials/alumni2.png";
import alumni3 from "../../assets/RNPC/testimonials/alumni3.png";
import faculty1 from "../../assets/RNPC/testimonials/faculty1.png";
import faculty2 from "../../assets/RNPC/testimonials/faculty2.png";

const tabs = ["Students", "Alumni", "Faculty", "Parents", "Patients"];

const data = {
  Students: [
    {
      img: student1,
      para: "The journey through the Bachelor of Physiotherapy program has been enriching. The hands-on training and clinical experience have prepared me well for real-world practice. The supportive faculty and modern facilities have enriched my learning experience and made me a competent physiotherapist.",
      info: `Manali Chitlange\nBPT\n2020`,
    },
    {
      img: student2,
      para: "Studying in the Bachelor of Physiotherapy program has been an enlightening experience. Combining classroom learning, practical sessions, and clinical placements has given me a holistic understanding of physiotherapy. The supportive faculty and modern facilities have nurtured my passion for helping others and set a strong foundation for my future in healthcare.",
      info: `Mansi Bodhe\nBPT\n2021`,
    },
    {
      img: student3,
      para: "The Master of Physiotherapy program has exceeded my expectations in every aspect. The depth of knowledge gained through specialised courses like neurorehabilitation approaches, electrodiagnosis, etc., has been invaluable. The program's emphasis on evidence-based practice and hands-on training has prepared me to provide high-quality care to diverse patient populations. I am confident that my MPT degree will open doors to a fulfilling and impactful career in Physiotherapy for me.",
      info: `Dr. Anjali Rai\nMPT\n2023`,
    },
  ],
  Parents: [
    {
      img: parent1,
      para: "I am pleased that my daughter was studying at Ravi Nair Physiotherapy College. The college offers students a thorough curriculum and several opportunities to develop their personalities and discover their hidden potential. The infrastructure is impressive, with quality classrooms, a well-equipped library and a virtual learning school providing a better understanding of real-life situations. The college offers support by preparing students to face the real world. The DMIHER (DU) delivers on its commitment to bring out the best in each of its students.",
      info: `Mrs. Anusradha Gulrandhe\nPurva Gulrandhe\nBPT 2018`,
    },
    {
      img: parent2,
      para: "We are incredibly pleased with the Master of Physiotherapy program at your college and its impact on Anisha's career path. The advanced coursework, specialised training, and opportunities for research and clinical practice have elevated Anisha's skills and knowledge in physiotherapy. Your college's commitment to excellence is evident in the growth we have seen in Anisha as she prepares for a rewarding career in healthcare",
      info: `Mr. Santosh Thakur\nAnisha Thakur\nMPT 2023`,
    },
  ],
  Alumni: [
    {
      img: alumni1,
      para: "Ravi Nair Physiotherapy College is an excellent place to study physiotherapy. Our college offers the best in academics, research, and co-curricular activities. The laboratories are also well-equipped. A friendly atmosphere and effectively designed resource material have created a student-friendly university. Apart from conducting regular lectures, our university focuses on competency-based education. The virtual learning school has provided many valuable assets for acquiring important practical skill sets. The student's clinical skills are enhanced due to exposure to different types of cases and greater patient flow in the hospital. The teachers and mentors are dedicated and helpful, too. I am very happy to say that I have completed my B.P.T from this university.",
      info: `Dr. Sanjeev Sharma (PT), Physiotherapist, Sydney\nBPT\n2006`,
    },
    {
      img: alumni2,
      para: "Choosing the Master of Physiotherapy program from RNPC has been one of the best decisions of my career. The specialised coursework, research opportunities, and mentorship from experienced faculty members have broadened my knowledge and skills in the field. I am confident and well-prepared to impact the healthcare industry positively.",
      info: `Dr. Nikita Seth\nMPT\n2020`,
    },
    {
      img: alumni3,
      para: "My experience in this college's Bachelor of Physiotherapy program has shaped my career. The program's emphasis on practical skills, clinical exposure, and evidence-based practice laid a strong foundation for my work as a physiotherapist. I am grateful for the dedicated faculty and the supportive learning environment that prepared me for the challenges and opportunities in the healthcare field.",
      info: `Dr. Vaishanavi Thakre\nBPT\n2019`,
    },
  ],
  Faculty: [
    {
      img: faculty1,
      para: "Being part of the physiotherapy department for the past few years has been fulfilling. Our commitment to academic excellence, research-driven teaching, and mentorship has enabled our students to thrive academically and professionally. I am proud to be a part of a team that shapes the next generation of physiotherapy professionals",
      info: `Dr. Snehal Samal\n2021 (6 years)\nMPT, BPT, MHPE`,
    },
    {
      img: faculty2,
      para: "I have had the privilege of being a part of Ravi Nair Physiotherapy College for the past four years, and it has been an enriching experience. Being an alumnus of this Institute and working in the same supportive and collaborative environment fosters academic excellence and professional growth. The college's commitment to providing cutting-edge education in physiotherapy has allowed me to contribute meaningfully to the development of students. I am proud to be associated with this institution, where dedication to student success is paramount.",
      info: `Dr. Pallavi Harjpal\n2023 (2.3 years)\nMPT, BPT`,
    },
  ],
  Patients: [
    // Add patient testimonials here if available
  ],
};

function TestimonialsRNPC() {
  const [tab, setTab] = useState("Students");
  return (
    <div className="container my-[125px]">
      <h2 className="text-3xl font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
        TESTIMONIALS
      </h2>

      <ul className="flex gap-2 mx-auto w-fit -mt-2">
        {tabs.map((tabItem, idx) => (
          <React.Fragment key={tabItem}>
            <li
              onClick={() => setTab(tabItem)}
              className="cursor-pointer text-[#707070] hover:underline border-b-2 border-b-transparent"
              style={{
                textDecoration: tabItem === tab ? "underline" : undefined,
                color: tabItem === tab ? "black" : undefined,
              }}
            >
              {tabItem}
            </li>
            {idx < tabs.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </ul>

      <div className="my-20 m-auto max-w-[800px]">
        <Swiper
          style={{
            paddingBottom: 60,
          }}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data[tab]?.length ? (
            data[tab].map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex-center gap-12 max-sm:flex-col min-h-[316px]">
                  <div className="w-[200px] flex-1 h-[200px] rounded-full overflow-hidden">
                    <img
                      src={testimonial.img}
                      alt=""
                      className=" w-full !h-[200px] object-cover"
                    />
                  </div>
                  <div className="flex-3">
                    <p className="text-[black] mb-4">{testimonial.para}</p>
                    <pre className="font-bold text-[#707070] leading-5 mt-2 whitespace-pre-line">
                      {testimonial.info}
                    </pre>
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
}

export default TestimonialsRNPC;
