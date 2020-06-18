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
  padding: 0;
  margin: 0;
`;

export const ProjectButton = styled.button`
  padding: 0.5rem calc(0.5rem + 6px);
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #8fbcbb;
  font-size: 1rem;
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
    outline: 1px solid #3b4252;
    border-top: 1px solid #ebcb8b;
    border-bottom: 1px solid #ebcb8b;

    & > * {
      color: #ebcb8b;
    }
  }

`;
