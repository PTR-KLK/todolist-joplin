import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0 0.875rem 0.875rem;
  padding: 0;
`;

export const Todo = styled.li`
  display: flex;
  align-items: center;
  padding: calc(1px + 0.875rem);
  border-bottom: 1px solid #434c5e;
`;

export const Checkbox = styled.input`
  &:checked:after{
    background: #295135;
  }
`;

export const Label = styled.label`
  margin: 0 0.875rem;
  font-size: 1.125rem;
`;

export const DueDate = styled.p`
  margin: 0 0.875rem 0 auto;
  font-size: 1.125rem;
`;