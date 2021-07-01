import { Carousel as Caro } from "react-bootstrap";

import image1 from "../assets/carousel1.jpg";
import image2 from "../assets/carousel2.jpg";
import image3 from "../assets/carousel3.jpg";

const Carousel = () => {
  return (
    <Caro controls={false} indicators={false}>
      <Caro.Item interval={5000}>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Caro.Item>
      <Caro.Item interval={5000}>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Caro.Item>
      <Caro.Item interval={5000}>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Caro.Item>
    </Caro>
  );
};

export default Carousel;
