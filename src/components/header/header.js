import React from "react";
import { Container } from "./header.style";
import { BarsIcon } from "react-line-awesome";

const Header = (props) => {
  return (
    <Container>
      {props.buttonVisible ? (
        <button onClick={props.onClickMenu}>
          <BarsIcon />
        </button>
      ) : null}
      Joplin TODO List
    </Container>
  );
};

export default Header;
