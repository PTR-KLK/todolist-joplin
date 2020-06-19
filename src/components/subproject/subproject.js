import React from "react";
import Todos from "../todos/todos";
import { Section, Title, Checkbox, Label } from "./subproject.style";
import AddElement from "../addElement/addElement";

const Subproject = (props) => {
  const renderList = (obj) => {
    return (
      <Section key={`${obj.id}-todo`}>
        <Title>
          <Checkbox type="checkbox" name={obj.id} />
          <Label htmlFor={obj.id}>{obj.title}</Label>
        </Title>
        <AddElement
          submitNewElement={props.submitNewTodo}
          onChangeText={props.onChangeText}
          textInput={props.textInput}
          placeholderText="Add new task..."
          submitName={obj.id}
          todoStyle={true}
          onClickInput={props.onClickInput}
          activeInput={props.activeInput}
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
