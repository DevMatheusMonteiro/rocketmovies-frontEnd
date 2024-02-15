import { useAuthContext } from "../hooks/useAuthContext";

import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export default function Routes() {
  const { user } = useAuthContext();

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
