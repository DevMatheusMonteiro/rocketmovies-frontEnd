import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/session", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível realizar o login");
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();

        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);

        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);

      delete user.password;
      delete user.old_password;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));

      setData({ user, token: data.token });

      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar");
      }
    }
  }

  async function fetchUsers() {
    try {
      const user = localStorage.getItem("@rocketmovies:user");

      if (!user) {
        return;
      }

      await api.get("/users");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);

        if (error.response.status === 401) {
          alert("Sua sessão expirou");
          signOut();
        }
      } else {
        alert("Não foi possível buscar usuário");
      }
    }
  }

  window.onclick = () => {
    fetchUsers();
  };

  window.onkeydown = () => {
    fetchUsers();
  };

  useEffect(() => {
    const user = localStorage.getItem("@rocketmovies:user");
    const token = localStorage.getItem("@rocketmovies:token");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user: JSON.parse(user), token });

      fetchUsers();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
