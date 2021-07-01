import { ReactComponent as LogoIcon } from "../assets/Logoxs.svg";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Container>
        <Link to="/">
          <LogoIcon />
        </Link>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Menu isOpen={isOpen}>
          <LinkWrapper>
            <MenuLink to="/products">Products</MenuLink>
            <MenuLink to="/myorders">My Orders</MenuLink>
            <Link to="/signin">
              <Button>Sign In</Button>
            </Link>
          </LinkWrapper>
        </Menu>
      </Container>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
  /* margin-top: -5rem; */

  svg {
    height: 8rem;
    width: inherit;

    @media screen and (max-width: 768px) {
      height: 6rem;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1 rgba(0, 0, 0, 0.07);
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    width: 100%;
    transition: max-height 0.3s ease-in-out;
    background-color: rgba(255, 255, 255, 0.9);

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      --webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.4);
    }
  } ;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #858586;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;

  &:hover {
    color: #00b3f9;
    background: #e0f6fe;
    text-decoration: none;
  }
`;

const Button = styled.button`
  font-size: 0.8rem;
  background: #00bef9;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #6cadb8;
  transition: all 0.2s ease-in;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 17px 16px -11px #6cadb8;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 0.5rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 28px;
    background: #00bef9;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
