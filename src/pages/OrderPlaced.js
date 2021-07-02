import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Logo from "../components/Logo";

const OrderPlaced = () => {
  const [timeLeft, setTimeLeft] = useState(7);

  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0 || timeLeft < 0) {
      setTimeLeft(0);
      history.push("/");
      return null;
    }

    return () => clearTimeout(timer);
  }, [timeLeft, history]);

  return (
    <Container>
      <div>
        <Logo />
      </div>
      <TextContainer>
        <h2>Thank You!</h2>
        <h4>Your order has been placed succesfully!</h4>
        <p>Kindly wait for the admin for further information</p>
      </TextContainer>
      <CountContainer>
        <p>You will be redirected to the Home page in {timeLeft} seconds</p>
      </CountContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  svg {
    margin-left: 2rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    margin-top: 2rem;
  }

  h4 {
    text-align: center;
    margin-top: 2rem;
  }

  p {
    text-align: center;
    margin-top: 2rem;
  }
`;

const CountContainer = styled.div`
  margin-top: 4rem;
  p {
    text-align: center;
    font-size: 0.9rem;
  }
`;

export default OrderPlaced;
