import './cardapoio.css'

import { BsArrow90DegRight } from 'react-icons/bs/index.esm'

function CardApoio(props){
  return (
    <div className="card_apoio">
      <img className='card_apoio_image'src={props.image}/>
      <p className='card_apoio_title'>{props.text}</p>
      <a className='ancora_container' href={props.link} target='blank'><span className='ancora_arrow_container'><BsArrow90DegRight/></span><p className='ancora_text'>Acesse a página clicando aqui</p></a>
      
    
    </div>
  )
}

export default CardApoio