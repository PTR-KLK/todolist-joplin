import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  padding: calc(1px + 0.875rem) calc(2px + 1.75rem) 0;
`;

export const SubmitTodo = styled.input`
  height: 1.5rem;
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
  }
`;

export const TextInput = styled.input`
  height: 1.375rem;
  width: 100%;
  padding: 0 0.875rem;
  margin: 0;
  font-size: 1.125rem;
  font-weight: normal;
  background: none;
  border: none;

  &:focus {
    outline: none;
  }
`;