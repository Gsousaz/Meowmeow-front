import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function MiaudeloRegistrationPage() {
  const [name, setName] = useState("");
  const [mainPhotoLink, setMainPhotoLink] = useState("");
  const [fotoLinks, setFotoLinks] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      setError("Você precisa estar logado para registrar um miaudelo.");
      return;
    }

    try {
      const miaudeloData = {
        nome: name,
        url: mainPhotoLink,
        fotos: fotoLinks,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/meowdels`,
        miaudeloData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        setSuccess(true);
      } else {
        setError("Houve um erro ao registrar. Por favor, tente novamente.");
      }
    } catch (error) {
      console.log(error.data);
      setError("Houve um erro ao registrar. Por favor, tente novamente.");
    }
  };

  const addFotoLink = () => {
    setFotoLinks([...fotoLinks, ""]);
  };

  const updateFotoLink = (index, link) => {
    const updatedLinks = [...fotoLinks];
    updatedLinks[index] = link;
    setFotoLinks(updatedLinks);
  };

  return (
    <PageContainer>
      {error && <ErrorContainer>{error}</ErrorContainer>}
      {success ? (
        <SuccessMessage>
          Seu miaudelo foi registrado com sucesso!
        </SuccessMessage>
      ) : (
        <FormContainer onSubmit={handleFormSubmit}>
          <Input
            type="text"
            placeholder="Nome do Miaudelo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Link da foto principal"
            value={mainPhotoLink}
            onChange={(e) => setMainPhotoLink(e.target.value)}
          />
          {fotoLinks.map((link, index) => (
            <Input
              key={index}
              type="text"
              placeholder={`Link da foto ${index + 1}`}
              value={link}
              onChange={(e) => updateFotoLink(index, e.target.value)}
            />
          ))}
          <AddLinkButton type="button" onClick={addFotoLink}>
            Adicionar link de outra foto
          </AddLinkButton>
          <SubmitButton type="submit">Registrar Miaudelo</SubmitButton>
        </FormContainer>
      )}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  margin-top: 80px;
  width: 100vw;
  padding: 20px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const ErrorContainer = styled.div`
  color: red;
  text-align: center;
  width: 100%;
  padding: 20px;
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
  width: 100%;
  padding: 20px;
`;

const AddLinkButton = styled.button`
  margin: 10px 0;
  padding: 8px 12px;
  background-color: #ddd;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #bbb;
  }
`;
