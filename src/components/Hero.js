import styled from "styled-components";

import HeroText from "./HeroText";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <InnerWrapper>
      <Left>
        <HeroText />
      </Left>
      <CarouselWrapper>
        <Carousel />
      </CarouselWrapper>
    </InnerWrapper>
  );
};

export default Hero;

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
