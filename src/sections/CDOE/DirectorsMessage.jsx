import React, { useState } from "react";
// import DeanImage from "../../assets/FEAT/DeanFEAT.png";
import message1 from "../../assets/CDOE/dean/1.png";

const DirectorsMessageCDOE = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#0C2C5B] text-white px-6 md:px-40 py-20">
      <h2 className="text-3xl md:text-4xl font-oswald-medium mb-10 relative">
        <hr className="w-16 border-[#F04E30] border-t-4 mb-3" />
        DIRECTOR’S MESSAGE
      </h2>

      <div className="flex flex-col  lg:flex-row gap-4 items-center lg:items-start text-center lg:text-left">
        {/* Image + Name */}
        <div className="flex-shrink-0">
          <img
            src={message1}
            alt=""
            className="flex-1 rounded-lg overflow-hidden  mb-3 min-w-[300px]"
          />

          {/* <img
            src={DeanImage}
            alt="Dean"
            className="rounded-lg w-[300px] md:w-[370px] h-auto object-cover mb-4 mx-auto lg:mx-0"
          /> */}
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
          </div>
        </div>

        {/* Message */}
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
            <button
              className="mt-2 mb-4 px-6 py-2 bg-[#F04E30] text-white rounded font-semibold transition hover:bg-[#d13d22]"
              onClick={() => setShowMore(true)}
            >
              View More
            </button>
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
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessageCDOE;
