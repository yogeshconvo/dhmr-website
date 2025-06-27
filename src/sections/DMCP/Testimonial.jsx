import React, { useState, useEffect, useRef } from "react";
import { PlayCircle } from "lucide-react";

import Img1 from "../../assets/DMCP/Testimonials/1.png";
import Img2 from "../../assets/DMCP/Testimonials/2.png";
import Img3 from "../../assets/DMCP/Testimonials/3.png";
import Img4 from "../../assets/DMCP/Testimonials/4.jpg";
import Img5 from "../../assets/DMCP/Testimonials/5.png";
import Img6 from "../../assets/DMCP/Testimonials/6.png";
import Img7 from "../../assets/DMCP/Testimonials/7.jpg";
import Img8 from "../../assets/DMCP/Testimonials/8.png";
import Img9 from "../../assets/DMCP/Testimonials/9.jpg";
import Img10 from "../../assets/DMCP/Testimonials/10.jpg";
import Img11 from "../../assets/DMCP/Testimonials/11.jpg";
import Img12 from "../../assets/DMCP/Testimonials/12.jpg";
import Img13 from "../../assets/DMCP/Testimonials/13.jpg";
import Img14 from "../../assets/DMCP/Testimonials/14.jpg";
import Img15 from "../../assets/DMCP/Testimonials/15.jpg";
import Img16 from "../../assets/DMCP/Testimonials/16.png";

