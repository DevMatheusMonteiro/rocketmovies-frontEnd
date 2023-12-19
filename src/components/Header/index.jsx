import { Container } from "./styles";

import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <div>
        <h1>RocketMovies</h1>

        <Input
          icon={FiSearch}
          id="headerSearch"
          description="Pesquise pelo título"
          placeholder="Pesquise pelo título"
        />

        <div to="profile" className="profile">
          <div>
            <strong>Matheus Monteiro</strong>
            <button type="button">sair</button>
          </div>
          <Link to="/profile">
            <img
              src="https://github.com/DevMatheusMonteiro.png"
              alt="Foto de perfil Matheus Monteiro"
              title="Foto de perfil Matheus Monteiro"
            />
          </Link>
        </div>
      </div>
    </Container>
  );
}
