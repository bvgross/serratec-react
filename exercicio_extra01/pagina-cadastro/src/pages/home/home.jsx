import { useEffect, useState } from "react";
import styles from "./home.module.css"

export function Home() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")

  useEffect(() => {
    const nomeLocalStorage = localStorage.getItem("nome")
    const idadeLocalStorage = localStorage.getItem("idade")

    setNome(nomeLocalStorage)
    setIdade(idadeLocalStorage)
  }, [])


  return (
    <div className={styles.container}>
      <p className={styles.frase}>Bem vindo(a), {nome}, você tem {idade} anos.</p>
    </div>
  )
}
