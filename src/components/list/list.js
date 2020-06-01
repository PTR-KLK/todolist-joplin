import React from "react";
import TodosList from "./todosList";

const List = ({ todoTree, listId }) => {

  let searchObj = {};

  const selectList = (arr, id) => {
    arr.forEach(e => {
      if(e.id === id) {
        searchObj = e;
      } else if(e.children){
          selectList(e.children,id);
      }
    })

    return searchObj;
  };

  const renderList = (obj) => {
    return (
      <section key={`${obj.id}-todo`}>
        <h3>{obj.title}</h3>
        {obj.todos ? <TodosList data={obj} /> : null}
        {obj.children ? obj.children.map((el) => renderList(el)) : null}
      </section>
    );
  };

  return listId
    ? renderList(selectList(todoTree,listId))
    : todoTree.map((e) => renderList(e));
};

export default List;
