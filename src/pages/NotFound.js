import styled from "styled-components";

const NotFound = () => {
  return (
    <Container>
      <h1>404 NOT FOUND :(</h1>
      <a href="/">Back to Home</a>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default NotFound;
