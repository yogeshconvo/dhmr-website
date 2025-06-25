import React from "react";

function ButtonsSaS() {
  return (
    <div className="bg-gray-50">
      <div className="container py-20  flex flex-center gap-10 flex-wrap">
        <button className="primary-btn btn">
          <a href="#" className="text-white font-[500] text-xl rounded-xl">
            Electives Offered
          </a>
        </button>
        <button className="orange-btn btn">
          <a href="#" className="text-white text-xl px-10 py-4 rounded-xl">
            Know More
          </a>
        </button>
      </div>
    </div>
  );
}

export default ButtonsSaS;
