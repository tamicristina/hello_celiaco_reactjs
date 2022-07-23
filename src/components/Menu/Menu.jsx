import {Link} from 'react-router-dom'
import './menu.css'

function Menu(){
  return(
  <>
  <ul className='menu'>
    <li className='item'>
      <Link className="link" to="/">Sobre</Link>
    </li>
    <li className='item'>
      <Link className="link" to="/contaminacao">Contaminação Cruzada</Link>
    </li>
    <li className='item'>
      <Link className="link" to="/apoio">Rede de apoio</Link>
    </li>
    <li className='item'>
      <Link className="link" to="/alimentacao">Alimentação Segura</Link>
    </li>
  </ul>
  </>)
  }
  
  export default Menu