import React, { useState } from "react";
import "./IncDecBtn.css";

const IncDecBtn = () => {
  const [count, setCount] = useState(0);

  const dec = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="incdec-wrapper">
        <button onClick={dec}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <input type="text" onChange={()=> false} value={count} />
        <button onClick={() => setCount(count + 1)}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </>
  );
};

export default IncDecBtn;
