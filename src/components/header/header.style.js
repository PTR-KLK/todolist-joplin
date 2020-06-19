import styled from "styled-components";
import { BarsIcon } from "react-line-awesome";

export const Container = styled.header`
  display: flex;
  align-items: center;
  background: #3b4252;
  color: #eceff4;
  width: 100vw;
  z-index: 2;
`;

export const Title = styled.h2`
  padding 1rem 4rem 1rem 0;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding 1rem 0;
  }
`;

export const MenuIcon = styled(BarsIcon)`
  color: #eceff4;
  font-size: 2rem;
`;

export const MenuButton= styled.button`
  background: none;
  padding: 0;
  margin: 1rem;
  border: none;
  cursor: pointer;

  &:hover > * {
    color: #ebcb8b;
  }

  &:focus {
    outline: 1px solid #ebcb8b;
  }
`;
