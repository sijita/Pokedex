import PokemonCardExtended from "../components/PokemonCardExtended";
import { Link } from "react-router-dom";

export default function PokemonsDetails() {
  return (
    <div className="p-20 flex flex-col gap-20">
      <Link
        to="/"
        className="text-5xl sm:text-7xl text-white font-bold break-all text-center"
      >
        Pokedex
      </Link>
      <PokemonCardExtended />
    </div>
  );
}
