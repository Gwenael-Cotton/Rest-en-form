import React, { useEffect } from 'react';
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
      <a href="https://github.com/" className="dashboard-link">Voir les adhérents </a>
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
