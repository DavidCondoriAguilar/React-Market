import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoriaPage from "./pages/CategoriaPage";
import GuiaPage from "./pages/GuiaPage";
import LocalPage from "./pages/LocalPage";
import OrdenPage from "./pages/OrdenPage";
import ProductoPage from "./pages/ProductoPage";
import ProveedorPage from "./pages/ProveedorPage";
import Inicio from "./pages/Inicio";

import Header from "./components/common/Header";
import AuthLayout from "./components/layouts/AuthLayout";

const App = () => {
  return (
    <>
      {/*ASI SE EJECUTA COMENTARIO*/}

      <BrowserRouter>
        {/* <MainHeader /> */}
        <Header />
        <Routes>
          <Route index path="/" element={<Inicio />} />
          <Route path="/CategoriaPage" element={<CategoriaPage />} />
          <Route path="/GuiaPage" element={<GuiaPage />} />
          <Route path="/LocalPage" element={<LocalPage />} />
          <Route path="/OrdenPage" element={<OrdenPage />} />
          <Route path="/ProductoPage" element={<ProductoPage />} />
          <Route path="/ProveedorPage" element={<ProveedorPage />} />
          <Route path="/AuthLayout" element={<AuthLayout />} />

          {/* <Route
            path="/productoDetalles/:idproducto"
            element={<Carritos />}
          />
          <Route path="/carrito" element={<Carrito />} /> */}
        </Routes>

        {/* <MainFooter /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
