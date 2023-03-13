import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './logo_small_dark.png';
import './styles.scss';

const Header = ({ isLogged, onClickLogout, role }) => (
  <header className="header">
    <img className="header__logo" src={logo} alt="Logo REST'enforme" />

    {role === 'MEMBER' && (
      <nav className="header__nav">
        <div className="header__nav-wrapper">
          <input
            id="checkbox"
            type="checkbox"
            className="checkbox"
          />
          <label className="toggle" htmlFor="checkbox">&equiv; Menu</label>
          <ul className="menu">
            <li className="menu-item">
              <NavLink
                to="/dashboard-member"
                exact
                className="link"
                activeClassName="link--active"
              >
                Tableau de bord
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/coachings"
                exact
                className="link"
                activeClassName="link--active"
              >
                Coachings
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/workout"
                exact
                className="link"
                activeClassName="link--active"
              >
                Entraînements
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )}

    {role === 'COACH' && (
      <nav className="header__nav">
        <div className="header__nav-wrapper">
          <input
            id="checkbox"
            type="checkbox"
            className="checkbox"
          />
          <label className="toggle" htmlFor="checkbox">&equiv; Menu</label>
          <ul className="menu">
            <li className="menu-item">
              <NavLink
                to="/dashboard-coach"
                exact
                className="link"
                activeClassName="link--active"
              >
                Tableau de bord
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/members"
                exact
                className="link"
                activeClassName="link--active"
              >
                Liste des adhérents
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )}
    
    {role === 'OWNER' && (
      <nav className="header__nav">
        <div className="header__nav-wrapper">
          <input
            id="checkbox"
            type="checkbox"
            className="checkbox"
          />
          <label className="toggle" htmlFor="checkbox">&equiv; Menu</label>
          <ul className="menu">
            <li className="menu-item">
              <NavLink
                to="/dashboard-manager"
                exact
                className="link"
                activeClassName="link--active"
              >
                Tableau de bord
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/members"
                exact
                className="link"
                activeClassName="link--active"
              >
                Les adhérents
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/coachs"
                exact
                className="link"
                activeClassName="link--active"
              >
                Les coachs
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )}

    {isLogged && (
      <div className="header__logout">
        <button
          className="header__logout-button"
          type="submit"
          onClick={onClickLogout}
        >
          déconnexion
        </button>
      </div>
    )}

  </header>
);

// == Props Validation
Header.propTypes = {
  isLogged: PropTypes.bool,
  onClickLogout: PropTypes.func.isRequired,
};

// Header.propTypes = {};
export default Header;
