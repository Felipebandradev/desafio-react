/* Importando os links de rotas e a lib */
import { NavLink } from "react-router-dom";
/* Importando os estilos */
import { StyledMenu } from "../styles/style";

function Menu (){
    return <StyledMenu>
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/classicrock">Classic Rock</NavLink> 
        <NavLink to="/havymetal">Havy Metal</NavLink> 
    </StyledMenu>
}

export default Menu;