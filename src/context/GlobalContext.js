import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useSWR from "swr";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const API = "https://pokeapi.co/api/v2/";
  const [search, setSearch] = useState("");
  const [allPokemons, setAllPokemons] = useState([]);
  const [offsetPageNumber, setOffsetPageNumber] = useState(0);

  const { data: pokemons } = useSWR(
    `${API}pokemon?limit=50&offset=${offsetPageNumber}`
  );

  useEffect(() => {
    const fetchPokemons = async () => {
      if (pokemons?.results) {
        for (let i = 0; i < pokemons.results.length; i++) {
          try {
            const res = await axios.get(pokemons.results[i].url);

            setAllPokemons((prev) => [...prev, res.data]);
          } catch (error) {
            console.error("Error fetching Pokemon:", error);
          }
        }
      }
    };

    fetchPokemons();
  }, [pokemons]);

  const data = {
    allPokemons,
    setAllPokemons,
    pokemons,
    API,
    offsetPageNumber,
    setOffsetPageNumber,
    search,
    setSearch,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContextProvider };
export default GlobalContext;
