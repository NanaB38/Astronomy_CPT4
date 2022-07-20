import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/globals.css';

const Header = () => {
  const [links, setLinks] = useState(false);

  const handleLinks = () => {
    setLinks(!links);
  };
  return (
    <div className='header'>
      <nav className='navbar'>
        <ul className='navLinks'>
          <li>
            <Link to='/' className='navbarLi'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/' className='navbarLi' onClick={handleLinks}>
              Astronomy Picture of the day
            </Link>
          </li>
          <li>
            <Link to='/' className='navbarLi' onClick={handleLinks}>
              Share a picture
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
