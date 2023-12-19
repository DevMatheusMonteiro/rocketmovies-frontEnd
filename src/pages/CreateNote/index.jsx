import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export default function CreateNote() {
  return (
    <Container>
      <Header />

      <main>
        <div>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
          <Content>
            <header>
              <h2>Novo filme</h2>
            </header>
            <div className="row">
              <Input
                id="movieTitle"
                name="movieTitle"
                placeholder="Título"
                type="text"
                description="Informe o título do filme"
              />
              <Input
                id="movieRating"
                name="movieRating"
                placeholder="Sua nota (de 0 a 5)"
                description="Informe a nota de 0 a 5"
              />
            </div>
            <label htmlFor="description" className="sr-only">
              Dê a sua observações sobre o filme
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Observações"
            ></textarea>
            <h3>Marcadores</h3>
            <div className="noteitem-container">
              <NoteItem value="React" />
              <NoteItem isnew />
            </div>

            <div className="row">
              <Button title="Excluir filme" />
              <Button title="Salvar alterações" />
            </div>
          </Content>
        </div>
      </main>
    </Container>
  );
}
