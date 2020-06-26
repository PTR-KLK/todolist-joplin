import React, { useState } from "react";
import Subproject from "../../components/subproject/subproject";
import Todos from "../../components/todos/todos";
import { Container, AddButton } from "./projects.style";
import AddElement from "../../components/addElement/addElement";

function Projects(props) {
  const [addTodoVisible, setAddTodoVisible] = useState(false);
  const [addSubprojectVisible, setAddSubprojectVisible] = useState(false);

  const selectedList = props.activeFolder
    ? props.todoTree.find((e) => e.id === props.activeFolder)
    : props.todoTree[0];

  const showAddTodo = () => {
    // const regex = /[^-]*$/g;

    // console.log(event.target.id.replace(regex, "").replace("-", ""));

    setAddTodoVisible(!addTodoVisible);
  };

  const showAddSubrpoject = () => {
    // const regex = /[^-]*$/g;

    // console.log(event.target.id.replace(regex, "").replace("-", ""));

    setAddSubprojectVisible(!addSubprojectVisible);
  };

  return (
    <Container>
      <AddButton id={`${selectedList.id}-addTodo`} onClick={showAddTodo}>
        New Todo
      </AddButton>
      <AddButton id={`${selectedList.id}-addSubproject`} onClick={showAddSubrpoject}>
        New Subproject
      </AddButton>
      {addTodoVisible ? (
        <AddElement
          submitNewElement={props.submitNewTodo}
          onChangeText={props.onChangeText}
          textInput={props.textInput}
          placeholderText="Add new task..."
          submitName={selectedList.id}
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
          submitName={selectedList.id}
          todoStyle={true}
          onClickInput={props.onClickInput}
          activeInput={props.activeInput}
        />
      ) : null}
      {selectedList.todos ? (
        <Todos
          data={selectedList}
          onClickCheckbox={props.onClickCheckbox}
          onClickDeleteTodo={props.onClickDeleteTodo}
        />
      ) : null}
      {selectedList.children
        ? selectedList.children.map((el) => (
            <Subproject
              key={el.id}
              listObj={el}
              onClickCheckbox={props.onClickCheckbox}
              onClickDeleteTodo={props.onClickDeleteTodo}
              onChangeText={props.onChangeText}
              textInput={props.textInput}
              submitNewTodo={props.submitNewTodo}
              onClickInput={props.onClickInput}
              activeInput={props.activeInput}
            />
          ))
        : null}
    </Container>
  );
}

export default Projects;
