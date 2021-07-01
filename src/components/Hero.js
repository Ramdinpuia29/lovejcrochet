import styled from "styled-components";

import bg from "../assets/bg3.jpg";
import HeroText from "./HeroText";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <CarouselWrapper>
            <Carousel />
          </CarouselWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-image: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    --webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.4);
  } ;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Left = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  } ;
`;

const CarouselWrapper = styled.div`
  width: 60%;
  min-width: 400px;
  border-radius: 2rem;

  img {
    height: 400px;
    width: 400px;
    border-radius: 2rem;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 768px) {
    display: none;
    /* width: 100%; */
  } ;
`;
