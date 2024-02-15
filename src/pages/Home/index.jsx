import { useEffect, useState } from "react";

import { Container } from "./styles";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Note } from "../../components/Note";

import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await api.get(`/movie-notes?title=${search}`);

        setNotes(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível listar as notas");
        }
      }
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />

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
            {notes &&
              notes.map((note) => <Note data={note} key={String(note.id)} />)}
          </Content>
        </div>
      </main>
    </Container>
  );
}
