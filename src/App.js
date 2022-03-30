import "./App.css";
import PokemonGrid from "./components/PokemonGrid";
import { useEffect, useState } from "react";
import { getAllData, getPokemon } from "./api";

// Hooks: useState , useEffect
const App = () => {
  const [pokemons, setPokemons] = useState([]);

  const getAllPokemons = async () => {
    const data = await getAllData();

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
  }, []);

  return (
    <div className="app-container">
      <h1>Pokemon API example</h1>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};

export default App;
