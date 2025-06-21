import React from "react";

import message1 from "../../assets/sas/message/Picture1.png";

function MessageSaS() {
  return (
    <div className=" mt-[125px] bg-primary py-18 text-white">
      <div className="container">
        <h2 className="text-3xl font-[500] text-[#FFF] mb-8 tracking-wider font-oswald-medium">
          <hr className="w-16 sm:w-20 border-[#F04E30] mb-4 border-t-4" />
          HOI’s MESSAGE
        </h2>

        <div className="flex items-center justify-center gap-10 flex-wrap">
          <div className="flex-1 rounded-lg overflow-hidden mb-6 min-w-[300px]">
            <img src={message1} alt="" />
          </div>
          <div className="flex-2 min-w-[250px]">
            <p className="mb-6">
              Welcome to the School of Allied Sciences (SAS) at Datta Meghe
              Institute of Higher Education and Research (Deemed-to-be
              University)! At SAS, we are committed to providing a dynamic and
              holistic educational experience that blends management,
              technology, and healthcare. As a forward-thinking institution, we
              recognize the growing intersection between healthcare and other
              industries, and our programs are carefully designed to equip
              students with the skills needed to thrive in this evolving
              landscape.
            </p>
            <a href={"#"} className="text-sm  text-[#269BFF] underline">
              {"Know more"}
            </a>
          </div>
        </div>

        <div>
          <p className="text-[#E1CD67] *:block text-sm max-sm:mt-4">
            <b className="*:block">
              <span>Dr. Chhitij Raj </span>
            </b>
            <span className="*:block">
              <span>HOI</span>
              <span>B. Com, MMS, PhD. </span>
              <span>director.cdoe@dmiher.edu.in</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageSaS;
