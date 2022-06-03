import React from 'react';
import '../styles/Navbar.scss';
import PersonIcon from '@mui/icons-material/Person';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbarTitle navbarItem">Bookstore</div>
      <div className="navbarItem">
        <a href="/">Books</a>
      </div>
      <div className="navbarItem marginSeparator">
        <a href="/Categories">Categories</a>
      </div>
      <div className="navbarItem iconPerson">
        <PersonIcon color="primary" />
      </div>
    </header>
  );
}

export default Navbar;
