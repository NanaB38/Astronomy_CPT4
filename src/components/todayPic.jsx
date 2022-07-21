import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/globals.css';

export default function TodayPic({ nasaPic, setNasaPic, home, setHome }) {
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_KEY}`
      )
      .then((res) => setNasaPic(res.data));
  }, []);

  const handleClose = () => {
    setNasaPic(!nasaPic);
    setHome(!home);
  };

  return (
    <>
      {nasaPic && (
        <>
          <div className='today-pic'>
            <div className='close-button' onClick={handleClose}>
              <AiOutlineClose />
            </div>
            <div className='tp-container'>
              <h1 className='title-pic'>{nasaPic.title}</h1>
              <h2 className='date-pic'>{nasaPic.date}</h2>
              <img
                className='today-img'
                src={nasaPic.url}
                alt={nasaPic.title}
              />
              <div className=''>
                <p className='details-pic'>{nasaPic.explanation}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
