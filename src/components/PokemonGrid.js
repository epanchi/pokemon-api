import React from "react";
import PokemonDetail from "./PokemonDetail";
import Navigation from "./Navigation";

const PokemonGrid = (props) => {
  const { pokemons, total, onPreviousClick, onNextClick } = props;

  return (
    <div className="container">
      <div className="pagination">
        <Navigation total={total} onPreviousClick={onPreviousClick} onNextClick={onNextClick} />
      </div>
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
