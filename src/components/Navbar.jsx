import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';

const Header = () => {
  // const [links, setLinks] = useState(false);

  // const handleLinks = () => {
  //   setLinks(!links);
  // };

  return (
    <nav className='navbar'>
      <ul className='navLinks'>
        <li>
          <Link to='/' className='navbarLi'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/todayPic' className='navbarLi'>
            {/* onClick={handleLinks} */}
            Astronomy Picture of the day
          </Link>
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

export default Header;
