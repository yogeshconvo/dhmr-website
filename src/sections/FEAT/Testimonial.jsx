import React, { useState, useEffect, useRef } from "react";
import { PlayCircle } from "lucide-react";

import AkashVideo from "../../assets/Testimonials/FEAT/Aayushi Chondhe.mp4";
import MGNVideo from "../../assets/Testimonials/FEAT/Mayur Ganwande and Nikita Zade_1.mp4";
import RuchiVideo from "../../assets/Testimonials/FEAT/Ruchika Vaidya_1.mp4";

import icon1 from "../../assets/Testimonials/FEAT/1.png";
import icon2 from "../../assets/Testimonials/FEAT/2.png";
import icon3 from "../../assets/Testimonials/FEAT/3.png";

import SHImg from "../../assets/Testimonials/FEAT/SH.png";
import PVImg from "../../assets/Testimonials/FEAT/PV.png";
import SGImg from "../../assets/Testimonials/FEAT/SG.png";
import SNCImg from "../../assets/Testimonials/FEAT/SNC.png";
import PKImg from "../../assets/Testimonials/FEAT/PK.png";
import SDImg from "../../assets/Testimonials/FEAT/SD.png";

import PCCImg from "../../assets/Testimonials/FEAT/PCC.png";
import PVNImg from "../../assets/Testimonials/FEAT/PVN.png";
import PVIImg from "../../assets/Testimonials/FEAT/PVI.png";
import PDDImg from "../../assets/Testimonials/FEAT/PDD.png";

const testimonialsData = {
  Students: [
    {
      type: "video",
      videoUrl: AkashVideo,
      thumbnail: icon1,
      name: "Miss Aayushi Chondhe",
    },
    {
      type: "video",
      videoUrl: MGNVideo,
      thumbnail: icon3,
      name: "Mr. Mayur Ganwande and Miss Nikita Zade",
    },
    {
      type: "video",
      videoUrl: RuchiVideo,
      thumbnail: icon2,
      name: "Miss Ruchika Vaidya",
    },
  ],
  Parents: [
    {
      type: "text",
      image: PCCImg,
      name: "Mr. Chirangilal Chonde",
      course: "Parent of Ayushi Chonde (B-Tech AIDS 2025)",
      content:
        "I am incredibly proud of my daughter, Aayushi Chonde, who is excelling in her final year of B.Tech in Artificial Intelligence and Data Science at FEAT, DMIHER DU. The college’s state-of-the-art infrastructure, experienced faculty, and innovative teaching methods have fostered her academic and personal growth. The enriching curriculum, supportive faculty, and industry exposure have shaped her journey, enhancing her skills and confidence. As a mother, witnessing her achievements fills me with joy. I am grateful to DMIHER DU for nurturing her talents and providing a strong foundation for a successful career in technology.",
    },
    {
      type: "text",
      image: PVNImg,
      name: "Mrs. Vandana Narendra Rewatkar",
      course: "Parent of Bhairavi Rewatkar (B-Tech AIDS 2025)",
      content:
        "I have attended parent meetings and cultural events at my ward’s college and am impressed by its excellent educational culture. FEAT, DMIHER (DU) offers spacious, well-equipped facilities, including a modern library, computer labs, and study rooms. The college building is beautifully designed with ample open space. The experienced and highly qualified faculty, led by a knowledgeable Dean, ensures quality education. Strict discipline is maintained, fostering a focused learning environment. With advanced courses and affordable fees, the college provides great opportunities for students to excel. It is one of the best engineering colleges in Vidarbha and Maharashtra.",
    },
    {
      type: "text",
      image: PVIImg,
      name: "Mr. Vijay Izankar",
      course: "Parent of Sakshi Izankar (B-Tech CSD 2025)",
      content:
        "As a parent, I wanted a college that not only focuses on academics but also fosters innovation and critical thinking. FEAT has exceeded our expectations with its state-of-the-art labs and experienced faculty. This college’s focus on research, industry collaboration, and real-world applications has truly set it apart. The college provides a safe, supportive, and intellectually stimulating environment that nurtures future healthcare engineers. I highly recommend it to other parents!My daughter , Sakshi is thriving here!",
    },
 
  ],
};

const TestimonialsSection = () => {
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
      <div className="">
        <h2 className="text-3xl sm:text-4xl ml-4 sm:ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
          <hr className="border-red-500 border-2 w-12 mb-2" />
          TESTIMONIALS
        </h2>

        {/* Tabs */}
        <div className="text-center pb-10 flex justify-center gap-4 flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-3 py-1  text-sm sm:text-base transition-all ${
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

        {/* Testimonial Content */}
        {activeTestimonials.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">
            Testimonials coming soon!
          </p>
        ) : testimonial.type === "text" ? (
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
                  className="absolute inset-0 flex items-center justify-center  bg-opacity-40 transition hover:bg-opacity-60"
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

        {/* Pagination Dots */}
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

export default TestimonialsSection;
