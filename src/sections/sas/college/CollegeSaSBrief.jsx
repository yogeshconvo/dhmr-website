import React from "react";
import Img1 from "../../../assets/sas/college/slider1.png";
import Img2 from "../../../assets/sas/college/slider2.png";
import Img3 from "../../../assets/sas/college/slider3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  [
    {
      img: Img1,
      alt: "SRMMCON Campus",
    },
    {
      img: Img2,
      alt: "SRMMCON Labs",
    },
    {
      img: Img3,
      alt: "SRMMCON Students",
    },
  ],
  [
    {
      img: Img1,
      alt: "SRMMCON Campus",
    },
    {
      img: Img2,
      alt: "SRMMCON Labs",
    },
    {
      img: Img3,
      alt: "SRMMCON Students",
    },
  ],
  [
    {
      img: Img1,
      alt: "SRMMCON Campus",
    },
    {
      img: Img2,
      alt: "SRMMCON Labs",
    },
    {
      img: Img3,
      alt: "SRMMCON Students",
    },
  ],
];

const collegeData = [
  {
    college: 1,
    title:
      "A Future-Driven Business Faculty under the School of Allied Sciences, DMIHER (DU)",
    para: "he Faculty of Commerce and Management Sciences is a dynamic constituent unit of the School of Allied Sciences at DMIHER (Deemed to be University), a NAAC A++ accredited institution. Rooted in academic excellence and future-oriented pedagogy, the faculty equips students with the knowledge, skills, and strategic mindset needed to excel in today’s competitive global business landscape. Offering a range of undergraduate to Ph.D. programs, the faculty emphasizes hands-on learning, research-based inquiry, and industry-integrated curriculum. It provides a unique edge by connecting core business education with emerging trends in healthcare and technology—hallmarks of the broader ecosystem at the School of Allied Sciences. With a focus on innovation, ethical leadership, and entrepreneurial thinking, the Faculty of Commerce and Management Sciences prepares students to become transformative leaders and decision-makers in the world of commerce, management, and beyond.",
    linkText: "Know more",
    linkHref: "#",
    sliderImages: slides[0],
  },
  {
    college: 2,
    title: "Innovating Futures through Science and Technology at DMIHER (DU)",
    para: "The Faculty of Science and Technology is a vibrant constituent department under the School of Allied Sciences, DMIHER (Deemed to be University), a NAAC A++ accredited institution. Committed to excellence in scientific inquiry and technological advancement, the faculty offers a range of undergraduate, postgraduate, and doctoral programs designed to nurture critical thinking, problem-solving, and innovation. With cutting-edge infrastructure, a research-driven ecosystem, and industry-aligned curriculum, the faculty fosters interdisciplinary learning that bridges science, technology, and healthcare. Students gain practical experience and develop futuristic skills in areas such as data science, biotechnology, environmental science, and emerging technologies. By integrating theoretical foundations with real-world applications, the Faculty of Science and Technology empowers students to become innovators, researchers, and technologists ready to address the challenges of tomorrow.",
    linkText: "Know more",
    linkHref: "#",
    sliderImages: slides[1],
    customClass: "md:flex-row-reverse",
  },
  {
    college: 3,
    title: "Exploring Minds, Shaping Societies at DMIHER (DU)",
    para: "The Faculty of Liberal Arts, Humanities & Social Sciences is a dynamic constituent department of the School of Allied Sciences at DMIHER (Deemed to be University), accredited with NAAC A++. Rooted in creativity, critical thinking, and cultural understanding, the faculty offers a rich array of programs designed to empower students with the tools to understand, interpret, and transform the world around them. Blending academic rigor with real-world relevance, the faculty nurtures thought leaders, storytellers, researchers, and change-makers. Through interdisciplinary approaches, hands-on learning, and community engagement, students gain deep insights into human behavior, social structures, and global issues. Whether through literature, psychology, sociology, or public policy, the Faculty of Liberal Arts, Humanities & Social Sciences inspires students to think deeply, communicate effectively, and act compassionately — equipping them to make meaningful contributions in diverse fields.",
    linkText: "Know more",
    linkHref: "#",
    sliderImages: slides[0],
  },
];

function CollegeSaSBrief({ collegeTabNumber }) {
  let currentCollegeData = collegeData.filter(
    (data) => data.college == collegeTabNumber
  )[0];

  if (currentCollegeData)
    return (
      <div
        className={`container p-12 flex items-center justify-center gap-18 flex-wrap animate-fade transition ${
          currentCollegeData.customClass
            ? currentCollegeData.customClass
            : undefined
        }`}
      >
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-[#122E5E] text-xl font-bold mb-4">
            {currentCollegeData.title}
          </h3>
          <p className="text-[#58595B] mb-6">{currentCollegeData.para}</p>
          <a
            href={currentCollegeData.linkHref}
            className="text-[#269BFF] underline"
          >
            {currentCollegeData.linkText}
          </a>
        </div>

        <div className="flex-2 min-w-[315px] h-full rounded-md overflow-hidden shadow-lg flex-shrink-0">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            // navigation={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={0}
            loop={true}
            slidesPerView={1}
            className="w-full h-full"
          >
            {currentCollegeData?.sliderImages.map((slide, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="object-fill w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
}

export default CollegeSaSBrief;
