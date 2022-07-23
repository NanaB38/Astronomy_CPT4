import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const Navbar = ({ nasaPic }) => {
  return (
    <nav className='navbar'>
      <ul className='navLinks'>
        <li>
          <Link to='/' className='navbarLi'>
            Home
          </Link>
        </li>
        <li>
          <div className='navbarLi'>Astronomy Picture of the day</div>
        </li>
        <li>
          <Link to='/Share' className='navbarLi'>
            Share a picture
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
