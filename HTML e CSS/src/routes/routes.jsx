import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login/login";
import Home from "../pages/Home/Home";
import Buscar from "../pages/Buscar/Buscar";
import Conta from "../pages/Conta/Conta";

import CadastroEletronicos from "../pages/CadastrarEletronicos/CadastrarEletronicos";
import CadastroTipoEletronicos from "../pages/CadastrarTipoEletronicos/CadastrarTipoEletronicos";

import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

export default function Rotas() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Usuário */}
        <Route path="/home" element={<Home />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/conta" element={<Conta />} />

        {/* Admin */}
        <Route
          path="/eletronicos"
          element={
            <PrivateRoute permitido="admin">
              <CadastroEletronicos />
            </PrivateRoute>
          }
        />

        <Route
          path="/tipo-eletronicos"
          element={
            <PrivateRoute permitido="admin">
              <CadastroTipoEletronicos />
            </PrivateRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}