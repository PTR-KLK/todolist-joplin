import React from "react";
import Subproject from "../../components/subproject/subproject";
import Todos from "../../components/todos/todos";
import { Container } from "./projects.style";
import AddElement from "../../components/addElement/addElement";

function Projects(props) {
  const selectedList = props.activeFolder
    ? props.todoTree.find((e) => e.id === props.activeFolder)
    : props.todoTree[0];

  return (
    <Container>
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
