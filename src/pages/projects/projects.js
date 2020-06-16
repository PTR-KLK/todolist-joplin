import React from "react";
import Subproject from "../../components/subproject/subproject";
import Todos from "../../components/todos/todos";
import { Container } from "./projects.style";

function Projects(props) {
  const selectedList = props.listId
    ? props.todoTree.find((e) => e.id === props.listId)
    : props.todoTree[0];

  return (
    <Container>
      {selectedList.todos ? (
        <Todos data={selectedList} onClickCheckbox={props.onClickCheckbox} />
      ) : null}
      {selectedList.children
        ? selectedList.children.map((el) => (
            <Subproject
              key={el.id}
              listObj={el}
              onClickCheckbox={props.onClickCheckbox}
            />
          ))
        : null}
    </Container>
  );
}

export default Projects;
