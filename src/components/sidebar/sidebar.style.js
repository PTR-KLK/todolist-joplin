import styled from "styled-components";

export const Navbar = styled.nav`
  position: ${props => props.isFixed ? 'fixed' : 'static'};
  background: #295135;
  height: 100%;
  width: 30%;
  padding: 0;
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

  &:hover > * {
    color: #000;
    background: #9FCC2E;
  }
`;
