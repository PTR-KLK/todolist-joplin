import React from "react";

import { SubmitForm, SubmitBtn, SubmitText } from "./addElement.style";

function AddElement(props) {
  return (
    <SubmitForm
      onSubmit={props.submitNewElement}
      name={props.submitName}
      todoStyle={props.todoStyle}
      onClick={props.onClickInput}
    >
      <SubmitBtn type="submit" value="+" todoStyle={props.todoStyle} />
      <SubmitText
        type="text"
        placeholder={props.placeholderText}
        onChange={props.onChangeText}
        value={props.activeInput === props.submitName ? props.textInput : ""}
        todoStyle={props.todoStyle}
      />
    </SubmitForm>
  );
}

export default AddElement;
