import React from "react";
import { Todos } from "./list.style";

const TodosList = ({ data, onClickCheckbox }) => {
  return (
    <Todos>
      {data.todos.map((ele) => (
        <li key={ele.id}>
          <input
            type="checkbox"
            name={ele.id}
            onClick={onClickCheckbox}
            defaultChecked={ele.todo_completed}
          />
          <label htmlFor={ele.id}>
            {ele.title}
            {ele.todo_due
              ? ` ${new Date(parseInt(ele.todo_due)).toLocaleString()}`
              : null}
          </label>
        </li>
      ))}
    </Todos>
  );
};

export default TodosList;
