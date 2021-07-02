import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import Button from "./Button";

const Form = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Logo />
        </Link>
        <InnerWrapper>
          <form>
            <InputWrapper>
              <Label>Email</Label>
              <Input type="text" placeholder="Email Address" />
            </InputWrapper>
            <InputWrapper>
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
            </InputWrapper>
            <InputWrapper>
              <Button click={(e) => e.preventDefault()}>Sign in</Button>
            </InputWrapper>
          </form>
        </InnerWrapper>
        <p>
          Don't have account? <Link to="/signup">Sign up</Link>
        </p>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 0.9rem;
    margin-top: 2rem;
  }

  a {
    text-decoration: none;
    color: #00b3f9;
  }
  svg {
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 5px 5px 2rem rgba(0, 179, 249, 0.4);
  background-color: rgba(255, 255, 255, 0.1);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    --webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(15px);
    background-color: rgba(255, 255, 255, 0.4);
  } ;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  margin: 2rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #858586;
`;

const Input = styled.input`
  height: 2rem;
  border: none;
  background-color: #eee;
  padding: 1.5rem 1rem;
  width: 15rem;
  border-radius: 1rem;
  outline: none;
`;

export default Form;
