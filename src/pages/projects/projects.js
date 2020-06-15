import React from "react";
import List from "../../components/list/list";
// import { Container } from "./projects.style";

function Projects(props) {
  return props.fetchLoading ? (
    "Loading"
  ) : (
    <>
      <List
        todoTree={props.todoTree}
        listId={props.viewedFolder}
        onClickCheckbox={props.onClickCheckbox}
      />
    </>
  );
}

export default Projects;
