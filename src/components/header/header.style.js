import styled from "styled-components";
import { BarsIcon, CogIcon } from "react-line-awesome";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0E402D;
  color: white;
  width: 100vw;
  z-index: 2;
`;

export const MenuIcon = styled(BarsIcon)`
  color: white;
  font-size: 2rem;
`;

export const SettingsIcon = styled(CogIcon)`
  color: white;
  font-size: 2rem;
`;

export const MenuButton= styled.button`
  background: none;
  border: none;
  border-radius: 0.25rem;

  &:hover > * {
    color: #9FCC2E;
  }
`;
