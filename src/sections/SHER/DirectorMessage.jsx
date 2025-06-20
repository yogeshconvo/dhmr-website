import React from "react";
import DeanImage from "../../assets/SHER/Director.png";

const DirectorMessage = () => {
  return (
    <div className="bg-[#0C2C5B] text-white px-6 md:px-40 py-40">
      <h2 className="text-3xl md:text-4xl font-oswaldMedium border-l-4 border-[#F25022] pl-3 mb-10">
        DIRECTOR MESSAGE
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start text-center lg:text-left">
        {/* Image + Name */}
        <div className="flex-shrink-0">
          <img
            src={DeanImage}
            alt="Dr. Vaibhav Anjankar"
            className="rounded-lg w-[300px] md:w-[370px] h-auto object-cover mb-4 mx-auto lg:mx-0"
          />
          <div className="text-[13px] leading-6 text-[#F7B733] mt-2">
            <p className="text-[#F7B733] font-bold">Dr. Vaibhav Anjankar</p>
            <p>
              Director, School of Higher Education and Research (SHER)
              <br />
              Qualification: (MBBS, MD)
            </p>
            <p>Email - sherdu@dmiher.edu.in</p>
          </div>
        </div>

        {/* Message */}
        <div className="text-xl font-[300] leading-6 text-white max-w-3xl">
          <p className="mb-6">
            A very warm welcome to School of Higher Education and Research
            (SHER). It is my pleasure to introduce you to SHER which has grown
            tremendously since its inception. SHER has widened its scope by
            incorporating various fields of higher education like skill
            development, AI etc.
          </p>

          <p className="mb-6">
            Engaging excellent human resources and latest technologies to
            facilitate and guide learning and practice is something that is
            pursued with hallmark at SHER.
          </p>

          <a
            href="#"
            className="text-[#9AD1FF] text-sm font-oswaldLight underline"
          >
            Know more
          </a>
        </div>
      </div>
    </div>
  );
};

export default DirectorMessage;
