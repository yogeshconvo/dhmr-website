// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// import Img1 from "../../assets/rnpc/StudentLife/1.png";
// import Img2 from "../../assets/rnpc/StudentLife/2.png";
// import Img3 from "../../assets/rnpc/StudentLife/3.png";
// import Img4 from "../../assets/rnpc/StudentLife/4.png";
// import Img5 from "../../assets/rnpc/StudentLife/5.png";
// import Img6 from "../../assets/rnpc/StudentLife/6.png";

// const allClubs = [
//   { title: "Canteen", image: Img1 },
//   { title: "Computer Centre", image: Img2 },
//   { title: "Library", image: Img3 },
//   { title: "Garba Night", image: Img4 },
//   { title: "Ganesh Festival Celebration", image: Img5 },
//   { title: "Sports", image: Img6 },
// ];

// function StudentLifeRNPC() {
//   return (
//     <section className="bg-[#e3f2fe] py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
//       <div className="container mx-auto">
//         {/* Header */}
// <div className="mb-6">
//   <h2 className="text-3xl sm:text-4xl font-medium font-['Oswald'] text-[#707070] uppercase leading-snug">
//     <hr className="w-16 border-[#F04E30] border-t-4 mb-3" />
//     Student Life
//   </h2>
//   <div className="mt-4 text-[#707070] max-w-4xl text-sm">
//     <p>
//       At RNPC, student life is a blend of learning, creativity, and
//       connection. A variety of clubs—Academic, Quiz, Literacy, Art,
//       Dance, Music, Theatre, Yoga, and Sports—offer space to explore
//       interests and express individuality. Socially driven groups like
//       the NSS, Youth Red Club, and Social Welfare Club foster empathy
//       and civic engagement. Cultural events, festivals, and performances
//       keep the campus vibrant year-round. Our hostels aren’t just places
//       to stay—they’re hubs of friendship, shared experiences, and
//       personal growth. At RNPC, every student finds their rhythm—on
//       campus, in community.
//     </p>
//   </div>
//         </div>

//         {/* Swiper Slider - 6 images visible */}
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           loop
//           spaceBetween={20}
//           slidesPerView={6}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//             1280: { slidesPerView: 6 },
//           }}
//         >
//           {allClubs.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative h-full">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//                 <p
//                   className="absolute bottom-3 left-0 right-0 bg-gradient-to-r from-black/60 to-transparent text-white text-sm py-2 px-4"
//                   style={{
//                     fontFamily: "'Oswald', sans-serif",
//                     fontWeight: 300,
//                   }}
//                 >
//                   {item.title}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default StudentLifeRNPC;
import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Image imports
import NSS3 from "../../assets/rnpc/StudentLife/NSS 3.jpg";
import NSS from "../../assets/rnpc/StudentLife/NSS.jpg";
import SocialWelfare1 from "../../assets/rnpc/StudentLife/SOCIAL WELFARE 1.jpg";
import SocialWelfare from "../../assets/rnpc/StudentLife/SOCIAL WELFARE.jpeg";
import SportsClub from "../../assets/rnpc/StudentLife/SPORTS CLUB.jpg";
import Sports from "../../assets/rnpc/StudentLife/SPORTS.jpg";
import YogaClub from "../../assets/rnpc/StudentLife/YOGA CLUB.jpg";
import AcademicClub from "../../assets/rnpc/StudentLife/ACADEMIC CLUB.jpg";
import AcademicClub1 from "../../assets/rnpc/StudentLife/ACADEMIC CLUB1.jpg";
import ArtsClub1 from "../../assets/rnpc/StudentLife/ARTS CLUB 1.jpg";
import ArtsClub from "../../assets/rnpc/StudentLife/ARTS CLUB.jpg";
import CulturalActivities from "../../assets/rnpc/StudentLife/CULTURAL ACTIVITIES.jpg";
import Culturals from "../../assets/rnpc/StudentLife/CULTURALS.jpg";
import DanceClub from "../../assets/rnpc/StudentLife/DANCE CLUB.jpg";
import Dance from "../../assets/rnpc/StudentLife/DANCE.jpg";
import HostelLife from "../../assets/rnpc/StudentLife/HOSTEL LIFE.jpg";
import HostelLifee from "../../assets/rnpc/StudentLife/HOSTEL LIFEE.jpg";
import Hostel from "../../assets/rnpc/StudentLife/HOSTEL.jpg";
import LiteracyClub from "../../assets/rnpc/StudentLife/LITERACY CLUB.jpg";
import LiteraryClub from "../../assets/rnpc/StudentLife/LITERARY CLUB.jpg";
import Music from "../../assets/rnpc/StudentLife/MUSIC.jpg";
import MusicClub from "../../assets/rnpc/StudentLife/MUSIC CLUB.jpg";
import NSS1 from "../../assets/rnpc/StudentLife/NSS 1.jpg";

// Data array
const academicFacilities = [
  { title: "NSS 3", image: NSS3 },
  { title: "NSS", image: NSS },
  // { title: "Social Welfare 1", image: SocialWelfare1 },
  { title: "Culturals", image: Culturals },
  { title: "Dance Club", image: DanceClub },
  { title: "Dance", image: Dance },
  { title: "Hostel Life", image: HostelLife },
  { title: "Hostel", image: Hostel },
  { title: "Literacy Club", image: LiteracyClub },
  { title: "Music", image: Music },
  { title: "Music Club", image: MusicClub },
  { title: "Social Welfare", image: SocialWelfare },
  { title: "Sports Club", image: SportsClub },
  { title: "Sports", image: Sports },
  { title: "Yoga Club", image: YogaClub },
  { title: "Academic Club", image: AcademicClub },
  { title: "Arts Club", image: ArtsClub },
  { title: "Cultural Activities", image: CulturalActivities },
];

// Main Component
function StudentLifeRNPC() {
  const sliderRef = useRef(null);

  // Grouping in chunks of 6 for 3 columns x 2 rows
  const chunkedSlides = [];
  for (let i = 0; i < academicFacilities.length; i += 9) {
    chunkedSlides.push(academicFacilities.slice(i, i + 9));
  }

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-gray-50 px-4 py-10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="">
          <h2 className="text-3xl sm:text-4xl font-medium font-['Oswald'] text-[#707070] uppercase leading-snug">
            <hr className="w-16 border-[#F04E30] border-t-4 mb-3" />
            Student Life
          </h2>
          <div className="mt-4 text-[#707070] max-w-4xl text-sm">
            <p>
              At RNPC, student life is a blend of learning, creativity, and
              connection. A variety of clubs—Academic, Quiz, Literacy, Art,
              Dance, Music, Theatre, Yoga, and Sports—offer space to explore
              interests and express individuality. Socially driven groups like
              the NSS, Youth Red Club, and Social Welfare Club foster empathy
              and civic engagement. Cultural events, festivals, and performances
              keep the campus vibrant year-round. Our hostels aren’t just places
              to stay—they’re hubs of friendship, shared experiences, and
              personal growth.
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 mb-1 ">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="border p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="border p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {chunkedSlides.map((slideGroup, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {slideGroup.map((item, idx) => (
                  <div key={idx} className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover rounded-md"
                    />
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
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default StudentLifeRNPC;
