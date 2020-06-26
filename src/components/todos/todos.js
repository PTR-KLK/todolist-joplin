import React from "react";
import {
  List,
  Checkbox,
  Label,
  DueDate,
  Todo,
  DeleteIcon,
} from "./todos.style";

const Todos = (props) => {
  return (
    <List>
      {props.data.todos.map((ele) => (
        <Todo id={ele.id} key={ele.id}>
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
          <DeleteIcon onClick={props.onClickDeleteTodo} />
        </Todo>
      ))}
    </List>
  );
};

export default Todos;
