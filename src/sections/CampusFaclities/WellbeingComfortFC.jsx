import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../assets/Facilties/campusimg8.png";
import img2 from "../../assets/Facilties/campusimg5.png";

const WellbeingComfortFC = () => {
  const items = [
    {
      title: "Teaching-Hospital Infrastructure",
      images: [
        {
          src: img1,
          caption:
            "AVBRH (Wardha) – 1,500+ beds, transplant ICUs, robotic OT, advanced diagnostics.",
        },
        {
          src: img2,
          caption: "State-of-the-art medical equipment and facilities",
        },
        {
          src: img1,
          caption: "Advanced surgical suites and patient care units",
        },
      ],
    },
    {
      title: "Ayurveda & Herbal Science (Wardha)",
      images: [
        {
          src: img1,
          caption: "YOGYA Clinical Skill Lab – Ayurvedic procedural training",
        },
        {
          src: img2,
          caption: "Traditional medicine research facilities",
        },
        {
          src: img1,
          caption: "Herbal medicine preparation laboratories",
        },
      ],
    },
  ];

  return (
    <section className="bg-[#eaf4ff] px-4 md:px-10 py-10 font-oswald-medium">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-2xl text-[#707070] md:text-3xl font-oswald-medium font-medium uppercase relative inline-block">
            <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
            WELLBEING, SAFETY & <br />
            EVERYDAY COMFORTS
          </h2>
          <p className="text-base font-oswald-medium font-light mt-2 max-w-3xl">
            Beyond academics, DMIHER ensures students thrive through
            thoughtfully designed wellness facilities, secure environments, and
            everyday conveniences—supporting not just learning, but healthy
            living, recreation, and peace of mind across campus life.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col   w-full">
              <h2 className="text-[#223971] text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 px-2">
                {item.title}
              </h2>

              {/* Swiper Container */}
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[400px] rounded-lg overflow-hidden  bg-transparent">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  style={{
                    paddingBottom: "3rem",
                    height: "100%",
                    width: "100%",
                  }}
                  className="w-full h-full"
                >
                  {item.images.map((imageData, imgIdx) => (
                    <SwiperSlide key={imgIdx}>
                      <div className="relative w-full h-full">
                        {imageData.src ? (
                          <img
                            src={imageData.src}
                            alt={`${item.title} - ${imgIdx + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextElementSibling.style.display =
                                "flex";
                            }}
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                            No Image Available
                          </div>
                        )}

                        {/* Caption */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 text-left">
                          {imageData.caption}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellbeingComfortFC;
