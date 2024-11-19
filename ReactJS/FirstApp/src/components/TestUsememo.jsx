import React, { Fragment, useCallback, useMemo, useState } from "react";
import Todos from "./Todos";
const expensiveCalculation = (num) => {
  console.log("Calculate");
  for (let i = 0; i < 1000000; i++) {
    num += 1;
  }
  return num;
};

const TestUsememo = () => {
  console.log("TestUsememo");

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);
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
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </Fragment>
  );
};

export default TestUsememo;
