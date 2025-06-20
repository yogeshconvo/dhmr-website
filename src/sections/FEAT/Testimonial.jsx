// import React, { useState, useEffect } from "react";
// import AkashVideo from "../../assets/Testimonials/FEAT/Aahash Kambale_1.mp4";
// import MGNVideo from "../../assets/Testimonials/FEAT/Mayur Ganwande and Nikita Zade_1.mp4";
// import RuchiVideo from "../../assets/Testimonials/FEAT/Ruchika Vaidya_1.mp4";

// import icon1 from "../../assets/Testimonials/FEAT/1.png";
// import icon2 from "../../assets/Testimonials/FEAT/2.png";
// import icon3 from "../../assets/Testimonials/FEAT/3.png";

// import SHImg from "../../assets/Testimonials/FEAT/SH.png";
// import PVImg from "../../assets/Testimonials/FEAT/PV.png";
// import SGImg from "../../assets/Testimonials/FEAT/SG.png";
// import SNCImg from "../../assets/Testimonials/FEAT/SNC.png";
// import PKImg from "../../assets/Testimonials/FEAT/PK.png";
// import SDImg from "../../assets/Testimonials/FEAT/SD.png";

// import PCCImg from "../../assets/Testimonials/FEAT/PCC.png";
// import PVNImg from "../../assets/Testimonials/FEAT/PVN.png";
// import PVIImg from "../../assets/Testimonials/FEAT/PVI.png";
// import PDDImg from "../../assets/Testimonials/FEAT/PDD.png";

