import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SausageCard from './sausage';
import "./main.css";

function Main() {
  const [sausages, setSausages] = useState([]);
  const [filterText, setFilterText] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:8080/sausages');
      setSausages(result.data);
    };
    fetchData();
  }, []);
  
  const handleFilter = (event) => {
    setFilterText(event.target.value.toLowerCase());
  };
  
  const filteredSausages = sausages.filter(
    (sausage) => sausage.owner_city.toLowerCase().includes(filterText)
  );
  
  return (
    <div className='cointainer' id="main">
      <input
        type='text'
        placeholder='Choose your city...'
        value={filterText}
        onChange={handleFilter}
      />
      <div>
        {filteredSausages.length === 0 ? (
          <p>No sausages found.</p>
        ) : (
          filteredSausages.map((sausage) => (
            <SausageCard key={sausage.name} sausage={sausage} />
          ))
        )}
      </div>
    </div>
  );
}

export default Main;
