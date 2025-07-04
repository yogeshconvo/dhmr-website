import React, { useState } from "react";
import YouTube from "react-youtube";

import StudentThumb from "../../assets/TestimonialHome/student.png";
import ParentsThumb from "../../assets/TestimonialHome/Parents.png";
import AlumniThumb from "../../assets/TestimonialHome/Alumini.png";
import { PlayCircle } from "lucide-react";

const testimonialsData = {
  Students: [
    {
      name: "Ms. Saniya Saratkar",
      year: (
        <>
          B.Tech 2017 | Specialization - AIDS
          <br />
          FEAT
        </>
      ),
      videoId: "8VMIhPv9cJI", 
      thumbnail: StudentThumb,
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
      videoId: "4Y1F8TzGTLo",
      thumbnail: ParentsThumb,
      type: "video",
    },
  ],
  Alumni: [
    {
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
      videoId: "Enu5EdCqMtg",
      thumbnail: AlumniThumb,
      type: "video",
    },
  ],
};

const TestimonialVideo = () => {
  const [activeTab, setActiveTab] = useState("Alumni");
  const [isPlaying, setIsPlaying] = useState(false);

  const current = testimonialsData[activeTab][0];
  const tabs = ["Alumni", "Parents", "Students"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsPlaying(false); // Reset video on tab change
  };

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="px-4 md:px-8 py-12 bg-[#f4f4f4]">
      <h2 className="text-4xl ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
        <hr className="border-red-500 border-2 w-12 mb-2" />
        TESTIMONIALS
      </h2>

      {/* Tabs */}
      <div className="text-center flex justify-center pb-8 gap-4 flex-wrap">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`px-3 py-1 text-base transition-all ${
              activeTab === tab
                ? "underline text-black"
                : "text-gray-500 hover:text-gray-700"
            } ${
              index < tabs.length - 1 ? "border-r border-gray-300 pr-4" : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Testimonial Display */}
      <div className="flex flex-col items-center">
        <div className="relative w-[380px] h-[220px] md:w-[470px] md:h-[280px] bg-gray-300 rounded-xl overflow-hidden shadow-lg mb-4">
          {!isPlaying ? (
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
          ) : (
            <YouTube
              videoId={current.videoId}
              opts={opts}
              className="w-full h-full aspect-video"
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

export default TestimonialVideo;
