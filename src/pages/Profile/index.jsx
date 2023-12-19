import { Container } from "./styles";

import { useRef } from "react";

import { Link } from "react-router-dom";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Profile() {
  const labelRef = useRef();

  function outlineOnLabel() {
    labelRef.current.style.outline = "2px solid var(--white)";
  }

  function disabledOutlineOnLabel() {
    labelRef.current.style.outline = "none";
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>
      <main>
        <form>
          <div className="image-container">
            <img
              src="https://github.com/DevMatheusMonteiro.png"
              alt="Foto de perfil Matheus Monteiro"
              title="Foto de perfil Matheus Monteiro"
            />
            <label ref={labelRef} htmlFor="upload-image">
              <span className="sr-only">
                Escolha uma imagem para seu perfil
              </span>
              <FiCamera />
              <input
                onBlur={disabledOutlineOnLabel}
                onFocus={outlineOnLabel}
                className="sr-only"
                type="file"
                id="upload-image"
                name="upload-image"
              />
            </label>
          </div>
          <div className="inputs-container">
            <Input
              type="text"
              description="Informe o seu nome"
              icon={FiUser}
              id="profileName"
              placeholder="Informe o seu nome"
            />
            <Input
              type="email"
              description="Informe o seu email"
              icon={FiMail}
              id="profileEmail"
              placeholder="Informe o seu email"
            />
            <Input
              type="password"
              description="Informe a sua senha atual"
              icon={FiLock}
              id="profileCurrentPassword"
              placeholder="Informe a sua senha atual"
            />
            <Input
              type="password"
              description="Informe a sua senha nova"
              icon={FiLock}
              id="profileNewPassword"
              placeholder="Informe a sua senha nova"
            />
          </div>
          <Button title="Salvar" />
        </form>
      </main>
    </Container>
  );
}
