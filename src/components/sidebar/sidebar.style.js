import styled from "styled-components";

export const Navbar = styled.nav`
  position: ${(props) => (props.isFixed ? "fixed" : "static")};
  background: #2e3440;
  height: 100%;
  width: 33%;

  @media (min-width: 768px) {
    width: 15%;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavButton = styled.button`
  padding: 1rem 0;
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #8fbcbb;
  font-size: 1.25rem;
  width: 100%;
  
  & > * {
    font-size: 1.75rem;
  }

  &:hover {
    background: #8fbcbb;
    color: #2e3440;

    & > * {
      color: #2e3440;
    }
  }

  &:focus {
    background: #3b4252;
    color: #ebcb8b;
    outline: 1px solid #ebcb8b;

    & > * {
      color: #ebcb8b;
    }
  }

`;
