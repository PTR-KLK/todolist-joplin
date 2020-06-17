import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0 calc(2px + 0.875rem) calc(2px + 0.875rem);
  padding: 0;
`;

export const Todo = styled.li`
  display: flex;
  align-items: center;
  padding: calc(2px + 0.875rem);
  border-bottom: 2px solid #434c5e;
`;

export const Checkbox = styled.input`
  height: 1.375rem;
  width: 1.375rem;
  cursor: pointer;
`;

export const Label = styled.label`
  margin: 0 0.875rem;
  font-size: 1.125rem;
`;

export const DueDate = styled.p`
  margin: 0 0.875rem 0 auto;
  font-size: 1.125rem;
`;

export const NewTodo = styled.form`
  display: flex;
  align-items: center;
  padding: calc(1px + 0.875rem);
`;

export const SubmitTodo = styled.input`
  height: 1.5rem;
  width: 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  background: #5e81ac;
  border: 1px solid #434c5e;
  font-weight: bold;
  color: #eceff4;

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
  background: #d8dee9;
  border-width 1px 1px 1px 0;
  border-style solid;
  border-color: #434c5e;

  &:focus {
    outline: 2px solid #bf616a;
  }
`;
