import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import AddMiaudeloButton from "../../assets/AddMiaudeloButton";

export default function HomePage() {
  const [miaudelos, setMiaudelos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMiaudelos = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/meowdels`
        );
        setMiaudelos(response.data);
      } catch (error) {
        console.error("Erro ao buscar miaudelos:", error.message);
        setError(
          "Houve um erro ao carregar os miaudelos. Por favor, tente novamente mais tarde."
        );
      }
    };

    fetchMiaudelos();
  }, []);

  return (
    <PageContainer>
      {error && <ErrorContainer>{error}</ErrorContainer>}
      {miaudelos.map((miaudelo) => (
        <Card key={miaudelo.id}>
          <Image src={miaudelo.main_photo_url} alt={miaudelo.name} />
          <Name>{miaudelo.name}</Name>
          <MoreInfoLink href={`/miaudelo/${miaudelo.id}`}>
            Mais informações
          </MoreInfoLink>
        </Card>
      ))}
      <AddMiaudeloButton></AddMiaudeloButton>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  margin-top: 100px;
  display: flex;    
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f7f7f7;
`;

const Card = styled.div`
  margin: 20px;
  width: 200px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 4px;
  object-fit: cover;
`;

const Name = styled.h2`
  margin-top: 10px;
  font-size: 18px;
  color: #333;
`;

const MoreInfoLink = styled.a`
  margin-top: 15px;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #555;
  }
`;

const ErrorContainer = styled.div`
  color: red;
  margin: 20px;
  text-align: center;
`;
