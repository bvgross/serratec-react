import { useState } from 'react'
import { Cadastro } from './pages/cadastro/cadastro.jsx'
import { Rotas } from './routes/route.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
