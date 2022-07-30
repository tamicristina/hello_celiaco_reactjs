import "./cardflip.css";

function CardFlip(props) {
  return (
    <div id="card" className="flip">
      
        <div className="face" id="front">FRONT</div>
        <div className="face" id="back">BACK</div>
     
    </div>
  );
}

export default CardFlip;
