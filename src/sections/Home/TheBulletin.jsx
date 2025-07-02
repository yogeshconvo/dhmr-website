import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
// import Guidlinepdf from "../../assets/TestimonialHome/ABSTRACT SUBMISSION GUIDELINES.pdf";
import Conclavepdf from "../../assets/career/Advertisement _01 July 2025.pdf";

const TheBulletin = () => {
  const [activeTab, setActiveTab] = useState("News");
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const bulletinItems = {
    News: [
      {
        title:
          "DMIHER (DU) conducted its 16th ceremonial Convocation. The event was graced by Surgeon Vice Admiral Arti Sarin and Dr. Priti Adani. 1724 degrees including Ph.Ds were awarded.",
        date: "6th May 2025",
      },
      {
        title:
          'DMIHER (DU) celebrated its 21st Foundation Day and launched the initiative "We for Us" and inaugurated the University Wall of Reflections.',
        date: "24th May 2025",
      },
      {
        title:
          "World Cycle Day was celebrated with a Cyclothon by students and faculty.",
        date: "1st June 2025",
      },
      {
        title:
          "World No Tobacco Day campaign ran with orientation sessions and awareness programs.",
        date: "21st May to 5th June 2025",
      },
      {
        title:
          "Tree Plantation Drive held at FEAT Campus for World Environment Day.",
        date: "5th June 2025",
      },
    ],
    Events: [
      {
        title:
          "National Conclave on Postgraduate Research, Trauma in Orthopaedics & Physical Medicine",
        date: "1st - 3rd August, 2025",
        // pdf: Conclavepdf,
      },
      {
        title: "Abstract Submission Guidelines",
        // pdf: Guidlinepdf,
      },
      {
        title:
          'Wardha 2025 Midterm CME on "Advances in Pediatric Medicine" hosted by JNMC in collaboration with VPA, AOP Wardha, and AOP Yavatmal.',
        date: "15th June 2025",
      },
      {
        title:
          "Three-day Basic Course in Medical Education FDP for external faculty conducted by Nodal Centre, JNMC.",
        date: "24th – 26th June 2025",
      },
    ],
    Career: [
      // {
      //   title:
      //     "Vacancies of Project Staff at Research and Innovation Department",
      //   url: "https://www.dmiher.edu.in/uploads/topics/17491237845433.pdf",
      // },
      {
        title:
          "Applications invited for posts under funded research projects. For more details, click here",
        url: Conclavepdf,
      },
    ],
  };

  const currentItems = bulletinItems[activeTab];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(0, currentItems.length - itemsPerPage)
        : Math.max(0, prev - itemsPerPage)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= currentItems.length ? 0 : prev + itemsPerPage
    );
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const visibleItems = currentItems.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="px-4 sm:px-10 lg:px-20 py-12 bg-gray-200 text-gray-500 mx-auto">
      <h2
        className="text-2xl font-[500] sm:text-3xl lg:text-4xl"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        <span className="inline-block w-12 h-1 bg-red-500 mb-2" />
        <br />
        THE BULLETIN
      </h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-4">
        <div className="flex-1 flex md:ml-20 justify-center">
          <div className="flex space-x-4 flex-wrap justify-center max-w-full overflow-x-auto">
            {["News", "Events", "Career"].map((tab, index) => (
              <button
                key={tab}
                className={`text-base sm:text-lg whitespace-nowrap ${
                  activeTab === tab ? "underline" : "hover:text-gray-400"
                } ${index < 2 ? "border-r-2 border-gray-500 pr-4 " : ""}`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab !== "Career" && (
          <div className="flex justify-center sm:justify-end hidden md:block items-center space-x-3">
            <button
              onClick={handlePrev}
              className="rounded-full border border-gray-400 p-2 hover:bg-gray-100 transition-colors"
              disabled={currentIndex === 0}
              aria-label="Previous"
            >
              <ArrowLeft
                size={14}
                className={`${
                  currentIndex === 0 ? "text-gray-300" : "text-gray-400"
                }`}
              />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border border-gray-500 p-2 hover:bg-gray-100 transition-colors"
              disabled={currentIndex + itemsPerPage >= currentItems.length}
              aria-label="Next"
            >
              <ArrowRight
                size={14}
                className={`${
                  currentIndex + itemsPerPage >= currentItems.length
                    ? "text-gray-300"
                    : "text-gray-500"
                }`}
              />
            </button>
          </div>
        )}
      </div>

      <div
        className={`mt-8 pt-6 sm:pt-8 max-w-full ${
          activeTab === "Career"
            ? " gap-6 overflow-x-auto"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        }`}
      >
        {visibleItems.map((item, index) => {
          const isCareer = activeTab === "Career";
          return (
            <div
              key={currentIndex + index}
              onClick={() => {
                if (isCareer && item.url) {
                  window.open(item.url, "_blank");
                } else if (item.pdf) {
                  window.open(item.pdf, "_blank");
                }
              }}
              className={`text-gray-700 pr-4 pb-4 sm:pb-0 min-w-[200px] ${
                isCareer
                  ? "cursor-pointer border-gray-300 p-4 rounded"
                  : item.pdf
                  ? "cursor-pointer sm:border-r sm:border-gray-400 sm:last:border-r-0 hover:text-blue-500"
                  : "sm:border-r sm:border-gray-400 sm:last:border-r-0"
              }`}
            >
              {isCareer ? (
                <p
                  className="text-gray-700 hover:text-blue-500 underline text-xl"
                  style={{
                    fontFamily: '"Helvetica LT Std", "Condensed", sans-serif',
                  }}
                >
                  {item.title}
                </p>
              ) : (
                <>
                  <h3
                    className="text-xl text-[#707070] leading-tight"
                    style={{
                      fontFamily: '"Helvetica LT Std", "Condensed", sans-serif',
                    }}
                  >
                    {item.title}
                  </h3>
                  {item.date && (
                    <p className="text-base text-[#269BFF] sm:text-base">
                      {item.date}
                    </p>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TheBulletin;
