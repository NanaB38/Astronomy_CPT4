import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/details.css';

const PlanetDetails = ({ results, modalPlanet, setModalPlanet }) => {
  const handleClosePlanet = () => {
    setModalPlanet(!modalPlanet);
  };
  return (
    <>
      <div className={modalPlanet ? 'planet-details' : 'hide-planet'}>
        <div className='planet-container'>
          <div className='close-button' onClick={handleClosePlanet}>
            <AiOutlineClose />
          </div>
          <div>
            <h1>{results.name}</h1>
            <div className='planet-img'>
              <img
                className='img-details'
                src={results.picture}
                alt={results.name}
              />
            </div>
            <p className='pl-details'>{results.details}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetDetails;
