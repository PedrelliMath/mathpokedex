import axios from 'axios';

export default async function fetchPokeData(num){
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        return response
    }catch(error){
        console.log(error)
    } 
}