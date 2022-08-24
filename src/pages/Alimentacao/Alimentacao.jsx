import CardFlip from "../../components/CardFlip/CardFlip";
import "./alimentacao.css";

function Alimentacao() {
  return (
    <section className="alimentacao_section">
      <div className="section_container">
        <div className="section_alimentacao_text">
          <h1>Restaurantes seguros para celíacos (uhuu)</h1>
          <br />
          <p>
            Bom, nem tudo está perdido nessa vida de celíaco, hoje em SP e
            diversos lugares do Brasil e no mundo temos alimentações que são
            livres de contaminação cruzada e segura para celíacos. No começo foi
            meio difícil achar lugares próximos a região em que eu moro, mas
            conforme eu fui pesquisando nos grupos do facebook e no instagram
            fui encontrando mais opções, e gostaria de listar algumas abaixo:
          </p>
        </div>
      </div>
      <div className="section_restaurantes">
        <h2>1 - Pizzarias / Massas</h2>
        <div className="container_card">
          <CardFlip
            image={"https://i.ibb.co/ThWj1zg/pizza-for-fun.jpg"}
            text={
              "Pizzas saborosas em um ambiente totalmente seguro e isento de qualquer produto com glúten."
            }
            hrefGoogle={"https://g.page/pizzaforfunvilaclementino?share"}
            site={"https://pizzaforfun.com.br/"}
            hrefSite={"https://pizzaforfun.com.br/"}
            ancoraInsta={'https://www.instagram.com/pizzaforfunoficial/'}
          />
          <CardFlip
            image={"https://i.ibb.co/ts7LKh1/jolly-pizza-logo-1.png"}
            text={
              " Localizada no Jardim Paulista, trazendo um conceito diferenciado de Massas e Pizzas finas, leves, de longa fermentação e sem a tradicional farinha de trigo, com opções sem lactose, low carb e veganas."
            }
            hrefGoogle={"https://g.page/Jolly-Pizzaria?share"}
            site={"https://www.jollypizzaria.com.br/"}
            hrefSite={"https://www.jollypizzaria.com.br/"}
            ancoraInsta={'https://www.instagram.com/jollypizzaria/'}
          />
          <CardFlip
            image={"https://i.ibb.co/wwLLp7n/Logotipo-Le-Vita-Header181025.png"}
            text={
              " A Le Vita chegou no mercado em 2017 para quebrar o paradigma de que alimentação sem glúten e sem lactose não seria saborosa. "
            }
            hrefGoogle={"https://g.page/levitazero?share"}
            site={"https://levitazero.com.br/quem-somos/"}
            hrefSite={"https://levitazero.com.br/quem-somos/"}
            ancoraInsta={"https://www.instagram.com/levitazero/"}
          />
        </div>
        <h2>2 - Confeitarias</h2>
        <div className="container_card">
          <CardFlip
            image={
              "https://i.ibb.co/BsPVyjB/isabela-Branca.png"
            }
            text={
              "Confeitaria francesa com brownies e alfajores recheados, além de bebidas quentes servidas em copos com a borda dourada."
            }
            hrefGoogle={"https://g.page/isabelaakkari?share"}
            site={"https://www.isabelaakkari.com.br"}
            hrefSite={"https://www.isabelaakkari.com.br"}
            ancoraInsta={"https://www.instagram.com/isabelaakkari/"}
          />
          <CardFlip
            image={"https://i.ibb.co/TmgcYqG/logo-fany.jpg"}
            text={
              " Encomendas de Bolos de festa para todas as ocasiões, kit festas, sobremesas e doces de época."
            }
            hrefGoogle={"https://goo.gl/maps/qEs4KfsFNxidv9jq6"}
            site={"https://fanygastronomy.com.br/"}
            hrefSite={"https://fanygastronomy.com.br/"}
            ancoraInsta={"https://www.instagram.com/fanygastronomy/"}
          />
        </div>
        <h2>3 - Padarias</h2>
        <div className="container_card">
        <CardFlip
            image={"https://i.ibb.co/Cb8m1zB/praladebom.png"}
            text={
              " Padaria artesanal em SP, sem glúten, lactose e açucar refinado."
            }
            hrefGoogle={"https://g.page/PraLaDeBom?share"}
            ancoraInsta={"https://www.instagram.com/praladebomsemgluten/"}
          />
          <CardFlip
            image={"https://i.ibb.co/09YjrFC/vivaz.jpg"}
            text={
              " Uma Padaria Sem Glúten, Sem Lactose e Sem Refinados"
            }
            hrefGoogle={"https://g.page/vivazsemgluten?share"}
            ancoraInsta={"https://www.instagram.com/vivazsemgluten/"}
            site={'https://vivazsemgluten.com.br/'}
            hrefSite={'https://vivazsemgluten.com.br/'}
          />
          </div>
      </div>
    </section>
  );
}

export default Alimentacao;
