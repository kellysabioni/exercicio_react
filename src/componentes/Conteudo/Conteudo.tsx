import Menu from "./Menu/Menu";
import styles from './Conteudo.module.css'

export default function Conteudo() {
  return (
    <>
      <div  className={styles.container}>

        <div>
            <Menu/>
        </div>

        <section>
            <h2>Aqui vai o conteudo </h2>
        </section>

      </div>
    
    </>
  )
}
