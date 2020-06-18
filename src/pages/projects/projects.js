import React from "react";
import Subproject from "../../components/subproject/subproject";
import Todos from "../../components/todos/todos";
import { Container } from "./projects.style";
import NewTodo from "../../components/newTodo/newTodo";

function Projects(props) {
  const selectedList = props.listId
    ? props.todoTree.find((e) => e.id === props.listId)
    : props.todoTree[0];

  return (
    <Container>
      <NewTodo
        submitNewTodo={props.submitNewTodo}
        onChangeText={props.onChangeText}
        newTodoText={props.newTodoText}
        submitName={selectedList.id}
      />
      {selectedList.todos ? (
        <Todos
          data={selectedList}
          onClickCheckbox={props.onClickCheckbox}
        />
      ) : null}
      {selectedList.children
        ? selectedList.children.map((el) => (
            <Subproject
              key={el.id}
              listObj={el}
              onClickCheckbox={props.onClickCheckbox}
              onChangeText={props.onChangeText}
              newTodoText={props.newTodoText}
              submitNewTodo={props.submitNewTodo}
            />
          ))
        : null}
    </Container>
  );
}

export default Projects;
