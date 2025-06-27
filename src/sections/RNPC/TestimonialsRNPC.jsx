import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import DrAnjaliRai from "../../assets/RNPC/testimonials/DR. ANJALI RAI.png";
import DrNikitaSeth from "../../assets/RNPC/testimonials/Dr. Nikita Seth.png";
import DrPallaviHarjpal from "../../assets/RNPC/testimonials/DR. PALLAVI HARJPAL.png";
import DrSanjeevSharma from "../../assets/RNPC/testimonials/DR. SANJEEV SHARMA.png";
import DrSnehalSamal from "../../assets/RNPC/testimonials/DR. SNEHAL SAMAL.png";
import DrVaishanaviThakre from "../../assets/RNPC/testimonials/Dr. Vaishanavi Thakre.png";
import ManaliChitalnge from "../../assets/RNPC/testimonials/MANALI CHITALNGE.jpeg";
import MansiBodhe from "../../assets/RNPC/testimonials/MANSI BODHE.jpeg";
import MrSantoshThakur from "../../assets/RNPC/testimonials/Mr. Santosh Thakur.png";
import MrsAnuradhaGulrande from "../../assets/RNPC/testimonials/MRS. ANURADHA GULRANDE.png";

const tabLabels = ["Students", "Alumni"];

const data = {
  Students: [
    {
      img: ManaliChitalnge,
      para: "The journey through the Bachelor of Physiotherapy program has been enriching. The hands-on training and clinical experience have prepared me well for real-world practice. The supportive faculty and modern facilities have enriched my learning experience and made me a competent physiotherapist.",
      name: "Manali Chitlange",
      info: `BPT 2020`,
    },
    {
      img: MansiBodhe,
      para: "Studying in the Bachelor of Physiotherapy program has been an enlightening experience. Combining classroom learning, practical sessions, and clinical placements has given me a holistic understanding of physiotherapy. The supportive faculty and modern facilities have nurtured my passion for helping others and set a strong foundation for my future in healthcare.",
      name: "Mansi Bodhe",
      info: `BPT 2021`,
    },
    {
      img: DrAnjaliRai,
      para: "The Master of Physiotherapy program has exceeded my expectations in every aspect. The depth of knowledge gained through specialised courses like neurorehabilitation approaches, electrodiagnosis, etc., has been invaluable. The program's emphasis on evidence-based practice and hands-on training has prepared me to provide high-quality care to diverse patient populations. I am confident that my MPT degree will open doors to a fulfilling and impactful career in Physiotherapy for me.",
      name: "Dr. Anjali Rai",
      info: `MPT 2023`,
    },
  ],
  Parents: [
    {
      img: MrsAnuradhaGulrande,
      para: "I am pleased that my daughter was studying at Ravi Nair Physiotherapy College. The college offers students a thorough curriculum and several opportunities to develop their personalities and discover their hidden potential. The infrastructure is impressive, with quality classrooms, a well-equipped library and a virtual learning school providing a better understanding of real-life situations. The college offers support by preparing students to face the real world. The DMIHER (DU) delivers on its commitment to bring out the best in each of its students.",
      name: "Mrs. Anusradha Gulrandhe",
      info: `Parent of Purva Gulrandhe BPT 2018`,
    },
    {
      img: MrSantoshThakur,
      para: "We are incredibly pleased with the Master of Physiotherapy program at your college and its impact on Anisha's career path. The advanced coursework, specialised training, and opportunities for research and clinical practice have elevated Anisha's skills and knowledge in physiotherapy. Your college's commitment to excellence is evident in the growth we have seen in Anisha as she prepares for a rewarding career in healthcare",
      name: "Mr. Santosh Thakur",
      info: `Parent of Anisha Thakur MPT 2023`,
    },
  ],
  Alumni: [
    {
      img: DrSanjeevSharma,
      para: "Ravi Nair Physiotherapy College is an excellent place to study physiotherapy. Our college offers the best in academics, research, and co-curricular activities. The laboratories are also well-equipped. A friendly atmosphere and effectively designed resource material have created a student-friendly university. Apart from conducting regular lectures, our university focuses on competency-based education. The virtual learning school has provided many valuable assets for acquiring important practical skill sets. The student's clinical skills are enhanced due to exposure to different types of cases and greater patient flow in the hospital. The teachers and mentors are dedicated and helpful, too. I am very happy to say that I have completed my B.P.T from this university.",
      name: `Dr. Sanjeev Sharma (PT)`,
      info: " Physiotherapist, Sydney BPT 2006",
    },
    {
      img: DrNikitaSeth,
      para: "Choosing the Master of Physiotherapy program from RNPC has been one of the best decisions of my career. The specialised coursework, research opportunities, and mentorship from experienced faculty members have broadened my knowledge and skills in the field. I am confident and well-prepared to impact the healthcare industry positively.",
      name: "Dr. Nikita Seth",
      info: `MPT 2020`,
    },
    {
      img: DrVaishanaviThakre,
      para: "My experience in this college's Bachelor of Physiotherapy program has shaped my career. The program's emphasis on practical skills, clinical exposure, and evidence-based practice laid a strong foundation for my work as a physiotherapist. I am grateful for the dedicated faculty and the supportive learning environment that prepared me for the challenges and opportunities in the healthcare field.",
      name: `Dr. Vaishanavi Thakre`,
      info: "BPT 2019",
    },
  ],
  Faculty: [
    {
      img: DrSnehalSamal,
      para: "Being part of the physiotherapy department for the past few years has been fulfilling. Our commitment to academic excellence, research-driven teaching, and mentorship has enabled our students to thrive academically and professionally. I am proud to be a part of a team that shapes the next generation of physiotherapy professionals",
      name: `Dr. Snehal Samal`,
      info: "2021(6 years) MPT, BPT, MHPE",
    },
    {
      img: DrPallaviHarjpal,
      para: "I have had the privilege of being a part of Ravi Nair Physiotherapy College for the past four years, and it has been an enriching experience. Being an alumnus of this Institute and working in the same supportive and collaborative environment fosters academic excellence and professional growth. The college's commitment to providing cutting-edge education in physiotherapy has allowed me to contribute meaningfully to the development of students. I am proud to be associated with this institution, where dedication to student success is paramount.",
      name: `Dr. Pallavi Harjpal`,
      info: "2023 (2.3 years) MPT, BPT",
    },
  ],
  Patients: [
    // Add patient testimonials here if available
  ],
};

function TestimonialsRNPC() {
  const [tab, setTab] = useState("Students");
  return (
    <div className="px-4 md:px-8 py-10 bg-[#F4F4F4]">
      <h2 className="text-4xl ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
        <hr className="border-red-500 border-2 w-12 mb-2" />
        TESTIMONIALS
      </h2>
      <div className="text-center flex justify-center gap-4 flex-wrap">
        {tabLabels.map((label, index) => (
          <button
            key={label}
            className={`px-3 py-1 text-base transition-all ${
              tab === label
                ? "underline text-black"
                : "text-gray-500 hover:text-gray-700"
            } ${index < 1 ? "border-r border-gray-300 pr-4" : ""}`}
            onClick={() => setTab(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="m-auto max-w-[800px]">
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
                    <div className="max-w-xl font-[Arial] text-base">
                      {" "}
                      <p className="mb-4">{testimonial.para}</p>
                      <p className="font-[600] text-xm mt-1">
                        {testimonial.name}
                      </p>
                      <pre className="font-[Arial]  text-[#707070] leading-5 mt-2">
                        {testimonial.info}
                      </pre>
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
}

export default TestimonialsRNPC;
