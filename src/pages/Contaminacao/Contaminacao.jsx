import "./contaminacao.css";

function Contaminacao() {
  return (
    <section className="contaminacao_section">
      <div className="contaminacao_div_container">
        <div className="contaminacao_div_text">
          <h1>Entendendo melhor sobre a Contaminação Cruzada</h1>
          <p>
            A contaminação cruzada é a presença de partículas de glúten em
            alimentos ou utensílios que originalmente não deveriam ter. Essa
            contaminação pode acontecer durante o plantio, colheita,
            armazenamento ou preparo dos alimentos. Muitos produtos rotulados
            com “Não contem glúten” apresentam quantidades mínimas em sua
            composição e não podem ser consumidos por celíacos. Por exemplo, um
            produto sem glúten embalado na mesma máquina que se embala produtos
            com glúten. A contaminação também é frequente em silos de
            armazenagem e transporte de alimentos, por isso todas as vezes que
            descobrir um produto novo isento de glúten o celíaco deve entrar em
            contato com o SAC para verificar se é seguro para o consumo. Outro
            exemplo clássico é o reaproveitamento de óleo para frituras, em um
            mesmo recipiente frita-se pastel e batatas, certamente partículas de
            glúten vão aderir as batatas causando danos ao celíaco.
          </p>
          <span className="contaminacao_image_container">
          <img className="contaminacao_image" src="https://i.ibb.co/b1sT2ww/undraw-medicine-b1ol.png"/>
          </span>
        </div>
        <div className="contaminacao_div_video">
          <h1>Dicas sobre como evitar a contaminação cruzada:</h1>
          <span className="contaminacao_container_video">
          <iframe className="contaminacao_video"
            src="https://www.youtube.com/embed/XaUBvbjrBzo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contaminacao;
