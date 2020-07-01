import React from "react";
import Todos from "../todos/todos";
import { Section, Title, Checkbox, Label } from "./subproject.style";
import ProjectManage from "../projectManage/porejctManage";

const Subproject = (props) => {
  const renderList = (obj) => {
    return (
      <Section key={`${obj.id}-todo`}>
        <Title>
          <Checkbox type="checkbox" name={obj.id} />
          <Label htmlFor={obj.id}>{obj.title}</Label>
        </Title>
        <ProjectManage
          onChangeText={props.onChangeText}
          textInput={props.textInput}
          submitName={obj.id}
          onClickInput={props.onClickInput}
          activeInput={props.activeInput}
          submitNewTodo={props.submitNewTodo}
          submitNewSubproject={props.submitNewSubproject}
        />
        {obj.todos ? (
          <Todos
            data={obj}
            onClickCheckbox={props.onClickCheckbox}
            onClickDeleteTodo={props.onClickDeleteTodo}
          />
        ) : null}
        {obj.children ? obj.children.map((el) => renderList(el)) : null}
      </Section>
    );
  };

  return renderList(props.listObj);
};

export default Subproject;
