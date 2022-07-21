import React, { useEffect, useState } from 'react';
import axios from 'axios';
import videoBg from '../assets/videoBg.mp4';
import nasaLogo from '../assets/images/nasa-logo-1280x1059.png';
import { Link } from 'react-router-dom';
// import TodayPic from '../components/TodayPic';
import PlanetDetails from '../components/PlanetDetails';
import '../styles/globals.css';
import '../styles/index.css';

function Home() {
  // const [nasaPic, setNasaPic] = useState('');
  const [planet, setPlanet] = useState([]);
  const [filterPlanet, setFilterPlanet] = useState('');
  const [infoPlanet, setInfoPlanet] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_KEY}`
  //     )
  //     .then((res) => setNasaPic(res.data));
  // }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3001/planets')
      .then((res) => setPlanet(res.data));
    // setInfoPlanet(res.data);
  }, []);

  const handleChange = (value) => {
    setFilterPlanet(value);
  };

  return (
    <div className='home'>
      <div className='homeContainer'></div>
      <video src={videoBg} loop autoPlay muted />
      <div className='container'>
        <div className='logoNasa'>
          <Link to='/'>
            <img src={nasaLogo} alt='nasa-logo' width={'90px'} />
          </Link>
        </div>
        <h1 className='titleHome text-yellow-200'>Welcome Earthlings !</h1>
        <p className='intro'>
          In this app, you can find incredible pictures of planets and galaxies
        </p>
        <form className='selecter'>
          <label htmlFor='selectPlanet' className=''>
            <select
              id='selectPlanet'
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value=''>Choose an astronomy picture</option>
              <option value='all'>All planets</option>
              {planet.map((pl) => (
                <option key={pl.id} value={pl.id}>
                  {pl.name}
                </option>
              ))}
            </select>
          </label>
        </form>{' '}
        <ul className='planets-list'>
          <li lassName='planet-item'>
            {infoPlanet
              .filter((fil) =>
                fil.name === filterPlanet ? filterPlanet : !filterPlanet
              )
              .map((planets) => (
                <Link to={`/planets/${planets.id}`} key={planets.id}>
                  <PlanetDetails planets={planets} />
                </Link>
              ))}
          </li>
        </ul>
        {/* <TodayPic nasaPic={nasaPic} /> */}
      </div>
    </div>
  );
}

export default Home;
