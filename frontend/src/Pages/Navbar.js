import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="App-navigation ">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container">
          <NavLink className="navbar-brand">Navbar</NavLink>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="btn btn-outline-light" to="/exercise/add">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}
