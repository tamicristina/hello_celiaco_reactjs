import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ContaminacaoCruzada from "../pages/Contaminacao/Contaminacao";
import RedeDeApoio from "../pages/Apoio/Apoio";
import AlimentacaoSegura from "../pages/Alimentacao/Alimentacao";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contaminacao" element={<ContaminacaoCruzada />} />
        <Route path="apoio" element={<RedeDeApoio />} />
        <Route path="alimentacao" element={<AlimentacaoSegura />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
