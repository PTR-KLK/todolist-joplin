import React from "react";
import { Navbar, List, ListItem } from "./projectsBar.style";

const Sidebar = (props) => {
  const renderTree = (arr, onClickFolder) => {
    return (
      <section>
        {arr.map((e) => {
          return (
            <List key={e.id}>
              <ListItem>
                <button id={e.id} onClick={onClickFolder}>
                  {e.title}
                </button>
              </ListItem>
              {e.children ? renderTree(e.children, onClickFolder) : null}
            </List>
          );
        })}
      </section>
    );
  };

  return (
    <Navbar>
      {renderTree(props.todoTree, props.onClickFolder)}
    </Navbar>
  );
};

export default Sidebar;
