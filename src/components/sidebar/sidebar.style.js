import styled from "styled-components";

export const Navbar = styled.nav`
  position: ${props => props.isFixed ? 'fixed' : 'static'};
  background: #295135;
  height: 100%;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0 1rem;
  margin: 0;
`;

export const ListItem = styled.li`
  color: white;

  & > * {
    border: none;
    background: none;
    color: white;
  }

  &:hover > * {
    color: #9FCC2E;
  }
`;
