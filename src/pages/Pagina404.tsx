import { useEffect } from 'react';
import logo from '../assets/logo-branca.png'
import { Link } from 'react-router-dom';
import styles from "../componentes/Container/Container.module.css";

export default function Pagina404() {
  useEffect(() => {
    document.title = "Pagina Não Encontrada | Maraja Eventos";
  }, []);
  return (
    <div className={styles.notFound} >
      <h2><img src={logo} alt="Imagem de um elefante" /></h2>
      <h3>Desculpe!</h3>
      <p>Página Não encontrada</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  )
}
