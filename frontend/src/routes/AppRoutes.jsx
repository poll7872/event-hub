import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/public/Login";
import { Register } from "../pages/public/Register";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
