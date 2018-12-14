import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="header__left">
      <div className="logo--white">
        <Link to="/">GigHunter LOGO</Link>
      </div>
    </div>
    <div className="header__right">
      <div>
        <Link to="/route1">Product&nbsp;&#x25BC;</Link>
      </div>
      <div>
        <Link to="/route2">Performers</Link>
      </div>
      <div>
        <Link to="/route3">Good Guys</Link>
      </div>
      <div>
        <Link to="/Login">Login</Link>
      </div>
      <div>
        <Link to="/Sign_Up">Sign Up</Link>
      </div>
    </div>
  </div>
);


export default Header;
