import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function AddMiaudeloButton() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/new-miaudelo');
  };

  return (
    <Button onClick={handleButtonClick}>
      Adicionar Miaudelo
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  border-radius: 50px;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;
