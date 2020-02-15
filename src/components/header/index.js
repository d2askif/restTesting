import React from 'react';
import './styles.scss';
import Logo from './logo.png';

const Header = props => {
  return (
    <header data-test='headerComponent'>
      <div className='wrapper'>
        <div className='logo' data-test='logo'>
          <img src={Logo} alt='Logo'></img>
        </div>
      </div>
    </header>
  );
};
export default Header;
