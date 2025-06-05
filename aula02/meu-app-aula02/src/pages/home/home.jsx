import styles from './home.module.css'
import { Navbar } from "../../components/navbar/navbar.jsx"
import { Input } from "../../components/input/input.jsx"

export function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Input type="text" placeholder="Escreva seu nome..." value="" onChange={console.log("Teste")} />
      <Input type="text" placeholder="Escreva seu email..." value="" onChange={console.log("Teste")} />
    </div>
  )
}
