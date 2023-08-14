import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const Header = styled.header`
  width: 100%;
  padding: 15px 30px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const SiteName = styled.h1`
  font-family: "Niconne", cursive;
  font-size: 2.5rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    animation: ${bounce} 1s;
  }

  i {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;

export default function MeowHeader() {
  return (
    <Header>
      <SiteName>
        <i className="fas fa-cat"></i>
        MeowMeow
      </SiteName>
    </Header>
  );
}
