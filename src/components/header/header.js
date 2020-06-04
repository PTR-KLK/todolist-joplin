import React from "react";
import { Container } from "./header.style";

const Header = (props) => {
  return (
    <Container>
      <button onClick={props.onClickMenu}>Menu</button>
    </Container>
  );
};

export default Header;