const testimonialsData = {
  Students: [
    {
      type: "text",
      image: Img1,
      name: "Ms. Pratiksha Soni",
      course: "B.Pharm 2024-2028",
      content:
        " I am overwhelmed with gratitude for the profound impact it has on my personal and professional growth. From the moment i stepped onto campus, I was enveloped in an environment that not only nurtured academic excellence but also celebrated diversity, creativity, and innovation. The faculty at DMCP are more than just educators; they are mentors, guides, champions of intellectual curiosity. Their unwavering dedication to student success, coupled with their expertise in their respective fields, has inspired me to push the boundaries of my own potential and pursue excellence in all my endeavors. Beyond the classroom college offers a plethora of opportunities for experiential learning, community engagement, and leadership development. I am immensely proud to be a part of such a distinguished institution, and I am grateful for the countless opportunities it has afforded me to grow, learn, and thrive.",
    },
    {
      type: "text",
      image: Img2,
      name: "Mr. Mujibullah Sheikh",
      course: "B.Pharm 2022-2026",
      content:
        "I am Mr. Mujibullah sheikh student of B. Pharm 3rd Year. The faculty's dedication to excellence, the comprehensive curriculum, and the hands-on learning opportunities have truly prepared me for a successful career in pharmacy. I am grateful for the support, guidance, and knowledge I am gaining at DMCP. I highly recommend this institution to anyone looking to pursue a career in pharmacy.",
    },
    {
      type: "text",
      image: Img3,
      name: "Mr. Satvik Bhutada",
      course: "B.Pharm 2024-2028",
      content:
        "As a student at Datta Meghe College of Pharmacy, I can confidently say it is an enriching experience. The faculty is highly knowledgeable and supportive, providing a conducive learning environment. The practical exposure and research opportunities are invaluable in shaping my skills. The campus facilities are top-notch, enhancing the overall academic journey. I am grateful for the holistic education and personal growth I am gaining at DMCP.",
    },
    {
      type: "text",
      image: Img4,
      name: "Ms. Sneha Pandey",
      course: "Pharm D 2024-2030",
      content:
        "As a first-year Pharm D student at Datta Meghe College of Pharmacy, I am grateful for the exceptional academic environment and hands-on learning opportunities. The college provides in-depth pharmaceutical education, guided by experienced faculty, while the 1500+ bed AVBRH hospital offers invaluable practical exposure. This integration of academics with real-world clinical training enhances our understanding of patient care and pharmacy practice. Beyond studies, DMCP fosters leadership, teamwork, and personal growth. I feel privileged to be part of such a prestigious institution that nurtures future healthcare professionals with excellence, ethics, and innovation.",
    },
    {
      type: "text",
      image: Img5,
      name: "Ms. Sakshi Sant",
      course: "M.Pharm Pharmaceutical Quality Assurance 2024-2026",
      content:
        "As a first-year M. Pharm (Quality Assurance) student at Datta Meghe College of Pharmacy, I am privileged to be part of an institution that prioritizes academic excellence and professional growth. The college offers a dynamic research culture, access to Coursera courses for skill enhancement, and guidance from highly qualified faculty. Additionally, the six-month industrial training opportunity provides invaluable hands-on experience, bridging the gap between academics and industry. DMCP fosters innovation, critical thinking, and career development, preparing us for future challenges in pharmaceutical sciences. I am grateful for the enriching learning environment that supports both research and practical expertise.",
    },
    {
      type: "text",
      image: Img6,
      name: "Ms. Isha Mangate",
      course: "M.Pharm Regulatory Affairs 2024-2026",
      content:
        "As a first-year M. Pharm (Regulatory Affairs) student at Datta Meghe College of Pharmacy, I am privileged to be part of an institution that emphasizes academic excellence and industry readiness. The college offers a strong research culture, Coursera courses for global exposure, and guidance from highly qualified faculty in Regulatory Affairs. The six-month industrial training provides hands-on experience, while practicals based on RA case studies enhance our analytical skills. DMCP bridges the gap between theory and real-world applications, preparing us for regulatory challenges in the pharmaceutical industry. I am grateful for this enriching and career-focused learning environment",
    },
    {
      type: "text",
      image: Img7,
      name: "Ms. Hellen Yayra Dzoagbe",
      course: "B.Pharm 2021-2025",
      content:
        "As a final-year B. Pharm student from Ghana, my journey at Datta Meghe College of Pharmacy has been truly transformative. The college provides a perfect blend of academic excellence, hands-on training, and a supportive learning environment. The highly qualified faculty, advanced laboratories, and research-driven approach have enriched my knowledge and skills. DMCP’s diverse and inclusive campus made me feel at home, fostering personal and professional growth. The international exposure and practical learning experiences have prepared me for a successful career in pharmacy. I am grateful for the opportunities, guidance, and memories that will stay with me forever.",
    },
    {
      type: "text",
      image: Img8,
      name: "Mr. Atif Akbani",
      course: "D.Pharm 2023-25",
      content:
        "As a D. Pharm student at Datta Meghe College of Pharmacy, I am grateful for the exceptional learning opportunities that have shaped my academic and professional journey. The 1500+ bed AVBRH hospital provides extensive practical exposure, enhancing my clinical and dispensing skills. The college’s structured curriculum and expert faculty have thoroughly prepared me for the Pharmacy Exit Examination. Additionally, the ‘Earn and Learn’ scheme has been a great support for financially needy students, ensuring education without financial barriers. DMCP’s commitment to excellence, hands-on training, and student welfare makes it the ideal place to build a strong pharmacy career.",
    },
  ],
  Parents: [
    {
      type: "text",
      image: Img13,
      name: "Mr. Jagtarsingh Bagga",
      course: "Parent of Ms. Harpritkaur Bagga (B.Pharm 2022-2026)",
      content:
        "I am Jagtarsingh Bagga father of Ms. Harpritkaur Bagga, watching her excel and become the class topper has been a source of immense pride and joy for our family. The college's nurturing environment, supportive faculty, and challenging curriculum have undoubtedly played a significant role in our child's success. We are grateful for the opportunities and guidance provided by the college, which have not only shaped our child's academic achievements but have also instilled in them a lifelong love for learning. We wholeheartedly recommend this college to any parent seeking an institution that fosters excellence, growth, and success.",
    },
    {
      type: "text",
      image: Img14,
      name: "Mr. Amit Bhutada",
      course: "Parent of Mr. Satvik Bhutada (B.Pharm 2023-2027)",
      content:
        "I am Mr. Amit Bhutada father of Mr. Satvik Bhutada enrolling our child in Datta Meghe College of Pharmacy has been a transformative experience for our family. The college's unwavering commitment to academic excellence, combined with a supportive and nurturing environment, has truly set our child up for success. From personalized attention from dedicated faculty to a wide range of extracurricular opportunities, our child has thrived both academically and personally. We are immensely grateful for the positive impact this college has had on our child's growth and development, and we wholeheartedly recommend it to any parent seeking a top-notch education for their child. The extracurricular activities in this college leads to higher academic achievement, improved character development, enhanced social skills, and a greater sense of community involvement of our child.",
    },
    {
      type: "text",
      image: Img15,
      name: "Mr. Arvind Shamraoji Kopare",
      course: "Parent of Mr. Tanmay Kopare (B.Pharm 2020-2024)",
      content:
        "As parents, watching our son embark on his journey through pharmacy college has been a journey of pride, hope, and immense joy. From his earliest days expressing a desire to make a meaningful difference in the healthcare field, to the moment he donned his white coat for the first time, we've seen a transformation not just in his knowledge and skills, but in his character and dedication to serving others. The growth in his professional knowledge has been paralleled by his personal development. DMCP has not only equipped him with the skills necessary to succeed in a highly demanding field but has also instilled in him values of empathy, teamwork, and ethical practice. In reflection, our son's journey through Pharmacy College has been an inspiring reminder of the power of dedication, the importance of compassion, and the impact one individual can make in the lives of many. We are grateful to Datta Meghe College of Pharmacy for providing him with the foundation to embark on this noble profession, and we eagerly await the next chapter of his career, knowing he has the tools, the knowledge, and the heart to make a difference.",
    },
  ],
  Alumni: [
    {
      type: "text",
      image: Img9,
      name: "Ms. Gauri Daf",
      course: "B.Pharm 2019-2023",
      content:
        "My journey at Datta Meghe College of Pharmacy (2019-2023) has been truly inspiring and transformative. The college provided me with a strong academic foundation, research exposure, and invaluable practical skills. The unwavering support and mentorship from the faculty played a crucial role in shaping my career and preparing me for higher studies. Their guidance helped me to crack GPAT & to secure admission to NIPER Mohali, a dream come true. DMCP not only nurtured my knowledge but also instilled confidence and professional ethics in me. I am forever grateful to my alma mater for the opportunities and support that made this achievement possible.",
    },
    {
      type: "text",
      image: Img16,
      name: "Mr. Pranav Shagondawar",
      course: "B.Pharm 2020-2024",
      content:
        "My journey at Datta Meghe College of Pharmacy (2020-2024) has been truly transformative, shaping me into the professional I am today. The college’s rigorous academics, hands-on training, and research-oriented approach provided me with a strong foundation in pharmaceutical sciences. The unwavering support and mentorship from the faculty played a crucial role in enhancing my skills and confidence. Their guidance helped me secure a position at GSK Pharma, a dream opportunity. DMCP not only imparted knowledge but also instilled professionalism, critical thinking, and industry readiness. I am forever grateful to my alma mater for paving the way for my success.",
    },
    {
      type: "text",
      image: Img11,
      name: "Ms. Manali Wanjari",
      course: "B.Pharm ",
      content:
        "My journey at Datta Meghe College of Pharmacy (2019-2023) has been truly transformative. The strong academic foundation, research-driven approach, and unwavering support from faculty played a crucial role in shaping my career. DMCP nurtured my passion for pharmaceutical sciences, equipping me with the knowledge and skills to excel globally. This preparation helped me secure admission to the M.Res program in Drug Delivery and Nanomedicine at the University of Newcastle, UK, where I also achieved merit in my postgraduate studies. I am immensely grateful to DMCP for fostering innovation, research excellence, and the confidence to achieve my dreams.",
    },
    {
      type: "text",
      image: Img12,
      name: "Mr. Anup Shende",
      course: "B.Pharm 2020-2024",
      content:
        "My journey at Datta Meghe College of Pharmacy (2020-2024) has been an enriching and transformative experience. The strong research culture at DMCP provided me with numerous opportunities to explore and innovate in pharmaceutical sciences. With the constant guidance of highly qualified faculty, I was able to present and publish research papers, secure copyrights, and even file a patent during my undergraduate studies. This research-driven environment, along with academic excellence, helped me secure admission to the prestigious Institute of Chemical Technology (ICT). I am immensely grateful to DMCP for fostering my passion for research and shaping my professional journey.",
    },
  ],
};

