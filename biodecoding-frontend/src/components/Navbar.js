import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">Biodecodificación</Link>
        </div>
        <div className="navbar-menu">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/signup">Inscribirse</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <button className="cta-button"><Link to="/signup">Regístrate Ahora</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
