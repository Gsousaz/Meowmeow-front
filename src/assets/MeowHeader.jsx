import React from 'react';
import styled, { keyframes } from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function MeowHeader() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  }

  return (
    <Header>
      <SiteName onClick={() => handleNavigation("/home")}>
        <i className="fas fa-cat"></i>
        MeowMeow
      </SiteName>
      <div>
        <Button onClick={() => handleNavigation("/signup")}>Cadastro</Button>
        <Button onClick={() => handleNavigation("/signin")}>Login</Button>
      </div>
    </Header>
  );
}

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
  flex-direction: column;  
`;

const SiteName = styled.h1`
  font-family: "Niconne", cursive;
  font-size: 2.5rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    animation: ${bounce} 1s;
  }

  i {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 5px 15px;
  color: #ffffff;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffffff;
    color: #000;
  }
`;