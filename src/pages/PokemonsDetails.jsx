import React from "react";
import PokemonCardExtended from "../components/PokemonCardExtended";

export default function PokemonsDetails() {
  return (
    <div className="p-20 grid place-content-center justify-items-center gap-20">
      <h1 className="text-5xl sm:text-7xl text-white font-bold break-all">Pokedex</h1>
      <PokemonCardExtended />
    </div>
  );
}
