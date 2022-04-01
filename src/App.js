import "./App.css";
import PokemonGrid from "./components/PokemonGrid";
import { useEffect, useState } from "react";
import { getAllData, getPokemon } from "./api";

// Hooks: useState , useEffect
const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  // Page modifiers
  const lastPage = () => {
    // fist appoach  (0,1) pa
    setPage(Math.max(page - 1 , 1));
    console.log(page);
  };
  
  const nextPage = () => {
    setPage(Math.min(page + 1, total));
    console.log(page);
  };

  // Function
  const getAllPokemons = async () => {

    const data = await getAllData(10, 10*page);
    setTotal(data.count);

    // Set Promises
    const promises = data.results.map(async (pokemon) => {
      return await getPokemon(pokemon.url);
    });
    const results = await Promise.all(promises);

    setPokemons(results);
  };
  // to perform some efects when certain changes ocurr in state
  useEffect(() => {
    getAllPokemons();
  }, [page]);
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <div className="app-container">
      <div className="app-logo">
        <img src={imgUrl} alt="logo" />
      </div>

      <PokemonGrid
        pokemons={pokemons}
        total={total}
        onPreviousClick={lastPage}
        onNextClick={nextPage}
        page={page}
      />
    </div>
  );
};

export default App;
