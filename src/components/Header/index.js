import React from 'react';
import logo from '../../assets/logo.svg';
import profile from '../../assets/profile.svg';

import './style.css';

const Header = ({ black }) => {
  return (
    <div>
      <header className={black ? 'black' : ''}>
        <div className='header--logo'>
          <a href='/'>
            <img src={logo} alt='Logo Netflix' />
          </a>
        </div>
        <div className='header--user'>
          <a href='/'>
            <img src={profile} alt='Profile imagem' />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
