import React from "react";
import { Link } from "react-router-dom";
import { Container, MenuIcon, MenuButton, SettingsIcon } from "./header.style";

const Header = (props) => {
  return (
    <Container>
      {props.buttonVisible ? (
        <MenuButton onClick={props.onClickMenu}>
          <MenuIcon />
        </MenuButton>
      ) : null}
      <h2>Joplin TODO List</h2>
      <Link to="/settings">
        <MenuButton>
          <SettingsIcon />
        </MenuButton>
      </Link>
    </Container>
  );
};

export default Header;
