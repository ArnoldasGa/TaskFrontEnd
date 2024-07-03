import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  const isLoggedIn = () => localStorage.getItem("Token") !== null;
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("Token");
    navigate("/login");
    window.location.reload();
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <h1>
              <Link to="/">Home</Link>
            </h1>
          </li>
          <div className="logins">
            {isLoggedIn() ? (
              <Fragment>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <a href="#" onClick={Logout}>
                    Log out
                  </a>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </Fragment>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
