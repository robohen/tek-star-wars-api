import React from 'react'
import { useState, useEffect } from 'react';
import { getAllStarships } from "./services/sw-api";
import './style.css';


const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipsData = await getAllStarships();
      setStarships(starshipsData);
    };

    fetchStarships();
  }, []);

  return (
    <div className='card-container'>
      {starships.length > 0 ? (
        starships.map(starship => (
          <div key={starship.name}>
            <Card name={starship.name} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const Card = ({ name }) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
    </div>
  );
};

export default App;