import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useSelector } from 'react-redux';

const Header = () => {
  const reserveSize = useSelector((state) => state.reserve.length);
  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo do projeto" />
      </Link>
      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas Reservas</strong>
          <span>{reserveSize} reservas</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
