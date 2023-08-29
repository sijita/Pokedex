import { useGlobalContext } from "../hooks/useGlobalContext";
import PokemonsCard from "./PokemonsCard";
import { typeBackgroundColor } from "../constants/pokemonTypeColor";

export default function PokemonsGrid() {
  const { allPokemons, search, offsetPageNumber, setOffsetPageNumber } =
    useGlobalContext();

  const results = !search
    ? allPokemons
    : allPokemons.filter((item) =>
        item.name
          .replace(/\s+/g, "")
          .toLowerCase()
          .includes(search.replace(/\s+/g, "").toLowerCase())
      );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-20 p-5">
      {results?.map((pokemon, i) => (
        <PokemonsCard
          key={i}
          name={pokemon.name}
          number={pokemon.id}
          image={pokemon.sprites.front_default}
          type={pokemon.types[0].type.name}
          secondaryType={pokemon.types[1]?.type.name}
          secondaryColor={typeBackgroundColor[pokemon.types[1]?.type.name]}
          color={
            typeBackgroundColor[
              pokemon.types[0].type.name ?? pokemon.types[1].type.name
            ]
          }
          textColor={
            pokemon.types[0].type.name == "electric" ||
            pokemon.types[0].type.name == "steel" ||
            pokemon.types[0].type.name == "ghost" ||
            pokemon.types[0].type.name == "psychic" ||
            pokemon.types[0].type.name == "ice" ||
            pokemon.types[1]?.type.name == "electric" ||
            pokemon.types[1]?.type.name == "steel" ||
            pokemon.types[1]?.type.name == "ghost" ||
            pokemon.types[1]?.type.name == "psychic" ||
            pokemon.types[1]?.type.name == "ice"
              ? "text-black"
              : "text-white"
          }
        />
      ))}
      <button
        className="btn bg-white text-black hover:bg-white/50 hover:text-white col-span-4"
        onClick={() => setOffsetPageNumber(offsetPageNumber + 50)}
      >
        Cargar más
      </button>
    </div>
  );
}
