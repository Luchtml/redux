import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className="container">
      <Link to='/'>
        <img className="logo" src={logo} alt='Logo do projeto'/>
      </Link>
      <Link className='reserva' to='/reservas'>
        <strong>Minhas Reservas</strong>
        <span>3 Reservas</span>
      </Link>
    </header>
  );
};

export default Header;
