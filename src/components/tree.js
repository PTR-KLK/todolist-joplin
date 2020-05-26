import React from "react";

const Tree = (props) => {
  return (
    <>
      {props.todoTree.map((e) => {
        return (
          <section key={e.id}>
            <h3 id={e.id} onClick={props.onClickFolder}>
              {e.title}
            </h3>
            {e.children.map((el) => {
              return (
                <h4 id={el.id} key={el.id} onClick={props.onClickFolder}>
                  {el.title}
                </h4>
              );
            })}
          </section>
        );
      })}
    </>
  );
};

export default Tree;