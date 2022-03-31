import React from "react";
import PokemonDetail from "./PokemonDetail";

const PokemonGrid = (props) => {
  const { pokemons } = props;

  return (
    <div className="container">
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
