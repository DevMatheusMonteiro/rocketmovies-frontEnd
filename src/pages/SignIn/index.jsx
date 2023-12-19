import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function SignIn({ icon: Icon, ...rest }) {
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
            placeholder="Email"
            type="email"
            icon={FiMail}
            id="loginEmail"
            description="Informe seu email"
          />
          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            id="loginPassword"
            description="Informe sua senha"
          />

          <Button title="Entrar" />
        </Form>

        <Link to="/signup">Criar conta</Link>
      </div>
      <Background />
    </Container>
  );
}
