import { Route, Routes } from "react-router-dom";

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/formulario" element={<Formulario />} />
    </Routes>
  )
}
