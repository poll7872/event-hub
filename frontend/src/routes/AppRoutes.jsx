import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/public/Login";
import { Register } from "../pages/public/Register";
import { ProtectedRoute } from "./ProtectedRoute";
import { Dashboard } from "../pages/admin/Dashboard";
import { Home } from "../pages/public/Home";
import { Events } from "../pages/admin/Events";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />

        {/*Rutas protegidas solo para users con rol admin*/}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute role="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events"
          element={
            <ProtectedRoute role="admin">
              <Events />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
