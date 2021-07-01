import { Link } from "react-router-dom";
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h5>Handmade with Love</h5>
      <h1>Amigurumi,</h1>
      <h1>Hand Bags,</h1>
      <h1>Friendship Bracelets,</h1>
      <h1>And more...</h1>
      <BtnContainer>
        <Link to="/order">
          <button>Order yours now!</button>
        </Link>
      </BtnContainer>
    </Container>
  );
};

export default HeroText;

const BtnContainer = styled.div`
  margin-top: 2rem;

  button {
    background-color: #00b3f9;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #6cadb8;
    transition: all 0.3s ease-in;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 17px 16px -11px #6cadb8;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;

  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 900;

    &:nth-of-type(1) {
      font-weight: 400;
      color: #663046;
    }
    &:nth-of-type(2) {
      font-weight: 500;
      color: #601a35;
    }
    &:nth-of-type(3) {
      font-weight: 600;
      color: #4d0f28;
    }
    &:nth-of-type(4) {
      font-weight: 700;
      color: #2c041c;
    }
  }
`;
