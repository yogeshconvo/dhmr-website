<<<<<<< HEAD
import React, { useState } from "react";
=======


import React from "react";
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
import DeanImage from "../../assets/FEAT/DeanFEAT.png";
import message1 from "../../assets/sas/message/Picture1.png";

const DirectorsMessageCDOE = () => {
<<<<<<< HEAD
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#0C2C5B] text-white px-6 md:px-40 py-20">
      <h2 className="text-3xl md:text-4xl font-oswald-medium mb-10 relative">
        <span className="block border-t-4 border-[#EE4B2B] w-10 mb-2"></span>
        DIRECTOR’S MESSAGE
      </h2>

      <div className="flex flex-col  lg:flex-row gap-10 items-center lg:items-start text-center lg:text-left">
        {/* Image + Name */}
        <div className="flex-shrink-0">
          <div className="flex-1 rounded-lg overflow-hidden  mb-3 min-w-[300px]">
=======
  return (
    <div className="bg-[#0C2C5B] text-white px-6 md:px-40 py-20">
      
      <h2 className="text-3xl md:text-4xl font-oswald-medium mb-10 relative">
        <span className="block border-t-4 border-[#EE4B2B] w-10 mb-2"></span>
        DIRECTOE’S MESSAGE
      </h2>

      <div
        className="flex flex-col text-[Arial] lg:flex-row gap-10 items-center lg:items-start text-center lg:text-left"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {/* Image + Name */}
        <div className="flex-shrink-0">
          <div className="flex-1 rounded-lg overflow-hidden mb-6 min-w-[300px]">
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
            <img src={message1} alt="" />
          </div>
          {/* <img
            src={DeanImage}
            alt="Dean"
            className="rounded-lg w-[300px] md:w-[370px] h-auto object-cover mb-4 mx-auto lg:mx-0"
          /> */}
<<<<<<< HEAD
          <div className="text-xm leading-6 text-[#E1CD67] mt-2">
            <p className="text-[#E1CD67] font-bold">Dr. Chhitij Raj</p>
            <p>
              B. Com, MMS, PhD.
              <br />
              director.cdoe@dmiher.edu.in
              <br />
              Datta Meghe Institute of Higher Education and <br />
              Research (Deemed to be University), Sawangi, Wardha
              <br />
            </p>
=======
          <div className="text-[13px] leading-6 text-[#E1CD67] mt-2">
            <p className="text-[#E1CD67] font-bold">Dr. Chhitij Raj</p>
            <p>
             B. Com, MMS, PhD.
              <br />
             director.cdoe@dmiher.edu.in
              <br />
              Datta Meghe Institute of Higher Education and <br/>
              Research (Deemed to be University), Sawangi, Wardha
              <br />
             </p>
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
          </div>
        </div>

        {/* Message */}
<<<<<<< HEAD
        <div className="text-xm tracking-wide  leading-6 text-[#f5eeee] max-w-3xl">
          <p className="mb-3">
            Access to high-quality education is the cornerstone of empowerment
            and progress in today's rapidly evolving world. At the Centre for
            Distance and Online Education (CDOE), DMIHER (Deemed to be
            University), we are committed to delivering quality, flexible, and
            learner-centric education that caters to the diverse needs of
            today’s learners.
          </p>

          <p className="mb-3">
            CDOE provides professional online education in Healthcare,
            Management, and Computer Applications. Our programs are designed for
            academic excellence and skill development, preparing learners to
            succeed in a global market.
            <br />
            CDOE-DMIHER offers engaging, flexible, and accessible online
            learning. Students benefit from expert-developed digital content,
            live interactive lectures, and discussion forums. This dynamic
            environment fosters critical thinking, professional growth, and
            lifelong learning.
          </p>
          {!showMore && (
            <a
              href="#"
              className="text-[#9AD1FF] text-sm underline cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setShowMore(true);
              }}
            >
              view more
            </a>
          )}
          {showMore && (
            <>
              <p className="mb-3">
                Our aim is to nurture professionals with intellectual rigor,
                ethical leadership, and social responsibility. Leveraging
                DMIHER's academic and healthcare legacy, we empower learners to
                make meaningful contributions to society and their fields.
              </p>
              <p>
                Located in the academic ecosystem of the DMIHER campus, CDOE
                leverages the University’s interdisciplinary strengths and
                national repute to offer online programs that are not only
                academically rigorous but also industry-relevant. <br />I warmly
                invite you to be a part of the CDOE learning community at
                DMIHER. Join us to experience the dual advantage of world-class
                digital education and the prestige of learning under a NAAC A++
                accredited, Category-I Deemed to be University.
              </p>
              <a
                href="#"
                className="text-[#9AD1FF] text-sm underline cursor-pointer mt-2 block"
                onClick={(e) => {
                  e.preventDefault();
                  setShowMore(false);
                }}
              >
                view less
              </a>
            </>
          )}
=======
        <div className="text-lg tracking-wide mt-4 leading-6 text-[#f5eeee] max-w-3xl">
          <p className="mb-6 font-extralight">
            Access to high-quality education is the cornerstone of empowerment and
            progress in today's rapidly evolving world. At the Centre for Distance
            and Online Education (CDOE), DMIHER (Deemed to be University), we are
            committed to delivering quality, flexible, and learner-centric education
            that caters to the diverse needs of today’s learners.
          </p>

          <p className="mb-6 font-light">
            CDOE provides professional online education in Healthcare, Management, and Computer
            Applications. Our programs are designed for academic excellence and skill development,
            preparing learners to succeed in a global market.
            <br />
            CDOE-DMIHER offers engaging, flexible, and accessible online learning.
            Students benefit from expert-developed digital content, live interactive
            lectures, and discussion forums. This dynamic environment fosters critical
            thinking, professional growth, and lifelong learning.
          </p>

          <p className="mb-6 font-light">
            Our aim is to nurture professionals with intellectual rigor, ethical leadership,
            and social responsibility. Leveraging DMIHER's academic and healthcare legacy,
            we empower learners to make meaningful contributions to society and their fields.
          </p>
          <p>

            Located in the academic ecosystem of the DMIHER campus, CDOE leverages the University’s 
            interdisciplinary strengths and national repute to offer online programs that are not 
            only academically rigorous but also industry-relevant. <br/>
            I warmly invite you to be a part of the CDOE learning community at DMIHER. Join us to 
            experience the dual advantage of world-class digital education and the prestige of 
            learning under a NAAC A++ accredited, Category-I Deemed to be University.

          </p>

          <a href="#" className="text-[#9AD1FF] text-sm font-light underline">
            Know more
          </a>
>>>>>>> c0b206998fde489064a735526d2847598df56a7b
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessageCDOE;
