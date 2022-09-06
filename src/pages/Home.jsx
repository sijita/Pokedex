import PokemonsGrid from "../components/PokemonsGrid";
import { useGlobalContext } from "../hooks/useGlobalContext";

export default function Home() {
  const { setSearch } = useGlobalContext();

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-10 md:p-:20 grid place-content-center justify-items-center gap-20">
      <h1 className="text-5xl sm:text-7xl break-all text-white font-bold">Pokedex</h1>
      <div className="form-control  w-full lg:w-96 text-lg">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="input input-bordered text-lg"
          onChange={searcher}
        />
      </div>
      <PokemonsGrid />
    </div>
  );
}
