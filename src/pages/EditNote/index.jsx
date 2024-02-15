import { useEffect, useState } from "react";
import api from "../../services/api";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { EditableTag } from "../../components/EditableTag";

export default function EditNote() {
  const { id } = useParams();

  const [note, setNote] = useState();
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [rating, setRating] = useState("");
  const [ratingError, setRatingError] = useState(false);
  const [description, setDescription] = useState(null);

  const [movieTags, setMovieTags] = useState([]);

  const [movieTagName, setMovieTagName] = useState("");

  async function handleUpdateMovieNote() {
    try {
      if (
        title === note.title &&
        rating === note.rating &&
        description === note.description
      ) {
        return;
      }

      if (!title || !rating) {
        if (!title) {
          setTitleError(true);
        }

        if (!rating) {
          setRatingError(true);
        }

        return alert("Informe o título e a nota do filme");
      }

      await api.put(`/movie-notes/${id}`, {
        title,
        description,
        rating,
      });

      setNote((prevState) => {
        return Object.assign(prevState, { title, description, rating });
      });

      alert("Anotação atualizada com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível adicionar a anotação");
      }
    }
  }

  async function handleCreateMovieTags() {
    if (!movieTagName) {
      return;
    }

    const sameTag = movieTags.filter(
      (movieTag) => movieTag.name === movieTagName
    );

    if (sameTag.length > 0) {
      return alert("Já possui uma tag com esse nome");
    }

    const response = await api.post(`/movie-tags/?movie_note_id=${id}`, {
      name: movieTagName,
    });

    setMovieTags((prevState) => [...prevState, response.data]);
    setMovieTagName("");
  }

  async function handleRemoveMovieTags(tag) {
    try {
      const confirm = window.confirm(
        "Tem certeza que deseja excluir essa tag?"
      );

      if (!confirm) {
        return;
      }

      const filteredMovieTag = movieTags.filter(
        (movieTag) => movieTag.name !== tag.name
      );

      setMovieTags(filteredMovieTag);

      await api.delete(`/movie-tags/${tag.id}?movie_note_id=${id}`);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(error);
      }
    }
  }

  async function handleUpdateTagName(e, tag) {
    try {
      const paragraph = e.target;

      paragraph.setAttribute("contentEditable", false);
      if (
        paragraph.innerText === "" ||
        paragraph.innerText.indexOf("\n") === 0
      ) {
        return (paragraph.innerText = tag.name);
      }

      const confirm = window.confirm(
        "Tem certeza que deseja atualizar essa tag?"
      );

      if (!confirm) {
        return (paragraph.innerText = tag.name);
      }

      if (paragraph.innerText.indexOf("\n") > 0) {
        const splitedWord = paragraph.innerText.split("\n");

        paragraph.innerText = splitedWord[0];
      }

      const [sameName] = movieTags.filter(
        (movieTag) => movieTag.name === paragraph.innerText
      );

      if (sameName && sameName.id !== tag.id) {
        alert("Já existe uma tag com esse nome para essa anotação!");

        return (paragraph.innerText = tag.name);
      }

      tag.name = paragraph.innerText;

      await api.put(`/movie-tags/${tag.id}?movie_note_id=${id}`, {
        name: tag.name,
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o nome da tag");
      }
    }
  }

  window.onkeydown = (e) => {
    const { pathname } = window.location;

    if (
      pathname !== `/editnote/${id}` ||
      e.target.nodeName === "A" ||
      e.target.nodeName === "BUTTON" ||
      (e.target.nodeName === "TEXTAREA" && e.ctrlKey === false) ||
      e.target.id === "upload-image"
    ) {
      return;
    }

    if (e.key === "Enter") {
      handleUpdateMovieNote();
    }
  };

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movie-notes/${id}`);

      setNote(response.data);
      setTitle(response.data.title);
      setRating(response.data.rating);
      setDescription(response.data.description);
    }

    fetchNote();
  }, []);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get(`/movie-tags/?movie_note_id=${id}`);

      setMovieTags(response.data);
    }

    fetchTags();
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
            <Content>
              <header>
                <h2>Editar filme</h2>
              </header>
              <div className="row">
                <Input
                  defaultValue={title}
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
                  defaultValue={rating}
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
                Dê as suas observações sobre o filme
              </label>
              <textarea
                defaultValue={description}
                name="description"
                id="description"
                placeholder="Observações"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <div className="row">
                <Button
                  title="Salvar alterações"
                  onClick={handleUpdateMovieNote}
                />
              </div>
              <h3>Editar Marcadores</h3>
              <div className="noteitem-container">
                {movieTags &&
                  movieTags.map((tag, index) => {
                    return (
                      <EditableTag
                        onBlur={(e) => handleUpdateTagName(e, tag)}
                        key={String(index)}
                        text={tag.name}
                        remove={() => handleRemoveMovieTags(tag)}
                      />
                    );
                  })}

                <NoteItem
                  isnew
                  value={movieTagName}
                  onclick={handleCreateMovieTags}
                  onChange={(e) => setMovieTagName(e.target.value)}
                />
              </div>
            </Content>
          </div>
        </main>
      )}
    </Container>
  );
}
