import React from "react";
import TodosList from "./todosList";
import { Main, TodoSection } from "./list.style";

const List = ({ todoTree, listId, onClickCheckbox }) => {
  let searchObj = {};

  const selectList = (arr, id) => {
    arr.forEach((e) => {
      if (e.id === id) {
        searchObj = e;
      } else if (e.children) {
        selectList(e.children, id);
      }
    });

    return searchObj;
  };

  const renderList = (obj) => {
    return (
      <TodoSection key={`${obj.id}-todo`}>
        <h3>{obj.title}</h3>
        {obj.todos ? <TodosList data={obj} onClickCheckbox={onClickCheckbox} /> : null}
        {obj.children ? obj.children.map((el) => renderList(el)) : null}
      </TodoSection>
    );
  };

  return (
    <Main>
      {listId
        ? renderList(selectList(todoTree, listId))
        : todoTree.map((e) => renderList(e))}
    </Main>
  );
};

export default List;
