import React, { useState } from "react";
import deanWardhaImg from "../../assets/sahs/dean/wardha.png"; // Replace with actual image
import deanNagpurImg from "../../assets/sahs/dean/nagpur.png"; // Replace with actual image

const messages = {
  wardha: {
    name: "Dr. Sunil Thitame",
    designation: "Dean, School of Allied Health Sciences, Wardha",
    email: "dean.sahswardha@dmiher.edu.in",
    image: deanWardhaImg,
    content: (
      <>
        <p>Dear Students, Faculty, and Staff,</p>
        <p className="mt-4">
          It is with great pleasure and enthusiasm that I welcome you to the
          School of Allied Health Sciences at DMIHER University. As the Dean, I
          am honored to lead a vibrant community dedicated to excellence in
          education, research, and service.
        </p>
        <p className="mt-4">
          At SAHS, we are committed to preparing the next generation of allied
          health professionals who will meet the evolving needs of the
          healthcare industry. Through rigorous academic programs, hands-on
          training, and innovative research opportunities, we aim to equip our
          students with the knowledge, skills, and compassion needed to make
          meaningful contributions to society.
        </p>
        <p className="mt-4">
          Our faculty members are dedicated to fostering an engaging learning
          environment where curiosity thrives, critical thinking is encouraged,
          and diversity is celebrated. Together, we strive to create a culture
          of collaboration and mutual respect that inspires lifelong learning
          and professional growth.
        </p>
        <p className="mt-4">
          As members of the School of Allied Health Sciences, we recognize the
          importance of community engagement and service. We are committed to
          addressing healthcare disparities, promoting wellness, and advocating
          for the health needs of underserved populations.
        </p>
        <p className="mt-4">
          I invite you to join us on this exciting journey as we work together
          to advance healthcare knowledge, improve patient outcomes, and make a
          positive impact on the world around us. Together, we can achieve great
          things.
        </p>
      </>
    ),
  },
  nagpur: {
    name: "Dr. Rakhi Chandak",
    designation: "Principal, SAHS, Nagpur",
    email: "principal.sahsngp@dmiher.edu.in",
    image: deanNagpurImg,
    content: (
      <>
        <p>Dear Students, Faculty, and Staff,</p>
        <p className="mt-4">
          DMIHER University is one of the renowned N.A.A.C. accredited deemed to
          be University in India. The entire faculty and department leave no
          stone unturned to shape student’s future. Our institute offers the
          best in academics, research, and co-curricular activities.
          Well-equipped labs, conducive environments, as well as effectively
          designed resource materials, have created a student-friendly
          university.
        </p>
        <p className="mt-4">
          At our college, we are committed to fostering a vibrant academic
          environment where learning, professional growth, and compassion for
          others come together to shape the future of healthcare. It is my
          immense luck and fortune to be the part of faculty of such dynamic
          University.
        </p>
      </>
    ),
  },
};

const DeansMessageSAHS = ({ activeTab }) => {
  const handleLeadershipClick = () => {
    window.open("/leadership", "_blank");
  };

  const dean = messages[activeTab];

  return (
    <div className="bg-[#0C2C5B] text-white py-18">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-[500] text-[#FFF] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          DEAN’S MESSAGE
        </h2>

        <div className="flex items-start justify-center gap-10 flex-wrap">
          {/* Left: Image and Info */}
          <div className="flex-1 rounded-lg overflow-hidden mb-6 min-w-[300px] max-w-[400px]">
            <img src={dean.image} alt={dean.name} className="w-full h-auto" />
            <div className="mt-8">
              <p className="text-[#E1CD67] leading-relaxed max-sm:mt-4">
                <b className="block">{dean.name}</b>
                <span className="block">{dean.designation}</span>
                {dean.email && <span className="block">{dean.email}</span>}
              </p>
            </div>
          </div>

          {/* Right: Message */}
          <div className="flex-2 min-w-[280px] max-w-3xl">
            <div className="mb-6 text-lg">{dean.content}</div>
            <button
              className="mt-2 mb-4 px-6 py-2 bg-[#F04E30] text-white rounded font-semibold transition hover:bg-[#d13d22]"
              onClick={handleLeadershipClick}
            >
              View Full Leadership Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeansMessageSAHS;
