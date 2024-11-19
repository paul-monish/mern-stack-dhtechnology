import React, { useEffect, useState } from "react";

const TestUseEffect = () => {
  console.log("TestUseEffect");
  const [count, setCount] = useState(0);
  //   const [calc, setCalc] = useState(0);
  //   useEffect(() => {
  //     console.log("useEffect");
  //     setCount((prev) => prev + 1);
  //   }, []);
  //   useEffect(() => {
  //     console.log("useEffect");
  //     setCalc(() => count * 2);
  //   }, [count]);
  //   const handleClick = () => {
  //     setCount((prev) => prev + 1);
  //   };
  useEffect(() => {
    console.log("useEffect");
    let timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);

    return () => {
      console.log("clean");
      return clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      {/* <p>Count: {count}</p>
      <button onClick={handleClick}>+</button>
      {console.log("hii")}
      <p>Calc: {calc}</p> */}
      <h1>I am rendered {count} times!</h1>
    </div>
  );
};

export default TestUseEffect;
