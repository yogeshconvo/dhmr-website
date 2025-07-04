import React from "react";
import Img1 from "../../../assets/sas/college/Commerce_and_Management.jpg";
import Img2 from "../../../assets/sas/college/Science and Technology.jpg";
import Img3 from "../../../assets/sas/college/Liberal.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const collegeData = [
  {
    college: 1,
    title:
      "A Future-Driven Business Faculty under the School of Allied Sciences, DMIHER (DU)",
    para: "The Faculty of Commerce and Management Sciences is a dynamic constituent unit of the School of Allied Sciences at DMIHER (Deemed to be University), a NAAC A++ accredited institution. Rooted in academic excellence and future-oriented pedagogy, the faculty equips students with the knowledge, skills, and strategic mindset needed to excel in today’s competitive global business landscape. Offering a range of undergraduate to Ph.D. programs, the faculty emphasizes hands-on learning, research-based inquiry, and industry-integrated curriculum. It provides a unique edge by connecting core business education with emerging trends in healthcare and technology—hallmarks of the broader ecosystem at the School of Allied Sciences. With a focus on innovation, ethical leadership, and entrepreneurial thinking, the Faculty of Commerce and Management Sciences prepares students to become transformative leaders and decision-makers in the world of commerce, management, and beyond.",
    // linkText: "Know more",
    linkHref: "#",
    sliderImages: Img1,
  },
  {
    college: 2,
    title: "Innovating Futures through Science and Technology at DMIHER (DU)",
    para: "The Faculty of Science and Technology is a vibrant constituent department under the School of Allied Sciences, DMIHER (Deemed to be University), a NAAC A++ accredited institution. Committed to excellence in scientific inquiry and technological advancement, the faculty offers a range of undergraduate, postgraduate, and doctoral programs designed to nurture critical thinking, problem-solving, and innovation. With cutting-edge infrastructure, a research-driven ecosystem, and industry-aligned curriculum, the faculty fosters interdisciplinary learning that bridges science, technology, and healthcare. Students gain practical experience and develop futuristic skills in areas such as data science, biotechnology, environmental science, and emerging technologies. By integrating theoretical foundations with real-world applications, the Faculty of Science and Technology empowers students to become innovators, researchers, and technologists ready to address the challenges of tomorrow.",
    // linkText: "Know more",
    linkHref: "#",
    sliderImages: Img2,
    customClass: "md:flex-row-reverse",
  },
  {
    college: 3,
    title: "Exploring Minds, Shaping Societies at DMIHER (DU)",
    para: "The Faculty of Liberal Arts, Humanities & Social Sciences is a dynamic constituent department of the School of Allied Sciences at DMIHER (Deemed to be University), accredited with NAAC A++. Rooted in creativity, critical thinking, and cultural understanding, the faculty offers a rich array of programs designed to empower students with the tools to understand, interpret, and transform the world around them. Blending academic rigor with real-world relevance, the faculty nurtures thought leaders, storytellers, researchers, and change-makers. Through interdisciplinary approaches, hands-on learning, and community engagement, students gain deep insights into human behavior, social structures, and global issues. Whether through literature, psychology, sociology, or public policy, the Faculty of Liberal Arts, Humanities & Social Sciences inspires students to think deeply, communicate effectively, and act compassionately — equipping them to make meaningful contributions in diverse fields.",
    // linkText: "Know more",
    linkHref: "#",
    sliderImages: Img3,
  },
];

function CollegeSaSBrief({ collegeTabNumber }) {
  let currentCollegeData = collegeData.find(
    (data) => data.college === collegeTabNumber
  );

  if (!currentCollegeData) return null;

  return (
    <div
      className={`container px-8 py-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 animate-fade transition ${
        currentCollegeData.customClass || ""
      }`}
    >
      {/* Text Content */}
      <div className="flex-1 min-w-full md:min-w-[50%] max-w-[600px]">
        <h3 className="text-[#122E5E] font-oswald-medium text-2xl sm:text-3xl font-bold mb-4 leading-tight">
          {currentCollegeData.title}
        </h3>
        <p className="text-[#58595B] text-sm sm:text-base mb-6 leading-relaxed">
          {currentCollegeData.para}
        </p>
        {/* <a
          href={currentCollegeData.linkHref}
          className="text-[#269BFF] underline font-semibold"
        >
          {currentCollegeData.linkText || "Know more"}
        </a> */}
      </div>

      {/* Image Section */}
      <div className="flex-1 w-full mt-15 max-w-[600px] h-auto rounded-md overflow-hidden shadow-lg">
        <img
          src={currentCollegeData.sliderImages}
          alt={currentCollegeData.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default CollegeSaSBrief;
