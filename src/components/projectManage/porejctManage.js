import React, { useState } from "react";
import { Container, AddButton } from "./projectManage.style";
import AddElement from "../addElement/addElement";

function ProjectManage(props) {
  const [addTodoVisible, setAddTodoVisible] = useState(false);
  const [addSubprojectVisible, setAddSubprojectVisible] = useState(false);

  const showAddTodo = () => {
    setAddTodoVisible(!addTodoVisible);
  };

  const showAddSubrpoject = () => {
    setAddSubprojectVisible(!addSubprojectVisible);
  };

  return (
    <Container>
      <AddButton onClick={showAddTodo}>New Todo</AddButton>
      <AddButton onClick={showAddSubrpoject}>New Subproject</AddButton>
      {addTodoVisible ? (
        <AddElement
          submitNewElement={props.submitNewTodo}
          onChangeText={props.onChangeText}
          textInput={props.textInput}
          placeholderText="Add new task..."
          submitName={props.submitName}
          todoStyle={true}
          onClickInput={props.onClickInput}
          activeInput={props.activeInput}
        />
      ) : null}
      {addSubprojectVisible ? (
        <AddElement
          submitNewElement={props.submitNewSubproject}
          onChangeText={props.onChangeText}
          textInput={props.textInput}
          placeholderText="Add new subproject..."
          submitName={props.submitName}
          todoStyle={true}
          onClickInput={props.onClickInput}
          activeInput={props.activeInput}
        />
      ) : null}
    </Container>
  );
}

export default ProjectManage;
