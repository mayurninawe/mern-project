import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const auth = localStorage.getItem("user");
  console.log(auth);
  const Navigateto = useNavigate();
  const logoutEvt = () => {
    localStorage.clear();
    Navigateto("/signup");
  };
  return (
    <div className="Header-Nav">
      <ul className="nav-ul">
        {auth ? (
          <li className="privateControl">
            <Link to="/">Home</Link>
            <Link to="/exercise/add">Add User</Link>
            <Link to="/signup" onClick={logoutEvt}>
              Logout
            </Link>
          </li>
        ) : (
          <li className="publicControl">
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
