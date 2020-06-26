import styled from "styled-components";
import { TrashIcon } from "react-line-awesome";

export const List = styled.ul`
  list-style: none;
  margin: 0 calc(2px + 0.875rem);
  padding: 0;

  & > * {
    &:not(:last-child) {
      border-bottom: 2px solid #434c5e;
      padding: calc(2px + 0.45rem);
    }

    &:last-child {
      padding: calc(2px + 0.45rem) calc(2px + 0.45rem) 0;
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
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.75rem;
  margin: 0 0.875rem;
  font-size: 1.125rem;
`;

export const DueDate = styled.p`
  text-align: center;
  margin: 0 0.45rem;
  font-size: 1.125rem;
`;

export const DeleteIcon = styled(TrashIcon)`
  color: #434c5e;
  cursor: pointer;
  padding: auto;
  font-size: 1.75rem;

  &:hover {
    color: #bf616a;
  }
`;
