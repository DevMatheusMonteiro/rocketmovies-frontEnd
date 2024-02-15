import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";

import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState(null);
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(false);

  async function handleSignUp() {
    try {
      if (!name || !password || !email) {
        if (!name) {
          setNameError(true);
        }

        if (!password) {
          setPasswordError(true);
        }

        if (!email) {
          setEmailError(true);
        }

        return alert("Informe todos os campos");
      }

      await api.post("/users", { name, email, password });
      alert("Cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não possível realizar o cadastro!");
      }
    }
  }

  window.onkeydown = (e) => {
    const user = localStorage.getItem("@rocketmovies:user");

    if (e.key === "Enter" && !user) {
      if (e.target.nodeName === "A" || e.target.nodeName === "BUTTON") {
        return;
      }

      handleSignUp();
    }
  };

  return (
    <Container>
      <div>
        <header>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir</span>
        </header>

        <h2>Crie sua conta</h2>

        <Form>
          <Input
            error={nameError}
            placeholder="Nome"
            type="text"
            icon={FiUser}
            id="registerName"
            description="Informe seu nome"
            onChange={(e) => {
              setName(e.target.value);
              setNameError(false);
            }}
            required
          />
          <Input
            error={emailError}
            placeholder="Email"
            type="email"
            icon={FiMail}
            id="registerEmail"
            description="Informe seu email"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
          />
          <Input
            error={passwordError}
            placeholder="Senha"
            type="password"
            icon={FiLock}
            id="registerPassword"
            description="Informe sua senha"
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
          />

          <Button title="Cadastrar" onClick={handleSignUp} />
        </Form>

        <Link to="/">
          <FiArrowLeft size={20} />
          Voltar para login
        </Link>
      </div>
      <Background />
    </Container>
  );
}
