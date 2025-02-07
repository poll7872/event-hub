import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/public/Login";
import { Register } from "../pages/public/Register";
import { ProtectedRoute } from "./ProtectedRoute";
import { Dashboard } from "../pages/admin/Dashboard";
import { Home } from "../pages/public/Home";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />

        {/*Ruta protegida solo para users con rol admin*/}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute role="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
