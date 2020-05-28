import React from "react";
import TodosList from "./todosList";
import FolderList from "./folderList";

const List = ({ todoTree, listId }) => {
  
  return listId ? (
    todoTree.find((e) => e.id === listId) ? (
      <FolderList data={todoTree.find((e) => e.id === listId)} />
    ) : (
      <TodosList
        data={todoTree
          .find((e) => e.children.find((el) => el.id === listId))
          .children.find((el) => el.id === listId)}
      />
    )
  ) : (
    todoTree.map((e) => {
      return (
        <section key={e.id}>
          <FolderList data={e} />
        </section>
      );
    })
  );
};

export default List;