// const testimonialsData = {
//   Students: [
//     {
//       type: "video",
//       videoUrl: AkashVideo,
//       thumbnail: icon1,
//       name: "Mr.Aahash Kambale",
//       // course: "Parent of MBBS 2023 Student",
//     },
//     {
//       type: "video",
//       videoUrl: MGNVideo,
//       thumbnail:icon3,
//       name: "Mr. Mayur Ganwande and Miss Nikita Zade",
//       // course: "Parent of BTech 2024 Student",
//     },
//     {
//       type: "video",
//       videoUrl: RuchiVideo,
//       thumbnail: icon2,
//       name: "Miss Ruchika Vaidya",
//       // course: "Parent of BTech 2024 Student",
//     },
//   ],
//   Parents: [
//     {
//       type: "text",
//       image: PCCImg,
//       name: "Mr. Chirangilal Chonde",
//       course: "Parent of Ayushi Chonde (B-Tech AIDS 2025)",
//       content:
//         "I am incredibly proud of my daughter, Aayushi Chonde, who is excelling in her final year of B.Tech in Artificial Intelligence and Data Science at FEAT, DMIHER DU. The college’s state-of-the-art infrastructure, experienced faculty, and innovative teaching methods have fostered her academic and personal growth. The enriching curriculum, supportive faculty, and industry exposure have shaped her journey, enhancing her skills and confidence. As a mother, witnessing her achievements fills me with joy. I am grateful to DMIHER DU for nurturing her talents and providing a strong foundation for a successful career in technology.",
//     },
//     {
//       type: "text",
//       image: PVNImg,
//       name: "Mrs. Vandana Narendra Rewatkar",
//       course: "Parent of Bhairavi Rewatkar (B-Tech AIDS 2025)",
//       content:
//         "I have attended parent meetings and cultural events at my ward’s college and am impressed by its excellent educational culture. FEAT, DMIHER (DU) offers spacious, well-equipped facilities, including a modern library, computer labs, and study rooms. The college building is beautifully designed with ample open space. The experienced and highly qualified faculty, led by a knowledgeable Dean, ensures quality education. Strict discipline is maintained, fostering a focused learning environment. With advanced courses and affordable fees, the college provides great opportunities for students to excel.",
//     },
//     {
//       type: "text",
//       image: PVIImg,
//       name: "Mr. Vijay Izankar",
//       course: "Parent of Sakshi Izankar (B-Tech CSD 2025)",
//       content:
//         "As a parent, I wanted a college that not only focuses on academics but also fosters innovation and critical thinking. FEAT has exceeded our expectations with its state-of-the-art labs and experienced faculty. This college’s focus on research, industry collaboration, and real-world applications has truly set it apart. The college provides a safe, supportive, and intellectually stimulating environment that nurtures future healthcare engineers. I highly recommend it to other parents! My daughter, Sakshi, is thriving here!",
//     },
//     {
//       type: "text",
//       image: PDDImg,
//       name: "Mr. Devendra Dhanjode",
//       course: "Parent of Deoyani Dhanjode (B-Tech CSME 2025)",
//       content:
//         "As a father, I am deeply grateful for the transformative impact of the Faculty of Engineering and Technology at DMIHER on my daughter’s B.Tech journey in Computer Science and Medical Engineering. Since joining, her academic performance, confidence, and overall growth have been remarkable. The dedicated faculty, diverse curriculum, and enriching extracurricular activities have equipped her with essential skills for the future. The college’s supportive environment has helped her develop responsibility, determination, and lifelong friendships.",
//     },
//   ],
//   Faculty: [
//     {
//       type: "text",
//       image: SHImg,
//       name: "Ms. Shital Hajare (AIDS)",
//       course: "Joined 2022 | 09 Years Exp. | M.E",
//       content:
//         "As a faculty member at FEAT, I am proud to be part of an institution that prioritizes research, innovation, and cutting-edge education. Our commitment to technological advancement is evident in programs like AIDS, AIML, and CSME. By integrating emerging fields into our curriculum, we equip students with the skills needed to excel in a dynamic industry.",
//     },
//     {
//       type: "text",
//       image: PVImg,
//       name: "Dr. Prateek Verma (AIML)",
//       course: "Joined 2022 | 05 Years Exp. | Ph.D.",
//       content:
//         "FEAT offers unmatched resources and support, from state-of-the-art labs to dedicated research centers. It fosters collaboration, creativity, and moral values through interdisciplinary projects and industry partnerships, empowering students to become leaders of change.",
//     },
//     {
//       type: "text",
//       image: SGImg,
//       name: "Dr. Swapnil Gundewar (AIML)",
//       course: "Joined 2023 | 9.5 Years Exp. | Ph.D.",
//       content:
//         "Working as an Assistant Professor in AIML has been enriching. The department focuses on Machine Learning, Deep Learning, and NLP. Teaching AI-driven solutions across domains like healthcare, robotics, and security is rewarding. The curriculum bridges theory and practice.",
//     },
//     {
//       type: "text",
//       image: SNCImg,
//       name: "Dr. Shiv Nath Chaudhri (CSD)",
//       course: "Joined 2024 | 02 Years Exp. | Ph.D.",
//       content:
//         "FEAT, DMIHER, is a premier institution for future-ready engineers. With hands-on learning, industry-aligned curriculum, and programs in AI, IoT, and Robotics, FEAT provides 100% placement support and global exposure, backed by experienced faculty and cutting-edge infrastructure.",
//     },
//     {
//       type: "text",
//       image: PKImg,
//       name: "Dr. Praveen Kumar (CSME)",
//       course: "Joined 2023 | 02 Years Exp. | Ph.D.",
//       content:
//         "The CSME Department integrates healthcare with technology. It emphasizes clinical engineering and research, backed by state-of-the-art infrastructure and interdisciplinary learning. It supports funded projects and encourages quality publications.",
//     },
//     {
//       type: "text",
//       image: SDImg,
//       name: "Dr. Subodhkumar Daronde (BME)",
//       course: "Joined 2022 | 03 Years Exp. | Ph.D.",
//       content:
//         "FEAT fosters innovation, creativity, and academic excellence. With 5 branches and a strong research culture, students receive practical exposure, mentorship, and opportunities to explore technologies that contribute meaningfully to society.",
//     },
//   ],
//   Alumni: [],
// };

// const TestimonialsSection = () => {
//   const tabs = Object.keys(testimonialsData);
//   const [activeTab, setActiveTab] = useState(tabs[0]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const activeTestimonials = testimonialsData[activeTab];

//   // Auto rotation every 5s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % activeTestimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [activeTab, activeTestimonials.length]);

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setCurrentIndex(0);
//   };

//   const testimonial = activeTestimonials[currentIndex];

