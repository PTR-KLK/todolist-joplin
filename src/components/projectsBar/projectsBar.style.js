import styled from "styled-components";
import { TrashIcon } from "react-line-awesome";

export const Navbar = styled.nav`
  position: ${(props) => (props.isFixed ? "fixed" : "static")};
  background: #4c566a;
  left: 33%;
  height: 100%;
  width: 67%;
  padding: 0;

  @media (min-width: 768px) {
    left: 15%;
    width: 30%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ProjectLi = styled.li`
  padding: 0.5rem calc(0.5rem + 6px);
  background: ${(props) => (props.highlightFolder ? "#5e81ac" : "none")};
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  &:hover {
    background: #5e81ac;
  }

  & > button:not(:first-child) {
    display: none;
  }

  &:hover > button:not(:first-child) {
    display: block;
  }
`;

export const ProjectButton = styled.button`
  display: flex;
  justify-items: flex-start;
  width: 100%;
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) => (props.highlightFolder ? "#ebcb8b" : "#eceff4")};
  padding: 0;
  margin: 0;

  &:focus {
    outline: 1px solid #ebcb8b;
  }
`;

export const DeleteIcon = styled(TrashIcon)`
  cursor: pointer;
  color: #eceff4;
  padding: auto;
  font-size: 1rem;

  &:hover {
    color: #ebcb8b;
  }
`;
