
import { Route, Routes } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Container from "./componentes/Container/Container";
import Menu from "./componentes/Menu/Menu";
import Home from "./pages/Home";
import Pagina404 from "./pages/Pagina404";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <Cabecalho />
      <section className={styles.geral} >

        <Menu />

        <Container>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Pagina404 />} />
          </Routes>
        </Container>
      
      
      </section>
    </>
  );
}
