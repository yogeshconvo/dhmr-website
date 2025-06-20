import React from "react";
import { Link } from "react-router-dom";

function ButtonsNursing() {
  return (
    <div className="container my-[100px] flex flex-center gap-10 flex-wrap">
      <button className="orange-btn btn">
        <a href="#">Transcripts – UG & PG</a>
      </button>
      <button className="primary-btn btn">
        <a href="#">Electives Offered</a>
      </button>
    </div>
  );
}

export default ButtonsNursing;
