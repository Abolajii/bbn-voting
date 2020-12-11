import React from "react";

const Counter = () => {
  const im = () => {};
  const de = () => {};

  return (
    <div>
      <button onClick={im} className="btn btn-warning btn-sm">
        -
      </button>
      <button onClick={de} className="btn btn-sm">
        +
      </button>
    </div>
  );
};

export default Counter;
