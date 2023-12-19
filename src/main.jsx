import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./globalStyles";

import Routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Routes />
  </React.StrictMode>
);
