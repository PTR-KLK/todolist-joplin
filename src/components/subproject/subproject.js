import React from "react";
import Todos from "../todos/todos";
import { Section, Title, Checkbox, Label } from "./subproject.style";
import NewTodo from "../newTodo/newTodo";

const Subproject = (props) => {
  const renderList = (obj) => {
    return (
      <Section key={`${obj.id}-todo`}>
        <Title>
          <Checkbox type="checkbox" name={obj.id} />
          <Label htmlFor={obj.id}>{obj.title}</Label>
        </Title>
        <NewTodo
          submitNewTodo={props.submitNewTodo}
          onChangeText={props.onChangeText}
          newTodoText={props.newTodoText}
          submitName={obj.id}
        />
        {obj.todos ? (
          <Todos data={obj} onClickCheckbox={props.onClickCheckbox} />
        ) : null}
        {obj.children ? obj.children.map((el) => renderList(el)) : null}
      </Section>
    );
  };

  return renderList(props.listObj);
};

export default Subproject;
