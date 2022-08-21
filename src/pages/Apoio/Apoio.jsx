import "./apoio.css"
import CardApoio from "../../components/CardApoio/CardApoio"

const apoioDados = [
  {
    id:1,
    name: 'Doença Celíaca - Brasil',
    img: '../../../src/assets/doenca_celiaca_brasil.jpeg'
  },
  {
    id:2,
    name: 'Celíacos pelo mundo',
    img: '../../../src/assets/celiacos_pelo_mundo.jpeg'
  },
  {
    id:3,
    name: 'Celíacos de São Paulo',
    img: '../../../src/assets/celiacos_sao_paulo.jpeg'
  }

]

function Apoio (){
  return(
  <>
 <section className="apoio_section">
  <div className="apoio_container">
    <div className="apoio_text_container">
      <h1>Como a rede de apoio me ajudou no começo, e vem me ajudando até hoje</h1>
      <p>Logo após me descobrir celíaca eu resolvi procurar por grupos no facebook com pessoas que estavam passando pelo mesmo momento que eu, e achei diversos grupos com muitos relatos de pessoas que tinham descoberto a doença recentemente ou que estavam em busca do diagnóstico e até mesmo pessoas que já tinham o diagnóstico a anos. Encontrar esses grupos foi uma das melhores coisas que me aconteceu porque eu percebi que ali existiam milhares de pessoas com as mesmas dores que eu, e que realmente era uma rede de apoio, assim que eu entrei no grupo eu fiz uma postagem pedindo dicas pois estava completamente desnorteada em relação aos próximos passos referente a minha readaptação alimentar e também aproveite o momento para fazer um desabafo e recebi muito apoio. <br/> <br/> Hoje em dia eu ainda utilizo muito os grupos para procurar receitas, ou pesquisar sobre a segurança de marca de produtos que eu não costumo consumir, além de tudo possuem um conteúdo rico de indicações de lugares para comer ou comprar guloseimas sem glúten, de hotéis para hospedagem, experiências em viagens e etc... <br/> <br/>Gostaria de deixar aqui algumas indicações de grupos que me ajudaram no inicio.
      </p>
    </div>
  </div>
  <div className="cards_apoio_container">
    {apoioDados.map((item)=>{
      return(
        <CardApoio key={item.id} image={item.img} text={item.name}/>

      )
    })}
  </div>

 </section>
  </>
  )
}

export default Apoio