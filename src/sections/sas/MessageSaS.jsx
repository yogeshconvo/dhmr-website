import React, { useState } from "react";
import message1 from "../../assets/sas/message/Picture1.png";

function MessageSaS() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-primary py-18 text-white">
      <div className="container">
        <h2 className="text-3xl font-[500] text-[#FFF] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          HOI’s MESSAGE
        </h2>

        <div className="flex items-start justify-center gap-10 flex-wrap">
          {/* Left: Image (Fixed size) */}
          <div className="flex-1 rounded-lg overflow-hidden mb-6 min-w-[300px] max-w-[400px]">
            <img
              src={message1}
              alt="Message from HOI"
              className="w-full h-auto"
            />
            <div className="mt-8">
              <p className="text-[#E1CD67] leading-relaxed max-sm:mt-4">
                <b className="block">Dr. Chhitij Raj</b>
                <span className="block">HOI</span>
                <span className="block">B. Com, MMS, PhD.</span>
                <span className="block">director.cdoe@dmiher.edu.in</span>
              </p>
            </div>
          </div>

          {/* Right: Fixed initial + expandable extra text */}
          <div className="flex-2 min-w-[280px] max-w-3xl">
            {/* Fixed initial paragraph */}
            <div className="mb-6">
              <p>
                Welcome to the School of Allied Sciences (SAS) at Datta Meghe
                Institute of Higher Education and Research (Deemed-to-be
                University)! At SAS, we are committed to providing a dynamic and
                holistic educational experience that blends management,
                technology, and healthcare. As a forward-thinking institution,
                we recognize the growing intersection between healthcare and
                other industries, and our programs are carefully designed to
                equip students with the skills needed to thrive in this evolving
                landscape.
              </p>
              <p className="mt-4">
                Our aim is to nurture professionals who are not only technically
                proficient and innovative but also socially responsible and
                ready to make a meaningful impact on the healthcare sector and
                beyond. With an emphasis on hands-on learning, collaboration,
                and real-world problem solving, we prepare our students to lead
                with integrity and vision, whether they are pursuing careers in
                health IT, hospital management, or other related fields.
              </p>
            </div>

            {/* Toggle Button */}
            {!showMore && (
              <button
                className="mt-2 mb-4 px-6 py-2 bg-[#F04E30] text-white rounded font-semibold transition hover:bg-[#d13d22]"
                onClick={() => setShowMore(true)}
              >
                View More
              </button>
            )}

            {/* Extra Content: Only appears below */}
            {showMore && (
              <div className="space-y-4">
                <p>
                  At SAS, we offer state-of-the-art infrastructure, cutting-edge
                  curricula, and a passionate faculty who are dedicated to
                  mentoring and supporting our students in every step of their
                  journey. By integrating healthcare into our management and
                  technology programs, we ensure that our graduates are
                  well-rounded professionals ready to excel in both national and
                  international settings.
                </p>
                <p>
                  As the director, it is my privilege to be part of this vibrant
                  academic community. I invite you to explore the opportunities
                  we offer and encourage you to become part of a learning
                  environment that is both enriching and transformative.
                  Together, we can shape a future where health, technology, and
                  leadership come together to create positive change.
                  <br /> I look forward to welcoming you to SAS!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
      </div>
    </div>
  );
}

export default MessageSaS;
