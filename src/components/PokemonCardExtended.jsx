import useSWR from "swr";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useParams } from "react-router-dom";
import {
  typeTextColor,
  typeBackgroundColor,
} from "../constants/pokemonTypeColor";

export default function PokemonCardExtended() {
  const { name } = useParams();
  const { API } = useGlobalContext();

  const { data: pokemon } = useSWR(name && `${API}pokemon/${name}`);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly gap-20">
      {pokemon && (
        <>
          <div className="flex flex-col items-center sm:items-start gap-10">
            <div className="flex flex-col sm:flex-row items-center gap-10">
              <h2
                className={`order-last sm:order-first text-5xl capitalize text-center font-bold ${
                  typeTextColor[pokemon?.types[0].type.name]
                }`}
              >
                {pokemon.name}
              </h2>
              <span className="badge badge-lg font-semibold border-0 bg-white text-black">
                {pokemon.id}
              </span>
              <div className="flex gap-2 flex-wrap">
                <span
                  className={`badge badge-lg ${
                    typeBackgroundColor[pokemon?.types[0].type.name]
                  } ${
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
                  } contrast-150 drop-shadow border-0`}
                >
                  {pokemon.types[0].type.name}
                </span>
                {pokemon.types[1]?.type.name && (
                  <span
                    className={`badge badge-lg ${
                      typeBackgroundColor[pokemon?.types[1].type.name]
                    } ${
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
                    } contrast-150 drop-shadow border-0`}
                  >
                    {pokemon.types[1]?.type.name}
                  </span>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-5 text-white">
                Habilidades
              </h3>
              {pokemon.abilities.map((ability, i) => (
                <p key={i} className="text-2xl">
                  {ability.ability.name}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-5 text-white">
                Estadisticas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {pokemon.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <p className="capitalize font-semibold">{stat.stat.name}</p>
                    <div
                      className={`radial-progress ${
                        stat.base_stat <= 50
                          ? "text-red-500"
                          : stat.base_stat >= 51 && stat.base_stat <= 59
                          ? "text-orange-600"
                          : stat.base_stat >= 60 && stat.base_stat <= 80
                          ? "text-yellow-600"
                          : stat.base_stat >= 81 && stat.base_stat <= 100
                          ? "text-yellow-300"
                          : "text-green-500"
                      }`}
                      style={{ "--value": stat.base_stat }}
                    >
                      <p>{stat.base_stat}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <img
            src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name}
            className={`w-4/5 sm:w-80 sm:h-80 order-first ${
              typeBackgroundColor[pokemon?.types[0].type.name]
            } rounded-full`}
          />
        </>
      )}
    </div>
  );
}
