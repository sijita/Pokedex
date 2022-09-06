import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useSWR from "swr";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const API = "https://pokeapi.co/api/v2/";
  const [offsetPageNumber, setOffsetPageNumber] = useState(0);

  const { data: pokemons } = useSWR(
    API + `pokemon?limit=400&offset=${offsetPageNumber}`
  );

  const [singlePokemon, setSinglePokemon] = useState([]);

  useEffect(() => {
    for (let i = 0; i < pokemons?.results.length; i++) {
      axios
        .get(pokemons.results[i].url)
        .then((res) => setSinglePokemon((prev) => [...prev, res.data]));
    }
  }, [pokemons.results]);

  const [search, setSearch] = useState("");

  const data = {
    pokemons,
    singlePokemon,
    API,
    search,
    setSearch,
    offsetPageNumber,
    setOffsetPageNumber,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContextProvider };
export default GlobalContext;
