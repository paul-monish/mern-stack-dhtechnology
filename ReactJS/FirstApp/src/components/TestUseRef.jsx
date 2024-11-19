import React, { Fragment, useEffect, useRef, useState } from "react";

const TestUseRef = () => {
  console.log("TestUseRef");

  const [inpVal, setInpVal] = useState("");
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  const handleChange = (e) => {
    setInpVal(e.target.value);
  };
  return (
    <Fragment>
      <input type="text" value={inpVal} onChange={handleChange} />
      <h1>Render {count.current} times</h1>
    </Fragment>
  );
};

export default TestUseRef;
