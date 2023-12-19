import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CreateNote from "../pages/CreateNote";
import Profile from "../pages/Profile";
import Details from "../pages/Details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createnote" element={<CreateNote />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
