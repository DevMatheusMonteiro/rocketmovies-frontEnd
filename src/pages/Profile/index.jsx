import { useRef, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import api from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container } from "./styles";

import { Link } from "react-router-dom";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Profile() {
  const { user, updateProfile } = useAuthContext();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/file/${user.avatar}`
    : avatarPlaceholder;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState();

  const labelRef = useRef();

  function handleUpdate() {
    if (
      (!name && !email && !newPassword && !oldPassword && !avatarFile) ||
      (!newPassword &&
        !oldPassword &&
        !avatarFile &&
        name === user.name &&
        email === user.email)
    ) {
      return;
    }

    const update = {
      name: !name ? user.name : name,
      email: !email ? user.email : email,
      password: newPassword,
      old_password: oldPassword,
    };

    if (!name) {
      setName(update.name);
    }

    if (!email) {
      setEmail(update.email);
    }

    Object.assign(user, update);

    updateProfile({ user, avatarFile });
  }

  function handleUpdateAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  window.onkeydown = (e) => {
    const { pathname } = window.location;

    if (
      pathname !== "/profile" ||
      e.target.nodeName === "A" ||
      e.target.nodeName === "BUTTON" ||
      e.target.id === "upload-image"
    ) {
      return;
    }

    if (e.key === "Enter") {
      handleUpdate();
    }
  };

  function outlineOnLabel() {
    labelRef.current.style.outline = "2px solid var(--white)";
  }

  function disabledOutlineOnLabel() {
    labelRef.current.style.outline = "none";
  }

  return (
    <Container>
      <header>
        <Link to={-1}>
          <FiArrowLeft />
          Voltar
        </Link>
      </header>
      <main>
        <form>
          <div className="image-container">
            <img
              src={avatar}
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
                onChange={handleUpdateAvatar}
              />
            </label>
          </div>
          <div className="inputs-container">
            <Input
              value={name}
              type="text"
              description="Informe o seu nome"
              icon={FiUser}
              id="profileName"
              placeholder="Informe o seu nome"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              value={email}
              type="email"
              description="Informe o seu email"
              icon={FiMail}
              id="profileEmail"
              placeholder="Informe o seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              description="Informe a sua senha atual"
              icon={FiLock}
              id="profileCurrentPassword"
              placeholder="Informe a sua senha atual"
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <Input
              type="password"
              description="Informe a sua senha nova"
              icon={FiLock}
              id="profileNewPassword"
              placeholder="Informe a sua senha nova"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <Button title="Salvar" onClick={handleUpdate} />
        </form>
      </main>
    </Container>
  );
}
