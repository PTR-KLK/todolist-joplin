import React from "react";
import { Navbar, List } from "./tree.style";
import { CaretSquareRightIcon } from 'react-line-awesome'


const Tree = (props) => {
  const renderTree = (arr, onClickFolder) => {
    return (
      <section>
        {arr.map((e) => {
          return (
            <List key={e.id}>
              <li>
                <button id={e.id} onClick={onClickFolder}><CaretSquareRightIcon />{e.title}</button>
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