//   return (
//     <div className="px-4 md:px-8 py-10 bg-[#F4F4F4]">
//       <div className="mb-6">
//         <h2 className="text-4xl ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
//           <hr className="border-red-500 border-2 w-12 mb-2" />
//           TESTIMONIALS
//         </h2>

//         {/* Tabs */}
//         <div className="text-center flex justify-center pb-8 gap-4 flex-wrap">
//           {tabs.map((tab, index) => (
//             <button
//               key={tab}
//               className={`px-3 py-1 text-base transition-all ${
//                 activeTab === tab
//                   ? "underline text-black"
//                   : "text-gray-500 hover:text-gray-700"
//               } ${
//                 index < tabs.length - 1 ? "border-r border-gray-300 pr-4" : ""
//               }`}
//               onClick={() => handleTabClick(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Testimonial Content */}
//         {testimonial && (
//           <div className="transition-all duration-300">
//             {testimonial.type === "text" ? (
//               <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto text-left">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-40 h-40 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="text-base mb-4">{testimonial.content}</p>
//                   <p className="font-semibold">{testimonial.name}</p>
//                   <p className="text-sm">{testimonial.course}</p>
//                 </div>
//               </div>
//             ) : (
//               <div className="flex flex-col items-center">
//                 <div className="relative w-full max-w-xl aspect-video rounded overflow-hidden shadow-lg">
//                   <iframe
//                     src={testimonial.videoUrl}
//                     title={testimonial.name}
//                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="w-full h-full"
//                   ></iframe>
//                 </div>
//                 <p className="mt-4 font-semibold">{testimonial.name}</p>
//                 <p className="text-sm">{testimonial.course}</p>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Dots */}
//         <div className="flex justify-center mt-6 gap-2">
//           {activeTestimonials.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleDotClick(idx)}
//               className={`w-3 h-3 rounded-full transition ${
//                 idx === currentIndex ? "bg-[#e8502e]" : "bg-gray-400"
//               }`}
//             ></button>
//           ))}
//         </div>

//         {/* Link */}
//         <p className="mt-6 text-sm text-blue-500 underline cursor-pointer">
//           Check all {activeTab.toLowerCase()}’s testimonials here
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TestimonialsSection;

// import React, { useState, useEffect, useRef } from "react";
// import { PlayCircle } from "lucide-react";
// import AkashVideo from "../../assets/Testimonials/FEAT/Aahash Kambale_1.mp4";
// import MGNVideo from "../../assets/Testimonials/FEAT/Mayur Ganwande and Nikita Zade_1.mp4";
// import RuchiVideo from "../../assets/Testimonials/FEAT/Ruchika Vaidya_1.mp4";

// import icon1 from "../../assets/Testimonials/FEAT/1.png";
// import icon2 from "../../assets/Testimonials/FEAT/2.png";
// import icon3 from "../../assets/Testimonials/FEAT/3.png";

// import SHImg from "../../assets/Testimonials/FEAT/SH.png";
// import PVImg from "../../assets/Testimonials/FEAT/PV.png";
// import SGImg from "../../assets/Testimonials/FEAT/SG.png";
// import SNCImg from "../../assets/Testimonials/FEAT/SNC.png";
// import PKImg from "../../assets/Testimonials/FEAT/PK.png";
// import SDImg from "../../assets/Testimonials/FEAT/SD.png";

// import PCCImg from "../../assets/Testimonials/FEAT/PCC.png";
// import PVNImg from "../../assets/Testimonials/FEAT/PVN.png";
// import PVIImg from "../../assets/Testimonials/FEAT/PVI.png";
// import PDDImg from "../../assets/Testimonials/FEAT/PDD.png";

