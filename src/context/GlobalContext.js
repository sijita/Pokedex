import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import useSWR from "swr";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const API = "https://pokeapi.co/api/v2/";

  const savedScrollPositionRef = useRef(0);
  const [search, setSearch] = useState("");
  const [reachedBottom, setReachedBottom] = useState(false);
  const [allPokemons, setAllPokemons] = useState([]);
  const [offsetPageNumber, setOffsetPageNumber] = useState(0);

  const { data: pokemons, isValidating } = useSWR(
    `${API}pokemon?limit=50&offset=${offsetPageNumber}`
  );

  useEffect(() => {
    if (reachedBottom) {
      setOffsetPageNumber((prev) => prev + 50);
    }
  }, [reachedBottom]);

  useEffect(() => {
    const fetchPokemons = async () => {
      if (pokemons?.results) {
        savedScrollPositionRef.current = window.scrollY;
        for (let i = 0; i < pokemons.results.length; i++) {
          try {
            const res = await axios.get(pokemons.results[i].url);

            setAllPokemons((prev) => [...prev, res.data]);

            window.scrollTo(0, savedScrollPositionRef.current);
          } catch (error) {
            console.log(error);
            console.error("Error fetching Pokemon:", error);
          }
        }
      }
    };

    fetchPokemons();
  }, [pokemons]);

  const data = {
    isValidating,
    allPokemons,
    setAllPokemons,
    pokemons,
    API,
    offsetPageNumber,
    setOffsetPageNumber,
    search,
    setSearch,
    reachedBottom,
    setReachedBottom,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContextProvider };
export default GlobalContext;
