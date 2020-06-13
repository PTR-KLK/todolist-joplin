import styled from "styled-components";
import { BarsIcon } from "react-line-awesome";

export const Container = styled.header`
  display: flex;
  align-items: center;
  background: #2e3440;
  color: #8fbcbb;
  width: 100vw;
  z-index: 2;
  border-bottom: 1px solid #8fbcbb;
`;

export const Title = styled.h2`
  padding 1rem 4rem 1rem 0;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding 1rem 0;
  }
`;

export const MenuIcon = styled(BarsIcon)`
  color: #8fbcbb;
  font-size: 2rem;
`;

export const MenuButton= styled.button`
  background: none;
  padding: 0;
  margin: 1rem;
  border: none;
  cursor: pointer;

  &:hover > * {
    color: #8fbcbb;
  }
`;
