import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function SignIn() {
  const { signIn } = useAuthContext();

  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(false);

  function handleSignIn() {
    if (!email || !password) {
      if (!email) {
        setEmailError(true);
      }

      if (!password) {
        setPasswordError(true);
      }

      return alert("Digite email e senha");
    }

    signIn({ email, password });
  }

  window.onkeydown = (e) => {
    const user = localStorage.getItem("@rocketmovies:user");

    if (e.key === "Enter" && !user) {
      if (e.target.nodeName === "A" || e.target.nodeName === "BUTTON") {
        return;
      }

      handleSignIn();
    }
  };

  return (
    <Container>
      <div>
        <header>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir</span>
        </header>

        <h2>Faça seu login</h2>

        <Form>
          <Input
            error={emailError}
            placeholder="Email"
            type="email"
            icon={FiMail}
            id="loginEmail"
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
            id="loginPassword"
            description="Informe sua senha"
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
          />

          <Button title="Entrar" onClick={handleSignIn} />
        </Form>

        <Link to="/signup">Criar conta</Link>
      </div>
      <Background />
    </Container>
  );
}
