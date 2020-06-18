import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0 calc(2px + 0.875rem);
  padding: 0;

  & > * {
    &:not(:last-child) {
      border-bottom: 2px solid #434c5e;
      padding: calc(2px + 0.875rem);
    }

    &:last-child {
      padding: calc(2px + 0.875rem) calc(2px + 0.875rem) 0;
    }
  }
`;

export const Todo = styled.li`
  display: flex;
  align-items: center;
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
