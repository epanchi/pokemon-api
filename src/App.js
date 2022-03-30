import "./App.css";
import PokemonGrid from "./components/PokemonGrid";
import { useEffect, useState } from "react";
import { getAllData } from "./api";

// Hooks: useState , useEffect
const App = () => {
  const [pokemons, setPokemons] = useState([]);

  const getAllPokemons = async () => {
    const data = await getAllData();
    setPokemons(data);
    console.log(pokemons);
  };
  // to perform some efects when certain changes ocurr in state
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1>Pokemon API example</h1>
      <PokemonGrid />
    </div>
  );
};

export default App;
