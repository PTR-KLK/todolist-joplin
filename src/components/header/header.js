import React from "react";
import { Container, Title, MenuIcon, MenuButton } from "./header.style";

const Header = (props) => {
  return (
    <Container>
      {props.buttonVisible ? (
        <MenuButton onClick={props.onClickMenu}>
          <MenuIcon />
        </MenuButton>
      ) : null}
      <Title>Joplin TODO List</Title>
    </Container>
  );
};

export default Header;
