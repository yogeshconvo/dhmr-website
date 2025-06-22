import React, { useEffect, useState } from "react";
// استبدل هذه الصور لاحقاً بصور حقيقية من فعاليات SAS
import Img1 from "../../assets/sas/studentlife/1.png";
import Img2 from "../../assets/sas/studentlife/2.png";
import Img3 from "../../assets/sas/studentlife/3.png";
import Img4 from "../../assets/sas/studentlife/4.png";
import Img5 from "../../assets/sas/studentlife/5.png";
import Img6 from "../../assets/sas/studentlife/6.png";

const gallery = [
  { title: "Annual Fest Ignitra", image: Img1 },
  { title: "Fashion Show", image: Img2 },
  { title: "Sports Night", image: Img3 },
  { title: "Music & Dance", image: Img4 },
  { title: "Art & Theatre", image: Img5 },
  { title: "Quiz & Academic Club", image: Img6 },
];

const clubList = [
  "Academic Club",
  "Quiz Club",
  "Theatre Club",
  "Dance Club",
  "Music Club",
  "Art Club",
  "Fashion Club",
  "Sports Club",
  "NSS",
  "Youth Red Club",
  "Social Welfare Club",
];

function StudentLifeSaS() {
  const [slide, setSlide] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(gallery.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % totalSlides);
    }, 3500);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const currentItems = gallery.slice(
    slide * itemsPerSlide,
    slide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="bg-[#e3f2fe] py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="container">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-medium font-['Oswald'] text-[#707070] uppercase leading-snug">
            <hr className="w-16 border-[#F04E30] border-t-4 mb-3" />
            Student Life <br /> at SAS
          </h2>
          <div className="mt-4 text-[#707070] max-w-4xl text-xm">
            <p>
              With active clubs like the Academic Club, Quiz Club, Theatre,
              Dance, Music, Art, Fashion, and Sports Club—alongside impactful
              initiatives like the NSS, Youth Red Club, and Social Welfare
              Club—student life at SAS is dynamic, inclusive, and inspiring.
            </p>
            <p>
              From energetic stage performances and fashion shows at our annual
              signature fest Ignitra to high-spirited sports nights under the
              floodlights, a vibrant mix of cultural events, sports, and
              student-led clubs fosters holistic development.
            </p>
            {!showMore && (
              <button
                onClick={() => setShowMore(true)}
                className="text-[#F04E30] mt-2 underline"
              >
                View Clubs
              </button>
            )}
            {showMore && (
              <>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-1 list-disc list-inside pl-2 mt-4">
                  {clubList.map((club) => (
                    <li key={club}>{club}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowMore(false)}
                  className="text-[#F04E30] mt-4 underline block"
                >
                  Hide Clubs
                </button>
              </>
            )}
          </div>
        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden shadow-md bg-gray-200"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                  Image Placeholder
                </div>
              )}
              <div className="absolute inset-0 bg-opacity-30 flex w-full items-end">
                <p
                  className="absolute bottom-3 left-0 right-0 bg-gradient-to-r from-black to-transparent text-white text-xm py-2 px-4"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === slide ? "bg-[#EE4B2B]" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentLifeSaS;
