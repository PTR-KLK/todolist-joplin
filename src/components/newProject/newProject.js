import React from "react";

import { Form, SubmitProject, TextInput } from "./newProject.style";

function NewProject(props) {
  return (
    <Form onSubmit={props.submitNewProject}>
      <SubmitProject type="submit" value="+" />
      <TextInput
        type="text"
        placeholder="Add new project..."
        onChange={props.onChangeText}
        value={props.newTodoText}
      />
    </Form>
  );
}

export default NewProject;