// const testimonialsData = {
//   Students: [
//     {
//       type: "video",
//       videoUrl: AkashVideo,
//       thumbnail: icon1,
//       name: "Mr.Aahash Kambale",
//     },
//     {
//       type: "video",
//       videoUrl: MGNVideo,
//       thumbnail: icon3,
//       name: "Mr. Mayur Ganwande and Miss Nikita Zade",
//     },
//     {
//       type: "video",
//       videoUrl: RuchiVideo,
//       thumbnail: icon2,
//       name: "Miss Ruchika Vaidya",
//     },
//   ],
//   Parents: [
//     {
//       type: "text",
//       image: PCCImg,
//       name: "Mr. Chirangilal Chonde",
//       course: "Parent of Ayushi Chonde (B-Tech AIDS 2025)",
//       content:
//         "I am incredibly proud of my daughter, Aayushi Chonde, who is excelling in her final year of B.Tech in Artificial Intelligence and Data Science at FEAT, DMIHER DU...",
//     },
//     {
//       type: "text",
//       image: PVNImg,
//       name: "Mrs. Vandana Narendra Rewatkar",
//       course: "Parent of Bhairavi Rewatkar (B-Tech AIDS 2025)",
//       content:
//         "I have attended parent meetings and cultural events at my ward’s college and am impressed by its excellent educational culture...",
//     },
//     {
//       type: "text",
//       image: PVIImg,
//       name: "Mr. Vijay Izankar",
//       course: "Parent of Sakshi Izankar (B-Tech CSD 2025)",
//       content:
//         "As a parent, I wanted a college that not only focuses on academics but also fosters innovation and critical thinking...",
//     },
//     {
//       type: "text",
//       image: PDDImg,
//       name: "Mr. Devendra Dhanjode",
//       course: "Parent of Deoyani Dhanjode (B-Tech CSME 2025)",
//       content:
//         "As a father, I am deeply grateful for the transformative impact of the Faculty of Engineering and Technology at DMIHER...",
//     },
//   ],
//   Faculty: [
//     {
//       type: "text",
//       image: SHImg,
//       name: "Ms. Shital Hajare (AIDS)",
//       course: "Joined 2022 | 09 Years Exp. | M.E",
//       content:
//         "As a faculty member at FEAT, I am proud to be part of an institution that prioritizes research, innovation, and cutting-edge education...",
//     },
//     {
//       type: "text",
//       image: PVImg,
//       name: "Dr. Prateek Verma (AIML)",
//       course: "Joined 2022 | 05 Years Exp. | Ph.D.",
//       content:
//         "FEAT offers unmatched resources and support, from state-of-the-art labs to dedicated research centers...",
//     },
//     {
//       type: "text",
//       image: SGImg,
//       name: "Dr. Swapnil Gundewar (AIML)",
//       course: "Joined 2023 | 9.5 Years Exp. | Ph.D.",
//       content:
//         "Working as an Assistant Professor in AIML has been enriching...",
//     },
//     {
//       type: "text",
//       image: SNCImg,
//       name: "Dr. Shiv Nath Chaudhri (CSD)",
//       course: "Joined 2024 | 02 Years Exp. | Ph.D.",
//       content:
//         "FEAT, DMIHER, is a premier institution for future-ready engineers...",
//     },
//     {
//       type: "text",
//       image: PKImg,
//       name: "Dr. Praveen Kumar (CSME)",
//       course: "Joined 2023 | 02 Years Exp. | Ph.D.",
//       content: "The CSME Department integrates healthcare with technology...",
//     },
//     {
//       type: "text",
//       image: SDImg,
//       name: "Dr. Subodhkumar Daronde (BME)",
//       course: "Joined 2022 | 03 Years Exp. | Ph.D.",
//       content:
//         "FEAT fosters innovation, creativity, and academic excellence...",
//     },
//   ],
//   Alumni: [],
// };

// const TestimonialsSection = () => {
//   const tabs = Object.keys(testimonialsData);
//   const [activeTab, setActiveTab] = useState(tabs[0]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const activeTestimonials = testimonialsData[activeTab];
//   const testimonial = activeTestimonials[currentIndex];

//   // Auto-rotate
//   useEffect(() => {
//     if (isPlaying) return; // pause auto-scroll while video is playing
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % activeTestimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [activeTab, activeTestimonials.length, isPlaying]);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setCurrentIndex(0);
//     setIsPlaying(false);
//   };

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//     setIsPlaying(false);
//   };

//   const handlePlay = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   const handleEnded = () => {
//     setIsPlaying(false);
//   };

//   return (
//     // <div className="px-4 md:px-8 py-10 bg-[#F4F4F4]">
//     //   <div className="mb-6">
//     //     <h2 className="text-4xl ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
//     //       <hr className="border-red-500 border-2 w-12 mb-2" />
//     //       TESTIMONIALS
//     //     </h2>

