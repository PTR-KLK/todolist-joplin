import React from "react";
import Subproject from "../../components/subproject/subproject";
import Todos from "../../components/todos/todos";
import { Container } from "./projects.style";
import ProjectManage from "../../components/projectManage/porejctManage";

function Projects(props) {
  const selectedList = props.activeFolder
    ? props.todoTree.find((e) => e.id === props.activeFolder)
    : props.todoTree[0];

  return (
    <Container>
      <ProjectManage
        onChangeText={props.onChangeText}
        textInput={props.textInput}
        submitName={selectedList.id}
        onClickInput={props.onClickInput}
        activeInput={props.activeInput}
        submitNewTodo={props.submitNewTodo}
        submitNewSubproject={props.submitNewSubproject}
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
              submitNewSubproject={props.submitNewSubproject}
              onClickInput={props.onClickInput}
              activeInput={props.activeInput}
            />
          ))
        : null}
    </Container>
  );
}

export default Projects;
