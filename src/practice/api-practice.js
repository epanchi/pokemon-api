// 
export const getAll = async(limit=20, offset=0) =>{
    let api_url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    try {
        const response = await fetch(api_url);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getOne = async (api_url) =>{
    try {
        const response= await fetch(api_url);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}