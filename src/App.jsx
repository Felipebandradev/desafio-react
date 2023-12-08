/* Importando as páginas e oos components */
import Home from "./pages/Home.jsx";
import ClassicRock from "./pages/ClassicRock.jsx";
import HavyMetal from "./pages/HavyMetal.jsx";
import Container from "./components/Container.jsx";
import Cabecalho from "./components/Cabecalho.jsx";

/* Importando a lib de rotas */
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Container>
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={ClassicRock} path="/classicrock" />
            <Route Component={HavyMetal} path="/havymetal" />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
