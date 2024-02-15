import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import CreateNote from "../pages/CreateNote";
import EditNote from "../pages/EditNote";
import Profile from "../pages/Profile";
import Details from "../pages/Details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createnote" element={<CreateNote />} />
      <Route path="/editnote/:id" element={<EditNote />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
