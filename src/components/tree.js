import React from "react";

const Tree = (props) => {
  const renderTree = (arr, onClickFolder) => {
    return (
      <section>
        {arr.map((e) => {
          return (
            <ul key={e.id}>
              <li className={e.id} onClick={onClickFolder}>
                {e.title}
              </li>
              {e.children ? renderTree(e.children, onClickFolder) : null}
            </ul>
          );
        })}
      </section>
    );
  };

  return renderTree(props.todoTree, props.onClickFolder);
};

export default Tree;
