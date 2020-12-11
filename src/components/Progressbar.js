import React from "react";

const Progressbar = ({ progress }) => {
  return (
    <div>
      <div className="progress">
        <div
          id="myBar"
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: `${progress * 10}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progressbar;
