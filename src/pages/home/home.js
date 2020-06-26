import React from "react";
import { Container } from "./home.style";

const Home = (props) => {
  return (
    <Container>
      <h2>Number of Projects in database:</h2>
      <h3>{props.data.length}</h3>
    </Container>
  );
};

export default Home;
