import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Share from '../pages/Share';
import '../styles/index.css';
import '../styles/share.css';
import '../styles/details.css';

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
