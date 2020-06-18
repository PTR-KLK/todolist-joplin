import React from "react";
import {
  List,
  Checkbox,
  Label,
  DueDate,
  Todo
} from "./todos.style";

const Todos = (props) => {
  return (
    <List>
      {props.data.todos.map((ele) => (
        <Todo key={ele.id}>
          <Checkbox
            type="checkbox"
            name={ele.id}
            onClick={props.onClickCheckbox}
            defaultChecked={ele.todo_completed}
          />
          <Label htmlFor={ele.id}>{ele.title}</Label>
          {ele.todo_due ? (
            <DueDate>
              {new Date(parseInt(ele.todo_due)).toLocaleString()}
            </DueDate>
          ) : null}
        </Todo>
      ))}
    </List>
  );
};

export default Todos;