//     //     {/* Tabs */}
//     //     <div className="text-center flex justify-center pb-8 gap-4 flex-wrap">
//     //       {tabs.map((tab, index) => (
//     //         <button
//     //           key={tab}
//     //           className={`px-3 py-1 text-base transition-all ${
//     //             activeTab === tab
//     //               ? "underline text-black"
//     //               : "text-gray-500 hover:text-gray-700"
//     //           } ${
//     //             index < tabs.length - 1 ? "border-r border-gray-300 pr-4" : ""
//     //           }`}
//     //           onClick={() => handleTabClick(tab)}
//     //         >
//     //           {tab}
//     //         </button>
//     //       ))}
//     //     </div>

//     //     {/* Testimonial Content */}
//     //     {testimonial && (
//     //       <div className="transition-all duration-300">
//     //         {testimonial.type === "text" ? (
//     //           <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto text-left">
//     //             <img
//     //               src={testimonial.image}
//     //               alt={testimonial.name}
//     //               className=" rounded-full object-cover"
//     //             />
//     //             <div>
//     //               <p className="text-base mb-4">{testimonial.content}</p>
//     //               <p className="font-semibold">{testimonial.name}</p>
//     //               <p className="text-sm">{testimonial.course}</p>
//     //             </div>
//     //           </div>
//     //         ) : (
//     //           <div className="flex flex-col items-center px-4">
//     //             <div className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-xl">
//     //               <video
//     //                 ref={videoRef}
//     //                 src={testimonial.videoUrl}
//     //                 poster={testimonial.thumbnail}
//     //                 className="w-full h-full object-cover"
//     //                 onEnded={handleEnded}
//     //                 controls={isPlaying}
//     //               />
//     //               {!isPlaying && (
//     //                 <button
//     //                   onClick={handlePlay}
//     //                   className="absolute inset-0 flex items-center justify-center  bg-opacity-40 transition hover:bg-opacity-60"
//     //                 >
//     //                   <PlayCircle className="w-20 h-20 text-white drop-shadow-lg hover:scale-110 transition-transform duration-200" />
//     //                 </button>
//     //               )}
//     //             </div>

//     //             {/* Name */}
//     //             <p className="mt-4 text-lg font-semibold text-gray-800 text-center">
//     //               {testimonial.name}
//     //             </p>

//     //             {/* Course or Role */}
//     //             {testimonial.course && (
//     //               <p className="text-sm text-gray-600 text-center mt-1">
//     //                 {testimonial.course}
//     //               </p>
//     //             )}
//     //           </div>
//     //         )}
//     //       </div>
//     //     )}

//     //     {/* Dots */}
//     //     <div className="flex justify-center mt-6 gap-2">
//     //       {activeTestimonials.map((_, idx) => (
//     //         <button
//     //           key={idx}
//     //           onClick={() => handleDotClick(idx)}
//     //           className={`w-3 h-3 rounded-full transition ${
//     //             idx === currentIndex ? "bg-[#e8502e]" : "bg-gray-400"
//     //           }`}
//     //         ></button>
//     //       ))}
//     //     </div>

//     //     {/* Link */}
//     //     {/* <p className="mt-6 text-sm text-blue-500 underline cursor-pointer">
//     //       Check all {activeTab.toLowerCase()}’s testimonials here
//     //     </p> */}
//     //   </div>
//     // </div>
//     <div className="px-4 md:px-8 py-10 bg-[#F4F4F4]">
//       <div className="mb-6">
//         <h2 className="text-3xl sm:text-4xl ml-4 sm:ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
//           <hr className="border-red-500 border-2 w-12 mb-2" />
//           TESTIMONIALS
//         </h2>

