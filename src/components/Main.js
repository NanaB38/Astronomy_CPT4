import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Suggestions from '../pages/Suggestions';
import '../App.css';

export default function Main() {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/suggestions' element={<Suggestions />} />
      </Routes>
    </div>
  );
}
