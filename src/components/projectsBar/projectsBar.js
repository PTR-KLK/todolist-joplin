import React from "react";
import { Navbar, List, ProjectButton } from "./projectsBar.style";

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
      </List>
    </Navbar>
  );
};

export default Sidebar;
