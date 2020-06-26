import styled from "styled-components";

export const SubmitForm = styled.form`
  ${(props) =>
    props.todoStyle
      ? `display: flex;
  align-items: center;
  padding: calc(1px + 0.875rem) calc(2px + 1rem) 0;`
      : `display: flex;
  align-items: center;
  padding: 0 0.5rem;`}
`;

export const SubmitBtn = styled.input`
  ${(props) =>
    props.todoStyle
      ? `height: 1.5rem;
    width: 1.5rem;
    font-size: 1.25rem;
    cursor: pointer;
    background: none;
    border: none;
    font-weight: bold;
    color: #434c5e;
  
    &:hover {
      background: #8fbcbb;
      color: #2e3440;
    }`
      : `height: 1.5rem;
    width: 1.5rem;
    font-size: 1.25rem;
    cursor: pointer;
    background: none;
    border: none;
    font-weight: bold;
    color: #eceff4;
  
    &:hover {
      color: #ebcb8b;
    }`}
`;

export const SubmitText = styled.input`
  ${(props) =>
    props.todoStyle
      ? `height: 1.375rem;
    width: 100%;
    padding: 0 0.875rem;
    margin: 0;
    font-size: 1.125rem;
    font-weight: normal;
    background: none;
    border: none;
  
    &:focus {
      outline: none;
    }`
      : `height: 1.375rem;
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 1.125rem;
    font-weight: normal;
    color: #eceff4;
    background: none;
    border: none;
  
    &:focus {
      outline: none;
    }`}
`;