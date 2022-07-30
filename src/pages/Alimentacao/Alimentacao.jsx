import CardFlip from "../../components/CardFlip/CardFlip";
import "./alimentacao.css";

function Alimentacao() {
  return (
    <section className="alimentacao_section">
      <div className="section_container">
        <div className="section_alimentacao_text">
          <h1>Restaurantes seguros para celíacos (uhuu)</h1><br/>
          <p>
            Bom, nem tudo está perdido nessa vida de celíaco, hoje em SP e
            diversos lugares do Brasil e no mundo temos alimentações que são
            livres de contaminação cruzada e segura para celíacos. No começo foi meio difícil achar lugares próximos a região em que eu moro, mas conforme eu fui pesquisando nos grupos do facebook e no instagram fui encontrando mais opções, e gostaria de listar algumas abaixo:
          </p>
        </div>
      </div>
        <div className="section_restaurantes">
        <h2>1 - Pizzarias</h2>
        <CardFlip/>
        </div>
    </section>
  );
}

export default Alimentacao;
