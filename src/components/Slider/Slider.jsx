import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import Card from "../Card/Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";

function Slider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <Card
            title={"Sobre o glúten"}
            image={"../../src/assets/img_sobre_gluten.jpeg"}
            textOne={"Os alimentos que contêm glúten são todos aqueles que podem ser feitos com trigo, cevada, malte ou centeio como bolachas, bolos, biscoitos, pães, torradas, cervejas, macarrão e massa de pizza, por exemplo."}
            textTwo={"No geral, uma alimentação balanceada inclui muitos alimentos com trigo, o que faz com que o glúten seja consumido em grandes quantidades. Por isso, algumas pessoas observam melhoras na saúde, especialmente o equilíbrio nas funções do intestino, quando reduzem o consumo de glúten."}

          />
        </SwiperSlide>
        <SwiperSlide>
        <Card
            title={"Ta, mas o que é a Doença celíaca?"}
            image={"../../../src/assets/image_doenca_celiaca.jpeg"}
            textOne={"A doença celíaca é uma desordem sistêmica autoimune, desencadeada pela ingestão de glúten. É caracterizada pela inflamação crônica da mucosa do intestino delgado que pode resultar na atrofia das vilosidades intestinais, com conseqüente má absorção intestinal e suas manifestações clínicas."}
            textTwo={"A doença celíaca ocorre em pessoas com tendência genética à doença. Geralmente aparece na infância, em crianças com idade entre 1 e 3 anos, mas pode surgir em qualquer idade, inclusive nas pessoas adultas e idosas."}

          />
        </SwiperSlide>
        <SwiperSlide>
        <Card
            title={"E quais são os sintomas mais comuns?"}
            image={"../../../src/assets/image_sintomas.png"}
            textOne={"Geralmente, a doença se manifesta na infância, mas o diagnóstico pode ser tardio. Por ser uma enfermidade que também provoca a baixa absorção de nutrientes, isso pode aumentar a chance de a pessoa desenvolver osteoporose. Os sintomas mais comuns são:"}
            item1={'Anemia'}
            item2={'Cólicas intestinais'}
            item3={'Falta de apetite'}
            item4={'Perda de peso'}
            item5={'Prisão de ventre ou diarreia'}
            item6={'Dores ou inchaços abdominais'}
            item7={'Sensação de estufamento da barriga'}
           

          />
        </SwiperSlide>
        
        
      </Swiper>
    </>
  );
}

export default Slider;
