import React from "react";

const PokemonDetail = (props) => {
  const { pokemon } = props;
  return (
    <div className="container-detail">
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <h1>{pokemon.name}</h1>
    </div>
  );
};

export default PokemonDetail;
