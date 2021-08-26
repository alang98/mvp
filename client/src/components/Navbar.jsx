import React from 'react';

const Navbar = (props) => {

  return (
      <nav className='navbar'>
        <div className='brand-title'>Some Super Cool Logo *Gasp* </div>
        <a href="#" class='toggle-button'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </a>
        <div className='navbar-links'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
      </nav>
        );
};
export default Navbar;