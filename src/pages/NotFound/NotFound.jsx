import React from 'react';
import styled from 'styled-components';

export default function NotFound() {
  return (
    <NotFoundContainer>
      <ErrorText>Oops!</ErrorText>
      <Description>Desculpe, mas a página que você está procurando não foi encontrada. Verifique o endereço e tente novamente.</Description>
      <CatIcon className="fas fa-cat"></CatIcon>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #f7f7f7, #000); 
`;

const ErrorText = styled.h1`
  font-family: 'Niconne', cursive;
  font-size: 3rem;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #ddd;
  margin-top: 20px;
  text-align: center;
  width: 70%;
  line-height: 1.5;
`;

const CatIcon = styled.i`
  font-size: 4rem;
  color: #ffffff;
  margin-top: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
