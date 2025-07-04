import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import icon1 from "../../assets/Testimonials/FEAT/1.png";
import icon2 from "../../assets/Testimonials/FEAT/2.png";
import icon3 from "../../assets/Testimonials/FEAT/3.png";

const testimonialsData = {
  Students: [
    {
      type: "text",
      name: "Rohan Khetan",
      year: "BDS | 2019",
      content:
        "It is of immense pleasure to be a part of DMIHER University. I am very proud that it is one of the renowned NAAC-accredited multi-Disciplinary deemed to be University in India. It’s amazing to see how the university has excelled in deepening its academic offerings and research focus over a period and how it strives to sharpen the skills of budding doctors towards competency building. I believe our faculties are truly a prized asset of our institution. My institution goes the extra mile to provide its students with varied opportunities in academics, research and co- curricular making the journey at DMIHER a holistic treat!",
    },
    {
      type: "text",
      name: "Dr. Nikhil Bansode",
      year: "Student | 2021",
      content:
        "The teachers and mentors are dedicated and also really helpful. DMIHER university is one of the renowned N.A.A.C. accredited deemed to be University in India. It gives me immense pleasure to say with pride that I have completed my B.P.T from this University.",
    },
  ],
  Alumini: [
    {
      type: "video",
      videoUrl: "bJ_67QTLGjw",
      name: "Miss Ayesha Sayyed",
    },
    {
      type: "video",
      videoUrl: "3Y9ZXAnuT2k",
      name: "Miss Veena Joshi",
    },
  ],
};

const TestimonialsSection = () => {
  const tabs = Object.keys(testimonialsData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const onPlayerStateChange = (event) => {
    if (event.data === 1) {
      // Playing
      setIsPlaying(true);
    } else if (event.data === 0 || event.data === 2) {
      // Ended or Paused
      setIsPlaying(false);
    }
  };

  return (
    <div className="px-4 md:px-8 pt-10 py-10 bg-[#F4F4F4]">
      <div className="md:w-full max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-4xl uppercase font-[500] text-[#707070] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          TESTIMONIALS
        </h2>
        {/* Tabs */}
        <div className="text-center pb-5 flex justify-center gap-4 flex-wrap">
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
        {/* Testimonial Content */}
        {activeTestimonials.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">
            Testimonials coming soon!
          </p>
        ) : testimonial.type === "text" ? (
          // <div className="flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto text-left px-4">
          //   <div className="text-sm sm:text-base">
          //     <p className="mb-4">{testimonial.content}</p>
          //     <p className="font-semibold">{testimonial.name}</p>
          //     <p className="text-gray-600">{testimonial.year}</p>
          //   </div>
          // </div>
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 min-h-[300px]">
            <div className="text-sm sm:text-base">
              <p className="mb-4">{testimonial.content}</p>
              <p className="font-semibold text-xl">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.year}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center px-4">
            <div className="relative w-full max-w-[640px] aspect-video rounded-2xl overflow-hidden shadow-xl">
              <YouTube
                videoId={testimonial.videoUrl}
                className="absolute inset-0 w-full h-full"
                opts={{
                  playerVars: {
                    autoplay: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                  },
                }}
                onStateChange={onPlayerStateChange}
              />
            </div>
            <p className="mt-4 text-base sm:text-lg font-semibold text-gray-800 text-center">
              {testimonial.name}
            </p>
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
