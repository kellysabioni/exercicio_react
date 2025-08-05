// Ensure your project supports importing images and CSS modules
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <>
      <header className={styles.cabecalho}>
        <h1> <img src={logo} alt="Logo da empresa, Imagem de um elefante" />
        <Link to="/">Maraja Eventos</Link>
        </h1>
      </header>
    </>
  );
}
