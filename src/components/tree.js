import React from "react";
import { Navbar, List } from "./tree.style";

const Tree = (props) => {
  const renderTree = (arr, onClickFolder) => {
    return (
      <section>
        {arr.map((e) => {
          return (
            <List key={e.id}>
              <li>
                <button id={e.id} onClick={onClickFolder}>{e.title}</button>
              </li>
              {e.children ? renderTree(e.children, onClickFolder) : null}
            </List>
          );
        })}
      </section>
    );
  };

  return <Navbar>{renderTree(props.todoTree, props.onClickFolder)}</Navbar>;
};

export default Tree;
