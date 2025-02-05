import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/public/Login";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
