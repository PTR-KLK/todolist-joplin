import React from "react";
import { Navbar, List, ProjectButton } from "./projectsBar.style";
import NewProject from "../newProject/newProject";

const Sidebar = (props) => {
  return (
    <Navbar isFixed={props.isFixed}>
      <List>
        {props.todoTree.map((e) => {
          return (
            <li key={e.id}>
              <ProjectButton id={e.id} onClick={props.onClickFolder}>
                {e.title}
              </ProjectButton>
            </li>
          );
        })}
        <NewProject
          submitNewProject={props.submitNewProject}
          onChangeText={props.onChangeText}
          newTodoText={props.newTodoText}
        />
      </List>
    </Navbar>
  );
};

export default Sidebar;
