/* Importando a lib styled components */
import styled from "styled-components";

/* inicio da estilização do Menu */
const StyledMenu = styled.nav`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    color: black;
    margin: 2rem;
    padding: 1.99rem;
    border-radius:   15px 0 0 15px    ;
  }

  a:hover {
    color: white;
    background-color: black;
  }

  .active {
    color: white;
    background-color: black;
  }
`; /* Fim da estilização do menu */

/* inicio da animação das sections  */
const StlyedSection = styled.section`
  animation-name: animaContainer;
  animation-duration: 0.2s;
 


  @keyframes animaContainer {
    from {
      transform: scale(0.1);
    }
  }
`; /* Fim das animações da sctions */

/* inicio da estilização do Container */
const StyledContainer = styled.main`
  background-color: #fff;
  max-width: 100%;
  width: 60vw;
  height: 60vh;
  overflow-y: scroll;
  border-radius: 0 0 15px 15px;
  box-shadow: 5px 5px 20px black;

  border: black solid 10px;
  h1 {
    text-align: center;
  }

  h1,
  h2,
  p {
    margin: 2rem;
    padding: 0.2rem 0;
  }
`; /* fim da estilização do Container */

/* Exportando as tags de estilos */
export { StyledMenu, StyledContainer, StlyedSection };
