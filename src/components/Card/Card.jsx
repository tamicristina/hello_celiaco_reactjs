import "./card.css";

function Card(props) {
  const hasItemList =
    props.item1 &&
    props.item2 &&
    props.item3 &&
    props.item4 &&
    props.item5 &&
    props.item6 &&
    props.item7 ? (
      <ul className="card_text_item_list">
        <li className="card_text_item">{props.item1}</li>
        <li className="card_text_item">{props.item2}</li>
        <li className="card_text_item">{props.item3}</li>
        <li className="card_text_item">{props.item4}</li>
        <li className="card_text_item">{props.item5}</li>
        <li className="card_text_item">{props.item6}</li>
        <li className="card_text_item">{props.item7}</li>
      </ul>
    ) : (
      <></>
    );
  return (
    <div className="card_container">
      <img className="card_image " src={props.image} />
      <div className="card_text_container">
        <span className="card_texts">
          <h2 className="card_text_h2">{props.title}</h2>
          <p className="card_text_paragrafo1">{props.textOne}</p>
          <p className="card_text_paragrafo2">{props.textTwo}</p>
          {hasItemList}
        </span>
      </div>
    </div>
  );
}

export default Card;
