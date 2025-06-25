import React, { useState } from "react";

<<<<<<< HEAD
import testimonial1 from "../../assets/Testimonials/SAS/picture1.png";
import testimonial2 from "../../assets/Testimonials/SAS/picture2.jpg";
import testimonial3 from "../../assets/Testimonials/SAS/picture3.png";
import testimonial4 from "../../assets/Testimonials/SAS/picture4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const tabs = ["Students", "Alumni"];

const data = {
  Students: [
    {
      img: testimonial1,
      para: "Akshit Yadav	MBA	2024-2026	The School of Allied Sciences (SAS), DMIHER (DU), provided me with incredible opportunities to grow beyond the classroom. Through SAS, I had the privilege of participating in the International Immersion Program at UCSI University, Malaysia, where I gained global business insights, industry exposure, and cross-cultural learning experiences. Additionally, the exceptional faculty at DMIHER played a crucial role in shaping my knowledge and skills, offering both academic excellence and real-world perspectives. I truly appreciate the learning environment and the mentorship I received at SAS.",
      name: `Mr. Akshit Yadav`,
      info: "MBA (FoCMS, SAS) | International Immersion Program Participant, UCSI University, Malaysia",
      batch: "2024-2026",
    },
    {
      img: testimonial2,
      para: "The School of Allied Sciences (SAS), DMIHER (DU), provided me with an invaluable opportunity to participate in the Global Immersion Program at NUS Singapore, where I gained world-class entrepreneurial insights and business strategies. The experience, along with the mentorship and practical learning at SAS, has played a crucial role in helping me support my father in reviving and expanding our family business. I am truly grateful to SAS for equipping me with the skills, exposure, and confidence to take on real-world business challenges.",
      name: `Mr, Aaryan Kale`,
      info: "BBA Final Year | Global Immersion Program Participant, NUS Singapore ",
      batch: "2022-2025",
=======
// import StudentThumb from "../../assets/TestimonialHome/student.png";
// import StudentVideo from "../../assets/Testimonials/student.mp4";

// import ParentsThumb from "../../assets/TestimonialHome/Parents.png";
// import ParentsVideo from "../../assets/Testimonials/parents.mp4";

// import AlumniThumb from "../../assets/TestimonialHome/Alumini.png";
// import AlumniVideo from "../../assets/Testimonials/Dr. Shivam.mp4";

import { PlayCircle } from "lucide-react";

const testimonialsData = {
  Students: [
    {
      name: "Aahash Kambale",
      year: (
        <>
          B.Tech 2017 | Specialization - AIDS
          <br />
          FEAT
        </>
      ),
      // video: StudentVideo,
      // thumbnail: StudentThumb,
      type: "video",
    },
    {
      name: "Mayur Ganwande",
      year: (
        <>
          B.Tech 2017 | Specialization - AIDS
          <br />
          FEAT
        </>
      ),
      // video: StudentVideo,
      // thumbnail: StudentThumb,
      type: "video",
    },
    {
      name: "Ms.Nikita Zade",
      year: (
        <>
          B.Tech 2017 | Specialization - AIDS
          <br />
          FEAT
        </>
      ),
      // video: StudentVideo,
      // thumbnail: StudentThumb,
      type: "video",
    },
    {
      name: "Ms.Ruchika Vaidya",
      year: (
        <>
          B.Tech 2017 | Specialization - AIDS
          <br />
          FEAT
        </>
      ),
      // video: StudentVideo,
      // thumbnail: StudentThumb,
      type: "video",
    },
  ],
  Parents: [
    {
      name: "Dr. Rohit Kumar Gupta",
      year: (
        <>
          Father of Ms. Niddhi Gupta, MBBS 2024 | DMMC
          <br />
          Scientist ‘G’
          <br />
          <b>Vikram Sarabhai Space Centre, ISRO, Thiruvananthapuram, Kerala</b>
        </>
      ),
      // video: ParentsVideo,
      // thumbnail: ParentsThumb,
      type: "video",
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
    },
  ],
  Alumni: [
    {
<<<<<<< HEAD
      img: testimonial3,
      para: "My journey at the School of Allied Sciences (SAS), DMIHER (DU), was truly transformative. The holistic education, leadership opportunities, and industry exposure I received shaped my entrepreneurial mindset. The support from faculty and the enriching academic environment played a pivotal role in my success. Today, as I run a thriving furniture business in Wardha, I credit SAS for equipping me with the skills, confidence, and vision to lead and grow in the business world",
      name: `Mr. Indrajit Chudiwale`,
      info: "MBA (Gold Medalist, 2020-21) | Entrepreneur",
      batch: "2020-2022",
    },
    {
      img: testimonial4,
      para: "The School of Allied Sciences (SAS), DMIHER (DU), provided me with the perfect blend of academic excellence, practical exposure, and leadership opportunities. The faculty’s guidance and the industry-focused curriculum helped me build a strong foundation in management. Today, as a Floor Manager at DMMC, Nagpur, I apply the skills and knowledge I gained at SAS every day. I am grateful to my alma mater for shaping my professional journey and preparing me for real-world challenges.",
      name: "Miss. Mansi Malelar",
      batch: "2021- 23",
=======
      name: "Dr. Shivam Om Mittal",
      year: (
        <>
          MBBS 2005 | JNMC
          <br />
          Head of Section, Parkinson’s Disease & Movement Disorder Program,
          <br />
          <b>Cleveland Clinic Abu Dhabi</b>
          <br />
          Co-Chair, Middle East Working Group,
          <br />
          <b>International Parkinson and Movement Disorder Society</b>
        </>
      ),
      // video: AlumniVideo,
      // thumbnail: AlumniThumb,
      type: "video",
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
    },
  ],
};

<<<<<<< HEAD
function TestimonialsSAHS() {
  const [tab, setTab] = useState("Students");

  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
  };

  return (
    <div className="px-4 md:px-8 py-10 bg-[#F4F4F4]">
      <h2 className="text-3xl sm:text-4xl ml-4 sm:ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
=======
const TestimonialVideSAHS = () => {
  const [activeTab, setActiveTab] = useState("Students");
  const [isPlaying, setIsPlaying] = useState(false);

  const current = testimonialsData[activeTab][0];
  const tabs = ["Students", "Parents", "Alumini"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsPlaying(false); // Stop video on tab switch
  };

  return (
    <div className="px-4 md:px-8 py-12 bg-[#f4f4f4]">
      <h2 className="text-4xl ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
        <hr className="border-red-500 border-2 w-12 mb-2" />
        TESTIMONIALS
      </h2>

<<<<<<< HEAD
      <div className="text-center flex justify-center pb-8 gap-4 flex-wrap">
        {tabs.map((tabName, index) => (
          <button
            key={tabName}
            onClick={() => handleTabClick(tabName)}
            className={`px-3 py-1 text-sm sm:text-base transition-all ${
              tab === tabName
=======
      {/* Tabs */}
      <div className="text-center flex justify-center pb-8 gap-4 flex-wrap">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`px-3 py-1 text-base transition-all ${
              activeTab === tab
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
                ? "underline text-black"
                : "text-gray-500 hover:text-gray-700"
            } ${
              index < tabs.length - 1 ? "border-r border-gray-300 pr-4" : ""
            }`}
<<<<<<< HEAD
          >
            {tabName}
=======
            onClick={() => handleTabClick(tab)}
          >
            {tab}
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
          </button>
        ))}
      </div>

<<<<<<< HEAD
      <div className="my-10 ">
        <Swiper
          style={{
            paddingBottom: 80,
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
          {data[tab]?.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex-center gap-12 max-sm:flex-col">
                <img
                  src={testimonial.img}
                  alt=""
                  className="w-45 h-45 object-cover rounded-full"
                />

                <div className="max-w-2xl font-[Arial] text-base">
                  {" "}
                  <p className="mb-4">{testimonial.para}</p>
                  <p className="font-[600] text-xm mt-1">{testimonial.name}</p>
                  <pre className="font-[Arial]  text-[#707070] leading-5 mt-2">
                    {testimonial.info}
                  </pre>
                  <p className="font-[Arial]  text-[#707070] leading-5 mt-2">
                    {testimonial.batch}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TestimonialsSAHS;
=======
      {/* Testimonial Display */}
      <div className="flex flex-col items-center">
        <div className="relative w-[380px] h-[220px] md:w-[470px] md:h-[280px] bg-gray-300 rounded-xl overflow-hidden shadow-lg mb-4">
          {current.type === "video" && !isPlaying && (
            <>
              <img
                src={current.thumbnail}
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <PlayCircle
                  size={60}
                  className="text-white drop-shadow-lg hover:scale-110 transition-transform duration-200"
                  onClick={() => setIsPlaying(true)}
                />
              </div>
            </>
          )}

          {current.type === "video" && isPlaying && (
            <video
              src={current.video}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Name & Year */}
        <div className="w-[380px] md:w-[460px] text-left whitespace-pre-line">
          <p className="text-lg font-semibold text-gray-800">{current.name}</p>
          <div className="text-sm text-gray-600">{current.year}</div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`w-3 h-3 rounded-full border border-black transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gray-400 scale-110"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideSAHS;
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
