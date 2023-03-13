// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Footer = ({ isLogged }) => (
  <footer className="footer">
    <div>
      <Link to="/team" className="footer__content-team">L'équipe</Link>
      <span> - </span>
    </div>
    {isLogged && (
    <div>
      <Link to="/coachs" className="footer__content-coachs">Les coachs</Link>
      <span> - </span>
    </div>
    )}
    <Link to="/legal-notice" className="footer__content-legalNotice">Mentions légales</Link>
  </footer>
);

// == Props Validation
/*
Footer.propTypes = {
  isLogged: PropTypes.string.isRequired,
};
*/

// == Export
export default Footer;
