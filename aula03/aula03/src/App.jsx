import { useState } from 'react'
import { Rotas } from './Routes/Routes.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Rotas />
  )
}

export default App
