import { useEffect, useState } from "react";
import api from "../../services/api";
import { useAuthContext } from "../../hooks/useAuthContext";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container } from "./styles";

import { Header } from "../../components/Header";

import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";

import { Link, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiClock } from "react-icons/fi";

export default function Details() {
  const navigate = useNavigate();

  const { user } = useAuthContext();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/file/${user.avatar}`
    : avatarPlaceholder;

  const { id } = useParams();
  const [note, setNote] = useState();

  function convertDate() {
    let updated_at = new Date(note.updated_at);

    const hours = updated_at.getHours();

    updated_at.setHours(hours - 3);

    return `${updated_at.toLocaleDateString(
      "pt-br"
    )} às ${updated_at.toLocaleTimeString("pt-br")}`;
  }

  async function handleRemoveMovieNote() {
    const confirm = window.confirm(
      "Tem certeza que deseja excluir essa anotação?"
    );

    if (!confirm) {
      return;
    }

    await api.delete(`/movie-notes/${id}`);
    alert("Anotação deletada com sucesso");
    navigate("/");
  }

  useEffect(() => {
    async function fetchNoteDetails() {
      const response = await api.get(`/movie-notes/${id}`);

      setNote(response.data);
    }
    fetchNoteDetails();
  }, []);

  return (
    <Container>
      <Header />

      {note && (
        <main>
          <div>
            <Link to={-1}>
              <FiArrowLeft />
              Voltar
            </Link>

            <header>
              <div className="title-stars">
                <h2>{note.title}</h2>
                <Stars rate={note.rating} />
              </div>
              <div className="buttons">
                <Button
                  title="Editar"
                  onClick={() => navigate(`/editnote/${note.id}`)}
                />
                <Button title="Deletar" onClick={handleRemoveMovieNote} />
              </div>
            </header>
            <div className="created_by_at">
              <span>
                <img
                  src={avatarURL}
                  alt={`Foto de perfil ${user.name}`}
                  title={`Foto de perfil ${user.name}`}
                />
                Por {user.name}
              </span>
              <span>
                <FiClock />
                {convertDate()}
              </span>
            </div>
            <div className="container-tags">
              {note.movieTags.map((movieTag) => (
                <Tag key={String(movieTag.id)} title={movieTag.name} />
              ))}
            </div>

            <div className="container-description">
              <textarea readOnly value={note.description}></textarea>
            </div>
          </div>
        </main>
      )}
    </Container>
  );
}
