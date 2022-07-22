import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const PlanetDetails = ({ results, showPlanet, setShowPlanet }) => {
  const handlePlanet = () => {
    setShowPlanet(!showPlanet);
  };
  return (
    <>
      {showPlanet && (
        <div className='planet-details'>
          <div className='close-button' onClick={handlePlanet}></div>
          <AiOutlineClose />
          <div>
            <h1>{results.name}</h1>
            <img src={results.picture} alt={results.name} />
            <p>{results.details}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PlanetDetails;
