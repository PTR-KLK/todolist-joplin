import React from "react";
import { Container, TextInput } from "./form.style";

const Form = (props) => {
  return (
    <Container>
      <label htmlFor="apiKey">Api key from Joplin app:</label>
      <TextInput type="text" name="apiKey" value={props.token} onChange={props.handleChange} />
      <button onClick={props.handleClick}>OK</button>
    </Container>
  );
};

export default Form;
