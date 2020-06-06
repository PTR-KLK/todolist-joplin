import React from "react";
import TodosList from "./todosList";
import { Container, TodoSection, TodoTitle } from "./list.style";

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
        <TodoTitle>{obj.title}</TodoTitle>
        {obj.todos ? <TodosList data={obj} onClickCheckbox={onClickCheckbox} /> : null}
        {obj.children ? obj.children.map((el) => renderList(el)) : null}
      </TodoSection>
    );
  };

  return (
    <Container>
      {listId
        ? renderList(selectList(todoTree, listId))
        : todoTree.map((e) => renderList(e))}
    </Container>
  );
};

export default List;
