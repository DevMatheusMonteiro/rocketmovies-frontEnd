import { useAuthContext } from "../../hooks/useAuthContext";
import api from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container } from "./styles";

import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";

import { Link } from "react-router-dom";

export function Header({ onChange }) {
  const { signOut, user } = useAuthContext();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/file/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <div>
        <Link to="/">
          <h1>RocketMovies</h1>
        </Link>

        <Input
          icon={FiSearch}
          id="headerSearch"
          description="Pesquise pelo título"
          placeholder="Pesquise pelo título"
          onChange={onChange}
        />

        <div to="profile" className="profile">
          <div>
            <strong>{user.name}</strong>
            <button type="button" onClick={signOut}>
              sair
            </button>
          </div>
          <Link to="/profile">
            <img
              src={avatarURL}
              alt={`Foto de perfil ${user.name}`}
              title={`Foto de perfil ${user.name}`}
            />
          </Link>
        </div>
      </div>
    </Container>
  );
}
