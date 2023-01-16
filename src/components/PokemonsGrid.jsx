import { useGlobalContext } from "../hooks/useGlobalContext";
import PokemonsCard from "./PokemonsCard";
import InfiniteScroll from "react-infinite-scroller";
import {
  typeBackgroundColor,
} from "../constants/pokemonTypeColor";

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