//         {/* Tabs */}
//         <div className="text-center flex justify-center pb-8 gap-4 flex-wrap">
//           {tabs.map((tab, index) => (
//             <button
//               key={tabs}
//               className={`px-3 py-1 text-sm sm:text-base transition-all ${
//                 activeTab === tab
//                   ? "underline text-black"
//                   : "text-gray-500 hover:text-gray-700"
//               } ${
//                 index < tabs.length - 1 ? "border-r border-gray-300 pr-4" : ""
//               }`}
//               onClick={() => handleTabClick(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Testimonial Content */}
//         {testimonial && (
//           <div className="transition-all duration-300">
//             {testimonial.type === "text" ? (
//               <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto text-left px-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover"
//                 />
//                 <div className="text-sm sm:text-base">
//                   <p className="mb-4">{testimonial.content}</p>
//                   <p className="font-semibold">{testimonial.name}</p>
//                   <p className="text-gray-600">{testimonial.course}</p>
//                 </div>
//               </div>
//             ) : (
//               <div className="flex flex-col items-center px-4">
//                 <div className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-xl">
//                   <video
//                     ref={videoRef}
//                     src={testimonial.videoUrl}
//                     poster={testimonial.thumbnail}
//                     className="w-full h-full object-cover"
//                     onEnded={handleEnded}
//                     controls={isPlaying}
//                   />
//                   {!isPlaying && (
//                     <button
//                       onClick={handlePlay}
//                       className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition hover:bg-opacity-60"
//                     >
//                       <PlayCircle className="w-20 h-20 text-white drop-shadow-lg hover:scale-110 transition-transform duration-200" />
//                     </button>
//                   )}
//                 </div>

//                 {/* Name */}
//                 <p className="mt-4 text-base sm:text-lg font-semibold text-gray-800 text-center">
//                   {testimonial.name}
//                 </p>

//                 {/* Course or Role */}
//                 {testimonial.course && (
//                   <p className="text-sm text-gray-600 text-center mt-1">
//                     {testimonial.course}
//                   </p>
//                 )}
//               </div>
//             )}
//           </div>
//         )}

//         {/* Dots */}
//         <div className="flex justify-center mt-6 gap-2">
//           {activeTestimonials.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleDotClick(idx)}
//               className={`w-3 h-3 rounded-full transition ${
//                 idx === currentIndex ? "bg-[#e8502e]" : "bg-gray-400"
//               }`}
//             ></button>
//           ))}
//         </div>

//         {/* Link */}
//         {/* <p className="mt-6 text-sm text-blue-500 underline cursor-pointer">
//       Check all {activeTab.toLowerCase()}’s testimonials here
//     </p> */}
//       </div>
//     </div>
//   );
// };

