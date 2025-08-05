import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Container from "./componentes/Container/Container";
import Conteudo from "./componentes/Conteudo/Conteudo";
import Menu from "./componentes/Menu/Menu";

export default function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Menu />
        <Conteudo />
      </Container>
    </>
  );
}
