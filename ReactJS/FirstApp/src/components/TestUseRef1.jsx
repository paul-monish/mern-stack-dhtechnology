import React, { useRef } from "react";

const TestUseRef1 = () => {
  const inpRef = useRef();
  const handleClick = () => {
    inpRef.current.focus();
    // console.log(inpRef.current.value);
    inpRef.current.style.backgroundColor = "red";
  
  };
  return (
    <>
      <input type="text" ref={inpRef} />
      <button onClick={handleClick}>Focus</button>
    </>
  );
};

export default TestUseRef1;
