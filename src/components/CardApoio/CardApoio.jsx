import './cardapoio.css'

function CardApoio(props){
  return (
    <div className="card_apoio">
      <img className='card_apoio_image'src={props.image}/>
      <p>{props.text}</p>
    
    </div>
  )
}

export default CardApoio