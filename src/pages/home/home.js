import React from "react";
import { Container } from "./home.style";

const Home = (props) => {
  return (
    <Container>
      <h2>Number of Todos in database:</h2>
      <h3>{props.data[0].filter((e) => e.is_todo === 1).length}</h3>
    </Container>
  );
};

export default Home;
