import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

export default function MiaudeloDetailPage() {
  const { id } = useParams();
  const [miaudelo, setMiaudelo] = useState(null);
  const [fotos, setFotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMiaudeloDetail = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/meowdels/${id}`
        );
        setMiaudelo(response.data.miaudelo);
        setFotos(response.data.fotos);
      } catch (error) {
        console.error("Erro ao buscar detalhes do miaudelo:", error.message);
        setError(
          "Houve um erro ao carregar os detalhes. Por favor, tente novamente mais tarde."
        );
      }
    };

    fetchMiaudeloDetail();
  }, [id]);

  return (
    <PageContainer>
      {error && <ErrorContainer>{error}</ErrorContainer>}
      {miaudelo && (
        <DetailContainer>
          <LargeImage src={miaudelo.main_photo_url} alt={miaudelo.name} />
          <InfoContainer>
            <Name>{miaudelo.name}</Name>
            <ContactInfo>
              <ContactTitle>Informações para contato:</ContactTitle>
              <ContactDetail><strong>Email:</strong> {miaudelo.owner_email}</ContactDetail>
              <ContactDetail><strong>Telefone:</strong> {miaudelo.owner_telefone}</ContactDetail>
            </ContactInfo>
            <PhotosContainer>
              {fotos.map((foto) => (
                <Thumbnail key={foto.id} src={foto.url} alt={`Foto de ${miaudelo.name}`} />
              ))}
            </PhotosContainer>
          </InfoContainer>
        </DetailContainer>
      )}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100vw;
  padding: 20px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
`;

const LargeImage = styled.img`
  width: 60%;
  object-fit: cover;
  border-radius: 8px;
`;

const InfoContainer = styled.div`
  width: 40%;
  padding: 20px;
`;

const Name = styled.h1`
  font-size: 36px;
  color: #333;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
`;

const ContactTitle = styled.h3`
  font-size: 20px;
  color: #444;
`;

const ContactDetail = styled.p`
  font-size: 16px;
  color: #555;
  margin: 5px 0;
`;

const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const Thumbnail = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 4px;
  object-fit: cover;
`;

const ErrorContainer = styled.div`
  color: red;
  text-align: center;
  width: 100%;
  padding: 20px;
`;
