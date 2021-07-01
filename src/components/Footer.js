import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>
        Crafted with care by{" "}
        <a href="https://www.instagram.com/ramdinpuia29/">RDP</a>
      </p>
      <p>
        Copyright &copy;{" "}
        <a href="https://www.instagram.com/love.jcrochet/">Love.j Crochet</a>
      </p>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;
  flex-wrap: wrap;

  p {
    font-size: 0.8rem;

    a {
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const Wrapper = styled.div``;
