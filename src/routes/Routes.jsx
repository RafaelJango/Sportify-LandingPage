import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Produtos from "../pages/Produtos/Produtos";
import Sobre from "../pages/Sobre/Sobre";
import Contato from "../pages/Contato/Contato";
import Error from "../pages/Error/Error";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;
