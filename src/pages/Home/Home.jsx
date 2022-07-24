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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate totam dicta quasi, possimus maiores illo tempore
              incidunt porro blanditiis ducimus sunt nihil! Nisi atque odit
              temporibus, minus quas quidem vero. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Cupiditate totam dicta quasi,
              possimus maiores illo tempore incidunt porro blanditiis ducimus
              sunt nihil! Nisi atque odit temporibus, minus quas quidem vero.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate totam dicta quasi, possimus maiores illo tempore
              incidunt porro blanditiis ducimus sunt nihil! Nisi atque odit
              temporibus, minus quas quidem vero.
            </p>
          </div>
        </div>
        <div className="section_slider_container">
          <Slider />
        </div>
      
      </section>
    </>
  );
}

export default Home;
