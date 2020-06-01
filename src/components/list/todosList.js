import React from "react";
import { Todos } from "./list.style";

const TodosList = ({ data }) => {
  return (
    <Todos>
      {data.todos.map((ele, idx) => (
        <li key={ele.id}>
          <input type="checkbox" name={`todo-${idx}`} />
          <label htmlFor={`todo-${idx}`}>{ele.title}</label>
        </li>
      ))}
    </Todos>
  );
};

export default TodosList;
