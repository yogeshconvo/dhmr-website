import React, { useState } from "react";
import DeanImage from "../../assets/SPDC/DEANSPDC.png";

const DeansMessage = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="bg-[#0C2C5B]   text-white px-10  md:px-38 py-20">
      <h2 className="text-3xl md:text-4xl font-oswald-medium font-[500] mb-10">
        <hr className="w-16 sm:w-20 border-[#F04E30] mb-2 border-t-4" />
        DEAN’S MESSAGE
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Image + Name */}
        <div className="flex-shrink-0">
          <img
            src={DeanImage}
            alt="Dean"
            className="rounded-lg w-[370px] h-auto object-cover mb-4"
          />
          <div className="text-[#E1CD67] leading-relaxed max-sm:mt-4">
            <p className=" font-bold">Dr. Manoj Chandak</p>
            <p className="">
              Dean, SPDC MDS, PhD, Fellowship,
              <br /> Dept. of Conservative Dentistry and Endodontics
            </p>
            <p>deanspdc@dmimsu.edu.in</p>
          </div>
        </div>

        {/* Message */}
        <div className="text-base font-oswaldLight leading-6 text-white">
          <p className="mb-4">
            It is a matter of immense pleasure and pride being a part of this
            esteemed institute. This will provide immense satisfaction being a
            part of healthcare team, engaged in helping the patient to alleviate
            the pain and suffering.
          </p>

          <p className="mb-4">
            As head of the institute, it is proud to mention that college
            imparts quality education, unmatchable clinical experiences and
            adopting to curricular reforms in congruence with the changing needs
            of the society; have acquired the status of Grade ‘A++’ by NAAC and
            achieved status of National and International repute. This tall
            stature is not only the effort actualized by the learned faculty but
            also the professionalism and dynamism of graduates and postgraduates
            of this university and we hope that you too will live up to our
            expectation.
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
              <p className="mb-4">
                I ensure that students are molded into quality dental
                professionals at par with any international standards of repute.
                I wish you luck for this transitional moment of your life and
                future endeavors and send my best wishes to you all for your
                further tenure as a dentist and I am sure that you will
                successfully complete your future journey with positive attitude
                and live for humanity which will ultimately lead to producing a
                caring, competent and compassionate health professional.
              </p>
              <p className="mb-4">
                The organizational culture is healthy and supports the
                individual growth. The governance promotes hierarchical system,
                freedom of decision making within the working domains, team
                approach, promotes skill enhancements and adopts working with
                creativity and adaptability. The governance nurtures personal
                growth and developments. The Hospital works on the principle of
                providing “Affordable health care for all” and “Health care at
                doorstep”. In the pursuit of the same all the hospital services,
                including the high-end super speciality services are offered at
                highly subsidized and affordable cost. Many health care, patient
                welfare schemes are launched to help the economically weaker
                sections of society.
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

export default DeansMessage;
