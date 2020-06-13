import React from "react";
import { Todos, Checkbox, Label, TodoLi } from "./list.style";

const TodosList = ({ data, onClickCheckbox }) => {
  return (
    <Todos>
      {data.todos.map((ele) => (
        <TodoLi key={ele.id}>
          <Checkbox
            type="checkbox"
            name={ele.id}
            onClick={onClickCheckbox}
            defaultChecked={ele.todo_completed}
          />
          <Label htmlFor={ele.id}>
            {ele.title}
            {ele.todo_due
              ? ` ${new Date(parseInt(ele.todo_due)).toLocaleString()}`
              : null}
          </Label>
        </TodoLi>
      ))}
    </Todos>
  );
};

export default TodosList;
