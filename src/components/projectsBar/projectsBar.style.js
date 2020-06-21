import styled from "styled-components";

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
  background: ${props => props.highlightFolder ? "#5e81ac" : "none"};
  display: flex; 
  justify-content: space-between;
  align-items: stretch;

  &:hover {
    background: #5e81ac;
  }

  & > *:not(:first-child) {
    display: none;
  }

  &:hover > *:not(:first-child) {
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
  color: ${props => props.highlightFolder ? "#ebcb8b" : "#eceff4"};
  padding: 0;
  margin: 0;

  &:focus {
    outline: 1px solid #ebcb8b;
  }

`;

export const DeleteProject = styled.button`
  color: #ebcb8b;
  font-weight: bolder;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin: 0 0 0 1rem;
`;
