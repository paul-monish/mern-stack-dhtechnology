import React, { Fragment, memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("todo");

  return (
    <Fragment>
      <h3>List Of Todos</h3>
      <ul>
        {todos.map((item, index) => (
          <li key={index} style={{ color: "red" }}>
            {item}
          </li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </Fragment>
  );
};

export default memo(Todos);
