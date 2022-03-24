import React from 'react';
import PropTypes from 'prop-types';
import logo from './images/logo.svg'
import star from './images/shooting-star.svg'
import AddTokenButton from './AddTokenButton';
import './Header.css'

function Header({ home }) {
  return (
    <main>
      <div className="logo">
        <img src={logo} alt="logo klever" width="150px" /><br />
      </div>
      <div className="title">
        <div>
          <img src={star} alt="shooting star" width="25px" />
          <span>Wish Wallet</span>
        </div>
        {home && <AddTokenButton />}
      </div>
    </main>
  );
}

Header.propTypes = {
  home: PropTypes.bool.isRequired,
}; 

export default Header;