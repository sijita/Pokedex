import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonsDetails from "./pages/PokemonsDetails";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:name" element={<PokemonsDetails />} />
    </Routes>
  );
}

export default App;
