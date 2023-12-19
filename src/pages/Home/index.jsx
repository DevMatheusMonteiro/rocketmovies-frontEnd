import { Container } from "./styles";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Content } from "../../components/Content";
import { Note } from "../../components/Note";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Header />

      <main>
        <div>
          <header>
            <h2>Meus Filmes</h2>
            <Link to="/createnote">
              <FiPlus />
              Adicionar Filme
            </Link>
          </header>
          <Content>
            <Note
              title="Interestelar"
              rate={4}
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia alias asperiores culpa! Deleniti deserunt aliquid velit at iusto quae saepe laborum, explicabo sed delectus a harum non recusandae quisquam aperiam!"
              tags={[
                { id: 1, name: "Ficção científica" },
                { id: 2, name: "Drama" },
                { id: 3, name: "Família" },
              ]}
            />
            <Note
              title="Interestelar"
              rate={1}
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia alias asperiores culpa! Deleniti deserunt aliquid velit at iusto quae saepe laborum, explicabo sed delectus a harum non recusandae quisquam aperiam!"
              tags={[
                { id: 1, name: "Ficção científica" },
                { id: 2, name: "Drama" },
                { id: 3, name: "Família" },
              ]}
            />
            <Note
              title="Interestelar"
              rate={1}
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia alias asperiores culpa! Deleniti deserunt aliquid velit at iusto quae saepe laborum, explicabo sed delectus a harum non recusandae quisquam aperiam!"
              tags={[
                { id: 1, name: "Ficção científica" },
                { id: 2, name: "Drama" },
                { id: 3, name: "Família" },
              ]}
            />
          </Content>
        </div>
      </main>
    </Container>
  );
}
