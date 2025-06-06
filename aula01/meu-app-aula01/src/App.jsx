import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
        const [count, setCount] = useState(0)

        const series = ["Ted Lasso", "Dexter", "Gilmore Girls", "Severance", "Stranger Things"]
        const numeros = [1, 2, 3, 4, 5, 6, 7]

        return (
                <>
                        {series.map((item, index) => (
                                <h1 key={index}>{item}</h1>
                        ))}
                        <h1>Teste</h1>

                        {numeros
                                .filter((numero) => numero > 3)
                                .map((numeros, index) => (
                                        <p key={index}>{numeros}</p>
                                ))}

                </>
        )
}
export default App
