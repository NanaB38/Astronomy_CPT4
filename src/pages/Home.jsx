import React, { useEffect, useState } from 'react';
import axios from 'axios';
import videoBg from '../assets/videoBg.mp4';
import nasaLogo from '../assets/images/nasa-logo-1280x1059.png';
import { Link } from 'react-router-dom';
import TodayPic from '../components/TodayPic';
import PlanetDetails from '../components/PlanetDetails';
// import { useParams } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/index.css';

function Home() {
  // const { id } = useParams();
  const [nasaPic, setNasaPic] = useState(false);
  const [planetList, setPlanetList] = useState([]);
  const [filterPlanet, setFilterPlanet] = useState('');
  const [infoPlanet, setInfoPlanet] = useState([]);
  const [modalPlanet, setModalPlanet] = useState(false);
  const [home, setHome] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3001/planets')
      .then((res) => setPlanetList(res.data));
  }, []);

  const showPlanets = () => {
    axios
      .get('http://localhost:3001/planets')
      .then((res) => setInfoPlanet(res.data))
      .catch(() => console.error('selecter is not working'));
  };

  const handleShowPlanet = () => {
    showPlanets();
    setModalPlanet(!modalPlanet);
  };

  const handleChange = () => {
    setFilterPlanet();
    handleShowPlanet();
  };

  const changeView = () => {
    setNasaPic(!nasaPic);
    setHome(!home);
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
        {home && (
          <>
            <h1 className='titleHome'>Welcome Earthlings !</h1>
            <p className='intro'>
              In this app, you can find incredible pictures of planets and
              galaxies
            </p>
            <form className='selecter'>
              <label htmlFor='selectPlanet' className=''>
                <select
                  id='selectPlanet'
                  onChange={(e) => handleChange(e.target.value)}
                >
                  <option value=''>Choose an astronomy picture</option>
                  <option key='id' value='all'>
                    All planets
                  </option>
                  {planetList.map((pl) => (
                    <option key={pl.id} value={pl.name}>
                      {pl.name}
                    </option>
                  ))}
                </select>
              </label>
            </form>
            <ul className='planets-list'>
              {infoPlanet
                .filter((fil) =>
                  fil.name === 'Hearth' ? modalPlanet : !modalPlanet
                )
                .map((planets) => (
                  <li className='planet-item'>
                    <PlanetDetails
                      key={planets.id}
                      id={planets.id}
                      planets={planets}
                      modalPlanet={modalPlanet}
                    />
                  </li>
                ))}
            </ul>
            <p className='or'>OR</p>
            <button type='button' onClick={changeView}>
              See Astronomy Picture of the day
            </button>
          </>
        )}
        {nasaPic && (
          <TodayPic
            nasaPic={nasaPic}
            setNasaPic={setNasaPic}
            setHome={setHome}
            home={home}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
