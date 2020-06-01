import React from "react";

const TodosList = ({ data }) => {
  return (
    <ul>
      {data.todos.map((ele, idx) => (
        <li key={ele.id}>
          <input type="checkbox" name={`todo-${idx}`} />
          <label htmlFor={`todo-${idx}`}>{ele.title}</label>
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
