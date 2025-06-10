import styles from "./cadastro.module.css"
import { Input } from "../../components/input/input.jsx";
import { Button } from "../../components/button/button.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Cadastro() {

  const [nome, setnome] = useState("")
  const [erroNome, setErroNome] = useState("")
  const [idade, setIdade] = useState("")
  const [erroIdade, setErroIdade] = useState("")
  const navigate = useNavigate()

  function handleNomeChange(event) {
    if (event.target.value.trim() === "") {
      setErroNome("*campo de nome deve ser preenchido")
    } else {
      setErroNome("")
    }

    setnome(event.target.value)
  }

  function handleIdadeChange(event) {
    setIdade(event.target.value)
    let idadeAtual = event.target.value
    if (idadeAtual < 1 || idadeAtual == "-") {
      setErroIdade("*idade deve ser um número positivo")
    } else {
      setErroIdade("")
    }
  }

  function handleClick(event) {
    event.preventDefault()
    if (nome === "" || idade < 1) {
      alert("Nome ou idade inválidos, confira")
      return
    }

    localStorage.setItem("nome", nome)
    localStorage.setItem("idade", idade)

    navigate("/home")
  }

  return (
    <form className={styles.container} id="container">
      <div className={styles.campo}>
        <label className={styles.label}>
          Nome:
        </label>
        <Input value={nome} placeholder="Digite seu nome" onChange={handleNomeChange} erro={erroNome} />
      </div>
      <div className={styles.campo}>
        <label className={styles.label}>
          Idade:
        </label>
        <Input value={idade} placeholder="Digite sua idade" onChange={handleIdadeChange} erro={erroIdade} />
      </div>
      <Button type="submit" onclick={handleClick} children="Cadastrar" />
    </form>
  )
}
