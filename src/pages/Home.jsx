import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/globals.css';
import videoBg from '../assets/videoBg.mp4';
import nasaLogo from '../assets/images/nasa-logo-1280x1059.png';
import { Link } from 'react-router-dom';
import TodayPic from '../components/TodayPic';

function Home() {
  const [nasaPic, setNasaPic] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=qEZqOhHNDtTP8sacKzgmhZWJEt4PTViHsMkv6ZMj'
      )
      // .then((res) => console.log(res.data));
      .then((res) => setNasaPic(res.data));
  }, []);

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
        <h1 className='titleHome'>Welcome Earthlings !</h1>
        <p className='intro'>
          In this app, you can find incredible pictures of planets and galaxies
        </p>
        <form>
          <label htmlFor=''>
            <select
              id='selectPlanet'
              // onChange={() => setState()}
            >
              <option value=''>Choose an astronomy picture</option>
              <option value='earth'>Earth</option>
              <option value='mars'>Mars</option>
              <option value='mercury'>Mercury</option>
              <option value='venus'>Venus</option>
              <option value='jupiter'>Jupiter</option>
              <option value='neptune'>Neptune</option>
              <option value='saturn'>Saturn</option>
              <option value='uranus'>Uranus</option>
            </select>
          </label>
        </form>
        <TodayPic nasaPic={nasaPic} />
      </div>
    </div>
  );
}

export default Home;
