import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import videoBg from '../assets/videoBg.mp4';
import nasaLogo from '../assets/images/nasa-logo-1280x1059.png';
import { Link } from 'react-router-dom';
import TodayPic from '../components/TodayPic';
import PlanetDetails from '../components/PlanetDetails';
import { useParams } from 'react-router-dom';
import '../styles/globals.css';

function Home() {
  const [nasaPic, setNasaPic] = useState(false);
  const [planetList, setPlanetList] = useState([]);
  const [infoPlanet, setInfoPlanet] = useState('');
  const [modalPlanet, setModalPlanet] = useState(false);
  const [home, setHome] = useState(true);
  const [results, setResults] = useState([]);
  const [showPlanet, setShowPlanet] = useState(true);
  const params = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:3001/planets')
      .then((res) => setPlanetList(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/planets/${infoPlanet}`)
      .then((res) => res.data)
      .then((data) => {
        setResults(data[0]);
      })
      .catch(() => {
        alert('No search results');
      });
  }, [infoPlanet]);

  console.log(infoPlanet);

  console.log(results);

  const handleShowPlanet = (value) => {
    setModalPlanet(!modalPlanet);
    setInfoPlanet(value);
  };

  const changeView = () => {
    setNasaPic(!nasaPic);
    setHome(!home);
  };

  const handlePlanet = () => {
    setShowPlanet(!showPlanet);
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
                  onChange={(e) => handleShowPlanet(e.target.value)}
                >
                  <option key='' value=''>
                    Choose an astronomy picture
                  </option>
                  {/* <option key='id' value='all'>
                    All planets
                  </option> */}
                  {planetList.map((pl) => (
                    <option key={pl.id} value={pl.value}>
                      {pl.name}
                    </option>
                  ))}
                </select>
              </label>
            </form>
            <ul className='planets-list'>
              {modalPlanet && (
                <li className='planet-item'>
                  <PlanetDetails
                    key={results.id}
                    id={results.id}
                    results={results}
                    showPlanet={showPlanet}
                    setShowPlanet={setShowPlanet}
                    setHome={setHome}
                    home={home}
                  />
                </li>
              )}
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
