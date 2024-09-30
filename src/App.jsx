
import './App.css'

import React, { useEffect, useState } from 'react';
import { getAllStarships } from './Services/sw-api';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const allStarships = await getAllStarships();
      setStarships(allStarships);
    };

    fetchStarships();
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <div className="starship-cards">
        {starships.map((starship, index) => (
          <div key={index} className="starship-card">
            <h2>{starship.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;







