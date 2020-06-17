import React from "react";
import { List, Checkbox, Label, DueDate, Todo, NewTodo, SubmitTodo, TextInput } from "./todos.style";

const Todos = ({ data, onClickCheckbox }) => {
  return (
    <List>
      {data.todos.map((ele) => (
        <Todo key={ele.id}>
          <Checkbox
            type="checkbox"
            name={ele.id}
            onClick={onClickCheckbox}
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
      <NewTodo>
        <SubmitTodo type="submit" value="+"/>
        <TextInput type="text" placeholder="Add new task..." />
      </NewTodo>
      
    </List>
  );
};

export default Todos;
