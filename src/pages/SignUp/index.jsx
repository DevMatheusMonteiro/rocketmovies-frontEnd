import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function SignUp({ icon: Icon, ...rest }) {
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
            placeholder="Nome"
            type="text"
            icon={FiUser}
            id="registerName"
            description="Informe seu nome"
          />
          <Input
            placeholder="Email"
            type="email"
            icon={FiMail}
            id="registerEmail"
            description="Informe seu email"
          />
          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            id="registerPassword"
            description="Informe sua senha"
          />

          <Button title="Entrar" />
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
