import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
// import Img1 from "../../assets/Group.png";
// import Img2 from "../../assets/Clinik/National/NL2.png"
import Img1 from "../../assets/SPDC/WCS/1.png";
import Img2 from "../../assets/SPDC/WCS/2.png";
import Img3 from "../../assets/SPDC/WCS/3.png";
import Img4 from "../../assets/SPDC/WCS/4.png";
import Img5 from "../../assets/SPDC/WCS/5.png";
import Img6 from "../../assets/SPDC/WCS/6.png";
import Img7 from "../../assets/SPDC/WCS/7.png";


const cards = [
  {
    // bg: "bg-[#F5F0D6]",
    content: (
      <img src={Img1} alt="NABH Logo" className=" pb-5 mx-auto block" />
      // <>
      //   <p className="text-2xl text-gray-700 font-oswald-medium">
      //     <img src={Img1} alt="NIRF Logo" className="w-25 pb-5 mx-auto block" />
      //     Ranked among{" "}
      //     <span className="text-[#D3411E] font-bold">
      //       India’s Top 25 dental institutions (NIRF)
      //     </span>{" "}
      //     for 5 consecutive years – 24th rank in NIRF 2024
      //   </p>
      // </>
    ),
  },
  {
    // bg: "bg-white",
    content: (
      <img src={Img2} alt="NABH Logo" className=" pb-5 mx-auto block" />
      // <>
      //   <p className="font-oswald-medium">
      //     <img src={Img2} alt="NABH Logo" className="w-25 pb-5 mx-auto block" />
      //     <span className="text-[#007BFF] font-medium text-2xl">
      //       First NABH-accredited
      //     </span>
      //     <br />
      //     <span className="text-2xl font-light">
      //       Dental hospital in <br /> Maharashtra
      //     </span>
      //   </p>
      // </>
    ),
  },
  {
    // bg: "bg-[#092C5C]",
    content: (
      <img src={Img3} alt="NABH Logo" className=" pb-5 mx-auto block" />
      // <div className="flex items-center h-70 font-oswald-medium"> {/* Adjust height as needed */}
      //   <div>
      //     <p className="text-[#F7D13D] font-bold text-4xl">
      //       Advanced Simulation & Digital Skill Lab:
      //     </p>
      //     <p className="text-white text-xl font-light mt-2">
      //       high-fidelity mannequins, CAD-CAM, 3D theater, skill labs,
      //       self-learning museums
      //     </p>
      //   </div>
      // </div>
    ),
  },
  {
    // bg: "bg-[#FFA726]",
    content: (
      <img src={Img4} alt="NABH Logo" className=" pb-5 mx-auto block" />
      // <div className="flex items-center h-70 font-oswald-medium">
      //   <div>
      //     <p className="text-[#132e5c]">
      //      <span className="text-5xl font-bold"> ₹10+ crore</span>
      //       <br />
      //       <span className="text-2xl"> Research funding</span>
      //     </p>
      //     <p className="text-lg text-white font-light mt-2">
      //       from ICMR, SERB, DST, Erasmus EU, Smile Train, NewGen IEDC, NSTEDB –
      //       100+ International Adjunct Faculty
      //     </p>

      //     <p className="mt-5">
      //       <span className="text-lg font-semibold text-[#132e5c] ">Research collaborations:</span>
      //       <br />
      //       <span className="text-sm text-white">IISC Bengaluru, IITs</span>
      //     </p>
      //   </div>
      // </div>
    ),
  },
  {
    // bg: "bg-[#DCEEFF]",
    content: (
      <img src={Img5} alt="NABH Logo" className=" pb-5 mx-auto block" />
      // <>
      //   <p className="text-[#F25022] font-bold text-lg">
      //     Academic partnerships
      //   </p>
      //   <p className="text-sm">
      //     Johns Hopkins University
      //     <br />
      //     University of Adelaide, and others
      //   </p>
      // </>
    ),
  },
  {
    // bg: "bg-[#FBE7C1]",
    content: (
      <img src={Img6} alt="NABH Logo" className=" pb-5 mx-auto block" />
      // <>
      //   <p className="text-[#F25022] font-bold">
      //     Multiple national and international student awards:
      //   </p>
      //   <p className="text-sm mt-2">
      //     ICMR CNMC STS, Pierre Fauchard Academy (5 years, consecutively)
      //   </p>
      // </>
    ),
  },
  {
    // bg: "bg-[#007BFF]/90 text-white",
    content: (
      <img src={Img7} alt="NABH Logo" className=" pb-5 mx-auto block" />
      // <>
      //   <p className="font-bold">
      //     Comprehensive Oral Cancer Therapy Unit experience –
      //   </p>
      //   <ul className="text-sm list-disc list-inside mt-2 space-y-1">
      //     <li>Smile Train for cleft care</li>
      //     <li>Head & neck cancer surgeries, microvascular surgeries</li>
      //     <li>
      //       Pioneers in Micro-Endodontics, Lingual Orthodontics, Full Mouth
      //       Implants, Maxillofacial Prosthesis, Orthognathic Surgery
      //     </li>
      //     <li>Aesthetic Surgeries</li>
      //   </ul>
      // </>
    ),
  },
];

const WhyChooseSpdch = () => {
  return (
    // <div className="py-16 px-6 md:px-20 bg-[#FAFAF6]">
    //   <h2 className="text-3xl text-gray-800 font-oswald-medium mb-10">
    //     <hr className="w-16 sm:w-20 border-[#F04E30]  mb-4 border-t-4" />
    //     WHY CHOOSE SPDCH
    //   </h2>
    //   <Swiper
    //     dots={true}
    //     modules={[Autoplay]}
    //     autoplay={{ delay: 3000, disableOnInteraction: false }}
    //     spaceBetween={10}
    //     slidesPerView={1}
    //     breakpoints={{
    //       640: { slidesPerView: 2 },
    //       1024: { slidesPerView: 4 },
    //     }}
    //     loop={true}
    //   >
    //     {cards.map((card, index) => (
    //       <SwiperSlide key={index}>
    //         <div
    //           className={`w-[300px] h-[350px] p-6 rounded-xl shadow-md ${card.bg} font-oswaldLight flex flex-col justify-between`}
    //         >
    //           {card.content}
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>

    <div className="py-16 bg-[#FAFAF6] flex justify-center  md:px-40">
      <div className="w-full max-w-7xl">
        <h2 className="text-3xl text-gray-800 font-oswald-medium mb-10">
          <hr className="w-16 sm:w-20 border-[#F04E30]  mb-4 border-t-4" />
          WHY CHOOSE SPDCH
        </h2>

        <Swiper
          // dots={true}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className={`w-[300px] h-[350px] rounded-xl font-oswaldLight flex flex-col justify-between`}
              >
                {card.content}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WhyChooseSpdch;
