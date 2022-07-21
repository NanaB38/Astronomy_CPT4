import React from 'react';

const PlanetDetails = ({ planets }) => {
  return (
    <div className='planet-details'>
      <h1>{planets.name}</h1>
      <img src={planets.picture} alt={planets.name} />
      <p>{planets.details}</p>
    </div>
  );
};

export default PlanetDetails;
