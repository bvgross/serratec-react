import { Routes, Route } from "react-router-dom";
import { Cadastro } from "../pages/cadastro/cadastro.jsx"
import { Home } from "../pages/home/home.jsx"

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}
