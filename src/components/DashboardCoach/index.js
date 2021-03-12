import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import NextBookings from './nextBookings';
import LastBookings from './lastBookings';
import './styles.scss';

const DashboardCoach = ({
  getNextBookings, getLastBookings, nextBookingsArray, lastBookingsArray,
}) => {
  useEffect(getNextBookings, []);
  useEffect(getLastBookings, []);
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <NextBookings nextBookingsArray={nextBookingsArray} />
        <LastBookings lastBookingsArray={lastBookingsArray} />
      </div>
      <Link to="/members" className="dashboard-link">Voir les adhérents </Link>
    </div>
  );
};

DashboardCoach.propTypes = {
  nextBookingsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      memberFirstname: PropTypes.string.isRequired,
    }),
  ).isRequired,
  lastBookingsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      memberFirstname: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DashboardCoach;
