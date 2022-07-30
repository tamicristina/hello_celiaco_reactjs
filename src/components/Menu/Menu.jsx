import {Link} from 'react-router-dom'
import './menu.css'

function Menu(){
  return(
  <>
  <hr />
  <ul className='menu'>
    <li className='item'>
      <Link className="link" to="/">Home</Link>
    </li>
    <li className='item'>
      <Link className="link" to="/contaminacao">Contaminação Cruzada</Link>
    </li>
 
    <li className='item'>
      <Link className="link" to="/alimentacao">Alimentação Segura</Link>
    </li>
  </ul>
  <hr />
  </>)
  }
  
  export default Menu