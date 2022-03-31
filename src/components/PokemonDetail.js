import React from "react";

const PokemonDetail = (props) => {
  const { pokemon } = props;
  let style = pokemon.types[0].type.name;
  return (
    
    <div className={`container-detail ${style}`}>
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <h1>{pokemon.name}</h1>
    </div>
  );
};

export default PokemonDetail;
