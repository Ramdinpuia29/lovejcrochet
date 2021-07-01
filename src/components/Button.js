import styled from "styled-components";

const Button = ({ click, children }) => {
  return <ButtonTheme onClick={click}>{children}</ButtonTheme>;
};

const ButtonTheme = styled.button`
  font-size: 0.9rem;
  background: #00bef9;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #6cadb8;
  transition: all 0.2s ease-in;
  margin: 0 0.5rem;
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

export default Button;
