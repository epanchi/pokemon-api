import React from "react";
import PokemonDetail from "./PokemonDetail";
import Navigation from "./Navigation";

const PokemonGrid = (props) => {
  const { pokemons } = props;

  return (
    <div className="container">
      <Navigation />
      <div className="all-container">
        {pokemons.map((pokemon, index) => {
          return (
            <div className="pokemon" key={pokemon.name}>
              <PokemonDetail pokemon={pokemon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonGrid;
