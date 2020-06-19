import React from "react";
import { Navbar, List, ProjectButton } from "./projectsBar.style";
import AddElement from "..//addElement/addElement";

const Sidebar = (props) => {
  return (
    <Navbar isFixed={props.isFixed}>
      <List>
        {props.todoTree.map((e) => {
          return (
            <li key={e.id}>
              <ProjectButton
                id={e.id}
                onClick={props.onClickFolder}
                highlightFolder={props.activeFolder === e.id}
              >
                {e.title}
              </ProjectButton>
            </li>
          );
        })}
        <AddElement
          submitNewElement={props.submitNewProject}
          onChangeText={props.onChangeText}
          textInput={props.textInput}
          placeholderText="Add new project..."
          submitName="porjectsBarInput"
          todoStyle={false}
          onClickInput={props.onClickInput}
          activeInput={props.activeInput}
        />
      </List>
    </Navbar>
  );
};

export default Sidebar;