// export default TestimonialsSection;

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
    {
      type: "text",
      image: PDDImg,
      name: "Mr. Devendra Dhanjode",
      course: "Parent of Deoyani Dhanjode (B-Tech CSME 2025)",
      content:
        "As a father, I am deeply grateful for the transformative impact of the Faculty of Engineering and Technology at DMIHER on my daughter’s B.Tech journey in Computer Science and Medical Engineering. Since joining, her academic performance, confidence, and overall growth have been remarkable. The dedicated faculty, diverse curriculum, and enriching extracurricular activities have equipped her with essential skills for the future. The college’s supportive environment has helped her develop responsibility, determination, and lifelong friendships. I am proud to see her thrive and confident that DMIHER is laying a strong foundation for her success. My heartfelt thanks to the faculty and staff.",
    },
  ],
  // Faculty: [
  //   {
  //     type: "text",
  //     image: SHImg,
  //     name: "Ms. Shital Hajare (AIDS)",
  //     course: "Joined 2022 | 09 Years Exp. | M.E",
  //     content:
  //       "As a faculty member at FEAT, I am proud to be part of an institution that prioritizes research, innovation, and cutting-edge education. Our commitment to technological advancement is evident in programs like Advanced Integrated Digital Systems (AIDS), AI & Machine Learning (AIML), and Computer Science & Medical Engineering. By integrating emerging fields into our curriculum, we equip students with the skills needed to excel in a dynamic industry. Witnessing their passion, problem-solving abilities, and hands-on learning experiences is truly inspiring. It is an honor to guide and support them on their academic journey toward a future of innovation.",
  //   },
  //   {
  //     type: "text",
  //     image: PVImg,
  //     name: "Dr. Prateek Verma (AIML)",
  //     course: "Joined 2022 | 05 Years Exp. | Ph.D.",
  //     content:
  //       "FEAT offers unmatched resources and support, from state-of-the-art labs to dedicated research centers, enabling faculty and students to push the boundaries of knowledge. What truly sets FEAT apart is its commitment to collaboration, creativity, and moral values, shaping students into skilled professionals and responsible individuals. Through interdisciplinary projects, industry partnerships, and holistic development, we inspire and empower students to make a difference. I am grateful to be part of the FEAT family, where we embrace innovation and excellence, shaping the next generation of leaders and innovators who will drive positive change in the world.",
  //   },
  //   {
  //     type: "text",
  //     image: SGImg,
  //     name: "Dr. Swapnil Gundewar (AIML)",
  //     course: "Joined 2023 | 9.5 Years Exp. | Ph.D.",
  //     content:
  //       "Working as an Assistant Professor in the Artificial Intelligence and Machine Learning department at Feat has been an enriching experience. The department focuses on cutting-edge technologies like Machine Learning, Deep Learning, and NLP, preparing students for industry demands. Teaching AI-driven solutions across domains like healthcare, robotics, and security has been highly rewarding. The curriculum bridges theory and practice, fostering innovation and research. Collaborating with passionate students and faculty has enhanced my expertise and commitment to AI education. I am proud to contribute to shaping future AI professionals and advancing knowledge in this transformative field.",
  //   },
  //   {
  //     type: "text",
  //     image: SNCImg,
  //     name: "Dr. Shiv Nath Chaudhri (CSD)",
  //     course: "Joined 2024 | 02 Years Exp. | Ph.D.",
  //     content:
  //       "The Faculty of Engineering and Technology (FEAT), DMIHER (DU), is a premier institution dedicated to shaping future-ready engineers through excellence in education, research, and healthcare-aligned innovation. With hands-on learning, cutting-edge labs, and an industry-aligned curriculum, FEAT equips students with essential technical and leadership skills. Backed by experienced faculty and state-of-the-art infrastructure, it fosters critical thinking, creativity, and interdisciplinary innovation. Offering AICTE and UGC-approved programs, FEAT focuses on emerging technologies like AI, IoT, and Robotics. With 100% placement assistance, global exposure, and a student-centric approach, FEAT prepares graduates to excel as engineers and industry leaders.",
  //   },
  //   {
  //     type: "text",
  //     image: PKImg,
  //     name: "Dr. Praveen Kumar (CSME)",
  //     course: "Joined 2023 | 02 Years Exp. | Ph.D.",
  //     content:
  //       "The Department of Computer Science and Medical Engineering, under the Faculty of Engineering and Technology, stands out for its visionary approach in integrating healthcare and technology. The department emphasizes clinical engineering, preparing students to address real-world medical challenges through innovative solutions. With a strong focus on research and development, the institute actively supports funded projects and offers incentives for quality paper publications, fostering a rich academic and research culture. The state-of-the-art infrastructure, experienced faculty, and interdisciplinary curriculum provide students with excellent opportunities for growth, making it a leading hub for those aspiring to make a mark in the healthcare technology domain.",
  //   },
  //   {
  //     type: "text",
  //     image: SDImg,
  //     name: "Dr. Subodhkumar Daronde (BME)",
  //     course: "Joined 2022 | 03 Years Exp. | Ph.D.",
  //     content:
  //       "As a faculty member at FEAT, Wardha, part of Datta Meghe Institute of Higher Education and Research, I am proud to be part of an institution that excels in engineering education. With five branches—AIDS, AIML, CSD, CSME, and CSE—FEAT fosters innovation, creativity, and academic excellence for 300 students. Beyond technical knowledge, it emphasizes practical skills, critical thinking, and ethics. With state-of-the-art labs, industry collaborations, and dedicated faculty, students gain hands-on experience and mentorship. FEAT’s strong research culture and interdisciplinary approach empower students to explore cutting-edge technologies and contribute meaningfully to society’s advancement.",
  //   },
  // ],
  // Alumni: [], // Future entries
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
    <div className="px-4 md:px-8 py-10 bg-[#F4F4F4]">
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl ml-4 sm:ml-15 font-medium text-gray-500 font-oswald-medium mb-4">
          <hr className="border-red-500 border-2 w-12 mb-2" />
          TESTIMONIALS
        </h2>

        {/* Tabs */}
        <div className="text-center flex justify-center pb-8 gap-4 flex-wrap">
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
