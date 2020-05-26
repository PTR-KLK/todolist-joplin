import React from "react";

const Form = (props) => {
  return (
    <>
      <input type="text" value={props.token} onChange={props.handleChange} />
      <button onClick={props.handleClick}>OK</button>
    </>
  );
};

export default Form;
