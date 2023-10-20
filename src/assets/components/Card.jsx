import React from 'react';

export default function Card({ pokeName, pokeSprite }){
    return (
        <>
            <h2 className='card-title'>{pokeName}</h2>
            <img src={pokeSprite} alt={`A sprite of ${pokeName} pokemon`} width="200" height="100"/> 
        </>
    )
}