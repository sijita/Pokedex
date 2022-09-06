import { useGlobalContext } from "../hooks/useGlobalContext";
import PokemonsCard from "./PokemonsCard";
import InfiniteScroll from "react-infinite-scroller";

export default function PokemonsGrid() {
  const { singlePokemon, search, pokemons, setOffsetPageNumber } =
    useGlobalContext();

  const results = !search
    ? singlePokemon
    : singlePokemon.filter((item) =>
        item.name
          .replace(/\s+/g, "")
          .toLowerCase()
          .includes(search.replace(/\s+/g, "").toLowerCase())
      );

  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        //dataLength={pokemons.results.length}
        hasMore={pokemons.next ? true : false}
        initialLoad={false}
        loadMore={() => {
          setOffsetPageNumber((prev) => prev + 400);
        }}
        loader={<h4 className="text-3xl font-semibold">Cargando...</h4>}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-20"
      >
        {results.length !== 0 ? (
          results.map((pokemon, i) => (
            <PokemonsCard
              key={i}
              name={pokemon.name}
              number={pokemon.id}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
              secondaryType={pokemon.types[1]?.type.name}
              secondaryColor={
                pokemon.types[1]?.type.name == "grass"
                  ? "bg-green-500"
                  : pokemon.types[1]?.type.name == "water"
                  ? "bg-blue-500"
                  : pokemon.types[1]?.type.name == "fire"
                  ? "bg-red-500"
                  : pokemon.types[1]?.type.name == "bug"
                  ? "bg-lime-700"
                  : pokemon.types[1]?.type.name == "poison"
                  ? "bg-purple-500"
                  : pokemon.types[1]?.type.name == "normal"
                  ? "bg-gray-500"
                  : pokemon.types[1]?.type.name == "electric"
                  ? "bg-yellow-300"
                  : pokemon.types[1]?.type.name == "ground"
                  ? "bg-yellow-700"
                  : pokemon.types[1]?.type.name == "fairy"
                  ? "bg-pink-500"
                  : pokemon.types[1]?.type.name == "fighting"
                  ? "bg-red-700"
                  : pokemon.types[1]?.type.name == "psychic"
                  ? "bg-pink-300"
                  : pokemon.types[1]?.type.name == "rock"
                  ? "bg-gray-700"
                  : pokemon.types[1]?.type.name == "ghost"
                  ? "bg-purple-300"
                  : pokemon.types[1]?.type.name == "ice"
                  ? "bg-blue-300"
                  : pokemon.types[1]?.type.name == "dragon"
                  ? "bg-purple-700"
                  : pokemon.types[1]?.type.name == "flying"
                  ? "bg-blue-700"
                  : pokemon.types[1]?.type.name == "dark"
                  ? "bg-gray-900"
                  : pokemon.types[1]?.type.name == "steel"
                  ? "bg-gray-300"
                  : "bg-gray-500"
              }
              color={
                pokemon.types[0].type.name == "grass" ||
                pokemon.types[1]?.type.name == "grass"
                  ? "bg-green-500"
                  : pokemon.types[0].type.name == "water" ||
                    pokemon.types[1]?.type.name == "water"
                  ? "bg-blue-500"
                  : pokemon.types[0].type.name == "fire" ||
                    pokemon.types[1]?.type.name == "fire"
                  ? "bg-red-500"
                  : pokemon.types[0].type.name == "bug" ||
                    pokemon.types[1]?.type.name == "bug"
                  ? "bg-lime-700"
                  : pokemon.types[0].type.name == "poison" ||
                    pokemon.types[1]?.type.name == "poison"
                  ? "bg-purple-500"
                  : pokemon.types[0].type.name == "normal" ||
                    pokemon.types[1]?.type.name == "normal"
                  ? "bg-gray-500"
                  : pokemon.types[0].type.name == "electric" ||
                    pokemon.types[1]?.type.name == "electronic"
                  ? "bg-yellow-300"
                  : pokemon.types[0].type.name == "ground" ||
                    pokemon.types[1]?.type.name == "ground"
                  ? "bg-yellow-700"
                  : pokemon.types[0].type.name == "fairy" ||
                    pokemon.types[1]?.type.name == "fairy"
                  ? "bg-pink-500"
                  : pokemon.types[0].type.name == "fighting" ||
                    pokemon.types[1]?.type.name == "fighting"
                  ? "bg-red-700"
                  : pokemon.types[0].type.name == "psychic" ||
                    pokemon.types[1]?.type.name == "psychic"
                  ? "bg-pink-300"
                  : pokemon.types[0].type.name == "rock" ||
                    pokemon.types[1]?.type.name == "rock"
                  ? "bg-gray-700"
                  : pokemon.types[0].type.name == "ghost" ||
                    pokemon.types[1]?.type.name == "ghost"
                  ? "bg-purple-300"
                  : pokemon.types[0].type.name == "ice" ||
                    pokemon.types[1]?.type.name == "ice"
                  ? "bg-blue-300"
                  : pokemon.types[0].type.name == "dragon" ||
                    pokemon.types[1]?.type.name == "dragon"
                  ? "bg-purple-700"
                  : pokemon.types[0].type.name == "flying" ||
                    pokemon.types[1]?.type.name == "flying"
                  ? "bg-blue-700"
                  : pokemon.types[0].type.name == "dark" ||
                    pokemon.types[1]?.type.name == "dark"
                  ? "bg-gray-900"
                  : pokemon.types[0].type.name == "steel" ||
                    pokemon.types[1]?.type.name == "steel"
                  ? "bg-gray-300"
                  : "bg-gray-500"
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
          ))
        ) : (
          <div className="flex justify-center items-center w-full grow">
            <p className="text-2xl font-bold">No Pokemon Found</p>
          </div>
        )}
      </InfiniteScroll>
    </div>
  );
}
