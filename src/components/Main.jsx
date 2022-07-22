import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Share from '../pages/Share';
import '../styles/globals.css';
import '../styles/share.css';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/share' element={<Share />} />
      </Routes>
    </main>
  );
}
