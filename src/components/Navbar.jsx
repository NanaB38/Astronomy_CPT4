import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const [links, setLinks] = useState(false);
  const [picNasa, setPicNasa] = useState(false);

  const handleShowPic = () => {
    setPicNasa(!picNasa);
  };

  return (
    <nav className='navbar'>
      <ul className='navLinks'>
        <li>
          <Link to='/' className='navbarLi'>
            Home
          </Link>
        </li>
        <li>
          <div onClick={handleShowPic}>Astronomy Picture of the day</div>
        </li>
        <li>
          <Link to='/' className='navbarLi'>
            Share a picture
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
