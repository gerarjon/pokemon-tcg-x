import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">Pokemon TCG X</Link>
      </div>

      <div id="navbar-menu" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to='/'>
            Home
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/">Sets</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;