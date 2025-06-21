import React from "react";
import { Link } from "react-router-dom";

function ButtonsNursing() {
  return (
    <div className="container  py-20 flex flex-center gap-10 flex-wrap">
      <button className="orange-btn  font-oswald-medium btn">
        <a href="#" className=" font-oswald-medium">
          Transcripts – UG & PG
        </a>
      </button>
      <button className="primary-btn btn">
        <a href="#" className=" font-oswald-medium">
          Electives Offered
        </a>
      </button>
    </div>
  );
}

export default ButtonsNursing;
