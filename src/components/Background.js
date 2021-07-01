import styled from "styled-components";

import bg from "../assets/bg3.jpg";

const Background = ({ children }) => {
  return (
    <Container bg={bg}>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-image: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    --webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.4);
  } ;
`;

export default Background;
