
import { Route, Routes } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Container from "./componentes/Container/Container";
import Menu from "./componentes/Menu/Menu";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import Pagina404 from "./pages/Pagina404";

export default function App() {
  return (
    <>
      <Cabecalho />
      <section className={styles.geral} >

        <Menu />

        <Container>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Pagina404 />} />
          </Routes>
        </Container>
      
      
      </section>
    </>
  );
}
