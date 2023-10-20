import React from 'react'
import Card from "./Card";
import fetchPokeData from '../utils/fetchPokeData';
import { useEffect, useState } from 'react';

import '../styles/cardlist.css';

export default function CardList() {
    const [fetchObjectArray, setFetchObjectArray] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const newFetchObjectArray = [];
  
          for (let index = 1; index < 25; index++) {
            const pokemonObject = await fetchPokeData(index);
            newFetchObjectArray.push(pokemonObject);
          }
  
          setFetchObjectArray(newFetchObjectArray);
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchData();
    }, []);
  
    return (
      <ul className='card-list flex flex-row flex-wrap'>
        {fetchObjectArray.map((item) => (
          <li key={item.id}>
            <Card pokeName={item?.data?.name || "erro"} pokeSprite={item?.data?.sprites?.front_default || "erro"} />
          </li>
        ))}
      </ul>
    );
}