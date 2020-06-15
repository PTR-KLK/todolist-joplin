import styled from "styled-components";

export const Navbar = styled.nav`
  position: ${(props) => (props.isFixed ? "fixed" : "static")};
  background: #3b4252;
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
  padding: 0 0 0 0.75rem;
  margin: 0;
`;

export const ListItem = styled.li`
  color: white;

  & > * {
    width: 100%;
    border: 0;
    background: none;
    color: white;
    cursor: pointer;
    padding: 0.25rem;
    text-align: left;
  }

  &:hover > button {
    color: #000;
    background: #9FCC2E;
  }

  &:active  {
    color: #000;
    background: #9FCC2E;
  }
`;
