import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navLinks'>
        <li>
          <Link to='/' className='navbarLi'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/TodayPic' className='navbarLi'>
            Astronomy Picture of the day
          </Link>
        </li>
        <li>
          <Link to='/share' className='navbarLi'>
            Share a picture
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
