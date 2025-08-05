import { Link } from "react-router-dom";
import "./Menu.module.css";

export default function Menu() {
  return (
    <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/Servicos">Serviços</Link>
          <Link to="/contato">Contato</Link>
        </nav>
    </>
  )
}
