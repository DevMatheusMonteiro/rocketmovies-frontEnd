import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./globalStyles";

import { AuthProvider } from "./hooks/useAuthContext";

import Routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
);
