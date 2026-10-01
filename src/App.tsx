import { Route, Routes } from "react-router";
import { Inicio } from "./pages/Inicio";

const App = () => {

  return (

    <>
      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/catalogo" element={<Inicio />} />
        <Route path="/login" element={<Inicio />} />
        <Route path="/registro" element={<Inicio />} />

      </Routes>
    </>

  );
};

export default App;