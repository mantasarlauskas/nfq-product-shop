import React from 'react';
import { NavLink  } from 'react-router-dom';

export default ({ onChange, currentOrderLength }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button 
      className="navbar-toggler" 
      type="button" 
      data-toggle="collapse"
      data-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" onClick={onChange} exact={true} activeClassName="active" to="/">
            Produktai
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" onClick={onChange} exact={true} activeClassName="active" to="/order">
            Einamasis užsakymas
            { currentOrderLength > 0 && <span className="badge badge-danger align-top ml-1">{ currentOrderLength }</span> }
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" onClick={onChange} activeClassName="active" to="/orders">
            Visi užsakymai
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);