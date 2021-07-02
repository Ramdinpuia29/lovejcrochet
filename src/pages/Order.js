import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import Logo from "../components/Logo";
import Carousel from "../components/Carousel";
import Button from "../components/Button";

const products = [
  {
    id: 1,
    product: "Amigurumi",
    price: "400",
  },
  {
    id: 2,
    product: "Amigurumi Keychain",
    price: "200",
  },
  {
    id: 3,
    product: "Crochet Bandana",
    price: "300",
  },
  {
    id: 4,
    product: "Crochet Bralette",
    price: "600",
  },
  {
    id: 5,
    product: "Crochet Croptop",
    price: "1000",
  },
  {
    id: 6,
    product: "Friendship Bracelet",
    price: "200",
  },
  {
    id: 7,
    product: "Hand Bag",
    price: "500",
  },
];

const Order = () => {
  const [price, setPrice] = useState("400");

  const handleChange = (e) => {
    const value = e.target.value;
    const price = value.split(",");
    setPrice(price[1]);
  };

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <h4>What would you like to order?</h4>
      <Wrapper>
        <Left>
          <Carousel />
        </Left>
        <Right>
          <form action="">
            <SelectWrapper>
              <label>Select product</label>
              <select onChange={handleChange}>
                {products.map((product) => (
                  <option
                    key={product.id}
                    value={[product.product, product.price]}
                  >
                    {product.product}
                  </option>
                ))}
              </select>
            </SelectWrapper>
            <TextArea type="text" placeholder="Describe your order" />
          </form>
          <p>
            Approximate price: <strong>Rs {price}</strong>
          </p>
          <p>(Final price may differ depending on your customization)</p>
          <Link to="/orderplaced">
            <Button>Place my order</Button>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Order;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  svg {
    margin-left: 2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 90vw;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  border-radius: 2rem;
  box-shadow: 5px 5px 2rem rgba(0, 179, 249, 0.4);
`;

const Left = styled.div`
  height: 400px;
  width: 40%;
  background-color: aliceblue;
  max-height: 400px;
  border-radius: 2rem 0 0 2rem;
  overflow: hidden;

  img {
    height: 400px;
    width: 400px;
    border-radius: 2rem 0 0 2rem;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  /* flex-wrap: wrap; */
  padding: 2rem;
  height: 400px;
  background-color: aqua;
  border-radius: 0 2rem 2rem 0;

  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    --webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(15px);
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    border-radius: 2rem;
    width: 100%;
  }

  p {
    font-size: 0.9rem;
    text-align: center;
  }

  button {
    width: 100%;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  select {
    height: 2.5rem;
    border: none;
    background-color: rgba(0, 179, 249, 0.8);
    color: #fff;
    outline: none;
    border-radius: 1rem;
    padding: 0 1rem;
    line-height: 1.1;
  }

  option {
    margin-bottom: 1rem;
    background-color: rgba(0, 179, 249, 0.1);
  }
`;

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  background-color: #eee;
  border-radius: 1rem;
  padding: 1rem;
  border: none;
  outline: none;

  &:focus {
    ::placeholder {
      color: transparent;
    }
  }
`;
