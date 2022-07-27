import Slider from "../../components/Slider/Slider";
import "swiper/css";
import "./home.css";

function Home() {
  return (
    <>
      <section className="home_section">
        <div className="section_container">
          <div className="section_text">
            <h1>Boas Vindas</h1>
            <p>
              <br />
              Olá, seja bem vinde ao Hello Celíaco, meu nome é
              <span className="green_text"> Tamires Cristina</span>, tenho 29
              anos e sou de Diadema - SP. <br/>Se você está por aqui provavelmente
              teve o diagnóstico recente da doença celíaca, ou está aprendendo
              mais sobre, e o objetivo desse site é acolher quem teve o
              diagnóstico da doença e passar algumas orientações iniciais que
              possam ajudar no período de adaptação.
            </p>
            <h2>Quando eu me descobri celíaca?</h2>
            <p>
              Tive o diagnóstico da doença em{" "}
              <span className="green_text">03/2020</span> e a partir desse
              momento minha vida mudou completamente ! Confesso que no começo eu
              fiquei apavorada, não sabia nem o que era glúten mas sabia que
              minha vida ficaria completamente restrita por conta desse
              diagnóstico.
            </p>
            <h2>Adaptação</h2>
            <p>
              Os primeiros meses foram bem difíceis pois eu tive que abrir mão
              dos meus alimentos preferidos e sabia que nunca mais poderia
              come-los, mas a situação só foi piorando quando eu descobri sobre
              a contaminação cruzada, e vamos falar melhor sobre ela mais pra
              frente.
            </p>
            <h2>Há males que vem para o bem...</h2>
            <p>
              Conforme eu fui deixando de consumir o glúten, eu fui sentindo
              melhora em diversos sintomas que eu sempre tive e achava que
              estava relacionado a outras doenças, um exemplo, eu sempre tive
              uma anemia chata a vida toda que nunca consegui curar, e foi eu
              parar de consumir glúten e adivinhem? A anemia foi embora, e fora
              diversos sintomas gástricos que eu achava que estava relacionado a
              gastrite e era tudo culpa do bendito do glúten
            </p>
            <h2>Vida Social</h2>
            <p>
              Confesso que essa foi a parte mais difícil, primeiro porque a
              maioria das pessoas não sabem o que é glúten, e muito menos que
              existe uma doença séria relacionada a ele. Por diversas vezes eu
              ouvi as pessoas falando “Ah, mas é frescura”, “Na minha época não
              existia isso”, “Você é fresca, não pode comer isso ou aquilo”. E
              foram poucas as pessoas que se interessaram em saber mais a
              respeito da doença e tentar entende-la pra tentar fazer eu me
              sentir melhor de alguma forma…
              <br /> <br />O conselho que eu deixo pra vocês é, não se deixem
              abalar por pessoas ignorantes que não se dão nem ao trabalho de
              pesquisar e entender sobre a doença antes de criticar. Hoje eu
              ainda sofro com o fato de não poder sair e comer livremente em
              qualquer lugar, e ainda estou encontrando formas de me adaptar com
              isso, mas de uma coisa eu falo com toda a certeza, estou bem mais
              saudável do que a alguns anos atrás e tirar o glúten da minha vida
              foi a melhor coisa que eu fiz.
            </p>
          </div>
        </div>
        <div className="section_slider_container">
          <h3>Entendendo melhor sobre o assunto</h3>
          <Slider />
        </div>
      </section>
    </>
  );
}

export default Home;
