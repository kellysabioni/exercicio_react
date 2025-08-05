import { Link } from "react-router-dom";
import "./Menu.module.css";

export default function Menu() {
  return (
    <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/contato">Contato</Link>
        </nav>
    </>
  )
}
