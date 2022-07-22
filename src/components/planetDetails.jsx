import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/details.css';

const PlanetDetails = ({ results, home, setHome }) => {
  return (
    <>
      <div className='planet-details'>
        <div className='planet-container'>
          <div className='close-button'>
            {/* onClick={handlePlanet} */}
            <AiOutlineClose />
          </div>
          <div>
            <h1>{results.name}</h1>
            <div className='planet-img'>
              <img src={results.picture} alt={results.name} />
            </div>
            <p>{results.details}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetDetails;
