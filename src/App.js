import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';



const App = () => {
    const [character, setCharacter] = useState(null);


    useEffect(() => {
    const fetchCharacter = async () => {
        try {
            const response = await axios.get('https://swapi.dev/api/people/1/');
            setCharacter(response.data);
        }catch(error) {
            console.error("There was an error fetching the character desired", error);
        }
    };
    fetchCharacter();
    }, []);
  return (
    <div>
    {character ? (
      <div>
        <h2>{character.name}</h2>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
       
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}

export default App;