const TestimonialsDMCP = () => {
  const tabs = Object.keys(testimonialsData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const activeTestimonials = testimonialsData[activeTab];
  const testimonial = activeTestimonials[currentIndex];

  useEffect(() => {
    if (isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeTab, activeTestimonials.length, isPlaying]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="px-4 md:px-8 pt-10 py-10 bg-[#F4F4F4]">
      <div>
        <h2 className="text-3xl sm:text-4xl ml-4 sm:ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
          <hr className="border-red-500 border-2 w-12 mb-2" />
          TESTIMONIALS
        </h2>

        <div className="text-center pb-10 flex justify-center gap-4 flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-3 py-1 text-sm sm:text-base transition-all ${
                activeTab === tab
                  ? "underline text-black"
                  : "text-gray-500 hover:text-gray-700"
              } ${
                index < tabs.length - 1 ? "border-r border-gray-300 pr-4" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {testimonial.type === "text" ? (
          <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto text-left px-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover"
            />
            <div className="text-sm sm:text-base">
              <p className="mb-4">{testimonial.content}</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.course}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center px-4">
            <div className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-xl">
              <video
                ref={videoRef}
                src={testimonial.videoUrl}
                poster={testimonial.thumbnail}
                className="w-full h-full object-cover"
                onEnded={handleEnded}
                controls={isPlaying}
              />
              {!isPlaying && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-opacity-40 transition hover:bg-opacity-60"
                >
                  <PlayCircle className="w-20 h-20 text-white drop-shadow-lg hover:scale-110 transition-transform duration-200" />
                </button>
              )}
            </div>
            <p className="mt-4 text-base sm:text-lg font-semibold text-gray-800 text-center">
              {testimonial.name}
            </p>
            {testimonial.course && (
              <p className="text-sm text-gray-600 text-center mt-1">
                {testimonial.course}
              </p>
            )}
          </div>
        )}

        {activeTestimonials.length > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {activeTestimonials.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => handleDotClick(idx)}
                className={`w-3 h-3 rounded-full transition ${
                  idx === currentIndex ? "bg-[#e8502e]" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsDMCP;
