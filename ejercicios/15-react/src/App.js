import { BrowserRouter, Route, Routes } from "react-router-dom";
import CambioImagen from "./componentes/Eventos/CambioImagen";
import Menu from "./componentes/Menu/Menu";
import Formulario from "./componentes/Formulario/Formulario";
import Profile from "./componentes/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path="/galeria" element={<CambioImagen />} />
        <Route path="/contacto" element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;