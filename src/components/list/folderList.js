import React from "react";
import TodosList from "./todosList";

const FolderList = ({data}) => {
  return (
    data.children.map((el) => {
      return (
        <section key={el.id}>
          <h3>{el.title}</h3>
          <TodosList data={el} />
        </section>
      );
    })
  );
}

export default FolderList;