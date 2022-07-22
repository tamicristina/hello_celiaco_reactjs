import {Link} from 'react-router-dom'
import './menu.css'

function Menu(){
  return(
  <>
  <ul>
    <li>
      <Link to="/">Sobre</Link>
    </li>
    <li>
      <Link to="/contaminacao">Contaminação Cruzada</Link>
    </li>
    <li>
      <Link to="/apoio">Rede de apoio</Link>
    </li>
    <li>
      <Link to="/alimentacao">Alimentação Segura</Link>
    </li>
  </ul>
  </>)
  }
  
  export default Menu