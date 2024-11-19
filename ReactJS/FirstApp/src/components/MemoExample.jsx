import React, { Fragment, useState } from "react";
import Todos from "./Todos";

const MemoExample = () => {
  console.log("MemoExample");

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["t1", "t2"]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Fragment>
      <Todos todos={todos} />
      <hr />
      <div>
        <button onClick={handleClick}>increment</button>
        <p>Count:{count}</p>
      </div>
    </Fragment>
  );
};

export default MemoExample;
