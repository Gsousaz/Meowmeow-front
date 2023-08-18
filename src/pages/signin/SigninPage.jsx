import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/signin`,
        {
          email,
          password,
        }
      );

      if (response.data) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user);
        navigate("/home");
      }
    } catch (error) {
      alert(error.response ? error.response.data : error.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
        <StyledLink onClick={() => navigate("/signup")}>
          Novo por aqui? Crie sua conta agora!
        </StyledLink>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #f7f7f7, #000);
`;

const Form = styled.form`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #e1e1e1;
  background-color: #fff;
  color: #000;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #333;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #555;
  }
`;

const StyledLink = styled.a`
  width: 100%;
  color: #333;
  margin-top: 15px;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #555;
  }
`;
