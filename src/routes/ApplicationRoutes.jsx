import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../pages/Sobre/Sobre";
import ContaminacaoCruzada from "../pages/Contaminacao/Contaminacao";
import RedeDeApoio from "../pages/Apoio/Apoio";
import AlimentacaoSegura from "../pages/Alimentacao/Alimentacao";
import Menu from "../components/Menu/Menu";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="contaminacao" element={<ContaminacaoCruzada />} />
        <Route path="apoio" element={<RedeDeApoio />} />
        <Route path="alimentacao" element={<AlimentacaoSegura />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
