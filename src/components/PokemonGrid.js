import React from "react";

const PokemonGrid = (props) => {
  const { pokemons } = props;

  return (
    <div className="container">
      <div className="all-container">
        {pokemons.map((pokemon, index) => {
          return (
            <div className="pokemon" key={index}>
              {pokemon.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonGrid;
