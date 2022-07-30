import "./cardflip.css";

function CardFlip(props) {
  return (
    <div className="card">
      <div className="card_front" id="front">
        <span className="card_image_container">
          <img src={props.image} />
        </span>
        <span className="card_text">
          <p>{props.text}</p>
        </span>
      </div>
      <div className="card_back" id="back">
        <div className="card_back_container">
          <h1>Informações: </h1>
          <a href={props.hrefGoogle} target="_blank">
            <img
              className="logo_maps"
              src="https://i.ibb.co/NLCndts/maps.png"
            />
          </a>
          <a className="rede_social" href={props.ancoraInsta} target="_blank">
            <img src="https://media.discordapp.net/attachments/817932422984499230/1002974576629797144/IMG-20220730-WA0n022.png" />
          </a>
          <a className="ancora_site" href={props.hrefSite}>{props.site}</a>
        </div>
      </div>
    </div>
  );
}

export default CardFlip;
