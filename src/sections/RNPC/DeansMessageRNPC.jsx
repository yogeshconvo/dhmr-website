import React from "react";
import DeanImage from "../../assets/RNPC/dean/DeanImage.jpeg"; // ضع الصورة المناسبة هنا

function DeansMessageRNPC() {
  return (
    <div className="bg-[#122E5E] text-white px-6 md:px-40 py-20 ">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-oswald-medium font-[500] mb-10">
          <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
          DEAN’S MESSAGE
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start text-center lg:text-left">
          {/* Image + Name */}
          <div className="flex-shrink-0">
            <img
              src={DeanImage}
              alt="Dean"
              className="rounded-lg w-[300px] md:w-[300px] h-auto object-cover mb-4 mx-auto lg:mx-0"
            />
            <div className="text-[13px] leading-6 text-[#E1CD67] mt-2">
              <p className="text-[#E1CD67] font-bold">
                Dr. Moh'd Irshad Qureshi
              </p>
              <p>
                Dean, RNPC
                <br />
                MPT (Neuro), BPT
                <br />
                Department of Neurophysiotherapy
              </p>
              <p>
                Email -{" "}
                <a
                  href="mailto:principalrnpc@dmiher.edu.in"
                  className="underline text-[#E1CD67]"
                >
                  principalrnpc@dmiher.edu.in
                </a>
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="text-lg tracking-wide font-sans text-[16px]  leading-6 text-[#FFFFFF] max-w-3xl font-[400]">
            <p className="mb-6">
              I am privileged to welcome you to Ravi Nair Physiotherapy College,
              a pioneering institution in physiotherapy education since 1998. As
              the Dean, I take immense pride in the legacy we have built over
              the decades and the ongoing contributions we make to the
              healthcare field.
            </p>
            <p className="mb-6">
              At RNPC, we offer a diverse range of programs, including the
              Bachelor of Physiotherapy (BPT) and Master of Physiotherapy (MPT)
              across multiple specialisations, certification courses, and a
              Doctor of Philosophy (PhD) program. These programs are
              meticulously designed to nurture the next generation of
              physiotherapy professionals and researchers, equipping them with
              the skills and knowledge to excel in an ever-evolving healthcare
              environment. Our commitment to academic excellence is reflected in
              our advanced teaching methodologies and practical learning
              experiences, ensuring our students receive a well-rounded
              education.
            </p>
            <button className="mt-2 mb-4 px-6 py-2 bg-[#F04E30] text-white rounded font-semibold transition hover:bg-[#d13d22]">
              know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeansMessageRNPC;
