import React from "react";

import { Form, SubmitTodo, TextInput } from "./newTodo.style";

function NewTodo(props) {
  return (
    <Form onSubmit={props.submitNewTodo} name={props.submitName}>
      <SubmitTodo type="submit" value="+" />
      <TextInput
        type="text"
        placeholder="Add new task..."
        onChange={props.onChangeText}
        value={props.newTodoText}
      />
    </Form>
  );
}

export default NewTodo;
