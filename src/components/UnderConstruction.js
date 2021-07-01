import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";

const UnderConstruction = () => {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <h3>This page is under construction. Please come back soon! 😉</h3>
    </Container>
  );
};

export default UnderConstruction;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  svg {
    margin-left: 2rem;
  }

  h3 {
    margin-top: 15rem;
    text-align: center;
  }
`;
