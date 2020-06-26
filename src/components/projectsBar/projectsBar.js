import React from "react";
import {
  Navbar,
  List,
  ProjectLi,
  ProjectButton,
  DeleteIcon,
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
              <DeleteIcon onClick={props.onClickDeleteFolder} />
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
