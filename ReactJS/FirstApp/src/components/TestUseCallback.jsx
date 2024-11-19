import React, { Fragment, useCallback, useState } from "react";
import Todos from "./Todos";

const TestUseCallback = () => {
  console.log("TestUseCallback");

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "new todo"]);
  }, [todos]);

  return (
    <Fragment>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        <button onClick={handleClick}>increment</button>
        <p>Count:{count}</p>
      </div>
    </Fragment>
  );
};

export default TestUseCallback;
