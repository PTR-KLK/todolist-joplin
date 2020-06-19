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

export const ProjectButton = styled.button`
  padding: 0.5rem calc(0.5rem + 6px);
  cursor: pointer;
  background: ${props => props.highlightFolder ? "#5e81ac" : "none"};
  color: ${props => props.highlightFolder ? "#ebcb8b" : "#eceff4"};
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
  width: 100%;

  & > * {
    font-size: 1.75rem;
  }

  &:hover {
    background: #5e81ac;
  }

  &:focus {
    background: #5e81ac;
    color: #ebcb8b;
    outline: 1px solid #ebcb8b;
  }

`;
