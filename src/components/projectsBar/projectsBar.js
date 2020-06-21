import React from "react";
import {
  Navbar,
  List,
  ProjectLi,
  ProjectButton,
  DeleteProject,
} from "./projectsBar.style";
import AddElement from "..//addElement/addElement";

const Sidebar = (props) => {
  return (
    <Navbar isFixed={props.isFixed}>
      <List>
        {props.todoTree.map((e) => {
          return (
            <ProjectLi
              key={e.id}
              id={e.id}
              highlightFolder={props.activeFolder === e.id}
            >
              <ProjectButton
                onClick={props.onClickFolder}
                highlightFolder={props.activeFolder === e.id}
              >
                {e.title}
              </ProjectButton>
              <DeleteProject
                highlightFolder={props.activeFolder === e.id}
                onClick={props.onClickDeleteFolder}
              >
                X
              </DeleteProject>
            </ProjectLi>
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
