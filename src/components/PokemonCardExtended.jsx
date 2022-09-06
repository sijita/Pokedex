import useSWR from "swr";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useParams } from "react-router-dom";

export default function PokemonCardExtended() {
  const { name } = useParams();
  const { API } = useGlobalContext();

  const { data: pokemon } = useSWR(`${API}pokemon/${name}`);

  return (
    <div className="flex flex-col lg:flex-row gap-36 items-center">
      <div className="flex flex-col items-center sm:items-start gap-10">
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <h2
            className={`order-last sm:order-first text-5xl capitalize text-center font-bold ${
              pokemon.types[0].type.name == "grass"
                ? "text-green-500"
                : pokemon.types[0].type.name == "water"
                ? "text-blue-500"
                : pokemon.types[0].type.name == "fire"
                ? "text-red-500"
                : pokemon.types[0].type.name == "bug"
                ? "text-lime-700"
                : pokemon.types[0].type.name == "poison"
                ? "text-purple-500"
                : pokemon.types[0].type.name == "normal"
                ? "text-gray-500"
                : pokemon.types[0].type.name == "electric"
                ? "text-yellow-300"
                : pokemon.types[0].type.name == "ground"
                ? "text-yellow-700"
                : pokemon.types[0].type.name == "fairy"
                ? "text-pink-500"
                : pokemon.types[0].type.name == "fighting"
                ? "text-red-700"
                : pokemon.types[0].type.name == "psychic"
                ? "text-pink-300"
                : pokemon.types[0].type.name == "rock"
                ? "text-gray-700"
                : pokemon.types[0].type.name == "ghost"
                ? "text-purple-300"
                : pokemon.types[0].type.name == "ice"
                ? "text-blue-300"
                : pokemon.types[0].type.name == "dragon"
                ? "text-purple-700"
                : pokemon.types[0].type.name == "flying"
                ? "text-blue-700"
                : pokemon.types[0].type.name == "dark"
                ? "text-gray-900"
                : pokemon.types[0].type.name == "steel"
                ? "text-gray-300"
                : "gray-500"
            }`}
          >
            {pokemon.name}
          </h2>
          <span className="badge badge-lg font-semibold border-0 bg-white text-black">
            {pokemon.id}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span
            className={`badge badge-lg ${
              pokemon.types[0].type.name == "grass"
                ? "bg-green-500"
                : pokemon.types[0].type.name == "water"
                ? "bg-blue-500"
                : pokemon.types[0].type.name == "fire"
                ? "bg-red-500"
                : pokemon.types[0].type.name == "bug"
                ? "bg-lime-700"
                : pokemon.types[0].type.name == "poison"
                ? "bg-purple-500"
                : pokemon.types[0].type.name == "normal"
                ? "bg-gray-500"
                : pokemon.types[0].type.name == "electric"
                ? "bg-yellow-300"
                : pokemon.types[0].type.name == "ground"
                ? "bg-yellow-700"
                : pokemon.types[0].type.name == "fairy"
                ? "bg-pink-500"
                : pokemon.types[0].type.name == "fighting"
                ? "bg-red-700"
                : pokemon.types[0].type.name == "psychic"
                ? "bg-pink-300"
                : pokemon.types[0].type.name == "rock"
                ? "bg-gray-700"
                : pokemon.types[0].type.name == "ghost"
                ? "bg-purple-300"
                : pokemon.types[0].type.name == "ice"
                ? "bg-blue-300"
                : pokemon.types[0].type.name == "dragon"
                ? "bg-purple-700"
                : pokemon.types[0].type.name == "flying"
                ? "bg-blue-700"
                : pokemon.types[0].type.name == "dark"
                ? "bg-gray-900"
                : pokemon.types[0].type.name == "steel"
                ? "bg-gray-300"
                : "bg-gray-500"
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
        className={`w-4/5 sm:w-80 sm:h-80 mx-auto order-first ${
          pokemon.types[0].type.name == "grass"
            ? "bg-green-500"
            : pokemon.types[0].type.name == "water"
            ? "bg-blue-500"
            : pokemon.types[0].type.name == "fire"
            ? "bg-red-500"
            : pokemon.types[0].type.name == "bug"
            ? "bg-lime-700"
            : pokemon.types[0].type.name == "poison"
            ? "bg-purple-500"
            : pokemon.types[0].type.name == "normal"
            ? "bg-gray-500"
            : pokemon.types[0].type.name == "electric"
            ? "bg-yellow-300"
            : pokemon.types[0].type.name == "ground"
            ? "bg-yellow-700"
            : pokemon.types[0].type.name == "fairy"
            ? "bg-pink-500"
            : pokemon.types[0].type.name == "fighting"
            ? "bg-red-700"
            : pokemon.types[0].type.name == "psychic"
            ? "bg-pink-300"
            : pokemon.types[0].type.name == "rock"
            ? "bg-gray-700"
            : pokemon.types[0].type.name == "ghost"
            ? "bg-purple-300"
            : pokemon.types[0].type.name == "ice"
            ? "bg-blue-300"
            : pokemon.types[0].type.name == "dragon"
            ? "bg-purple-700"
            : pokemon.types[0].type.name == "flying"
            ? "bg-blue-700"
            : pokemon.types[0].type.name == "dark"
            ? "bg-gray-900"
            : pokemon.types[0].type.name == "steel"
            ? "bg-gray-300"
            : "gray-500"
        } rounded-full`}
      />
    </div>
  );
}
