/* Importando os estilos */
import { StyledContainer } from "../styles/style.js";

function Container({ children }) {
  return <StyledContainer>
    <h1>Exercício React</h1>
    {children}
    </StyledContainer>;
}

export default Container;
