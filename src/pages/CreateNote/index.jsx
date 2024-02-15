import { useState } from "react";
import api from "../../services/api";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export default function CreateNote() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [rating, setRating] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [description, setDescription] = useState(null);
  const [movieTags, setMovieTags] = useState([]);
  const [movieTagName, setMovieTagName] = useState("");

  async function handleCreateMovieNote() {
    try {
      if (!title || !rating) {
        if (!title) {
          setTitleError(true);
        }

        if (!rating) {
          setRatingError(true);
        }

        return alert("Informe o título e a nota do filme");
      }

      if (movieTagName) {
        const confirm = window.confirm(
          "Tem uma tag digitada que não foi adicionada. Quer continuar ou deseja conferir?"
        );

        if (!confirm) {
          return;
        }
      }

      await api.post("/movie-notes", { title, description, rating, movieTags });

      alert("Anotação adicionada com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível adicionar a anotação");
      }
    }
  }

  function handleCreateMovieTags() {
    if (!movieTagName) {
      return;
    }

    const sameTag = movieTags.includes(movieTagName);

    if (sameTag) {
      return alert("Já possui uma tag com esse nome");
    }

    setMovieTags((prevState) => [...prevState, movieTagName]);
    setMovieTagName("");
  }

  function handleRemoveMovieTags(movieTagName) {
    const filteredMovieTag = movieTags.filter(
      (movieTag) => movieTag !== movieTagName
    );

    setMovieTags(filteredMovieTag);
  }

  window.onkeydown = (e) => {
    const { pathname } = window.location;

    if (
      pathname !== "/createnote" ||
      e.target.nodeName === "A" ||
      e.target.nodeName === "BUTTON" ||
      e.target.id === "upload-image"
    ) {
      return;
    }

    if (e.key === "Enter") {
      handleCreateMovieNote();
    }
  };

  return (
    <Container>
      <Header />

      <main>
        <div>
          <Link to={-1}>
            <FiArrowLeft />
            Voltar
          </Link>
          <Content>
            <header>
              <h2>Novo filme</h2>
            </header>
            <div className="row">
              <Input
                error={titleError}
                id="movieTitle"
                name="movieTitle"
                placeholder="Título"
                type="text"
                description="Informe o título do filme"
                onChange={(e) => {
                  setTitle(e.target.value);
                  setTitleError(false);
                }}
              />
              <Input
                error={ratingError}
                type="text"
                id="movieRating"
                name="movieRating"
                placeholder="Sua nota (de 0 a 5)"
                description="Informe a nota de 0 a 5"
                onChange={(e) => {
                  if (e.target.value > 5 || e.target.value < 0) {
                    e.target.value = null;
                    setRating("");
                    return alert("A nota deve ser de 0 a 5");
                  }

                  const inputValue = e.target.value;

                  const numericValue = inputValue.replace(/\D/g, "");

                  e.target.value = numericValue;

                  setRating(e.target.value);
                  setRatingError(false);
                }}
              />
            </div>
            <label htmlFor="description" className="sr-only">
              Dê a sua observações sobre o filme
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Observações"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <h3>Marcadores</h3>
            <div className="noteitem-container">
              {movieTags &&
                movieTags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onclick={() => handleRemoveMovieTags(tag)}
                  />
                ))}

              <NoteItem
                isnew
                value={movieTagName}
                onclick={handleCreateMovieTags}
                onChange={(e) => setMovieTagName(e.target.value)}
              />
            </div>

            <div className="row">
              <Button
                title="Salvar alterações"
                onClick={handleCreateMovieNote}
              />
            </div>
          </Content>
        </div>
      </main>
    </Container>
  );
}
