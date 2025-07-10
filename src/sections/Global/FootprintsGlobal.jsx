import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import your image here, replace with your actual image path
import InternationalFootprints from "../../assets/global/footprint/footprints.png";

const tab1Blocks = [
  {
    id: 1,
    text: "Internationalization in University- Collaborations/ Academic Programs/ Learners Mobility/ Faculty Mobility/ Clinical Researches / Services/ Admission/Placements.",
    minWidth: "190px",
  },
  {
    id: 2,
    text: (
      <>
        <strong className="font-medium text-[#E1CD67]">
          12 International centers
        </strong>
        <br />
        providing comprehensive international educational experience across
        University
      </>
    ),
    minWidth: "180px",
  },
  {
    id: 3,
    text: (
      <>
        <strong className="font-medium text-[#E1CD67]">
          Students from 35+ countries
        </strong>{" "}
        across multiple Programs.
      </>
    ),
    minWidth: "150px",
  },
  {
    id: 4,
    text: (
      <>
        International{" "}
        <strong className="font-medium text-[#E1CD67]">
          immersive opportunities
        </strong>{" "}
        for both Inward and Outward Learners for Electives/ Observerships /
        Fellowships.
      </>
    ),
    minWidth: "180px",
  },
  {
    id: 5,
    text: (
      <>
        <p className="mb-2">
          <strong className="font-medium text-[#E1CD67]">
            100+ international
          </strong>
          <br /> Adjunct faculty.
        </p>
        <p>
          Opportunities for{" "}
          <strong className="font-medium text-[#E1CD67]">
            International Placements
          </strong>
        </p>
      </>
    ),
    minWidth: "180px",
  },
];
function FootprintsGlobal() {
  // Responsive check for mobile
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1375);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-8 sm:py-12 px-0 max-w-full overflow-x-hidden">
      <div className="container mx-auto px-0 max-w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#707070] mb-2 font-oswald-medium font-[500] tracking-tight leading-tight ">
          <span className="block border-t-4 border-[#F04E30] w-20 sm:w-24 mb-2 mr-4"></span>
          INTERNATIONAL FOOTPRINTS
        </h2>

        <div className="bg-[#122E5E] mt-6 sm:mt-8 rounded-none sm:rounded-2xl p-8">
          <div className="flex flex-col gap-6 items-center w-full">
            <img
              src={InternationalFootprints}
              alt="International Footprints"
              className="w-full object-contain p-4"
              style={{ maxHeight: "700px" }}
            />
            {isMobile ? (
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                className="w-full"
              >
                {tab1Blocks.map((block) => (
                  <SwiperSlide key={block.id}>
                    <div className="px-4 py-6 pb-8 text-white text-sm sm:text-base font-sans max-w-[350px] sm:max-w-[600px] m-auto md:text-center">
                      {block.text}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="w-full grid grid-cols-5 gap-6 mb-10 px-8  justify-center">
                {tab1Blocks.map((block) => (
                  <div
                    key={block.id}
                    className="px-2 py-6 border-r last:border-r-0 text-white text-sm"
                    style={{ minWidth: block.minWidth }}
                  >
                    {block.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FootprintsGlobal;
