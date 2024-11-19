import React, { Fragment, useState } from 'react'

const TestUseState = ({from}) => {
  
    let [count, setCount] = useState(0);
    console.log("TestUseState");
  
    const handleClick = () => {
      setCount((prev) => prev + 1);
      console.log(count);
    };
  
    return (
      <Fragment>
        <p>count: {count}</p>
        <button onClick={handleClick}>Inc</button>
        <p>I am calling from {from}</p>
      </Fragment>
    );
}

export default TestUseState