// API function to create some usefull stuff
// Offset: number of records we have to skip before selecting records

export const getAllData = async (limit = 10, offset = 0) => {
  let api_url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error");
  }
};

// Recover whole infomration for each pokemon
// api_url should be like this: https://pokeapi.co/api/v2/pokemon/ditto
export const getPokemon = async (api_url) => {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
  } catch (error) {}
};
