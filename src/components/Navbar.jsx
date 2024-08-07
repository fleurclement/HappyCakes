import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: 'red', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/contact">Contacto</Link>
      </div>
      <div>
        Happy Cake 🍰
      </div>
    </nav>
  );
};

export default Navbar;
